# Home Hero, Intro, And Posts Plan

## Request

홈 화면 상단에 큰 배경 사진을 배치하고, 그 아래에 자기소개 섹션을 넣은 뒤, 그 아래에 기존 포스트 목록을 계속 보여준다.

## Current Structure

- `index.html`
  - 현재 내용은 `layout: home`만 지정한다.
  - 실제 홈 화면 포스트 목록은 Chirpy 테마의 `home` 레이아웃에서 렌더링된다.
- Theme layout source
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/_layouts/home.html`
  - pinned post, normal post, pagination 계산 로직이 들어 있다.
- Theme styles
  - `/Users/sangjun/.gem/ruby/3.4.1/gems/jekyll-theme-chirpy-7.5.0/assets/css/jekyll-theme-chirpy.scss`
  - custom style을 append하라는 주석이 있는 구조다.
  - 현재 repo에는 로컬 `assets/css/jekyll-theme-chirpy.scss`가 없으므로, 필요한 경우 테마 CSS entry를 로컬에서 오버라이드해야 한다.
- Posts
  - `_posts/`에 포스트들이 있고, Chirpy의 기존 home layout은 `site.posts`, `paginator.posts`, `post.image`, `post.categories`, `post.pin`을 사용한다.
  - 기존 포스트 목록 로직은 최대한 유지해야 pagination과 pinned post 동작이 깨지지 않는다.

## Target UX

1. 첫 화면 상단
   - 큰 배경 사진이 보이는 hero 영역.
   - 사이트 주인 이름, 짧은 한 줄 설명, 관심 주제 키워드를 사진 위에 얹는다.
   - Chirpy sidebar와 main column 안에서 자연스럽게 보이도록 과하게 full-bleed 처리하지 않는다.
2. Hero 아래
   - 자기소개 섹션을 별도 블록으로 보여준다.
   - 연구/공부 주제와 블로그에서 다루는 주제를 간단히 요약한다.
3. 자기소개 아래
   - 기존 포스트 카드 목록을 유지한다.
   - `#post-list`는 Chirpy 원본처럼 content 컬럼 안에서 직접 렌더링한다.
   - 불필요한 `.home-posts` 래퍼나 `Posts` 헤딩은 추가하지 않는다.
   - 기존 pagination을 유지한다.

## Files To Add Or Change

- Add `_data/home.yml`
  - hero 이미지, eyebrow, 소개 문구, 키워드를 데이터로 분리한다.
  - 나중에 문구만 바꿀 때 layout을 건드리지 않아도 된다.
- Add `_layouts/home.html`
  - Chirpy theme의 `home.html`을 로컬로 오버라이드한다.
  - 기존 pinned/normal post/pagination Liquid 로직은 유지한다.
  - `#post-list` 위에 hero와 intro markup을 추가한다.
  - 파일 상단에 Chirpy `7.5.0`의 `home.html`에서 복사했다는 주석을 남긴다.
- Add `assets/css/jekyll-theme-chirpy.scss`
  - theme CSS entry를 로컬로 오버라이드하고 custom Sass를 추가한다.
- Add `_sass/custom/_home.scss`
  - hero, intro, post section spacing 스타일을 작성한다.
- Add image asset
  - 후보 경로: `assets/img/home-hero.jpg`
  - 이 파일이 없으면 hero가 깨진 이미지로 렌더링되므로 구현 전 반드시 확정한다.

## Proposed Data Shape

`_data/home.yml`

```yaml
hero:
  image: /assets/img/home-hero.jpg
  alt: "A wide background image for Sangjun Sim's blog"
  eyebrow: "Notes on physics and computation"
  title: Sangjun Sim
  subtitle: "Physics, computation, and notes from things I am learning."
  topics:
    - Condensed Matter
    - Magnetism
    - Many-Body Physics
    - Programming

intro:
  title: About
  body: >-
    I write technical notes while studying condensed matter physics,
    many-body theory, magnetism, symmetry, and programming tools.
    This blog is a place to keep ideas precise enough to revisit.
```

## Proposed Layout Snippet

`_layouts/home.html`

