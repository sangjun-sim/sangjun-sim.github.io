# Post Comments Plan

## Request

블로그 포스트에 방문자가 댓글을 남길 수 있게 할 수 있는지 확인하고, 구현 방식을 정리한다.

## Short Answer

가능하다. 이 저장소는 Chirpy 테마를 쓰고 있고, Chirpy `7.5.0`에는 이미 `disqus`, `utterances`, `giscus` 댓글 provider가 내장되어 있다. 새 댓글 컴포넌트를 직접 만들 필요 없이 `_config.yml`의 `comments.provider`와 provider별 값을 채우면 된다.

추천은 `giscus`다. GitHub Pages 블로그와 잘 맞고, 댓글 데이터가 GitHub Discussions에 저장되며, 현재 테마도 giscus용 include를 이미 제공한다.

## Sources Checked

- Chirpy post docs: https://chirpy.cotes.page/posts/write-a-new-post/
  - `comments.provider`를 설정하면 전체 포스트 댓글이 활성화되고, 개별 포스트는 `comments: false`로 끌 수 있다.
- giscus official site: https://giscus.app/
  - GitHub Discussions 기반 댓글 시스템.
  - repository는 public이어야 방문자가 discussion을 볼 수 있다.
  - giscus app 설치와 GitHub Discussions 활성화가 필요하다.
- utterances official site: https://utteranc.es/
  - GitHub Issues 기반 댓글 시스템.

## Current Structure

- `_config.yml`
  - `comments.provider`가 비어 있어 댓글 시스템은 현재 비활성화 상태다.
  - provider 설정 자리는 이미 있다:
    - `comments.disqus.shortname`
    - `comments.utterances.repo`
    - `comments.utterances.issue_term`
    - `comments.giscus.repo`
    - `comments.giscus.repo_id`
    - `comments.giscus.category`
    - `comments.giscus.category_id`
    - `comments.giscus.mapping`
    - `comments.giscus.strict`
    - `comments.giscus.input_position`
    - `comments.giscus.lang`
    - `comments.giscus.reactions_enabled`
  - post 기본값에 `comments: true`가 이미 들어 있다.
  - `_drafts`에는 `comments: false`가 들어 있다.
- Theme include
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_includes/comment.html`
  - 조건:
    ```liquid
    {% if page.comments and site.comments.provider %}
      {% capture path %}comments/{{ site.comments.provider }}.html{% endcapture %}
      {% include {{ path }} %}
    {% endif %}
    ```
- Theme giscus include
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_includes/comments/giscus.html`
  - `https://giscus.app/client.js`를 동적으로 삽입한다.
  - Chirpy theme mode에 맞춰 `light` / `dark_dimmed` 테마를 자동 전환한다.
- Theme utterances include
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_includes/comments/utterances.html`
  - `https://utteranc.es/client.js`를 동적으로 삽입한다.
- Theme disqus include
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_includes/comments/disqus.html`
  - Disqus embed를 lazy loading한다.
- Theme post layout
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_layouts/post.html`
  - `script_includes`에 `comment`가 이미 포함되어 있다.

## Provider Options

### giscus

Best fit for this repository.

- Uses GitHub Discussions.
- Visitors need a GitHub account to comment.
- Moderation happens in GitHub Discussions.
- Requires:
  - public GitHub repository
  - GitHub Discussions enabled
  - giscus GitHub App installed
  - `repo_id` and `category_id` generated from https://giscus.app/
- Good default mapping:
  - `pathname`
  - Reason: this blog uses stable post permalinks like `/posts/:title/`.

### utterances

Good fallback if GitHub Issues are preferred over Discussions.

- Uses GitHub Issues.
- Visitors need a GitHub account.
- Simpler config:
  - `repo`
  - `issue_term`
- Less ideal than giscus if comments should feel like discussion threads rather than issue threads.

### Disqus

Technically supported but not recommended as first choice.

- External comment platform.
- Requires Disqus site/shortname setup.
- More third-party dependency and privacy/product baggage than GitHub-based comments.

## Recommended UX Policy

Use comments on normal public posts.

For password-protected posts from `docs/plans/password-protected-posts-plan.md`, default to no comments:

```yaml
comments: false
```

Reason:

- giscus comments are stored in public GitHub Discussions.
- A protected post's body can be encrypted, but the comment thread itself is not protected by that password.
- If a reader comments with private context, that context becomes public on GitHub Discussions.

