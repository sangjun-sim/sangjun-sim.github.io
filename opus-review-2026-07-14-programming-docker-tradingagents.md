# Opus Review: Docker - TradingAgents

- Date/time (KST): 2026-07-14 09:41:25 KST
- Source file: /Users/sirius/sangjun-sim.github.io/_posts/2026-05-21-programming-docker-tradingagents.md
- Source file (relative): _posts/2026-05-21-programming-docker-tradingagents.md
- Claude route used: Claude web (Safari)
- Visible Claude model: Opus 4.8 최대
- Fallback reason: Claude.app model selector did not open after app relaunch and fresh-chat retry; visible model remained Sonnet 5 중간. Used Claude web fallback after verifying visible Opus and file attachment.
- Prompt template: /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md
- Workflow followed: /Users/sirius/.openclaw/workspace/AI File Review Workflow.md
- Source handling: The source Markdown file was uploaded directly to the verified Claude route; the Markdown body was not pasted inline.
- Extraction: Copied from the normal Claude chat message body between the required Opus review markers; no artifact, canvas, attachment, downloadable file, or separate document was used.

---

# Technical Review — "Docker - TradingAgents" (2026-05-21)

**Reviewer note on scope.** Your review template is written for physics posts. This one is a systems post, so I've mapped the usual axes onto their systems analogues: *physics correctness* → does the described mechanism actually exist in the software; *derivation gaps* → steps the reader cannot reproduce from what's written; *notation* → names of env vars, containers, paths; *mathematical errors* → factually wrong strings that will not work when typed. The standard of proof is the same: I did not trust memory, I checked the source.

---

## Step 0 — Verification method (so you can audit me)

I cloned `TauricResearch/TradingAgents` and inspected:

| What | Where |
|---|---|
| HEAD at time of review | `01477f9` — "chore: release v0.3.1", 2026-07-05 |
| Commit closest to your post date | `61522e1`, 2026-05-17 (v0.2.5 era, tagged 2026-05-11) |
| Files read | `docker-compose.yml`, `Dockerfile`, `.env.example`, `pyproject.toml`, `tradingagents/default_config.py`, `tradingagents/reporting.py`, `tradingagents/llm_clients/openai_client.py`, `tradingagents/llm_clients/model_catalog.py`, `cli/main.py`, `cli/utils.py`, `README.md`, `CHANGELOG.md` |
| History searched | `git log -S "OLLAMA_MODEL"`, `git log -S '"LLM_PROVIDER"'` across all refs |

Everything below labelled **[verified]** was checked against that source tree, not inferred.

---

## Step 1 — Fractionalizing the post

The post makes five separable claims. Three are wrong, two are right:

1. *"Clone the repo, `cp .env.example .env`, add three variables."* → **two of the three variables do not exist.**
2. *"`docker compose --profile ollama up -d` starts the backend."* → **correct**, but the post does not say it starts *three* containers, which is the only reason its own later commands work.
3. *"`ollama run <model>` installs the model."* → works, but leaves the reader in an unexplained REPL; also the chosen model isn't in the CLI's catalog.
4. *"`complete_report.md` is saved in `~/.tradingagents/`."* → **wrong**, and wrong in a way that destroys the file.
5. *"Reports are in `~/.tradingagents/logs/<market>/<DATE>/reports/`."* → **correct path, wrong placeholder name.**

**Hidden assumption the post never states:** that the reader's clone directory is literally named `TradingAgents`. Every hardcoded container name in the post depends on this. Compose derives the project name from the base name of the project directory, and the project name prefixes every container. A reader who downloads the ZIP gets `TradingAgents-main/` → project `tradingagents-main` → **every `docker exec` command in the post fails.** This is the single biggest reproducibility hole and it is invisible to you because your directory happens to be named right.

---

## P0 — Wrong. The reader types this and it silently does nothing.

### P0-1. `LLM_PROVIDER` and `OLLAMA_MODEL` are not read by TradingAgents. They never were.

```
LLM_PROVIDER=ollama          # ← no-op
OLLAMA_BASE_URL=...          # ← correct, keep
OLLAMA_MODEL=llama3.1:8b     # ← no-op
```

