# Password Protected Posts Plan

## Request

몇몇 포스트에 암호를 걸 수 있는지 확인하고, 가능한 구현 방식을 정리한다.

## Short Answer

가능하다. 다만 이 사이트는 GitHub Pages에 배포되는 Jekyll 정적 사이트이므로 서버에서 로그인/권한을 검사하는 방식은 쓸 수 없다. 권장 방식은 빌드 시 보호 대상 포스트 본문 HTML을 암호화하고, 방문자가 암호를 입력하면 브라우저의 Web Crypto API로 복호화해서 보여주는 방식이다.

중요한 제한:

- 저장소가 public이면 `_posts/`의 원본 Markdown은 GitHub에서 그대로 보일 수 있다.
- 진짜 비공개 글이 목적이면 저장소 자체를 private로 두거나, 보호 글 원본을 public repo 밖에서 주입해야 한다.
- 정적 사이트는 서버가 없으므로 rate limit, 계정별 권한, 시도 횟수 제한은 할 수 없다.
- 제목, 날짜, 카테고리, 태그 같은 메타데이터는 별도 처리하지 않으면 계속 노출된다.

## Current Structure

- `_config.yml`
  - `theme: jekyll-theme-chirpy`
  - posts 기본값은 `layout: post`, permalink는 `/posts/:title/`.
  - `pwa.enabled: true`, `pwa.cache.enabled: true`.
- `_layouts/home.html`
  - Chirpy `7.5.0`의 `home.html`을 로컬 오버라이드하고 있다.
  - 홈 포스트 목록에서 `{% include post-summary.html %}`를 사용한다.
  - normal posts는 `hidden != true`를 필터링하지만 pinned posts는 기존 Chirpy 로직을 유지한다.
- `assets/css/jekyll-theme-chirpy.scss`
  - 이미 로컬에서 theme CSS entry를 오버라이드하고 있다.
  - 현재 `custom/home`, `custom/post`를 import한다.
- `_sass/custom/_post.scss`
  - 포스트 문단 정렬/줄바꿈 스타일만 있다.
- Theme post layout
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_layouts/post.html`
  - 현재 로컬 `_layouts/post.html`은 없으므로 포스트 본문은 테마 기본 레이아웃에서 렌더링된다.
- Theme post summary include
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_includes/post-summary.html`
  - 홈, related posts, feed, search index에서 본문 요약을 만든다.
- Theme search index
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/assets/js/data/search.json`
  - `post-summary.html full_text=true`를 호출하므로 보호 글 본문이 search JSON으로 새면 안 된다.
- Theme feed
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/assets/feed.xml`
  - `post-summary.html max_length=400`을 호출하므로 보호 글 요약이 안전해야 한다.
- `.github/workflows/pages-deploy.yml`
  - GitHub Actions에서 `bundle exec jekyll b`로 빌드한다.
  - 보호 글 암호는 GitHub Actions secret으로 주입할 수 있다.

## Target Behavior

1. 보호하지 않는 글은 현재와 동일하게 렌더링한다.
2. 보호할 글은 front matter에 `protected: true`를 추가한다.
3. 보호 글 페이지는 제목/날짜/카테고리 같은 메타데이터와 암호 입력 UI만 먼저 보여준다.
4. 올바른 암호를 입력하면 암호화된 본문 HTML을 브라우저에서 복호화하고 `.content` 영역에 삽입한다.
5. 홈, related posts, feed, search index에는 보호 글 본문이 노출되지 않고 안전한 placeholder만 노출된다.
6. 빌드 시 암호 환경변수가 없으면 실패시켜, 보호 글이 잘못 배포되지 않게 한다.

## Recommended Front Matter

```yaml
---
title: Private Note Example
date: 2026-05-29 21:00:00 +0900
categories:
  - Private
tags:
  - note
protected: true
password_id: personal
description: "Password protected post."
protected_excerpt: "This post is password protected."
toc: true
---
```

Notes:

- `password_id`는 암호 그룹 이름이다. 예를 들어 `personal`, `research`, `drafts`처럼 나눌 수 있다.
- 실제 암호는 front matter나 repo에 넣지 않는다.
- `description`과 `protected_excerpt`는 SEO/search/feed/list에서 본문 일부가 새지 않도록 안전한 문구로 둔다.

## Implementation Approach

### 1. Add A Build-Time Encryption Filter

Add `_plugins/protected-posts.rb`.

Responsibilities:

- `protected: true` 포스트의 `description` 기본값을 안전한 placeholder로 설정한다.
- Liquid filter로 렌더링된 HTML content를 AES-256-GCM으로 암호화한다.
- 암호는 환경변수에서만 읽는다.
- `password_id: personal`이면 `PROTECTED_POST_PASSWORD_PERSONAL`을 먼저 찾고, 없으면 `PROTECTED_POST_PASSWORD`를 fallback으로 사용한다.
- 암호가 없으면 build error를 낸다.

Proposed snippet:

