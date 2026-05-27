---
title: "Fermi Liquid Theory"
date: 2026-05-27 16:00:00 +0900
categories: [Physics, Many-Body Physics]
tags: [fermi-liquid, many-body, q&a]
math: true
toc: true
---

## Studying the Fermi liquid theory

Here are the questions that I have, and they are answered by Claude. The answers are not copied and pasted directly from the site. Instead, I included some modifications based on my understanding.

<br>

{: .prompt-tip }
> Q1. How did the scattering phase space in the Fermi surface become zero in the second order?

This results from the energy conservation and Pauli's principle. If the quasiparticle $1$ scatters off $2$ to produce $3$ and $4$, the energy conservation gives $\varepsilon_1 + \varepsilon_2 = \varepsilon_3 + \varepsilon_4$. In addition, Pauli's principle states that the final states $3$ and $4$ must be empty ($\varepsilon_3, \varepsilon_4 > 0$), while the initial state $2$ must be filled. Since $0 < \varepsilon_3, \varepsilon_4 < \varepsilon$, there are $\varepsilon^2$ possible states. This limits the phase space. Therefore, $1/\tau \propto \varepsilon^2$ and the scattering on the Fermi surface compresses.

*Additional question*. Is chaotic scattering neglected by this approach? **No**. The adiabatic continuity suppresses the scattering near the Fermi surface. The chaotic scattering becomes important away from the Fermi surface, which breaks the Fermi liquid theory.

<br>

{: .prompt-tip }
> Q2. Why does occupancy parameterize the excitation energy?

The Fermi liquid theory assumed that the low-energy eigenstates are labeled by $\mathbf{p}$ and $\sigma$. Here, the labeling indicates that there is some operator that commutes with the Hamiltonian and forms the compatible set of commuting operators. In addition, labeling by momentum $\mathbf{p}$ and spin $\sigma$ implicitly indicates that there is translational symmetry and $SU(2)$ symmetry. The operator that satisfies these conditions is the density operator: $n^{(0)}\_{\mathbf{p}\sigma} = c^{\dagger}\_{\mathbf{p}\sigma} c_{\mathbf{p}\sigma}$.

However, if the interaction $V$ turns on, $[n^{(0)}\_{\mathbf{p}\sigma}, V] \neq 0$ and the eigenstates generally cannot be labeled by $\mathbf{p}$ and $\sigma$. Here comes the **adiabatic connection**. It connects the eigenstate of noninteracting Hamiltonian $\ket{\Psi^{(0)}\_{n}}$ and that of interacting one:

$$
\begin{equation}
\ket{\Psi_{n}} = U(0,-\infty)\ket{\Psi^{(0)}\_{n}}
\end{equation}
$$

If a gap is opened, there is no topological phase transition or spontaneous symmetry breaking during the adiabatic connection, the same labeling $n_{\mathbf{p}\sigma}$ is allowed for interacting system. This labeling, however, becomes significant only when the quasiparticle peaks $Z_{\mathbf{p}}\delta(\omega-\varepsilon^{*}\_{\mathbf{p}})$ are well-defined. It alternatively implies that it captures the physics for the low-energy excitations near the Fermi surface. That is why one expands the energy around the ground state density. As a matter of fact, the quasiparticle energy is written as a functional of $\delta n_{\mathbf{p}\sigma} = n_{\mathbf{p}\sigma} - n^{(0)}\_{\mathbf{p}\sigma}$:

$$
\begin{equation}
\mathcal{E} = \mathcal{E}_{0} + \sum_{\mathbf{p}\sigma}(E^{(0)}\_{\mathbf{p}\sigma}-\mu)\delta n_{\mathbf{p}\sigma} + \frac{1}{2}\sum_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}\delta n_{\mathbf{p}\sigma}\delta n_{\mathbf{p}'\sigma'}
\end{equation}
$$

where $E^{(0)}\_{\mathbf{p}\sigma}-\mu = \delta\mathcal{E}/\delta n_{\mathbf{p}\sigma}$ and $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'} = \delta^{2} \mathcal{E} / \delta n_{\mathbf{p}\sigma}\delta n_{\mathbf{p}'\sigma'}|\_{\delta n_{\mathbf{p}''\sigma''} = 0}$. Naturally, the quantity $\delta n_{\mathbf{p}\sigma}$ is nonzero only on the shell of Fermi surface, because the excitations occur on the Fermi surface. In addition, Fermi liquid function $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ is expanded as Legendre polynomials. This is because of the **spherical symmetry** implicilty assumed in Fermi liquid theory.

