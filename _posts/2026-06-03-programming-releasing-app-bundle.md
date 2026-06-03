---
title: Releasing App Bundles
date: 2026-06-03 13:00:00 +0900
categories:
  - Programming
  - Android
tags:
  - programming
  - android
  - app
math: true
toc: true
---

## Deploying an app for testing

{: .prompt-info}
> It is recommended to read [Managing Signing Hash]({{ '/posts/programming-android-signingHash/' | relative_url }}) before reading this document.

If one wants to run a Flutter project in release mode or build an APK file for the release, the following command can be used:

``` shell
# Run in release mode
flutter run --release \ 
--dart-define=RASP_WATCHER_MAIL=example@email.com \ 
--dart-define=RASP_RELEASE_CERT_HASHES="RASP_HASH_KEY"

# Build an APK file
flutter build apk --release --split-per-abi \ 
--obfuscate --split-debug-info=build/debug-info \ 
--dart-define=RASP_WATCHER_MAIL=example@email.com \ 
--dart-define=RASP_RELEASE_CERT_HASHES="RASP_HASH_KEY"
```

After building an APK file, one can distribute an APK file via `App Distribution`. In this case, testers must primarily install `App Tester`. The installation link for `App Tester` is provided when a developer sends an email to testers. Also, after deployment, application dependencies must be monitored periodically. This process can be automated using tools such as `AppSweep`, `Dependabot`, and `Snyk`.

### RASP settings

If there is no RASP environment in the project, `--dart-define=` does not have to be specified. Here, `RASP_WATCHER_MAIL` is the email address for the security report email passed to freeRASP. If a developer registers their email address to set up freeRASP for a project, that email address is used here. `RASP_RELEASE_CERT_HASHES` is the release app signing certificate. The hash key must be in the form of Base 64.

freeRASP prohibits an Android device from automatically downloading an app using `packageInstaller`. Hence, one must disable this feature during the test.

### Other settings

In the command line for building an APK file using Flutter, one can see `--split-per-abi`, `--obfuscate`, and `--split-debug-info` options.

- `--split-per-abi`: This option builds separate APK files for different CPU architectures (ARM and x64). If one omits this option, he or she will make a universal package that has a larger file size.
- `--obfuscate`: This option enables obfuscation in release builds. It must be used with `--split-debug-info`.
- `--split-debug-info=<directory>`: This option saves the debug symbols to a local directory instead of writing them directly in the APK.

## Deploying an app for release

If one deploys an app to the Google Play Store, one should first make an app bundle. The following command can build an app bundle:

``` shell
mkdir -p build/symbols/1.0.0+N

flutter build appbundle \ 
--release \ 
--build-name=1.0.0 \ 
--build-number=N \ 
--obfuscate \ 
--split-debug-info=build/symbols/1.0.0+N \ 
--extra-gen-snapshot-options=--save-obfuscation-map=build/symbols/1.0.0+N/obfuscation-map.json \ 
--dart-define=RASP_WATCHER_MAIL="example@email.com" \ 
--dart-define=RASP_RELEASE_CERT_HASHES="HASH_KEY" \ 
--dart-define=RASP_ALLOW_LOCAL_RELEASE_INSTALL=false \ 
--dart-define=RASP_ALLOW_FIREBASE_APP_DISTRIBUTION=false
```

The difference from the testing case is that one now creates and specifies a symbol folder `build/symbols/1.0.0+N`, where `N` simply denotes the build number of a project. This is because one uses a different directory per build number for restoring the crash logs into the original function and file names. Here, `RASP_ALLOW_LOCAL_RELEASE_INSTALL` and `RASP_ALLOW_FIREBASE_APP_DISTRIBUTION` are optional, and if one wants a less safe and secure distribution, this can be set to true.