```liquid
---
layout: default
---

{% include lang.html %}

{% assign home = site.data.home %}
{% assign all_pinned = site.posts | where: 'pin', 'true' %}
{% assign all_normal = site.posts | where_exp: 'item', 'item.pin != true and item.hidden != true' %}

{% assign posts = '' | split: '' %}

<!-- Keep Chirpy's existing pinned/normal/pagination calculation here. -->

{% if paginator.page == 1 and home %}
  <section class="home-hero" aria-label="Homepage introduction">
    <img
      class="home-hero__image"
      src="{{ home.hero.image | relative_url }}"
      alt="{{ home.hero.alt | default: site.title | escape }}"
    >
    <div class="home-hero__overlay">
      <p class="home-hero__eyebrow">{{ home.hero.eyebrow }}</p>
      <h1>{{ home.hero.title | default: site.title }}</h1>
      <p class="home-hero__subtitle">{{ home.hero.subtitle }}</p>

      {% if home.hero.topics %}
        <ul class="home-hero__topics" aria-label="Main topics">
          {% for topic in home.hero.topics %}
            <li>{{ topic }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </div>
  </section>

  <section class="home-intro" aria-labelledby="home-intro-title">
    <h2 id="home-intro-title">{{ home.intro.title }}</h2>
    <p>{{ home.intro.body }}</p>
  </section>
{% endif %}

<div id="post-list" class="flex-grow-1 px-xl-1">
  <!-- Keep Chirpy's existing post card loop here. -->
</div>

{% if paginator.total_pages > 1 %}
  {% include post-paginator.html %}
{% endif %}
```

Important detail:

- `paginator.page == 1` 조건을 걸어 hero와 자기소개가 `/page2/` 같은 pagination 페이지에 반복되지 않도록 한다.
- pinned post 선택 로직의 `where: 'pin', 'true'`는 Chirpy 원본과 같이 문자열 `'true'`를 유지한다.
  - boolean `true`로 바꾸면 pinned post 동작이 달라질 수 있다.
- 포스트 카드 loop 내부는 Chirpy theme 원본을 그대로 가져온다.
- 포스트 목록 바깥에 별도 section 래퍼나 heading은 추가하지 않는다.
  - 원본의 `#post-list` 위치와 selector 구조를 유지해 Chirpy 간격/스타일 회귀 위험을 낮춘다.

## Proposed CSS Entry

`assets/css/jekyll-theme-chirpy.scss`

```scss
---
---

/* prettier-ignore */
@use 'main
{%- if jekyll.environment == 'production' -%}
  .bundle
{%- endif -%}
';

@use 'custom/home';
```

## Proposed Custom Styles

`_sass/custom/_home.scss`

```scss
.home-hero {
  position: relative;
  min-height: 520px;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--main-bg);
}

.home-hero__image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
}

.home-hero::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(
    90deg,
    rgb(0 0 0 / 70%),
    rgb(0 0 0 / 34%),
    rgb(0 0 0 / 10%)
  );
}

.home-hero__overlay {
  position: absolute;
  z-index: 1;
  inset: auto 1.5rem 1.75rem;
  max-width: 42rem;
  color: #fff;
}

.home-hero__eyebrow {
  margin-bottom: 0.75rem;
  color: rgb(255 255 255 / 82%);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0;
}

.home-hero__overlay h1 {
  margin: 0;
  color: #fff;
  font-size: 4rem;
  line-height: 1;
}

.home-hero__subtitle,
.home-intro p {
  font-size: 1.05rem;
  line-height: 1.7;
}

.home-hero__subtitle {
  max-width: 34rem;
  margin: 1rem 0 0;
  color: rgb(255 255 255 / 88%);
}

.home-hero__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 1.25rem 0 0;
  list-style: none;
}

.home-hero__topics li {
  padding: 0.35rem 0.65rem;
  border: 1px solid rgb(255 255 255 / 42%);
  border-radius: 999px;
  background: rgb(0 0 0 / 24%);
  color: #fff;
  font-size: 0.9rem;
  line-height: 1.3;
}

.home-intro {
  margin-top: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--main-border-color);
}

.home-intro h2 {
  margin-bottom: 0.75rem;
  color: var(--heading-color);
  font-size: 1.5rem;
}

.home-intro p {
  max-width: 46rem;
  margin-bottom: 0;
  color: var(--text-color);
}

@media (max-width: 767.98px) {
  .home-hero {
    min-height: 430px;
  }

  .home-hero__overlay {
    inset: auto 1rem 1.25rem;
  }

  .home-hero__overlay h1 {
    font-size: 2.5rem;
  }

  .home-hero__subtitle,
  .home-intro p {
    font-size: 1rem;
  }

  .home-hero__topics li {
    font-size: 0.85rem;
  }
}
```

