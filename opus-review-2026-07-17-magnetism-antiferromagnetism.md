# Opus Review: Antiferromagnetism

- Date/time KST: 2026-07-17 09:23:13 KST
- Source file path: /Users/sirius/sangjun-sim.github.io/_posts/2026-05-25-magnetism-antiferromagnetism.md
- Source relative path: _posts/2026-05-25-magnetism-antiferromagnetism.md
- Actual Claude route used: Claude.app
- Exact visible model wording: Opus 4.8 최대
- Fallback reason: None
- Prompt template path: /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md
- Source handling: Source Markdown was uploaded directly to the verified Claude route as a .md file; the full source body was not pasted inline.

---

# Technical Review — "Antiferromagnetism" (2026-05-25)

**Reviewer role:** professional physicist / physics-cs-tutor review style
**Scope:** physics correctness → misconceptions → derivation gaps → notation → citations → drop-in fixes → priority checklist
**Overall verdict:** The numerical algebra is essentially correct (every square-root factor evaluates to the right number), and the two headline conclusions — *the Néel state is not an eigenstate* and *the true ground state is a singlet* — are right. But there are **two genuine correctness bugs** that a careful reader will catch: (1) the spin-flip term is written as a *global* sublattice flip when the operator only flips *one bond*, and (2) the symbol $\ket{\Psi_{\rm GND}}$ is overloaded across two physically distinct states, which makes the final equation literally false. Both are quick fixes. Citations are missing entirely and should be added.

---

## 0. Source note (read first)

This section reproduces, nearly sentence-for-sentence, the standard treatment in **Auerbach, *Interacting Electrons and Quantum Magnetism* (Springer, 1994), Ch. 5**, as transcribed in **Pires, *Theoretical Tools for Spin Models in Magnetic Systems* (IOP, 2021), §1**. The phrases "fully polarized … opposite directions … Néel state", "eigenstates of $S^z$ … with eigenvalues $\pm S$", "not even an eigenstate", the Marshall's-theorem statement, and even the closing "number of singlets grows exponentially" all come from that source (which in turn attributes the last claim to Fazekas).

This is fine for a study blog — but **add a citation.** As written, a reader cannot tell this is a textbook derivation. This also matters because the source contains framing you dropped (see P1-5), and re-inserting it fixes a misconception.

---

## Priority-ranked issues

### 🔴 P0 — Correctness bugs (must fix)

---

**P0-1 · The spin-flip term flips the whole sublattice instead of one bond.**

In lines 3–4 you write the off-diagonal contribution as
$$
\tfrac12\big[\ldots\big]\,\prod_{i\in A}\ket{S-1}_{i}\prod_{j\in B}\ket{-S+1}_{j}.
$$
But the operator producing this term is $S^-_i S^+_j$ for a **single fixed bond** $\langle ij\rangle$ inside the sum $\sum_{\langle ij\rangle}$. A single-site operator $S^-_i$ lowers **only site $i$**, not every site of sublattice $A$. Writing $\prod_{i\in A}\ket{S-1}_i$ says "every $A$-site is lowered and every $B$-site is raised," which is a completely different (and wrong) state.

There is a second, coupled problem that *causes* the first: **the dummy index $i$ collides.** It is simultaneously the bond label (in $\sum_{\langle ij\rangle}$ and in $S^-_i$) and the product index (in $\prod_{i\in A}$). Re-using $i$ for both is what silently promotes a one-site flip into an all-site flip.

*Why it matters beyond aesthetics:* the physical content of this term is precisely that $H$ takes the Néel state to a **superposition of one-magnon-like states**, each with a single flipped bond. That is *why* the Néel state fails to be an eigenstate. The global-flip notation destroys exactly the structure you are trying to demonstrate.

**Drop-in fix** — define the single-bond flipped state, then the derivation is unambiguous:

