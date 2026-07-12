# ChatGPT Pro Review: Managing Signing Hash

> **Review metadata**
>
> - **Date/time KST:** 2026-07-12 14:25:50 KST (UTC+09:00)
> - **Source file path:** `/Users/sirius/sangjun-sim.github.io/_posts/2026-05-21-programming-android-signingHash.md`
> - **Opus review file path:** `/Users/sirius/sangjun-sim.github.io/opus-review-2026-07-11-programming-android-signingHash.md`
> - **Model/app used:** ChatGPT desktop app Pro 5.6 (visible UI route: GPT-5.6 Sol with Pro response level)
> - **Input handling:** The source Markdown and Opus review Markdown were provided as attached files and reviewed as files, not reconstructed from pasted source bodies.  
> - **Reference/e-book candidates checked or suggested:** The supplied local/Drive check found no relevant Android, Flutter, Gradle, signing, or RASP reference material; it found only `How-to-run-Flutter-on-iOS.png`, and `/Users/sirius/Documents/E Books` was absent. The appropriate references are therefore the official Android Developers, Flutter, Firebase, Google Play services, AGP/R8, and Talsec/freeRASP documentation, supplemented by OWASP MASVS/MASTG. *Android Security Internals* is a useful historical e-book candidate, but it predates Play App Signing, current AGP behavior, and modern freeRASP releases.

## Executive Summary

The Opus review correctly identifies the source post’s two most serious conceptual errors:

1. `key.properties` is a build-time configuration file, not a file intentionally packaged into an APK or AAB.
2. The app-signing private key is unrelated to runtime keys managed by the Android Keystore system.

Those corrections should be accepted. Opus is also right that the post repeatedly confuses a signing key, a keystore, a certificate, and a certificate fingerprint, and it correctly catches the malformed `JAVA_HOME` path and doubled shell continuation backslashes.

The Opus review is nevertheless incomplete enough that Sangjun should not apply it wholesale. Its largest omission is the post’s statement that “the hex SHA-256 is enough” for the listed Firebase and Google integrations. That is not generally true. Google Sign-In and Android OAuth client registration use the signing certificate’s SHA-1 fingerprint; Firebase Phone Authentication uses SHA-256 for its Play Integrity path but can also require SHA-1 for the reCAPTCHA fallback; Firebase App Check with the Play Integrity provider uses SHA-256. The post needs a feature-by-feature matrix rather than one blanket algorithm recommendation. 

The post’s “three purposes” model—QA, debugging, and releasing—is also conceptually weak. These are distribution channels or build contexts, not three cryptographic purposes. A real Android project may have a debug certificate, one or more local/internal release certificates, a Play upload certificate, one or more Play app-signing certificates, flavor-specific certificates, and certificates used by alternative stores. Which fingerprint must be registered depends on the certificate that signs the artifact actually installed on the device. With Play App Signing, the upload key signs the uploaded AAB or APK, while Google signs the APKs distributed to users with the app-signing key. 

Opus overstates its objection to the source’s AGP 9/freeRASP discussion. The source’s prose is imprecise, but the underlying observation is supported: freeRASP 7.5.1 declares AGP 8.8.1 and includes `-flattenpackagehierarchy` in its consumer rules; Android’s library guidance explicitly lists that option as inappropriate in consumer rules; and AGP 9 added stricter handling of global options in such rules. The source needs a more exact explanation and a reproducible error reference, not a reversal of its conclusion. 

Opus also incorrectly says it could not confirm that freeRASP 7.5.1 exists. Version 7.5.1 was released on March 24, 2026. Version 8.0.0 was released on May 13, 2026, eight days before the post’s May 21 publication date. Therefore, 7.5.1 is a real version, but the post should explain that it documents the project’s pinned version rather than implying that 7.5.1 was then the newest release. 

The recommended disposition is:

| Disposition | Findings |
|---|---|
| **Revise immediately — genuine errors** | `key.properties` packaging/threat model; Android Keystore conflation; “hash key” terminology; SHA-256-only Firebase claim; upload key versus Play app-signing key; local-only freeRASP hash recommendation; malformed commands. |
| **Revise with qualification — incomplete explanations** | Firebase “trust” analogy; “two keys” model; QA/release organization; freeRASP detection versus blocking; open-source description; AGP 9 explanation; use of `flutter run` as the example “build step.” |
| **Verify against the actual project before revising** | Exact `RASP_*` exception; parsing of `RASP_RELEASE_CERT_HASHES`; actual Firebase App Distribution artifact type; the AGP 9 failure mode and build log; current Jekyll image resolution; the project’s pinned freeRASP version. |
| **Optional style or robustness improvements** | `printf` instead of `echo`; whether to publish default debug-keystore credentials; heading hierarchy; pronoun style; shell-prompt notation; unused `math: true`. |

In this review, **genuine error** means the claim should be changed; **missing exposition** means the claim may be directionally correct but is unsafe or misleading without added conditions; **style** means no technical correction is required; and **reference verification** means the repository, build log, or pinned dependency must be checked before asserting the result.

## High-Confidence Issues

### 1. `key.properties` is not the keystore and does not contain the private key

**Classification: Genuine conceptual and security error.**

The source says that information “on the keystore” is saved in `android/key.properties`, that `key.properties` “contains the key,” and that it securely saves signing information. These statements collapse two separate objects:

- The keystore file, commonly a `.jks` or `.keystore`, contains the private key and its corresponding certificate.
- `android/key.properties` is normally a plaintext Gradle properties file containing values such as `storeFile`, `storePassword`, `keyAlias`, and `keyPassword`. It tells Gradle where the keystore is and how to access it; it does not itself hold the signing private key.

Flutter’s official deployment guide shows `key.properties` as a reference to the keystore and warns that the file must remain private and out of public source control. Android’s signing documentation separately defines the private key and certificate held by the keystore. 

The source’s next claim—that `key.properties` is “designed to be included in an APK or AAB” but cannot be seen after extraction—is the opposite of the standard security model. In the normal Gradle flow, the file is read during build configuration and is not an application source, resource, or asset. It should not be copied into the output. If a custom build script deliberately copied it into an asset, resource, generated source file, `BuildConfig` field, or log, its values could become recoverable.

The correct threat-model statement is closer to:

> `key.properties` is a plaintext, build-time configuration file that Gradle reads to locate and unlock the signing keystore. It is not part of the standard APK/AAB contents and must not be copied into the app, committed to version control, printed in CI logs, or retained in public build artifacts. The keystore and its credentials should be restricted to the developer machine, controlled CI secret storage, or a dedicated signing system.

Opus’s correction is directionally right, but its wording that the secrets “never leave your build machine or CI runner” is too absolute. A real organization may inject them from a secret manager, mount them temporarily in CI, use a hardware-backed signing service, or transfer an encrypted keystore through controlled infrastructure. The invariant is not “never leaves one computer”; it is “never becomes part of source control, logs, distributable artifacts, or an unauthorized environment.”