**[verified]** `tradingagents/default_config.py` contains an explicit allow-list, `_ENV_OVERRIDES`, and it is the *only* env→config mapping in the codebase:

```python
_ENV_OVERRIDES = {
    "TRADINGAGENTS_LLM_PROVIDER":   "llm_provider",
    "TRADINGAGENTS_DEEP_THINK_LLM": "deep_think_llm",
    "TRADINGAGENTS_QUICK_THINK_LLM":"quick_think_llm",
    "TRADINGAGENTS_LLM_BACKEND_URL":"backend_url",
    ...
}
```

- `git log --all -S "OLLAMA_MODEL"` returns **zero commits**. The string has never existed in the repository.
- `git log --all -S '"LLM_PROVIDER"' -- tradingagents/default_config.py` returns **zero commits**. A bare `LLM_PROVIDER` is never read.

I know exactly where you got it, and it's not your fault: at your publication date, upstream's own `docker-compose.yml` shipped `environment: - LLM_PROVIDER=ollama` on the `tradingagents-ollama` service. That was an upstream bug. It was fixed on 2026-06-21 in commit `a420ad0`, whose message says so in as many words:

> *"Docker ollama: use `TRADINGAGENTS_LLM_PROVIDER` + `OLLAMA_BASE_URL`, not a bare `LLM_PROVIDER` the overlay never reads (#975)."*

