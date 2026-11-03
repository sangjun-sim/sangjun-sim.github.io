---
title: Notes on PySTEW
date: 2026-11-03 23:00:00 +0900
categories:
  - Physics
tags:
  - physics
math: true
toc: true
---

## Introduction

Magnetic exchange parameters can be obtained within the Liechtenstein-Katsnelson-Antropov-Gubanov (LKAG) formalism [J. Magn. Magn. Mater. 67, 65 (1987)], which is based on the magnetic force theorem. It assumes a small rigid rotation of a localized magnetic moment, and measures its response by second-order energy change. In particular, one puts a local spin at magnetic transition metal ion. However, this picture can oversimplify the spin rotation in real materials. Some compounds have a significant fraction of magnetic moment at ligand atoms which makes the rigid-rotation picture ambiguous. Critically, even if local spin is well-defined at transition metal site, its rotation can entail spin rotation of the ligand atom due to strong $d$-$p$ hybridization.

Here, my question is "**Can we test a sensitivity of the exchange parameters to the basis choice without Wannierization with different projections?**". I approach this question via change in exchange parameter with respect to basis transformation, implemented in [PySTEW](https://github.com/sangjun-sim/PySTEW) (**Py**thon package for **S**enstivity **T**ests for **E**xchange parameters in a **W**annier basis). Its name is a pun: like a stew that blends several ingredients, it blends Wannier orbitals in controlled proportions and observes how $J_{ij}$ changes. Here, what the basis transformation does is that it mixes $d$ and $p$ orbitals from what we defined in Wannier projection. This transformation can be described as:

$$
\begin{equation}
X(\mathbf R) = \sum_{m,\mathbf R'} (\ket{\mathbf R', b_m}\bra{\mathbf R, d_m} - \ket{\mathbf R, d_m}\bra{\mathbf R', b_m})
\end{equation}
$$

where $\ket{\mathbf R, d_m}$ is the $m$ th $d$ orbital Wannier function at home cell $\mathbf R$, and $\ket{\mathbf R', b_m}$ is the combination of surrounding ligand atoms that are to be mixed with $\ket{\mathbf R, d_m}$:

$$
\begin{equation}
\ket{\mathbf R', b_m} = \sum_{p}c_{m}(\mathbf{R}', p)\ket{\mathbf{R}', p}
\end{equation}
$$

with $\ket{\mathbf{R}', p}$; a state vector of $p$ orbital at $\mathbf{R}'$, and its coefficient $c_{m}(\mathbf{R}',p)$ at $m$ th $d$ orbital. One can choose the coefficient $c_{m}(\mathbf{R}',p)$ as a hopping parameter between $d$ and $p$ orbitals. In the code, $H^{\uparrow\uparrow}$, $H^{\downarrow\downarrow}$, and the average $(H^{\uparrow\downarrow} + H^{\downarrow\uparrow})/2$ are possible [why?]. It satisfies the normalization condition $\sum_{p,\mathbf R}|c_{m}(\mathbf R', p)|^{2} = 1$ so that it can behave as a rotation angle [how?]. As one can see, $X$ is an anti-Hermitian operator ($X^\dagger = -X$). It is because $(\ket{b}\bra{d})^{\dagger} = \ket{d}\bra{b}$. This allows one to write the unitary transformation $V = \exp[\theta X]$ acting on the Hamiltonian:

$$
\begin{equation}
\widetilde H_{\theta}(\mathbf{k}) = V(\mathbf{k})^\dagger H(\mathbf{k}) V(\mathbf{k})
\end{equation}
$$

where $\theta$ is the degree of mixing $d$ and $p$ orbitals.  This is the mixing angle of $p$ and $d$ orbitals; approximately $\exp[X]\ket{d} = \cos \theta \ket{d} + \sin \theta \ket{b}$. The part of this calculation is in the `RotatedWannierHam` class of `PySTEW` code. The reason why I use the transformation in the reciprocal space is because conventional MFT code requires the Hamiltonian in $\mathbf k$ space. Since this is the unitary transformation, it does not modify the band energy. However, I noticed that it alters the occupation and the exchange parameter. Thus, I wanted to quantify:

$$
\begin{equation}
\frac{dJ_{ij}}{dq}
\end{equation}
$$

where $q$ is the occupation of Wannier bases. If it is postive, $J_{ij}$ favors ferromagnetic by the covalency of $d$ and $p$ orbitals. For antiferromagnetic case $J_{ij} < 0$, the covalency increases or decreases the absolute valeu of $J_{ij}$. Let us see how each quantity is transformed under the basis transformation.


## Occupation change under basis transformation

The density matrix per spin is defined as:

$$
\begin{equation}
\rho_{\sigma\sigma'}(\mathbf{k}) = f(H_{\sigma\sigma'}(\mathbf{k})-E_{\rm F})
\end{equation}
$$

where $f(E)$ is the Fermi-Dirac distribution, and $E_{\rm F}$ is the Fermi energy. For collinear magnets, $\rho_{\sigma\sigma'}(\mathbf k) = \rho_{\sigma}(\mathbf k)$. In order to extract the electron number of $j$ th atom from density matrix, let $P_j$ be a projection operator that chooses $j$ th atom orbital: $P_{j} = \sum_{m\in j}\ket{m}\bra{m}$. Then, the Wannier population under the transformation can be expanded as:

$$
\begin{equation}
\begin{aligned}
q_\theta &= \frac{1}{N_{k}}\sum_{\mathbf{k},\sigma}\text{Tr}[P_je^{-\theta X(\mathbf{k})}\rho_{\sigma}(\mathbf{k})e^{\theta X(\mathbf{k})}] \\
&= q_0 + \frac{\theta}{N_{k}}\sum_{\mathbf{k},\sigma}\text{Tr}(P_j[\rho_{\sigma}(\mathbf{k}),X(\mathbf{k})]) + \frac{\theta^{2}}{2N_{k}}\sum_{\mathbf{k},\sigma}\text{Tr}(P_j[[\rho_{\sigma}(\mathbf{k}),X(\mathbf{k})],X(\mathbf{k})]) + O(\theta^{3})
\end{aligned}
\end{equation}
$$

If $\theta = 0$ so that there is no mixing between $d$ and $p$ bases, then $V(\mathbf k) = I$ and $q_\theta = q_0$. Furthermore, if there are  single $\ket{d}$ and normalized $\ket{b}$ satisfying $\braket{b|d} = 0$, the first order term yields $\rho_{db,\sigma}(\mathbf k) + \rho^{*}_{bd,\sigma}(\mathbf k)$:

$$
\begin{equation}
\begin{aligned}
  \text{Tr}(P_j[\rho_{\sigma}(\mathbf{k}),X(\mathbf{k})]) &= \braket{d|\rho_{\sigma}(\mathbf k)X(\mathbf k)|d} - \braket{d|X(\mathbf k)\rho_{\sigma}(\mathbf k)|d} \\
&= \braket{d|\rho_{\sigma}(\mathbf k)|b} + \braket{b|\rho_{\sigma}(\mathbf k)|d} \\
&= \rho_{db,\sigma}(\mathbf k) + \rho^{*}_{bd,\sigma}(\mathbf k)
\end{aligned}
\end{equation}
$$

This corresponds to $d$-$p$ covalency of Wannier bases. Accordingly, the second order term becomes:

$$
\begin{equation}
\begin{aligned}
\text{Tr}(P_j[[\rho_{\sigma}(\mathbf{k}),X(\mathbf{k})],X(\mathbf{k})]) &= \braket{d|O_{\sigma}(\mathbf k)X(\mathbf k)|d} - \braket{d|X(\mathbf k)O_{\sigma}(\mathbf k)|d} \\
&= \braket{d|O_{\sigma}(\mathbf k)|b} + \braket{b|O_{\sigma}(\mathbf k)|d} \\
&= \braket{d|\rho_{\sigma}(\mathbf k)X(\mathbf k)|b} - \braket{d|X(\mathbf k)\rho_{\sigma}(\mathbf k)|b} + \braket{b|\rho_{\sigma}(\mathbf k)X(\mathbf k)|d} - \braket{b|X(\mathbf k)\rho_{\sigma}(\mathbf k)|d} \\
&= 2(\rho_{bb,\sigma}(\mathbf k) - \rho_{dd,\sigma}(\mathbf k))
\end{aligned}
\end{equation}
$$

where $O_{\sigma}(\mathbf k) = [\rho_{\sigma}(\mathbf{k}),X(\mathbf{k})]$. It counts how many charge have been transferred from ligand $p$ to transition metal $d$ orbital.

## Exchange parameter change under basis transformation

For now, I fix with the following Heisenberg Hamiltonian convention:

$$
\begin{equation}
H(\mathbf R) = -\sum_{(i,\mathbf R)\neq (j,\mathbf R')}J_{ij}(\mathbf R' - \mathbf R)\mathbf{S}_{i}(\mathbf R)\cdot\mathbf{S}_{j}(\mathbf R')
\end{equation}
$$

with $i$ th and $j$ th sites and lattice vector $\bf R$. In `TB2J`, $\mathbf S$ is a unit vector, and $J > 0$ denotes the ferromagnetic exchange. LKAG formalism states that $J_{ij}$ reads as:

$$
\begin{equation}
J_{ij}(\mathbf R) = -\frac{1}{4\pi}\text{Im}\int^{+\infty}_{-\infty} dE\,f(E-E_{\rm F})\times\text{Tr}[\Delta_{i}G^{\uparrow\uparrow}_{ij}(\mathbf R, E^{+})\Delta_{j}G^{\downarrow\downarrow}_{ji}(-\mathbf R, E^{+})]
\end{equation}
$$

with $E^+ = E + i0^+$. Here, we have Fermi-Dirac distribution function $f(E-E_{\rm F})$, on-site exchange $\Delta_{i}$, and Green function $G^{\sigma\sigma'}_{ij}(\mathbf R, E)$. Except $f(E-E_{\rm F})$, both on-site exchange and Green function are determined by the Hamiltonian. Therefore, one can obtain their forms under the basis transformation. (*Note*. This procedure is not included in `PySTEW`. The code only transforms the Hamiltonian and gives it to `TB2J` code. In addition, the cyclic property of trace does not make $J_{ij}$ invariant because $V$ matrix mixes orbitals from different atoms.)

### • On-site exchange

On-site exchange can be expanded around the unrotated one; $\Delta_{i,0}$.

$$
\begin{equation}
\begin{aligned}
\widetilde \Delta_{i,\theta} &= [\widetilde H^{\uparrow\uparrow}_{ii,\theta}(\mathbf R = 0)-\widetilde H^{\downarrow\downarrow}_{ii,\theta}(\mathbf R = 0)] \\
&= \frac{1}{N_{k}}\sum_{k}\bigg(H^{\uparrow\uparrow}_{ii,\theta}(\mathbf R = 0)-H^{\downarrow\downarrow}_{ii,\theta}(\mathbf R = 0)\bigg) \\
&\simeq \Delta_{i,0} + \theta\mathcal F^{-1}[\Delta_{i,0},X(\mathbf k)]
\end{aligned}
\end{equation}
$$

where $\mathcal F^{-1}$ denotes the inverse Fourier transformation.

### • Green function

Likewise, Green function is expressed as the expansion of unrotated Green function $G^{\sigma\sigma'}_{ij,0}(\mathbf R, E)$.

$$
\begin{equation}
\begin{aligned}
\widetilde G^{\sigma\sigma'}_{ij,\theta}(\mathbf R, E) &= G^{\sigma\sigma'}_{ij,0}(\mathbf R, E) + \theta\mathcal F^{-1}[G^{\sigma\sigma'}_{0}(\mathbf k, E),X(\mathbf k)] \\
&+ \frac{\theta^2}{2} \mathcal F^{-1}[[G^{\sigma\sigma'}_{0}(\mathbf k, E),X(\mathbf k)], X(\mathbf k)]_{\mathbf R} + O(\theta^{3})
\end{aligned}
\end{equation}
$$

using

$$
\begin{equation}
\begin{aligned}
\widetilde G^{\sigma\sigma'}_{\theta}(\mathbf k, E) &= \frac{1}{E+i0^{+}-\widetilde H^{\sigma\sigma'}_{\theta}(\mathbf k)} \\
&= e^{-\theta X(\mathbf k)}G^{\sigma\sigma'}_{0}(\mathbf k, E)e^{\theta X(\mathbf k)} \\
&= G^{\sigma\sigma'}_{0}(\mathbf k, E) + \theta [G^{\sigma\sigma'}_{0}(\mathbf k, E), X(\mathbf k)] + O(\theta^{2})
\end{aligned}
\end{equation}
$$

If one feeds the rotated on-site exchange and Green function to $J_{ij}$, one can also expand $\widetilde J_{ij,\theta}$ in terms of $\theta$. This expansion implies the $J_{ij}$ change with respect to the basis transformation. First, $\Delta_{i}G^{\uparrow\uparrow}_{ij}(\mathbf R, E^{+})$ part is explicitly written as:

$$
\begin{equation}
\begin{aligned}
\Delta_{i}G^{\uparrow\uparrow}_{ij}(\mathbf R, E^{+}) &= (\Delta_{i,0} + \theta\mathcal F^{-1}[\Delta_{i,0},X(\mathbf k)]) (G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+) + \theta\mathcal F^{-1}[G^{\uparrow\uparrow}_{0}(\mathbf k, E^+),X(\mathbf k)]) \\
&\simeq \Delta_{i,0}G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+) + \theta(\Delta_{i,0} \mathcal F^{-1}[G^{\uparrow\uparrow}_{0}(\mathbf k, E^+),X(\mathbf k)] + \mathcal F^{-1}[\Delta_{i,0},X(\mathbf k)]) G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+)
\end{aligned}
\end{equation}
$$

by the first order of $\theta$. In addition, $\Delta_{j}G^{\downarrow\downarrow}_{ji}(-\mathbf R, E^{+})$ can be described as:

$$
\begin{equation}
\begin{aligned}
\Delta_{j}G^{\downarrow\downarrow}_{ji}(-\mathbf R, E^{+}) &= (\Delta_{j,0} + \theta\mathcal F^{-1}[\Delta_{j,0},X(\mathbf k)]) (G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+) + \theta\mathcal F^{-1}[G^{\downarrow\downarrow}_{0}(\mathbf k, E^+),X(\mathbf k)]) \\
&\simeq \Delta_{j,0}G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+) + \theta(\Delta_{j,0} \mathcal F^{-1}[G^{\downarrow\downarrow}_{0}(\mathbf k, E^+),X(\mathbf k)] + \mathcal F^{-1}[\Delta_{j,0},X(\mathbf k)])G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+)
\end{aligned}
\end{equation}
$$

For simplicity, one puts inverse fourier transformed part $\mathcal F^{-1}O$ as $\hat{O}$. Then, $\Delta_{i}G^{\uparrow\uparrow}_{ij}(\mathbf R, E^{+})\Delta_{j}G^{\downarrow\downarrow}_{ji}(-\mathbf R, E^{+})$ is rewritten as:

$$
\begin{equation}
\begin{aligned}
\Delta_{i}G^{\uparrow\uparrow}_{ij}(\mathbf R, E^{+})\Delta_{j}G^{\downarrow\downarrow}_{ji}(-\mathbf R, E^{+}) &= \Delta_{i,0}G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+)\Delta_{j,0}G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+) \\
&+ \theta[ 
    \Delta_{i,0}G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+)\Delta_{j,0}\hat G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+) + \Delta_{i,0}G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+)\hat\Delta_{j,0}G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+) \\
    &+\Delta_{i,0} \hat G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+)\Delta_{j,0}G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+) +
    \hat \Delta_{i,0}G^{\uparrow\uparrow}_{ij,0}(\mathbf R, E^+)\Delta_{j,0}G^{\downarrow\downarrow}_{ji,0}(-\mathbf R, E^+)
] + O(\theta^2)
\end{aligned}
\end{equation}
$$


One can see that under the small basis mixing $\theta \ll 1$, two effects are included: (1) the variation of on-site exchange due to the $d$ and $p$ orbital mixing, and (2) the change of inter-site Green function $G_{ij}$, which partly absorbs ligand-mediated paths ($d$-$p$-$d$). `PySTEW` code numerically differentiates $J_{ij}(\theta)$ with respect to $q_{\theta}$. If one takes $\theta$ symmetric like ($-\theta$, $0$, $+\theta$), then one can use the central differentiation.