The post should also avoid calling `key.properties` a secure secret store. It is plaintext configuration. `.gitignore` reduces accidental source-control disclosure but does not protect against local malware, loose filesystem permissions, CI artifact retention, terminal history, cloud backups, or Gradle code that embeds or logs the values.

### 2. The app-signing key is being confused with the Android Keystore system

**Classification: Genuine conceptual error.**

The source says that even if the app receives the private key, it can only request `sign()` and `decrypt()` operations from an Android system security component. That paragraph describes, imperfectly, runtime keys held by the Android Keystore system. It does not describe the app-signing key.

The app-signing key is used before installation to sign an APK, or to sign an AAB/APK uploaded to a store. The running application does not receive that signing private key or a runtime handle to it. Under Play App Signing, the private app-signing key may be controlled by Google, while the developer retains a separate upload key. 

The Android Keystore system is a runtime facility for application cryptographic keys. It can make key material non-exportable and can execute cryptographic operations in a system process or secure hardware without exposing raw key material to the application process. That is a different subsystem serving a different purpose. 

Even as a description of Android Keystore, “only `sign()` and `decrypt()`” is too narrow. Depending on the key algorithm and authorized purposes, Android Keystore keys can be used for encryption, decryption, signing, verification, MAC operations, key agreement, or related operations. 

The paragraph should be deleted or explicitly separated as an aside:

> **Separate concept:** Android Keystore stores cryptographic keys that an installed app uses at runtime. Such keys can be non-exportable, allowing the app to request operations without obtaining the raw key material. These runtime keys are unrelated to the app-signing key used to sign the APK or AAB before distribution.

This distinction is non-negotiable because the source currently teaches the wrong lifecycle and location for the signing private key.

### 3. “Signing key,” “keystore,” “certificate,” and “fingerprint” must be separated

**Classification: Genuine terminology error with conceptual consequences.**

The source repeatedly uses “hash key” for several incompatible things. A useful vocabulary is:

| Term | Meaning | Secret? |
|---|---|---:|
| **Signing private key** | Private key used to create an APK/AAB signature | Yes |
| **Signing certificate** | Public X.509 certificate containing the public key and identity metadata | No |
| **Keystore** | Container holding the private key and certificate, often protected by passwords | Yes, as a protected container |
| **Certificate fingerprint** | SHA-1 or SHA-256 digest of the certificate bytes | No |
| **Hex fingerprint** | Text representation of digest bytes such as `AA:BB:...` | No |
| **Base64 fingerprint** | Base64 representation of the same digest bytes | No |
| **Signature** | Cryptographic value created over signed content using the private key | No, but integrity-critical |

For a SHA-256 certificate fingerprint, the relevant relationship is:

```text
fingerprint bytes = SHA-256(DER-encoded signing certificate)
hex form          = colon-separated hexadecimal(fingerprint bytes)
freeRASP form     = Base64(fingerprint bytes)
```

Hex and Base64 are representations of the same digest bytes. Converting hex to Base64 does not create a new key or a different hash algorithm. Talsec’s documented command performs precisely that representation conversion. 

Consequently:

- `signingReport` does not generate signing keys. It reports signing configuration and certificate fingerprints for build variants.
- Firebase does not need the private key.
- freeRASP does not need the private key.
- A certificate fingerprint can be committed or embedded when required; it is not a signing secret.
- The private key and its passwords must not be embedded.

A technically accurate title would be **“Managing Android Signing Certificates and Fingerprints”** or **“Managing Android Signing Identities and Certificate Fingerprints.”**

### 4. “QA, debugging, and releasing” are not three cryptographic purposes

**Classification: Genuine conceptual error and missing architecture.**

The source starts from the premise that signing “hash keys” have three purposes. That organization hides the actual problem: identifying which certificate signs each installed artifact.

A better model is a signing-identity and distribution-channel matrix:

| Context | What signs the relevant artifact? | Fingerprint generally relevant to integrations |
|---|---|---|
| Local debug build | Debug certificate, usually from `~/.android/debug.keystore` | Debug certificate fingerprint |
| Local/internal release APK | Certificate configured in that release or flavor’s Gradle `signingConfig` | That local/internal release certificate fingerprint |
| Firebase App Distribution APK | The certificate that signed the uploaded APK; Firebase permits a debug key or app-signing key | The uploaded APK’s actual certificate fingerprint |
| AAB uploaded to Google Play | Upload key signs the uploaded bundle | Upload certificate is used by Play to authenticate the uploader |
| APK installed from Google Play | Google Play app-signing key | Play app-signing certificate fingerprint |
| Alternative store or direct sideload | Certificate signing the APK delivered by that channel | That delivered APK’s certificate fingerprint |
| Play signing-key upgrade | Potentially old or new Play app-signing certificate, depending on device OS and rollout | All applicable Play app-signing fingerprints |

Firebase App Distribution does not prescribe a special “QA keystore”; its documentation says that the APK must be signed with a debug key or an app-signing key. A dedicated QA key is therefore a project policy, not a Firebase or Flutter rule. 

Similarly, `flutter build apk --release` selects release mode but does not, by itself, establish which signing identity the project uses. That comes from the Gradle signing configuration. The final artifact should be inspected rather than inferred solely from the command name.

The source’s statement that one needs the “Play App Signing Certificate Hash” for the APK “to deploy” is especially misleading. The developer does not sign an upload with a hash. With Play App Signing:

1. The developer signs the uploaded AAB or APK with the upload private key.
2. Google verifies the upload certificate.
3. Google signs the APKs delivered to users with the Play app-signing private key.
4. API providers and runtime integrity configurations generally need the fingerprint of the certificate on the artifact users actually install. 

Android also supports Play app-signing key upgrades. The new signing key can be used for Android 13 and later while an older key continues to serve earlier Android versions. A service that identifies installed applications by certificate may therefore need more than one Play app-signing fingerprint. 

### 5. SHA-256 alone is not sufficient for all listed Firebase and Google features

**Classification: High-impact factual error missed by Opus.**

The source lists Google login, phone verification, App Check/Play Integrity, and Android OAuth clients, then says “the hex SHA-256 is enough.” The list of features is broadly relevant, but their algorithm requirements are not uniform.

| Integration | Relevant fingerprint requirement |
|---|---|
| Google Sign-In and certain Google Play services | SHA-1 |
| Android OAuth client | Package name plus SHA-1 certificate fingerprint |
| Firebase Phone Authentication using Play Integrity | SHA-256 |
| Firebase Phone Authentication reCAPTCHA fallback | SHA-1 |
| Firebase App Check with Play Integrity | SHA-256 |

Google’s client-authentication documentation explicitly states that Google Sign-In and certain other Google Play services require the SHA-1 of the signing certificate. Firebase’s Phone Authentication documentation calls for SHA-256 for the Play Integrity path and SHA-1 for the reCAPTCHA fallback. Firebase App Check with Play Integrity asks for SHA-256. 

