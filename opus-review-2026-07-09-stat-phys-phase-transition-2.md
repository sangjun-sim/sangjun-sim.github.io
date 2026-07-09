# Opus Review: Berezinskii-Kosterlitz-Thouless transition (2)

- Date/time KST: 2026-07-09 09:18:30 KST
- Source file path: /Users/sirius/sangjun-sim.github.io/_posts/2026-04-20-stat-phys-phase-transition-2.md
- Model/app used: Claude.app, visible model Opus 4.8 (selector showed `Opus 4.8 높음`; `Opus 4.8 최대` was not exposed during automation)
- Prompt template path: /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md
- Source handling: source Markdown was uploaded directly to Claude.app as an attached `.md` file, not pasted inline.

---

# Technical Review — *Berezinskii–Kosterlitz–Thouless transition (2)*

**Reviewer role:** Professional physicist / tutor review (physics-cs-tutor style).
**Source:** `_posts/2026-04-20-stat-phys-phase-transition-2.md`
**Priority of review:** physics correctness → misconceptions → derivation gaps → math/notation → citations → actionable edits.

The post is in good shape overall: the high-$T$ expansion, the spin-wave (low-$T$) correlation function, the single-vortex free-energy argument, and the Coulomb-gas mapping are all present and mostly correct in their final results. However, there are **two genuine physics misconceptions** in the opening, **two real algebra/units errors** in intermediate steps (the low-$T$ Taylor expansion and the free-energy "internal energy" term), and **one factor-of-2 inconsistency** in the Coulomb-gas normalization. The final answers are frequently right even where the intermediate line is wrong, which is exactly the situation a careful reader will trip over. I flag those below with drop-in corrections.

I have not rewritten the article. Each item gives the smallest correction that fixes the physics.

---

## A. Physics correctness & misconceptions (highest priority)

### A1. "The ground state should break this symmetry" — contradicts Mermin–Wagner (critical)

> *"The ground state should break this symmetry since it has the $U(1)$ symmetry."* (opening paragraph)

This is the central conceptual point of the whole BKT story, and as written it is misleading. The **Mermin–Wagner theorem** forbids spontaneous breaking of a continuous symmetry in $d=2$ at any $T>0$: there is **no** long-range order and **no** nonzero order parameter $\langle \mathbf{S}\rangle$ in the 2D $XY$ model at finite temperature. The whole reason BKT is interesting is that it is a transition *without* symmetry breaking — the low-$T$ phase has **quasi-long-range order** (power-law correlations, $\langle\mathbf S\rangle=0$), not true order.

As written, this sentence also contradicts the post's own later (correct) claim that the transition "is **not** a symmetry-breaking transition."

**Suggested drop-in replacement:**

> The 2D $XY$ model has a global $U(1)$ (spin-rotation) symmetry. At $T=0$ the spins align, but by the Mermin–Wagner theorem this continuous symmetry **cannot** be spontaneously broken at any finite temperature in two dimensions: thermal spin-wave fluctuations destroy true long-range order, so $\langle\mathbf S\rangle = 0$ for all $T>0$. What survives at low $T$ is *quasi*-long-range order — correlations that decay as a power law rather than saturating to a constant. BKT is the transition between this quasi-ordered phase and a fully disordered (exponentially correlated) phase, and it happens *without* any local order parameter.

*(Cite Mermin & Wagner, PRL 17, 1133 (1966); it pairs naturally with the Mermin RMP review you already mention.)*

### A2. "At any temperature, $\phi$ is disordered by … vortices, which are the global excitations" (important)

Two problems in one sentence:

1. **"At any temperature … disordered"** is wrong for $T<T_{\rm BKT}$. Below the transition, vortices are **bound into neutral vortex–antivortex pairs**; they do *not* disorder the system, and correlations are power-law (quasi-ordered). Free, unbound vortices — which exponentially disorder the phase — only appear for $T>T_{\rm BKT}$.
2. **"global excitations"** is the wrong term. Vortices are **topological** (localized, non-perturbative) excitations. The gapless "global"/collective excitations are the **spin waves** (the Goldstone-like modes of the ordered background). Suggest replacing "global excitations" → "topological excitations (defects)".

