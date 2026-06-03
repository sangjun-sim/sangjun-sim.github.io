---
title: Su-Schrieffer-Heeger model
date: 2026-06-03 14:00:00 +0900
categories:
  - Physics
  - Topology
tags:
  - physics
  - cond-matter
  - topology
  - phase-transition
  - symmetry
math: true
toc: true
---

{: .prompt-info }
This is a draft on the Su-Schrieffer-Heeger model. Please exercise caution when reading this document.

The Hamiltonian of the Su-Schrieffer-Heeger model is written as:

$$
\begin{equation}
H = \sum^{N}_{i=1}(t+\delta t)c^{\dagger}_{A,i}c_{B,i} + \sum^{N-1}_{i=1}(t-\delta t)c^{\dagger}_{A,i+1}c_{B,i} + c.c.
\end{equation}
$$

Here, one can show that the Su-Schrieffer-Heeger model has chiral symmetry. The chiral symmetry is the multiplication of the particle-hole symmetry $C$ and the time-reversal symmetry $T$. The Fourier transformation of the Hamiltonian gives:

$$
\begin{equation}
H(k) = (t+\delta t)\sum\limits_{k}(a^{\dagger}_{k}b_{k}+b^{\dagger}_{k}a_{k}) + (t-\delta t)\sum\limits_{k}(e^{ik}a^{\dagger}_{k}b_{k}+e^{-ik}b^{\dagger}_{k}a_{k})
\end{equation}
$$

where $a_{k}$ and $b_{k}$ are the Fourier-transformed annihilation operators of $c_{A,i}$ and $c_{B,i}$, respectively. One can simply express the Hamiltonian above by defining the spinor $\psi_{k}$ as follows:

$$
\begin{equation}
\psi_{k} = \begin{bmatrix} a_{k} \\ b_{k} \end{bmatrix}
\end{equation}
$$

The simplified Hamiltonian is written as:

$$
\begin{equation}
H(k) = \sum\limits_{k} \psi^{\dagger}_{k}[\{(t+\delta t) + (t-\delta t)\cos k\}\sigma_{x} + (t-\delta t)\sin k \sigma_{y}] \psi_{k}
\end{equation}
$$

Applying the unitary transformation $U = e^{-i\sigma_{y}}$, the momentum $k$ becomes $k \rightarrow k + \pi$, and the Pauli matrices lead to:

$$
\begin{equation}
\sigma_{x} \rightarrow \sigma_{z}, ~ \sigma_{y} \rightarrow \sigma_{x}, ~ \sigma_{z} \rightarrow \sigma_{y}
\end{equation}
$$

Thus, the Hamiltonian reads:

$$
\begin{align}
U^{\dagger}H(k)U &= \sum\limits_{k} \psi^{\dagger}_{k} [-(t-\delta t)\sin k \sigma_{x} + \{2\delta t + 2 (t-\delta t)\sin^{2} \frac{k}{2}\} \sigma_{z}] \psi_{k} \nonumber \\
&= \sum\limits_{k} \psi^{\dagger}_{k} [\mathbf{d}_1 \cdot \sigma_{x} + \mathbf{d}_0 \cdot \sigma_{z}] \psi_{k}
\end{align}
$$

where

$$
\begin{align}
\mathbf{d}_{0} &= 2\delta t + 2 (t-\delta t)\sin^{2} \frac{k}{2} \nonumber \\
\mathbf{d}_{1} &= -(t-\delta t)\sin k \cdot \mathbb{I}
\end{align}
$$

This Hamiltonian anti-commutes with the $y$-component of the Pauli matrix $\sigma_{y}$. This indicates that the Hamiltonian has the chiral symmetry. The Berry phase evaluated from the eigenstate can be given by two values:

$$
\begin{equation}
\gamma = \begin{cases}
0,~~\text{for}~~\delta t > 0~~\text{or}~~\delta t = 0, \\
\pi,~~\text{for}~ ~\delta t < 0
\end{cases}
\end{equation}
$$

depending on the value of the modulation of the hopping amplitude $\delta t$. One can notice that there is a transition point at $\delta t = 0$ since the Berry phase can have a nonzero value according to the value of $\delta t$. From the perspective of the band structure, the band gap of the two bands closes when $\delta t = 0$, and the gap reopens as $\delta t$ moves away from zero. Thus, one concludes that the two phases ($\delta t > 0$ and $\delta t < 0$) are topologically distinct. This argument can be expanded into the topological ferromagnet and the $p$-wave topological superconductor. For the former, one replaces the spinor $\psi_{k}$ into the electrons with the different spins; $[c_{k,\uparrow}, c_{k,\downarrow}]$. In addition, if the spinor is written as Nambu spinor $\Phi_{k}$ and once the particle-hole transformation only applies to one of the sites, the discussion of topological phase transition is equally treated as Kitaev $p$-wave superconductor (See PRB **50**, 16086 (1994)).
