---
title: A short note on pair-correlation function
date: 2026-08-07 09:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
  - dft
math: true
toc: true
---

## A short note on pair-correlation function

The pair-correlation function is the concept in the many-body system that can be applied to understand the physical origin of the exchange-correlation energy. This function corresponds to the "correlation function" in the statistics. The pair-correlation function and its multiplication to the charge density at $\mathbf{r}'$, $n(\mathbf{r}')$ is written as $g(\mathbf{r},\mathbf{r}')n(\mathbf{r}')$. This tells us how the density is distributed at $\mathbf{r}'$ if the density is given at $\mathbf{r}$. [Cohen] Thus, $n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}')$ will give the density distribution of two particles; $n(\mathbf{r},\mathbf{r}')$, which is written as:

<!-- REVIEW: [medium] Conditional-density wording. "how the density is distributed at r' if the density is given at r" conflates two different objects. g(r,r')n(r') is the *conditional* density: the density at r' given that one electron has been *found* at r (a point event), not given a density at r. Diagnostic: the conditional density integrates to N-1, i.e. \int d r' n(r')g(r,r') = N-1, whereas n(r') alone integrates to N. Suggested phrasing: "given that an electron sits at r". -->

<!-- REVIEW: [medium] "This function corresponds to the correlation function in the statistics" is only half right. g is a normalized joint density (a likelihood ratio n(r,r')/[n(r)n(r')]); the object that plays the role of the statistical correlation is h(r,r') = g(r,r') - 1, the total correlation function of Ornstein/Zernike theory, which vanishes for statistically independent densities. This matters downstream: the xc hole is n(r')h(r,r'), not n(r')g(r,r'). -->

<!-- REVIEW: [low] Citation "[Cohen]" is not resolvable as written. Presumably M. L. Cohen and S. G. Louie, *Fundamentals of Condensed Matter Physics* (Cambridge Univ. Press, 2016). Give author/title/year/section at least once, matching the "[p.67 in Kohanoff]" style used later, or add a references block at the end of the post. -->

$$
\begin{align}
n(\mathbf{r};\sigma,\mathbf{r}';\sigma') &= \braket{\sum\limits_{i\neq j}\delta(\mathbf{r}-\mathbf{r}_{i})\delta_{\sigma\sigma_{i}}\delta(\mathbf{r}'-\mathbf{r}_{j})\delta_{\sigma'\sigma_{j}}} \nonumber \\
&= N(N-1)\sum\limits_{\sigma_{3}\sigma_{4},\dots,\sigma_{N}}\int d\mathbf{r}_{3}d\mathbf{r}_{4}\dots d\mathbf{r}_{N} |\Psi(\mathbf{r};\sigma,\mathbf{r}';\sigma',\mathbf{r}_{3};\sigma_{3};,\dots,\mathbf{r}_{N}\sigma_{N})|^{2}
\end{align}
$$

<!-- REVIEW: [high] The i != j double sum runs over *ordered* pairs, so this object integrates to N(N-1), i.e. twice the number of distinct pairs. That factor is exactly where Eqs. (4) and (5) below go wrong. Some texts define the pair density with an extra 1/2 so that it integrates to \binom{N}{2}; either convention is fine, but it must be carried consistently from here through the sum rule and the xc hole. -->

<!-- REVIEW: [medium] Two assumptions are used silently in the second line. (i) |\Psi|^2 must be invariant under relabeling of the particles (guaranteed here by antisymmetry of \Psi), which is what lets all N(N-1) ordered (i,j) terms collapse to one integral; (ii) \Psi is normalized. The whole N(N-1) prefactor is a consequence of (i), so it is worth one sentence. -->

<!-- REVIEW: [low] LaTeX in the argument list of \Psi: "\mathbf{r}_{3};\sigma_{3};," carries a stray semicolon before the comma, and the final entry "\mathbf{r}_{N}\sigma_{N}" is missing its semicolon separator. The spin sum "\sum_{\sigma_{3}\sigma_{4},\dots,\sigma_{N}}" is also inconsistently punctuated. Separately, \braket requires the MathJax "braket" (or "physics") extension; if the site MathJax config does not load it, the first line will not render and \langle \dots \rangle should be used instead. -->

The explicit form of the pair-correlation function is given by:

$$
\begin{equation}
g(\mathbf{r},\mathbf{r}') = C\frac{n(\mathbf{r},\mathbf{r}')}{n(\mathbf{r})n(\mathbf{r}')}
\end{equation}
$$

<!-- REVIEW: [high] The constant C is over-determined and, given the rest of the note, must equal 1. The standard convention *defines* g through n(r,r') = n(r)g(r,r')n(r'), i.e. C = 1. Eq. (4) below then uses the middle equality \int\int n g n = \int\int n(r,r'), which holds only if C = 1, while the text simultaneously claims C is "to be normalized" by that same equation and that the result is N(N-1)/2 (which would need C = 1/2). Pick one convention: set C = 1 and let the normalization read N(N-1), or keep C free, in which case the middle equality in Eq. (4) is false. -->

<!-- REVIEW: [medium] Spin labels are dropped silently between Eq. (1) and Eq. (2). Either define n(r,r') = \sum_{\sigma\sigma'} n(r;\sigma,r';\sigma') explicitly, or keep the spin-resolved g_{\sigma\sigma'}(r,r'). This is not cosmetic: exchange lives only in the parallel-spin channel (g_{\uparrow\downarrow} has no exchange part), which is precisely what is needed for the x/c split in Eq. (6) and for the on-top behaviour of the exchange hole discussed in the last paragraph. -->

where $C$ is an extra constant to be normalized. From this equation, one can see that the interchange of the particles does not change the correlation function. This is called the reciprocal relation, and it mathematically states that $g(\mathbf{r},\mathbf{r}') = g(\mathbf{r}',\mathbf{r})$. Another thing is that the pair-correlation is unity once the particle at $\mathbf{r}'$ is far away from another particle at $\mathbf{r}$.

<!-- REVIEW: [medium] "Reciprocal relation" is nonstandard nomenclature here; in condensed matter that name is attached to Onsager reciprocity for transport coefficients. This is simply the exchange symmetry of the pair density. Also the symmetry does not follow "from this equation": Eq. (2) is symmetric only because its numerator is, and the numerator's symmetry comes from Eq. (1), where the i != j sum and the delta functions are manifestly invariant under (r,\sigma) <-> (r',\sigma'). With spin retained the correct statement is g_{\sigma\sigma'}(r,r') = g_{\sigma'\sigma}(r',r): position and spin labels must be swapped together. -->

$$
\begin{equation}
\lim_{\mathbf{r}'\rightarrow\infty} g(\mathbf{r},\mathbf{r}') = 1
\end{equation}
$$

<!-- REVIEW: [medium] The limit is mis-stated in two ways. (i) The meaningful limit is |r - r'| -> \infty at fixed r, not "r' -> \infty": for a finite system the latter drives numerator and denominator to zero simultaneously and makes g a 0/0 ratio. (ii) g -> 1 is exact only for extended systems / the thermodynamic limit. For finite N the xc hole sum rule (-1, quoted in the last paragraph) forces an O(1/N) deviation: comparing \int\int n g n = N(N-1) with \int\int n n = N^2 gives a mean g of (N-1)/N. Concretely for He (N = 2) the conditional density integrates to 1 while n integrates to 2, so g tends to 1/2, not 1. -->

<!-- REVIEW: [low] The short-range companion to this limit is missing and is the more useful half for DFT: the Kato electron-electron cusp condition fixes the slope of the spherically averaged g as r' -> r, and Pauli exclusion fixes the on-top parallel-spin value g_{\sigma\sigma}(r,r) = 0, equivalently n_x(r,r) = -n(r)/2 in the unpolarized case. Worth one line, since the last paragraph invokes the exchange hole without ever bounding it. -->

In this case, one mentions that the density of two particles is uncorrelated. (The physical implication of $g(\mathbf{r},\mathbf{r}') = 1$ is that the classical (direct) Coulomb interaction and exchange-correlation energy are not included, so the charge is uniformly distributed in the background.) This is the reason why the pair-correlation function is related to the correlation in statistics for the first time. Finally, the constant $C$ can be determined by integrating the $n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}')$ in terms of $\mathbf{r}$ and $\mathbf{r}'$. This leads to the integration of $n(\mathbf{r},\mathbf{r}')$. Since the density $n(\mathbf{r},\mathbf{r}')$ denotes the two-particle density, the integral gives the total number of the pairs, $\binom{N}{2}$.

<!-- REVIEW: [high] The parenthetical inverts the physics. g = 1 does *not* mean "the classical (direct) Coulomb interaction and exchange-correlation energy are not included". Substituting g = 1 into E_ee = (1/2)\int\int d r d r' n(r)g(r,r')n(r')/|r - r'| returns *exactly* the Hartree (classical direct Coulomb) energy, spurious self-interaction included. What g = 1 kills is only the exchange-correlation part, since E_xc is built from g - 1. Correct reading: uncorrelated pair density <=> pure Hartree, xc absent. -->

<!-- REVIEW: [high] "so the charge is uniformly distributed in the background" does not follow from g = 1. g = 1 is a statement of statistical independence of the two-point density, not of the shape of n(r): an atom can have a strongly inhomogeneous n(r) with g near 1. Uniformity of the density is an independent (jellium) assumption. Conflating the two makes it look as though the LDA is being derived here, which it is not. -->

<!-- REVIEW: [high] "the integral gives the total number of the pairs, \binom{N}{2}" is wrong for the n(r,r') defined in Eq. (1): the i != j sum counts ordered pairs, so \int\int n(r,r') = N(N-1) = 2\binom{N}{2}. Independent check that settles which is right: the xc hole sum rule \int d r' n_{xc}(r,r') = -1 asserted in the last paragraph follows from \int\int n g n = N(N-1) together with \int\int n n = N^2 (difference -N, i.e. exactly one missing electron per reference electron). Using N(N-1)/2 the same algebra gives -N(N+1)/2 and the -1 sum rule is destroyed. -->

$$
\begin{equation}
\int d\mathbf{r}d\mathbf{r}' n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}') = \int d\mathbf{r}d\mathbf{r}' n(\mathbf{r},\mathbf{r}') = \frac{N(N-1)}{2}
\end{equation}
$$

