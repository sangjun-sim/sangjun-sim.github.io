# Opus Review: A short note on the Bloch theorem

- Date: 2026-07-05 01:02:54 KST
- Source: `_posts/2026-06-22-cond-matter-bloch.md`
- Model/app used: Claude desktop app, Opus 4.8 Max
- Run type: manual test of daily 09:00 Claude app review workflow

---

I'll review this carefully. Before writing, let me verify a few Jekyll/Chirpy and MathJax rendering claims so my formatting notes are accurate and citable (the physics itself is standard textbook material, so I won't search for that).

The search clarified something important: Chirpy *does* officially document `$$\begin{equation}…\end{equation}$$` for numbered equations, and uses `$$…$$` (not single `$`) for inline math. That changes one of my formatting notes. Let me verify the `\braket` macro situation in MathJax, since it affects nearly every equation in the post.

# Review: "A short note on the Bloch theorem" (`2026-06-22-cond-matter-bloch.md`)

**Overall verdict.** The scaffolding is sound — you correctly identify the translation group, its commutation with $H$, its abelian structure, and the multiplicative eigenvalue relation. But there is one outright sign error, one silently-skipped assumption that carries the *entire physical content* of the theorem, a degeneracy subtlety that is stated too strongly, and the proof stops before it actually proves anything (it never reaches $\lambda_\alpha=e^{ik\cdot R}$ or the Bloch form). There are also several Chirpy/MathJax rendering issues that will likely prevent the post from displaying correctly as written. Details below, keyed to your equation numbers.

---

## Critical — physics correctness

### C1. Sign error in Eq. (3) (inconsistent with your own Eqs. (1)–(2))

You wrote

$$\langle \mathbf r-\mathbf R_\alpha\,|\,\psi_{n\mathbf k}\rangle = e^{+i\mathbf k\cdot\mathbf R_\alpha}\,\langle\mathbf r|\psi_{n\mathbf k}\rangle.$$

Given your Eq. (1) $\psi_{n\mathbf k}(\mathbf r)=e^{+i\mathbf k\cdot\mathbf r}u_{n\mathbf k}(\mathbf r)$ and Eq. (2) $u_{n\mathbf k}(\mathbf r-\mathbf R_\alpha)=u_{n\mathbf k}(\mathbf r)$, the phase is forced to be **negative**:

$$\psi_{n\mathbf k}(\mathbf r-\mathbf R_\alpha)=e^{i\mathbf k\cdot(\mathbf r-\mathbf R_\alpha)}u_{n\mathbf k}(\mathbf r-\mathbf R_\alpha)=e^{-i\mathbf k\cdot\mathbf R_\alpha}\underbrace{e^{i\mathbf k\cdot\mathbf r}u_{n\mathbf k}(\mathbf r)}_{=\,\psi_{n\mathbf k}(\mathbf r)}=e^{-i\mathbf k\cdot\mathbf R_\alpha}\psi_{n\mathbf k}(\mathbf r).$$

So Eq. (3) must read $e^{-i\mathbf k\cdot\mathbf R_\alpha}$. This is not a matter of taste: once Eq. (1) fixes the sign in the plane-wave prefactor, and once your translation operator is defined by $T_\alpha f(\mathbf r)=f(\mathbf r-\mathbf R_\alpha)$ (Eq. (4)), there is no remaining freedom. The eigenvalue in Eq. (7) is correspondingly $\lambda_\alpha=e^{-i\mathbf k\cdot\mathbf R_\alpha}$, not $e^{+i\mathbf k\cdot\mathbf R_\alpha}$.

The "$+$" sign belongs to the *other* common convention, where the theorem is stated for a **positive** shift, $\psi(\mathbf r+\mathbf R_\alpha)=e^{+i\mathbf k\cdot\mathbf R_\alpha}\psi(\mathbf r)$. Pick one convention and enforce it in (3), (4), and (7). My recommendation: since your $T_\alpha$ is defined with $\mathbf r-\mathbf R_\alpha$, keep everything on the $-$ side and just flip Eq. (3).

### C2. The proof of $[T_\alpha,H]=0$ never uses the periodicity of $V$ — which is the whole point

Eq. (5) shows only that $T_\alpha$ commutes with $\partial^n/\partial x^n$, i.e. with the **kinetic** operator. From that you jump to "This implies that the Hamiltonian commutes with the translation operator." It does not — not without the potential. Explicitly, for $H=-\tfrac{\hbar^2}{2m}\nabla^2+V(\mathbf r)$,

