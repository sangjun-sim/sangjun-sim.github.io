
# Claude Opus Review

- **Title:** Spin Stiffness
- **Reviewed at:** 2026-07-24 09:19:23 KST
- **Source file:** /Users/sirius/sangjun-sim.github.io/_posts/2026-05-25-magnetism-spin-stiffness.md
- **Source GitHub Pages URL:** https://sangjun-sim.github.io/posts/magnetism-spin-stiffness/
- **Raw GitHub backup URL:** https://raw.githubusercontent.com/sangjun-sim/sangjun-sim.github.io/main/_posts/2026-05-25-magnetism-spin-stiffness.md
- **Claude route:** Claude.app
- **Visible model:** Opus 4.8 최대
- **Fallback reason:** None
- **Prompt template:** /Users/sirius/.openclaw/workspace/REVIEW_PROMPT.md
- **Source delivery:** GitHub URL(s) only; the `.md` source was not uploaded and its full body was not pasted inline.

---

# Technical Review — "Spin Stiffness"

**Reviewer role:** professional condensed-matter physicist, reviewing for correctness before publication
**Source reviewed:** `https://sangjun-sim.github.io/posts/magnetism-spin-stiffness/` and the raw Markdown at `raw.githubusercontent.com/.../2026-05-25-magnetism-spin-stiffness.md` (both fetched and cross-checked; they are identical, so the abrupt ending is in the source, not a fetch artifact)
**Review date:** 2026-07-24

---

## 0. Scope and method

I read the post as a self-contained derivation of the spin stiffness $\rho_s$ for a Heisenberg magnet via a slow in-plane twist. Because the derivation follows a specific literature construction very closely, I traced it back to its origin and verified every formula against the primary sources rather than against memory:

