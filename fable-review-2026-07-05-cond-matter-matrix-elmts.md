# Fable Review: Matrix Elements

- Date: 2026-07-05 17:34:04 KST (+0900)
- Source path: `/Users/sirius/sangjun-sim.github.io/_posts/2026-06-24-cond-matter-matrix-elmts.md`
- Model used: anthropic/claude-fable-5

## Overall assessment

The post has the right topic map for an ARPES matrix-elements note, but it is not yet publication-ready. The most serious problems are not small algebra mistakes: the post mixes momentum, velocity, and wave-vector notation; switches between SI, atomic units, and $\hbar=1$ conventions without declaring them; and treats length- and velocity-gauge matrix elements as if they were interchangeable under assumptions that are not satisfied by the stated final-state approximations.

The strongest route forward is to first state a consistent convention, then separate three layers that are currently interwoven: ARPES kinematics, light-matter coupling/gauge identities, and approximate final-state/atomic-orbital matrix-element models.

## Critical physics issues, ordered by severity

1. **Velocity/momentum operator and gauge prefactors are wrong or undefined.**  
   In the minimal-coupling expansion near lines 94-100,
   $$
   H=\frac{(\mathbf p-q\mathbf A)^2}{2m_e}+v(\mathbf r)
   $$
   should give, for spatially uniform $\mathbf A$ with $[\mathbf p,\mathbf A]=0$,
   $$
   H_{\rm int}= -\frac{q}{m_e}\mathbf A\cdot\mathbf p
   $$
   not $-q\,\mathbf A\cdot\mathbf p/(2m_e)$. The factor of two is lost after symmetrizing. Also, line 115 misses $\hbar$ in the Schrödinger equation, and lines 148-158 call $\langle \mathbf p\rangle$ a velocity matrix element. In SI units,
   $$
   \hat{\mathbf v}=\frac{1}{i\hbar}[\hat{\mathbf r},H_0]=\frac{\hat{\mathbf p}}{m_e}
   $$
   for a local potential, so $\mathbf p=-i m_e[\mathbf r,H_0]/\hbar$, not simply $-i[\mathbf r,H_0]$.

2. **The length-gauge/velocity-gauge discussion is not gauge-consistent.**  
   Lines 267-283 write the length gauge as $H=H_0+\mathbf E\cdot\mathbf r$ and the velocity gauge as $H=H_0+\mathbf A\cdot\mathbf p$. Missing are the electron charge, $1/m_e$, signs, and the relation $\mathbf E=-\partial_t\mathbf A-\nabla\phi$; the constant $c$ in line 283 is not arbitrary in SI units. Gauge equivalence only holds with exact eigenstates of the same Hamiltonian and a complete basis. It is not automatically valid after replacing the final state by a plane wave or a partial wave centered on atoms.

3. **The commutator conversion to length gauge is used outside its domain.**  
   Lines 346-352 use $\hat{\mathbf p}=-i[\hat{\mathbf r},H_0]$ to convert
   $\langle\chi_{\mathbf p}|\mathbf A\cdot\hat{\mathbf p}|\psi_{n\mathbf k}\rangle$
   into a length-gauge matrix element. This requires $\chi_{\mathbf p}$ and $\psi_{n\mathbf k}$ to be eigenstates of the same local $H_0$. A plane-wave final state is not an eigenstate of the crystal Hamiltonian with surface potential. Nonlocal pseudopotentials also add a correction:
   $$
   \hat{\mathbf v}=\frac{1}{i\hbar}[\hat{\mathbf r},H_0]
   =\frac{\hat{\mathbf p}}{m_e}+\frac{1}{i\hbar}[\hat{\mathbf r},V_{\rm NL}].
   $$