The corrected guidance should be:

> Run `signingReport` to obtain both SHA-1 and SHA-256 values. Register the algorithm required by each Firebase or Google integration, for every certificate that can sign a build distributed through a supported channel.

The phrase “Firebase trusts the app signed with this certificate under this package name” is acceptable as a teaching shorthand only if it is immediately qualified. There is no single universal Firebase trust decision based on a fingerprint. Different products use package/certificate registration in different mechanisms:

- OAuth clients use the package and certificate to restrict an Android client identity.
- Phone Auth uses Play Integrity or a reCAPTCHA fallback to verify requests.
- App Check uses an attestation provider and tokens.
- Many Firebase services do not treat the certificate fingerprint as a standalone authentication secret.

The fingerprint is public identification material, not a secret credential. Android explicitly describes signing certificates as shareable and notes that API providers request their fingerprints. 

The article may also usefully warn readers that the continued use of SHA-1 as an API identifier does not mean SHA-1 should be selected for new cryptographic signatures or security designs. Here, SHA-1 is an exact certificate identifier required by the service’s registration protocol.

### 6. “Two keys: debug and release” is too restrictive

**Classification: Genuine overgeneralization.**

A simple personal project might register one debug certificate and one release certificate, but that is not a general Android rule. A project can need fingerprints for:

- Debug builds on multiple developer machines if debug keystores differ.
- Internal, QA, staging, and production flavors.
- Local release APKs.
- Firebase App Distribution builds.
- The Play upload certificate.
- One or more Play app-signing certificates.
- Builds signed for alternative stores.
- Old and new certificates during signing-key rotation.

The post should say “register every certificate that can sign a build for the integration being tested or deployed,” not “there are two keys.” The distinction matters because the upload certificate is often not the certificate found on a Play-installed APK. 

### 7. freeRASP must be configured for the certificate on the installed build

**Classification: Genuine technical error and missing distribution context.**

Talsec’s Flutter configuration uses `AndroidConfig.signingCertHashes`, a `List<String>` of certificate hashes, and its example says to supply release signing certificate hashes. Version 7.5.1’s own example also uses `signingCertHashes`. 

The source says that one “must include the SHA-256 hash key of the local keystore.” That is only correct for a build actually signed by that local keystore. It is wrong as general production guidance:

- A locally built release APK needs the local release certificate hash.
- A Firebase App Distribution APK needs the certificate hash of the APK distributed to testers.
- A Play-installed APK needs the Play app-signing certificate hash, not normally the upload certificate hash.
- Multiple supported signers or Play signing-key generations may require multiple entries.

The article should use “certificate fingerprint of each accepted installed artifact” rather than “local keystore hash.”

The command that converts the full SHA-256 hex fingerprint into Base64 is conceptually correct:

```shell
echo "AA:BB:CC:DD:..." | tr -d ':' | xxd -r -p | openssl base64
```

Talsec’s official documentation uses the same `echo | tr | xxd | base64` structure. Opus’s suggestion to use `printf` is a reasonable robustness preference, but the newline from `echo` is whitespace that `xxd -r -p` accepts; it is not a demonstrated correctness defect in this pipeline. The important requirements are that the source value be the complete SHA-256 fingerprint and that the conversion operate on the decoded 32 digest bytes rather than Base64-encoding the visible hex characters. 

The article also says the value must be included “in the build step,” but demonstrates `flutter run --release`. `flutter run` launches a build on a connected target; it is not the normal command for producing the APK or AAB uploaded to a distribution service. For production artifacts, the same definitions would have to be passed to the relevant `flutter build apk` or `flutter build appbundle` command, or supplied through the project’s build configuration.

Finally, `--dart-define` is a compile-time configuration mechanism, not a secret manager. Values read through Dart compilation-environment declarations become part of application behavior and may be recoverable from a compiled application. This is acceptable for certificate fingerprints and typically for `watcherMail`, because neither is a private signing credential. It would be unsafe for keystore passwords, API private keys, or other secrets. Dart documents these as compilation-environment declarations, and Flutter warns that secrets should not be stored in an application binary. 

### 8. The freeRASP error and `RASP_*` names are not presented as project-specific

**Classification: Likely genuine attribution error; exact origin requires repository verification.**

The source presents this as a general freeRASP exception:

```text
Unhandled Exception: Bad state: freeRASP initialization skipped:
missing RASP_WATCHER_MAIL, RASP_RELEASE_CERT_HASHES
```

The official freeRASP API names are `watcherMail` and `signingCertHashes`; version 7.5.1’s official example constructs a `TalsecConfig` directly with those fields. `RASP_WATCHER_MAIL` and `RASP_RELEASE_CERT_HASHES` look like Sangjun’s application-specific `--dart-define` names and validation layer, not standard freeRASP SDK error identifiers. 

The post should therefore say something such as:

> In this project, our configuration wrapper reads the following `--dart-define` values and throws this error when they are absent.

It should then show the code that:

1. Reads the definitions.
2. Parses one or more certificate hashes.
3. Builds `AndroidConfig(signingCertHashes: ...)`.
4. Constructs `TalsecConfig`.
5. Starts freeRASP.

Without that bridge, readers may search Talsec documentation for environment variables that the package itself does not define.

### 9. The source overstates what RASP automatically does

**Classification: Genuine security-interpretation error.**

The source defines RASP as technology that “detects and blocks the threat.” For freeRASP, the more accurate statement is that it performs checks, reports detected conditions through callbacks, and lets the application choose an appropriate reaction. Talsec’s Flutter documentation gives examples such as logging an event, displaying a warning, or terminating the application. Its API’s `killOnBypass` option has a narrower purpose: killing the app when unwanted manipulation of callback mechanisms is detected. 

A better description is:

> Runtime Application Self-Protection performs checks inside a running application and can notify the application of conditions such as tampering, debugging, hooking, or an unsafe environment. The application or SDK may then react according to configured policy.

The source’s description of freeRASP as simply “an open source package” also needs qualification. The Flutter wrapper is publicly hosted and its open-source portion is MIT-licensed, but Talsec states that the SDK consists of open-source and binary components and is distributed under a freemium/fair-usage model. 

Most importantly, a certificate hash embedded in the application is not an unmodifiable trust anchor. An attacker capable of repackaging and patching the app may try to patch the expected hash, bypass the check, or hook the callback. RASP is defense-in-depth, not a replacement for server-side authorization, App Check, Play Integrity, secure session design, or backend fraud controls. Talsec itself describes freeRASP as having limited resilience against bypasses compared with its higher-assurance commercial product. 

### 10. The command snippets contain real execution errors

**Classification: Genuine command errors, plus some optional portability improvements.**

The following corrections are high confidence:

