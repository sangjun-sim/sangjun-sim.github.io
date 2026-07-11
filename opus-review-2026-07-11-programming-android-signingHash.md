# Opus Review: Managing Signing Hash

- Date/time KST: 2026-07-11 09:08 KST
- Source file path: `/Users/sirius/sangjun-sim.github.io/_posts/2026-05-21-programming-android-signingHash.md`
- Model/app used: Claude.app with visible `Opus 4.8 높음` (`Opus 4.8 최대` was requested but not exposed in the visible control during this run)
- Prompt template path: `/Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md`
- Source handling note: The source Markdown file was uploaded/attached directly to Claude.app as a `.md` file; the full source body was not pasted inline.

---

# Technical Review — "Managing Signing Hash"

**Reviewer role:** professional CS/security reviewer (physics-cs-tutor review style)
**Source:** `_posts/2026-05-21-programming-android-signingHash.md`
**Author:** Sangjun
**Scope:** Correctness of the security model, terminology, command snippets, and source-checking. I do *not* rewrite the whole article — I give targeted drop-in corrections plus a priority checklist.

---

## Step 1 — Fractionalizing the article

The post makes claims in five distinct areas. Each is judged separately:

1. **What `key.properties` / the keystore *is*, and its threat model** (¶ under "Quality Assurance") — this is where the serious errors are.
2. **The `sign()` / `decrypt()` "the app receives the private key" paragraph** — conflates two unrelated Android subsystems.
3. **Firebase fingerprint mechanics** (SHA-1 / SHA-256) — mostly correct.
4. **Command snippets** (`signingReport`, hex→Base64, `flutter run --release`, `JAVA_HOME`) — mostly correct with typos.
5. **The freeRASP / AGP 9.x / `consumer-rules.pro` "Issue"** — reasoning is muddled and the conclusion is unsupported.

The single most important issue is a **backwards threat model** in area 1: the article states the signing secret is *shipped inside the app* and is safe *because* it is shipped. The opposite is true, and getting this wrong inverts the security advice.

---

## Step 2 — Correctness findings (by severity)

### 🔴 Critical — factual/security errors

#### C1. "`key.properties` … is designed to be included in an APK or AAB package. Even if the app is extracted, the attacker cannot see this file."

This is **false and the reasoning is inverted.**

- `key.properties` is a **build-time** Gradle configuration file. It lives in `android/` on the developer's machine or CI runner and holds the keystore *path* and *passwords* (`storeFile`, `storePassword`, `keyAlias`, `keyPassword`). It is consumed by `build.gradle.kts` at compile time to configure the `signingConfig`.
- It is **not** packaged into the APK/AAB, and it **must not be.** The `.jks`/keystore and `key.properties` are precisely the things you keep *out* of the artifact. If they were bundled, an attacker who unzipped the APK *could* read them — which is exactly why they are excluded.
- The correct reason it is "safe" is: **it never leaves your build environment.** That is also why the very next sentence ("should not be uploaded to Git") is correct — but the post presents these as two unrelated facts when they are the same fact.

This directly contradicts the author's own (correct) instinct to `.gitignore` it. The Flutter and Codemagic docs are explicit that `key.properties` and `*.jks` must be gitignored and are never checked in. ([Flutter — Build and release an Android app](https://docs.flutter.dev/deployment/android), [Codemagic — Android code signing](https://docs.codemagic.io/flutter-code-signing/android-code-signing/))

**Drop-in replacement for the paragraph (lines ~27):**

> `key.properties` is a **build-time** configuration file: `build.gradle.kts` reads it during compilation to locate the keystore and supply the signing passwords. It is **not** included in the shipped APK/AAB, and it must not be — the keystore and its passwords never leave your build machine or CI runner. Because it contains secrets (keystore path and passwords), it must be excluded from the package *and* from version control. Add both `android/key.properties` and `*.jks`/`*.keystore` to `.gitignore`, and never reference these values as plaintext variables elsewhere in your source.

