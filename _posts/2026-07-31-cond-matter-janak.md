---
title: A short note on Janak theorem
date: 2026-07-31 17:00:00 +0900
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

## A short note on Janak theorem

The total energy derived by the Kohn-Sham (KS) equation, $E[n]$ inherently does not have any physical meaning. In the Hartree-Fock approximation, the energy required to subtract or add an electron from a single orbital is the eigenvalue, as Koopman's theorem states. However, in the KS scheme, such energy is not the eigenvalue. Instead, the KS eigenvalue truly becomes the ground state energy $E_{0}$ when the number of particles is the integer value $N$ and the eigenvalue can be minimized by $\Theta_{i}$. However, the occupation $\Theta_{i}$ can be fractional. In this case, the number of particles $N$ becomes a non-integer value $N+\alpha$ with $0 \le \alpha \le 1$.
<!-- REVIEW: [high] This opening claim is inverted. In KS-DFT the total energy $E[n]$ evaluated at the self-consistent density IS physically meaningful: at integer $N$ it equals the (KS-)ground-state total energy $E_0$. What generally lacks a direct physical interpretation are the individual KS eigenvalues $\varepsilon_i$ (with the exception of the HOMO/highest occupied level, via the exact-DFT ionization-potential theorem). Janak's theorem exists precisely to endow those eigenvalues with meaning as derivatives of the meaningful total energy. Suggest rewording to "the KS eigenvalues inherently do not have physical meaning." -->
<!-- REVIEW: [high] "the KS eigenvalue truly becomes the ground state energy $E_0$ ... and the eigenvalue can be minimized by $\Theta_i$" conflates a single eigenvalue with the total energy. It is $E[n]$, not an eigenvalue, that attains $E_0$ at the variational minimum for integer $N$; a single $\varepsilon_i$ is never the ground-state energy. Also "the eigenvalue can be minimized by $\Theta_i$" is garbled — the energy is minimized with respect to the orbitals/density at fixed integer particle number, not "by" the occupation. Recommend rephrasing. -->
<!-- REVIEW: [medium] Spelling/attribution: "Koopman's theorem" -> "Koopmans' theorem" (Tjalling C. Koopmans). Also state it as approximate: it holds only under the frozen-orbital assumption and neglects orbital relaxation and correlation. By the usual sign convention the eigenvalue is MINUS the removal/addition energy: $\mathrm{IP}\approx-\varepsilon_{\text{HOMO}}$, $\mathrm{EA}\approx-\varepsilon_{\text{LUMO}}$ — the eigenvalue is not "the energy required" itself. -->
<!-- REVIEW: [low] Notation: $\Theta$ commonly denotes the Heaviside step function; using $\Theta_i$ for a (fractional) occupation may confuse readers. Consider $f_i$ or $n_i$, the more standard symbols in the Janak/Slater literature. -->


If the KS eigenvalue is differentiable with respect to $\Theta_i$, then the KS total energy $E[n]$ naturally provides the continuous interpolation between the energies with the integer number of particles; say $N$ and $N+1$. With the orthonormalized eigenstates, the explicit derivative of the KS eigenvalue with respect to $\Theta_{i}$ is given by:
<!-- REVIEW: [medium] Imprecise premise: the differentiability assumption concerns the total energy $E$ as a function of the occupation $\Theta_i$, not "the KS eigenvalue." At a point where this derivative exists, Janak's theorem states $\partial E/\partial\Theta_i=\varepsilon_i$. Rephrase "If the KS eigenvalue is differentiable" -> "If $E$ is differentiable in $\Theta_i$." In exact ensemble DFT, $E(N)$ is piecewise linear between adjacent integers and generally has a derivative discontinuity at integer $N$, so it should not be described as globally smooth or $C^1$. -->
<!-- REVIEW: [low] Minor wording: this is the derivative of the total energy $E$ w.r.t. $\Theta_i$, not "of the KS eigenvalue." The equation block below correctly differentiates $E$. -->