1. `/A.pplications/...` is a typo and produces an invalid path.
2. The default debug-keystore path should include the user’s home directory: `~/.android/debug.keystore`, not an ambiguous project-relative `.android/debug.keystore`.
3. The Android build system or Gradle task reads the signing configuration; “the compiler reads the key” is imprecise.
4. In a fenced Markdown shell block, `\\` represents two literal backslashes. A shell line continuation requires one final backslash.
5. `flutter run --release` should not be presented as the production artifact-building command.

Android’s official documentation gives `$HOME/.android/debug.keystore` as the default path and notes that the actual location should be confirmed from the signing report when a project overrides it. 

A corrected local shell example is:

```shell
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
cd android
./gradlew :app:signingReport
```

This is still macOS- and Android-Studio-layout-specific. Permanently appending it to `~/.zshrc` should be optional, because repeated execution adds duplicate lines and some developers configure Gradle’s JDK elsewhere.

A corrected multiline command is:

```shell
flutter run --release \
  --dart-define=RASP_WATCHER_MAIL=email@example.com \
  --dart-define=RASP_RELEASE_CERT_HASHES="HASH_KEY"
```

For a distributable artifact, the corresponding pattern would be:

```shell
flutter build appbundle --release \
  --dart-define=RASP_WATCHER_MAIL=email@example.com \
  --dart-define=RASP_RELEASE_CERT_HASHES="HASH_KEY"
```

That second example is valid only if the project’s Dart code actually maps those custom definitions into `TalsecConfig`.

### 11. The AGP 9/freeRASP core observation is supported, but its wording needs correction

**Classification: Core claim supported; explanation and scope need revision.**

The source says freeRASP 7.5.1 is associated with AGP 8.8.1 and contains a problematic global option in `consumer-rules.pro`. The tagged source confirms both points:

- Its Android build script declares `com.android.tools.build:gradle:8.8.1`.
- Its `consumer-rules.pro` contains `-flattenpackagehierarchy`. 

Android’s library-optimization guidance says that consumer rules are bundled with libraries and applied to consuming apps, that library R8 configuration can globally affect the app, and that library authors should not place `-flattenpackagehierarchy` in consumer rules. AGP 9 documentation describes stricter handling of problematic global options. 

Therefore, Opus is too harsh in calling the source’s conclusion a non sequitur. The source’s intended reasoning is valid:

1. A consumer rule affects the consuming app.
2. `-flattenpackagehierarchy` is a global repackaging option.
3. A library should not impose that whole-program policy.
4. AGP/R8 rejecting or ignoring such a library-supplied option is expected behavior.

However, the source should correct four details:

- **“Built and tested”** is stronger than the evidence shown. The tag proves that the plugin declares AGP 8.8.1; it does not, by itself, document the complete test matrix.
- **“Flattening the APK build output structure”** is too broad. The option controls package reassignment for obfuscated classes; it does not generally flatten every part of the APK.
- **“Security issues”** is not the primary rationale stated by Android’s guidance. The official rationale emphasizes app-wide optimization policy, binary size, performance, startup behavior, ANRs, app quality, and user experience.
- **The exact AGP 9 failure mode must be shown.** AGP 9’s release note distinguishes library/feature publishing failures from app builds consuming global options embedded in precompiled JAR/AAR dependencies. A Flutter plugin included as a source subproject may follow a different path from a precompiled AAR. The post should quote or summarize the actual build error from Sangjun’s project before generalizing. 

A more defensible replacement is:

> freeRASP 7.5.1 declares AGP 8.8.1 and includes `-flattenpackagehierarchy` in its consumer R8 rules. Android’s current library guidance classifies this as an inappropriate global consumer option because it affects whole-app repackaging rather than only preserving code required by the library. AGP 9 applies stricter validation or handling to such options. In this project, the upgrade produced the following build error: **[insert exact error and task name]**. The rule should be removed or corrected upstream, or the dependency should be patched or upgraded in a reproducible way.

## Likely Issues / Needs Verification

### 1. Confirm the origin of the exact freeRASP initialization exception

No official API or version-7.5.1 example found in the reviewed references defines `RASP_WATCHER_MAIL` or `RASP_RELEASE_CERT_HASHES`. The names likely come from Sangjun’s own configuration wrapper. This should be confirmed by searching the repository for:

```text
freeRASP initialization skipped
RASP_WATCHER_MAIL
RASP_RELEASE_CERT_HASHES
```

The article should cite the local source file and distinguish an application-level guard from an SDK-thrown error.

### 2. Confirm whether `RASP_RELEASE_CERT_HASHES` is singular, comma-separated, JSON, or otherwise parsed

The official freeRASP field is a list. The shell example supplies one string. The post does not show whether the project:

- Accepts a single hash only.
- Splits a comma-separated string.
- Parses JSON.
- Supports multiple Play signing certificates.
- Trims whitespace.
- Rejects an empty list.

Before revising the prose, inspect the parser and include an example that matches its actual syntax.

### 3. Confirm the exact Firebase App Distribution artifact

The post assumes a local release keystore for Firebase App Distribution. That is plausible for an uploaded, locally signed APK, but the article should state whether the workflow uploads an APK or AAB and which certificate appears on the tester-installed artifact. Firebase supports APK and AAB distribution at the product level, while its APK instructions require the APK to be signed using the normal build process. 

The safest check is to download or locate the exact tester artifact and inspect its certificate instead of assuming that the “release” Gradle variant and the installed artifact are identical.

### 4. Confirm every release variant’s Gradle signing configuration

`./gradlew signingReport` reports configured variants. A `release` variant can be unsigned, use a shared key, or use a flavor-specific key depending on the Gradle files. The article should not promise that readers will always see a usable `Variant: release` certificate without first configuring release signing.

Check:

- `android/app/build.gradle.kts`
- `signingConfigs`
- `buildTypes`
- `productFlavors`
- Any CI-injected Gradle properties
- Whether the upload key and local release key are the same

### 5. Capture the AGP 9 build failure exactly

Before publishing a general AGP compatibility conclusion, record:

- AGP version.
- Gradle version.
- Flutter version.
- Java/JDK version.
- freeRASP version.
- Failing Gradle task.
- Exact diagnostic.
- Whether the dependency was included as source or as a precompiled artifact.
- Whether the build failed, emitted a warning, or ignored the option.

This evidence will determine whether the source should say “AGP 9 rejects,” “library publishing fails,” “the application ignores,” or “this Flutter plugin configuration fails.”

### 6. Verify the correct remediation for the consumer rule

Editing files inside the pub cache can prove a diagnosis but is not a durable project fix. Cache contents may be regenerated, differ on CI, or change on dependency resolution. Prefer, in order:

1. Upgrade to a version that fixes the rule.
2. Use an upstream patch release.
3. Pin a fork or Git revision with the change.
4. Apply a reproducible dependency patch during CI.
5. Use a temporary cache edit only as a clearly marked diagnostic workaround.

The article currently explains the issue but does not state a remediation. Any added solution should be reproducible across developer machines and CI.

### 7. Pin the freeRASP version deliberately