- **T. Einarsson and H. J. Schulz**, *Direct calculation of the spin stiffness in the $J_1$–$J_2$ Heisenberg antiferromagnet*, Phys. Rev. B **51**, 6151(R) (1995); preprint arXiv:cond-mat/9410090. **This is the source of the post's Eqs. (1)–(5)**, essentially verbatim (see §5).
- **J. Bonča, J. P. Rodriguez, J. Ferrer, K. S. Bedell**, Phys. Rev. B **50**, 3415 (1994); preprint arXiv:cond-mat/9405069. (The post's Ref. [1].)
- **M. S. L. du Croo de Jongh and P. J. H. Denteneer**, arXiv:cond-mat/9611009, used as an independent statement of the same $\rho_s$ formula.

Where I state a number or a formula below, it is checked against one of these. Where I am reasoning independently (e.g. the sum-rule cancellation in P1-1), I say so and show the steps so you can check them yourself.

---

## 1. Verdict

**The physical setup and the first three displayed equations are correct.** The Hamiltonian, the $U(1)$ twist, the Maclaurin expansion to $O(\theta^2)$, and the definitions of $\mathcal{J}_{ij}$ and $\mathcal{T}_{ij}$ all check out against Einarsson & Schulz Eqs. (2)–(3). Hermiticity, bond antisymmetry $\mathcal{J}_{ji}=-\mathcal{J}_{ij}$, and the internal consistency of the compact line $H = H_0 + \sum(\mathcal{J}_{ij}-\tfrac12\mathcal{T}_{ij}\theta_{ij})\theta_{ij}$ all hold. Good.

**The derivation then fails in the last two displayed equations, and the post stops before defining $\rho_s$.** Specifically:

1. The second-order perturbation term is written as a **sum of squared bond matrix elements** instead of the **squared matrix element of the total current**. This is not a typo — it discards exactly the inter-bond correlations that make $\rho_s$ a measure of long-range order.
2. The step $\langle S^+_i S^-_{i+x}\rangle \to \delta_{i,i+x}$ is not a valid identity, and it is *self-defeating*: since $\delta_{i,i+\hat x}\equiv 0$, the post's own final line evaluates to $-\tfrac{NJ\theta^2}{4}\cdot 0 = 0$. As written, the post concludes that every Heisenberg magnet has zero spin stiffness.
3. $\rho_s$ is never defined quantitatively. The "Definition" callout at the top is verbal only; the equation it refers to never appears.

**Bottom line:** three P0 fixes plus roughly one screen of new text turn this from a broken fragment into a correct and genuinely useful post. Nothing above the line "For simplicity, let us assume $J_1$ model…" needs to change substantively.

---

## 2. P0 — Must fix before this post is correct

### P0-1. Second-order perturbation theory: square of the sum, not sum of squares

**Current text:**

$$
\cdots + \sum_{\braket{ij}}\sum_{\nu\neq 0}\frac{\theta^{2}_{ij}\,\lvert\braket{0|\mathcal{J}_{ij}|\nu}\rvert^{2}}{E_{0}-E_{\nu}} + O(\theta^{4})
$$

**Why this is wrong.** Rayleigh–Schrödinger perturbation theory acts on the *whole* perturbation, which here is a single operator

$$
V_1 \;=\; \sum_{\braket{ij}}\theta_{ij}\,\mathcal{J}_{ij} \;\equiv\; \theta\,\hat{J}_x ,
\qquad
\hat{J}_x \;=\; \sum_i \mathcal{J}_{i,\,i+\hat{x}} .
$$

The second-order shift is $\sum_{\nu\neq0}\lvert\braket{\nu|V_1|0}\rvert^2/(E_0-E_\nu)$, and $\lvert\sum_b c_b\rvert^2 \neq \sum_b\lvert c_b\rvert^2$. Expanding the correct expression gives

$$
\sum_{\nu\neq 0}\frac{1}{E_0-E_\nu}\sum_{b,b'}\theta_b\theta_{b'}\braket{0|\mathcal{J}_b|\nu}\braket{\nu|\mathcal{J}_{b'}|0},
$$

and the $b\neq b'$ cross terms are precisely the **spin-current–spin-current correlation function** between spatially separated bonds. Those cross terms are the entire physics: a local, bond-diagonal quantity cannot distinguish a Néel state from a spin liquid, because both have essentially the same short-range bond correlations. Deleting them is not a small numerical error — it removes the long-range information that $\rho_s$ exists to measure.

**Independent confirmation from the literature.** Einarsson & Schulz write the paramagnetic piece in resolvent form, as $\braket{0|j_y^{(s)}P_0(E_0-H)^{-1}P_0\,j_y^{(s)}|0}$, where $P_0 = 1-\ket{0}\bra{0}$ projects off the ground state, and their $j_y^{(s)} = \tfrac{i}{2}\sum_i[J_1 S_i^+S_{i+\hat{y}}^- + J_2(\ldots) - \mathrm{h.c.}]$ is summed over all sites before the matrix element is taken. Their operator is the **total** current, not a per-bond object. du Croo de Jongh & Denteneer state the same structure independently: $\rho_s = -\tfrac1N\braket{0|t|0} + \tfrac2N\sum_{a\neq0}\lvert\braket{0|j|a}\rvert^2/(E_0-E_a)$, with $j = \mathrm{d}H_{\rm MF}(\mathbf{q})/\mathrm{d}q$ at $q=0$ — again a single derivative of the whole Hamiltonian.

**Drop-in fix:**

```latex
$$
\begin{equation}
\braket{H(\theta)} = \braket{H_{\rm Heisenberg}}
+ \theta\braket{\hat{J}_{x}}
- \frac{\theta^{2}}{2}\braket{\hat{T}_{x}}
+ \theta^{2}\sum\limits_{\nu\neq 0}
  \frac{\lvert\braket{0|\hat{J}_{x}|\nu}\rvert^{2}}{E_{0}-E_{\nu}}
+ O(\theta^{4})
\end{equation}
$$

where the **total** spin current and spin kinetic energy along $\hat{\mathbf{x}}$ are

$$
\begin{align}
\hat{J}_{x} &= \sum\limits_{i}\mathcal{J}_{i,i+\hat{x}}
 = \frac{i}{2}\sum\limits_{i}J_{i,i+\hat{x}}
   \left[S^{+}_{i}S^{-}_{i+\hat{x}}-S^{-}_{i}S^{+}_{i+\hat{x}}\right], \\
\hat{T}_{x} &= \sum\limits_{i}\mathcal{T}_{i,i+\hat{x}}
 = \frac{1}{2}\sum\limits_{i}J_{i,i+\hat{x}}
   \left[S^{+}_{i}S^{-}_{i+\hat{x}}+S^{-}_{i}S^{+}_{i+\hat{x}}\right].
\end{align}
$$
```

Note the pattern this reveals: **diamagnetic minus paramagnetic**, exactly as in the superfluid density / Drude weight (Scalapino, White & Zhang). Worth one sentence in the post — it is the single most transferable idea in the whole calculation.

---

### P0-2. $\langle S^{+}_{i}S^{-}_{j}\rangle = \delta_{ij}$ is false, and it destroys your own result

**Current text (both expectation values):**

$$
\cdots = \frac{iNJ\theta}{2}\left[\delta_{i,i+x}-\delta_{i+x,i}\right] = 0,
\qquad
\cdots = -\frac{NJ\theta^{2}}{4}\left[\delta_{i,i+x}+\delta_{i+x,i}\right]
$$

**Three separate problems:**

**(a) It is not an identity.** $\braket{S^+_iS^-_j}$ is (twice) the transverse spin correlation function, $\braket{S^+_iS^-_j} = 2\braket{S^x_iS^x_j}$ for a $U(1)$-symmetric state. It is generically nonzero at nearest-neighbour separation and decays only over the correlation length. There is no mechanism producing a Kronecker delta.

**(b) There is an exact counterexample in your own Ref. [2].** Einarsson & Schulz compute the ferromagnetic case in closed form: for the $S^z_{\rm tot}=0$ ferromagnetic ground state, the transverse correlator is $\braket{\tfrac12(S_i^+S_j^-+S_i^-S_j^+)} = \tfrac{1}{4}N/(N-1)$, the current term vanishes identically under periodic boundary conditions, and the stiffness is $\rho_s = \tfrac14(J_1+2J_2)N/(N-1)$. That correlator is manifestly nonzero for $i\neq j$, and independent of separation. If $\delta_{ij}$ held, this exactly-solvable case would give $\rho_s=0$, contradicting the correct classical answer $\rho_s = JS^2 = J/4$ for $S=\tfrac12$.

**(c) It is internally self-defeating.** $\delta_{i,i+\hat x} = 0$ identically for $\hat x \neq 0$. So your **last line of the post** evaluates to $-\tfrac{NJ\theta^2}{4}\cdot[0+0] = 0$. The post, taken literally, proves $\Delta E = 0$ to $O(\theta^2)$, i.e. $\rho_s = 0$ for every model. A reader following carefully will hit this and stop trusting the rest.

**Fix (i): the first-order term vanishes by symmetry, not by algebra.**

$\mathcal{J}_{ij}$ is odd under **spin inversion** $\mathcal{P}$ (a $\pi$ rotation about $\hat{x}$ in spin space: $S^\pm_i \to S^\mp_i$, $S^z_i \to -S^z_i$), which is a symmetry of the isotropic $H_0$:

$$
\mathcal{P}\,\mathcal{J}_{ij}\,\mathcal{P}^{-1} = -\mathcal{J}_{ij},
\qquad
\mathcal{P}\,\mathcal{T}_{ij}\,\mathcal{P}^{-1} = +\mathcal{T}_{ij}.
$$

The ground state in the $S^z_{\rm tot}=0$ sector is a $\mathcal{P}$ eigenstate (non-degenerate on a bipartite lattice by Lieb–Mattis / Marshall), hence $\braket{0|\mathcal{J}_{ij}|0} = 0$ bond by bond, and $\braket{\hat J_x} = 0$. Einarsson & Schulz use exactly this parity: the spin-current state $\ket{f_0}\equiv P_0 j^{(s)}_y\ket{0}$ is antisymmetric under spin inversion and under reflection.

An equivalent argument, which you may prefer since it also explains the $O(\theta^4)$ claim: $H_0$ is real in the $S^z$ product basis, so $\ket{0}$ can be chosen real; $\mathcal{J}$ is $i\times$(real antisymmetric matrix), so its expectation value in a real state is zero. This also kills all odd powers of $\theta$, which is what actually justifies writing $O(\theta^4)$ rather than $O(\theta^3)$ as the remainder.

**Fix (ii): keep the diamagnetic term as a correlation function, then use $SU(2)$ invariance.**

Do not try to evaluate $\braket{\hat T_x}$ in closed form — it *is* the answer, and it is what you measure numerically. But there is one exact simplification worth stating, and it is the cleanest thing in the whole subject. For a finite cluster whose exact ground state is an $SU(2)$ singlet, Wigner–Eckart gives

$$
\braket{0|S^\alpha_i S^\beta_j|0} = \tfrac{1}{3}\,\delta_{\alpha\beta}\,\braket{0|\mathbf{S}_i\cdot\mathbf{S}_j|0}
\;\;\Longrightarrow\;\;
\braket{\mathcal{T}_{ij}} = J_{ij}\braket{S^x_iS^x_j + S^y_iS^y_j} = \tfrac{2}{3}J_{ij}\braket{\mathbf{S}_i\cdot\mathbf{S}_j}.
$$

On the square lattice there are two bonds per site, so $J\braket{\mathbf{S}_i\cdot\mathbf{S}_j} = E_0/2N$ and

$$
\boxed{\;-\frac{1}{N}\braket{\hat T_x} \;=\; -\frac{2}{3}\,J\braket{\mathbf{S}_i\cdot\mathbf{S}_{i+\hat{x}}} \;=\; -\frac{E_0}{3N}\;}
$$

This reproduces Einarsson & Schulz's Eq. (8), $\rho_s = \tfrac32\left[-E_0/3N + JY\right]$ once the rotational-average factor of P1-2 is included. I checked it numerically: with the accepted $E_0/N \simeq -0.6694 J_1$ one gets $-E_0/3N = 0.2231$, and $\tfrac32 \times 0.2231 = 0.3347$, against their extrapolated $TY_\infty = 0.3345(7)$ to $0.3352(1)$ depending on the cluster set. The identity holds to the quoted precision.

---

### P0-3. $\rho_s$ is never actually defined — the post stops one equation short

The callout box gives a verbal definition ("a constant that represents the change in the ground state energy … under a slow in-plane twist"), but the equation that makes it a definition never appears, and the post ends mid-derivation with no result, no numbers, and no reference list. As published it reads as an abandoned draft; the site itself labels it a "1 min read."

**Add, immediately after the twist is introduced:**

```latex
$$
\begin{equation}
\rho_{s} \equiv \left.\frac{\mathrm{d}^{2}}{\mathrm{d}\theta^{2}}\frac{E_{0}(\theta)}{N}\right|_{\theta=0}
\qquad\Longleftrightarrow\qquad
\braket{H(\theta)} = \braket{H_{0}} + \tfrac{1}{2}N\theta^{2}\rho_{s}
\end{equation}
$$
```

This is Einarsson & Schulz Eq. (1): $\rho_s$ is the second derivative of the ground-state energy per site with respect to the imposed twist, and a positive value in the thermodynamic limit signals surviving long-range magnetic order while zero indicates none, as in a spin liquid.

Watch the **factor of 2** here: differentiating the $\theta^2$ terms twice produces a 2 that is easy to lose. Combining with P0-1 and P0-2:

$$
\rho_s \;=\; -\frac{1}{N}\braket{0|\hat{T}_x|0} \;+\; \frac{2}{N}\sum_{\nu\neq 0}\frac{\lvert\braket{0|\hat{J}_x|\nu}\rvert^{2}}{E_{0}-E_{\nu}} .
$$

The first term is positive for an antiferromagnet with $J>0$ (since $\braket{\mathbf{S}_i\cdot\mathbf{S}_j}<0$); the second is negative-definite (every denominator is negative). Stiffness is a competition between a "diamagnetic" rigidity and a "paramagnetic" screening by virtual spin currents. Say this explicitly — it is the conceptual payoff of the whole calculation.

---

## 3. P1 — Conceptual gaps that will mislead a careful reader

### P1-1. "Not the gauge transformation" — the conclusion is right, the reason is missing (and this is the deepest point in the post)

**Current text:** *"Note that this is **not the gauge transformation** that makes the eigenvalue invariant."*

As stated this is asserted, not argued, and a sharp reader will immediately object — because the map **is** implemented by a unitary. With $U = \exp\!\big(i\sum_j \theta_j S^z_j\big)$ and $[S^z,S^\pm]=\pm S^\pm$,

$$
U S^{\pm}_i U^{\dagger} = S^{\pm}_i e^{\pm i\theta_i},
\qquad
H(\theta) = U H_0 U^{\dagger},
$$

so $H(\theta)$ and $H_0$ are **isospectral** and $\rho_s$ ought to vanish. Resolving this apparent contradiction is the actual content of the sentence, and it is worth a paragraph.

**The resolution, with the algebra.** If $\theta_i$ is a genuinely single-valued function on the lattice (e.g. open boundary conditions, $\theta_i = \theta x_i$ with $A \equiv \sum_j x_j S^z_j$ a legitimate operator), then $\hat J = i[A,H_0]$ and $\hat T = [A,[A,H_0]]$. Using $\braket{0|\hat J|\nu} = i(E_\nu-E_0)A_{0\nu}$:

$$
\frac{2}{N}\sum_{\nu\neq0}\frac{\lvert\braket{0|\hat J|\nu}\rvert^{2}}{E_0-E_\nu}
= -\frac{2}{N}\sum_{\nu\neq0}(E_\nu-E_0)\lvert A_{0\nu}\rvert^{2}
= \frac{1}{N}\braket{0|\hat T|0},
$$

where the last step is the standard $f$-sum-rule identity $\braket{0|[A,[H_0,A]]|0} = 2\sum_\nu (E_\nu-E_0)\lvert A_{0\nu}\rvert^2$. The two terms **cancel identically**: $\rho_s \equiv 0$ for a pure-gauge twist. (This is the "moment sum rule" that Bonča et al. advertise deriving — their abstract promises a general discussion of the linear-response theory for spin twists which ultimately leads to the moment sum rule.)

So a nonzero $\rho_s$ requires that the twist **not** be removable. That happens only with periodic boundary conditions, where the physically meaningful parameter is the accumulated holonomy around the non-contractible loop,

$$
\Theta = \sum_{\text{loop}}\theta_{ij} = L_x\,\theta \pmod{2\pi},
$$

and $A = \sum_j x_j S^z_j$ is not a well-defined operator on a ring. This is the identical obstruction to Kohn's treatment of the insulating state and to Resta's position operator — a point that should land well for you given your Wannier/Berry-phase work. $\rho_s$ is a **boundary-condition sensitivity**, which is exactly Fisher–Barber–Jasnow's helicity modulus.

**Suggested replacement sentence:**

> Note that this is *formally* a unitary transformation, $H(\theta) = UH_0U^\dagger$ with $U=\exp(i\sum_j\theta_jS_j^z)$, so it cannot change the spectrum as long as $\theta_i$ is single-valued on the lattice — in that case the diamagnetic and paramagnetic contributions below cancel exactly by an $f$-sum rule. What makes $\rho_s$ nonzero is periodic boundary conditions: the twist accumulated around a non-contractible loop, $\Theta = L_x\theta$, is a holonomy that cannot be gauged away, so the "twist" is really a change of boundary condition rather than a change of basis.

### P1-2. The missing factor of $3/2$ — and your Ref. [1] gets this wrong

For an antiferromagnet, the exact finite-size ground state is $SU(2)$-invariant, so the twist axis is **not** orthogonal to the order parameter; you compute a rotational average. Since the stiffness for a twist about the Néel axis is zero, one must multiply the rotationally averaged result by $3/2$ to obtain the ordinary transverse stiffness. This is not a cosmetic factor: it is 50%.

This has a citation consequence. Einarsson & Schulz explicitly attribute the discrepancy with Bonča et al. to three specific lapses: omitting the $J_2$ terms from the current and kinetic-energy operators, missing the $3/2$ factor that compensates for the rotational symmetry of the ground state, and not using the correct power laws in the finite-size extrapolation. Your post cites both papers side by side as if interchangeable. They are not — Bonča et al. report $\rho_s = 0.14\pm0.01$ while Einarsson & Schulz obtain $0.183\pm0.003$, in agreement with series expansion ($0.18\pm0.01$, Singh & Huse) and second-order spin-wave theory ($0.181\pm0.001$, Igarashi). Add one sentence noting that [2] corrects [1].

### P1-3. State that $S^z_i \to S^z_i$

The post transforms $S^\pm$ but never says what happens to $S^z$. This looks like an oversight, and a reader will wonder why the Ising term $S^z_iS^z_j$ survives untouched. The source states it explicitly: the rotation leaves $S^z_i$ unchanged, so $S^z_{\rm tot}$ is conserved. That conservation is what allows the whole calculation to stay inside one symmetry sector — worth one clause.

### P1-4. $\theta_{ij}$ is used before it is defined

$\theta_{ij}$ appears for the first time inside an exponential with no definition. The source defines $\theta_{ij}\equiv\theta_i-\theta_j$ before expanding. Add it.

### P1-5. $S^\pm$ are not "creation and annihilation operators"

They are **raising and lowering (ladder) operators** for $S^z$. The label matters because under Holstein–Primakoff, $S^+ \simeq \sqrt{2S}\,a$ — so $S^+$ maps onto the magnon *annihilation* operator, exactly backwards from what the current phrasing suggests. A reader carrying that into your magnon posts will get sign errors.

### P1-6. "complex conjugation relations" → Hermitian conjugation

$S^- = (S^+)^\dagger$, and the phases are opposite because $[S^z,S^\pm]=\pm S^\pm$ gives the two operators opposite $S^z$ charge. Hermiticity of $H$ then *forces* the conjugate phase. State the charge argument; it generalizes, whereas "complex conjugation" does not.

### P1-7. $\mathcal{J}_{ij}$ is the *$z$-component* of the spin current

A spin current carries two indices: a spatial direction and a spin-polarization axis. The source is precise about this: $j^{(s)}_{ij}$ is the $z$-component of the spin-current operator. Since the whole construction singles out $\hat z$ as the rotation axis, dropping the qualifier invites confusion later when you discuss spin transport or DM interactions.

### P1-8. Say where the order parameter points

Add one sentence: the classical energy cost of the twist comes entirely from the transverse bond correlations, so the twist axis must have a component perpendicular to the ordered moment. A useful sanity check to include (three lines, and it validates all the algebra above): classically, twisting an antiferromagnetic bond by $\theta$ gives $E_{\rm bond}=JS^2\cos(\pi+\theta) = -JS^2 + \tfrac12 JS^2\theta^2$, hence $\rho_s^{\rm cl}=JS^2$. For $S=\tfrac12$ that is $0.25J$, to be compared with the quantum value $0.183J$ — a ~27% reduction from quantum fluctuations. Consistently, the ferromagnetic case gives exactly $\rho_s=\tfrac14(J_1+2J_2)N/(N-1) \to JS^2$, since the FM ground state is classical.

---

## 4. P2 — Notation, conventions, and rendering

| # | Issue | Fix |
|---|---|---|
| P2-1 | **LaTeX bug.** `\sum\limits^{N}{i}` in the $\mathcal{T}$ expectation value is missing an underscore; this renders as a stray `i` next to the sum. | `\sum\limits^{N}_{i}` |
| P2-2 | **Sign inconsistency.** With $\theta_{ij}\equiv\theta_i-\theta_j$ and $\theta_i=\theta(\mathbf{r}_i\cdot\hat{\mathbf{x}})$, your stated $\theta_{ij}=\theta[(\mathbf{r}_i-\mathbf{r}_j)\cdot\hat{\mathbf{x}}]$ gives $\theta_{i,i+\hat{x}} = -\theta$. The next line then writes the prefactor as $+\tfrac{i\theta}{2}$. Harmless here (the term is zero), but it will bite the moment you compute a nonzero current. | Either $-\tfrac{i\theta}{2}$, or sum over $\mathcal{J}_{i+\hat{x},i}$. |
| P2-3 | **Operator-ordering inconsistency.** First block writes $S^-_iS^+_{i+x}$; second block writes $S^-_{i+x}S^+_i$. Equal (different sites commute) but visually jarring mid-derivation. | Make uniform. |
| P2-4 | **Double-counting convention for $\sum_{\braket{ij}}$ never stated.** Does each bond appear once or twice? This changes factors of 2 in the final $\rho_s$. Your source says "all pairs $(i,j)$" while their explicit $T_y^{(s)}$ counts each bond once. | State "each bond counted once" explicitly. |
| P2-5 | **Sign convention for $J$ never stated.** With $H=+\sum J\,\mathbf{S}\cdot\mathbf{S}$, $J>0$ is antiferromagnetic. The sign of $\rho_s$ depends on it. | One clause, even if the Heisenberg post fixes it. |
| P2-6 | **$O(\theta^4)$ needs justification.** Naively the next correction is $O(\theta^3)$ (third-order PT, and the $\hat{J}\!-\!\hat{T}$ cross term). Odd orders vanish, but only because of the parity argument in P0-2. | Add a footnote: "odd orders vanish by spin-inversion parity." |
| P2-7 | **`\braket` macro.** MathJax 3 does not include `\braket` in its default TeX macro set; it needs the `braket` extension or a `macros` entry. Every equation in the post uses it, including inside `\sum\limits_{\braket{ij}}`. | Verify locally; if it fails, add `braket` to `loader.load` in your MathJax config. |
| P2-8 | **Citations are bare paywalled APS links** with no author, title, or year. | Full citations + arXiv links (see §7). |

---

## 5. Attribution — please tighten this

Comparing side by side, the post's Eqs. (1)–(5) track Einarsson & Schulz Eqs. (2)–(3) closely: the same Hamiltonian in the $S^\pm/S^z$ form, the same local rotation, the same expansion, the same two operators, the same names ("spin current operator", "spin kinetic energy"), and the same twist prescription — their phrasing is that a uniform twist $\theta$ is introduced between each pair of adjacent rows, i.e. $\theta_{ij}=\theta[(r_i-r_j)\cdot\hat{y}]$, which your post reproduces with $\hat{\mathbf{x}}$ substituted for $\hat{\mathbf{y}}$.

That is completely fine as a pedagogical exposition — but the current parenthetical, *"(see References [1] and [2] for the $J_1$–$J_2$ model)"*, reads as though the references are for an *extension* of your own derivation, when in fact they are its source. Given that you are assembling a public record ahead of PhD applications, this is worth being scrupulous about. Suggested replacement:

> The construction below follows Einarsson and Schulz [2], who introduced this direct approach for the $J_1$–$J_2$ model; see also the earlier twisted-boundary-condition calculation of Bonča et al. [1], which [2] corrects on several points.

---

## 6. What the post should say next (suggested continuation outline)

The derivation is one paragraph from being complete and three from being genuinely useful. Suggested arc:

1. **Close the calculation.** State $\rho_s = -\tfrac1N\braket{\hat T_x} + \tfrac2N\sum_\nu \lvert\braket{0|\hat J_x|\nu}\rvert^2/(E_0-E_\nu)$, name the two terms diamagnetic/paramagnetic, and note that the second is a spin-current–spin-current correlation function that is computationally the hard part, evaluated in practice by continued-fraction (Lanczos) expansion.
2. **Put a number on it.** $\rho_s = (0.183\pm0.003)J_1$ for the unfrustrated square-lattice $S=\tfrac12$ antiferromagnet, versus the classical $0.25J_1$. Nothing makes an abstract formula concrete like a number.
3. **The hydrodynamic relation.** $c=\sqrt{\rho_s/\chi_\perp}$ (Halperin–Hohenberg), which with $\rho_s=0.183J_1$ gives $c=1.67J_1$ against the second-order spin-wave-theory value $1.664J_1$. This is the cleanest illustration of why $\rho_s$ is a *fundamental* parameter and not just another correlator.
4. **Order-parameter-free diagnostic.** Emphasize the selling point: $\rho_s$ detects long-range order without assuming what the order parameter is. Then the frustration application: the extrapolated stiffness vanishes for $0.4\lesssim J_2/J_1\lesssim 0.6$, with poor finite-size scaling in that window — evidence for neither Néel nor collinear order. This connects directly to your existing frustrated-magnet post.
5. **Cross-link to your BKT posts.** In 2D at $T>0$, $\rho_s$ (helicity modulus) is *the* BKT order parameter, with the Nelson–Kosterlitz universal jump at $T_{\rm KT}$. You already have two BKT posts; this is the natural bridge. (Check the normalization against whatever convention those posts use — the jump is usually quoted as $\rho_s(T_{\rm KT}^-)=\tfrac{2}{\pi}k_BT_{\rm KT}$, but conventions for the coupling differ and I would not copy a factor across posts without re-deriving it.)
6. **Finite-size caveats.** On a finite cluster $\rho_s$ can be negative, signalling that the true thermodynamic ground state is incommensurate with the cluster geometry. Also flag the aspect-ratio dependence (Melko, Sandvik & Scalapino) and the winding-number QMC estimator (Prokof'ev & Svistunov discuss the two inequivalent definitions).

---

## 7. Corrected drop-in block

Replace everything from *"Using the perturbation theory, the energy is given by:"* to the end of the post with the following. This is the minimum needed to make the post correct and self-contained.

```markdown
Because $\theta_i$ enters only through $S^{\pm}$, the twist conserves $S^{z}_{\rm tot}$,
and $\theta_{ij}\equiv\theta_i-\theta_j$. It is convenient to collect the bond
operators into their totals along the twist direction,

$$
\begin{align}
\hat{J}_{x} &\equiv \sum\limits_{i}\mathcal{J}_{i,i+\hat{x}}, &
\hat{T}_{x} &\equiv \sum\limits_{i}\mathcal{T}_{i,i+\hat{x}},
\end{align}
$$

so that the perturbation is $V = -\theta\hat{J}_{x} - \tfrac{1}{2}\theta^{2}\hat{T}_{x}$
(the sign of the first term follows from $\theta_{i,i+\hat{x}}=-\theta$).
Second-order perturbation theory in $\theta$ then gives

$$
\begin{equation}
E_{0}(\theta) = E_{0}(0)
- \theta\braket{0|\hat{J}_{x}|0}
- \frac{\theta^{2}}{2}\braket{0|\hat{T}_{x}|0}
+ \theta^{2}\sum\limits_{\nu\neq 0}
  \frac{\lvert\braket{0|\hat{J}_{x}|\nu}\rvert^{2}}{E_{0}-E_{\nu}}
+ O(\theta^{4}).
\end{equation}
$$

Note that the current appears inside a **single** matrix element: the perturbation
is the total current $\theta\hat{J}_{x}$, not a collection of independent bond
perturbations. The cross terms between different bonds are exactly the
current–current correlations that carry the long-range information.

**The linear term vanishes by symmetry.** Under spin inversion
$\mathcal{P}$ (a $\pi$ rotation about $\hat{\mathbf{x}}$ in spin space,
$S^{\pm}_{i}\to S^{\mp}_{i}$, $S^{z}_{i}\to -S^{z}_{i}$), which is a symmetry of
the isotropic Heisenberg Hamiltonian,

$$
\mathcal{P}\hat{J}_{x}\mathcal{P}^{-1} = -\hat{J}_{x},
\qquad
\mathcal{P}\hat{T}_{x}\mathcal{P}^{-1} = +\hat{T}_{x}.
$$

Since the ground state in the $S^{z}_{\rm tot}=0$ sector is a $\mathcal{P}$
eigenstate, $\braket{0|\hat{J}_{x}|0}=0$. The same parity kills every odd power of
$\theta$, which is why the remainder is $O(\theta^{4})$ and not $O(\theta^{3})$.

**The spin stiffness.** Defining

$$
\begin{equation}
\rho_{s} \equiv
\left.\frac{\mathrm{d}^{2}}{\mathrm{d}\theta^{2}}\frac{E_{0}(\theta)}{N}\right|_{\theta=0}
\qquad\Longleftrightarrow\qquad
E_{0}(\theta) = E_{0}(0) + \tfrac{1}{2}N\rho_{s}\theta^{2},
\end{equation}
$$

we obtain

$$
\begin{equation}
\rho_{s} = -\frac{1}{N}\braket{0|\hat{T}_{x}|0}
+ \frac{2}{N}\sum\limits_{\nu\neq 0}
  \frac{\lvert\braket{0|\hat{J}_{x}|\nu}\rvert^{2}}{E_{0}-E_{\nu}}.
\end{equation}
$$

The structure is the same "diamagnetic minus paramagnetic" decomposition that
appears in the superfluid density and the Drude weight: a rigid response set by
the transverse bond energy, screened by virtual spin currents. The first term is
positive for an antiferromagnet ($\braket{\mathbf{S}_{i}\cdot\mathbf{S}_{j}}<0$ for
$J>0$); the second is negative-definite.

For a finite cluster whose exact ground state is an $SU(2)$ singlet, isotropy gives
$\braket{S^{\alpha}_{i}S^{\beta}_{j}} = \tfrac{1}{3}\delta_{\alpha\beta}
\braket{\mathbf{S}_{i}\cdot\mathbf{S}_{j}}$, so on the square lattice

$$
-\frac{1}{N}\braket{0|\hat{T}_{x}|0} = -\frac{2}{3}J\braket{\mathbf{S}_{i}\cdot\mathbf{S}_{i+\hat{x}}}
= -\frac{E_{0}}{3N}.
$$

Because such a state is rotationally invariant, the twist is not orthogonal to the
order parameter and one measures the *rotational average*; since a twist about the
Néel axis costs nothing, the transverse stiffness is obtained by multiplying by
$\tfrac{3}{2}$.

**Sanity check.** Classically, twisting an antiferromagnetic bond by $\theta$ costs
$JS^{2}\cos(\pi+\theta) = -JS^{2} + \tfrac{1}{2}JS^{2}\theta^{2}$, so
$\rho_{s}^{\rm cl}=JS^{2}=0.25J$ for $S=\tfrac{1}{2}$. Exact diagonalization gives
$\rho_{s}=(0.183\pm0.003)J_{1}$ — a ~27% reduction by quantum fluctuations.
```

---

## 8. Sources

All verified during this review (fetched, not recalled).

**Primary sources for this derivation**

1. T. Einarsson and H. J. Schulz, *Direct calculation of the spin stiffness in the $J_1$–$J_2$ Heisenberg antiferromagnet*, **Phys. Rev. B 51, 6151(R) (1995)**. Preprint: [arXiv:cond-mat/9410090](https://arxiv.org/abs/cond-mat/9410090). — Source of the post's Eqs. (1)–(5); definition Eq. (1); correct $\rho_s$ expression Eq. (4); $3/2$ rotational-average factor; $\rho_s=0.183(3)J_1$.
2. J. Bonča, J. P. Rodriguez, J. Ferrer, K. S. Bedell, *Direct calculation of spin stiffness for spin-1/2 Heisenberg models*, **Phys. Rev. B 50, 3415 (1994)**. Preprint: [arXiv:cond-mat/9405069](https://arxiv.org/abs/cond-mat/9405069). — Twisted-BC ED, $\rho_s=0.14\pm0.01$; the moment sum rule. Superseded on three points by [1].
3. M. S. L. du Croo de Jongh and P. J. H. Denteneer, *Spin stiffness in the frustrated Heisenberg antiferromagnet*, [arXiv:cond-mat/9611009](https://arxiv.org/abs/cond-mat/9611009). — Independent statement of the same $\rho_s$ formula (their Eqs. 24–25) in Schwinger-boson mean field.

**For the conceptual additions recommended above**

4. M. E. Fisher, M. N. Barber, D. Jasnow, *Helicity Modulus, Superfluidity, and Scaling in Isotropic Systems*, **Phys. Rev. A 8, 1111 (1973)** — the original boundary-condition-sensitivity definition.
5. B. S. Shastry and B. Sutherland, **Phys. Rev. Lett. 65, 243 (1990)** — twisted boundary conditions for spin rings; the ancestor of this whole method.
6. W. Kohn, *Theory of the insulating state*, **Phys. Rev. 133, A171 (1964)** — the "why can't I gauge it away" argument in its original electronic form.
7. D. J. Scalapino, S. R. White, S. C. Zhang, **Phys. Rev. B 47, 7995 (1993)**; also **Phys. Rev. Lett. 68, 2830 (1992)** — the diamagnetic-minus-paramagnetic structure and superfluid weight / Drude weight criteria.
8. B. I. Halperin and P. C. Hohenberg, **Phys. Rev. 188, 898 (1969)** — hydrodynamic relation $c^2=\rho_s/\chi_\perp$.
9. S. Chakravarty, B. I. Halperin, D. R. Nelson, **Phys. Rev. B 39, 2344 (1989)** — $\rho_s$ as an input to the NL$\sigma$M description of 2D quantum antiferromagnets.
10. D. R. Nelson and J. M. Kosterlitz, *Universal Jump in the Superfluid Density of Two-Dimensional Superfluids*, **Phys. Rev. Lett. 39, 1201 (1977)** — for the BKT cross-link.
11. R. G. Melko, A. W. Sandvik, D. J. Scalapino, *Aspect-ratio dependence of the spin stiffness of a two-dimensional XY model*, **Phys. Rev. B 69, 014509 (2004)** — finite-size geometry caveats.
12. N. V. Prokof'ev and B. V. Svistunov, *Two definitions of superfluid density*, **Phys. Rev. B 61, 11282 (2000)** — the winding-number estimator and when the two definitions differ.
13. H. Neuberger and T. Ziman, **Phys. Rev. B 39, 2608 (1989)** — finite-size scaling laws used in the extrapolations.
14. R. R. P. Singh and D. A. Huse, **Phys. Rev. B 40, 7247 (1989)**; J.-I. Igarashi, **Phys. Rev. B 46, 10763 (1992)** — independent $\rho_s$ values ($0.18\pm0.01$; $0.181\pm0.001$).
15. S. E. Krüger, R. Darradi, J. Richter, D. J. J. Farnell, **Phys. Rev. B 73, 094404 (2006)**, [arXiv:cond-mat/0601691](https://arxiv.org/abs/cond-mat/0601691) — coupled-cluster stiffness on square/triangular/cubic lattices.
16. A. Auerbach, *Interacting Electrons and Quantum Magnetism* (Springer, 1994) — textbook treatment.

---

## 9. Questions to push further

**[Level 1 — Comprehension]**
- After fixing P0-1, explain in one sentence why the bond-diagonal version of the second-order term cannot distinguish a Néel state from a spin liquid, no matter how accurately you compute it.
- The corrected $\rho_s$ has one positive and one negative term. Which one survives in the classical limit $S\to\infty$, and why does that make the classical stiffness *larger* than the quantum one?

**[Level 2 — Assumption Challenge]**
- The $3/2$ factor assumes the finite-size ground state is an exact $SU(2)$ singlet. What happens to it if you add single-ion anisotropy $D\sum_i (S^z_i)^2$, or an XXZ anisotropy? At what point does the factor become $1$?
- You use spin-inversion parity to kill $\braket{\hat J_x}$. On a frustrated lattice where the ground state may break time reversal (scalar chirality, loop-current-like order — you have written about this in the kagome context), does the argument survive? If $\braket{\hat J_x}\neq 0$, what does a *linear*-in-$\theta$ energy mean physically?
- The $J_1$ model here is unfrustrated and bipartite, so the Marshall sign rule applies and $\ket{0}$ can be chosen real. Which of your two vanishing arguments (parity vs. reality) survives on a triangular lattice?

**[Level 3 — Structural / Generalization]**
- The $f$-sum-rule cancellation in P1-1 says a pure-gauge twist gives exactly zero. Written another way: $\rho_s \neq 0$ requires a low-energy state that the current operator connects to $\ket{0}$ *without* it being reachable by a local unitary. What does that tell you about the relationship between $\rho_s$ and the Anderson tower of states? Can you predict the $N$-scaling of the paramagnetic term from the tower alone?
- $\rho_s$, the Drude weight, and the superfluid weight are the same object for three different $U(1)$s. Write down the single sentence that covers all three, and identify what plays the role of "charge" in each.

**[Level 4 — Cross-Domain] (⚠️ Advanced — Graduate/Research Level)**
- The superfluid weight has a geometric contribution proportional to the integrated quantum metric in flat-band systems (Peotta–Törmä and successors). Is there a magnetic analogue — a quantum-geometric contribution to $\rho_s$ for a magnon band with nontrivial Berry curvature? If so, what would you compute it from in a Wannier-based tight-binding pipeline?
- Your `Jx.jl` computes $J_{ij}$ via the LKAG magnetic force theorem, which is itself an infinitesimal-rotation response. LKAG rotates two spins; the spin stiffness rotates a whole spiral. Is $\rho_s$ recoverable from the LKAG $J_{ij}$ via $\rho_s = -\tfrac{1}{2d}\sum_j J_{0j}\,S^2 (\mathbf{r}_{0j}\cdot\hat{\mathbf{x}})^2$ — and if so, under what conditions is that classical formula the *same* quantity as the quantum expression derived here? (I would not assume the answer; the classical spiral formula misses the paramagnetic term entirely, and identifying exactly what LKAG's adiabatic approximation throws away would be a genuinely publishable blog post, and arguably a paper.)

---

## 10. Priority checklist

**P0 — the post is incorrect until these are done**

- [ ] Move the bond sum **inside** the second-order matrix element: $\lvert\braket{0|\sum_{ij}\theta_{ij}\mathcal{J}_{ij}|\nu}\rvert^2$, not $\sum_{ij}\lvert\braket{0|\mathcal{J}_{ij}|\nu}\rvert^2$
- [ ] Delete every $\delta_{i,i+x}$; the last line of the post currently evaluates to zero
- [ ] Replace the first-order argument with spin-inversion parity (or the reality argument)
- [ ] Keep $\braket{\hat T_x}$ as a correlation function; add the $SU(2)$ identity $-\braket{\hat T_x}/N = -E_0/3N$
- [ ] Add the quantitative definition $\rho_s = \mathrm{d}^2[E_0(\theta)/N]/\mathrm{d}\theta^2|_0$ and the final formula (mind the factor of 2)

**P1 — conceptually misleading as written**

- [ ] Rewrite the "not a gauge transformation" sentence: $H(\theta)=UH_0U^\dagger$ is isospectral for single-valued $\theta_i$; the twist is a boundary-condition change / holonomy
- [ ] Add the $3/2$ rotational-average factor, and note that Ref. [2] corrects Ref. [1] on this
- [ ] State $S^z_i \to S^z_i$ and $S^z_{\rm tot}$ conservation
- [ ] Define $\theta_{ij}\equiv\theta_i-\theta_j$ before first use
- [ ] "creation and annihilation" → "raising and lowering (ladder)"
- [ ] "complex conjugation" → Hermitian conjugation; give the $[S^z,S^\pm]=\pm S^\pm$ reason
- [ ] Call $\mathcal{J}_{ij}$ the **$z$-component** of the spin current
- [ ] Say the twist axis must have a component perpendicular to the ordered moment; add the classical $\rho_s^{\rm cl}=JS^2$ check

**P2 — notation and rendering**

- [ ] `\sum\limits^{N}{i}` → `\sum\limits^{N}_{i}`
- [ ] Fix the $\pm i\theta/2$ sign against $\theta_{i,i+\hat x}=-\theta$
- [ ] Make $S^-_iS^+_{i+x}$ vs $S^-_{i+x}S^+_i$ ordering uniform
- [ ] State the $\sum_{\braket{ij}}$ double-counting convention
- [ ] State the $J>0 \Rightarrow$ AFM convention
- [ ] Footnote why the remainder is $O(\theta^4)$, not $O(\theta^3)$
- [ ] Verify `\braket` renders under your MathJax config
- [ ] Convert the two bare APS links into full citations with arXiv IDs
- [ ] Rewrite the attribution: this derivation *is* Einarsson–Schulz, not an extension of it

**P3 — completeness (the post currently ends mid-derivation)**

- [ ] Quote $\rho_s = 0.183 J_1$ vs. classical $0.25 J_1$
- [ ] Add the hydrodynamic relation $c=\sqrt{\rho_s/\chi_\perp}$ and $c=1.67J_1$
- [ ] Add the superfluid-density / Drude-weight analogy in one paragraph
- [ ] Cross-link to your BKT posts (universal jump) and your frustrated-magnet post ($\rho_s\to0$ for $0.4\lesssim J_2/J_1\lesssim0.6$)
- [ ] Add finite-size caveats: negative $\rho_s$ on incommensurate clusters, aspect-ratio dependence, winding-number estimator
- [ ] Add a References section
