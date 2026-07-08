# Opus Review: Docker - Basics

- Date (KST): 2026-07-08 09:13:27 KST
- Source: `/Users/sirius/sangjun-sim.github.io/_posts/2026-05-20-programming-docker-basiscs.md`
- Claude app/model: Claude desktop app, Opus 4.8 높음
- Prompt template: `/Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md`
- Source handling: Markdown source file uploaded directly to Claude.app; source body was not pasted inline.

---

# Technical Review — "Docker - Basics"

**Reviewer role:** professional physicist / systems reviewer (physics-cs-tutor review style)
**Author:** Sangjun
**Source:** `2026-05-20-programming-docker-basiscs.md`
**Date of review:** 2026-07-08

---

## 0. Scope note

The requested review priorities were phrased for a physics manuscript (physics correctness, derivations, mathematical errors). This post contains **no physics content** — it is a systems/CS tutorial on Docker. I have therefore mapped the same rigor onto the appropriate axes: **conceptual correctness** (the container model, volumes vs. bind mounts), **command correctness** (does the shown command actually run?), **notation** (shell-literal fidelity), and **security correctness**. Every command below was checked against Docker's documented behavior; where I was not certain I searched and cited the source (see §6).

Overall: the post is a useful personal cheat-sheet and most commands are directionally correct. But there are **two conceptual errors**, **two commands that will not run as written**, and **one security anti-pattern** that should be fixed before this is used as a reference by others.

---

## 1. Fractionalizing the article

The post is a linear recipe. Its implicit claims, which are what a review must test, are:

- (a) You pull an `amd64` Ubuntu image on an Apple-Silicon (arm64) Mac. — *mostly fine, ordering nit*
- (b) Host↔container file sharing on macOS is done via a **"docker volume."** — **conceptual error (it is a bind mount).**
- (c) `docker container ls` confirms the container/mount was created. — *incomplete.*
- (d) A user is added, then re-entered via `docker exec -u '<user>'`. — **breaks: smart quotes.**
- (e) A stopped container is restarted with `docker start (unpaused) <name>`. — **breaks: `(unpaused)` is not syntax.**
- (f) A permission error is fixed with `chmod 666 /var/run/docker.sock`. — **security anti-pattern + wording error.**
- (g) `export`/`import` vs `save`/`load` do different things. — *correct idea, under-specified consequence.*

---

## 2. Conceptual issues (highest priority)

### 2.1 "docker volume" vs. bind mount — misconception

> "In a Mac OS environment, we need `docker volume` that functions as the shared folder … We create a folder in the local machine, and copy the folder name."
> Then: `-v <local directory>:<container directory>`

The mechanism the post actually uses — `-v /absolute/host/path:/container/path` — is a **bind mount**, *not* a Docker **volume**. These are distinct Docker concepts and the distinction is the whole point of this section:

- A **bind mount** maps a specific, user-chosen host directory into the container. The host path must exist and is fully under your control. This is what you want for "share *my* folder with the container." (This is what the `-v host:container` form does.)
- A **named volume** (`docker volume create data`, then `-v data:/container/path`) is storage **managed by Docker** in Docker's own area (on macOS, inside the Docker Desktop VM — *not* a folder you can `cd` into on the Mac). You do not choose its host location, and `pwd` has nothing to do with it.

So the sentence "we need docker volume … copy the folder name by using `pwd`" mixes the two. On macOS specifically the practical consequence matters: a named volume lives inside the Linux VM and is **not** visible as a normal Mac folder, so it would *not* behave as the "shared folder" the post promises.

**Drop-in correction:**

```markdown
## Create a shared folder (bind mount)
On macOS, host↔container file sharing is done with a **bind mount**: you map an
absolute host path into the container. (This is different from a named Docker
*volume*, which Docker stores inside its own VM and is not a plain Mac folder.)

Create the folder on the host, then get its absolute path:

    $ pwd    # prints the FULL absolute path, e.g. /Users/sangjun/dockershare

Use that full path (not just the folder name) on the left side of `-v` below.
```

Note the wording "copy the folder **name**": `pwd` prints the **full absolute path**, and the bind mount requires that full path, not just the trailing folder name. Fix the wording to avoid a reader pasting only `dockershare`.

### 2.2 The docker-socket permission fix is mis-scoped

> "If there is an access error, modify the authorization of the corresponding group to `666`. `$ chmod 666 /var/run/docker.sock`"

Two problems:

1. **Wording:** `666` is not a *group* permission — it is the **full mode** (`rw-` for owner, group, **and world**). Saying "the corresponding group to 666" is incorrect terminology.
2. **Scope:** this error and fix only arise when you are trying to talk to the Docker daemon **from inside a container** (i.e. you bind-mounted `docker.sock` for docker-in-docker). It is unrelated to the ordinary `docker exec -u <user>` access issues discussed just above it, so its placement is confusing. See §2.3 for why the value `666` is also dangerous.

