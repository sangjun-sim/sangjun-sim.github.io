---
title: "Managing signing hash"
date: 2026-05-21 15:00:00 +0900
categories: [Programming, Android]
tags: [android]
math: true
toc: true
---

## Signing Hash Management

One should remember that the hash keys for signing in the project use for three different purposes:

1. **Quality Assurance**. One uses the `keystore` for the local release deployed via Firebase App Distribution or the command:
``` shell
$ flutter build apk --release
```
The information on the `keystore` is saved in `android/key.properties`. In addition, `build.gradle.kts` reads this hash key.

2. **For debugging**. The debug keystore is the default signing key for the development. If one builds the app by `flutter run` or the debug mode, the compiler reads the key from the file `.android/debug.keystore`.

3. **For releasing**. One needs to use the "Play App Signing Certificate Hash" for the APK to deploy to Google Play Store.

## How to generate the hash keys for each purpose?

- **Firebase fingerprint**. If one generates the keys for the Firebase fingerprint, using the hex SHA-256 is enough. There are two keys required for the fingerprint: the debug mode and the release one. These are obtained by entering the following command in the `android/` folder:
``` shell
$ ./gradlew signingReport
```
Then each hash key is printed in `:app:signingReport` as the output. After extracting the hash key suitable for each purpose, one can add the fingerprint to the Firebase site (`Project Settings > General > Your apps > Add fingerprint`):

![website-fingerprint](assets/img/image-fingerprint.png)

- **freeRASP**. Since the **freeRASP** expects the Base 64 SHA-256, one must use `keytool` or transform the hex SHA-256 obtained from `signingReport` to Base 64 one. Here, it is shown how to transform the key into the Base 64 one:
``` shell
$ echo "AA:BB:CC:DD:..." | tr -d ':' | xxd -r -p | openssl base64
```
If one does not add a hash key when freeRASP is enabled, the error `Unhandled Exception: Bad state: freeRASP initialization skipped: missing RASP_WATCHER_MAIL, RASP_RELEASE_CERT_HASHES` occurs. Therefore, one must include the SHA-256 hash key of the local keystore in the build step:
``` shell
flutter run --release \\
  --dart-define=RASP_WATCHER_MAIL=email@example.com \\
  --dart-define=RASP_RELEASE_CERT_HASHES="key"
```