**Suggested drop-in replacement:**

> The phase field is disturbed by two kinds of excitation: smooth spin waves, and topological defects (vortices and antivortices). For $T<T_{\rm BKT}$ vortices occur only as tightly bound neutral pairs and correlations decay as a power law; for $T>T_{\rm BKT}$ pairs unbind, free vortices proliferate, and correlations decay exponentially.

### A3. "the vortices attract to each other" — sign/pairing imprecision

> *"At $T<T_{BKT}$, the vortices attract to each other."*

Like-sign vortices **repel**; it is a **vortex and an antivortex** (opposite winding) that attract and bind. This is exactly the 2D-Coulomb-gas analogy the post develops later (same-sign charges repel, opposite-sign attract). Reword to "vortices and antivortices bind into pairs."

### A4. Supercurrent expression is dimensionally off

> *"a corresponding probability current (that is proportional to $\psi^{*}\partial_i\phi$)."*

For $\psi=|\psi|e^{i\phi}$ the current is $\mathbf j \propto \mathrm{Im}(\psi^*\nabla\psi) = |\psi|^2\,\nabla\phi$. The factor should be $|\psi|^2$, not $\psi^*$ (otherwise the expression is complex and carries the wrong dimensions). Fix: $j_i \propto |\psi|^2\,\partial_i\phi$.

### A5. The order-parameter answer is too glib (minor, conceptual)

> *"Q. How to distinguish…? It can be distinguished by the presence of an order parameter."*

This is roughly the intended point, but sharpen it: a Landau transition has a **local** order parameter whose symmetry-related expectation value changes at $T_c$; the BKT transition has **no** local order parameter (consistent with A1) and is instead diagnosed by a **topological** quantity — the binding/unbinding of vortices, signaled by the change from power-law to exponential correlations and by the universal **jump in the superfluid stiffness** $K_s(T_{\rm BKT}^-)=2/\pi$ (Nelson–Kosterlitz). Consider mentioning the stiffness jump — it is the sharpest experimental fingerprint.

---

## B. Mathematical / derivation errors

### B1. Low-$T$ Taylor expansion: dropped factor and wrong sign (real error)

> $\beta H = -K\sum\cos(\theta_i-\theta_j)\sim -K\sum\left[1-\tfrac12(\theta_i-\theta_j)^2\right]=-K\sum(\theta_i-\theta_j)^2+\text{const.}$

The last equality is wrong twice: the $\tfrac12$ was dropped and the **sign flipped**. Correctly,
$$
-K\sum\left[1-\tfrac12(\theta_i-\theta_j)^2\right] = -K\!\sum 1 \;+\; \frac{K}{2}\sum(\theta_i-\theta_j)^2 \;=\; \text{const} + \frac{K}{2}\sum_{\langle i,j\rangle}(\theta_i-\theta_j)^2 .
$$
Note the sign matters physically: $\beta H$ must be bounded **below** (grow as spins misalign), i.e. the quadratic term is $+\frac{K}{2}(\ldots)^2$. Reassuringly, the very next line — the continuum form $\beta H=\frac{K}{2}\int (\nabla\theta)^2$ — already has the correct $+\frac{K}{2}$, so only the intermediate discrete line needs fixing.

**Drop-in correction:**
$$
\beta H = -K\sum_{\langle i,j\rangle}\cos(\theta_i-\theta_j)\;\simeq\; \text{const} + \frac{K}{2}\sum_{\langle i,j\rangle}(\theta_i-\theta_j)^2 \;\xrightarrow{\text{continuum}}\; \frac{K}{2}\int d^2x\,(\nabla\theta)^2 .
$$

### B2. Free energy: the "internal energy" term has $k_BT$ where it should have $J$ (real error)