$$
(T_\alpha H f)(\mathbf r)=-\tfrac{\hbar^2}{2m}\nabla^2 f\big|_{\mathbf r-\mathbf R_\alpha}+V(\mathbf r-\mathbf R_\alpha)f(\mathbf r-\mathbf R_\alpha),
$$
$$
(H T_\alpha f)(\mathbf r)=-\tfrac{\hbar^2}{2m}\nabla^2 f\big|_{\mathbf r-\mathbf R_\alpha}+V(\mathbf r)\,f(\mathbf r-\mathbf R_\alpha).
$$

These agree **iff** $V(\mathbf r-\mathbf R_\alpha)=V(\mathbf r)$. The lattice periodicity of $V$ is exactly the assumption that makes $H$ translation-invariant, and it is the only place the crystal physically enters. You mention "translational invariance of the potential" in the opening sentence but then never invoke it in the derivation. State $V(\mathbf r-\mathbf R_\alpha)=V(\mathbf r)$ as an explicit hypothesis and use it here. (Also: this is a *discrete* symmetry — see H3.)

### C3. "The eigenstates are Bloch states" is too strong when there is degeneracy

Two places assert this: the opening ("the eigenstates … are called Bloch states") and Eq. (7), where $\langle\mathbf r|\psi_n\rangle$ is written as if it is automatically a common eigenstate of every $T_\alpha$. The correct statement is that the eigenstates **can be chosen** to be simultaneous eigenstates of $H$ and $\{T_\alpha\}$. The logic that licenses this needs to be spelled out:

1. $[H,T_\alpha]=0$ (C2) **and** $[T_\alpha,T_\beta]=0$ (your Eq. (6)) mean $\{H,T_1,T_2,T_3\}$ is a mutually commuting set, so a common eigenbasis *exists*.
2. If a $H$-eigenvalue is non-degenerate, its eigenstate is automatically a $T_\alpha$-eigenstate. **But** inside a degenerate eigenspace, a generic eigenvector of $H$ is *not* a $T_\alpha$-eigenvector; one must diagonalize the (commuting, unitary) $T_\alpha$ within that subspace to obtain the Bloch basis.

Right now the post reads as if Bloch form is a property of *every* solution, which is false. This is a one-sentence fix but an important one — it's the standard "commuting observables + choice within degenerate subspaces" argument.

### C4. The proof is incomplete — it stops before proving Bloch's theorem

The post ends at Eq. (8), $\lambda_\alpha\lambda_\beta=\lambda_{\alpha+\beta}$. That is the *setup*, not the conclusion. Two decisive steps are missing:

- **Unitarity $\Rightarrow |\lambda_\alpha|=1$.** $T_\alpha$ preserves the $L^2$ norm (translation is a unitary operator), so its eigenvalues lie on the unit circle. You never state this, yet it is what forces $\mathbf k$ to be **real**. Without it, $\lambda_\alpha\lambda_\beta=\lambda_{\alpha+\beta}$ admits real-exponential solutions $\lambda_\alpha=e^{\kappa\cdot\mathbf R_\alpha}$ (evanescent states — relevant only for surfaces / complex band structure, not bulk Bloch states).
- **Closing the functional equation.** Combining $\lambda_\alpha=z_1^{\alpha_1}z_2^{\alpha_2}z_3^{\alpha_3}$ (the general solution of Eq. (8) on $\mathbb Z^3$) with $|z_i|=1$ gives $z_i=e^{i\phi_i}$, and *defining* $\mathbf k$ by $\mathbf k\cdot\mathbf a_i=\phi_i$ yields $\lambda_\alpha=e^{-i\mathbf k\cdot\mathbf R_\alpha}$. Only *then* do you recover the Bloch form $\psi_{n\mathbf k}=e^{i\mathbf k\cdot\mathbf r}u_{n\mathbf k}$ with periodic $u$ — i.e. you close the loop back to Eqs. (1)–(2).

As it stands the note introduces the machinery and stops one step short of the theorem it is named after. The draft banner suggests you know it's unfinished, but the review should flag that the *core result is not yet derived*.

---

## High priority — missing structure

