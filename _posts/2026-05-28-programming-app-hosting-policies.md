---
title: Hosting App Policies
date: 2026-05-28 12:00:00 +0900
categories:
  - Programming
  - Android
tags:
  - android
math: true
toc: true
---

Google Play requires an active, publicly accessible URL that identifies the app/developer, contacts, collected data, sharing parties, security practices, and data retention/deletion policy. Here, I used `Firebase Hosting` for this project. I created a static HTML page to show the privacy policy of this app and my email ([link](https://zibkok.web.app/privacy-policy)). In the end, I deployed the hosting using:

``` bash
firebase deploy --only hosting --project zibkok
```

Google Play also requires a web page that introduces how to delete an account and what data is saved and deleted. I made another web page and deployed it ([link](https://zibkok.web.app/account-deletion)). The deletion request email is set as mine.