Opus’s claim that 7.5.1 might not exist is wrong. It was released on March 24, 2026. However, 8.0.0 was released on May 13, before the post’s May 21 publication date, and included breaking Flutter API changes. 

The source should say either:

- “This project is pinned to freeRASP 7.5.1,” or
- “The following applies specifically to 7.5.1; check the current changelog before using it.”

Do not mechanically rewrite the post to current 8.x API terminology without checking the project’s `pubspec.lock` and migration status.

### 8. Verify the Jekyll image path

`assets/img/image-fingerprint.png` is a relative URL. Its correctness depends on the repository’s Jekyll configuration, permalink structure, base URL, and theme conventions. This is not presently a proven error.

Check the built site or generated HTML. If it resolves incorrectly, use the repository’s established asset convention, potentially `/assets/img/image-fingerprint.png` or a front-matter image base path.

### 9. Verify whether the email address is acceptable in the shipped application

`watcherMail` is not a signing secret, but it is part of the app’s freeRASP configuration and may be discoverable. Sangjun should decide whether a personal email address, team alias, or purpose-specific monitoring mailbox is appropriate. Talsec uses this value for reports and portal access. 

### 10. Verify assumptions about key rotation

If Play App Signing key upgrade is enabled or planned, determine which certificate fingerprints are used for:

- Android 13 and later.
- Earlier Android versions.
- Fresh installs.
- Updates.
- OAuth/Firebase registrations.
- freeRASP’s accepted hash list.

The article should not introduce rotation details unless they are checked against the application’s Play Console configuration.

## Opus Review Assessment

### Strongest Opus criticisms

| Opus finding | Assessment | Recommended disposition |
|---|---|---|
| **C1: `key.properties` packaging and threat model** | Correct and critical. The source reverses the build-time security model. Opus should additionally have stated that `key.properties` does not contain the private key and is not itself a secure secret store. | Accept, with a more precise replacement. |
| **C2: app-signing key versus Android Keystore** | Correct and critical. This is the source’s clearest subsystem conflation. | Accept. Delete or explicitly reframe the paragraph. |
| **M1: “hash key” terminology** | Correct. The confusion affects secrecy, distribution, and the meaning of the commands. | Accept and apply consistently throughout. |
| **M2: debug-keystore path** | Correct that the default is `~/.android/debug.keystore`, not an unexplained relative path. | Accept the path correction. |
| **T1: `/A.pplications` typo** | Correct and execution-breaking. | Accept. |
| **T2: doubled backslashes** | Correct in a fenced Markdown code block. | Accept. |
| **T5: remove “app memory” framing** | Correct. Packaging and build configuration are the relevant mechanisms. | Accept. |

Opus was particularly effective in recognizing that the apparent security assurance in the source is backwards: the file is safe in the standard workflow because it is not packaged, not because it is packaged in an unreadable form. 

### Weak, overstated, or incomplete Opus criticisms

#### M3: The AGP explanation is “unsupported” or a “non-sequitur”

This is overstated. The source’s wording is poor, but the logical core is supported by the official references and the freeRASP 7.5.1 tag. A library’s consumer rule affects the consuming application, `-flattenpackagehierarchy` is explicitly listed as an inappropriate global consumer option, and AGP 9 tightened handling of such options. Opus’s own suggested rewrite ultimately reaches nearly the same conclusion as the source: AGP’s restriction is intended behavior. 

The appropriate criticism is not “the conclusion is unsupported.” It is:

- The causal explanation is compressed.
- The failure mode is not cited.
- “Built and tested” is not fully evidenced.
- “APK output structure” is imprecise.
- “Security issues” is an unsupported addition to the official rationale.

#### T3: The Base64 pipeline is “brittle” because of `echo`

This is a weak criticism. Talsec’s own documentation uses essentially the same pipeline with `echo`. Replacing it with `printf '%s'` is a reasonable shell-style improvement, and the requirement for a complete 64-hex-character SHA-256 fingerprint is useful exposition, but neither establishes that the source command is wrong. 

#### M2: Publish the default debug-keystore credentials

Correcting the path is important. Adding the conventional debug alias and passwords is optional and not central to the article’s purpose. It could distract readers or be misread as guidance for release signing. If included, it should be clearly labeled as well-known debug-only defaults and not a secret-management pattern.

#### T7: The Jekyll image path is probably wrong

Opus properly phrases this as a check, but it remains a repository-specific verification item, not a technical defect. It should not be placed on the same certainty level as the malformed shell commands.

### Incorrect or misleading Opus claims

#### “I could not confirm that freeRASP 7.5.1 exists”

This is wrong. The official changelog records version 7.5.1 on March 24, 2026. The stronger review point is that 8.0.0 had already been released on May 13, before the source post’s May 21 date. Sangjun may still have been documenting a deliberately pinned dependency. 

#### The implication that the Firebase section is “mostly correct” without flagging SHA-256-only guidance

The broad feature list is reasonable, but Opus misses the most actionable error in that section. The post tells readers that SHA-256 alone is enough immediately after listing integrations that require SHA-1. This should have been a major finding, not left unmentioned. 

#### “Everything else is polish” after C1 and C2

This conclusion is too dismissive. Even after C1 and C2, the source would still contain major deployment errors or omissions:

- SHA-256-only Firebase guidance.
- Upload versus Play app-signing key confusion.
- The claim that only two fingerprints are required.
- A local-keystore-only freeRASP recommendation.
- A likely project-specific exception attributed to freeRASP generally.
- A `flutter run` example presented as a build/deployment step.
- An overstatement of RASP blocking and open-source status.

### Important matters Opus missed

1. **`key.properties` does not contain the private key.**
2. **`key.properties` is plaintext and not intrinsically secure.**
3. **SHA-256 alone is not sufficient for all listed Firebase/Google integrations.**
4. **The Play upload certificate and Play app-signing certificate have different roles.**
5. **The certificate on the installed artifact—not simply the “local keystore”—must be accepted by freeRASP.**
6. **The official freeRASP field is a list, allowing multiple hashes.**
7. **The exact `RASP_*` error appears project-specific.**
8. **`flutter run --release` is not the normal production artifact command.**
9. **`--dart-define` is not appropriate for secrets.**
10. **RASP detection and application reaction are separate.**
11. **freeRASP consists of open-source and binary components.**
12. **Play signing-key upgrades can produce multiple relevant app-signing certificates.**
13. **The Android Keystore paragraph’s operation list is incomplete even on its own terms.**
14. **The article should inspect the final APK certificate rather than relying solely on intended Gradle configuration.**
15. **The source conflates build mode, environment, distribution channel, and signing identity.**

### Where Sangjun should be cautious before revising from Opus

Do not copy Opus’s proposed text unchanged in the following places:

