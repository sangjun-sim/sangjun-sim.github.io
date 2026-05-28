---
title: Android Debug Bridge
date: 2026-05-21 15:00:00 +0900
categories:
  - Programming
  - Android
tags:
  - android
math: true
toc: true
---

## How to use ADB?

ADB is an abbreviation of Android Debug Bridge. This tool allows us to control an Android phone using our local computer. First, connect the device to the PC. Then turn on the developer mode for a mobile device. The developer mode for Galaxy phones can be turned on by clicking "build number" in the `Phone information` > `Software information` section 7 times (I don't know why it is 7 times). Now, the new option, "Developer option," will appear in `Settings`. Second, one should activate the USB debugging option in the Developer options. Before connecting the Android phone to the laptop, one should install `adb` and `scrcpy`. `scrcpy` is available in Homebrew (assuming you are a Mac user):

``` shell
$ brew install scrcpy
```

Android Debug Bridge (adb) is required, which is accessible from `PATH`:

``` shell
$ brew install android-platform-tools
```

`scrcpy` is executed with the following command:

``` shell
$ scrcpy
```

One can check the list of connected devices with:

``` shell
# List of devices
$ adb devices

# Serial number
$ adb get-serialno
```

The list of all connected devices with a serial number is shown. If one wants to connect a specific device, one should use the command prompt:

``` shell
$ scrcpy --serial ($number)
```

### How to open (and close) an app?

Using the adb, one can open and close an app without touching the screen.

``` shell
# Open Google Chrome app
$ adb -s $(serial number) shell am start -n com.android.chrome/com.google.android.apps.chrome.Main

# Close Youtube app
$ adb -s $(serial number) shell am force-stop com.google.android.youtube
```

Of course, the one that starts with `com.` will not display when you enter the `scrcpy` command. This is the app package name inherited in the development process. The package name in the form of `com.android.xxxxx` can be checked by using:

``` shell
$ adb shell pm list packages | findstr "android"
```

If one wants to implement the touch on screen using only adb, use the following command:

``` shell
$ adb shell input tap $(x position) $(y position)
```

where one can see the x and y positions by toggling on the "Pointer location" option in Developer options.

### How to find the package name of an installed app?

All package names for the connected device are printed out using:

``` shell
$ adb shell pm list packages
```

One can also filter the name by `grep`: `adb shell pm list packages | grep "google"`. The name of the executing app is also searched by:

``` shell
$ adb shell dumpsys window | grep -E 'mCurrentFocus|mFocusedApp'
```

### How to save a screenshot on a PC?

Just one single line of code can save a screenshot of the Android device on a PC:

``` shell
$ adb shell screencap -p > screenshot.png
```