#### C2. "The app can only request operations `sign()` and `decrypt()` even if the app receives the private key. Thus, the app loads the results from the Android system security component."

This paragraph **conflates two completely different keys/subsystems**:

- **The app *signing* key** (the topic of this post) is used **only at build time** by `apksigner`/`jarsigner` to sign the APK/AAB. The running app **never receives it** — not the private key, not a handle to it. So "even if the app receives the private key" describes a situation that does not occur.
- **The Android Keystore system** (`AndroidKeyStore` provider, TEE/StrongBox-backed) is a **runtime** facility for *application* cryptographic keys. *Those* keys can be marked non-exportable, so an app can invoke `sign()`/`decrypt()` without the raw private key ever entering app memory. This is a real and correct description — but it is about keys the app generates/uses at runtime, **not** the code-signing key.

As written, the paragraph implies the code-signing private key is handed to the running app under a restricted interface. That is a genuine misconception. Either delete the paragraph (it is off-topic for signing-hash management) or reframe it explicitly as an aside about the *runtime* Keystore.

**Suggested reframe (optional aside):**

> *(Aside — unrelated to the signing key.)* Separately, Android provides the **Android Keystore** system for keys an app uses at runtime. Keys stored there can be hardware-backed and non-exportable: the app calls `sign()`/`decrypt()` and the crypto happens inside a secure component, so the raw private key never enters app memory. Note this is a different key from the app-signing key discussed above, which is used only at build time and is never present in the running app.

---

### 🟠 Major — conceptual / terminology

#### M1. "hash key" used to mean "signing key" throughout.

A signing key is **not** a hash. The chain is:

$$\text{private key} \xrightarrow{\text{sign}} \text{signature}, \qquad \text{certificate} \xrightarrow{\text{SHA-1 / SHA-256}} \text{fingerprint}.$$

The **fingerprint** (what Firebase and freeRASP want) *is* a hash — specifically a digest of the signing **certificate**, not of the private key. Calling the keystore/private key a "hash key" (lines 15, 25, 50, 70) is imprecise and will confuse readers about what is secret (the private key) versus what is public and shareable (the certificate fingerprint). Recommend: reserve "key" for the signing key/keystore, and "fingerprint" (or "certificate hash") for the SHA-1/SHA-256 digest.

#### M2. `.android/debug.keystore` path is under-specified.

The default debug keystore lives in the **user home directory**: `~/.android/debug.keystore` (macOS/Linux) or `C:\Users\<name>\.android\debug.keystore` (Windows) — *not* in the project's `android/` folder. As written (`.android/debug.keystore`) a reader may look in the wrong place. Its well-known credentials are also worth stating: store/key password `android`, alias `androiddebugkey`. ([GeeksforGeeks — Where is debug.keystore](https://www.geeksforgeeks.org/where-is-debug-keystore-in-android-studio/))

#### M3. freeRASP "Issue" paragraph — unsupported reasoning.

The paragraph (line 78) is hard to follow and its conclusion — *"this update can be considered to have been applied correctly"* — does not follow from the premises. Problems:

- It asserts AGP 9.x made "global option validation for consumer ProGuard files … more stricter" but gives no source or version reference. Flag it as *reported* behavior and link the release note, or soften to "in my experience."
- The logical bridge ("Since freeRASP … flattening the APK build output structure is out of scope … this update can be considered to have been applied correctly") is a non-sequitur. Whether AGP's stricter validation is *correct behavior* is independent of *freeRASP's responsibilities*.
- Terminology: the ProGuard/R8 option is `-flattenpackagehierarchy` (all lowercase). Global optimization options like this in a **consumer** ProGuard file are what AGP restricts, because a library should not dictate whole-app optimization. State that explicitly.

**Suggested rewrite of the conclusion sentence:**

> AGP restricts *global* optimization options (e.g. `-flattenpackagehierarchy`) inside a library's **consumer** ProGuard rules, because such options affect the entire app's output, not just the library. A runtime-security library like freeRASP has no need to alter the app-wide package layout, so AGP rejecting that global option is the intended, correct behavior rather than a freeRASP bug. *(Link the specific AGP 9.x release note for the validation change.)*