- Replace “never leaves the build machine” with a controlled-secret-lifecycle statement that also covers CI and remote signing.
- Do not add default debug-keystore credentials unless they serve a concrete teaching purpose.
- Do not change version-specific freeRASP names based only on current documentation. Check version 7.5.1 and the project lockfile.
- Do not remove the AGP discussion merely because Opus calls it unsupported. The core is documented; improve its evidence and scope.
- Do not replace the working Base64 pipeline solely to satisfy a stylistic preference.
- Do not treat the relative image path as broken until the generated site confirms it.
- Do not register every known fingerprint indiscriminately. Register only certificates and algorithms required by the project’s actual distribution channels and integrations.

Opus also relies on Codemagic and GeeksforGeeks for points that have direct official Android or Flutter documentation. Those secondary references are not necessarily wrong, but a security-focused correction should prefer primary sources.

## Additional Issues ChatGPT Pro Found

### 1. Verify the certificate on the final artifact, not just the intended configuration

`signingReport` is useful for viewing Gradle variants, but the strongest check for an APK is the artifact itself:

```shell
apksigner verify --print-certs path/to/app-release.apk
```

Android’s `apksigner` documentation identifies `--print-certs` as the way to display APK signing-certificate information. 

For an uploaded AAB, `keytool -printcert -jarfile app.aab` shows the certificate signing that uploaded bundle. Under Play App Signing, that upload certificate is not necessarily the certificate on APKs Google distributes to users. Google’s documentation explicitly warns about that difference. 

The article should recommend this verification sequence:

1. Use `signingReport` to understand the configured variant.
2. Inspect the locally produced APK with `apksigner`.
3. Use Play Console’s app-signing certificate for Play-distributed builds.
4. Register the appropriate SHA-1, SHA-256, or Base64-encoded SHA-256 value with each integration.

### 2. The source treats package-name imitation too broadly

An attacker can build another application using the same package name in a separate distribution context, but Android’s signature checks prevent that differently signed APK from updating an already installed legitimate application. Package name plus certificate fingerprint is used by API providers to identify a particular signed application identity.

A clearer explanation would be:

> A package name is not globally secret or cryptographically unique. API providers therefore bind an Android client registration to both the package name and a signing-certificate fingerprint. A differently signed application using the same package name does not satisfy that registration.

This preserves the source’s useful intuition without suggesting that matching a package name alone defeats Android’s update-signature model.

### 3. “App Check and Play Integrity” should not be written as one undifferentiated item

Firebase App Check can use Play Integrity as its Android attestation provider. Play Integrity is also used in other flows, including Firebase Phone Authentication. The source should write:

> Firebase App Check when configured with the Play Integrity provider.

This avoids teaching that “App Check” and “Play Integrity” are interchangeable names.

### 4. The post should distinguish certificate identification from attestation

A certificate fingerprint answers a question such as “which certificate signed this package?” It does not, by itself, prove that:

- The device is uncompromised.
- The application binary is currently unmodified in memory.
- The request came from an authentic installation.
- The user is authorized.
- The backend request has not been replayed.

App Check/Play Integrity, RASP checks, Android package-signature verification, OAuth client restrictions, and backend authentication address different layers. The article currently places them too close together under one “fingerprint means trust” explanation.

### 5. A public fingerprint is sufficient for comparison, not for secrecy

freeRASP can compare the installed application’s signing certificate with a compiled expected fingerprint because the goal is to notice a mismatch after repackaging. The expected fingerprint does not have to be secret. Its usefulness comes from comparison and from increasing the work required to produce a modified accepted build, not from confidentiality.

This is analogous to allow-listing an expected public identifier. It should not be described as a secret “hash key.”

### 6. `--dart-define` values may leak through shell history and CI output

Even when the values are not cryptographic secrets, command-line values can appear in:

- Shell history.
- CI logs.
- Process listings during execution.
- Build metadata.
- Generated scripts.

The certificate fingerprints are public, but a personal watcher email may still be operationally sensitive. A team alias or CI-provided non-secret configuration may be preferable.

### 7. The source’s advice about “variables in other codes” is too vague

The relevant rule is not “never use these values as variables.” Gradle has to use signing values programmatically. The security rule is:

- Do not embed the private key, keystore bytes, or passwords in application code or resources.
- Do not generate `BuildConfig` constants containing them.
- Do not pass them into Dart code.
- Do not log them.
- Keep build-time access separate from runtime application configuration.

Certificate fingerprints, by contrast, often must be present in application or service configuration.

### 8. The post should state whether the upload key and local release key are the same

Flutter’s standard Play deployment flow often configures the locally held keystore as an upload key. A project may nevertheless use a separate internal release key. The article currently labels one key “QA” and another fingerprint “Play release” without explaining whether:

- The local release private key is also the Play upload key.
- A separate QA key exists.
- The Play app-signing key was generated by Google.
- Firebase App Distribution uses the same package name as production.
- QA and production flavors share an OAuth client.

Without this information, readers cannot generalize the examples safely.

### 9. Key aliases and certificate fingerprints should not be called “keys”

`keyAlias` identifies an entry inside a keystore. It is not a cryptographic key itself. Likewise, SHA-1 and SHA-256 outputs are fingerprints, not keys. The post would benefit from a short diagram:

```text
release-keystore.jks
└── alias: upload
    ├── private signing key        [secret]
    └── signing certificate        [public]
        ├── SHA-1 fingerprint      [public identifier]
        └── SHA-256 fingerprint    [public identifier]
            └── Base64 encoding    [freeRASP representation]
```

### 10. RASP reactions require a product and user-experience policy

Blocking an app whenever a detector fires can cause false-positive lockouts, support incidents, accessibility problems, or denial of service against legitimate users. The article should not say “detects and blocks” without discussing:

- Which detections are fatal.
- Which merely warn or collect telemetry.
- Whether offline use is allowed.
- How users recover.
- How false positives are monitored.
- Whether a backend limits sensitive operations instead of killing the entire app.

This is especially important for root, debugging, emulator, unofficial-store, VPN, or developer-mode detections, whose risk depends on the application.

### 11. The AGP section should distinguish consumer keep rules from global optimization policy

A `consumer-rules.pro` file is not simply a set of rules that “emerge” in a consuming build. More precisely:

- The library packages consumer R8 rules.
- The consuming app’s R8 invocation consumes them.
- Targeted keep rules can be necessary for reflection or JNI.
- Global options are inappropriate because they impose whole-program behavior.
- `-flattenpackagehierarchy` changes package placement for obfuscated classes rather than merely preserving library functionality.

This distinction explains why consumer rules are legitimate in general while this particular option is problematic.

### 12. The source should not imply that the AGP restriction is primarily a security control

Removing inappropriate global rules can improve optimization freedom, app size, startup behavior, memory use, and stability. Those are the reasons emphasized by Android’s library guidance. A security library may choose obfuscation for resilience, but the AGP consumer-rule restriction itself is not adequately characterized as preventing generic “security issues.” 

### 13. The source should date-stamp volatile configuration advice

The post contains version-sensitive facts about:

