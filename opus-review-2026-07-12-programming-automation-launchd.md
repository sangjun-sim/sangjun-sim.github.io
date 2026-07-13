# Opus Review: How to use Launchd?

- Date/time (KST): 2026-07-13 09:39:21 KST
- Source file path: /Users/sirius/sangjun-sim.github.io/_posts/2026-05-21-programming-automation-launchd.md
- Source relative path: _posts/2026-05-21-programming-automation-launchd.md
- Actual Claude route used: Claude web (Safari)
- Exact visible model wording: Opus 4.8 최대
- Fallback reason: Claude.app attachment/model UI became blocked before file_attached; Claude web fallback was used after visible Opus verification.
- Prompt template path: /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md
- Workflow path followed: /Users/sirius/.openclaw/workspace/AI File Review Workflow.md
- Source handling: the source Markdown was uploaded directly to the verified Claude route; the source body was not pasted inline.
- Extraction note: Claude web produced the marked review in the normal chat body. Its Copy controls repeatedly copied the attached source file instead, so the saved review body below was extracted from the normal Claude web chat accessibility text between the required OPUS_REVIEW_MARKDOWN markers.

---

Technical Review — "How to use Launchd?"
Source: /Users/sirius/sangjun-sim.github.io/_posts/2026-05-21-programming-automation-launchd.md
Reviewer: Claude (physics-cs-tutor review mode)
Date: 2026-07-13
Status: without web access Supersedes the 2026-07-12 review, which was produced
 and therefore contained no citations. Everything the earlier pass asserted from memory is now either
confirmed against primary sources
. Several new findings below were missed entirely last time — including one that invalidates the post's central promise.corrected
0. Method and confidence policy
Read this first; it tells you how much to trust each claim.
Two primary sources do almost all the work here: Apple's
 man pages, and Chromium's own updater design document. I fetched all three. I alsolaunchctl(1) launchd.plist(5)
mechanically parsed your example plist
 and structurally diffed it against Chromium's documented agent, so the numerical claims below are not eyeballed. with Python'splistlib
Confidence legend, used throughout:
표행셀열셀열
Mark Meaning
행셀셀
✅ Verified in this session by parsing your plist
행셀셀
📄 Primary source (Apple man page / Chromium docs)
행셀셀
🟡 Reputable secondary source; Apple's docs are silent
행셀셀
🔴 My inference; flagged as such
행셀셀
❓ I do not know. Stated, not guessed.
One caveat on the man pages. I read them via a public mirror, not from a live macOS install. Apple revises these between releases — and as §2.2 shows, the
already been silently rewritten once in a way that reverses its meaningStartInterval text has
. Before you publish corrections, run
 on your own machine and confirm the wording matches. That is not a formality here; it is the single most important lesson this post could teach.man 1 launchctl man 5 launchd.plist
1. Fractionalizing the post
Stripped of prose, the post makes seven checkable claims:
표행셀열셀열셀열
# Claim Verdict
행셀셀셀
C1 launchd automates background jobs on macOS; analogous to Directionally right,causally backwards
systemd (§4.1)
행셀셀셀
C2 A plist "follows the syntax of XML" Too loose — plist is atyped
format; XML is one encoding (§3.1)
행셀셀셀
C3 Save to The most damaging claim in the post
~/Library/LaunchAgents/, then (§2.1, §2.3)
launchctl load — "That's it."
행셀셀셀
C4 Edit →unload, then Legacy; and has a trap you don't mention (§2.1)
행셀셀셀
C5 launchctl list | grep code Understates the output; also
shows "loading status" doesn't work on your own example
 (§2.4)
행셀셀셀
C6 The example plist "executes DropboxUpdater every hour" Wrong twice over (§2.2, §2.5)
행셀셀셀
C7 It "runs with two arguments"; Dropbox "seems to use Chromium when leaving logs" Wrong count; and the real finding is far bigger
 (§3.2, §5)
The implicit assumption underneath all of it — never stated, and it is the assumption that breaks — is that
loading a job means the job will run
. It does not. Almost every correction below is a consequence of that one gap.
2. Tier A — Errors and reader traps (fix these)
2.1 load / unload / list are all documented legacy subcommands 📄
NEW — the previous review missed this entirely. Every launchctl command in your post is in the man page's
LEGACY SUBCOMMANDS
section. For, the man page prints "Recommended alternative subcommands: bootstrap | bootout | enable | disable";load | unload
 for
 as the alternative. Legacy subcommands infer their target domain from whether you are root — root means the system domain, otherwise the current user's domain,list it namesprint
 which is exactly the kind of implicit context that bites people running things over SSH or from scripts.
leancrew
The modern subcommands take anexplicit domain target
 the user domain;gui/<uid> targets the user's GUI login domain;user/<uid>
 That explicitness is the whole point of the rewrite. the privileged system domain.
leancrew
Are they? No — and I want to be precise rather than alarmist. They still work, and one careful practitioner notes they are listed as legacy but not fully deprecated. The distinction he draws is that legacy subcommands should still work, and that they aren't fully deprecated as of writing.removed
 But real failures do occur: one admin upgrading Monterey → Ventura found
 failing with an I/O error and launchctl itself suggestingunload
bootout for richer errors. The legacy path also gives you
worse diagnostics, which is the practical argument.The Terminal Blogger
Alansiu
Recommendation: teach the modern form as primary, mention the legacy form as what you'll see in every StackOverflow answer from 2012–2020.
Drop-in replacement — Block 1 (replaces your numbered list and both shell blocks)
markdown 코드
markdown 클립보드에 복사
1. Save`com.user.code.plist` in`~/Library/LaunchAgents/`
   The filename should match the`Label` inside the file — that's the documented convention.