This is the most important algebra bug because the post explicitly claims the internal energy is temperature-independent, then writes an expression that isn't.

The third line of the free-energy `align` and the boxed result write
$$
F_n = \pi n^2 \,k_BT\,\ln\!\frac{L}{a} \;-\; 2 k_BT\ln\!\frac{L}{a}.
$$
But the energy term came from $\pi K n^2\,k_BT\ln(L/a)$, and with your convention $K=J/k_BT$ (from $\beta H=-K\sum\mathbf S\cdot\mathbf S$),
$$
\pi K n^2\, k_BT = \pi n^2 J \quad(\text{temperature-independent}),
$$
whereas $\pi n^2 k_BT$ (as written) **is** temperature-dependent — directly contradicting the sentence "The internal energy in this case is independent of the temperature." The $K$ was silently dropped.

**Correct form (this is the classic Kosterlitz–Thouless energy–entropy balance):**
$$
F_n \;\simeq\; \big(\underbrace{\pi n^2 J}_{\text{energy}} \;-\; \underbrace{2 k_BT}_{\text{entropy}}\big)\ln\!\frac{L}{a}
\;=\; \big(\pi K n^2 - 2\big)\,k_BT\,\ln\!\frac{L}{a}.
$$
The sign of the bracket flips at $\pi K n^2 = 2$, i.e. $K_c = 2/(\pi n^2)$, giving $k_BT_c = \pi J n^2/2$; for $n=1$, $K_c=2/\pi$ and $k_BT_c=\pi J/2$ — which matches your final boxed numbers. So the endpoints are right; only the middle expression needs the $J$ (equivalently $K\,k_BT$) restored. Note also the entropy identification: the $2\ln(L/a)$ comes from $S = k_B\ln[(L/a)^2]$ (number of core positions), i.e. $S = 2k_B\ln(L/a)$.

### B3. The vortex-proliferation paragraph is self-contradictory (misconception in prose)

> *"At low temperatures … the system wants to make many vortices because of the large entropy that leads to the disorder."*

This says the opposite of what the physics (and the rest of the paragraph) requires. At **low** $T$ the energy cost $\pi J\ln(L/a)$ dominates, so $F_1>0$ and vortices are suppressed (few vortices). At **high** $T$ the entropy term $2k_BT\ln(L/a)$ wins, $F_1<0$, and vortices proliferate. The earlier lines in the same section actually state this correctly ("small … at low temperatures … big at high temperatures"), so this sentence should simply be corrected to "at **high** temperatures the system proliferates vortices because the entropy gain outweighs the energy cost."

### B4. 2D Green's function normalization is inconsistent (minor but should be fixed)

> $\nabla^2 V=\frac{q}{4\pi\varepsilon}\delta(\mathbf x-\mathbf x_i)\Rightarrow V=\frac{q}{4\pi\varepsilon}\ln|\mathbf x-\mathbf x_i|$

The 2D Poisson Green's function satisfies $\nabla^2\!\left(\frac{1}{2\pi}\ln r\right)=\delta^{(2)}(\mathbf x)$. So the stated $V$ is missing a $\frac{1}{2\pi}$: the solution of $\nabla^2 V = C\,\delta^{(2)}$ is $V = \frac{C}{2\pi}\ln r$, not $C\ln r$. (The $\frac{1}{4\pi\varepsilon}$ prefactor is the *3D* Coulomb normalization and shouldn't appear in the 2D log solution.) Importantly, your **actual** $\psi$ solution is correct: from $\nabla^2\psi = 2\pi\sum_i n_i\delta^{(2)}(\mathbf x-\mathbf x_i)$ you correctly get $\psi=\sum_i n_i\ln|\mathbf x-\mathbf x_i|$ because the $2\pi$ on the RHS cancels the $\frac{1}{2\pi}$ in the Green's function. Only the electrostatics "reminder" line is mis-normalized — fix it to
$$
\nabla^2 V = q\,\delta^{(2)}(\mathbf x-\mathbf x_i)\;\Rightarrow\; V=\frac{q}{2\pi}\ln|\mathbf x-\mathbf x_i|.
$$