If comments on protected posts are still desired, use an explicit opt-in:

```yaml
protected: true
comments: true
protected_comments: true
```

That should be treated as public discussion attached to a locked page, not as protected/private comments.

## Implementation Approach

### 1. Configure giscus Outside The Repo

On GitHub:

1. Ensure `sangjun-sim/sangjun-sim.github.io` is public.
2. Enable Discussions in the repository settings.
3. Create a discussion category such as `Comments`.
4. Install the giscus GitHub App for this repository.
5. Open https://giscus.app/ and generate config values:
   - `data-repo`
   - `data-repo-id`
   - `data-category`
   - `data-category-id`
   - `data-mapping`
   - `data-strict`
   - `data-reactions-enabled`
   - `data-input-position`
   - `data-lang`

Recommended giscus settings:

- Repository: `sangjun-sim/sangjun-sim.github.io`
- Page mapping: `pathname`
- Strict title matching: `0`
- Discussion category: `Comments` or `Announcements`
- Search only in category: enabled if the giscus UI produces the matching strict/category config
- Reactions: `1`
- Input position: `bottom`
- Language: `en` to match current `site.lang`, or `ko` if the comments UI should be Korean.

### 2. Update `_config.yml`

Change the current comments block to use `giscus`.

Proposed snippet:

```yaml
comments:
  # Global switch for the post-comment system. Keeping it empty means disabled.
  provider: giscus # [disqus | utterances | giscus]
  disqus:
    shortname:
  utterances:
    repo:
    issue_term:
  giscus:
    repo: sangjun-sim/sangjun-sim.github.io
    repo_id: R_REPLACE_WITH_GISCUS_REPO_ID
    category: Comments
    category_id: DIC_REPLACE_WITH_GISCUS_CATEGORY_ID
    mapping: pathname
    strict: 0
    input_position: bottom
    lang: en
    reactions_enabled: 1
```

Important:

- Do not guess `repo_id` or `category_id`; copy them from https://giscus.app/.
- Keep `provider: giscus` under `comments`, not under `comments.giscus`.
- Numeric-looking values can stay unquoted, but quoted strings are also fine if the generated value contains special characters.

### 3. Decide All Posts vs Selected Posts

Current config already enables comments by default for posts:

```yaml
defaults:
  - scope:
      path: ""
      type: posts
    values:
      comments: true
```

Option A: comments on all normal posts.

- Keep the current default.
- Add `comments: false` only to posts where comments should be closed.

Example:

```yaml
---
title: Some Post
comments: false
---
```

Option B: comments only on selected posts.

- Change default to `comments: false`.
- Add `comments: true` to target posts.

Config change:

```yaml
defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: post
      comments: false
      toc: true
      permalink: /posts/:title/
```

Post opt-in:

```yaml
---
title: Some Post
comments: true
---
```

Recommended for this blog:

- Use Option A for public posts.
- Add `comments: false` to password-protected posts.

### 4. Optional Protected-Post Guard

If the password-protected post plan is implemented and we want to prevent accidental comments on protected posts, add a local `_includes/comment.html` override.

Add `_includes/comment.html`:

```liquid
<!-- Copied from jekyll-theme-chirpy 7.5.0 _includes/comment.html and customized for protected posts. -->
{% if page.comments and site.comments.provider %}
  {% capture path %}comments/{{ site.comments.provider }}.html{% endcapture %}

  {% if page.protected %}
    {% if page.protected_comments == true %}
      {% include {{ path }} %}
    {% endif %}
  {% else %}
    {% include {{ path }} %}
  {% endif %}
{% endif %}
```

Note:

- This keeps normal posts unchanged.
- Protected posts stay comment-free unless explicitly set to both `comments: true` and `protected_comments: true`.
- `protected_comments` is separate because Jekyll defaults already set `comments: true` for posts, so `comments: true` alone does not prove the post intentionally opted in.
- The protected-post condition is intentionally split into nested `if` statements to avoid Liquid edge cases around compound `unless` conditions.

### 5. Optional Styling

Chirpy inserts giscus before `footer`; no custom style is required.

If spacing looks too tight after local visual testing, add `_sass/custom/_comments.scss`:

```scss
.giscus {
  margin-top: 2.5rem;
}
```