### 2.3 `chmod 666 docker.sock` — security anti-pattern (flag strongly)

Access to `/var/run/docker.sock` is **equivalent to root on the host**: anyone who can write to that socket can start a container that mounts the host filesystem and thereby gain full control. Setting it `666` makes it **world-writable**, i.e. *every* local user/process gets root-equivalent power. This is a well-documented critical risk, acceptable only on a disposable throwaway VM, never on a shared or production host. ([Docker permission-denied guidance][sock1], [Hostinger][sock2])

**Recommended replacement** — use group membership instead of loosening the socket:

```bash
# On the host: add your user to the `docker` group (grants selective access),
# then start a new login session.
$ sudo usermod -aG docker "$USER"
$ newgrp docker      # or log out/in
```

If you keep the `chmod` line at all, add an explicit warning that it is a last-resort dev-only hack.

---

## 3. Commands that will not run as written (high priority)

### 3.1 Smart quotes in `docker exec -u` (lines 84, 90)

```bash
$ docker exec -it -u ‘<username>’ <docker name> /bin/bash
```

The quotes around `<username>` are **typographic “curly” quotes** (`‘` U+2018 / `’` U+2019), not ASCII apostrophes. A shell treats them as literal characters, so the username becomes `‘alice’` (including the curly marks) and the command fails with "unknown user." This is a real, copy-paste-breaking bug and it appears **twice**.

**Fix:** remove the quotes entirely (a username has no spaces, so none are needed):

```bash
$ docker exec -it -u <username> <docker-name> /bin/bash
$ docker exec -it -u <username> <docker-name> bash -c "cd ~ && exec bash"
```

If your Markdown editor auto-converts straight quotes to curly ones, disable "smart quotes" for fenced code blocks, or verify the raw bytes.

### 3.2 `docker start (unpaused) <docker name>` — `(unpaused)` is not syntax

```bash
$ docker start (unpaused) <docker name>
```

There is no `(unpaused)` token in Docker. To restart a **stopped** container:

```bash
$ docker start <docker-name>
```

Separately, note the two states are different concepts and should not be conflated:

- **Stopped** container (`docker stop`) → restart with `docker start`.
- **Paused** container (`docker pause`, processes frozen with `SIGSTOP`) → resume with `docker unpause`.

The word "unpaused" seems to be a leftover note about the *paused* case; if you meant that, it is `docker unpause <name>`, and it applies only to a paused (not stopped) container.

---

## 4. Correct-but-improvable (medium priority)

### 4.1 `--platform` flag ordering

```bash
$ docker pull ubuntu:22.04 --platform=linux/amd64
```

The **documented** form places the flag **before** the image reference: `docker pull --platform=linux/amd64 ubuntu:22.04`. ([Docker Docs / DataCamp][plat1]) Docker's CLI parser usually tolerates flags placed after the positional argument, so your ordering may work, but the canonical order is safer and matches every reference. Recommend switching to:

```bash
$ docker pull --platform=linux/amd64 ubuntu:22.04
```

Your surrounding explanation is correct: on an Apple-Silicon Mac the default pull is `linux/arm64`, and `--platform=linux/amd64` overrides it. (Be aware of a known caveat: on some Docker Desktop/macOS versions `--platform` has silently fallen back to the "wrong" arch when a manifest is cached — worth a one-line "verify with `docker image inspect --format '{{.Architecture}}' ubuntu:22.04`" note. ([openfga issue][plat2]))

### 4.2 Verifying the container / mount

> "enter the following command to verify if it is registered in the list: `$ docker container ls`"

`docker container ls` lists only **running** containers. If you want to confirm a container exists (including exited ones) use `docker container ls -a`. And to verify the **mount** actually attached — which is what this section is really about — `ls` shows nothing useful; use:

```bash
$ docker inspect -f '{{ json .Mounts }}' <docker-name>
```

### 4.3 export/import consequence is under-stated

> "`export` saves the whole root file system, while `save` saves the layer structure on top of that."

The distinction is correct but the *practical consequence* is the part a reader needs:

- `docker export` (container → tar) **flattens to a single layer and discards image metadata** — history, `CMD`, `ENV`, `ENTRYPOINT`, `WORKDIR`, exposed ports. After `docker import`, you must **re-specify** anything you relied on (e.g. `import ... --change 'CMD ["/bin/bash"]'`), or the resulting image won't run the way the original did.
- `docker save`/`docker load` (image → tar) **preserve all layers and metadata** — use these when you want an exact, runnable copy of an *image*.

Minor consistency nit: the export line writes `<file name>.tar` but the import line reads `<file name>` (no extension). Make them match:

```bash
$ docker export <container> > backup.tar
$ docker import backup.tar <image>:<tag>
```