### B5. Factor-of-2 mismatch between the two forms of the interaction (should be reconciled)

You first derive
$$
\beta H = \frac{K}{2}\int(\nabla\phi)^2 \;-\; \pi K\sum_{i,j} n_i n_j\ln|\mathbf x_i-\mathbf x_j|,
$$
then rewrite it "conventionally" as
$$
\beta H = \frac{K}{2}\int(\nabla\phi)^2 \;-\; 4\pi^2 K\sum_{i,j} n_i n_j\,C(\mathbf x_i-\mathbf x_j),\qquad C=\frac{\ln|\mathbf x_i-\mathbf x_j|}{2\pi}.
$$
But $4\pi^2 K \cdot \frac{1}{2\pi} = 2\pi K$, so the second form is $-2\pi K\sum n_in_j\ln(\cdots)$ — **twice** the first form's $-\pi K\sum n_in_j\ln(\cdots)$. Either a factor of 2 or a $\sum_{i<j}$ vs. $\sum_{i,j}$ (double-counting) convention is being changed silently. Please make the summation convention explicit. The standard Coulomb-gas Hamiltonian is usually written with $\sum_{i<j}$ (each pair once); if you keep $\sum_{i,j}$ (ordered pairs, both $ij$ and $ji$), the coefficients differ by exactly this factor of 2. Fixing the convention removes the discrepancy and also affects the $y=e^{-\beta\varepsilon_0}$ fugacity bookkeeping used later in the RG.

### B6. Integration lower limit written as 0 (small)

> $\int d^2x\,\frac{n^2}{r^2} = 2\pi n^2\int_{0}^{L}\frac{dr}{r}$

The lower limit should be the core cutoff $a$, not $0$ — this is precisely the divergence the next sentence discusses. Write $\int_a^L \frac{dr}{r}=\ln(L/a)$ so the cutoff is explicit from the start rather than introduced after claiming a $0$ lower limit.

---

## C. Notation, wording, and smaller items

- **Eq. (2)/(3):** the measure is written $\frac{d\theta}{2\pi}$ under a product over $i$; it should read $\frac{d\theta_i}{2\pi}$ (index on the integration variable). Minor but worth making consistent.
- **Eq. (5) high-$T$ result:** $\langle\mathbf S_0\cdot\mathbf S_r\rangle = (K/2)^r = e^{-r/\xi}$ is correct, with $\xi^{-1}=\ln(2/K)$. Consider stating that $r$ is the number of lattice bonds along the shortest path (Manhattan distance in lattice units), and quoting $\xi = 1/\ln(2/K)$ explicitly — right now the reader has to infer it.
- **"$\varepsilon_n^0(a)$" vs "$\beta\varepsilon_n^0(a)$":** the core energy sometimes appears with a $\beta$ and sometimes without across the free-energy chain (e.g. inside $\int(\nabla\theta)^2$ it is added as a bare $\varepsilon_n^0$, then later as $\beta\varepsilon_n^0$). Pick one — it is a dimensionless action, so keeping it as $\beta\varepsilon_n^0$ throughout is cleanest.
- **Sign line in the $\int(\nabla\psi)^2$ step:** the middle line writes $-\int\psi\nabla^2\psi = \int[\ldots][2\pi\sum\ldots]$ (positive) but the final line is $-2\pi\sum\ldots$. The final sign is correct ($\int(\nabla\psi)^2 = -\int\psi\nabla^2\psi = -2\pi\sum_{ij}n_in_j\ln|\mathbf x_i-\mathbf x_j|$); just carry the minus sign consistently through the middle line.
- **"skyrmion number for $S^2$":** the winding number here is the $\pi_1(S^1)=\mathbb Z$ invariant; the skyrmion number is the *distinct* $\pi_2(S^2)=\mathbb Z$ invariant. They are conceptually parallel but not the same object — I'd reword "It is sometimes called skyrmion number for $S^2$" to "the analogous invariant for maps onto $S^2$ is the skyrmion number, classified by $\pi_2(S^2)$" to avoid conflating $\pi_1$ and $\pi_2$.
- **"$\nabla\times u = 2\pi\hat z\sum n_i\delta(x-x_i)$":** write the delta as 2D, $\delta^{(2)}(\mathbf x-\mathbf x_i)$, throughout (several deltas are written $\delta(x-x_i)$).
- **"$|a\theta\ll1|$":** typo; should be $|a\,\nabla\theta|\ll 1$ (slowly varying phase on the lattice scale).
- **"global excitations"** (recurs): see A2 — these are topological, not global.
- **Lecture-note residue:** "We will discuss it next Wednesday," "look up the old lecture notes," and the long trailing block of unanswered Q&A on skyrmion speed, Landé $g$-factor, Gilbert damping / Kambersky theory (lines ~360–380) read as personal lecture notes, not blog content. They are also **off-topic** for a BKT post. Recommend deleting them or splitting them into a separate "open questions" note. The Gilbert-damping linear-response formula in particular is unrelated to BKT and unsupported by the surrounding text.