Then update `assets/css/jekyll-theme-chirpy.scss`:

```scss
@use 'custom/comments';
```

Only add this after checking the rendered page; avoid extra CSS if the theme spacing is already good.

## Validation Plan

1. Build locally:

```bash
bundle exec jekyll build
```

2. Check generated post pages include the giscus script:

```bash
rg "giscus.app/client.js|data-repo|data-category" _site/posts
```

3. Serve locally:

```bash
bundle exec jekyll serve
```

4. Browser checks:
   - A normal post shows the giscus comment box near the footer.
   - Theme toggle changes the giscus theme.
   - A post with `comments: false` does not load the giscus script.
   - If protected posts are implemented, protected posts do not show comments unless explicitly opted in.

5. Run the existing site check:

```bash
bash tools/test.sh
```

## Implementation Notes

Implemented on 2026-05-29 with `utterances` as the active provider.

Reason:

- GitHub API reports `sangjun-sim/sangjun-sim.github.io` is public and Issues/Pages are enabled.
- GitHub API also reports `has_discussions: false`, so `giscus` cannot be completed from code alone yet.
- Local `gh auth status` reports the current GitHub token is invalid, so Codex cannot enable Discussions or install/configure giscus on the repository.
- `utterances` uses GitHub Issues and only needs `_config.yml` values in this repo plus the external utterances GitHub App installation.

Files changed:

- `_config.yml`
  - Set `comments.provider: utterances`.
  - Set `comments.utterances.repo: sangjun-sim/sangjun-sim.github.io`.
  - Set `comments.utterances.issue_term: pathname`.
- `_includes/comment.html`
  - Added a local Chirpy include override.
  - Keeps normal post comments working.
  - Prevents comments on protected posts unless `protected_comments: true` is explicitly set.

Remaining external setup:

- Install the utterances GitHub App for `sangjun-sim/sangjun-sim.github.io`: https://utteranc.es/
- If giscus is still preferred later, enable GitHub Discussions, install giscus, generate `repo_id`/`category_id`, then switch `_config.yml` back to `provider: giscus`.

Validation results:

- `bundle exec jekyll build` passed.
- Generated post pages include:
  - `https://utteranc.es/client.js`
  - `repo: sangjun-sim/sangjun-sim.github.io`
  - `issue-term: pathname`
- `bash tools/test.sh` rebuilt the site but failed in the `htmlproofer` step because Ruby could not load the `debug` gem:
  - `cannot load such file -- debug`
  - Confirmed with `bundle exec ruby -e "require 'debug'"`, which fails the same way.
  - This appears to be a test dependency/environment issue, not a comments rendering issue.

## Implementation Checklist

- [ ] Enable GitHub Discussions for `sangjun-sim/sangjun-sim.github.io`. Blocked: repository currently has `has_discussions: false` and local GitHub auth is invalid.
- [ ] Create or choose a discussion category for comments. Blocked until Discussions is enabled.
- [ ] Install the giscus GitHub App for the repository. Blocked until giscus is chosen and external GitHub setup is available.
- [ ] Generate giscus config values from https://giscus.app/. Blocked until Discussions and giscus setup are available.
- [ ] Update `_config.yml` `comments.provider` to `giscus`. Deferred: implemented `utterances` instead because Discussions are disabled.
- [ ] Fill `comments.giscus.repo`, `repo_id`, `category`, and `category_id`. Deferred for giscus.
- [ ] Set `mapping: pathname`, `strict: 0`, `input_position: bottom`, `reactions_enabled: 1`. Deferred for giscus.
- [x] Decide whether comments default to all posts or selected posts.
- [ ] Add `comments: false` to password-protected posts, if any.
- [x] Optionally add `_includes/comment.html` protected-post guard.
- [ ] If a protected post should intentionally have public comments, add `protected_comments: true`.
- [x] Configure active comments provider in `_config.yml`.
- [x] Use `utterances` with `repo: sangjun-sim/sangjun-sim.github.io` and `issue_term: pathname`.
- [ ] Install the utterances GitHub App for the repository.
- [x] Build with `bundle exec jekyll build`.
- [x] Verify generated pages contain the comments script where expected.
- [ ] Run `bash tools/test.sh`. Blocked: htmlproofer cannot load Ruby `debug` gem in the current bundle/environment.

## Proposed Commit Message

```text
Enable giscus comments for public posts
```