```ruby
# frozen_string_literal: true

require "base64"
require "json"
require "openssl"

Jekyll::Hooks.register :posts, :pre_render do |post|
  next unless post.data["protected"]

  safe_excerpt = post.data["protected_excerpt"] || "Password protected post."
  post.data["description"] ||= safe_excerpt
end

module ProtectedPosts
  ITERATIONS = 210_000

  def protected_post_payload(input, password_id = nil)
    password = protected_post_password(password_id)
    raise Liquid::Error, "Missing protected post password for #{password_id || 'default'}" if password.to_s.empty?

    salt = OpenSSL::Random.random_bytes(16)
    iv = OpenSSL::Random.random_bytes(12)
    key = OpenSSL::KDF.pbkdf2_hmac(
      password,
      salt: salt,
      iterations: ITERATIONS,
      length: 32,
      hash: "SHA256"
    )

    cipher = OpenSSL::Cipher.new("aes-256-gcm")
    cipher.encrypt
    cipher.key = key
    cipher.iv = iv

    ciphertext = cipher.update(input.to_s) + cipher.final
    ciphertext_with_tag = ciphertext + cipher.auth_tag

    {
      "version" => 1,
      "kdf" => "PBKDF2",
      "hash" => "SHA-256",
      "iterations" => ITERATIONS,
      "cipher" => "AES-GCM",
      "salt" => Base64.strict_encode64(salt),
      "iv" => Base64.strict_encode64(iv),
      "ciphertext" => Base64.strict_encode64(ciphertext_with_tag)
    }.to_json
  end

  private

  def protected_post_password(password_id)
    normalized = password_id.to_s.upcase.gsub(/[^A-Z0-9]+/, "_")
    grouped_key = normalized.empty? ? nil : "PROTECTED_POST_PASSWORD_#{normalized}"
    grouped_key && ENV[grouped_key] || ENV["PROTECTED_POST_PASSWORD"]
  end
end

Liquid::Template.register_filter(ProtectedPosts)
```

### 2. Override The Post Layout

Add `_layouts/post.html` by copying:

`/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_layouts/post.html`

Keep Chirpy's structure, then change only the content rendering area and script includes.

Layout front matter change:

```yaml
---
layout: default
panel_includes:
  - toc
tail_includes:
  - related-posts
  - post-nav
script_includes:
  - comment
  - protected-post-script
---
```

Content area change:

```liquid
{% if page.protected %}
  <section class="protected-post-lock" data-protected-post>
    <p class="protected-post-lock__eyebrow">Protected post</p>
    <h2 class="protected-post-lock__title">Password required</h2>
    <form class="protected-post-lock__form" data-protected-form>
      <label for="protected-post-password">Password</label>
      <div class="protected-post-lock__row">
        <input
          id="protected-post-password"
          type="password"
          autocomplete="current-password"
          data-protected-password
          required
        >
        <button type="submit">Unlock</button>
      </div>
      <p class="protected-post-lock__message" data-protected-message aria-live="polite"></p>
    </form>
    <script type="application/json" data-protected-payload>
      {{ content | protected_post_payload: page.password_id }}
    </script>
    <noscript>This post requires JavaScript to unlock.</noscript>
  </section>

  <div class="content protected-post-content d-none" data-protected-content></div>
{% else %}
  <div class="content">
    {{ content }}
  </div>
{% endif %}
```

Important detail:

- `content`는 Markdown이 HTML로 변환된 뒤 layout에 들어오므로, 이 HTML을 암호화한다.
- 암호화된 payload만 HTML에 남고 원문 본문은 `_site`의 post HTML에 남지 않아야 한다.
- 복호화 후 TOC가 있는 글은 `tocbot.refresh()`를 호출해 목차를 다시 계산한다.

### 3. Add Client Decryption Script

Add `assets/js/protected-post.js`.

Responsibilities:

- 보호 글 form submit을 처리한다.
- base64 payload를 ArrayBuffer로 변환한다.
- PBKDF2로 AES-GCM key를 derive한다.
- 복호화 성공 시 HTML을 `data-protected-content`에 삽입한다.
- 실패 시 간단한 오류 메시지를 보여준다.

Proposed snippet:

```javascript
(() => {
  const root = document.querySelector("[data-protected-post]");
  if (!root || !window.crypto?.subtle) return;

  const payloadElement = root.querySelector("[data-protected-payload]");
  const form = root.querySelector("[data-protected-form]");
  const input = root.querySelector("[data-protected-password]");
  const message = root.querySelector("[data-protected-message]");
  const content = document.querySelector("[data-protected-content]");
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const fromBase64 = (value) => {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  };

  const decrypt = async (payload, password) => {
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: fromBase64(payload.salt),
        iterations: payload.iterations,
        hash: payload.hash
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );

    const plaintext = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(payload.iv) },
      key,
      fromBase64(payload.ciphertext)
    );

    return decoder.decode(plaintext);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "";

    try {
      const payload = JSON.parse(payloadElement.textContent);
      const html = await decrypt(payload, input.value);
      content.innerHTML = html;
      content.classList.remove("d-none");
      root.remove();
      window.tocbot?.refresh?.();
    } catch {
      message.textContent = "Password did not unlock this post.";
    }
  });
})();
```