**Why the post appears to work anyway** (and why you didn't catch it): the CLI is *interactive*. It prompts you for the provider and the model, so you pick "Ollama" and "Custom model ID" by hand, and the dead `.env` lines never matter. A reader who trusts the post and tries an unattended run gets `llm_provider: "openai"` (the default) and a missing-key failure.

**Drop-in replacement for the `.env` block:**

````markdown
Then create the environment file. `.env.example` is a template of API keys; for a
local model you do not need to fill in any of them:

``` shell
$ cp .env.example .env
```

{: .prompt-warning }
> The compose service `tradingagents-ollama` **already** injects
> `TRADINGAGENTS_LLM_PROVIDER=ollama` and `OLLAMA_BASE_URL=http://ollama:11434/v1`
> via its `environment:` block, and `environment:` takes precedence over
> `env_file:`. If you use that service, you do not need to edit `.env` at all.

You only need `.env` if you want an *unattended* run with the model pinned,
skipping the CLI's interactive pickers. The recognized names are the
`TRADINGAGENTS_*` keys in `tradingagents/default_config.py`:

``` shell
# .env
TRADINGAGENTS_LLM_PROVIDER=ollama
TRADINGAGENTS_DEEP_THINK_LLM=qwen3:latest
TRADINGAGENTS_QUICK_THINK_LLM=qwen3:latest
OLLAMA_BASE_URL=http://ollama:11434/v1
```

{: .prompt-danger }
> `LLM_PROVIDER` and `OLLAMA_MODEL` are **not** read by TradingAgents — they never
> have been. Upstream's own compose file carried a dead `LLM_PROVIDER=ollama`
> until commit `a420ad0` (2026-06-21) fixed it. If you copied those names from
> anywhere, delete them.
````

---

### P0-2. `complete_report.md` is **not** saved under `~/.tradingagents/`, and `docker compose down` deletes it.

The post opens §2 with:

> "`TradingAgents` saves the complete report file `complete_report.md` in a `~/.tradingagents/` directory."

**[verified]** This is false. Trace it:

- `cli/main.py:1250` — the save-path *default* is `Path.cwd() / "reports" / f"{ticker}_{timestamp}"`.
- `Dockerfile` — `WORKDIR /home/appuser/app`. So `Path.cwd()` = `/home/appuser/app`.
- `docker-compose.yml` — the only volume is `tradingagents_data:/home/appuser/.tradingagents`.

⇒ `complete_report.md` lands in `/home/appuser/app/reports/<TICKER>_<TIMESTAMP>/` — **the container's writable layer, not the volume.** Your own §1 tells the reader to run `docker compose --profile ollama down`, which removes the container. The complete report is gone.

Two further details the post omits and the reader cannot guess:
- The save is **opt-in**: the CLI prompts `Save report?` (default `Y`) and then `Save path (press Enter for default)`.
- `write_report_tree()` also emits `1_analysts/`, `2_research/`, `3_trading/`, `4_risk/`, `5_portfolio/` subtrees alongside `complete_report.md`.

**What *is* on the volume [verified]:** the per-section streaming reports. `cli/main.py:1021` sets `results_dir = config["results_dir"] / ticker / analysis_date`, and `default_config.py:73` sets `results_dir` to `~/.tradingagents/logs`. So `final_trade_decision.md` genuinely is at `~/.tradingagents/logs/<TICKER>/<DATE>/reports/`. Your §2 second paragraph is correct; your §2 first sentence is not.

**Drop-in replacement for §2:**

````markdown
## Saving Reports

There are two report artifacts, and they land in different places. This trips
people up, so be precise:

**1. Per-section reports (persistent).** As each agent finishes, the CLI streams
its section to `results_dir`, which defaults to `~/.tradingagents/logs/` inside
the container. That directory is the `tradingagents_data` named volume, so it
survives `docker compose down`:

```
/home/appuser/.tradingagents/logs/<TICKER>/<YYYY-MM-DD>/reports/
├── market_report.md
├── sentiment_report.md
├── news_report.md
├── fundamentals_report.md
├── investment_plan.md
├── trader_investment_plan.md
└── final_trade_decision.md
```

**2. `complete_report.md` (ephemeral by default — read this).** At the end of a
run the CLI asks `Save report?` and then offers a default path of
`$(pwd)/reports/<TICKER>_<TIMESTAMP>`. Inside the container `$(pwd)` is
`/home/appuser/app`, which is **not** on any volume.

{: .prompt-danger }
> If you press Enter at the `Save path` prompt, `complete_report.md` is written to
> the container's writable layer and is destroyed by the next
> `docker compose down`. Type a path under the volume instead, e.g.
> `/home/appuser/.tradingagents/reports/NVDA`.

To copy anything out, use `docker compose cp`, which takes a **service** name and
so does not depend on your clone directory's name:

``` shell
$ docker compose cp tradingagents:/home/appuser/.tradingagents/logs ./ta-logs
```
````

Note this replacement also fixes the two `tradingaents` typos (missing `g`) in the original — as written, both commands in §2 fail with `No such container`.

---

## P1 — Not wrong, but the reader will get garbage output and never know why.

### P1-1. Ollama's default context window is 4096 tokens, and it truncates **silently**.

The post never mentions `num_ctx`. This is the most consequential omission in the article.

Ollama's FAQ states that by default it uses a context window of 4096 tokens, overridable with the `OLLAMA_CONTEXT_LENGTH` environment variable. When a conversation, document, or agent loop exceeds that limit, Ollama truncates from the beginning with no warning, no error, and no indication that anything went wrong — the server logs it only at DEBUG level ("truncating input messages which exceed context length").

TradingAgents concatenates analyst reports, tool outputs, and debate history into single prompts. A Bull/Bear debate round or the Portfolio Manager's final prompt will blow past 4k routinely. The failure mode is not a crash — it is a confident, well-formatted `final_trade_decision.md` produced from a prompt whose head was thrown away. For a post whose whole subject is a *decision-making* framework, this belongs in a `prompt-danger` box, not a footnote.

**Drop-in (add after the compose section):**

````markdown
### Raising the context window

Ollama defaults to a 4096-token context and silently truncates anything longer —
no error, no warning. TradingAgents' agent prompts (analyst reports + debate
history + tool output) exceed that easily, so the default gives you a
plausible-looking decision made from a truncated prompt.

Create a `docker-compose.override.yml` next to `docker-compose.yml` (Compose
merges it automatically, so your `git pull` stays clean):

``` yaml
services:
  ollama:
    environment:
      - OLLAMA_CONTEXT_LENGTH=32768
```

Then recreate the container. Budget the RAM: KV-cache grows linearly in
`num_ctx`, and this is CPU inference, so it comes out of the Docker VM's memory
allocation.