$$
\begin{align}
\frac{\partial E}{\partial \Theta_{i}} &= \frac{\partial T}{\partial \Theta_{i}} + \frac{\partial E_{\text{H}}}{\partial \Theta_{i}} + \frac{\partial E_{\text{ext}}}{\partial \Theta_{i}} + \frac{\partial E_{\text{xc}}}{\partial \Theta_{i}} \nonumber \\
&= \varepsilon_{i} + \sum\limits_{j}\Theta_{j} \int d^{3}\mathbf{r} \frac{\partial \varphi^{*}_{j}(\mathbf{r})}{\partial \Theta_{i}} [ -\frac{\hbar^{2}}{2m}\nabla^{2} + v_\text{H}(\mathbf{r}) + v_\text{ext}(\mathbf{r}) + v_\text{xc}(\mathbf{r})] \varphi_{j}(\mathbf{r}) + \text{c.c.} \nonumber \\
&= \varepsilon_{i} + \sum\limits_{j}\Theta_{j} \int d^{3}\mathbf{r} \frac{\partial \varphi^{*}_{j}(\mathbf{r})}{\partial \Theta_{i}} \varepsilon_{j} \varphi_{j}(\mathbf{r}) + \text{c.c.} \nonumber \\
&= \varepsilon_{i} + \sum\limits_{j}\Theta_{j} \varepsilon_{j} \frac{\partial}{\partial \Theta_{i}} \int d^{3}\mathbf{r} |\varphi_{j}(\mathbf{r})|^{2} (=1)
\end{align}
$$
<!-- REVIEW: [low] The algebra is correct, but line 2 hides a key step worth stating: the EXPLICIT variation of the $\Theta_i$ prefactor (kinetic term) plus the $|\varphi_i|^2$ piece of $\partial n/\partial\Theta_i$ acting through $v_H+v_\text{ext}+v_\text{xc}$ combine into $\int d^3\mathbf{r}\,\varphi_i^*\hat H_{\text{KS}}\varphi_i=\varepsilon_i$ (using normalization). Making the identity $\hat H_\text{KS}=-\tfrac{\hbar^2}{2m}\nabla^2+v_\text{KS}$, $v_\text{KS}=v_H+v_\text{ext}+v_\text{xc}$ explicit would close the derivation gap. -->
<!-- REVIEW: [medium] State the assumptions the last line relies on: (i) the orbitals remain orthonormal as $\Theta_i$ varies, so $\partial_{\Theta_i}\!\int|\varphi_j|^2=\partial_{\Theta_i}(1)=0$ (this kills the entire implicit-orbital sum, which is the crux); and (ii) the exact functional derivatives $\delta E_H/\delta n=v_H$, $\delta E_\text{ext}/\delta n=v_\text{ext}$, $\delta E_\text{xc}/\delta n=v_\text{xc}$ are used. Without (i) explicitly, the vanishing of the $\sum_j\Theta_j\varepsilon_j\,\partial_{\Theta_i}\!\int|\varphi_j|^2$ term looks unmotivated. -->


Therefore, one gets:

$$
\begin{equation}
\therefore \frac{\partial E}{\partial \Theta_{i}} = \varepsilon_{i}
\end{equation}
$$

Here, we took advantage of the fact that the derivative of density for occupation is given by:

$$
\begin{equation}
\frac{\partial n}{\partial \Theta_{i}} = |\varphi_{i}(\mathbf{r})|^{2} + \sum\limits_{j} \Theta_{j}\frac{\partial |\varphi_{j}(\mathbf{r})|^{2}}{\partial \Theta_{i}}
\end{equation}
$$

Then we used the KS equation to separate the real-valued $\varepsilon_{i}$ and the expression that is given by a derivative for the occupation of the eigenstate. The relationship is called Janak's theorem (or Slater-Janak's theorem). Using this theorem, we can find out what physical meaning the eigenvalue obtained from the KS equation has.
<!-- REVIEW: [medium] The note stops right before delivering its payoff. The physical meaning follows by integrating Janak's theorem over the occupation: $E(N)-E(N-1)=\int_0^1 \varepsilon_{\text{HOMO}}(\Theta)\,d\Theta$, i.e. the ionization energy is (minus) the occupation-averaged HOMO eigenvalue — Slater's transition-state idea, and, in exact DFT, $-\varepsilon_{\text{HOMO}}$ at integer $N$ equals the ionization potential. Adding one or two closing sentences would complete the argument. -->
<!-- REVIEW: [low] Citation/source: attribute the result to J. F. Janak, "Proof that $\partial E/\partial n_i=\varepsilon_i$ in density-functional theory," Phys. Rev. B 18, 7165 (1978); and the "Slater-Janak" naming to J. C. Slater's transition-state method (Adv. Quantum Chem. 6, 1 (1972)). A reference to the exact-DFT IP theorem (Perdew, Parr, Levy, Balduz, PRL 49, 1691 (1982); Almbladh & von Barth, PRB 31, 3231 (1985)) would support the "physical meaning" claim. -->
<!-- REVIEW: priority checklist — [high] (1) fix inverted opening claim: KS TOTAL energy is meaningful, KS EIGENVALUES generally are not; (2) fix "eigenvalue becomes ground-state energy / minimized by $\Theta_i$" conflation of eigenvalue vs total energy. [medium] (3) "Koopman's"->"Koopmans'", note it is approximate and sign is $-\varepsilon$; (4) differentiability premise is about $E$, not the eigenvalue; (5) state orthonormality + exact-$v_\text{xc}$ assumptions that make the implicit-orbital sum vanish; (6) complete the derivation with the IP/transition-state result. [low] (7) $\Theta_i$ vs $f_i$ occupation notation; (8) make $\hat H_\text{KS}=-\tfrac{\hbar^2}{2m}\nabla^2+v_\text{KS}$ step explicit; (9) add Janak (1978)/Slater/Perdew citations. -->