### 4. Add Conditional Script Include

Add `_includes/protected-post-script.html`.

```liquid
{% if page.protected %}
  <script src="{{ '/assets/js/protected-post.js' | relative_url }}"></script>
{% endif %}
```

### 5. Protect Summaries Everywhere

Add `_includes/post-summary.html` by copying:

`/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_includes/post-summary.html`

Add this guard at the top:

```liquid
{%- if post.protected -%}
  {{- post.protected_excerpt | default: post.description | default: "Password protected post." -}}
{%- elsif post.description and include.full_text != true -%}
  {{- post.description -}}
{%- else -%}
  <!-- Keep the original Chirpy summary logic here. -->
{%- endif -%}
```

This is important because the same include is used by:

- Home post cards
- Related posts
- Atom feed summary
- Search index content

### 6. Add Styles

Add `_sass/custom/_protected-post.scss`.

Proposed snippet:

```scss
.protected-post-lock {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid var(--main-border-color);
  border-radius: 0.5rem;
  background: var(--card-bg);
}

.protected-post-lock__eyebrow {
  margin-bottom: 0.5rem;
  color: var(--text-muted-color);
  font-size: 0.85rem;
  font-weight: 600;
}

.protected-post-lock__title {
  margin-bottom: 1rem;
}

.protected-post-lock__row {
  display: flex;
  gap: 0.75rem;
}

.protected-post-lock__row input {
  min-width: 0;
  flex: 1;
}

.protected-post-lock__message {
  min-height: 1.5rem;
  margin: 0.75rem 0 0;
  color: var(--prompt-danger-icon-color);
}
```

Update `assets/css/jekyll-theme-chirpy.scss`:

```scss
@use 'custom/protected-post';
```

### 7. Add Build Secret To GitHub Actions

Change `.github/workflows/pages-deploy.yml` build step:

```yaml
      - name: Build site
        run: bundle exec jekyll b -d "_site${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: "production"
          PROTECTED_POST_PASSWORD: ${{ secrets.PROTECTED_POST_PASSWORD }}
          PROTECTED_POST_PASSWORD_PERSONAL: ${{ secrets.PROTECTED_POST_PASSWORD_PERSONAL }}
```

GitHub repo settings also need matching Actions secrets.

Local build example:

```bash
PROTECTED_POST_PASSWORD="local-test-password" bundle exec jekyll build
```

## Validation Plan

1. Add one temporary protected test post with a unique phrase in the body.
2. Build with password:

```bash
PROTECTED_POST_PASSWORD="local-test-password" bundle exec jekyll build
```

3. Verify the unique body phrase is absent from generated public files:

```bash
rg "UNIQUE_PRIVATE_PHRASE" _site assets/js/data/search.json feed.xml
```

4. Serve locally:

```bash
PROTECTED_POST_PASSWORD="local-test-password" bundle exec jekyll serve
```

5. Browser checks:
   - wrong password shows an error
   - correct password reveals content
   - headings appear in TOC after unlock
   - home/search/feed show only `protected_excerpt`

6. Run the existing site check:

```bash
PROTECTED_POST_PASSWORD="local-test-password" bash tools/test.sh
```

## Security And Product Notes

- This protects the generated site output, not a public GitHub source repo.
- If the repo remains public and protected content is committed to `_posts/`, readers can bypass the website and read Markdown on GitHub.
- There is no meaningful client-side rate limit. Anyone can attempt offline password guesses against the encrypted payload.
- Use a strong password. PBKDF2 slows guessing, but weak passwords are still weak.
- Changing a leaked password requires rebuilding the site with a new password.
- If some protected posts should not appear in home/archive/category/tag lists at all, add a separate `hidden: true` policy and update list layouts/includes beyond just `post-summary.html`.

## Implementation Checklist

- [ ] Add `_plugins/protected-posts.rb`.
- [ ] Copy Chirpy `7.5.0` `_layouts/post.html` into `_layouts/post.html`.
- [ ] Modify only the post content area and `script_includes` in `_layouts/post.html`.
- [ ] Add `_includes/protected-post-script.html`.
- [ ] Copy Chirpy `7.5.0` `_includes/post-summary.html` into `_includes/post-summary.html`.
- [ ] Add the protected summary guard to `_includes/post-summary.html`.
- [ ] Add `assets/js/protected-post.js`.
- [ ] Add `_sass/custom/_protected-post.scss`.
- [ ] Import `custom/protected-post` from `assets/css/jekyll-theme-chirpy.scss`.
- [ ] Add GitHub Actions secret env entries to `.github/workflows/pages-deploy.yml`.
- [ ] Mark target posts with `protected: true`, `password_id`, `description`, and `protected_excerpt`.
- [ ] Build locally with a test password.
- [ ] Confirm protected body text is absent from `_site`, search JSON, and feed.
- [ ] Run `bash tools/test.sh` with the password env var.

## Proposed Commit Message

```text
Add encrypted password protection plan for selected posts
```