{: .prompt-tip }
> If a model's own Modelfile hard-codes `PARAMETER num_ctx 4096`, it overrides the
> environment variable. Check with `ollama show --modelfile <model>`.
````

### P1-2. `llama3.1:8b` is not in TradingAgents' Ollama catalog, and the post doesn't say what to do about that.

**[verified]** `tradingagents/llm_clients/model_catalog.py` offers exactly four Ollama choices for both quick and deep thinking:

```python
"ollama": {
    "quick": [("Qwen3:latest (8B)", "qwen3:latest"),
              ("GPT-OSS:latest (20B)", "gpt-oss:latest"),
              ("GLM-4.7-Flash:latest (30B)", "glm-4.7-flash:latest"),
              ("Custom model ID", "custom")],
    ...
}
```

A reader who pulls `llama3.1:8b` and then hits the CLI's model picker will not find it. Upstream's README says what to do — *"pick 'Custom model ID' in the CLI for any model not listed by default"* — but your post doesn't, so the reader is stranded at a picker that doesn't offer what they just downloaded.

Separately: TradingAgents leans on tool-calling and structured output (`tradingagents/agents/utils/structured.py` has an explicit fallback for *"models that do not support structured output (rare; mostly older Ollama models)"*). `llama3.1:8b` is exactly that class of model. **Recommendation:** switch the post to `qwen3:latest` (same 8B class, in the catalog, better tool-calling), or keep llama3.1 and add one sentence telling the reader to select "Custom model ID".

### P1-3. The CPU-only consequence is stated but not quantified.

Your opening claim is **correct** — I checked, and I want to say so plainly, because it's the sharpest thing in the post. Ollama's own documentation notes GPU acceleration in Docker is available on Linux and Windows-with-WSL2, and not on Docker Desktop for macOS due to the lack of GPU passthrough. The root cause is Apple's mandatory virtualization framework: Apple has not provided a GPU API for it, so the container simply never sees the GPU and falls back to CPU-only inference.

But "does not fully support" undersells it. It's not partial — **it is zero**. And the post then spends its entire length on the slow path without telling the reader what they're paying. Community reports put containerized Ollama on Apple Silicon at roughly 3–5× slower than native. A single TradingAgents run is ~15–20 sequential LLM calls with long prompts. On CPU-only 8B, that is not "a bit slower" — that is a coffee-break turning into an afternoon.

**Drop-in for the intro paragraph** (also fixes the `M*X*` rendering bug — see P2-1):