- freeRASP.
- AGP.
- Gradle.
- Kotlin.
- Java.
- Firebase verification flows.
- Play App Signing.

A note such as the following would reduce future ambiguity:

> Verified for freeRASP 7.5.1, AGP 8.8.1, Gradle **[version]**, Flutter **[version]**, and Java 17 on May 21, 2026.

Because 8.0.0 had already been released before the post date, documenting the pinned stack is more useful than implying general currency. 

## Style or Exposition Notes

These items are not equivalent to security or command errors.

### Recommended article structure

The current article jumps from secret handling to Android Keystore, Firebase, freeRASP, and R8 without first defining the objects. A clearer order would be:

1. **Definitions:** private key, certificate, keystore, fingerprint, signature.
2. **Signing identities by channel:** debug, local release, Play upload, Play app signing.
3. **How to inspect configured and final artifacts.**
4. **Firebase/Google algorithm requirements.**
5. **freeRASP’s Base64 representation and accepted signer list.**
6. **Project-specific `--dart-define` wrapper.**
7. **AGP 9 and the `consumer-rules.pro` case study.**
8. **Security limitations and operational cautions.**

### Heading hierarchy

The post goes from `##` directly to `####`. For accessibility, predictable document structure, and a stable table of contents, use `###` for the numbered subsections.

For example:

```markdown
## Signing Identities

### 1. Local QA or Internal Distribution
### 2. Debug Builds
### 3. Google Play Distribution
```

### Title and section naming

“Managing Signing Hash” and “How to generate the hash keys” are technically misleading. Better alternatives include:

- **Managing Android Signing Certificates and Fingerprints**
- **Android Signing Identities for Debug, Firebase, Google Play, and freeRASP**
- **How to obtain signing-certificate fingerprints**

### Grammar and wording

Suggested corrections include:

- “the hash keys for signing in the project use” → “the project uses several signing identities and certificate fingerprints”
- “For debugging” → “Debug builds”
- “For releasing” → “Google Play distribution”
- “more stricter” → “stricter”
- “Base 64” → “Base64”
- “security tech” → “security technique” or “runtime security SDK”
- “blocks the threat” → “reports detected conditions and can trigger configured responses”
- “the `.pro` rules emerge” → “the consumer rules are packaged with the library and applied during optimization of the consuming app”
- “one can choose either release or debug” → “select the block corresponding to the variant and certificate you intend to distribute”

The repeated “one” and “his or her” constructions are grammatically possible but make the technical prose feel indirect. Direct imperative wording is clearer: “Run the command,” “Select the variant,” and “Register the fingerprint.”

### Code-block conventions

For commands meant to be copied, omit the `$` prompt:

```shell
./gradlew :app:signingReport
```

For transcripts, retain `$` but label the block as an example session. Mixing the two styles can cause users to copy the prompt character.

### `JAVA_HOME` exposition

The post should not imply that every reader must modify `~/.zshrc`. The command is:

- macOS-specific.
- Android Studio installation-path-specific.
- Dependent on the selected JDK.
- Persistent and potentially duplicative.

It is better to say why `JAVA_HOME` is being set and offer the export as one macOS example.

### Unused front matter

The post sets `math: true` but contains no mathematics. This is harmless but unnecessary unless equations or math rendering will be added.

### Screenshot context

The Firebase screenshot should include useful alt text describing what it shows, not merely `website-fingerprint`. For example:

```markdown
![Firebase console showing the Add fingerprint control for an Android app](/assets/img/image-fingerprint.png)
```

The final path must be tested against the site’s Jekyll configuration.

### Suggested compact reference table for the article

A table near the beginning would prevent most of the current ambiguity:

| Build or channel | Private key used during submission/build | Certificate seen on installed APK | Fingerprint to register |
|---|---|---|---|
| Debug | Debug private key | Debug certificate | Debug SHA-1/SHA-256 as required |
| Local release APK | Local release private key | Local release certificate | Local release fingerprint |
| Play upload | Upload private key | Usually not the Play-installed certificate | Upload fingerprint only where specifically required |
| Play distribution | Google-controlled app-signing private key | Play app-signing certificate | Play app-signing fingerprint |
| Alternative store | Depends on store workflow | Certificate on store-delivered APK | That certificate’s fingerprint |

## References to Check

### Primary review materials

- Source post: `/Users/sirius/sangjun-sim.github.io/_posts/2026-05-21-programming-android-signingHash.md`. 
- Opus review: `/Users/sirius/sangjun-sim.github.io/opus-review-2026-07-11-programming-android-signingHash.md`. 

### Android and Flutter signing

