# Opus Review: Android Debug Bridge

- Date/time KST: 2026-07-10 09:18:03 KST
- Source file path: _posts/2026-05-21-programming-android-adb.md
- Model/app used: Claude.app, visible model `Opus 4.8 최대`
- Prompt template path: /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md
- Source handling: source Markdown was uploaded directly to Claude.app as an attached `.md` file; the full source body was not pasted inline.
- Retrieval note: Claude produced the review as a Markdown artifact/download; the body below is the extracted artifact content.

---

---
title: "Technical Review — Android Debug Bridge"
reviewer: physics-cs-tutor style (adapted for a tooling how-to)
target: _posts/2026-05-21-programming-android-adb.md
date: 2026-07-10
---

# Technical Review — "Android Debug Bridge"

## Scope note (read this first)

The review brief asks me to prioritize *physics correctness, misconceptions,
derivation gaps, notation, and mathematical errors*. I have to be honest about a
mismatch: **this post contains no physics and no mathematics.** There are no
equations, no derivations, and no physical claims to check. So the physics-specific
half of the review lens has no target here — not because the post is flawless, but
because there is nothing physical to be right or wrong about.

The `physics-cs-tutor` skill also covers **computer science / systems**, and that is
where its two load-bearing principles — *stay within the limit of knowledge* and
*sources matter* — genuinely apply. So I reviewed the post as a CS/tooling how-to,
checking: command correctness, **reproducibility** (does a reader who pastes this
literally get the stated result?), **platform consistency** (the post declares a
macOS audience), and factual claims that need source-checking.

> **A first critical question for you, before the findings:** is
> `physics-cs-tutor` even the right review style for a pure shell how-to? Its
> value-add (fractionalizing derivations, catching sign/notation errors in math) is
> mostly inert here. A "shell/reproducibility" review lens would have caught the same
> issues faster. Worth deciding deliberately which of your posts get which reviewer.

---

## Step 1 — Fractionalizing the post

Operationally, the post makes a chain of ~6 claim-clusters. A reader will actually
*run* each of these, so each is a testable assertion:

1. **Install** — `brew install scrcpy`, `brew install android-platform-tools`.
2. **Device discovery** — `adb devices`, `adb get-serialno`, `scrcpy --serial ...`.
3. **App control** — `am start -n <component>`, `am force-stop <pkg>`, `input tap x y`.
4. **Package lookup** — `pm list packages | findstr/grep`, `dumpsys window | grep ...`.
5. **Screenshot** — `adb shell screencap -p > screenshot.png`.
6. **Environment setup** — developer options, USB debugging, pointer location.

I grade below by *severity*, defined operationally: **High** = a literal copy-paste
produces wrong or corrupted output; **Medium** = works only on some setups / is
fragile or imprecise; **Low** = polish, labeling, and enrichment.

---

## Findings

### 🔴 High — literal copy-paste fails or silently corrupts output

#### H1 — `screencap` redirect can produce a corrupted PNG; use `exec-out`

The post's final command is:

```shell
$ adb shell screencap -p > screenshot.png
```

**Why this is fragile.** `adb shell` runs the remote command through the shell
transport, which can allocate a pseudo-terminal (pty). A pty performs end-of-line
translation, converting every `LF` (`0x0A`) into `CR`+`LF` (`0x0D 0x0A`). That is
harmless for text, but `screencap -p` emits a **binary PNG** on stdout — so every
`0x0A` byte inside the image gets a spurious `0x0D` inserted before it, and the file
no longer decodes as a valid PNG. This failure is well documented; a hex dump of the
bad file differs from the good one exactly at the byte where `0d` replaces `0a`.

The robust, portable form uses `exec-out`, which streams stdout **without** a pty and
therefore leaves the binary untouched:

```shell
# Robust: no pty, no LF→CRLF mangling. Requires adb shell protocol v2 (Android 5.0+).
$ adb exec-out screencap -p > screenshot.png
```