````markdown
This note sets up the [TradingAgents framework](https://github.com/TauricResearch/TradingAgents)
with a local LLM inside Docker on Apple Silicon.

{: .prompt-warning }
> Docker Desktop on macOS cannot pass the Apple GPU into a Linux container **at
> all** — this is a limitation of Apple's virtualization framework, not of Docker
> or Ollama. Ollama in a container on an M-series Mac runs **CPU-only**, with no
> Metal acceleration, and a full TradingAgents run (~15–20 sequential LLM calls
> with long prompts) will be painfully slow. The fast path is to run Ollama
> natively on macOS and point the container at it (see the last section). The
> all-in-Docker setup below is worth documenting because it is self-contained and
> has zero host dependencies — but do not use it for real runs.
````

---

## P2 — Correctness / precision.

### P2-1. `M*X*` is a Markdown bug. It renders as *MX*.

In kramdown, text surrounded by single asterisks is light emphasis, and the asterisk form is allowed inside a single word (`un*believe*able`). So `M*X*` emits `M<em>X</em>`. You meant a wildcard; the reader sees an italic X. Write **`M-series (M1–M4)`** or escape it: `` M\*X\* ``.

### P2-2. `<market>` should be `<TICKER>`.

**[verified]** `cli/main.py:1021`: `Path(config["results_dir"]) / selections["ticker"] / selections["analysis_date"]`. The path component is the ticker symbol (`NVDA`, `005930.KS`), not a market. A reader will go looking for a `KOSPI/` or `NASDAQ/` directory and not find one.

### P2-3. `ollama run` is the wrong verb for "install a model".

`ollama run` pulls *and then* opens an interactive REPL. Your reader lands at a `>>>` prompt with no instruction on how to leave (`/bye`). Upstream's README says *"Pull models with `ollama pull <name>`"*. Use `pull`; it's non-interactive and needs no `-it`.

Also — and this fixes the directory-name fragility from Step 1 — address the **service**, not the container:

````markdown
``` shell
# Pull the model (non-interactive; `ollama run` would drop you into a REPL)
$ docker compose exec ollama ollama pull qwen3:latest
# Verify
$ docker compose exec ollama ollama list
```

{: .prompt-info }
> `docker compose exec <service>` addresses the *service*, so it works regardless
> of what your clone directory is called. Hardcoded names like
> `tradingagents-ollama-1` only work if you cloned into a directory named exactly
> `TradingAgents` — a reader who downloads the ZIP gets `TradingAgents-main/`,
> project name `tradingagents-main`, and every hardcoded `docker exec` in this
> post breaks.
````

### P2-4. The recommended run command is `run --rm`, not `up -d` + `exec`.

Upstream's README documents exactly one Ollama invocation:

```bash
docker compose --profile ollama run --rm tradingagents-ollama
```

Your `up -d` + `docker exec ... tradingagents` works — the image's `ENTRYPOINT` is `tradingagents` and `tty: true`/`stdin_open: true` keep it alive at the interactive prompt — but it leaves a *second*, stranded CLI process sitting in the detached container, and if that entrypoint ever exits, your `docker exec` fails with "container is not running" and the reader has no idea why. `run --rm` starts `depends_on: ollama` automatically and reports still land on the named volume. Prefer it, and mention `up -d` only as the variant that keeps a long-lived container around for `docker cp`.

### P2-5. The abstract writes a cheque the body doesn't cash.

> "It incorporates all technical issues, specific error codes, and workarounds."

There is not one error code or workaround in the post. Either delete the sentence, or — better — add a short "Troubleshooting" section. You have real material for it: model-not-in-catalog, the 4k truncation, `docker exec` failing on a renamed directory, `complete_report.md` vanishing.

### P2-6. Reproducibility: the post pins nothing, and has already rotted.

`git clone` (no tag), `ollama/ollama:latest`, no version stated. This post was published 2026-05-21; upstream broke it on 2026-06-21. Adding one line —

```markdown
> Verified against TradingAgents v0.2.5 (commit `61522e1`) and `ollama/ollama:latest` as of 2026-05-21.
```

— is what separates a systems note that ages honestly from one that quietly misleads people a month later. This is the single highest-leverage habit change I'd push for across your systems posts.

---

## P3 — Rendering, prose, front matter.

**P3-1. The image is broken.** `![...](assets/img/image-tradingagents.png)` has no leading slash. A relative URL resolves against the *post's* permalink (`/posts/<title>/`), giving `/posts/<title>/assets/img/...` → 404. Fix either way:

```markdown
![TradingAgents CLI main screen](/assets/img/image-tradingagents.png){: w="700" h="400" }
_The TradingAgents CLI after a successful launch._
```

or set the prefix in front matter — Chirpy's front-matter key for a per-post resource path prefix is `media_subpath` (it was renamed from `img_path` in v7):

```yaml
media_subpath: /assets/img/
```

Chirpy also asks for `w`/`h` on images to avoid layout shift.

**P3-2. `math: true` with no math.** Drop it — it loads MathJax on a post that has zero equations.

**P3-3. `{: .prompt-info }` placement — I checked this, and you're fine.** I expected a bug here and it isn't one. The kramdown spec says a block IAL has to be put directly before *or* after the block-level element, and is ignored only when surrounded by blank lines. Yours sits directly before the `>` line, so it attaches correctly. That said, Chirpy's own demo post puts it *after* the blockquote, and the before-form is fragile: insert one blank line and the IAL is silently dropped. Switch to the conventional form.

**P3-4. Prose.** "environmental settings file" → "environment file". "Saving Reports as an md file" → "Saving Reports as Markdown". "This enables running multiple container applications" → "Compose defines and runs multi-container applications."

**P3-5. One-line disclaimer.** The artifact this pipeline produces is literally called `final_trade_decision.md`. A CPU-only 8B model with a silently-truncating 4k context is a plumbing demo, not a signal source, and some fraction of your readers will not make that distinction unprompted. One sentence saying so costs you nothing. (I'm not a financial advisor and this isn't financial advice — it's a statement about the reliability of the output artifact.)

---

## What the post gets right (verified, not assumed)

I want these on the record, because three of them look like errors and aren't:

| Claim | Verdict |
|---|---|
| Docker on Apple Silicon has no GPU passthrough | ✅ Correct, and correctly identified as the core constraint |
| `OLLAMA_BASE_URL=http://ollama:11434/v1` | ✅ Correct var, correct value, correct `/v1` — `openai_client.py` registers `ProviderSpec(base_url="http://localhost:11434/v1", base_url_env="OLLAMA_BASE_URL")`, i.e. TradingAgents talks to Ollama over its OpenAI-compatible Chat Completions endpoint. This is the one env var you got exactly right. |
| `--profile ollama` on **both** `up` and `down` | ✅ Correct **and necessary**. Plain `docker compose down` only stops the non-profiled services; you need `--profile` (or `COMPOSE_PROFILES`) to remove profile-gated containers too. Most tutorials get this wrong. |
| `tradingagents-ollama-1` *and* `tradingagents-tradingagents-ollama-1` | ✅ Both real, and the doubled name is **not** a typo — there is genuinely a service named `tradingagents-ollama` alongside a service named `ollama`. Worth one sentence of explanation, because it looks like an error. |
| `~/.tradingagents/logs/.../reports/final_trade_decision.md` | ✅ Correct path |
| `/home/appuser/` as container home | ✅ Correct (`Dockerfile`: `useradd --create-home appuser`) |

One thing the post *implies* correctly by omission: **no cloud API key is needed.** `api_key_env.py` maps `"ollama": None`, FinnHub is gone from the codebase entirely, and the default data vendors are keyless (`yfinance`, `polymarket`). `FRED_API_KEY` is optional — `fred.py` raises `FredNotConfiguredError` which "the routing layer treats as unavailable rather than a hard crash." Worth stating explicitly; it's a selling point of the local setup.

---

## Suggested new closing section (the fast path you correctly identified and then abandoned)

Your intro says "one should host the local LLM on macOS and connect Docker to it" — and then never shows how. That's the derivation gap. It's five lines:

````markdown
## The Fast Path: Native Ollama + Docker App

The container setup above is CPU-only. To actually use the Apple GPU, run Ollama
natively on macOS and point the container at the host.

**1. Let Ollama accept connections from the container.** It binds to `127.0.0.1`
by default and will refuse the container outright:

``` shell
$ launchctl setenv OLLAMA_HOST "0.0.0.0:11434"
# then quit and reopen the Ollama app
$ ollama pull qwen3:latest
```

**2. Point TradingAgents at the host** in `.env`:

``` shell
TRADINGAGENTS_LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://host.docker.internal:11434/v1
```

**3. Run the plain service** — no `ollama` profile, no second container:

``` shell
$ docker compose run --rm tradingagents
```

{: .prompt-warning }
> `0.0.0.0` exposes Ollama on every interface, with no authentication. Only do
> this on a trusted network.
````

The mechanism: Ollama binds to `127.0.0.1` by default, so anything outside the host — another container, another machine — gets connection-refused until you rebind; from a Docker Desktop container the host is reachable as `host.docker.internal`. `host.docker.internal` is the documented Windows/macOS replacement for `localhost` when a container needs to reach a host service. On macOS the persistent way to set the bind address is `launchctl setenv OLLAMA_HOST "0.0.0.0:11434"` followed by restarting the Ollama app.

---

## Priority checklist

| # | Pri | Item | Action |
|---|-----|------|--------|
| 1 | **P0** | `LLM_PROVIDER` / `OLLAMA_MODEL` are dead strings | Replace with `TRADINGAGENTS_LLM_PROVIDER` / `TRADINGAGENTS_{DEEP,QUICK}_THINK_LLM`; note the compose service already sets them |
| 2 | **P0** | `complete_report.md` is not in `~/.tradingagents/`; `down` deletes it | Rewrite §2 opener; document the `Save report?` / `Save path` prompts |
| 3 | **P0** | `tradingaents` typo (×2) — commands fail as written | Fix spelling; better, switch to `docker compose cp tradingagents:...` |
| 4 | **P1** | Ollama's 4096 default ctx silently truncates agent prompts | Add `OLLAMA_CONTEXT_LENGTH` override + `prompt-danger` box |
| 5 | **P1** | `llama3.1:8b` isn't in the CLI catalog | Switch to `qwen3:latest`, or tell the reader to pick "Custom model ID" |
| 6 | **P1** | CPU-only cost never quantified | State it's *zero* GPU, ~3–5× slower, and link the fast path |
| 7 | **P2** | Hardcoded container names assume dir is named `TradingAgents` | Use `docker compose exec/cp <service>` throughout |
| 8 | **P2** | `M*X*` renders as italic *MX* | → `M-series (M1–M4)` |
| 9 | **P2** | `<market>` is really `<TICKER>` | Fix placeholder |
| 10 | **P2** | `ollama run` traps reader in a REPL | → `ollama pull` |
| 11 | **P2** | `up -d` + `exec` is not upstream's recipe | Lead with `docker compose --profile ollama run --rm tradingagents-ollama` |
| 12 | **P2** | "all technical issues, specific error codes, and workarounds" — there are none | Delete the claim or write the troubleshooting section |
| 13 | **P2** | Nothing is version-pinned; post already rotted in ~1 month | Add "Verified against v0.2.5 (`61522e1`), 2026-05-21" |
| 14 | **P3** | Image path missing leading `/` → 404 | `/assets/img/...` or `media_subpath` |
| 15 | **P3** | `math: true` on a post with no math | Remove |
| 16 | **P3** | `{: .prompt-info }` before the quote (valid, but non-idiomatic/fragile) | Move it after |
| 17 | **P3** | Missing: the fast path (native Ollama + `host.docker.internal`) | Add the closing section above |

---

## Questions to push further

**[Level 1 — Comprehension]**
- `docker compose --profile ollama up -d` starts *three* containers, not two. Which is the third, why does it start despite you never asking for it, and why does that accident make your §2 `docker cp` work at all?

**[Level 2 — Assumption Challenge]**
- Your `.env` sets `OLLAMA_BASE_URL`, but the compose file sets the same variable in the service's `environment:` block. Which wins, and what would have to be true for your `.env` line to have mattered at all in May 2026?
- You wrote `LLM_PROVIDER=ollama` and the setup *worked*. What made it work? (The answer is the reason you didn't catch the bug — and it's the reason the post is dangerous for anyone doing an unattended run.)

**[Level 3 — Structural / Generalization]**
- Both P0-1 and P0-2 are the same failure mode: **a knob that appears to be set but is silently ignored, and a system that never complains.** `_ENV_OVERRIDES` is an allow-list, so an unrecognized key is dropped without a word; Ollama truncates over-length prompts without an error. What's the general design principle being violated, and how would you have to instrument a run to detect it from the outside? (Concretely: what would you `grep` for in `docker compose logs ollama` to prove your prompts aren't being truncated?)
- Related: the framework *does* fail loudly on a malformed boolean (`_coerce` raises `ValueError` on `treu`). So the authors clearly believe in failing loudly. Why does an unknown key get different treatment from a bad value for a known key — and is that defensible?

**[Level 4 — Cross-Domain] (⚠️ Advanced)**
- You're the maintainer of `Wannifest.jl` and `Jx.jl`. Both P0s here are configuration-surface bugs: the user's stated intent and the system's actual behaviour diverge with no diagnostic. Does either of your packages have the same hole — a config `Dict`/kwarg surface where a misspelled or obsolete key is silently ignored rather than erroring? In Julia this is the classic `kwargs...` swallow. A `@assert isempty(setdiff(keys(user_cfg), keys(DEFAULTS)))` at construction is about four lines and turns a silent wrong-physics run into a stack trace. Worth an afternoon.

---

## Sources

**Primary — upstream source (cloned and inspected directly):**
- `TauricResearch/TradingAgents` — https://github.com/TauricResearch/TradingAgents
  - HEAD at review: `01477f9` ("chore: release v0.3.1", 2026-07-05)
  - Nearest commit to post date: `61522e1` (2026-05-17); latest release then was v0.2.5 (2026-05-11)
  - Fix commit for the `LLM_PROVIDER` bug: `a420ad0` (2026-06-21) — *"Docker ollama: use TRADINGAGENTS_LLM_PROVIDER + OLLAMA_BASE_URL, not a bare LLM_PROVIDER the overlay never reads (#975)"*
  - Files cited: `docker-compose.yml`, `Dockerfile`, `.env.example`, `pyproject.toml` (`[project.scripts] tradingagents = "cli.main:app"`), `tradingagents/default_config.py` (`_ENV_OVERRIDES`, `results_dir`), `tradingagents/reporting.py` (`write_report_tree`), `tradingagents/llm_clients/openai_client.py` (`ProviderSpec` for `ollama`), `tradingagents/llm_clients/model_catalog.py` (Ollama catalog), `tradingagents/llm_clients/api_key_env.py`, `tradingagents/dataflows/fred.py`, `cli/main.py:1021,1250`, `cli/utils.py`, `README.md` (Docker + Ollama sections)

**Primary — tool documentation:**
- Docker, *Using profiles with Compose* — https://docs.docker.com/compose/how-tos/profiles/ (services without `profiles` are always enabled; `--profile X down` is required to remove profiled services)
- Docker, *Specify a project name* — https://docs.docker.com/compose/how-tos/project-name/ (project name defaults to the base name of the project directory)
- Docker, *docker compose CLI reference* — https://docs.docker.com/reference/cli/docker/compose/ (`docker-compose.override.yml` auto-merge)
- Ollama, *FAQ* — https://docs.ollama.com/faq (default context window 4096; `OLLAMA_CONTEXT_LENGTH`)
- kramdown, *Syntax* → Block Inline Attribute Lists — https://kramdown.gettalong.org/syntax.html (block IAL valid directly before *or* after; ignored when surrounded by blank lines. Also: single-asterisk emphasis within a word — the `M*X*` bug)
- Chirpy, *Writing a New Post* — https://chirpy.cotes.page/posts/write-a-new-post/ (`media_subpath`, image `w`/`h`)
- Chirpy demo post (prompt-block convention, IAL placed *after* the blockquote) — https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/_posts/2019-08-08-text-and-typography.md

**Secondary — corroborating (used only for the CPU-only / connectivity claims):**
- Docker-on-Mac GPU limitation — https://techxplainator.com/docker-mac-gpu-guide/ ; https://www.glukhov.org/llm-hosting/ollama/ollama-in-docker-compose/ ; https://github.com/usrbinkat/obelisk/issues/43 (3–5× degradation figure — community estimate, treat as order-of-magnitude only)
- Ollama bind address / `host.docker.internal` — https://llmconfigurator.com/en/guides/troubleshooting/ollama-connection-refused ; https://insiderllm.com/guides/ollama-api-connection-refused-fix/ ; https://docs.useanything.com/ollama-connection-troubleshooting
- Ollama silent truncation — https://www.serverman.co.uk/ai/ollama/ollama-context-window/ ; https://stouf.medium.com/fixing-context-limits-in-opencode-ollama-1d820b332b41

**Explicit uncertainty (per your rule 1):**
- The 3–5× CPU-vs-Metal figure is a community estimate, not a measurement I made. If you keep it, attribute it as such — or better, time one run each way and publish *your* number. That would be the most valuable thing in the post.
- I could not verify your site's `_config.yml` permalink setting. The broken-image diagnosis assumes Chirpy's default `permalink: /posts/:title/`. If you've customized it to a root-level permalink, the relative path could coincidentally resolve — check the rendered page before applying P3-1.