### 4.4 "initial root password … is set by `passwd`"

Small precision point: a base Ubuntu image has **no** root password (root login is simply enabled inside the container). `passwd` *creates/sets* one; it does not reveal a pre-existing "initial" password. Reword to "Set a root password with `passwd`."

---

## 5. Minor / notation

- Line 46: "a folder is automatically made when the Docker container is created" — true (the container-side mount point is auto-created), but phrase it as "the *container-side* directory is created as the mount point," to avoid implying a host folder is created.
- `-e DISPLAY=host.docker.internal:0` (line 42) silently assumes XQuartz is installed **and** "Allow connections from network clients" is enabled, plus `xhost +` — worth a one-line prerequisite note, otherwise GUI apps fail with `cannot open display`.
- Prompt style: you mix `$` prompts with commands a reader will copy. Consider dropping the leading `$` in copy-paste blocks so readers don't paste the `$`.
- Title/filename typo: `basiscs` → `basics` (in the source filename).

---

## 6. Sources checked

- `--platform` flag placement / behavior: [Docker Pull tutorial (DataCamp)][plat1]; known macOS arch fallback caveat: [openfga/openfga #2073][plat2], [docker/for-mac #5625][plat3].
- `docker.sock` = root-equivalent, `666` is unsafe, prefer `docker` group: [DigitalOcean permission-denied fix][sock1], [Hostinger Docker permission guide][sock2].
- Canonical Docker concepts (bind mount vs. volume; export/import vs save/load; pause/unpause vs stop/start) are standard and consistent with the official Docker CLI reference (`docs.docker.com/reference/cli/docker`).

[plat1]: https://www.datacamp.com/tutorial/docker-pull
[plat2]: https://github.com/openfga/openfga/issues/2073
[plat3]: https://github.com/docker/for-mac/issues/5625
[sock1]: https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket
[sock2]: https://www.hostinger.com/tutorials/how-to-fix-docker-permission-denied-error

---

## 7. Priority checklist

| # | Priority | Location | Issue | Fix |
|---|----------|----------|-------|-----|
| 1 | 🔴 High (conceptual) | §"Create a shared folder" | Calls a **bind mount** a "docker volume"; `pwd` ≠ folder name | Rename to bind mount; use full absolute path; clarify volume ≠ Mac folder |
| 2 | 🔴 High (breaks) | lines 84, 90 | **Curly quotes** `‘ ’` around username → command fails | Remove quotes: `-u <username>` |
| 3 | 🔴 High (breaks) | line 96 | `docker start (unpaused) <name>` — invalid token | `docker start <name>`; separately `docker unpause` for paused |
| 4 | 🔴 High (security) | line 102 | `chmod 666 docker.sock` = world root access; "group to 666" wording wrong | Use `usermod -aG docker $USER`; warn if kept |
| 5 | 🟡 Medium | line 23 | `--platform` after image (nonstandard order) | Put `--platform=linux/amd64` before image |
| 6 | 🟡 Medium | line 118 | export/import consequence understated (loses metadata/single layer) | Note metadata loss; `--change` on import; use save/load for exact copy |
| 7 | 🟡 Medium | line 49 | `docker container ls` misses stopped containers / doesn't verify mount | `ls -a`; `docker inspect -f '{{json .Mounts}}'` |
| 8 | 🟢 Low | line 67 | "initial root password" implies one pre-exists | "Set a root password with `passwd`" |
| 9 | 🟢 Low | lines 42, 46, 115 | X11 prereqs unstated; import filename lacks `.tar`; mount-point wording | Add XQuartz note; match `.tar`; clarify container-side dir |

---

## 8. Questions to push the author's understanding (physics-cs-tutor style)

**[Level 1 — Comprehension]**
- In your own words: why does a *named volume* on macOS not show up as a folder you can open in Finder, while your `-v /Users/...:/...` bind mount does?

**[Level 2 — Assumption Challenge]**
- You pull `linux/amd64` on an arm64 Mac. What is actually executing those x86-64 instructions, and what is the performance cost? What would break if you dropped `--platform` entirely?
- If `docker export | docker import` "works," why might the resulting image fail to start the same way the original container did?

**[Level 3 — Structural / Generalization]**
- `chmod 666 docker.sock` fixes a symptom. What is the underlying trust model that makes the Docker socket root-equivalent, and why is "add user to `docker` group" only marginally safer in principle (both grant root-equivalent power)?
- Bind mounts, named volumes, and `tmpfs` mounts are three points on one design axis. What is the axis (who owns the storage, and where does it live)?

**[Level 4 — Cross-Domain]** *(⚠️ Advanced)*
- Containers are isolation via Linux namespaces + cgroups, not virtualization. Given that, why does an Apple-Silicon Mac still need a *full Linux VM* under Docker Desktop, and where exactly does your bind-mounted Mac folder cross the VM boundary?
