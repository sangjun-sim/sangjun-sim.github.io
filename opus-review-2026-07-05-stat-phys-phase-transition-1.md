# Opus Review: Berezinskii-Kosterlitz-Thouless transition (1)

- Date: 2026-07-05 09:21:26 KST
- Source: `_posts/2026-04-20-stat-phys-phase-transition-1.md`
- Model/app used: Claude desktop app, Opus 4.8 Max

---

I'll review this carefully. First, let me verify one reference I can't confirm from memory, since your preferences (and good practice) call for checking sources rather than guessing.

# Review — `_posts/2026-04-20-stat-phys-phase-transition-1.md`
**Title:** *Berezinskii–Kosterlitz–Thouless transition (1)*
**Reviewer role:** Claude Opus · **Scope:** correctness, statistical-mechanics substance, derivation gaps, notation, Jekyll/kramdown/MathJax rendering, citations, actionable edits.

---

## 1. Overall assessment

The post walks through the classic Kosterlitz–Thouless energy–entropy argument for the 2D `XY` model and arrives at a closed-form $T_{\mathrm{BKT}}$. The narrative arc (vortex → energy → entropy → free energy → sign change) is the right pedagogical skeleton, and the entropy step is correct.

However, there is **one load-bearing physics error that propagates to the final result**: a lost factor of $1/2$ in the continuum energy makes the vortex energy, the free energy, and $T_{\mathrm{BKT}}$ all a **factor of 2 too large**. The standard textbook estimate is $T_{\mathrm{BKT}} = \pi J / 2k_{\mathrm B}$, not $\pi J / k_{\mathrm B}$. There is also a **conceptually inverted concluding sentence** (free vortices proliferate *above*, not below, $T_{\mathrm{BKT}}$), a **terminology slip** ("Heisenberg model" for what is the `XY` model), a **symbol collision** ($\phi$ used for both the spin field and the azimuthal integration angle), and a **rendering risk** (`\braket` is not in the default MathJax set used by Chirpy).