*Additional note*. The fact that symmetry is lowered does **not** mean that labeling is entirely impossible. If there is discrete translational symmetry such as a lattice, $\mathbf{p}$ will be within the Brillouin zone, and if spin-orbit coupling is introduced, total angular momentum can be used instead of $\sigma$. However, if symmetry is spontaneously broken (e.g. ferromagnet), $Z_{\mathbf{p}} \sim 0$ (Mott insulator), or there is a topological phase transition (Cooper condensation), the assumption does not work and Fermi liquid theory fails.

*RG perspective*. In renormalization group language, the second order $\delta n$ remains as *marginal*. The higher-order $\delta n$ is irrelevant and converges to zero in the low-energy sector (Shankar 1994, Polchinski 1992).

<br>

{: .prompt-tip }
> Q3. What is the difference between $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ and $a_{\mathbf{p}\sigma,\mathbf{p}\sigma'}$?

The fundamental difference lies whether the parameter reflects the response of the Fermi sea. The Fermi liquid parameter $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ contains the interaction which assumes that the Fermi sea is ***frozen***. However, the scattering amplitude $a_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ allows the Fermi sea to respond to the interaction. It is given by the solution of Bethe-Salpeter equation. Physically, $a_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ indicates the *screened* scattering amplitude actually measured by an experiment, while $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ explains the energy change when a quasiparticle changes the occupancy.

<br>

{: .prompt-tip }
> Q4. Is it safe to understand 'zero sound' as fast-moving collective motion of electrons?

The zero sound is the collective motion of quasiparticles and is propagated without collisions. Also, it moves 'fast.' However, rather than the fast-moving collective motion, its meaning is close to the deformation of the Fermi surface. The zero sound is the "oscillation of the Fermi surface" with a constant group velocity.

<br>

{: .prompt-tip }
> Q5. Is the difference between charged and neutral Fermi liquid placed in the presence of nonlocal Coulomb interaction?

Yes. The neutral Fermi liquid (e.g. $^{3}$He) has the finite interaction $V(q)$ at $q\rightarrow 0$. In addition, the Fermi liquid parameter is well-defined. However, the charged Fermi liquid (e.g. the electron system) has the divergent interaction $V(q)$. Silin resolved this by separating the long-range component $e^{2}/(\epsilon_{0}q^{2})$ from the Fermi liquid parameter:

$$
\begin{equation}
f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}(\mathbf{q}) = \frac{e^{2}}{\epsilon_{0}q^{2}} + f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}
\end{equation}
$$

where the short-range component $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ is handled by Landau Fermi liquid theory. In addition, $f_{\mathbf{p}\sigma,\mathbf{p}'\sigma'}$ is mediated by "quantum fluctuations" of quasiparticles.

<br>

{: .prompt-tip }
> Q6. Why $\chi_{c}(\mathbf{q}) \sim \chi_{n}$ for $q \ll p_{F}$?

In the charged Fermi liquid, $F^{s}\_{0}$ is replaced by $F^{s}\_{0}(\mathbf{q}) = e^{2}\mathcal{N}^{\*}(0) / \epsilon_{0}q^{2} + \bar{F}^{s}\_{0}$. Since the compressibility for the neutral system is given by $\chi_{n} = \mathcal{N}^{*}(0)/(1+\bar{F}^{s}\_{0})$. The one for the charged Fermi liquid is written as:

$$
\begin{equation}
\chi_{c}(\mathbf{q}) = \frac{\mathcal{N}^{*}(0)}{1 + (e^{2}\mathcal{N}^{*}(0)/\epsilon_{0}q^{2} + \bar{F}^{s}_{0})} = \frac{\chi_{n}}{1 + \kappa^{2}/q^{2}}
\end{equation}
$$

where $\kappa^{2} = e^{2}\chi_{n}/\epsilon_{0}$ is the Thomas-Fermi wavenumber. If the Fermi liquid is neutral, $\kappa = 0$ and the compressibility is reduced to the one for the neutral Fermi liquid. In addition, $\chi_{c}(\mathbf{q})$ acts as the neutral one for large $q$; $\chi_{c}(\mathbf{q}) \sim \chi_{n}$ for $q \gg \kappa$.