---

### 🟡 Minor — typos, snippets, style

- **T1 — `JAVA_HOME` typo (line 53):** `/A.pplications/Android Studio.app/...` → `/Applications/Android Studio.app/...`. The stray `.` breaks the export.
- **T2 — double backslashes (lines 73–75):** `flutter run --release \\` shows `\\` (escaped) rather than a shell line-continuation `\`. In the rendered post it should be a single trailing backslash on each continued line.
- **T3 — hex→Base64 command (line 67) is correct** but brittle: `echo "AA:BB:..." | tr -d ':' | xxd -r -p | openssl base64`. Two caveats worth a footnote: (a) use `echo -n` (or `printf`) to avoid a trailing newline confusing some pipelines — `xxd -r -p` tolerates it here, but `printf` is safer; (b) the input must be the full 64-hex-char SHA-256 (32 bytes) or the resulting Base64 will be silently wrong. Note also that Talsec ships a converter / expects the Base64 form directly. ([Talsec — Convert SHA-256 to Base64](https://docs.talsec.app/freerasp/freerasp/wiki/getting-signing-certificate-hash/result-convert-the-sha-256-hash-to-base64-format))
- **T4 — env var name (line 70):** the error names `RASP_RELEASE_CERT_HASHES` and `RASP_WATCHER_MAIL`. These are the author's own `--dart-define` names, which is fine — but current freeRASP configures hashes via the `signingCertHashes` (a.k.a. `signingCertHash`) field in Dart, and versions have shifted (e.g. 4.x/5.x). Pin the freeRASP version you are documenting and confirm the field/param name for it. ([freerasp on pub.dev](https://pub.dev/packages/freerasp)) The post cites "freeRASP 7.5.1"; I could not confirm that this version exists as of the review date — please double-check the version number.
- **T5 — "cannot be accessed from the app memory" (line 27):** even after fixing C1, drop the "app memory" framing entirely; it is not the relevant mechanism.
- **T6 — grammar:** "more *stricter*" (line 78) → "stricter"; "the hash keys … use for three different purposes" (line 15) → "are used for."
- **T7 — image path (line 60):** `assets/img/image-fingerprint.png` — confirm this resolves under your Jekyll config (Chirpy typically wants a leading `/` or the `img_path` front-matter); as a relative path it may 404 depending on the page URL.

---

### ✅ Things that are correct (keep as-is)

- Firebase inspects the certificate **fingerprint** (SHA-1/SHA-256) because the package name alone is spoofable — correct and well-put.
- The four Firebase features requiring a fingerprint (Google sign-in, phone auth, App Check/Play Integrity, Android OAuth client) are accurate.
- `./gradlew signingReport` and reading the `Variant: release` / `Variant: debug` blocks — correct workflow.
- freeRASP expects the **Base64** SHA-256 of the signing certificate — correct. ([Talsec docs](https://docs.talsec.app/freerasp/wiki/getting-signing-certificate-hash))
- Play App Signing: you register the certificate hash from Google Play for the deployed artifact — correct in spirit.

---

## Step 3 — Corrected snippets (ready to paste)

**Fixed `JAVA_HOME` + signingReport block:**

```shell
$ echo 'export JAVA_HOME=/Applications/Android Studio.app/Contents/jbr/Contents/Home' >> ~/.zshrc
$ source ~/.zshrc
$ ./gradlew signingReport
```

**Fixed multi-line `flutter run` (single backslashes):**

```shell
flutter run --release \
  --dart-define=RASP_WATCHER_MAIL=email@example.com \
  --dart-define=RASP_RELEASE_CERT_HASHES="HASH_KEY"
