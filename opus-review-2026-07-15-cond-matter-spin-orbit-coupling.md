# Opus Review: Spin-orbit coupling

**Date/time (KST):** 2026-07-15 09:28:02 KST

**Source file path:** /Users/sirius/sangjun-sim.github.io/_posts/2026-05-24-cond-matter-spin-orbit-coupling.md

**Normalized source path:** _posts/2026-05-24-cond-matter-spin-orbit-coupling.md

**Claude route used:** Claude web (Safari)

**Visible model wording:** Opus 4.8 최대

**Fallback reason:** Claude.app model selector did not open after app relaunch and fresh-chat retry; visible model remained Sonnet 5 중간. Used Claude web fallback after verifying visible Opus 4.8 최대.

**Prompt template path:** /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md

**Workflow file followed:** /Users/sirius/.openclaw/workspace/AI File Review Workflow.md

**Source handling:** The source Markdown file was uploaded directly to the verified Claude route; the full source body was not pasted inline.

---

# Technical Review — "Spin-orbit coupling" (2026-05-24)

**Reviewer role:** physics referee (condensed-matter / relativistic QM)
**Source:** `_posts/2026-05-24-cond-matter-spin-orbit-coupling.md`
**Verdict:** Publishable after fixing **one substantive physics error (P1)** and tightening two derivation/units points (P2–P3). The nontrivial part of the post — the reality argument that forces the explicit factor of $i$ in the real-orbital SOC hopping (Eqs. 5–7) — is correct and cleanly done. Do **not** rewrite the article; apply the targeted drop-ins below.

---

## Compact priority checklist

| # | Severity | Location | Issue |
|---|----------|----------|-------|
| **P1** | 🔴 **Critical (physics)** | Final Rashba block, `H_R = 2α[sin(k_x a)σ_x − sin(k_y a)σ_y]` | $k_x$ and $k_y$ are attached to the **wrong** Pauli matrices. Contradicts your own (correct) hoppings $h^{i,i+\hat x}=i\alpha\sigma_y$, $h^{i,i+\hat y}=-i\alpha\sigma_x$. Correct: $\sigma_x$ pairs with $\sin(k_y a)$, $\sigma_y$ with $\sin(k_x a)$. |
| **P2** | 🟠 Moderate (gap) | Eq. (1) → Eq. (3) | $\mathbf B_{\rm eff}$ is introduced then orphaned. The bridge $H=-\boldsymbol\mu\cdot\mathbf B$ **and the Thomas factor of ½** are silent. Naive transform overcounts by 2×. |
| **P3** | 🟠 Moderate (units) | Eq. (1) | $\mathbf B_{\rm eff}=-(\mathbf v/c)\times\mathbf E$ is **Gaussian** ($1/c$). If SI is intended elsewhere it must be $-(1/c^2)\,\mathbf v\times\mathbf E$. Declare the unit system. |
| **P4** | 🟡 Minor (rigor) | $\alpha$ definition vs. hoppings | Symbol $\alpha$ is overloaded: the continuum coefficient $-\tfrac{\hbar}{4m^2c^2}\partial_z V$ and the lattice hopping amplitude differ by $\hbar/(2a)$ from discretizing $\mathbf p$. |
| **P5** | 🟡 Minor (logic) | §1 | "If SOC is absent, this magnetic field also does not exist" reverses cause/effect; and "electron at rest, nucleus orbiting by $\mathbf v$" muddles the sign of $\mathbf v$ in $\mathbf B_{\rm eff}$. |
| **P6** | 🟡 Minor (cites) | References | Sakurai p. 305 and A&M p. 186 are edition/printing-dependent — verify against your copies. |
| **P7** | ⚪ Trivial | throughout | Typos: `orbita`, `nuclues`, `survices`(×2), `import point`, `does not exit`, `referential axis`. |

---

## P1 — Critical: the final Rashba Hamiltonian has $k_x \leftrightarrow k_y$ swapped

This is the headline result of the post, so the error matters.