<!-- REVIEW: [high] Right-hand side is off by a factor of 2 under Eq. (1)'s convention: it should be N(N-1). The chain is also internally inconsistent as written, since the first equality silently assumes C = 1 while the last would require C = 1/2. -->

Summarizing the session, the pair-correlation function has the following properties:

1. Symmetry with respect to the interchange of particles ($g(\mathbf{r},\mathbf{r}') = g(\mathbf{r}',\mathbf{r})$).
2. The pair correlation function follows the sum rule:

$$
\begin{equation}
\int d\mathbf{r}d\mathbf{r}' n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}') = \frac{N(N-1)}{2}
\end{equation}
$$

<!-- REVIEW: [high] Same factor-of-2 error propagates into the summary: with the ordered-pair definition of Eq. (1) the normalization is N(N-1). -->

<!-- REVIEW: [low] Naming collision. In the DFT literature "the sum rule" for the pair correlation function almost always means \int d r' n(r')[g(r,r') - 1] = -1, i.e. the xc hole sum rule invoked in the last paragraph, not the global normalization of the pair density. Calling property 2 a normalization condition and reserving "sum rule" for the -1 statement would remove the ambiguity. -->

Integration of the pair correlation function $g(\mathbf{r},\mathbf{r}')$ over the strength of the electron-electron interaction can give the kinetic correlations. In addition, it can be separated into exchange and correlation parts [p.67 in Kohanoff]:

$$
\begin{equation}
\bar{g}(\mathbf{r},\mathbf{r}') = \int_{0}^{1} d\lambda~g_{\lambda}(\mathbf{r},\mathbf{r}') = \bar{g}_{\rm x}(\mathbf{r},\mathbf{r}') + \bar{g}_{\rm c}(\mathbf{r},\mathbf{r}')
\end{equation}
$$

<!-- REVIEW: [medium] The adiabatic connection is missing the constraint that makes Eq. (6) well-defined. g_\lambda is the pair correlation of the system with interaction \lambda/|r - r'| *and* an external potential v_\lambda chosen so that n_\lambda(r) = n(r), the physical density, for every \lambda in [0,1]. Endpoints: \lambda = 0 is the non-interacting Kohn-Sham system, \lambda = 1 the physical one. Without the fixed-density condition the \lambda integral has no meaning. -->

<!-- REVIEW: [medium] "can give the kinetic correlations" is loose enough to mislead: the \lambda integration does not *produce* a kinetic quantity, it absorbs the kinetic correlation energy T_c = T - T_s into a purely Coulomb-like expression. That is the entire point of the construction, and the resulting formula, E_xc = (1/2)\int\int d r d r' n(r)n(r')[\bar{g}(r,r') - 1]/|r - r'|, is never written down anywhere in the note even though the opening sentence promises "the physical origin of the exchange-correlation energy". Recommend adding it: as it stands Eqs. (1)-(6) are a setup with no conclusion. Primary sources: J. Harris and R. O. Jones, J. Phys. F 4, 1170 (1974); D. C. Langreth and J. P. Perdew, Solid State Commun. 17, 1425 (1975); O. Gunnarsson and B. I. Lundqvist, Phys. Rev. B 13, 4274 (1976). -->

<!-- REVIEW: [low] The bar on \bar{g}_x is redundant. The exchange part is evaluated from the (\lambda-independent) Kohn-Sham determinant, so \int_0^1 d\lambda~g_{{\rm x},\lambda} = g_{\rm x}. Only the correlation part genuinely depends on \lambda, and \bar{g}_{\rm c} differs from the physical g_{\rm c}(\lambda = 1) precisely by the kinetic correlation contribution mentioned above. -->

<!-- REVIEW: [low] Citation form: "[p.67 in Kohanoff]" should appear in full at least once, e.g. J. Kohanoff, *Electronic Structure Calculations for Solids and Molecules: Theory and Computational Methods* (Cambridge Univ. Press, 2006), Sec. 2.2 and Chap. 4. Page numbers alone are edition-dependent; a section number makes the pointer checkable. Also: before transcribing further relations from that page, verify which prefactor convention Kohanoff uses for the pair density (with or without 1/2) and match Eq. (1) to it, otherwise the N(N-1)/2 above and the -1 hole sum rule below cannot both be right. -->

$\mathbf{r}$에 한 전자가 위치할 때 그 주변인 $\mathbf{r}'$에 위치해야할 다른 전자는 exchange and correlation effect에 의해 $\mathbf{r}'$에 존재할 확률이 줄어들 수 있다. 이는 $\mathbf{r}$에 위치한 전자 주위에 charge depletion 영역을 만들게 된다. 이러한 영역을 exchange-correlation hole density $n_{\rm xc}(\mathbf{r})$로 나타낸다. The integration of the exchange-correlation hole density over the space yields $-1$. Exchange-correlation hole을 exchange hole과 correlation hole로 나눌 수 있는데, correlation hole은 integration over the space에 대해서 0이 된다. 이는 correlation energy가 charge density와 neutral charge distribution 사이의 상호작용임을 의미한다 [p. 69 in Kohanoff]. 대신, exchange hole은 $-1$을 주게 되는데, 이는 exchange interaction이 Hartree interaction의 unphysical한 self interaction을 제거해주는 역할을 하기 때문이다.

<!-- REVIEW: [medium] n_{\rm xc}(\mathbf{r}) has the wrong argument count. The xc hole is a two-point object: n_{xc}(r,r') = n(r')[\bar{g}(r,r') - 1], the hole *at r'* around a reference electron held *at r*. With one argument the next sentence ("integration over the space yields -1") is ambiguous about which variable is integrated. -->

<!-- REVIEW: [medium] The sum rule should be stated pointwise, since that is much stronger than an averaged statement and is what actually constrains functionals: \int d r' n_{xc}(r,r') = -1 for *every* r, and separately at every coupling strength \lambda. This is the constraint GGA and meta-GGA hole models are built to satisfy, and it is the same -1 that fails if the N(N-1)/2 normalization of Eqs. (4) and (5) is used. -->

<!-- REVIEW: [medium] The x/c split needs its sign structure, otherwise "correlation hole integrates to zero" reads as "correlation is negligible". n_x(r,r') <= 0 everywhere (a genuine depletion, and a parallel-spin-only object), whereas n_c(r,r') changes sign: negative near the reference electron, positive further out. That sign change is *why* it integrates to zero, and it is exactly the "neutral charge distribution" the text refers to; the correlation hole redistributes charge rather than removing it. -->

<!-- REVIEW: [medium] The causal arrow in the last sentence is backwards. The -1 normalization of the exchange hole is a *consequence* of the antisymmetry of the Kohn-Sham determinant (Pauli exclusion of one parallel-spin electron); the cancellation of the Hartree self-interaction is what that -1 then buys when it is inserted into the Coulomb integral, not its cause. Clean check worth quoting: for a one-electron system n_x(r,r') = -n(r') exactly, hence E_x = -E_H and the self-interaction cancels identically. -->

<!-- REVIEW: [low] This paragraph switches between Korean and English mid-sentence while the rest of the note is in English. Not a physics issue, but n_{xc} is defined for the first time here, so a single language would keep the definition unambiguous for readers. -->

<!-- REVIEW: [priority checklist]
HIGH
1. Factor of 2 in Eqs. (4) and (5): with Eq. (1)'s ordered-pair (i != j) definition, \int\int n g n = N(N-1), not N(N-1)/2. The "total number of pairs = \binom{N}{2}" claim is the source of the slip, and it breaks the -1 xc hole sum rule quoted in the last paragraph.
2. Constant C in Eq. (2) is over-determined: C = 1 is already forced by the first equality of Eq. (4). Drop it or fix the chain.
3. Misconception after Eq. (3): g = 1 means the pair density factorizes, i.e. *pure Hartree* (classical Coulomb fully present, xc absent), not "Coulomb and xc not included".
4. g = 1 does not imply a uniform density; uniformity is a separate jellium assumption.
MEDIUM
5. Eq. (3): the limit is |r - r'| -> \infty, and equals 1 only in the thermodynamic limit; finite N gives 1 - O(1/N) (He: 1/2).
6. Opening paragraph: conditional-density wording ("if the density is given at r" -> "if an electron is found at r"); note \int d r' n g = N-1.
7. Eq. (6): adiabatic connection needs the fixed-density constraint on v_\lambda, and the payoff E_xc = (1/2)\int\int n n (\bar{g} - 1)/|r - r'| is never written down.
8. Last paragraph: n_{xc}(r) needs two arguments, n_{xc}(r,r') = n(r')[\bar{g}(r,r') - 1]; the sum rule holds pointwise in r.
9. Spin labels dropped between Eqs. (1) and (2); the x/c split requires the spin-resolved g_{\sigma\sigma'}.
10. "Reciprocal relation" is nonstandard; it is the exchange symmetry of the pair density and follows from Eq. (1), not Eq. (2).
11. Hole signs: n_x <= 0 everywhere; n_c changes sign, which is why it integrates to zero. Exchange-hole normalization follows from determinantal antisymmetry, not the other way round.
LOW
12. Bar on \bar{g}_x is redundant (exchange part is \lambda-independent).
13. Citations "[Cohen]" and "[p.67 / p.69 in Kohanoff]" need full bibliographic form plus section numbers; verify Kohanoff's pair-density prefactor convention before reusing his relations.
14. LaTeX typos in the \Psi argument list of Eq. (1); \braket needs the MathJax braket/physics extension.
15. Missing short-range counterpart to Eq. (3): Kato cusp condition and on-top value n_x(r,r) = -n(r)/2 (unpolarized).
16. Final paragraph mixes Korean and English.
-->

