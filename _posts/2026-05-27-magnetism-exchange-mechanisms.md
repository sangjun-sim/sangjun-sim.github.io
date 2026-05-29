---
title: Exchange Mechanisms
date: 2026-05-27 21:00:00 +0900
categories:
  - Physics
  - Magnetism
tags:
  - magnetism
math: true
toc: true
---


## RKKY exchange

Magnetic exchange interactions can originate from the specific occupation of $d$ orbitals or exchange path. Another mechanism that drives exchange interaction appears in systems where localized magnetic moments coexist with itinerant electrons, such as in doped Mott insulators, orbital-selective Mott insulators, etc. In these systems, the coupling between localized spins and itinerant ones mediates an effective exchange interaction between the localized spins. This exchange interaction that is mediated by the carrier can be either ferromagnetic or antiferromagnetic, depending on the density and distance between spins.

The interaction of localized electrons through the conduction electrons is the well-known RKKY exchange interaction. This exchange interaction assumes a circumstance where one local spin polarizes the itinerant electrons, and those electrons polarize another local spin. RKKY shows long-range interaction and oscillates with the distance $r$ between the localized electrons. 

For a three-dimensional free electron gas at zero temperature, the effective exchange interaction parameter can be written as:

$$
\begin{equation}
J(r) \propto \frac{I^{2}}{\varepsilon_{F}} \frac{\cos(2k_{F}r)}{r^{3}}
\end{equation}
$$

where $\varepsilon_{F}$ is the Fermi level, $k_{F}$ is the Fermi wave vector, and $I$ is the $s$-$d$ exchange parameter. 

Assuming that $\varepsilon_{F} \gg I$, $J(r)$ appears to be second order in the following exchange interaction between localized and itinerant electrons:

$$
\begin{equation}
I_{ik}\mathbf{S}_{i}\cdot c^{\dagger}_{k\sigma}\hat{\boldsymbol{\sigma}}c_{k\sigma}
\end{equation}
$$

where $\hat{\boldsymbol{\sigma}}$ is the spin of itinerant (band) electrons. The physical origin of $I$ can be either $s-d$ hybridization or a local intra-atomic interaction. One can notice that the RKKY exchange is proportional to $I^{2}$. This indicates that the sign of the $I$ does not change the magnetic structure. However, the location of the localized electron relative to the period of oscillation of the exchange is crucial [Khomskii].

## Double exchange

The opposite case of the RKKY exchange, in which the local $s$-$d$ exchange is at least comparable with or larger than $\varepsilon_{F}$ ($\varepsilon_{F} \le I$), leads to double exchange. This exchange is connected with doping and the spontaneous appearance of metallic conductivity. For example, some oxides (e.g. Sr doped LaMnO$_{3}$) show the ferromagnetic exchange because of the magnetic ion's mixed valency [Blundell]. The simple model to describe this mechanism deals with the localized electrons and coexisting doped electrons occupying a narrow band:

$$
\begin{equation}
H_{\rm DE} = -t\sum\limits_{\braket{ij},\sigma}c^{\dagger}_{i\sigma}c_{j\sigma} - J_{H}\sum\limits_{i}\mathbf{S}_{i}\cdot c^{\dagger}_{i\sigma}\hat{\sigma}c_{i\sigma} + J\sum\limits_{\braket{ij}}\mathbf{S}_{i}\cdot\mathbf{S}_{j}
\end{equation}
$$

where $c_{i\sigma}$ denotes the operator of conduction electrons with intersite hopping $t$. The term with $J_{H}$ is the Hund's exchange with localized electrons with the total spin $\mathbf{S}_{i}$, and the last term is the Heisenberg exchange between the localized spins. In the presence of the itinerant electrons, the influence of the kinetic energy of electrons gives a tendency to the ferromagnetic ordering. Imagine the itinerant spin $\sigma$, and two localized spins $\mathbf{S}_{i}$ and $\mathbf{S}_{j}$. The illustration of this circumstance is shown in Figure. 5.17. For ferromagnetic configuration, the itinerant spin quickly gets mobile, but the hopping becomes suppressed for antiferromagnetic configuration, which costs large Hund's energy $J_{\rm H}$. If $t \lt J_{\rm H}$, the conduction electron will be locked at the local site in the antiferromagnetic configuration and will not be able to gain its kinetic energy. Thus, in order to realize the ferromagnetic phase, one requires a change in the magnetic structure of localized spins [Khomskii].