An always-safe fallback (capture on device, then pull) avoids the stream entirely:

```shell
$ adb shell screencap -p /sdcard/screen.png
$ adb pull /sdcard/screen.png .
$ adb shell rm /sdcard/screen.png
```

**Honesty caveat:** whether the *bare* `adb shell` form corrupts the file depends on
your adb version and whether a pty is actually allocated for a command-with-argument.
On some modern setups it happens to work. But the corruption is real and has been hit
on macOS specifically, so recommending `exec-out` as the default is the correct call —
it is safe on every platform and adb version.
[Sources: S3, S4, S5, S6]

---

#### H2 — `findstr` is a Windows command in a macOS-only post

The post explicitly targets macOS ("assuming you are a Mac user"), but this line uses
`findstr`:

```shell
$ adb shell pm list packages | findstr "android"
```

`findstr` is a **Windows `cmd.exe`** built-in. On macOS/Linux there is no `findstr`, so
this pipes into a non-existent command and returns `findstr: command not found`. The
fix is `grep`:

```shell
$ adb shell pm list packages | grep "android"
```

This is an **internal inconsistency**, not just a portability slip: two code blocks
later the post *correctly* uses `grep` (`... | grep "google"`). So the post already
"knows" the right tool — H2 is almost certainly a paste from a Windows guide that
wasn't reconciled with the macOS framing. (If you want the post to serve both OSes,
say so explicitly and give both, rather than mixing them silently.)

---

### 🟡 Medium — works only sometimes / fragile / imprecise

#### M1 — `android-platform-tools` is a **cask**; use `--cask`

The post writes:

```shell
$ brew install android-platform-tools
```

On Homebrew, `android-platform-tools` is distributed as a **cask**, and the canonical
command is:

```shell
$ brew install --cask android-platform-tools
```

Current Homebrew *may* auto-resolve the bare token to the cask, so this often works in
practice — but that auto-detection is version-dependent and not guaranteed. The
official Homebrew formula index and the upstream `scrcpy` macOS docs both use the
explicit `--cask` form, so use it for robustness and forward-compatibility.
[Sources: S1, S2]

> **Point in the post's favor (verified):** installing `scrcpy` and
> `android-platform-tools` as **two separate steps is correct**. The `scrcpy` Homebrew
> *formula* depends on `ffmpeg`, `libusb`, and `sdl2` — **not** on
> `android-platform-tools` — so `scrcpy` does *not* pull in `adb`. Upstream docs say
> outright that you must install adb separately. So do not "simplify" this to a single
> `brew install`. [Sources: S1, S2]

---

#### M2 — Placeholder notation `$(...)` is executable shell syntax

The post uses several placeholder conventions, and they collide with real shell
semantics:

```shell
$ scrcpy --serial ($number)
$ adb -s $(serial number) shell am start -n ...
$ adb shell input tap $(x position) $(y position)
```

In `bash`/`zsh`, `$(...)` is **command substitution**: `$(serial number)` runs a
command named `serial` with argument `number`, captures its stdout, and substitutes
the result. A reader who pastes `$(serial number)` literally does not get a prompt to
fill in a value — they get `serial: command not found`, and in a pathological case
they execute *whatever the substituted text happens to be*. The `($number)` form is
also inconsistent with the `$(...)` form used elsewhere.

Use a placeholder convention that cannot be mistaken for syntax — angle brackets are
the standard:

```shell
$ scrcpy --serial <serial_number>
$ adb -s <serial_number> shell am start -n ...
$ adb shell input tap <x> <y>
```

This is the tooling analogue of a **notation error**: the symbol you chose already has
a binding meaning in the language, so it silently means something other than "fill me
in." Worth a global find-and-replace across the post.

---

#### M3 — The explicit Chrome launcher component is fragile / unverifiable

```shell
$ adb -s <serial> shell am start -n com.android.chrome/com.google.android.apps.chrome.Main
```