```

**Safer hex→Base64 conversion:**

```shell
# input must be the full 64-hex-char SHA-256 fingerprint
$ printf '%s' "AA:BB:CC:DD:..." | tr -d ':' | xxd -r -p | openssl base64
```

---

## Step 4 — Priority checklist

| # | Sev | Location | Action |
|---|-----|----------|--------|
| C1 | 🔴 | ¶ line ~27 | Rewrite: `key.properties` is build-time, **not** shipped in the APK/AAB; safe because it never leaves the build env. Fix the inverted reasoning. |
| C2 | 🔴 | ¶ line ~29 | Remove or clearly reframe the `sign()`/`decrypt()` paragraph — it describes the runtime Android Keystore, not the build-time signing key. The app never receives the signing key. |
| M1 | 🟠 | throughout | Stop calling the signing key a "hash key." Distinguish **signing key** (secret) vs **certificate fingerprint = hash** (shareable). |
| M2 | 🟠 | line 33 | Correct debug keystore path to `~/.android/debug.keystore` (home dir), add default creds. |
| M3 | 🟠 | line 78 | Fix the freeRASP/AGP non-sequitur; cite the AGP 9.x release note; use `-flattenpackagehierarchy`. |
| T1 | 🟡 | line 53 | `/A.pplications/` → `/Applications/`. |
| T2 | 🟡 | 73–75 | `\\` → `\` line continuations. |
| T3 | 🟡 | line 67 | Add note: full 64-hex input; prefer `printf`. |
| T4 | 🟡 | line 70/78 | Verify freeRASP version "7.5.1" and current param name (`signingCertHashes`). |
| T6 | 🟡 | 15, 78 | Grammar: "are used", "stricter". |
| T7 | 🟡 | line 60 | Verify Jekyll/Chirpy image path resolves. |

Fixing **C1** and **C2** is non-negotiable — they are the two claims a security-minded reader will bounce off. Everything else is polish.

---

## Step 5 — Critical questions for the author

**[Level 1 — Comprehension]**
- After the C1 fix: can you state in one sentence *where* `key.properties` and the `.jks` physically live during a CI release build, and why that location keeps them out of the artifact?

**[Level 2 — Assumption Challenge]**
- The post treats "not in Git" and "not extractable from the APK" as the same protection. Are they? Construct a scenario where a secret is safely gitignored but *still* leaks to an attacker (hint: think about what `build.gradle.kts` could accidentally do with those values, e.g. `BuildConfig` fields).
- If the running app never holds the signing key, what *exactly* is freeRASP comparing at runtime, and against what baseline? Why is a **public** certificate fingerprint sufficient for tamper detection rather than a secret?

**[Level 3 — Structural / Generalization]**
- Play App Signing means Google *re-signs* your app with a key you never hold. Given that, what is the actual trust relationship between your **upload** key, Google's **app-signing** key, and the fingerprints you register in Firebase? Which fingerprint must match for Google sign-in to work in a Play-distributed build vs. a locally-built release?

**[Level 4 — Cross-domain] (⚠️ Advanced)**
- The certificate-fingerprint mechanism is a public digest that binds an identity to a package. Compare this to certificate pinning in TLS: both pin a hash of a certificate. What threat does each *not* defend against, and why does key **rotation** (Play App Signing key upgrade, TLS cert renewal) complicate both in the same structural way?

---

## Sources

- [Flutter — Build and release an Android app](https://docs.flutter.dev/deployment/android)
- [Codemagic Docs — Android code signing](https://docs.codemagic.io/flutter-code-signing/android-code-signing/)
- [GeeksforGeeks — Where is debug.keystore in Android Studio?](https://www.geeksforgeeks.org/where-is-debug-keystore-in-android-studio/)
- [Talsec freeRASP — Getting the signing certificate hash](https://docs.talsec.app/freerasp/wiki/getting-signing-certificate-hash)
- [Talsec freeRASP — Convert SHA-256 hash to Base64](https://docs.talsec.app/freerasp/freerasp/wiki/getting-signing-certificate-hash/result-convert-the-sha-256-hash-to-base64-format)
- [freerasp — pub.dev package page](https://pub.dev/packages/freerasp)
- Android Keystore system (runtime, hardware-backed keys) — Android Developers documentation, `AndroidKeyStore` provider (general reference; verify current URL before publishing).
