---
title: Trying out git
date: 2026-05-28 13:00:00 +0900
categories:
  - Programming
  - Github
tags:
  - github
math: true
toc: true
---

## Find committed files in the repository history

In order to find the uploaded files, one uses this command:

``` shell
# For all commits
$ git log --all --full-history /path/to/file
# For a specific commit
$ git fetch origin && git log --all | grep -E "commit hash"
```

## Remove git tracking files

If one mistakenly leaves a file that contains sensitive data and is not listed in `.gitignore`, git tracks this file and prepares to upload it to the repository. Before committing the changes, one uses the following command to leave a file in the local working directory and to remove it from git tracking:

``` shell
$ git rm --cached filename
```

## Remove a committed file from all history

The file that has already been committed in the past is not erased by `git rm --cached`. To delete it completely from the corresponding repository, one uses `git filter-repo`.