The package `com.android.chrome` is correct. The **activity** `...chrome.Main` has
historically been an `activity-alias` for Chrome's launcher activity, and this form is
widely copied — but I **cannot verify from here** that it is still the valid launcher
alias in the current Chrome build, and hardcoded activity names do change across app
updates. Rather than assert it, I'd recommend the version-independent launch, which
resolves the launcher activity for you:

```shell
# Launch via the LAUNCHER intent — no need to know the activity name
$ adb -s <serial> shell monkey -p com.android.chrome -c android.intent.category.LAUNCHER 1
```

Or resolve the component explicitly and feed it to `am start`:

```shell
$ adb -s <serial> shell cmd package resolve-activity --brief com.android.chrome | tail -n 1
# → prints the component; pass that to: adb ... shell am start -n <component>
```

I'm flagging this as *verify-or-replace*, not as a confirmed error. If you keep the
explicit component, add a one-line note that it may break across Chrome versions.

---

### 🟢 Low — precision, labeling, and enrichment

- **L1 — "Phone information" label.** The path given is
  `Phone information` → `Software information` → tap *Build number*. On most current
  Samsung One UI builds the top-level entry is labeled **"About phone"** (the exact
  wording varies by model and One UI version, so I won't be categorical). Consider
  "About phone (labeled 'Phone information' on some models)".

- **L2 — "7 times" is correct — and you can answer your own aside.** You wrote "I don't
  know why it is 7 times." The 7-tap gate on *Build number* is standard **AOSP**
  behavior (since Android 4.2 / Jelly Bean), inherited by essentially every Android
  vendor — it is not a Samsung quirk. It's a deliberate friction gate so ordinary users
  don't stumble into developer options; the OS even shows a "You are now N steps away
  from being a developer" countdown after the first few taps. So the "7" is right, and
  the "why" is: it's an intentional AOSP easter-egg gate, not a magic number. (A stray
  guide online says "5 times" — that's simply wrong for stock Android.)

- **L3 — `math: true` front-matter is unused.** The front matter sets `math: true`
  (which loads the MathJax pipeline in Chirpy), but the post has no LaTeX. Harmless, but
  it's dead configuration — drop it unless you plan to add math.

- **L4 — Optional polish on `pm list packages`.** Output lines are prefixed with
  `package:` (e.g. `package:com.android.chrome`). If you want just the names, pipe
  through `sed 's/^package://'`. Not an error — just a nicety if a reader wants clean
  output.

---

## Drop-in correction blocks

Collected here so you can splice them in without hunting through the text.

**Install (M1):**
```shell
$ brew install scrcpy
$ brew install --cask android-platform-tools   # adb is a cask; scrcpy does NOT pull it in
```

**Package filter, macOS (H2):**
```shell
$ adb shell pm list packages | grep "android"
```

**Placeholders, everywhere (M2):**
```shell
$ scrcpy --serial <serial_number>
$ adb -s <serial_number> shell am force-stop com.android.youtube
$ adb shell input tap <x> <y>
```

**Launch an app robustly (M3):**
```shell
$ adb -s <serial_number> shell monkey -p com.android.chrome -c android.intent.category.LAUNCHER 1
```

**Screenshot to PC (H1):**
```shell
$ adb exec-out screencap -p > screenshot.png      # preferred: no pty, no CRLF corruption
# Always-safe fallback:
$ adb shell screencap -p /sdcard/screen.png && adb pull /sdcard/screen.png . && adb shell rm /sdcard/screen.png
```

---

## Priority checklist (compact)

- [ ] **H1** Replace `adb shell screencap -p > file.png` with `adb exec-out screencap -p > file.png` (+ note the pty/CRLF reason).
- [ ] **H2** Replace `findstr` with `grep` (macOS post); or explicitly serve both OSes.
- [ ] **M1** `brew install android-platform-tools` → `brew install --cask android-platform-tools`.
- [ ] **M2** Global replace `$(placeholder)` / `($placeholder)` → `<placeholder>`; unify the convention.
- [ ] **M3** Prefer `monkey ... LAUNCHER` for launching, or verify `...chrome.Main` on a current device and add a "may change" caveat.
- [ ] **L1** Soften "Phone information" → note it's "About phone" on many One UI versions.
- [ ] **L2** Add one line explaining the 7-tap gate is standard AOSP behavior (removes the "I don't know why").
- [ ] **L3** Remove unused `math: true` from front matter.
- [ ] **L4** (optional) `sed 's/^package://'` to clean `pm list packages` output.

---

## Sources

- **S1** — Homebrew formula index, `scrcpy` (dependencies; note that adb must be
  installed separately): https://formulae.brew.sh/formula/scrcpy
- **S2** — scrcpy upstream macOS install docs (`brew install scrcpy`, then
  `brew install --cask android-platform-tools`):
  https://github.com/Genymobile/scrcpy/blob/master/doc/macos.md
- **S3** — jadb issue #154, "screencap generating corrupted PNG," shows the `0d`-for-`0a`
  byte difference and the `exec-out` fix: https://github.com/vidstige/jadb/issues/154
- **S4** — Repeato, capturing binary screen data via ADB (`exec-out` avoids the pty that
  corrupts binary data): https://www.repeato.app/efficiently-capturing-screenshots-on-android-devices-via-adb/
- **S5** — Shvetsov blog, macOS/OS X account of the `adb shell screencap -p >` corruption
  and the LF→CR+LF explanation:
  https://blog.shvetsov.com/2013/02/grab-android-screenshot-to-computer-via.html
- **S6** — lana-20/adb-shell-screencap, the `exec-out` one-liner "works on macOS and
  Windows": https://github.com/lana-20/adb-shell-screencap
- Homebrew cask index page for `android-platform-tools` (confirms it is a cask):
  https://formulae.brew.sh/cask/android-platform-tools

(All source-checking above is limited to the install/screenshot mechanics. The
developer-options "7 taps" claim is standard AOSP behavior; I did not add a separate
citation for it, and if you want one, the Android developer-options documentation is the
primary source — flagging that I'm relying on well-known behavior rather than a
freshly-fetched page.)

---

## Questions to push further (leveled)

**[Level 1 — Comprehension]**
- Restate in one sentence *why* `exec-out` fixes H1 but `adb shell` doesn't. (Hint: what
  does a pty do to `0x0A`, and does `exec-out` allocate one?)