1. [Android Developers — Sign your app](https://developer.android.com/studio/publish/app-signing)  
   Use this as the primary reference for keystores, private keys, certificates, debug signing, upload keys, Play app-signing keys, API-provider fingerprints, and signing-key upgrades. 

2. [Flutter — Build and release an Android app](https://docs.flutter.dev/deployment/android)  
   Use this for the supported `key.properties` structure and Flutter’s Gradle signing setup. 

3. [Android Developers — `apksigner`](https://developer.android.com/tools/apksigner)  
   Use `apksigner verify --print-certs` to inspect the actual signing certificates on a built APK. 

4. [Google Play services — Client authentication](https://developers.google.com/android/guides/client-auth)  
   Use this for SHA-1 requirements, `signingReport`, APK/AAB inspection, and the distinction between an uploaded artifact and a Play-distributed artifact. 

### Android runtime key storage

5. [Android Developers — Android Keystore system](https://developer.android.com/privacy-and-security/keystore)  
   Use this to keep runtime non-exportable keys separate from app-signing keys. 

6. [Android API Reference — `KeyProperties`](https://developer.android.com/reference/android/security/keystore/KeyProperties)  
   Use this to verify supported key purposes rather than reducing Android Keystore to `sign()` and `decrypt()`. 

7. [Android Developers — Hardcoded cryptographic secrets](https://developer.android.com/privacy-and-security/risks/hardcoded-cryptographic-secrets)  
   Use this when explaining why signing credentials or other secrets must not be embedded in source, resources, or the app binary. 

### Firebase

8. [Firebase — Phone Authentication on Android](https://firebase.google.com/docs/auth/android/phone-auth)  
   Check both SHA-256 for the Play Integrity route and SHA-1 for the reCAPTCHA fallback. 

9. [Firebase — App Check with the Play Integrity provider](https://firebase.google.com/docs/app-check/android/play-integrity-provider)  
   Use this for the SHA-256 requirement and App Check terminology. 

10. [Firebase — Distribute Android apps using the console](https://firebase.google.com/docs/app-distribution/android/distribute-console)  
    Use this to document what type of signed artifact is sent to testers and to avoid presenting a dedicated QA key as a Firebase requirement. 

### freeRASP and Talsec

11. [Talsec — freeRASP Flutter integration](https://docs.talsec.app/freerasp/freerasp/integration/flutter)  
    Check `TalsecConfig`, `AndroidConfig.signingCertHashes`, `watcherMail`, `isProd`, callbacks, and the currently documented Android toolchain. 

12. [Talsec — freeRASP Flutter API](https://docs.talsec.app/freerasp/freerasp/integration/flutter/api)  
    Use this for the exact field types, especially `List<String> signingCertHashes`, and the limited meaning of `killOnBypass`. 

13. [Talsec — Convert SHA-256 fingerprint to Base64](https://docs.talsec.app/freerasp/freerasp/wiki/getting-signing-certificate-hash/result-convert-the-sha-256-hash-to-base64-format)  
    Use this to validate the conversion pipeline and terminology. 

14. [freeRASP Flutter changelog](https://github.com/talsec/Free-RASP-Flutter/blob/master/CHANGELOG.md)  
    Use this to verify that 7.5.1 was released on March 24, 2026, and 8.0.0 on May 13, 2026. 

15. [freeRASP Flutter repository](https://github.com/talsec/Free-RASP-Flutter)  
    Review the license statement explaining that the SDK contains open-source and binary parts. 

16. [freeRASP 7.5.1 Android build script](https://raw.githubusercontent.com/talsec/Free-RASP-Flutter/v7.5.1/android/build.gradle)  
    Use this to verify AGP 8.8.1, Java 17, and the consumer-rules declaration for that exact tag. 

17. [freeRASP 7.5.1 consumer rules](https://raw.githubusercontent.com/talsec/Free-RASP-Flutter/v7.5.1/android/consumer-rules.pro)  
    This is the direct evidence for `-flattenpackagehierarchy`. 

18. [freeRASP 7.5.1 Flutter example](https://raw.githubusercontent.com/talsec/Free-RASP-Flutter/v7.5.1/example/lib/main.dart)  
    Use this to compare the post’s custom environment variables with the package’s actual configuration API at the pinned version. 

### AGP and R8

19. [Android Developers — AGP 9.0 release notes](https://developer.android.com/build/releases/agp-9-0-0-release-notes)  
    Use this for the precise behavior of global options in consumer rules and the distinction between publishing and consuming precompiled dependencies. 

20. [Android Developers — Optimization for library authors](https://developer.android.com/topic/performance/app-optimization/library-optimization)  
    Use this for consumer-rule semantics and the explicit prohibition on `-flattenpackagehierarchy` in library consumer rules. 

### Dart and Flutter configuration security

21. [Dart — Compilation environment declarations](https://dart.dev/libraries/core/environment-declarations)  
    Use this to explain what `--dart-define` values are and when they are evaluated. 

22. [Flutter — Obfuscate Dart code](https://docs.flutter.dev/deployment/obfuscate)  
    Use the warning that obfuscation does not make embedded secrets safe. 

### Security standards and e-book candidates

23. [OWASP Mobile Application Security](https://mas.owasp.org/)  
    Use the MASVS and MASTG material for mobile resilience, key storage, app signing, and runtime integrity testing. 

24. [No Starch Press — *Android Security Internals* by Nikolay Elenkov](https://nostarch.com/androidsecurity)  
    This book is useful for foundational Android package signing, cryptographic providers, and credential storage. It was published in 2014, so it should be treated as historical architecture material rather than authority for modern Play App Signing, Firebase, AGP 9, or freeRASP. 

No relevant local Android e-book or PDF was identified in the supplied local/Drive checks. For the claims in this post, current official web documentation is materially more authoritative than an old local e-book would be.

## Questions for Sangjun

1. **What exact artifacts are distributed through each channel?**  
   Is Firebase App Distribution receiving an APK or AAB? Is Google Play receiving an AAB? Are any APKs distributed directly or through another store?

2. **Which private keys and certificates exist in the project?**  
   List the debug key, internal/QA release key, Play upload key, Play app-signing key, flavor-specific keys, and any rotated Play certificates. Are any of these actually the same key?

3. **What does `android/key.properties` contain in this repository?**  
   Does it contain only the usual `storeFile`, passwords, and alias? Is the keystore itself inside or outside the repository? How are both files provisioned in CI?

4. **Which Firebase and Google features does the app actually use?**  
   Is Google Sign-In enabled? Phone Authentication? App Check with Play Integrity? An Android OAuth client? Which flows require SHA-1, SHA-256, or both?

5. **Which certificate signs the build that testers actually install from Firebase App Distribution?**  
   Has that exact APK been checked with `apksigner verify --print-certs`?

6. **Which certificate signs the APK installed from Google Play?**  
   Have the SHA-1 and SHA-256 values been copied from Play Console’s app-signing certificate rather than from the upload keystore?

7. **Has the Play app-signing key ever been upgraded?**  
   If so, does the app need both old and new app-signing fingerprints for different Android versions or update paths?

8. **Where is the exact `freeRASP initialization skipped` exception implemented?**  
   Is it in Sangjun’s Dart code, a shared configuration package, generated code, or freeRASP itself? The article should cite that implementation.

9. **How is `RASP_RELEASE_CERT_HASHES` parsed?**  
   Does it support multiple values? What separator or serialization format is used? How are malformed or empty values handled?

10. **Why is `flutter run --release` the main example?**  
    Is the goal local runtime testing, Firebase distribution, or Play deployment? Would `flutter build apk` or `flutter build appbundle` better match the described workflow?

11. **What is the intended response to each freeRASP callback?**  
    Which detections terminate the app, which disable sensitive operations, which warn the user, and which only produce telemetry? What is the false-positive recovery path?

12. **What exact AGP 9 error occurred?**  
    Record the AGP, Gradle, Java, Flutter, and freeRASP versions, the failing task, and the complete diagnostic. Does removing `-flattenpackagehierarchy` fix the same build without other changes?

13. **Why was freeRASP 7.5.1 selected when 8.0.0 had been released before the post date?**  
    Was the project intentionally pinned because of compatibility, or was the version simply not updated? The answer determines whether the article needs a pinning note or a migration.

14. **Are any actual secrets passed through `--dart-define`?**  
    The certificate hashes and monitoring email are configuration values, but keystore passwords, private API credentials, and private keys must remain outside the app binary.

15. **What security guarantee is expected from freeRASP?**  
    Is it intended to raise attacker cost, provide telemetry, enforce a hard block, protect backend operations, or satisfy a compliance requirement? Which server-side control remains authoritative when client checks are bypassed?

16. **Can the article state the identity rule in one sentence?**  
    A strong candidate is: “Register the fingerprint of every certificate that can sign an artifact actually used by the relevant integration, using the hash algorithm and representation that the integration requires.”

**Evidence summary:** The high-confidence conclusions above are grounded in the two attached Markdown files and primary Android, Flutter, Firebase, Google Play services, Talsec/freeRASP, AGP/R8, Dart, and OWASP references. The unresolved points are project-specific: the exact App Distribution artifact, custom `RASP_*` parser and exception, actual AGP 9 build failure, Jekyll asset path, CI secret lifecycle, and Play Console signing-key state.