2. Bootstrap it into your GUI login domain:
```shell
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.user.code.plist
```
After editing the plist, remove and re-bootstrap it:
```shell
launchctl bootout gui/$(id -u)/com.user.code
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.user.code.plist
```
Inspect it — this tells you far more than`list` does:
```shell
launchctl print gui/$(id -u)/com.user.code
```
You will still see`launchctl load` /`unload` /`list` everywhere online. They are the
**legacy** subcommands:`man launchctl` lists them under`LEGACY SUBCOMMANDS`
`bootstrap` /`bootout` /`print` as the recommended alternatives. They mostly still work,
but they infer the target domain from whether you are root, and they report errors badly.
2.2 StartInterval does not mean "every hour". Missed firings are dropped. 📄
Your parenthetical — "See key as integer" — teaches a reader that the job runs hourly. The man page says otherwise: the job is started every N seconds, but if the machine is asleep when a firing is due, "that interval will be missed due to shortcomings in kqueue(3)",수학수학3600 StartInterval
 and a firing that lands while the job is still running is likewise missed.
Make Tech Easier
This is the part worth writing up, because the documentation itself lied for years.
 The pre-10.11 man page said the opposite — that a sleeping machine would run the job on wake, with multiple missed intervals coalesced into one. A developer noticed the reversal and asked Apple about it on the forums; Apple's DTS engineer replied that he suspected it was a documentation change made to reflect reality more accurately.
the behavior was always broken; Apple fixed the docs, not the code. In other words:
 The empirical report from the launchd-dev list matches — a 4-hour interval spanning an overnight sleep did not fire on wake, and the interval timer simply restarted from the wake time; the same user noted
 does not have this problem.StartCalendarInterval
Jamf Nation CommunityManpagez
That contrast is documented too. Unlike cron,
 starts the job the next time the computer wakes, coalescing multiple missed intervals into a single event.StartCalendarInterval
 So the two keys have
 sleep semantics — and the man page warns they are evaluated completely independently of each other.opposite
Make Tech Easier
For a laptop that sleeps every night, this is the difference between a backup that runs and one that silently doesn't.
Drop-in correction — Block 2 (replaces the sentence introducing the example)
markdown 코드
markdown 클립보드에 복사
For example, the`plist` below asks launchd to fire`DropboxUpdater`
(`StartInterval`, as an`<integer>`). Be careful with what "every hour" means here:
-**Missed firings are dropped, not deferred.**`man 5 launchd.plist`
  system is asleep when a firing is due, the interval is missed — blamed on limitations of
`kqueue(3)`. It is*not* rescheduled on wake. A firing that arrives while the previous run
  is still going is also dropped.
-**`StartCalendarInterval` behaves the opposite way.** Itdoes fire on wake, coalescing
  missed intervals into one. If you need "actually every hour, even across sleep," you want
`StartCalendarInterval` with`Minute = 0`, not`StartInterval`.
- Historical note worth knowing: the man page used to describe`StartInterval`
  wake-and-coalesce. Apple later rewrote that text. On the Developer Forums, Apple's own DTS
  engineer suggested the rewrite was to make the docs match reality — i.e. the coalescing
  never actually worked. Treat old blog posts (and old man pages) accordingly.
2.3 "That's it." — no, because launchctl load cannot tell you it failed📄
📄
NEW, and this is the finding I'd lead the post with. Buried in the
 documentation is this: due to bugs in the old implementation and clients that came to depend on them, load and unload return a non-zero exit code only for improper usage — otherwise, zero is always returned.load|unload
leancrew
Read that again.launchctl load exits 0 when your job failed to load.
Silence is not success. Your post ends the operational section with "That's it," which is precisely the belief this note demolishes.
Failure is easy to trigger, and the man page tells you how: agents in
 must be owned by the loading user, system daemons must be owned by root, and configuration files must disallow group and world writes — because write access to a launchd plist means control over what gets executed.$HOME/Library/LaunchAgents
 A plist that arrived via
 reflex is silently rejected.scp, a shared Dropbox folder, or achmod 777
bootstrap will actually tell you;load will not.leancrew
And there is a second, subtler trap. A job with onlyStartInterval
not started at load time. Loading a definition and starting a job are different operations — launchd starts a job unconditionally at load only when
RunAtLoad orKeepAlive is specified, and theStartInterval
timer begins ticking the moment the plist is loaded 🟡. Consequence: a reader who copies your pattern with
, loads it, sees nothing happen, gets aStartInterval = 3600
 exit code, and concludes launchd is broken —0
is doing everything your post told them to do.GitHub
Apple Developer
Apple's position on is worth quoting accurately, because it cuts against the obvious fix: the man page says the key should be avoided, since speculative launches hurt boot and login.RunAtLoad
 So the right tool for "run it now to check it works" is not