---

## D. Citations / source-checking

- **Resnick et al., PRL 47, 1542 (1981)** — verified. Full title: *"Kosterlitz-Thouless Transition in Proximity-Coupled Superconducting Arrays,"* D. J. Resnick, J. C. Garland, J. T. Boyd, S. Shoemaker, R. S. Newrock. The system is a **triangular array of proximity-coupled Pb–Sn Josephson junctions**, not a homogeneous "2D superconductor." Small precision edit: call it a *Josephson-junction (proximity-coupled) array*, and note they measured the **resistive transition and nonlinear $I$–$V$ characteristics**, not simply "the resistance."
- **The $V\propto I^3$ signature.** This is correct and is the **Halperin–Nelson** prediction: the nonlinear $I$–$V$ exponent $a(T)$ in $V\propto I^{a(T)}$ satisfies $a(T_{\rm BKT})=3$ and jumps discontinuously from $3$ to $1$ as $T\to T_{\rm BKT}^+$. Worth citing this explicitly: **B. I. Halperin and D. R. Nelson, J. Low Temp. Phys. 36, 599 (1979).** It gives the reader the "why $I^3$" that the sentence currently asserts without derivation.
- **Mermin RMP review** — verified: **N. D. Mermin, "The topological theory of defects in ordered media," Rev. Mod. Phys. 51, 591 (1979).** Add the full citation (currently only "D. Mermin … Rev. Mod. Phys.").
- **Suggested additional primary sources** (the post never cites the originators): Kosterlitz & Thouless, *J. Phys. C* **6**, 1181 (1973); Berezinskii, *Sov. Phys. JETP* **34**, 610 (1972); and for the stiffness jump, Nelson & Kosterlitz, *PRL* **39**, 1201 (1977).

---

## E. Priority checklist (compact)

**Must fix (physics wrong or self-contradictory):**
1. **A1** — Remove "ground state should break this symmetry"; state Mermin–Wagner / quasi-long-range order. *(paragraph 1)*
2. **B2** — Free-energy internal-energy term: $\pi n^2 k_BT \to \pi n^2 J$ (restore the dropped $K$); the energy is $T$-independent. *(free-energy section)*
3. **B1** — Low-$T$ expansion: $-K\sum(\theta_i-\theta_j)^2 \to +\frac{K}{2}\sum(\theta_i-\theta_j)^2$. *(low-$T$ section)*
4. **B3** — Fix the "at low temperatures … wants to make many vortices" sentence (should be high $T$). *(free-energy section)*
5. **A2** — "at any temperature disordered … global excitations" → bound pairs below $T_{\rm BKT}$; vortices are *topological* excitations. *(paragraph 1)*