**What you wrote is internally inconsistent.** Your hoppings are correct and match the standard convention used in the literature:
$$
h^{i,i+\hat x}_{\rm SOC}=i\alpha\,\sigma_y,\qquad h^{i,i+\hat y}_{\rm SOC}=-i\alpha\,\sigma_x .
$$
But a hopping in the **$x$-direction** carries the phase $e^{\pm i k_x a}$, so after Fourier transform its Pauli structure ($\sigma_y$ here) **must** come out multiplied by $\sin(k_x a)$ — never $\sin(k_y a)$. Your stated result pairs $\sigma_x$ with $\sin(k_x a)$, which cannot follow from these hoppings.

**Explicit Fourier transform (think it through).** With $c_i=\tfrac{1}{\sqrt N}\sum_{\mathbf k}e^{i\mathbf k\cdot\mathbf R_i}c_{\mathbf k}$ and adding h.c.:

- $x$-hopping: $i\alpha\sigma_y\,e^{ik_x a}+\text{h.c.}=i\alpha\sigma_y\!\left(e^{ik_x a}-e^{-ik_x a}\right)=-2\alpha\sin(k_x a)\,\sigma_y$
- $y$-hopping: $-i\alpha\sigma_x\,e^{ik_y a}+\text{h.c.}=-i\alpha\sigma_x\!\left(e^{ik_y a}-e^{-ik_y a}\right)=+2\alpha\sin(k_y a)\,\sigma_x$

Therefore
$$
\boxed{\,H_R=2\alpha\big[\sin(k_y a)\,\sigma_x-\sin(k_x a)\,\sigma_y\big]\,}
$$
i.e. **$\sigma_x$ goes with $\sin(k_y a)$ and $\sigma_y$ with $\sin(k_x a)$** — the reverse of what the post prints.

**Small-$k$ limit (also currently wrong).** The post reduces to $2\alpha a\,(k_x\sigma_x-k_y\sigma_y)$, which is not even of Rashba form. The correct limit is the recognizable spin–momentum-locked form
$$
H_R\;\approx\;2\alpha a\,(k_y\sigma_x-k_x\sigma_y)\;=\;2\alpha a\,(\boldsymbol\sigma\times\mathbf k)\cdot\hat z .
$$
This matches the canonical Bychkov–Rashba Hamiltonian $H=\alpha_R(\sigma_x k_y-\sigma_y k_x)$ with $\alpha_R=2\alpha a$.

**External confirmation.** This is not a convention ambiguity. Independent peer-reviewed derivations that use the *identical* real-space hopping ($i\,c^\dagger_j s^y c_{j+\hat x}$ for $+x$, $-i\,c^\dagger_j s^x c_{j+\hat y}$ for $+y$) obtain a Bloch Hamiltonian in which the Rashba term reads $\lambda_R[\sin(k_x a)\sigma_y-\sin(k_y a)\sigma_x]$ [Ref. 4]. Likewise, the standard square-lattice Rashba term is quoted as $\lambda(\sigma_y\sin k_x-\sigma_x\sin k_y)$ [Ref. 5], and the Kwant tutorial encodes exactly the same $\sigma_y$-for-$x$, $\sigma_x$-for-$y$ hopping matrices [Ref. 6]. All three agree with the box above and disagree with the posted line.

> ### Drop-in correction (replace the last two equations of §3)
> ```markdown
> $$
> \begin{equation}
> H_{R} = 2\alpha[\sin(k_{y}a)\sigma_{x} - \sin(k_{x}a)\sigma_{y}]
> \end{equation}
> $$
>
> This Hamiltonian is known as the **Rashba Hamiltonian**. In the small-$k$ limit
> it becomes $2\alpha a\,(k_{y}\sigma_{x} - k_{x}\sigma_{y}) = 2\alpha a\,(\boldsymbol{\sigma}\times\mathbf{k})\cdot\hat{z}$,
> the familiar spin–momentum-locked form.
> ```
> *(Sanity check to state in-text: a $+x$ hop carries $\sigma_y$, so $\sigma_y$ must multiply $\sin k_x a$; a $+y$ hop carries $\sigma_x$, so $\sigma_x$ must multiply $\sin k_y a$.)*