Depending on the doping concentration, the localized spins can be ferromagnetic or canted antiferromagnetic. Here, both configurations can reduce the exchange energy. The relationship between the canting angle and the model parameters can be obtained by a simple 1D chain model. In the limit of $J_{\rm H} \gg t$, one can show that hopping between two sites with an angle $\theta$ is given by:

$$
\begin{equation}
t_{\rm eff} = t\cos \frac{\theta}{2}
\end{equation}
$$

where the phase factor $e^{i\phi}$ is ignored, which can play an essential role in topological effects. Then, the total energy of the Hamiltonian becomes:

$$
\begin{equation}
E = Nz(-tx\cos \frac{\theta}{2} + JS^{2}\cos\theta)
\end{equation}
$$

where $z$ is the number of nearest neighbors, $x$ is the doping concentration and $N$ is the number of total sites. Minimizing the energy in the angle $\theta$ reads:

$$
\begin{align}
\frac{\partial E}{\partial \theta} &= Nz\left(\frac{tx}{2}\sin\frac{\theta}{2}-JS^{2}\sin\theta\right) = 0 \nonumber \\
\therefore \cos\frac{\theta}{2} &= \frac{tx}{4JS^{2}}
\end{align}
$$

This equation implies that the canting angle increases gradually with $x$ until at: $x_{c} = 4JS^{2}/t$. Here, the canted state does not appear for arbitrary small doping concentration. Instead, there exists a lower critical concentration $\tilde{x}_{c}$ where the material will remain antiferromagnetic [Khomskii].

## Dzyaloshinskii-Moryia interaction

The Dzyaloshinskii-Moryia interaction originates from the superexchange and the spin-orbit coupling. The Hamiltonian, including the spin-orbit coupling, reads:

$$
\begin{equation}
H = \sum\limits_{i\sigma} \varepsilon_{i}c^{\dagger}_{i\sigma}c_{i\sigma} + \sum\limits_{\braket{ij}} [Xc^{\dagger}_{i\uparrow}c_{j\uparrow} + Yc^{\dagger}_{i\downarrow}c_{j\downarrow} + Zc^{\dagger}_{i\uparrow}c_{j\downarrow} + Wc^{\dagger}_{i\downarrow}c_{j\uparrow}]
\end{equation}
$$

where $\varepsilon_{i}$ is the on-site energy, $i$ is the site index, and $\sigma$ is the spin index. In addition, $X$, $Y$, $Z$, and $W$ are given by:

$$
\begin{align}
X &= \braket{\psi_{i\uparrow}|H'|\psi_{j\uparrow}} = t_{ij} + C^{z}_{ij}, \nonumber \\
X &= \braket{\psi_{i\downarrow}|H'|\psi_{j\downarrow}} = t_{ij} - C^{z}_{ij}, \nonumber \\
X &= \braket{\psi_{i\uparrow}|H'|\psi_{j\downarrow}} = C^{x}_{ij} - iC^{y}_{ij}, \nonumber \\
W &= \braket{\psi_{i\downarrow}|H'|\psi_{j\uparrow}} = C^{x}_{ij} + iC^{y}_{ij}
\end{align}
$$

where $t$ and $C$ indicate the hopping parameter and the spin-orbit coupling matrix, respectively:

$$
\begin{gather}
H' = \frac{p^{2}}{2m} + V(r) + \frac{\hbar^{2}}{2m^{2}c^{2}}\mathbf{S}\cdot[\nabla V(\mathbf{r})\times\mathbf{p}], \\
t_{ij} = \sum\limits_{\sigma}\braket{\psi_{i\sigma}|\frac{p^{2}}{2m} + V(r)|\psi_{j\sigma}},\\
\mathbf{C}_{ij} = \braket{\psi_{i\sigma}|\frac{\hbar^{2}}{2m^{2}c^{2}}\mathbf{S}\cdot[\nabla V(\mathbf{r})\times\mathbf{p}]|\psi_{j\sigma'}}
\end{gather}
$$