$$
\ket{\Psi_{\rm N}^{(ij)}} \;\equiv\; \ket{S-1}_{i}\,\ket{-S+1}_{j}
\!\!\prod_{\substack{i'\in A\\ i'\neq i}}\!\!\ket{S}_{i'}
\!\!\prod_{\substack{j'\in B\\ j'\neq j}}\!\!\ket{-S}_{j'}
$$

$$
\begin{aligned}
H\ket{\Psi_{\rm N}}
&= \sum_{\langle ij\rangle} J_{ij}\left[\tfrac12\big(S^{+}_{i}S^{-}_{j}+S^{-}_{i}S^{+}_{j}\big)+S^{z}_{i}S^{z}_{j}\right]\ket{\Psi_{\rm N}} \\[2pt]
&= \sum_{\langle ij\rangle} J_{ij}\left[\underbrace{\tfrac12\,S^{-}_{i}S^{+}_{j}}_{\text{flips only bond }ij}\;-\;S^{2}\right]\ket{\Psi_{\rm N}} \\[2pt]
&= \sum_{\langle ij\rangle} J_{ij}\left[\tfrac12
\underbrace{\sqrt{S(S+1)-S(S-1)}}_{S^-_i \text{ on } \ket{+S}:\ \sqrt{2S}}\;
\underbrace{\sqrt{S(S+1)-(-S)(-S+1)}}_{S^+_j \text{ on } \ket{-S}:\ \sqrt{2S}}\;
\ket{\Psi_{\rm N}^{(ij)}} \;-\; S^{2}\ket{\Psi_{\rm N}}\right] \\[2pt]
&= \sum_{\langle ij\rangle} J_{ij}\Big[\,S\,\ket{\Psi_{\rm N}^{(ij)}}\;-\;S^{2}\,\ket{\Psi_{\rm N}}\,\Big].
\end{aligned}
$$

Two small upgrades folded in here:
- I wrote the $S^+_j$ amplitude as $\sqrt{S(S+1)-(-S)(-S+1)}$ rather than $\sqrt{S(S+1)-S(S-1)}$. **Both equal $\sqrt{2S}$** — since $(-S)(-S+1)=S(S-1)$ — so your value was numerically correct, but the explicit form makes it transparent that this factor is a *raising* operator acting on the *minimum*-weight state, symmetric to $S^-_i$ raising… lowering the maximum. Pedagogically clearer.
- The final line collapses $\tfrac12\cdot\sqrt{2S}\cdot\sqrt{2S}=S$, so the flip amplitude per bond is exactly $J_{ij}S$ and the diagonal (classical Néel) energy is $-J_{ij}S^2$.

**Punchline sentence to keep:** Since the $\{\ket{\Psi_{\rm N}^{(ij)}}\}$ are orthogonal to $\ket{\Psi_{\rm N}}$ and enter with nonzero weight, $\ket{\Psi_{\rm N}}$ is not an eigenstate of $H$.

---

**P0-2 · $\ket{\Psi_{\rm GND}}$ is used for two different states; the final equation is false as written.**

You *define* $\ket{\Psi_{\rm GND}} = \prod_{i\in A}\ket{S}_i\prod_{j\in B}\ket{-S}_j$ (the Néel product state), then spend the whole derivation proving it is **not** the ground state (not even an eigenstate). Then the closing line writes
$$
S_{\rm tot}\ket{\Psi_{\rm GND}} = 0
$$
using the **same symbol** for the *true* singlet ground state. These are two physically distinct states, and the equation is **literally false for the Néel state**: the Néel product state is not a spin singlet.

Concrete counterexample (worth putting in the post — it's one line and it kills the confusion): for two sites,
$$
\ket{\uparrow}_A\ket{\downarrow}_B=\tfrac1{\sqrt2}\big(\ket{s}+\ket{t_0}\big),
$$
a 50/50 mix of the $S_{\rm tot}=0$ singlet and the $S_{\rm tot}=1,\,m=0$ triplet. So $\hat S_{\rm tot}^2\ket{\Psi_{\rm N}}\ne 0$. The Néel state is a **superposition of many total-spin sectors**, never a singlet.

**Fix:** use distinct symbols. Néel trial state → $\ket{\Psi_{\rm N}}$; true ground state → $\ket{\Psi_0}$. Every occurrence of $\ket{\Psi_{\rm GND}}$ before the theorem should become $\ket{\Psi_{\rm N}}$, and the theorem should refer to $\ket{\Psi_0}$. Also, calling the Néel state "$\rm GND$" from the outset pre-supposes the very thing you disprove — rename it.

---

### 🟠 P1 — Precision & completeness (should fix)

---

**P1-3 · $S_{\rm tot}\ket{\cdot}=0$ is ambiguous notation.**

$S_{\rm tot}$ is not a scalar. "Singlet" is a statement about the Casimir eigenvalue $S_{\rm tot}(S_{\rm tot}+1)=0$, i.e. the *quantum number* $S_{\rm tot}=0$. Write one of the two unambiguous forms:
$$
\hat S_{\rm tot}^2\,\ket{\Psi_0}=0
\qquad\Longleftrightarrow\qquad
\hat{\vec S}_{\rm tot}\,\ket{\Psi_0}=\vec 0 ,
$$
where $\hat{\vec S}_{\rm tot}=\sum_i \hat{\vec S}_i$. (The two are equivalent: zero total Casimir forces all three components to annihilate the state.) Bare "$S_{\rm tot}\ket{\Psi}=0$" reads as either an operator or a quantum number and shouldn't be left to the reader.

---

**P1-4 · "Marshall's theorem" is a legitimate label but the statement is incomplete — add Lieb–Mattis and the sign rule.**

Your attribution is **not wrong** — Marshall (1955) did prove the singlet result for the bipartite spin-$\tfrac12$ HAF with equal sublattices, and Auerbach/Pires call it "Marshall's theorem." I verified this against the literature (see Sources). But two things are missing:

1. **Marshall's theorem is really two statements**, and you quote only the weaker one. Marshall's central result is the **sign rule (Marshall–Peierls sign rule):** the exact ground state, expanded in the Ising basis, has coefficients $c_\mu=(-1)^{p_\mu}a_\mu$ with $a_\mu\ge 0$, where $p_\mu$ is the number of up-spins on one sublattice. The singlet property follows from this. Mentioning the sign rule (even in a sentence) is worth it — it is the deeper structural fact and it's what underpins sign-problem-free QMC.

2. **The rigorous, general statement is the Lieb–Mattis theorem (1962), not Marshall.** For any bipartite lattice, Lieb–Mattis proves the ground state is a **unique** multiplet with
$$
S_{\rm gs}=|S_A-S_B|,\qquad S_A=\tfrac12 N_A,\ S_B=\tfrac12 N_B,
$$
(so $S_{\rm gs}=0$ for compensated $N_A=N_B$), and additionally that the lowest energy in each spin sector is monotonically ordered, $E(S_1)>E(S_2)$ for $S_1>S_2\ge S_{\rm gs}$. This gives you **uniqueness** (Marshall's theorem alone does not — many other singlets are not the ground state, which is exactly the point of your last sentence) and the ferrimagnetic case for free.

**Suggested replacement for the theorem paragraph:**

> The true ground state $\ket{\Psi_0}$ (distinct from the Néel state $\ket{\Psi_{\rm N}}$) is constrained by two rigorous results. **Marshall's theorem** [Marshall 1955; Auerbach Ch. 5] fixes the signs of the ground-state amplitudes in the Ising basis (the Marshall–Peierls sign rule) and, for equal-size sublattices, forces the ground state to be a total-spin singlet, $\hat S_{\rm tot}^2\ket{\Psi_0}=0$. The stronger **Lieb–Mattis theorem** [Lieb & Mattis 1962] proves that on any bipartite lattice the ground state is the *unique* multiplet with total spin $S_{\rm gs}=|S_A-S_B|$, and that energy levels are ordered monotonically in $S$. Marshall's theorem alone does not single out the ground state: many total-spin singlets are excited states.

---

**P1-5 · "fully polarized ground state" drops the *naive-guess* framing and is slightly misleading.**

Two issues:
- The source says "*we might naively assume that the ground state is fully polarized …*" — the word **naively** is doing essential pedagogical work: it flags the Néel state as a guess about to be knocked down. You dropped it, so the sentence now *asserts* the Néel state is the ground state, which you then contradict two paragraphs later.
- "Fully polarized" is imprecise for a **compensated** antiferromagnet: each *sublattice* is fully polarized, but the *total* moment is zero. And it is the **classical** ground state, not the quantum one.

**Fix:** "One might naively guess a **classical Néel state** — each sublattice fully polarized, in opposite directions, with vanishing net moment. It is the exact ground state of the *classical* model but, as shown below, not even an eigenstate of the *quantum* Hamiltonian."

---

**P1-6 · The closing sentence is orphaned — restore the logical connective and cite Fazekas.**

"Note the number of singlets grows exponentially as a function of the lattice size" is true but dangling — the reader doesn't know *why it's being said*. In the source it completes a thought: the singlet condition $S_{\rm tot}=0$ does **not fix the ground state uniquely**, because the singlet subspace is exponentially large. That non-uniqueness is the whole reason the quantum AFM is hard and connects to valence-bond / RVB physics.

**Fix:**

> The singlet condition does not determine $\ket{\Psi_0}$ uniquely: the dimension of the total-spin-singlet subspace grows exponentially with system size [Fazekas 1999] — for $N$ spin-$\tfrac12$ it is $\binom{N}{N/2}-\binom{N}{N/2-1}$ — and most of these singlets have complicated structure. Pinning down *which* singlet is the ground state is the hard part.

---

### 🟡 P2 — Presentation & Jekyll/MathJax infrastructure (polish)

- **P2-7 · Write the Hamiltonian explicitly before using it.** The decomposed form $\tfrac12(S^+S^-+S^-S^+)+S^zS^z$ appears in line 1 of the derivation with no prior statement of $H$. Add, right after the sign-convention sentence:
  $$
  H=\sum_{\langle ij\rangle} J_{ij}\,\vec S_i\cdot\vec S_j,\qquad J_{ij}\ge 0\ \text{(antiferromagnetic)},
  $$
  and state that $\langle ij\rangle$ runs over nearest-neighbor pairs **counted once**. (Marshall's own convention; matters for the $-S^2$ prefactor.)

- **P2-8 · `\braket{ij}` is a notation abuse.** `\braket{...}` is the Dirac inner product $\langle\phi|\psi\rangle$; using it for a nearest-neighbor bond is semantically wrong even though it renders as $\langle ij\rangle$. Use `\langle ij\rangle` for bonds. Reserve `\braket` for actual inner products.

- **P2-9 · MathJax macro risk.** `\ket`, `\bra`, `\braket` are **not native MathJax commands**. They render only if you've defined them (a MathJax `macros` config, or `\newcommand`/`\providecommand` in each post/preamble, or a bra–ket macro bundle). If your Chirpy MathJax config lacks these, every equation here silently breaks for readers. Confirm the macros are defined site-wide; if not, add e.g.
  ```
  $$\newcommand{\ket}[1]{\left|#1\right\rangle}\newcommand{\bra}[1]{\left\langle#1\right|}$$
  ```
  once per post (or in the MathJax setup). Related: your **inline** math escapes underscores (`$S^{+}\_{i}$`) while **display** math does not (`S^{+}_{i}`). That inconsistency is a kramdown-vs-MathJax workaround; it's harmless if it renders, but standardize it (ideally configure kramdown so inline `_` inside `$...$` is left alone, and drop the `\_`).

- **P2-10 · Duplicate heading.** Front-matter `title: "Antiferromagnetism"` + an `## Antiferromagnetism` H2 immediately below is redundant with Chirpy's auto-rendered title. Drop the H2 or rename it (e.g. "Néel state and Marshall's theorem").

---

## Corrected drop-in block (self-contained, paste-ready)

> One might naively guess a **classical Néel state** for a bipartite lattice with $J_{ij}\ge 0$ — each sublattice fully polarized in opposite directions, net moment zero:
> $$
> \ket{\Psi_{\rm N}} = \prod_{i\in A}\ket{S}_{i}\prod_{j\in B}\ket{-S}_{j},
> $$
> where $\ket{\pm S}$ are the $S^z$ eigenstates of maximal weight. Since $S^+_i$ annihilates $\ket{S}_i$ and $S^-_j$ annihilates $\ket{-S}_j$, we have $S^{+}_{i}S^{-}_{j}\ket{\Psi_{\rm N}}=0$. Acting with
> $$
> H=\sum_{\langle ij\rangle} J_{ij}\Big[\tfrac12\big(S^{+}_{i}S^{-}_{j}+S^{-}_{i}S^{+}_{j}\big)+S^{z}_{i}S^{z}_{j}\Big],
> $$
> and defining the **single-bond** flipped state
> $$
> \ket{\Psi_{\rm N}^{(ij)}} \equiv \ket{S-1}_{i}\ket{-S+1}_{j}\!\!\prod_{\substack{i'\in A\\ i'\neq i}}\!\!\ket{S}_{i'}\!\!\prod_{\substack{j'\in B\\ j'\neq j}}\!\!\ket{-S}_{j'},
> $$
> one finds
> $$
> \begin{aligned}
> H\ket{\Psi_{\rm N}}
> &= \sum_{\langle ij\rangle} J_{ij}\Big[\tfrac12 S^{-}_{i}S^{+}_{j}-S^{2}\Big]\ket{\Psi_{\rm N}} \\
> &= \sum_{\langle ij\rangle} J_{ij}\Big[\,S\,\ket{\Psi_{\rm N}^{(ij)}}-S^{2}\,\ket{\Psi_{\rm N}}\,\Big],
> \end{aligned}
> $$
> using $\tfrac12\sqrt{S(S+1)-S(S-1)}\,\sqrt{S(S+1)-(-S)(-S+1)}=\tfrac12(2S)=S$. Because the flipped states $\{\ket{\Psi_{\rm N}^{(ij)}}\}$ are orthogonal to $\ket{\Psi_{\rm N}}$ and carry nonzero weight, **$\ket{\Psi_{\rm N}}$ is not an eigenstate of $H$** — quantum fluctuations delocalize it into single-bond–flip configurations.
>
> The true ground state $\ket{\Psi_0}\neq\ket{\Psi_{\rm N}}$ is constrained by **Marshall's theorem** [Marshall 1955; Auerbach Ch. 5]: the ground-state amplitudes obey the Marshall–Peierls sign rule, and for equal-size sublattices $\ket{\Psi_0}$ is a total-spin singlet, $\hat S_{\rm tot}^2\ket{\Psi_0}=0$. The stronger **Lieb–Mattis theorem** [Lieb & Mattis 1962] guarantees this singlet is *unique*, with $S_{\rm gs}=|S_A-S_B|$, and orders the spin sectors monotonically in energy. The singlet condition alone does not fix $\ket{\Psi_0}$: the singlet subspace dimension grows exponentially with system size [Fazekas 1999], which is what makes the quantum antiferromagnet hard.

---

## Sources & further reading

Verified against the literature for this review:

1. **W. Marshall**, "Antiferromagnetism," *Proc. R. Soc. Lond. A* **232**, 48 (1955). — Original sign rule + singlet ground state for the bipartite spin-$\tfrac12$ HAF via a variational argument; bond sum counted once, $J>0$, dimension unrestricted.
2. **E. H. Lieb & D. C. Mattis**, "Ordering of Energy Levels of Interacting Spin Systems," *J. Math. Phys.* **3**, 749 (1962). — Unique ground-state multiplet with $S_{\rm gs}=|S_A-S_B|$ and monotone level ordering on bipartite lattices.
3. **A. Auerbach**, *Interacting Electrons and Quantum Magnetism*, Springer (1994), **Ch. 5**. — The textbook statement of "Marshall's theorem" your post follows; the singlet proof is here.
4. **A. S. T. Pires**, *Theoretical Tools for Spin Models in Magnetic Systems*, IOP (2021), §1. — The near-verbatim source of this passage (Néel state, "not even an eigenstate," Marshall's theorem, exponential singlets). **Cite this.**
5. **P. Fazekas**, *Lecture Notes on Electron Correlation and Magnetism*, World Scientific (1999). — Source for "the number of singlets grows exponentially"; also the valence-bond / RVB context for P1-6.

*Context for the Level-2/4 questions below:* exact-diagonalization studies show the Marshall–Peierls sign rule is **violated** once antiferromagnetic next-nearest-neighbor ($J_2$) frustration is strong enough (e.g. the $J_1$–$J_2$ square lattice), which is directly tied to the emergence of the QMC sign problem.

---

## Critical deepening — questions to push further

**[Level 1 — Comprehension]**
- Why is $S^+_iS^-_j\ket{\Psi_{\rm N}}=0$ but $S^-_iS^+_j\ket{\Psi_{\rm N}}\neq 0$? What does this raise/lower asymmetry encode about the two sublattices — and would it flip if you had chosen $J_{ij}<0$ (ferromagnetic)?
- In the corrected derivation, state precisely which operator property forces $\ket{\Psi_{\rm N}^{(ij)}}$ to differ from $\ket{\Psi_{\rm N}}$ at *exactly two* sites, not more.

**[Level 2 — Assumption Challenge]**
- The entire argument assumes **compensated** sublattices ($N_A=N_B$, equal $S$). Using Lieb–Mattis, what is the ground-state total spin if $N_A\neq N_B$? What physical phase is that, and what happens to the net moment? (This is the ferrimagnetic branch your current text silently excludes.)
- Marshall's sign rule was proven for **nearest-neighbor bipartite** couplings. Add an AFM $J_2$ on the square lattice. Does the sign rule survive? At what point does it fail, and what observable signals the failure? (Tie your answer to the $J_1$–$J_2$ ED results.)

**[Level 3 — Structural / Generalization]**
- Here is the sharp tension your post sets up but doesn't resolve: the Néel state **breaks** SU(2) spin-rotation symmetry, yet the exact finite-size ground state $\ket{\Psi_0}$ is a singlet — fully SU(2)-**symmetric**. How do symmetry-broken Néel order and a symmetric singlet ground state coexist? (Keyword: Anderson tower of states / "thin spectrum"; the broken-symmetry state is a wavepacket of nearly degenerate low-spin multiplets that collapse onto the singlet only at finite size.) A follow-up post on this would be the natural sequel.

**[Level 4 — Cross-Domain] (⚠️ Advanced — Graduate/Research Level)**
- The Marshall sign rule = *absence of a sign problem* for stochastic sampling of the bipartite AFM ground state. Make this precise: how does a positive-coefficient basis (after the sublattice rotation) translate into a sign-problem-free QMC weight, and why does frustration-induced sign-rule violation reintroduce the sign problem? Connect the "exponentially many singlets" of your last sentence to why the frustrated case resists both QMC and exact classical simulation.

---

## Compact priority checklist

| # | Sev | Fix |
|---|-----|-----|
| P0-1 | 🔴 | Spin-flip term flips whole sublattice → make it a **single-bond** flip; kill the $i$ index collision (define $\ket{\Psi_{\rm N}^{(ij)}}$). |
| P0-2 | 🔴 | $\ket{\Psi_{\rm GND}}$ overloaded → Néel state $=\ket{\Psi_{\rm N}}$, true GS $=\ket{\Psi_0}$; final singlet eqn is false for the Néel state (add the 2-site counterexample). |
| P1-3 | 🟠 | $S_{\rm tot}\ket{\cdot}=0$ ambiguous → write $\hat S_{\rm tot}^2\ket{\Psi_0}=0$ or $\hat{\vec S}_{\rm tot}\ket{\Psi_0}=\vec 0$. |
| P1-4 | 🟠 | Add **Lieb–Mattis** ($S_{\rm gs}=|S_A-S_B|$, uniqueness, ordering) and mention the **sign rule**; keep "Marshall's theorem" but complete it. |
| P1-5 | 🟠 | Restore "**naively**" framing; "fully polarized" → per-sublattice, compensated, *classical* GS. |
| P1-6 | 🟠 | Un-orphan the last sentence: singlet condition ≠ unique GS; cite **Fazekas**; give $\binom{N}{N/2}-\binom{N}{N/2-1}$. |
| P2-7 | 🟡 | Write $H=\sum_{\langle ij\rangle}J_{ij}\vec S_i\cdot\vec S_j$ explicitly; define $\langle ij\rangle$ (counted once). |
| P2-8 | 🟡 | `\braket{ij}` → `\langle ij\rangle` (semantic abuse of Dirac braket). |
| P2-9 | 🟡 | Confirm MathJax macros for `\ket/\bra/\braket` are defined site-wide; standardize inline `\_` escaping. |
| P2-10 | 🟡 | Remove duplicate `## Antiferromagnetism` H2. |
| §0 | 🟡 | **Cite the source** (Auerbach Ch. 5 / Pires 2021) — this passage follows it almost verbatim. |