### H1. No reciprocal lattice, no Brillouin zone, no boundary conditions
The post treats $\mathbf k$ as a bare "quantum number" and never introduces:
- the **reciprocal lattice** $\{\mathbf G\}$ with $e^{i\mathbf G\cdot\mathbf R}=1$, hence $\mathbf k$ and $\mathbf k+\mathbf G$ label the *same* state — i.e. $\mathbf k$ is defined **mod $\mathbf G$** and can be confined to the first BZ. (This is the "$\phi_i$ mod $2\pi$" ambiguity in the C4 closure — worth connecting explicitly.)
- **Born–von Kármán periodic boundary conditions**, which quantize $\mathbf k$ into a dense discrete real mesh and let you *count* states (one $\mathbf k$ per allowed value, $N$ cells $\to N$ $\mathbf k$-points per band). This is also what pins down "real $\mathbf k$" operationally.

Without at least a sentence on each, "$\mathbf k$" and "bands" are asserted rather than derived.

### H2. Unitarity of $T_\alpha$ is never established
See C4. Add one line: $\langle T_\alpha f|T_\alpha g\rangle=\langle f|g\rangle$ (a rigid shift preserves inner products), so $T_\alpha^\dagger=T_\alpha^{-1}$ and $|\lambda_\alpha|=1$.

### H3. Continuous vs. discrete translational symmetry
The opening ("Due to the translational invariance of the potential…") does not distinguish the two. *Continuous* translational invariance would give momentum eigenstates (free plane waves). It is precisely the reduction to **discrete lattice translations** that produces crystal momentum and bands. Say "discrete translational symmetry of the lattice" up front.

---

## Notation and clarity

