---
title: Reviewing Codes
date: 2026-05-28 11:00:00 +0900
categories:
  - Programming
  - Architecture
tags:
  - refactoring
  - architecture
math: true
toc: true
---
{: .prompt-info}
> In progress!


## Obfuscation

The developer can activate the obfuscation for the deployment with `--obfuscate`. However, this is nothing but the change of class names and member names to ambiguous ones. It is recommended to utilize the tools, for instance, `O-MVLL` and `BlackObfuscator`. These tools have downsides, such as performance degradation and increased debugging difficulty. It is advisable to use these tools for the native codes where the obfuscation is truly necessary.


## Static Analysis and Dynamic Analysis

There are two main approaches used to discover security vulnerabilities. One is static analysis, which identifies quality issues, such as potential vulnerabilities and coding standard violations, without executing the code directly. It can be integrated into continuous integration pipelines for automated scanning. However, it fails to detect issues occurring at runtime and may display false warnings. 

The other is dynamic analysis, which analyzes the program's behavior while it is running. This is useful for identifying vulnerabilities that occur during runtime or for detecting other issues, such as memory leaks and performance problems. This is performed in the later stages of the development cycle.


## Check Integrity

Integrity checks, which enhance security by verifying whether an app has been tampered with, can be enabled by (1) the Play Integrity API in the App Integrity menu of the Google Play Console, or by (2) using freeRASP, which detects app tampering, debugger attachments, and rooting/jailbreaking.