**Should fix (inconsistency / imprecision):**
6. **B5** — Reconcile the factor-of-2 between $-\pi K\sum n_in_j\ln$ and $-4\pi^2 K\sum n_in_j C$; state $\sum_{i<j}$ vs $\sum_{i,j}$.
7. **B4** — 2D Green's function: $V=\frac{q}{2\pi}\ln r$, drop the 3D $\frac{1}{4\pi\varepsilon}$.
8. **A3** — like vortices repel; vortex–antivortex attract/bind.
9. **A4** — supercurrent $\propto |\psi|^2\partial_i\phi$, not $\psi^*\partial_i\phi$.

**Nice to have (polish / citations):**
10. **D** — Add Halperin–Nelson (1979) for $V\propto I^3$; full Mermin RMP cite; original KT (1973)/Berezinskii (1972); Nelson–Kosterlitz stiffness jump. Correct Resnick system description (JJ array).
11. **B6** — integration lower limit $0\to a$; **C** — measure $d\theta\to d\theta_i$, 2D deltas, $\beta\varepsilon_n^0$ consistency, $\pi_1$-vs-$\pi_2$ wording, `$|a\nabla\theta|\ll1$` typo.
12. **E-residue** — remove trailing lecture-note Q&A (skyrmion speed / Landé $g$ / Gilbert damping) — off-topic for this post.

---

## What is already correct (keep as is)

- High-$T$ expansion mechanism and result $\langle\mathbf S_0\cdot\mathbf S_r\rangle=(K/2)^r=e^{-r/\xi}$.
- Continuum spin-wave Hamiltonian $\frac{K}{2}\int(\nabla\theta)^2$ and the Gaussian identity $\langle e^{i\alpha}\rangle=e^{-\frac12\langle\alpha^2\rangle}$.
- Low-$T$ correlation $\langle(\Delta\theta)^2\rangle=\frac{1}{\pi K}\ln(r/a)\Rightarrow \langle\mathbf S\cdot\mathbf S\rangle=(r/a)^{-1/2\pi K}$, giving $\eta=\frac{1}{2\pi K}$ and the famous $\eta(T_{\rm BKT})=\frac14$ at $K_c=2/\pi$.
- Single-vortex energy $\beta\varepsilon_n=\pi K n^2\ln(L/a)+\beta\varepsilon_n^0$ and position entropy $\Rightarrow K_c=2/(\pi n^2)$, $k_BT_c=\pi J/2$ for $n=1$.
- Helmholtz decomposition $u=u_0+u_1$, the delta-source $\nabla\times u$, and the resulting log (2D Coulomb) interaction $-\pi K\sum n_in_j\ln|\mathbf x_i-\mathbf x_j|$, with the correct cross-term cancellation under PBC.
- Physical reading: opposite-sign vortices bound by a confining log potential; $y=e^{-\beta\varepsilon_0}$ as the fugacity of the grand-canonical Coulomb gas that feeds the RG.

---

### Sources
- Resnick et al., *Kosterlitz-Thouless Transition in Proximity-Coupled Superconducting Arrays*, [Phys. Rev. Lett. 47, 1542 (1981)](https://link.aps.org/doi/10.1103/PhysRevLett.47.1542)
- N. D. Mermin, *The topological theory of defects in ordered media*, [Rev. Mod. Phys. 51, 591 (1979)](https://link.aps.org/doi/10.1103/RevModPhys.51.591)
- Halperin & Nelson, *Resistive transition in superconducting films*, J. Low Temp. Phys. 36, 599 (1979) — prediction $V\propto I^{a(T)}$, $a(T_{\rm BKT})=3$.
- Kosterlitz & Thouless, J. Phys. C 6, 1181 (1973); Berezinskii, Sov. Phys. JETP 34, 610 (1972); Nelson & Kosterlitz, Phys. Rev. Lett. 39, 1201 (1977) — universal stiffness jump.
- Mermin & Wagner, Phys. Rev. Lett. 17, 1133 (1966) — no continuous-symmetry breaking in 2D.