**[Level 2 — Assumption Challenge]**
- Every unqualified command in the post (`adb devices`-style, `adb shell ...` with no
  `-s`) silently assumes **exactly one** connected device. What happens to
  `adb shell input tap <x> <y>` when two devices are attached — does it error, or pick
  one? Which one? (This is the failure mode most likely to confuse a reader who later
  plugs in a second phone or an emulator.)

**[Level 3 — Structural / Generalization]**
- `input tap <x> <y>` uses absolute pixel coordinates read off "Pointer location." That
  couples the command to a specific screen resolution *and* density. What is the more
  robust abstraction for "tap this button" that survives a resolution change — and what
  extra tool/step does it cost you? (Think: dumping the view hierarchy and addressing an
  element by resource-id or content-desc rather than by pixel.)

**[Level 4 — Cross-Domain] (⚠️ Advanced)**
- H1 is a specific instance of a general problem: **transmitting arbitrary binary over a
  channel that was designed to be "text" and quietly rewrites control bytes.** Name two
  other places you've hit the *same* class of bug and how each is solved. (Candidates:
  Git's `core.autocrlf` mangling line endings; email/MIME needing Base64 to survive
  7-bit-clean SMTP; terminal escape sequences corrupting `cat`'d binaries.) Is there a
  single unifying principle — e.g. "never send binary in-band over a text-normalizing
  transport; either escape/encode it or open a transparent channel" — and does
  `exec-out` implement the "transparent channel" half or the "encode it" half?