Priority order for fixing: **§2 (correctness) → §6 (rendering, or the equations won't display) → §3–§5 (rigor/notation) → §7–§8 (citations/structure).**

A compact before/after summary of the numerical result:

| Quantity | As written in the post | Correct (this convention) |
|---|---|---|
| Continuum energy | $J\sum_{\mathbf r}[\nabla\phi]^2$ | $\dfrac{J}{2}\displaystyle\int d^2r\,\lvert\nabla\phi\rvert^2$ |
| Single-vortex energy | $2\pi J\ln(R/a)$ | $\pi J\ln(R/a)$ |
| Free energy | $2(\pi J - k_{\mathrm B}T)\ln(R/a)$ | $(\pi J - 2k_{\mathrm B}T)\ln(R/a)$ |
| $T_{\mathrm{BKT}}$ | $\pi J/k_{\mathrm B}$ | $\pi J/2k_{\mathrm B}$ |

---

## 2. Critical physics issues (must fix)

### 2.1 The factor of $1/2$ is dropped in the continuum limit — this is the headline error

Your small-angle expansion is correct and *keeps* the $1/2$:

$$
H_{\mathrm{XY}} \simeq E + \frac{J}{2}\sum_{\langle ij\rangle}(\phi_i-\phi_j)^2 .
$$

But the very next line (post's Eq. 2) writes

$$
\frac{J}{2}\sum_{\langle ij\rangle}(\phi_i-\phi_j)^2 \;\longrightarrow\; J\sum_{\mathbf r}[\nabla\phi(\mathbf r)]^2 ,
$$

which silently does **two** things wrong:

1. **Drops the $1/2$** ($\tfrac{J}{2}\to J$).
2. **Keeps a lattice sum $\sum_{\mathbf r}$ where the object is now a density**, so the expression is dimensionally inconsistent (a bare $\sum_{\mathbf r}[\nabla\phi]^2$ has units of length$^{-2}$, not energy).

The correct coarse-graining on a square lattice: expand a bond difference as $\phi_i-\phi_j \approx a\,\hat e_{ij}\!\cdot\!\nabla\phi$, group the two forward bonds ($+\hat x, +\hat y$) per site, and replace $\sum_{\mathbf r}\to \tfrac{1}{a^2}\int d^2r$:

$$
\frac{J}{2}\sum_{\langle ij\rangle}(\phi_i-\phi_j)^2
\;\longrightarrow\;
\frac{J}{2}\sum_{\mathbf r} a^2\lvert\nabla\phi\rvert^2
= \frac{J}{2}\int d^2r\,\lvert\nabla\phi(\mathbf r)\rvert^2 .
$$

So the prefactor is $J/2$ **and** it is an integral $\int d^2r$, **not** $\sum_{\mathbf r}$.

**Why this matters downstream.** With the correct $H = \tfrac{J}{2}\int d^2r\,\lvert\nabla\phi\rvert^2$ and a single vortex ($\phi=\theta$, $\lvert\nabla\phi\rvert=1/r$):

$$
E_v = \frac{J}{2}\int_a^R r\,dr\int_0^{2\pi} d\theta\,\frac{1}{r^2}
= \frac{J}{2}\cdot 2\pi\int_a^R \frac{dr}{r}
= \pi J\ln\frac{R}{a},
$$

not $2\pi J\ln(R/a)$. Your integral is arithmetically self-consistent *given* the wrong prefactor $J$; the error is entirely upstream in Eq. (2).

Carrying it through:

$$
F = E_v - TS = \pi J\ln\frac{R}{a} - 2k_{\mathrm B}T\ln\frac{R}{a}
= (\pi J - 2k_{\mathrm B}T)\ln\frac{R}{a},
$$

$$
\boxed{\,T_{\mathrm{BKT}} = \frac{\pi J}{2k_{\mathrm B}}\,}.
$$

**Sanity check against the literature.** The naive energy–entropy estimate is universally quoted as $k_{\mathrm B}T_{\mathrm{BKT}} = \pi J/2$ (equivalently, the Nelson–Kosterlitz universal-jump condition $K(T_{\mathrm{BKT}})/k_{\mathrm B}T_{\mathrm{BKT}} = 2/\pi$ with bare stiffness $K\approx J$). Numerically $\pi J/2k_{\mathrm B}\approx 1.57\,J/k_{\mathrm B}$, which overestimates the Monte-Carlo value $\approx 0.893\,J/k_{\mathrm B}$ because it ignores renormalization — a known and expected feature of this back-of-envelope argument. Your $\pi J/k_{\mathrm B}\approx 3.14\,J/k_{\mathrm B}$ is off by exactly the factor of 2 introduced above.

**Suggestion:** it would strengthen the post to state explicitly the convention $H=\tfrac{K}{2}\int d^2r\,(\nabla\phi)^2$ with spin-wave stiffness $K$, note $K=J$ at the bare level, and give $E_v(n)=\pi J n^2\ln(R/a)$ for winding number $n$ — which also *motivates* why only $n=\pm 1$ vortices matter (energy $\propto n^2$).

### 2.2 The concluding sentence has the physics backwards

> "the transition for the creation of a topological defect **below** the Berezinskii-Kosterlitz-Thouless temperature is named the BKT transition."

This is inverted. From $F=(\pi J - 2k_{\mathrm B}T)\ln(R/a)$:

- **$T < T_{\mathrm{BKT}}$:** $F>0$ and $\to +\infty$ as $R\to\infty$ ⇒ an *isolated* free vortex is thermodynamically forbidden ⇒ vortices survive only as **bound neutral vortex–antivortex pairs**; the phase has quasi-long-range order (power-law correlations).
- **$T > T_{\mathrm{BKT}}$:** $F<0$ ⇒ free vortices **proliferate**; pairs **unbind**; correlations decay exponentially (disordered).

So the BKT transition is the **vortex–antivortex unbinding transition**, and free-vortex creation is favorable **above** $T_{\mathrm{BKT}}$. Suggested replacement:

> Below $T_{\mathrm{BKT}}$, isolated vortices are suppressed and vortices bind into neutral pairs, giving a quasi-long-range-ordered phase; above $T_{\mathrm{BKT}}$, free vortices proliferate and pairs unbind. This unbinding is the Berezinskii–Kosterlitz–Thouless transition.

---

## 3. Physics substance and rigor (should address)

- **"Heisenberg model" → "`XY` model."** The line *"the Heisenberg model is described as: $H_{\mathrm{XY}}=\dots$"* mislabels the model. The Heisenberg model has $O(3)$ (3-component) spins; the `XY` model has $O(2)$ (in-plane) spins, which is exactly the planar restriction you set up. Recommend: "the planar (`XY`) limit of the Heisenberg model is …" or simply "the `XY` model is …". The distinction is not cosmetic — BKT physics is specific to the $O(2)$/`XY` universality; the 2D Heisenberg model has no finite-$T$ transition at all.

- **State the winding number generally.** *"the following quantity is invariant as $2\pi$"* should be *"is quantized: $\oint_C\nabla\phi\cdot d\mathbf l = 2\pi n,\ n\in\mathbb Z$"*, with your calculation specializing to $n=1$. This is also the natural place to name the topological origin: vortices are classified by $\pi_1(S^1)=\mathbb Z$ (the target space of a planar spin is the circle $S^1$), which is *the* reason the defect is topological. Right now the sentence *"The reason why it has the topological property is that the circulation is quantized"* asserts the fact without the mechanism.

- **Define $E$ concretely.** *"$E$ is the sum of the exchange interaction between the site $i$ and $j$"* is vague. It is the constant ground-state energy $E = -J\!\sum_{\langle ij\rangle}\!1 = -J N_{\mathrm b}$ (with $N_{\mathrm b}$ the number of nearest-neighbor bonds). Worth stating so the reader sees it is an additive constant with no bearing on the transition.

- **Core energy / lower cutoff.** The lower limit $a$ is a stand-in for the vortex core, where the gradient expansion breaks down. Physically $E_v = E_{\mathrm{core}} + \pi J\ln(R/a)$. A one-line acknowledgment that $E_{\mathrm{core}}$ is a non-universal constant absorbed into the fugacity would pre-empt an obvious reader question.

- **Missing framing that this is a heuristic.** This single-vortex free-energy argument is the *Kosterlitz–Thouless order-of-magnitude estimate*, not the full renormalization-group treatment (the RG flow of stiffness $K$ and vortex fugacity $y$). Since the title is "(1)", a sentence promising the RG/universal-jump treatment in a later part would set expectations correctly.

- **Consider one line of context** (optional but valuable): the Mermin–Wagner theorem forbids true long-range order in 2D with a continuous symmetry at $T>0$, so the ordered-looking low-$T$ phase is actually *quasi*-long-range order — which is exactly what makes BKT interesting. You could also note the 2016 Physics Nobel (Thouless, Haldane, Kosterlitz, "for theoretical discoveries of topological phase transitions and topological phases of matter") as motivation.

---

## 4. Corrected derivation block (drop-in replacement for the vortex-energy → $T_{\mathrm{BKT}}$ portion)

You can paste the following in place of your current Eqs. (2)→(final), with prose adjusted to taste:

```markdown
In the continuum limit the spin-wave energy becomes

$$
H_{\mathrm{sw}} = \frac{J}{2}\int d^2r\,\lvert\nabla\phi(\mathbf r)\rvert^2 .
$$

A single vortex of winding number $n$ has $\phi(\mathbf r)=n\theta$, hence
$\nabla\phi = (n/r)\,\hat{\boldsymbol\theta}$ and $\lvert\nabla\phi\rvert^2 = n^2/r^2$:

$$
\begin{aligned}
E_v
&= \frac{J}{2}\int_a^R r\,dr \int_0^{2\pi} d\theta \,\frac{n^2}{r^2} \\
&= \pi J n^2 \ln\frac{R}{a} .
\end{aligned}
$$

Because $E_v \propto n^2$, only $n=\pm 1$ vortices are relevant. The number of
distinct core positions on the lattice is $\Omega \sim (R/a)^2$, so the entropy is

$$
S = k_{\mathrm B}\ln\Omega = 2k_{\mathrm B}\ln\frac{R}{a}.
$$

The free energy of a single (unit) vortex is therefore

$$
F = E_v - TS = \left(\pi J - 2k_{\mathrm B}T\right)\ln\frac{R}{a},
$$

which changes sign at

$$
T_{\mathrm{BKT}} = \frac{\pi J}{2k_{\mathrm B}} .
$$
```

Note that this block also (i) uses $\theta$ for the polar angle (fixing §5.1), (ii) uses `aligned` (fixing §6.2), and (iii) uses `\langle`-free plain math where possible.

---

## 5. Notation

### 5.1 Symbol collision: $\phi$ is used for two different things
In the vortex-energy integral you write $\int_0^{2\pi} d\phi\,(\nabla\phi)^2$ — but $\phi$ is already the **spin field**. The $\int_0^{2\pi}d\phi$ is really the **azimuthal (polar) angle** of the plane. Using the same letter for the integration measure and the field being differentiated is genuinely confusing (a reader could misread $\int d\phi$ as an integral over spin orientation). Use $\theta$ for the polar angle: $\int_a^R r\,dr\int_0^{2\pi} d\theta$.

### 5.2 $|\nabla\phi|=1/r$ justification is loose
*"the angle $\phi$ is given by the length of the arc $l$ and the radius $r$; $\phi=l/r$"* is a heuristic for the tangential derivative. Cleaner: for a vortex the phase equals the polar angle, $\phi(\mathbf r)=\theta$, and $\nabla\theta = \hat{\boldsymbol\theta}/r$, so $\lvert\nabla\phi\rvert = 1/r$. This also connects directly to the quantization $\oint\nabla\phi\cdot d\mathbf l = \int_0^{2\pi}\!\frac{1}{r}(r\,d\theta) = 2\pi$.

### 5.3 Minor
- *"The possible cases to create a vortex in the lattice is $(R/a)^2$"* → *"The number of possible vortex-core positions on the lattice is $\sim (R/a)^2$."* (subject–verb agreement + clarity).
- $\braket{ij}$: aside from the rendering issue (§6.1), the neighbor sum should be indicated once as "nearest-neighbor pairs $\langle ij\rangle$."

---

## 6. Jekyll / kramdown / MathJax rendering risks

These are the items most likely to make equations *not display* on a Chirpy-style site with `math: true`.

### 6.1 `\braket` is not defined in default MathJax — **high risk**
`\braket{ij}` relies on the LaTeX `braket` package / a MathJax extension that is **not loaded by default** in the standard Chirpy MathJax configuration. It will typically render as a red error or drop out. Every one of your neighbor sums uses it. Replace with `\langle ij \rangle`:

```latex
% before
-J\sum\limits_{\braket{ij}}\mathbf{S}_{i}\cdot\mathbf{S}_{j}
% after
-J\sum_{\langle ij \rangle}\mathbf{S}_{i}\cdot\mathbf{S}_{j}
```

(If you genuinely want `\braket` site-wide, you must load the MathJax `braket` extension in your MathJax config — but `\langle\rangle` is the zero-friction fix.)

### 6.2 `$$\begin{equation}…\end{equation}$$` and `$$\begin{align}…\end{align}$$` nesting — **medium risk**
Under kramdown you need `$$…$$` to mark a math block, but `equation`/`align` are themselves top-level display environments. Wrapping them in `$$` is redundant nesting; `equation` in particular can trigger "erroneous nesting" or double numbering, and MathJax numbering only appears at all if `tags: 'ams'` is configured (which Chirpy does not do by default — so your `\begin{equation}` numbers likely never render, and you never reference them by number anyway).

Robust pattern for this stack:
- Single display line → plain `$$ … $$` (drop `equation`).
- Multi-line → `$$\begin{aligned} … \end{aligned}$$` (the *inner* alignment environment, valid inside math mode).

```latex
% before
$$
\begin{align}
A &= B \nonumber \\
  &= C
\end{align}
$$
% after
$$
\begin{aligned}
A &= B \\
  &= C
\end{aligned}
$$
```

### 6.3 `\nonumber` — **medium risk**, tied to 6.2
`\nonumber` only makes sense inside a numbered environment (`align`, `equation`). Inside `aligned` it is unnecessary and can error in some MathJax builds. When you switch to `aligned`, **delete every `\nonumber`**.

### 6.4 Low-priority polish
- `\rm` (e.g. `H_{\rm XY}`, `k_{\rm B}`, `T_{\rm BKT}`): renders, but `\mathrm{}` is the current LaTeX/MathJax-preferred form — `H_{\mathrm{XY}}`, `k_{\mathrm B}`, `T_{\mathrm{BKT}}`.
- `\sum\limits`: harmless but redundant in display math (limits already sit under the sum); plain `\sum` suffices.
- Curly vs straight quotes around *'Berezinskii-Kosterlitz-Thouless temperature'* are mixed; pick one (straight `'…'` is safest in kramdown).

---

## 7. Citations & references

### 7.1 Reference 1 — book verified, citation incomplete
I verified via web search that the book exists. Full details:

- **Miguel A. N. Araújo & Pedro D. Sacramento**, *Topology in Condensed Matter: **An Introduction***, World Scientific, **2021**, 276 pp., ISBN 978-981-123-721-8 (hardcover) / 978-981-123-723-2 (ebook).

Two fixes:
1. Your citation omits the subtitle, publisher, and year. Suggested full form:
   > Araújo, M. A. N. & Sacramento, P. D. *Topology in Condensed Matter: An Introduction*. World Scientific, 2021, p. 151.
2. **I could not verify that the BKT material sits on p. 151** — I don't have the book's contents. It is plausible (the book explicitly covers topological phase transitions), but please confirm the page against your copy per your own "source-verification" standard.

### 7.2 In-text citation "H. J. Jensen's Lecture note" — incomplete
This informal pointer (Henrik Jeldtoft Jensen, Imperial College lecture notes) has no title or URL, so a reader cannot follow it, and **I cannot verify which specific note or which statement it supports**. Please give a full citation (author, exact title, year, and a stable URL if it is a web resource). The claim it backs — that the nearest-neighbor difference sum maps to the discrete Laplacian — is standard and can equally be cited to any statistical-field-theory text.

### 7.3 Dangling opening pointer — **fix or remove**
> "If one wants to read more deeply, go to a site."

This is a placeholder with no link. Either insert the actual URL or delete the sentence.

### 7.4 Suggested primary sources to add
For a post on BKT, citing the originating papers strengthens it (standard references, from established literature — verify exact locators against your own copies):
- J. M. Kosterlitz & D. J. Thouless, *Ordering, metastability and phase transitions in two-dimensional systems*, J. Phys. C: Solid State Phys. **6**, 1181 (1973).
- J. M. Kosterlitz, *The critical properties of the two-dimensional xy model*, J. Phys. C **7**, 1046 (1974).
- V. L. Berezinskii (1971) — the "B" in BKT — for the original 2D continuous-symmetry argument.
- Textbook treatments: Chaikin & Lubensky, *Principles of Condensed Matter Physics*; Kardar, *Statistical Physics of Fields* (Ch. 8) for the full RG/energy–entropy discussion; Altland & Simons, *Condensed Matter Field Theory*.

---

## 8. Structure & pedagogy

- **Front matter looks correct** for a Chirpy-type setup: `math: true` (needed to load MathJax), `toc: true`, and a two-level `categories: [Physics, Statistical Physics]` (Chirpy expects ≤ 2 levels — good). No changes needed here.
- **Logical signposting.** The argument would read more clearly if you explicitly label the three ingredients before the algebra: (i) energy of one vortex, (ii) entropy from its placements, (iii) compete them in $F=E-TS$. Right now the entropy paragraph arrives somewhat abruptly after the energy integral.
- **A figure would carry a lot of weight.** A single schematic of a vortex spin texture (arrows winding once around a core), plus a small $F$-vs-$T$ sign-change sketch, would make this post much more memorable than equations alone. Since you shoot and compose your own visuals, even a hand-drawn vortex would help.
- **Set up the sequel.** Given "(1)", close with a one-liner on what part (2) will cover (RG flow of $K$ and fugacity $y$; the universal stiffness jump $K/k_{\mathrm B}T \to 2/\pi$; correlation-length essential singularity $\xi\sim \exp[b/\sqrt{T-T_{\mathrm{BKT}}}]$).

---

## 9. Prioritized action checklist

**Must fix (correctness):**
1. Restore the $1/2$: continuum energy $=\tfrac{J}{2}\int d^2r\,\lvert\nabla\phi\rvert^2$ (§2.1).
2. Propagate it: $E_v=\pi J\ln(R/a)$, $F=(\pi J-2k_{\mathrm B}T)\ln(R/a)$, $T_{\mathrm{BKT}}=\pi J/2k_{\mathrm B}$ (§2.1, §4).
3. Fix inverted conclusion: free vortices proliferate *above* $T_{\mathrm{BKT}}$; it is an unbinding transition (§2.2).

**Must fix (rendering):**
4. `\braket{ij}` → `\langle ij \rangle` everywhere (§6.1).
5. Convert `$$\begin{equation}…$$` → plain `$$…$$`, and `$$\begin{align}…$$` → `$$\begin{aligned}…$$`; delete all `\nonumber` (§6.2–6.3).

**Should fix (rigor/notation):**
6. "Heisenberg model" → "`XY` model" (§3).
7. $\int_0^{2\pi} d\phi \to \int_0^{2\pi} d\theta$; use $\sum_{\mathbf r}\to\int d^2r$ language (§5.1, §2.1).
8. State $\oint\nabla\phi\cdot d\mathbf l = 2\pi n$ and mention $\pi_1(S^1)=\mathbb Z$; define $E=-JN_{\mathrm b}$ (§3).

**Nice to have:**
9. Complete all citations (book subtitle/publisher/year + verify p. 151; full Jensen citation; fix "go to a site") and add Kosterlitz–Thouless (1973) (§7).
10. Add a vortex figure; flag that this is the heuristic estimate with RG deferred to part (2); optional Mermin–Wagner/Nobel context (§8, §3).

---

## Sources

**Verified this session (web search):**
- *Topology in Condensed Matter: An Introduction*, Miguel A. N. Araújo & Pedro D. Sacramento, World Scientific, 2021 (ISBN 978-981-123-721-8; 276 pp.). Confirmed via publisher/retailer listings (World Scientific via VitalSource; Amazon; Booktopia; Harvard Book Store). **Page 151 for the BKT content was *not* verifiable** and should be checked against the book.

**Cited from established literature (not re-verified online; confirm exact locators against your copies):**
- J. M. Kosterlitz & D. J. Thouless, J. Phys. C **6**, 1181 (1973); J. M. Kosterlitz, J. Phys. C **7**, 1046 (1974); V. L. Berezinskii (1971).
- M. Kardar, *Statistical Physics of Fields*, Cambridge UP (2007), Ch. 8; P. M. Chaikin & T. C. Lubensky, *Principles of Condensed Matter Physics*, Cambridge UP; A. Altland & B. Simons, *Condensed Matter Field Theory*, Cambridge UP.
- Standard result cross-checked: energy–entropy estimate $k_{\mathrm B}T_{\mathrm{BKT}}=\pi J/2$; Nelson–Kosterlitz universal jump $K/k_{\mathrm B}T_{\mathrm{BKT}}=2/\pi$; square-lattice `XY` Monte-Carlo $T_{\mathrm{BKT}}\approx 0.893\,J/k_{\mathrm B}$.

**One question back to you (to sharpen the post):** which convention do you *want* to advertise — bare coupling $J$ with $T_{\mathrm{BKT}}=\pi J/2k_{\mathrm B}$, or renormalized stiffness $K_R$ with the universal-jump statement? They answer different questions (naive estimate vs. exact critical condition), and being explicit about which one the post is making would prevent a careful reader from concluding the factor of 2 was arbitrary.