- **M1 — Eq. (4) decomposition assumes a cubic/orthorhombic, axis-aligned lattice.** $T_\alpha=[T_x^{\alpha_1}][T_y^{\alpha_2}][T_z^{\alpha_3}]$ only makes sense if $\mathbf a_1\parallel\hat x$ etc. For a general (oblique, hexagonal, fcc, …) lattice this is wrong. Write $T_\alpha=T_1^{\alpha_1}T_2^{\alpha_2}T_3^{\alpha_3}$, where $T_i$ is translation by the *primitive vector* $\mathbf a_i$ and $\mathbf R_\alpha=\sum_i\alpha_i\mathbf a_i$. Replace the $x,y,z$ subscripts with $1,2,3$.
- **M2 — symbol clash in Eq. (5).** The derivative order $n$ collides with the band index $n$. Use $m$ (or $p$) for the derivative order.
- **M3 — "the unit cells that confine the electrons" is imprecise.** Electrons are not confined to unit cells (that's the opposite of Bloch delocalization). The band index arises because, at each fixed $\mathbf k$, the periodic problem for $u_{n\mathbf k}$ (Schrödinger equation on a single cell with BZ-twisted boundary conditions) has a *discrete* spectrum $\{\varepsilon_n(\mathbf k)\}$. Recast this sentence accordingly.
- **M4 — operator acting on a number.** In Eq. (7) you write $T_\alpha\langle\mathbf r|\psi_n\rangle$, i.e. an operator applied to the *value* $\psi_n(\mathbf r)$. If $T_\alpha$ is a Hilbert-space operator, the clean statement is $\langle\mathbf r|T_\alpha|\psi\rangle=\langle\mathbf r-\mathbf R_\alpha|\psi\rangle$. Minor, but if you're aiming for rigor, define $T_\alpha$'s action on kets once and use it consistently.
- **M5 — introduce $\mathbf k$ as crystal momentum**, not just "a quantum number," and note it lives in the BZ (ties to H1).
- **Word choice.** "a function having the translational invariance of the lattice" → "a lattice-periodic function." A non-constant function is *periodic under* lattice translations, not *invariant*.
- **Context.** Given the `dft` tag, one sentence that this is the single-particle (independent-electron / Kohn–Sham effective-potential) picture would orient the reader.

---

## Markdown / Jekyll (Chirpy) / MathJax formatting

I verified these against the current Chirpy and MathJax docs.

- **F1 — the prompt attribute is in the wrong place.** Chirpy prompts are created by putting the class **after** the blockquote, e.g. the official docs show an example of the tip-type prompt written as a blockquote followed by `{: .prompt-tip }`. You put `{: .prompt-tip}` *before* the `>` line, so it will not attach to the blockquote (a Kramdown IAL binds to the *preceding* block). Move it below the quote. For a "read with caution" message, `.prompt-warning` is more apt than `.prompt-tip`.
- **F2 — duplicate title.** Chirpy renders the front-matter `title:` as the page H1. Your body then repeats it as `## A short note on the Bloch theorem`. Delete the body heading (or start the body directly with prose).
- **F3 — inline math delimiter.** You use single `$…$` for inline math. Chirpy's documented convention is that block math uses `$$ … $$` with mandatory blank lines before and after, and inline math also uses `$$ … $$` without blank lines; single `$` is generally *not* enabled as a delimiter by default. Preview the page — if `$\mathbf k$`, `$n$`, etc. show up as literal text, switch inline math to `$$…$$` (or enable single-`$` in `assets/js/data/mathjax.js`).
- **F4 — `\_` escapes corrupt the math.** In `$T\_{\alpha}=[T^{\alpha_{1}}\_{x}]\dots$` the backslash-underscores are a workaround for Kramdown treating `_` as emphasis — a symptom of the inline-delimiter issue in F3. Inside real math, `\_` does **not** produce a subscript; it breaks it. Note the same expression mixes `\_` and plain `_`, which confirms the patching. Once inline math renders as math, all of these must be plain `_`.
- **F5 — block math needs blank lines.** Your `$$ … $$` blocks run straight out of the preceding text (`…the lattice:` immediately followed by `$$`, and `$$` immediately followed by `where`). Chirpy requires blank lines around block `$$` (F3 citation). Insert them, or the blocks may fail to parse.
- **F6 — `\braket` depends on your MathJax build.** The MathJax `braket` extension defines `\bra`, `\ket`, `\braket`, etc., and it loads automatically when the autoload extension is active — and `braket` is in MathJax's default autoload list, with autoload included in all standard components that carry the TeX input jax except `input/tex-base`. So on a stock Chirpy MathJax component `\braket{\mathbf r|\psi}` should render fine. **But verify by previewing**: if you're on a minimal `tex-base` config without autoload, `\braket` will be undefined and every equation breaks — in that case add the `braket` extension or fall back to explicit `\langle \mathbf r | \psi \rangle`. (I can't confirm your exact config, so I'm flagging, not asserting a break.)
- **F7 — equation numbering (not an error, just be aware).** Wrapping `\begin{equation}…\end{equation}` in `$$…$$` is **the documented Chirpy way to get numbered equations** (F3 citation), so this is fine. Consequence: your equations will display numbers (1)–(8) on the right, yet none are referenced via `\eqref`/`\label`. If you don't want visible numbers, use plain `$$…$$`; if you do, add `\label{…}` and cross-reference them in the text.
- **F8 — housekeeping.** Trailing whitespace after the `## …` line; tidy up.

---

## Prioritized fix list

1. **Fix the sign in Eq. (3):** $e^{+i\mathbf k\cdot\mathbf R_\alpha}\to e^{-i\mathbf k\cdot\mathbf R_\alpha}$, and make $\lambda_\alpha=e^{-i\mathbf k\cdot\mathbf R_\alpha}$ in Eq. (7). Decide and state your translation convention once. *(C1)*
2. **State and use $V(\mathbf r-\mathbf R_\alpha)=V(\mathbf r)$** in the $[T_\alpha,H]=0$ argument; Eq. (5) alone only handles kinetic energy. *(C2)*
3. **Finish the proof:** add unitarity $\Rightarrow|\lambda_\alpha|=1$, close $\lambda_\alpha\lambda_\beta=\lambda_{\alpha+\beta}$ to $\lambda_\alpha=e^{-i\mathbf k\cdot\mathbf R_\alpha}$, and return to the Bloch form (1)–(2). *(C4, H2)*
4. **Soften the degeneracy claim:** eigenstates *can be chosen* as common eigenstates of $H$ and $\{T_\alpha\}$; justify via commuting set + diagonalization within degenerate subspaces. *(C3)*
5. **Add reciprocal lattice + BZ + Born–von Kármán** (≈ one short paragraph): $\mathbf k$ real, defined mod $\mathbf G$, confined to the first BZ; state counting. *(H1)*
6. **Say "discrete" translational symmetry** up front and contrast with the continuous case. *(H3)*
7. **Generalize Eq. (4)** to $T_1^{\alpha_1}T_2^{\alpha_2}T_3^{\alpha_3}$ along primitive vectors; drop the axis-aligned assumption. *(M1)*
8. **Rendering pass:** move `{: .prompt-tip}` after the quote; remove the duplicate H2; switch inline math to `$$…$$` (or enable single-`$`); delete `\_` escapes; add blank lines around block math; confirm `\braket` renders. *(F1–F8)*
9. **Local wording:** rename derivative order $n\to m$; rewrite the "unit cells confine the electrons" sentence; "lattice-periodic" not "translationally invariant." *(M2, M3, wording)*

Items 1–4 are correctness/completeness and should block publishing; 5–6 are needed for the note to actually stand as a derivation; 7–9 are polish.

---

## Suggested revised outline

1. **Setup.** Single-particle Schrödinger equation with a lattice-periodic effective potential $V(\mathbf r+\mathbf R)=V(\mathbf r)$ (note the DFT/Kohn–Sham framing). Define the direct lattice $\{\mathbf R=\sum_i\alpha_i\mathbf a_i\}$. Emphasize *discrete* symmetry.
2. **Translation operators.** Define $T_\alpha$, fix the convention, show $T_\alpha=T_1^{\alpha_1}T_2^{\alpha_2}T_3^{\alpha_3}$, and establish unitarity.
3. **Symmetry.** $[T_\alpha,H]=0$ using *both* kinetic invariance (Eq. (5)) *and* periodicity of $V$; then $[T_\alpha,T_\beta]=0$ (abelian group, Eq. (6)).
4. **Common eigenbasis.** Commuting set $\{H,T_1,T_2,T_3\}$ ⇒ simultaneous eigenstates exist; handle degeneracy by choice within eigenspaces.
5. **Eigenvalues ⇒ crystal momentum.** $|\lambda_\alpha|=1$ + $\lambda_\alpha\lambda_\beta=\lambda_{\alpha+\beta}$ ⇒ $\lambda_\alpha=e^{-i\mathbf k\cdot\mathbf R_\alpha}$, *defining* $\mathbf k$.
6. **Reciprocal lattice & BZ.** $\mathbf k$ mod $\mathbf G$; Born–von Kármán ⇒ real, discrete $\mathbf k$; state counting; first BZ.
7. **Bloch form & bands.** Recover $\psi_{n\mathbf k}=e^{i\mathbf k\cdot\mathbf r}u_{n\mathbf k}$ with periodic $u$; band index $n$ from the discrete spectrum of the cell problem at fixed $\mathbf k$.
8. *(Optional)* **Remarks.** Crystal momentum vs. true momentum; velocity/current; where this feeds Wannierization.

---

## Questions to sharpen the argument (for you to decide)

- Which translation convention do you actually want — $f(\mathbf r-\mathbf R)$ or $f(\mathbf r+\mathbf R)$? Have you checked (1)/(2)/(3) are mutually consistent under it? (If you keep the current $T_\alpha$, Eq. (3) *must* carry a minus sign — do you agree with the C1 derivation?)
- Where in your current text is the periodicity of $V$ used? Can $[T_\alpha,H]=0$ hold for a non-periodic $V$? If not, is Eq. (5) sufficient as written?
- If band $n$ is degenerate at some $\mathbf k_0$, is *every* eigenstate at $\mathbf k_0$ a Bloch state? What extra operation do you need?
- Your derivation stops at $\lambda_\alpha\lambda_\beta=\lambda_{\alpha+\beta}$. What property of $\lambda_\alpha$ (beyond multiplicativity) forces the *exponential* form — and what does dropping that property physically correspond to?
- Do you intend to include Born–von Kármán conditions? If not, what in your argument guarantees $\mathbf k\in\mathbb R^3$ rather than complex?

---

## Sources

Formatting/rendering claims (verified):
- Chirpy — *Writing a New Post* (block/inline math syntax, blank-line requirement, numbered-equation syntax): https://chirpy.cotes.page/posts/write-a-new-post/
- Chirpy — *Text and Typography* / theme repo (prompt block `{: .prompt-… }` placed **after** the blockquote): https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/_posts/2019-08-08-text-and-typography.md
- MathJax — *braket extension* (macros; autoloaded when autoload is active): https://docs.mathjax.org/en/latest/input/tex/extensions/braket.html
- MathJax — *autoload extension* (`braket` in the default autoload list; autoload present in standard components except `input/tex-base`): https://docs.mathjax.org/en/stable/input/tex/extensions/autoload.html

Physics is standard textbook material (the derivations above are worked out directly, not taken from a source); for the missing pieces (unitarity closure, reciprocal lattice, Born–von Kármán, degeneracy handling) the canonical references are Ashcroft & Mermin, *Solid State Physics*, Ch. 8; Kittel, *Introduction to Solid State Physics*; Grosso & Parravicini, *Solid State Physics*, Ch. 1; and, for the translation-operator / group-theoretic treatment, Dresselhaus, Dresselhaus & Jorio, *Group Theory: Application to the Physics of Condensed Matter*. (I'm citing these as the standard places these arguments appear; I haven't pulled specific page numbers, so treat them as pointers rather than pinpoint citations.)