## Implementation Checklist

- [x] 구현 전에 hero 사진을 확정하고 `assets/img/home-hero.jpg`에 추가한다.
- [x] `_data/home.yml`을 추가하고 자기소개 문구를 작성한다.
- [x] Chirpy theme의 `_layouts/home.html`을 로컬 `_layouts/home.html`로 오버라이드한다.
- [x] `_layouts/home.html` 상단에 `Copied from jekyll-theme-chirpy 7.5.0 _layouts/home.html` 주석을 남긴다.
- [x] 기존 pinned/normal post/pagination Liquid 로직을 그대로 유지한다.
- [x] `where: 'pin', 'true'`의 문자열 `'true'`를 boolean으로 바꾸지 않는다.
- [x] 첫 페이지에만 hero와 intro가 보이도록 `paginator.page == 1` 조건을 적용한다.
- [x] `#post-list`를 추가 래퍼 없이 Chirpy 원본 위치에 둔다.
- [x] `assets/css/jekyll-theme-chirpy.scss`를 추가해 theme style과 custom style을 함께 로드한다.
- [x] `_sass/custom/_home.scss`를 추가한다.
- [x] `bundle exec jekyll build` 또는 `bash tools/test.sh`로 빌드를 확인한다.
- [x] 데스크톱과 모바일 폭에서 hero 텍스트가 이미지 밖으로 넘치지 않는지 확인한다.

## Open Questions

- Hero 배경 사진은 어떤 이미지를 사용할지 미정이다.
  - 개인 사진, 연구/노트 분위기의 사진, 직접 생성한 이미지 중 하나를 선택해야 한다.
  - 이 항목은 구현 선행 조건이다.
- 자기소개 문구의 톤이 미정이다.
  - 현재 계획은 임시 문구를 제안하지만, 실제 구현 전에는 사용자의 표현으로 다듬는 것이 좋다.
- 홈에 표시할 포스트를 기존 최신순 그대로 둘지, 카테고리별 섹션으로 나눌지는 미정이다.
  - 현재 계획은 기존 Chirpy 최신순 포스트 목록을 유지한다.

## Implementation Notes

- Hero 이미지는 imagegen built-in tool로 생성한 뒤 `assets/img/home-hero.jpg`로 저장했다.
- Generated source: `/Users/sangjun/.codex/generated_images/019e6986-2f09-7ad0-a37e-7232303db2db/ig_00300e98d1dcc240016a16f82fcb6c8191be66e1ccf7463825.png`
- Workspace asset: `assets/img/home-hero.jpg`
- 자기소개 문구와 포스트 목록 방식은 계획의 기본안을 사용했다.
- Build: `bundle exec jekyll build` passed.
- Visual check: Playwright screenshots passed at `1280x900` and `390x900`.
  - Desktop screenshot: `/tmp/home-desktop.png`
  - Mobile screenshot: `/tmp/home-mobile.png`
- Local server: `http://127.0.0.1:4001/`

## Review Comment Resolutions

- `#post-list`는 기존 Chirpy selector 구조와 spacing을 보존하기 위해 별도 section으로 감싸지 않는다.
- hero eyebrow는 `site.tagline`을 직접 쓰지 않고 `_data/home.yml`의 `home.hero.eyebrow`로 분리한다.
- `_layouts/home.html` 오버라이드 파일에는 Chirpy `7.5.0` 원본에서 복사했다는 주석을 남긴다.
- pinned post 로직의 문자열 `'true'`는 원본 그대로 유지한다.
- hero 이미지가 없는 상태에서는 구현하지 않는다.