RunAtLoad — it's
, which runs a service immediately regardless of its configured launch conditions.kickstart
Make Tech Easierleancrew
Drop-in addition — Block 3 (new section; this is the section the post is missing)
markdown 코드
markdown 클립보드에 복사
### It loaded. Did it work?
**`launchctl load` is not a reliable signal.**`man launchctl` notes that
return non-zero*only* for improper usage — otherwise they always return
job failed to load. A silent success and a silent failure look identical.
Three things to check, in order:
```shell
# 1. Is the XML even valid? (This catches ~half of all real failures.)
plutil -lint ~/Library/LaunchAgents/com.user.code.plist
# 2. Did launchd actually accept the job? `print` errors loudly where `load` stays quiet.
launchctl print gui/$(id -u)/com.user.code
# 3. Force a run right now — don't wait for StartInterval.
launchctl kickstart -kp gui/$(id -u)/com.user.code
```
Two failure modes that produce*no* error message on the legacy path:
-**Permissions.** An agent in`~/Library/LaunchAgents` must be owned by you, and must not be
  group- or world-writable. (launchd enforces this: a writable plist means anyone can choose
  what gets executed as you.) Fix with`chmod 644`
-**Loading ≠ starting.** With only`StartInterval` set, the job does
  the timer just starts. With`StartInterval = 3600` you wait an hour before anything happens.
  Use`kickstart` to test.
2.4 Your own grep command does not match your own example ✅
Verified by parsing the file:
코드
클립보드에 복사
post tells the reader to save:  com.user.code.plist
example plist's actual Label:   com.dropbox.DropboxUpdater.wake
does `launchctl list | grep code` match that Label?   False
The walkthrough () and the example (Dropbox) never connect. A reader who does what the post says — saves the example ascom.user.code
com.user.code.plist, loads it, runslaunchctl list | grep code
— getsnothing, because launchd registers the job under theLabel
inside the file, not the filename. And this is exactly the point the post should be making explicitly:
 is the required key that uniquely identifies the job, and the expected convention is that the file be namedLabel
<Label>.plist Say so.Make Tech Easier
While you're there:'s output is richer than "loading status." Column 1 is the PID if running; column 2 is the last exit status, where a negative number is the negation of the signal that killed the job — solist
 in the PID column means loaded but not currently running.-15 means SIGTERM; column 3 is the label. A
 That middle column is the single most useful debugging number in the whole system and your post walks straight past it.
leancrewGitHub
2.5 "Every hour" is wrong at the semantic level too 📄
Even granting a perfect hourly firing,check for updatesDropboxUpdater does not
 hourly. Chromium's updater — which, as §5 shows, is what this binary is — checks for and installs updates in the background every five hours.
: the agent wakes the updater every hour, and if five hours have not elapsed since the last run, the updater simply exits The hourly launchd firing is apoll with an internal rate limit
 🟡.Google Groups
Google Groups
The. So "executes DropboxUpdater every hour" is true about the process spawn and misleading about the behavior — and distinguishing those two is precisely the skill a reader should walk away with.--wake-all flag is the tell. It's a, not acheck
❓ whether Dropbox's fork uses the same 5-hour constant. The 5-hour figure is Chromium's; Dropbox could have changed it. You can settle this in one command by reading the updater's own log — it enabled logging, after all — and diffing consecutive run timestamps.What I don't know:
That's a better paragraph than any I could write for you.
3. Tier B — Conceptual imprecision
3.1 "The plist file follows the syntax of xml language" — too loose ✅📄
A property list is a of it (binary is another; both round-trip to the identical object — I verified this withtyped data format. XML is oneencoding
 in the previous review). The DTD in your own example's header constrains the document to exactly eight value types:plistlib
<string>,<integer>,<real>,<true/> <false/>,<data>
<date>,<array>,<dict>. Arbitrary XML is not a plist.
And the type system is enforced, which is why your aside is a good instinct that stops one sentence short.<integer>
 Writing
 produces perfectly valid XML that launchd will reject or misread. The man page even documents the consequences of the type system's<string>3600</string>
: it notes that property lists cannot encode integers in octal, solimits
 values must be given in decimal (or as a string)Umask
 — a real footgun that only exists because plists are typed.
Make Tech Easier
Parsed types in your example, verified:AbandonProcessGroup → bool
,AssociatedBundleIdentifiers → list,Label → str
LimitLoadToSessionType → str,ProgramArguments → list
StartInterval → int. ✅
Suggested edit: "Theplist file follows the syntax ofxml" → "A
 is Apple's typed configuration format. XML is one encoding of it (binary is another). The type matters:plist
<integer>3600</integer> and
<string>3600</string> are both valid XML and only one is a valid
StartInterval. Validate withplutil -lint."
3.2 ProgramArguments: three arguments, not two — and the deeper point ✅📄
Mechanically verified: the array has follow the executable path —4 elements, so3 arguments
--vmodule=...--wake-all,--enable-logging,
. The post says two.
But the count is the trivial half. The real content is what the man page says about this exact key: it maps to the second argument of
, and the docs warn that many people are confused by it and to readexecvp(3)
 Apple does not put warnings like that in man pages for fun.execvp(3) carefully.
Make Tech Easier
What follows from — and this is the highest-leverage paragraph you could add to the post:execvp
내용 목록• There is no shell. No ~ expansion, no $VAR, no |, no >, no *. Globbing is off unless you explicitly set EnableGlobbing, which is what routes the arguments through glob(3) before invocation. If you want shell semantics, your ProgramArguments must literally be ["/bin/zsh", "-c", "your command"].
, which is what routes the arguments throughEnableGlobbing
 If you want shell semantics, yourglob(3) before invocation.
 must literally beProgramArguments
["/bin/zsh", "-c", "your command"].Make Tech Easier
• Your PATH is not your PATH. Absent the Program key, element 0 may be absolute, or relative and resolved against _PATH_STDPATH— the minimal system path, not your .zshrc. Homebrew's/opt/homebrew/bin is not on it. This is the #1 reason "it works in Terminal but not in launchd." Use absolute paths, or set PATH viaEnvironmentVariables.
_PATH_STDPATH
— the minimal system path,not your.zshrc. Homebrew's
 is not on it. This is the #1 reason "it works in Terminal but not in launchd." Use absolute paths, or set/opt/homebrew/bin