4. **The Berry-connection/position-operator relations are oversimplified.**  
   Lines 358-368 state
   $$
   \langle \psi_{m\mathbf k}|\hat{\mathbf r}|\psi_{n\mathbf k}\rangle
   =i\langle u_{m\mathbf k}|\nabla_{\mathbf k}|u_{n\mathbf k}\rangle .
   $$
   This is not a plain matrix element at fixed $\mathbf k$ in an infinite periodic system. The position operator has a distributional representation in the Bloch basis:
   $$
   \langle\psi_{m\mathbf k}|\hat{\mathbf r}|\psi_{n\mathbf k'}\rangle
   = i\delta_{mn}\nabla_{\mathbf k}\delta(\mathbf k-\mathbf k')
   +\mathbf A_{mn}(\mathbf k)\delta(\mathbf k-\mathbf k'),
   $$
   with $\mathbf A_{mn}=i\langle u_{m\mathbf k}|\nabla_{\mathbf k}u_{n\mathbf k}\rangle$. For $m\ne n$, the Berry-connection piece is meaningful; for diagonal elements, gauge and boundary issues matter.

5. **ARPES $k_\perp$ modeling needs a clearer energy reference.**  
   Lines 32-45 use the free-electron final-state model but state “the normal direction wave vector can be conserved.” More precise: $k_\parallel$ is conserved modulo $\mathbf G_\parallel$ at the surface; $k_\perp$ is not conserved and is inferred using a model such as
   $$
   k_\perp=\sqrt{\frac{2m_e}{\hbar^2}\left(E_{\rm kin}\cos^2\theta+V_0\right)}.
   $$
   The preceding equation $E_{\rm kin}=\hbar^2 k_\perp^2/2m_e-V_0$ is only the normal-emission special case and should be tied to the chosen zero of energy. Also clarify that $E_B>0$ below $E_F$ in $E_{\rm kin}=h\nu-\Phi-E_B$.

6. **Circular-polarization basis vectors are likely incorrect.**  
   Lines 316-319 define $\mathbf A_1$ and $\mathbf A_2$, but they are not generally orthogonal or normalized. A standard basis for propagation direction
   $\hat{\mathbf q}=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$ is
   $$
   \hat{\mathbf e}_\theta=(\cos\theta\cos\phi,\cos\theta\sin\phi,-\sin\theta),\quad
   \hat{\mathbf e}_\phi=(-\sin\phi,\cos\phi,0),
   $$
   $$
   \hat{\mathbf e}_{\pm}=\frac{1}{\sqrt2}(\hat{\mathbf e}_\theta\pm i\hat{\mathbf e}_\phi),
   $$
   with the RCP/LCP sign depending on the time convention and viewing direction. The later claim that the plane-wave velocity-gauge CD is zero may be true under a very restricted scalar-overlap approximation, but the derivation as written is not reliable.

7. **Dipole selection rules are incomplete.**  
   Lines 451-454 and 696-699 state $|l-l_j|=1$, $|m-m_j|=0,1$. The angular condition should be tied to the spherical component $q$ of the dipole operator: $\Delta l=\pm1$ and $m'=m_j+q$, where $q=0,\pm1$. For pure circular polarization, only one of $q=\pm1$ contributes, depending on convention; for $z$-linear polarization, $q=0$.

8. **Plane-wave and partial-wave final states need surface caveats.**  
   The final state in ARPES is more accurately a time-reversed LEED state with damping/self-energy and surface boundary matching. The coherent cell sum near line 261 should include the limitation that finite escape depth breaks strict bulk translational symmetry normal to the surface. The “plane wave final state” should be presented as a crude approximation, not a default physical final state.

## Derivation/notation issues

- Lines 107, 148, 293, 301, 526, and 602 use $\mathbf p$ variously as photon propagation vector, photoelectron momentum, momentum operator, and wave vector in an exponential. Use $\mathbf q$ for photon wave vector, $\hat{\mathbf p}$ for canonical momentum, and $\mathbf k_f$ or $\mathbf p/\hbar$ for the photoelectron wave vector.
- Lines 186-187 need the missing $1/\hbar$:
  $$
  v^a_{mn}(\mathbf k)=\frac{1}{\hbar}\langle u_{m\mathbf k}|\partial_{k_a}H(\mathbf k)|u_{n\mathbf k}\rangle.
  $$
  For $m\ne n$,
  $$
  v^a_{mn}=\frac{\varepsilon_{n\mathbf k}-\varepsilon_{m\mathbf k}}{\hbar}
  \langle u_{m\mathbf k}|\partial_{k_a}u_{n\mathbf k}\rangle.
  $$
  For $m=n$, $v^a_{nn}=(1/\hbar)\partial_{k_a}\varepsilon_{n\mathbf k}$.
- Lines 139-140 reuse $n'$ as both coefficient label and summed index. Use $c_m(t)$ and $\sum_{m'}H_{mm'}c_{m'}$.
- Lines 300-302 incorrectly factor $\mathbf A\cdot\hat{\mathbf p}$ outside the matrix element as if it were a scalar. If $\chi_{\mathbf p}$ is a plane wave, $\hat{\mathbf p}$ acting to the left/right still requires care and boundary terms.
- Lines 550-555 decompose a length-gauge integral over unit cells but keep $(\mathbf e\cdot\mathbf r)$ instead of $(\mathbf e\cdot(\mathbf r+\mathbf R))$. This is exactly where the non-periodicity of $\mathbf r$ matters.
- Lines 581-584 use $1/N$ for a Bloch sum where $1/\sqrt N$ is conventional for normalized states.
- Lines 704-708 give
  $(x\pm iy)/r=\mp\sqrt2Y_1^{\pm1}$. With normalized Condon-Shortley harmonics,
  $$
  \frac{x\pm iy}{r}=\mp\sqrt{\frac{8\pi}{3}}Y_1^{\pm1}(\theta,\phi).
  $$
  If the dipole operator is $\mathbf e_\pm\cdot\mathbf r$, there is also a factor $r/\sqrt2$ depending on polarization normalization.

## MathJax/Jekyll rendering risks

- The post repeatedly wraps `\begin{equation}` and `\begin{align}` inside `$$ ... $$`. This often causes MathJax/Kramdown problems. Prefer either bare `$$ ... $$` or use `\begin{aligned} ... \end{aligned}` inside `$$`.
- `\ket` and `\braket` are not default MathJax commands unless the site defines physics/braket macros. Verify the site configuration or define macros.
- Malformed TeX appears several times: `\chi^{_}_{\eta}` and `Y^{m_}_{l}` near lines 508-510, 553-554, and 671-672 should likely be `\chi^{*}_{\eta}` and `Y^{m*}_{l}`.
- Line 629 has an extra parenthesis in `\nabla_{\mathbf{k}}[e^{...}])`.
- Lines 702 use Markdown code spans inside math, e.g. `$`I_{...}`$`, which will render poorly. Use plain math `$I_{...}$`.
- `Sch철nhense` at line 711 is mojibake and should be `Schönhense`.
- Inline escaped citations like `\[Arfken p. 811\]`, `\[Coh 2022\]`, and placeholder names will render as bracketed text, not citations.

## Citation/source issues

- Add a primary/review citation for ARPES kinematics and matrix elements beyond the two existing review links: Damascelli, Hussain, Shen, Rev. Mod. Phys. 75, 473 (2003); Sobota, He, Hashimoto, Shen, Rev. Mod. Phys. 93, 025006 (2021); Hüfner, *Photoelectron Spectroscopy*.
- For one-step photoemission/final states, cite Pendry’s one-step model and a modern review or implementation paper on time-reversed LEED final states.
- For Berry connection and position in periodic systems, cite Blount (1962), Resta Rev. Mod. Phys. 66, 899 (1994), Vanderbilt’s Berry-phase text, or Souza/Marzari/Vanderbilt.
- For velocity vs length gauge and nonlocal pseudopotential corrections, add a source such as Aversa and Sipe on length/velocity gauge optical response, plus a pseudopotential optical-matrix-element reference.
- Replace placeholders `[Hassani]`, `[Gasiorowicz]`, `[Coh 2022]`, `[Schuler's lecture note 2024]`, and `Schönhense 1990` with full bibliographic entries or links.

## Suggested corrected snippets where useful

Minimal-coupling and velocity definition:

```tex
H(t)=\frac{[\hat{\mathbf p}-q\mathbf A(t)]^2}{2m_e}+V(\mathbf r)
\simeq H_0-\frac{q}{m_e}\mathbf A(t)\cdot\hat{\mathbf p},
```

for spatially uniform $\mathbf A$ and neglecting $A^2$. Define

```tex
\hat{\mathbf v}=\frac{1}{i\hbar}[\hat{\mathbf r},H_0].
```

For a local potential, $\hat{\mathbf v}=\hat{\mathbf p}/m_e$; for nonlocal $V_{\rm NL}$, include $(i\hbar)^{-1}[\mathbf r,V_{\rm NL}]$.

Bloch velocity identity:

```tex
v^a_{mn}(\mathbf k)=\frac{1}{\hbar}
\langle u_{m\mathbf k}|\partial_{k_a}H(\mathbf k)|u_{n\mathbf k}\rangle .
```

For $m\ne n$,

```tex
v^a_{mn}(\mathbf k)=
\frac{\varepsilon_{n\mathbf k}-\varepsilon_{m\mathbf k}}{\hbar}
\langle u_{m\mathbf k}|\partial_{k_a}u_{n\mathbf k}\rangle
=
-\frac{i}{\hbar}
(\varepsilon_{n\mathbf k}-\varepsilon_{m\mathbf k})A^a_{mn}(\mathbf k),
```

if $A^a_{mn}=i\langle u_m|\partial_{k_a}u_n\rangle$.

Circular polarization basis:

```tex
\hat{\mathbf e}_{\pm}=\frac{1}{\sqrt2}
(\hat{\mathbf e}_{\theta}\pm i\hat{\mathbf e}_{\phi}),
```

with the RCP/LCP assignment explicitly tied to the convention for $e^{-i\omega t}$ or $e^{+i\omega t}$.

Dipole selection rule:

```tex
\langle l'm'|r_q|lm\rangle\neq0
\quad\Rightarrow\quad
l'=l\pm1,\qquad m'=m+q,\qquad q=0,\pm1.
```

## Compact priority checklist

- Fix unit convention first: SI vs atomic units, and restore all missing $\hbar$, $m_e$, and charge factors.
- Rename symbols to separate photon wave vector, photoelectron wave vector, canonical momentum, and polarization.
- Rewrite the gauge section with correct length/velocity Hamiltonians and explicit assumptions for gauge equivalence.
- Correct the velocity/Berry-connection identities, including diagonal vs off-diagonal cases.
- Rework ARPES $k_\perp$ and energy-reference conventions.
- Replace the circular-polarization basis and selection-rule derivation.
- Add final-state caveats: time-reversed LEED, surface damping, finite escape depth.
- Fix MathJax macros, malformed superscripts, nested environments, inline code-in-math, and mojibake.
- Replace placeholder citations with full primary/review references.