---

## P2 — Moderate: $\mathbf B_{\rm eff}$ is introduced but never used; the Thomas ½ is silent

Eq. (1) gives $\mathbf B_{\rm eff}$, but Eq. (3) states $H_{\rm SOC}=\tfrac{\hbar}{4m^2c^2}\,\boldsymbol\sigma\cdot[\nabla V\times\mathbf p]$ with **no connecting step**. Two things are missing:

1. The coupling itself: $H=-\boldsymbol\mu\cdot\mathbf B_{\rm eff}$ with $\boldsymbol\mu=-g_s\tfrac{e}{2m}\mathbf S$, $g_s\approx2$.
2. The factor of ½: the naive rest-frame argument **overcounts by exactly two**. Accounting only for the relativistic field transformation gives a spin–orbit term about twice the observed size; the full relativistic (Thomas) treatment restores the correct value [Ref. 3]. Equivalently, the spin–orbit Hamiltonian differs by the Thomas factor ½ from the naive Lorentz-transformation estimate [Ref. 2].

Your coefficient $\tfrac{\hbar}{4m^2c^2}$ is the **correct, Thomas-included** one, so the endpoint is right — but a reader following Eq. (1)→(3) sees a factor-of-2 discontinuity with no explanation. Two acceptable fixes:

> ### Drop-in (add one sentence after Eq. 1, before Eq. 3)
> ```markdown
> The interaction energy is $-\boldsymbol{\mu}\cdot\mathbf{B}_{\rm eff}$ with
> $\boldsymbol{\mu}=-g_{s}\frac{e}{2m}\mathbf{S}$ ($g_{s}\approx 2$). A naive
> Lorentz-transformation estimate overcounts by a factor of two; the relativistic
> kinematics of the electron's accelerated frame (Thomas precession) supplies a
> compensating factor of $\tfrac{1}{2}$. The Thomas-corrected result — identical
> to the non-relativistic reduction of the Dirac equation — is:
> ```
> Alternatively, just note explicitly that Eq. (3) is obtained from the Foldy–Wouthuysen reduction of the Dirac equation (which contains the ½ automatically), and treat Eq. (1) as heuristic motivation only.

---

## P3 — Moderate: unit system is mixed at Eq. (1)

$\mathbf B_{\rm eff}=-(\mathbf v/c)\times\mathbf E$ is a **Gaussian** expression. In SI the transformed field to first order in $v/c$ is $\mathbf B'\simeq-(1/c^2)\,\mathbf v\times\mathbf E$ (note $c^{-2}$, not $c^{-1}$). As written, if a reader assumes SI, Eq. (1) is dimensionally inconsistent.

Note this is *only* a labeling issue: the operator coefficient $\tfrac{\hbar}{4m^2c^2}$ in Eq. (3) is correct in **both** systems when $V$ is the electron potential *energy* (the SI/Gaussian difference is hidden in how $\mathbf E$ relates to charge, not in the SOC operator). So the fix is a one-liner:

> ### Drop-in (footnote or parenthetical at Eq. 1)
> ```markdown
> *(Gaussian units. In SI, $\mathbf{B}_{\rm eff}=-\tfrac{1}{c^{2}}\mathbf{v}\times\mathbf{E}$.)*
> ```

---

## P4 — Minor: the symbol $\alpha$ is overloaded

You define $\alpha=-\tfrac{\hbar}{4m^2c^2}\partial_z V$ — the **continuum** coefficient — and then use the *same* $\alpha$ as the **lattice hopping amplitude** in $h^{i,i+\hat x}=i\alpha\sigma_y$. Discretizing $p_x=-i\hbar\partial_x$ on a lattice of spacing $a$ maps "coefficient of $p_x$" $\to$ hopping amplitude with an extra factor $\hbar/(2a)$:
$$
\gamma\,p_x \;\longrightarrow\; t=-\frac{i\hbar\gamma}{2a}\quad(\text{for } c^\dagger_i c_{i+\hat x}).
$$
So the hopping-strength $\alpha$ is really $\tfrac{\hbar}{2a}\times\big(-\tfrac{\hbar}{4m^2c^2}\partial_z V\big)$, not the continuum $\alpha$ itself. This is a legitimate shortcut, but the current text conflates two quantities that differ dimensionally. Either (i) rename the lattice strength (e.g. $t_R$), or (ii) state "we absorb the discretization factor $\hbar/(2a)$ into $\alpha$." (Compare Ref. 4, which keeps $t_R$ and $\lambda_R=t_R\hbar/2$ distinct, and Ref. 8, where the table lists $t^R=\alpha_2/(2a)$.)