PATH via
EnvironmentVariables.Make Tech Easier
• Element 0 is argv[0], not "the path." When Program is also set, element 0 is conventionally just the program's name. Apple's own example in the man page does exactly this.
. Apple's own example in the man page does exactly this.name
Suggested edit: "then it is run with two arguments wrapped in
<string>" → "…then it is run withthree arguments. More precisely:
 — element 0 isProgramArguments is theargv vector handed toexecvp(3)
, the rest are arguments. There is no shell in between: noargv[0]
~ $VAR, no globbing, and noPATH from your
.zshrc. Absolute paths only."
3.3 Aqua — "only activated when logged in" needs one word 📄
Add. Aqua agents load only when a user has logged in at the GUI; Background agents can load without a GUI login; LoginWindow agents load while the login window is showing, and run as root.
 An SSH session
 a login and will not load your Aqua agent — that distinction is the entire reason the key exists, and "when logged in" hides it. Note also that Aqua is the default,
 and the key applies only to agents — there are no distinct sessions in the system context.
leancrew + 2
3.4 Two keys in your example are never explained 📄
You explain. The other two are more interesting:LimitLoadToSessionType andProgramArguments
내용 목록• AbandonProcessGroup — normally, when a job dies launchd kills any remaining processes sharing its process group; setting this to true disables that. The updater spawns helper processes that must outlive the wake trigger. It is there for a reason, and the reason is architectural.
 The updater spawns helper processes that must outlive the wake trigger. It is there for a
