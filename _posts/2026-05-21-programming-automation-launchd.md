---
title: How to use Launchd?
date: 2026-05-21 15:00:00 +0900
categories:
  - Programming
  - Automation
tags:
  - automation
  - launchd
math: true
toc: true
---

Long story short,`launchd` is the framework to automate background jobs on the Mac OS system. It is analogous to `systemd` in Linux. This requires a `plist` file that encodes what Mac should do. The `plist` file follows the syntax of `xml` language. The example and its interpretation are at the end of this note. Assuming that you wrote a nice `plist` file for automation, you should:

1. Save `com.user.code.plist` in `~/Library/LaunchAgents/`.
2. Load the `plist` file to `launchctl` that manages `launchd`.

``` shell

launchctl load ~/Library/LaunchAgents/com.user.code.plist

```

That's it. However, if one edits the `plist` file, one should unload and "reload" the file:

``` shell
# com.user.code.plist must be edited
launchctl unload ~/Library/LaunchAgents/com.user.code.plist

# Reload the plist file
launchctl load ~/Library/LaunchAgents/com.user.code.plist
```

If one wants to see the loading status:

``` shell
launchctl list | grep code
```

### Trying out how to write a plist file

For example, the `plist` file below executes `DropboxUpdater` every hour (See $3600$ in `StartInterval` key as integer).

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>AbandonProcessGroup</key>
<true/>
<key>AssociatedBundleIdentifiers</key>
<array>
<string>com.dropbox.DropboxUpdater</string>
</array>
<key>Label</key>
<string>com.dropbox.DropboxUpdater.wake</string>
<key>LimitLoadToSessionType</key>
<string>Aqua</string>
<key>ProgramArguments</key>
<array>
<string>/Users/user/Library/Application Support/Dropbox/DropboxUpdater/Current/DropboxUpdater.app/Contents/MacOS/DropboxUpdater</string>
<string>--wake-all</string>
<string>--enable-logging</string>
<string>--vmodule=*/components/update_client/*=2,*/chrome/updater/*=2</string>
</array>
<key>StartInterval</key>
<integer>3600</integer>
</dict>
</plist>

```

There are several keys one should know in order to understand what this file does. First one is `<key>LimitLoadToSessionType</key>`. This is set as `Aqua`, which means that it is only activated when logged in. The second one is `ProgramArguments`. This is the execution point. If you write the path of a file (such as `...Library/Application Support/.../DropboxUpdater.app/Contents/MacOS/DropboxUpdater)`, then it is run with two arguments wrapped in `<string>`. Here, one can notice that Dropbox seems to use Chromium when leaving logs.