---

## P5 — Minor: causal wording and frame ambiguity in §1

Two small logic points:

- *"If SOC is absent, this magnetic field also does not exist."* — This reverses cause and effect. SOC **is** the coupling of $\mathbf B_{\rm eff}$ to spin; the correct statement is "if $\mathbf B_{\rm eff}=0$ (e.g. $\mathbf v=0$, or the non-relativistic limit $c\to\infty$), then there is no SOC." Suggest: "Absent this effective field, spin decouples from the orbital motion and SOC vanishes."
- The frame setup — "electron in a fixed frame with $\mathbf v_e=0$, seeing the nucleus orbit with $\mathbf v$" — then uses $\mathbf B_{\rm eff}=-(\mathbf v/c)\times\mathbf E$. In the standard derivation $\mathbf v$ is the **electron's** velocity in the lab (nucleus rest) frame. If $\mathbf v$ is the nucleus's velocity *in the electron frame*, it is $-\mathbf v_{\rm electron}$ and the sign flips. Recommend stating explicitly that $\mathbf v$ denotes the electron's velocity relative to the nucleus, to keep the sign unambiguous.

---

## P6 — Minor: verify the textbook page references

I cannot confirm the specific pages against your editions, and page numbers vary by printing — please double-check:
- **Sakurai & Tuan, *Modern QM*, p. 305** — the SOC/Thomas-precession discussion is in the fine-structure section; plausible but edition-dependent.
- **Ashcroft & Mermin, *Solid State Physics*, p. 186** — I could not verify that p. 186 corresponds to the effective-field/SOC content cited; A&M's substantive spin–orbit and magnetism material sits in the later magnetism chapters in the standard printing. Please confirm the page actually supports the statement it's attached to (or move the citation).