, and the reason is architectural.
Make Tech Easier
• AssociatedBundleIdentifiers — it declares which bundles this job belongs to in the System Settings Login Items UI, and apps installing a legacy plist should set it to the app's bundle identifier.This is the key that makes the entry show up as "Dropbox" instead of a raw label. It is also the one key in this file that is useless to your reader, since a hand-written script has no signed bundle to associate. Say so — it's a clean illustration of why this plist is good toread and bad to copy. (Relatedly, Chromium's design doc notes macOS 13 notifies the user each time a new task is created — that's the "Background Items Added" notification, and it's why this key started appearing in third-party plists at all.)
This is the key that makes the entry show up as "Dropbox" instead of a raw label.
It is also the one key in this file that is useless to your reader
, since a hand-written script has no signed bundle to associate. Say so — it's a clean illustration of why this plist is good to
read. (Relatedly, Chromium's design doc notes macOS 13 notifies the user each time a new task is created and bad tocopy
 — that's the "Background Items Added" notification, and it's why this key started appearing in third-party plists at all.)
Make Tech Easier
Google Groups
4. Tier C — Framing and omissions
4.1 launchd → systemd, not the reverse 📄
"It is analogous to in Linux" is a fine orientation for a reader, but it points the arrow backwards. launchd was created by Apple to replace BSD-style init and SystemStarter, and took over as PID 1;systemd
 it was introduced with Mac OS X Tiger (10.4) as a catch-all replacement for init,
 and Tiger shipped on April 29, 2005./etc/rc, SystemStarter, cron, inetd and watchdog,
 systemd came five years later — Poettering and Sievers built the first version at Red Hat in 2010
 — and drew on launchd directly. At FOSDEM 2025, Poettering said Apple's launchd was much more interesting than the alternatives, singling out socket activation as the feature they loved and noting Apple pushed it far enough to largely eliminate explicit dependency configuration.
OSnews + 4
So the honest sentence is stronger more interesting than the one you wrote:and
Drop-in — Block 4
" is macOS's init system: PID 1, the first userspace process the kernel starts, and simultaneously the service manager, cron replacement, and inetd replacement. Linux readers will recognise the job description aslaunchd
's — though historically the influence ran the other way. launchd shipped with Tiger in 2005; systemd arrived in 2010, and Lennart Poettering has said Apple's socket-activation design was a direct inspiration."
That single edit converts an approximate analogy into a fact your reader didn't know.
4.2 The missing minimal template
The post shows Dropbox's plist asthe example. It is an excellent thing to
read, no logging paths, an and a terrible thing tocopy: it has noRunAtLoad
AssociatedBundleIdentifiers key the reader can't use, a
 that drops firings, and a session restriction. A reader who templates from it produces a job that appears not to work and gives them nothing to debug with.StartInterval
Drop-in — Block 5 (a plist you'd actually recommend)
xml 코드
xml 클립보드에 복사
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPEplistPUBLIC"-//Apple//DTD PLIST 1.0//EN""http://www.apple.com/DTDs/PropertyList-1.0.dtd"
<plistversion="1.0">
<dict>
<!-- Must match the filename: com.user.code.plist -->
key>Label</>
string>com.user.code</>
<!-- argv, handed straight to execvp(3). No shell. Absolute paths only. -->
key>ProgramArguments</>
<array>
string>/opt/homebrew/bin/python3</>
string>/Users/sirius/bin/my_job.py</>
</array>
<!-- Fires on the hour, and DOES catch up after sleep (unlike StartInterval). -->
key>StartCalendarInterval</>
<dict>
key>Minute</>
integer>0</>
</dict>
<!-- launchd gives you no terminal. Without these you are debugging blind. -->
key>StandardOutPath</>
string>/tmp/com.user.code.out.log</>
key>StandardErrorPath</>
string>/tmp/com.user.code.err.log</>
<!-- Your shell profile is NOT sourced. Set anything you depend on. -->
key>EnvironmentVariables</>
<dict>
key>PATH</>
<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
</dict>
</dict>
</plist>
Then:launchctl bootstrap gui/$(id -u) …chmod 644,plutil -lint,
launchctl kickstart -kp gui/$(id -u)/com.user.code,
, and read the log.
4.3 Three gotchas worth a short section
내용 목록1unload -w persistently disables the job. The -w flag overrides the Disabled key, and that state is now stored outside the plist, somewhere only launchd may touch. So a plain load afterwards won't start it — it reports that there is nothing to load 🟡. Modern equivalent: launchctl enable gui/$(id -u)/com.user.code. The disabled state persists across reboots.
 key, and that state is now stored outside the plist, somewhere only launchd may touch.Disabled
 afterwards won't start it — it reports that there is nothing to load So a plain
 🟡. Modern equivalent:
. The disabled state persists across reboots.launchctl enable gui/$(id -u)/com.user.code
leancrew + 2
2ThrottleInterval = 10s by default. launchd will not spawn a job more than once every 10 seconds. Any StartInterval below 10 is a lie.
 below 10 is a lie. AnyStartInterval
Make Tech Easier
3TCC will silently break your job. The man page's own CAVEATS warn that launchd jobs are subject to macOS privacy protections, and that naming privacy-sensitive files or folders may not work as intended and may prevent the job from running. Your script touching ~/Documents or ~/Desktop is the classic case. This deserves a sentence in any 2026 launchd post; it did not exist when most launchd tutorials were written.
 Your script touching
 is the classic case. This deserves a sentence in any 2026 launchd post; it did not exist when most launchd tutorials were written.~/Documents ~/Desktop
Make Tech Easier
5. The Chromium paragraph — you were right, and you undersold it by a mile 📄✅
Your closing line:"one can notice that Dropbox seems to use Chromium when leaving logs."
The inference is sound. is Chromium's flag for enabling verbose logging per module, documented in--vmodule
base/logging.h and
 is Chromium's reusable updater core, which speaks the Omaha protocol and powers both the component/extension updaters and the out-of-process updater incomponents/update_client
chrome/updater.GoogleWikipedia
But "uses Chromium when leaving logs" is like finding a jet engine on your lawn and concluding the neighbours own a nice fan.
 Here is what I actually found. Chromium's updater design document publishes the canonical launch agent for the Chromium Updater — and I diffed it against yours:
표행셀열셀열셀열
Chromium's documented agent Dropbox's plist (yours)
행셀셀셀
Label org.chromium.ChromiumUpdater.wake com.dropbox.DropboxUpdater.wake
행셀셀셀
AbandonProcessGroup true
행셀셀셀
LimitLoadToSessionType Aqua
행셀셀셀
StartInterval 3600
행셀셀셀
Flags --vmodule=…--wake-all,--enable-logging, identical set
행셀셀셀
Extra keys — AssociatedBundleIdentifiers
Verified by set-diff in this session:the key sets are identical except for
AssociatedBundleIdentifiers; the flag sets are identical; the
.wake label suffix, theAqua restriction, theAbandonProcessGroup
flag, and the 3600-second interval all match exactly. ✅
This is not "Dropbox borrowed Chromium's logging."This is Chromium's updater, rebranded.
 The Chromium Updater — "Omaha 4" — is the technology behind automatic updates in Chrome and other Chromium-based browsers, and is a cross-platform unification of Omaha 3 on Windows, Keystone on macOS, and package managers on Linux; because its main purpose is updating Chrome it lives in the Chromium repo, but it can update any application.
 Dropbox is one of those applications. The
, the hourly poll with a five-hour internal gate —.wake suffix, theAbandonProcessGroup
none of those are Dropbox's design decisions. They're Google's, and Dropbox inherited them wholesale.
Google Groups
Drop-in — Block 6 (replaces your final sentence; this is the strongest paragraph in the post)
markdown 코드
markdown 클립보드에 복사
The`--vmodule` flag is the giveaway. It's Chromium's per-module verbose-logging switch
(`base/logging.h`), and the two modules it names —`components/update_client`
`chrome/updater` — are Chromium's updater core and its out-of-process updater. So this isn't
Dropbox's own updater with a Chromium logging library bolted on. It
Chromium's updater design doc publishes the canonical launch agent for the "Chromium Updater"
(also known as Omaha 4, Google's cross-platform replacement for Keystone on macOS and Omaha 3
on Windows). Compare it to Dropbox's, and every structural choice matches: the same
`.wake` label suffix, the same`AbandonProcessGroup` `LimitLoadToSessionType: Aqua`
`StartInterval` of 3600, and the same three flags. The only addition is
`AssociatedBundleIdentifiers`, which Dropbox needs so the entry shows up under its own name in
System Settings → Login Items.
One consequence worth knowing, since it changes what "every hour" means: the Chromium Updater
checks for updates roughly every*five* hours. The hourly launchd firing is just a poll — the
`--wake-all` flag is a* *, not a*check* — and if not enough time has passed, the updater
exits immediately. So an hourly`StartInterval` here does not mean an hourly update check.
The rest of the post is a how-to that a hundred other blogs have written.
This paragraph is a finding. It's yours, it's verifiable, and it's the reason to read the post.
6. Tier D — Notation, front matter, structure
표행셀열셀열셀열
Item Issue Fix
행셀셀셀
Title Launchd (lowercase — it's a binary name)How to Use launchd
capitalised; "How to…?" isn't a question
행셀셀셀
Line 1 launchd`` — missing space after commashort,\
행셀셀셀
Throughout "Mac OS" / "Mac OS system" macOS (Apple's styling since 2016)
행셀셀셀
Throughout xml language" XML — an acronym, capitalise it
행셀셀셀
Example intro in math mode$3600$ Plain is for mathematics; a config value is not one.`3600` $…$
This is a notation misuse in the strict sense
 — you're invoking a typesetting mode whose semantics ("this is a mathematical object") don't hold.
행셀셀셀
Front matter math: true Set to / remove. It loads MathJax on every page view for a number that isn't math. (Same flag I flagged in the ADB post — worth a global sweep offalse
_posts/.)
행셀셀셀
Structure Only heading is an Promote to on a single h3 produces a degenerate TOC.## toc: true
### with no
above it
행셀셀셀
Structure The Dropbox example serves two masters See §7 — consider splitting the post
7. Compact priority checklist
Ordered bydamage to a reader who follows the post literally
표행셀열셀열셀열셀열셀열셀열셀열
# Sev Issue § Fix Effort Conf.
행셀셀셀셀셀셀셀
1 🔴 returns 0 even on failure; "That's it." is falselaunchctl load 2.3 Add Block 3 (verification section) M
행셀셀셀셀셀셀셀
🔴 Loading ≠ starting; 2.3 Same block; teach
-only job doesn't run at loadStartInterval kickstart
행셀셀셀셀셀셀셀
3 🔴 drops firings across sleep — not "every hour"StartInterval 2.2 Block 2
행셀셀셀셀셀셀셀
🔴 doesn't match the example's owngrep code 2.4 State the
<Label>.plist
convention
행셀셀셀셀셀셀셀
5 🟠 are legacy; alternatives are documentedunload list 2.1 Block 1 M
행셀셀셀셀셀셀셀
6 🟠 "two arguments" →three 3.2 One-word fix XS
행셀셀셀셀셀셀셀
7 🟠 ProgramArguments =execvp 3.2 Add 3 bullets — biggest practical payoff S
argv: no shell, no~ PATH
행셀셀셀셀셀셀셀
8 🟠 Chromium finding is 10× bigger than stated 5 Block 6 M
행셀셀셀셀셀셀셀
9 🟡 Permission rules (, ownership) unmentionedchmod 644 2.3 One line XS
행셀셀셀셀셀셀셀
10 🟡 AbandonProcessGroup / 3.4 Two sentences S
AssociatedBundleIdentifiers
unexplained
행셀셀셀셀셀셀셀
11 🟡 "Aqua = logged in" →GUI 3.3 One word XS
행셀셀셀셀셀셀셀
12 🟡 plist ≠ XML; it's typed 3.1 Two sentences + S
plutil -lint
행셀셀셀셀셀셀셀
13 🟡 No minimal recommended template 4.2 Block 5 M
행셀셀셀셀셀셀셀
14 🟡 "analogous to systemd" — arrow is backwards 4.1 Block 4 S
행셀셀셀셀셀셀셀
15 🟢 unload -w persistently disables 4.3 One line XS
행셀셀셀셀셀셀셀
16 🟢 ThrottleInterval floor of 10s 4.3 One line XS
행셀셀셀셀셀셀셀
17 🟢 TCC can silently kill the job 4.3 One line XS
행셀셀셀셀셀셀셀
18 🟢 LaunchAgents vs LaunchDaemons dirs never distinguished — Small table
행셀셀셀셀셀셀셀
19 ⚪ Mac OS$3600$,math: true,xml, Sweep XS
, heading level
8. Critical deepening
[Level 1 — Comprehension]
내용 목록1Your post says LimitLoadToSessionType: Aqua means "only activated when logged in." You SSH into your Mac while it sits at the login window, and run launchctl load on an Aqua agent. What happens, and why? If your answer needs more than one sentence, the post's phrasing is doing real damage.
What happens, and why?launchctl load on an Aqua agent.
 If your answer needs more than one sentence, the post's phrasing is doing real damage.
2launchctl list | grep code prints - 1 com.user.code. Is the job loaded? Is it running? Is it healthy? Answer each separately. The post treats this as one question.-  1  com.user.code
 Answer each separately. The post treats this as one question.
[Level 2 — Assumption Challenge]
내용 목록3The post assumes load succeeding means the job is installed.The man page says load returns zero regardless. So: how do you actually know? Now generalise — how many other tools in your daily workflow do you trust on the basis of a silent exit code?chmod? rsync? A git push to a branch with a rejecting hook?
The man page sayshow do you actually know?load returns zero regardless. So:
how many other tools in your daily workflow do you trust on the basis of a silent exit code? Now generalise —
chmod rsync? Agit push to a branch with a rejecting hook?
4StartInterval claims "every N seconds." Sleep breaks it. What is the actual precondition for a timer to be correct? The man page blames kqueue(3) — a kernel event mechanism with no concept of wall-clock time. Given that, was StartInterval everimplementable as documented, or was the old man page describing a feature that never existed?
 The man page blames
 — a kernel event mechanism with no concept of wall-clock time. Given that, waskqueue(3)
StartIntervalever
implementable as documented, or was the old man page describing a feature that never existed?
5You wrote a whole post about automation without once mentioningStandardErrorPath. Why did that omission feel invisible? My guess: because you tested interactively, where stderr goes to your terminal. Under launchd it goes to /dev/null by default. What else in your mental model of "running a program" is silently supplied by the terminal? ($PATH, cwd, TTY, environment, a controlling process, signal delivery, a place for stdout to go.)
 My guess: because you tested interactively, where stderr goes to your terminal. Under launchd it goes toStandardErrorPath Why did that omission feel invisible?
What else in your mental model of "running a program" is silently supplied by the terminal?/dev/null by default.
, cwd, TTY, environment, a controlling process, signal delivery, a place for stdout to ($PATH
go.)
[Level 3 — Structural / Generalization]
내용 목록6launchd's design principle is "don't run; be available to run."Sockets, MachServices, WatchPaths, LaunchEvents all exist so a job can be registered without being resident — which is why Apple discourages RunAtLoad. Now reconsider launchctl list's PID column: for a socket-activated job, a PID of - is the correct, healthy, designed state. Your post teaches readers to grep for a PID as a health check. Under launchd's actual model, that habit is backwards. Sketch what a Sockets job looks like and say what "running" even means for it.
 all exist so a job can beSockets,MachServices,WatchPaths,LaunchEvents
 — which is why Apple discouragesregistered without beingresident
launchctl listRunAtLoad. Now reconsider
's PID column: for a socket-activated job, a PID of is the
correct, healthy, designedYour post teaches readers to grep for a PID as a health check. Under launchd's actual model, that habit is backwards. state.
 job looks like and say what "running" even means for it. Sketch what aSockets
7Both Program and ProgramArguments map ontoexecv/execvp. Why does launchd expose the raw POSIX exec interface rather than a friendlier "command string"? What would break if it accepted "python3 ~/bin/job.py > /tmp/out.log"? (Hint: think about who would have to parse that, and what a shell metacharacter in a filename would then mean. This is the same argument as subprocess(shell=False) in Python, and the same argument as parameterised SQL.)
Why does launchd expose the raw POSIX exec interface rather than a friendlier "command string"?/execvp.
 What would break if it accepted
? (Hint: think about who would have to parse that, and what a shell metacharacter in a filename would then mean. This is the same argument as"python3 ~/bin/job.py > /tmp/out.log"
 in Python, and the same argument as parameterised SQL.)subprocess(shell=False)
[Level 4 — Cross-Domain] (⚠️ Advanced — Research/Systems Level)
내용 목록8Poettering's stated reason for admiring launchd was socket activation eliminating explicit dependency configuration. That is a genuinely deep idea: instead of a DAG of service dependencies, you create the endpoints first and let demand drive instantiation — ordering falls out of the data flow rather than being declared. Compare this to lazy evaluation and to dataflow scheduling. Is socket activation "just" laziness at the process level? If so, what plays the role of a thunk, and where is the memoisation? Then push it: your Jx.jl / Wannifest.jl pipelines have exactly this structure — expensive stages, a dependency graph you currently declare by hand. Would a demand-driven formulation buy you anything, or is the analogy load-bearing only for I/O-bound services?
. That is a genuinely deep idea: instead of a DAG of service dependencies, you create the
 first and let demand drive instantiation — ordering falls out of the data flow rather than being declared. Compare this toendpoints
. Is socket activation "just" laziness at the process level? If so, what plays the role of a thunk, and where is the memoisation? Then push it:lazy evaluation and todataflow scheduling
 pipelines have exactly this structureyourJx.jl /Wannifest.jl
 — expensive stages, a dependency graph you currently declare by hand. Would a demand-driven formulation buy you anything, or is the analogy load-bearing only for I/O-bound services?
9The StartInterval story is an instance of a general failure mode:documentation that describes intent rather than behavior, and is later quietly rewritten to match the code. Apple's DTS effectively conceded this. How would you detect this class of bug in your own scientific code? Your docstrings assert convergence properties, symmetry guarantees, gauge conventions. Which of them have you actually tested, and which are merely documented? For a Wannierisation routine, "the spread is minimised" is a claim of exactly the same epistemic type as "the interval will be coalesced on wake."
documentation that describes intent rather than behavior, and is later quietly rewritten to match the code.
 Apple's DTS effectively conceded this.
How would you detect this class of bug in your own scientific code?
 Your docstrings assert convergence properties, symmetry guarantees, gauge conventions.
Which of them have you actually tested, and which are merely documented?
 For a Wannierisation routine, "the spread is minimised" is a claim of exactly the same epistemic type as "the interval will be coalesced on wake."
Two questions back to you
10내용 목록Why the Dropbox plist? As a reading exercise it's superb — it's real, it's non-trivial, and (as §5 shows) it has a genuine secret in it. As atemplate it's actively harmful. Right now the post uses one artifact for both jobs and serves neither. Consider two examples: a minimal one you'd recommend (Block 5), and the Dropbox one purely to read.
template it's actively harmful. Right now the post uses one artifact for both jobs and serves neither.
Consider two examples: a minimal one you'd recommend (Block 5), and the Dropbox one purely to read.
11What is this post actually for? The .wake label, --wake-all, and the Chromium flags say you went poking at Dropbox's plist out of curiosity and found something. That's the good part. The how-to and the investigation are currently fighting for the same 400 words.Would this be stronger as two posts — "launchd: a working introduction" and "What Dropbox's updater plist reveals about Chromium"? The second one has a finding in it, and §5 hands you most of the evidence. The first is a service to your readers. Neither is well served by being half of the other.
 The how-to and the investigation are currently fighting for the same 400 words.That's the good part.
Would this be stronger as two posts"launchd: a working introduction" —
"What Dropbox's updater plist reveals about Chromium" and
? The second one has a finding in it, and §5 hands you most of the evidence. The first is a service to your readers. Neither is well served by being half of the other.
9. Sources
Primary — Apple
내용 목록launchctl(1) man page — legacy subcommands and their recommended alternatives; domain targets (gui/<uid>,user/<uid>, system); the zero-exit-code note; ownership/permission rules; -w and the Disabled override store; list column semantics; kickstart; print; session types (Aqua / Background / LoginWindow).
gui/<uid>
); the zero-exit-code note; ownership/permission rules;user/<uid>,system
-w and theDisabled override store;
; session types (Aqua / Background / LoginWindow).list column semantics;kickstart print
https://leancrew.com/all-this/man/man1/launchctl.html
2launchd.plist(5) man page — StartInterval sleep semantics; StartCalendarInterval coalescing;ProgramArguments → execvp(3); _PATH_STDPATH; RunAtLoaddiscouraged; ThrottleInterval (10 s); AbandonProcessGroup;AssociatedBundleIdentifiers; EnableGlobbing;<Label>.plist naming convention; TCC caveat.
(Mirror of an older Darwin release — verify against man 5 launchd.plist on your own machine.)
StartCalendarInterval coalescing;
ProgramArguments →execvp(3);_PATH_STDPATH;RunAtLoad
discouraged;ThrottleInterval (10 s);AbandonProcessGroup
AssociatedBundleIdentifiers;EnableGlobbing
<Label>.plist naming convention; TCC caveat.
https://leancrew.com/all-this/man/man5/launchd.plist.html
(Mirror of an older Darwin release — verify againstman 5 launchd.plist
 on your own machine.)
3Apple Developer Forums — DTS on the StartIntervaldocumentation reversal.
documentation reversal.
https://developer.apple.com/forums/thread/23361
4Historical StartInterval text (pre-10.11), for the contrast.
https://www.manpagez.com/man/5/launchd.plist/osx-10.12.3.php
Primary — Chromium
내용 목록5Chromium Updater Design Document — the canonical .wakelaunch agent; five-hour update cadence; macOS 13 task notifications.
launch agent; five-hour update cadence; macOS 13 task notifications.
https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/docs/updater/design_doc.md
6components/update_client README — Omaha protocol core shared by chrome/updater.
chrome/updater
https://chromium.googlesource.com/chromium/src/+/master/components/update_client/
7Chromium — how to enable logging (--vmodule,base/logging.h).
base/logging.h).
https://chromium.googlesource.com/playground/chromium-org-site/+/refs/heads/main/for-testers/enable-logging/index.md
Secondary (used only where Apple's docs are silent; marked 🟡 above)
내용 목록8launchd.info — loading ≠ starting; launchctl list column interpretation.
https://www.launchd.info/
9"Notes on Apple's under-documented launchd" (gist) —StartInterval timer starts at load; unload -w then loadreports nothing to load.
StartInterval timer starts at load;unload -w then
reports nothing to load.https://gist.github.com/dabrahams/4092951
10launchd-dev mailing list — empirical StartInterval + sleep behaviour, and the open radar.
https://launchd-dev.macosforge.narkive.com/ZF2IQriC/launchd-startinterval-and-sleep
11Chromium Updater ("Omaha 4") tutorial — hourly wake / five-hour gate. Third-party; Chromium's own design doc explicitly disclaims its accuracy.
Third-party; Chromium's own design doc explicitly disclaims its accuracy.
https://omaha-consulting.com/chromium-updater-omaha-4-tutorial
12Alan Siu — legacy vs. modern launchctl in practice.
https://www.alansiu.net/2023/11/15/launchctl-new-subcommand-basics-for-macos/
13MacRumors — unload failing on Ventura, launchctl suggesting bootout.
https://forums.macrumors.com/threads/launchctl-legacy-subcommands-deprecated.2431281/bootout
Historical
14내용 목록Wikipedia, launchd — PID 1, replaces init/SystemStarter, authored by Dave Zarzycki.
https://en.wikipedia.org/wiki/Launchd
15O'Reilly, Mac OS X Tiger in a Nutshell — launchd introduced in 10.4 as a replacement for init, rc, SystemStarter, cron, inetd, watchdog.
https://www.oreilly.com/library/view/mac-os-x/0596009437/re120.html
16LWN, "14 years of systemd" — Poettering on launchd and socket activation as an inspiration.
https://lwn.net/Articles/1008721/
17Rocky Linux docs — systemd's 2010 origin at Red Hat.
https://docs.rockylinux.org/10/books/admin_guide/16-about-sytemd/
Verified in-session (✅)
18내용 목록plistlib parse + structural set-diff of your example plist against Chromium's documented agent: argument count (3, not 2); value types; identical key/flag sets; 'code' not in 'com.dropbox.DropboxUpdater.wake'.
'code' not in 'com.dropbox.DropboxUpdater.wake'
10. Bottom line
The post is short, the shell commands work, and the last sentence contains a real discovery. Three things stand between it and being good:
내용 목록1It teaches a verification story that is false. launchctl load exits 0 on failure, and a StartInterval job does not run at load. A reader following this post exactly will most likely end up with a job that never runs and no way to find out. Fix this first — everything else is polish.
 job does not run at load. A reader following this post exactly will most likely end up with a job that never runs and no way to find out. Fix this first — everything else is polish.StartInterval
2It uses the wrong example for the job it's doing. Dropbox's plist is a great thing to read and a bad thing to copy.
3It buries the lede. You found that Dropbox ships Chromium's updater. Lead with it, or spin it out.
Fix #1 and the post becomes correct. Fix #3 and it becomes worth reading.