## Suggested Commit Message

```text
Add home hero intro and custom homepage styling
```

## Review Comments (2026-05-27)

### 검증 완료 — 계획과 실제 상태가 일치하는 항목

- 로컬 오버라이드 전략이 유효하다. 현재 repo에는 `_layouts/`, `_sass/`, `assets/css/`가 없어
  (`_data/`만 존재) 동일 이름 파일을 추가하면 gem 테마를 덮어쓴다. `theme: jekyll-theme-chirpy`
  (remote_theme 아님)이므로 로컬 우선순위가 정상 작동한다.
- `index.html`은 `layout: home`만 지정 → 계획대로 `_layouts/home.html`만 추가하면 된다.
- `_config.yml`에 `paginate: 10`, `baseurl: ""`가 설정돼 있어 `paginator` 변수와
  `relative_url`이 의도대로 동작한다. `paginator.page == 1` 조건도 유효하다.
- CSS entry 스니펫(`@use 'main...'`)이 테마 원본
  (`jekyll-theme-chirpy-7.5.0/assets/css/jekyll-theme-chirpy.scss`)과 정확히 일치한다.
- pinned/normal/pagination Liquid 로직은 테마 원본과 동일하므로 "그대로 복사" 지시가 맞다.
  단, 원본의 `where: 'pin', 'true'`(문자열 `'true'`)도 **그대로** 유지해야 한다. boolean
  `true`로 "고치면" pinned 동작이 깨진다. 체크리스트에 이 주의를 명시하는 게 좋다.

### 보완하면 좋을 점

1. **`#post-list`를 새 `<section>`으로 감싸는 부분 — 회귀 위험.** 원본에서는 `#post-list`가
   `content` 컬럼의 직계 자식이다. 계획처럼 `.home-posts` 래퍼 + `<h2>Posts</h2>`를 끼우면
   Chirpy의 기존 간격/스타일과 어긋날 수 있다. 래퍼와 헤딩이 꼭 필요한지 재검토하고,
   불필요하면 `#post-list`를 원형 그대로 두는 편이 안전하다.

2. **Hero eyebrow와 subtitle 중복.** `site.tagline`이 현재
   `"My personal blog posting geek stuffs"`이고, `home.yml`의 subtitle은 따로 더 진지한 문구다.
   eyebrow에 tagline을 그대로 쓰면 톤이 충돌한다. tagline을 먼저 다듬거나 eyebrow를
   `home.yml`의 별도 필드로 빼는 것을 권장.

3. **테마 업데이트 시 유지보수 비용.** `home.html`을 통째로 복사·오버라이드하면 gem이
   7.5.0 이후로 올라갈 때 상류의 pinned/pagination 버그픽스를 자동으로 못 받는다. 복사한
   파일 상단에 "Chirpy 7.5.0 home.html에서 복사함" 주석을 남겨 추적 가능하게 할 것.

4. **Hero 레이아웃 스코프 확인.** 계획대로 hero를 사이드바 옆 content 컬럼 안에 두면
   데스크톱에서 폭이 좁고 세로로 긴 배너가 된다(`min-height: clamp(360px, 52vh, 620px)`).
   요청("과하게 full-bleed 처리하지 않는다")과는 일치하지만, 시각적으로 의도한 모습인지
   구현 후 데스크톱·모바일에서 함께 확인 필요. 체크리스트의 모바일 확인 항목에 데스크톱도 추가.

5. **이미지 에셋이 blocker.** `assets/img/home-hero.jpg`가 없으면 빌드는 되지만 hero가 깨진
   배경으로 렌더된다. Open Questions의 이미지 결정이 다른 작업의 선행 조건임을 체크리스트
   최상단에 다시 강조하면 좋다.

### 결론

계획의 기술적 가정은 모두 실제 환경에서 확인됐고 구현 가능하다. 착수 전에 (a) hero 이미지
확정, (b) `'true'` 문자열 유지 주의, (c) `#post-list` 래퍼 필요성 재검토 — 이 세 가지만
정리하면 된다.