*(I'm flagging these rather than asserting they're wrong — I don't have your specific printings in front of me.)*

---

## P7 — Typos

`orbita` → `orbital`; `nuclues` → `nucleus`; `survices` → `survives` (two occurrences); `import point` → `important point`; `does not exit` → `does not exist`; `referential axis` → `reference (quantization) axis`.

---

## Optional enrichments (not required for correctness)

**(⚠️ Advanced — but at your level, take or leave.)**

- **E1 — On-site SOC of a single real orbital vanishes.** Your $\lambda^\mu$ derivation implies something worth stating: for a *single* real orbital, the diagonal element $\lambda^\mu_{i\alpha,i\alpha}\propto\varepsilon_{\mu\nu\rho}\!\int \phi\,(\partial_\nu V)(\partial_\rho\phi)=-\tfrac12\varepsilon_{\mu\nu\rho}\!\int(\partial_\rho\partial_\nu V)\,\phi^2=0$, since $\partial_\rho\partial_\nu V$ is symmetric in $(\nu\rho)$ while $\varepsilon_{\mu\nu\rho}$ is antisymmetric. Hence a nonzero *atomic* $\lambda\,\mathbf L\cdot\mathbf S$ requires **at least two orbitals** (e.g. $p_x,p_y,p_z$), which is exactly why $s$-only models carry no on-site SOC. A one-line remark here would sharpen §2.
- **E2 — Rashba consequences.** A sentence on the physical payoff would round out §3: the corrected $H_R$ gives helical spin texture and split bands $E_\pm(\mathbf k)=\tfrac{\hbar^2k^2}{2m}\pm\alpha_R|\mathbf k|$, with two concentric Fermi contours of opposite winding — the observable signature of broken $z$-inversion.

---

## Sources

1. J. J. Sakurai & S. F. Tuan, *Modern Quantum Mechanics* (cited in post; **verify page/edition**).
2. N. W. Ashcroft & N. D. Mermin, *Solid State Physics* (cited in post; **verify page/edition**).
3. H. Kroemer, "The Thomas precession factor in spin–orbit interaction," *Am. J. Phys.* **72**, 51 (2004); arXiv:physics/0310016 — origin of the Thomas ½ factor and the naive 2× overcount. https://arxiv.org/abs/physics/0310016
4. *Berry-phase mechanism for optical gyrotropy in stripe-ordered cuprates*, arXiv:1212.2698 — Eqs. (17)–(19): **identical hopping convention** to this post; Bloch form $\lambda_R[\sin(k_x a)\sigma_y-\sin(k_y a)\sigma_x]$. https://arxiv.org/abs/1212.2698
5. *Almost half-quantized planar Hall effects in $X$-wave magnets*, arXiv:2508.09472 — Eq. (18): $H_{R}=\lambda(\sigma_y\sin k_x-\sigma_x\sin k_y)$. https://arxiv.org/abs/2508.09472
6. Kwant documentation, tutorial 2.3 ("spin, potential, shape") — hopping matrices $-i\alpha\sigma_y$ ($+x$), $+i\alpha\sigma_x$ ($+y$). https://kwant-project.org/doc/1.0/tutorial/tutorial2
7. Free-space Rashba form $H_R=\alpha_R(\sigma_x k_y-\sigma_y k_x)$: arXiv:1009.2121 (Eq. 108); arXiv:1206.4537 (Eq. 1). https://arxiv.org/abs/1009.2121
8. Yu. A. Bychkov & E. I. Rashba, *J. Phys. C* **17**, 6039 (1984) — canonical reference for the Rashba Hamiltonian (**cite as primary source; confirm exact page in your bibliography style**).

---

### Questions to push the physics further

**[Level 1 — Comprehension]**
- Restate, without looking, why a $+\hat x$ hopping *must* produce $\sin(k_x a)$ (not $\sin(k_y a)$) after Fourier transform. What feature of the phase $e^{i\mathbf k\cdot\mathbf R}$ forces this?

**[Level 2 — Assumption Challenge]**
- You assumed $\nabla V\simeq(\partial_z V)\hat z$ (pure structural inversion asymmetry). What new terms appear if the *bulk* potential also breaks inversion (Dresselhaus)? For a zinc-blende (001) film, how do the Rashba and Dresselhaus terms combine, and at what in-plane direction do they cancel?
- The real-orbital $i$-factor relied on $\phi_{i\alpha},\phi_{j\beta}$ being **real**. What changes if you work in the complex spherical-harmonic basis $Y_\ell^m$ instead — where does the $i$ "go"?

**[Level 3 — Structural / Generalization]**
- $H_R=2\alpha a\,(\boldsymbol\sigma\times\mathbf k)\cdot\hat z$ is a specific $\mathbf d(\mathbf k)$-vector texture. Which crystallographic point group is the *minimal* symmetry that permits pure Rashba and forbids Dresselhaus? (Think $C_{\infty v}$ vs. $D_{2d}$.) How would you read this off directly from the little group of $\Gamma$ rather than from the microscopic $V$?

**[Level 4 — Cross-Domain] (⚠️ Advanced — Research Level)**
- In your Wannier/tight-binding workflow (`Wannifest.jl`): the on-site-vanishing argument in E1 means SOC in a Wannier Hamiltonian lives in **inter-orbital** on-site blocks and in bond terms. When you Wannierize a DFT+SOC calculation, is the extracted $\boldsymbol\lambda_{i\alpha,j\beta}$ guaranteed to inherit the crystal point-group symmetry exactly, or only up to the gauge/disentanglement freedom of the Wannier construction? Concretely: could a non-symmetry-adapted Wannier gauge produce a spurious Rashba-like $\mathbf d(\mathbf k)$ that vanishes only after symmetrization? This is a real trap for symmetry-indicated topology pipelines.
