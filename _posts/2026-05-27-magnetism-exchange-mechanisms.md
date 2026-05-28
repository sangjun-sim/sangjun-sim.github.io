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

## Spin stiffness

{: .prompt-info }
> **Definition of spin stiffness**
>
> The spin stiffness is a constant that represents the change in the ground state energy of a spin system as a result of introducing a slow in-plane twist of the spins.

One starts off with the [Heisenberg model]({{ '/posts/magnetism-heisenberg-model/' | relative_url }}):

$$
\begin{equation}
H_{\rm Heisenberg} = \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}(S^{+}_{i}S^{-}_{j} + S^{-}_{i}S^{+}_{j}) + S^{z}_{i}S^{z}_{j}\right]
\end{equation}
$$

If one introduces a rotation of a spin at a site $i$ around the $z$-axis by an angle $\theta_{i}$, the creation and annihilation operators transform into:

$$
\begin{align}
S^{+}_{i} &\rightarrow S^{+}_{i}e^{i\theta_{i}}, \nonumber \\
S^{-}_{i} &\rightarrow S^{-}_{i}e^{-i\theta_{i}}
\end{align}
$$

The sign of an angle is reversed since the two operators are in complex conjugation relations. Note that this is **not the gauge transformation** that makes the eigenvalue invariant. Plugging these into the spin Hamiltonian, the Hamiltonian is modified as:

$$
\begin{align}
H(\theta_{i},\theta_{j}) &= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}(S^{+}_{i}S^{-}_{j}e^{i(\theta_{i}-\theta_{j})} + S^{-}_{i}S^{+}_{j}e^{-i(\theta_{i}-\theta_{j})}) + S^{z}_{i}S^{z}_{j}\right] \nonumber\\
&\simeq \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}\left(S^{+}_{i}S^{-}_{j} \left(1+i\theta_{ij}-\frac{1}{2!}\theta^{2}_{ij}\right) + S^{-}_{i}S^{+}_{j} \left(1-i\theta_{ij}-\frac{1} {2!}\theta^{2}_{ij}\right) \right) + S^{z}_{i}S^{z}_{j}\right] \nonumber \\
&= H_{\rm Heisenberg} + \sum\limits_{\braket{ij}}J_{ij}\frac{i\theta_{ij}}{2}[S^{+}_{i}S^{-}_{j}-S^{-}_{i}S^{+}_{j}] - \sum\limits_{\braket{ij}}J_{ij}\frac{\theta^{2}_{ij}}{4}[S^{+}_{i}S^{-}_{j}+S^{-}_{i}S^{+}_{j}] \nonumber\\
&= H_{\rm Heisenberg} + \sum\limits_{\braket{ij}} (\mathcal{J}_{ij} - \frac{1}{2}\mathcal{T}_{ij}\theta_{ij})\theta_{ij} 
\end{align}
$$

where $\mathcal{J}\_{ij}$ is the spin current operator and $\mathcal{T}\_{ij}$ is referred to as the spin kinetic energy since they have similar forms with the fermionic current and hopping operators:

$$
\begin{align}
\mathcal{J}_{ij} &= J_{ij}\frac{i}{2}[S^{+}_{i}S^{-}_{j}-S^{-}_{i}S^{+}_{j}], \\
\mathcal{T}_{ij} &= J_{ij}\frac{1}{2}[S^{+}_{i}S^{-}_{j}+S^{-}_{i}S^{+}_{j}]
\end{align}
$$

For simplicity, let us assume $J_{1}$ model and introduce a uniform twist $\theta$ between each pair of adjacent rows, i.e. $\theta\_{ij} = \theta[(\mathbf{r}\_{i}-\mathbf{r}\_{j})\cdot\hat{\mathbf{x}}]$ (see References: [1](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.50.3415) and [2](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.51.6151) for $J_{1}-J_{2}$ model). Using the perturbation theory, the energy is given by:

$$
\begin{equation}
\braket{H(\theta_{i},\theta_{j})} = \braket{H_{\rm Heisenberg}} + \braket{\sum\limits_{\braket{ij}}\mathcal{J}_{ij}\theta_{ij}} + \braket{\sum\limits_{\braket{ij}}-\frac{1}{2}\mathcal{T}_{ij}\theta^{2}_{ij}} +  \sum\limits_{\braket{ij}}\sum\limits_{\nu\neq 0}\frac{\theta^{2}_{ij}|\braket{0|\mathcal{J}_{ij}|\nu}|^{2}}{E_{0}-E_{\nu}} + O(\theta^{4})
\end{equation}
$$

where

$$
\begin{align}
\braket{\sum\limits_{\braket{ij}}\mathcal{J}_{ij}\theta_{ij}} &= \frac{i\theta}{2}\braket{\sum\limits^{N}_{i}J_{i,i+x}[S^{+}_{i}S^{-}_{i+x}-S^{-}_{i}S^{+}_{i+x}]} \nonumber\\
&= \frac{iJ\theta}{2}\sum\limits^{N}_{i} [\braket{S^{+}_{i}S^{-}_{i+x}}-\braket{S^{-}_{i}S^{+}_{i+x}}] \nonumber\\
&= \frac{iNJ\theta}{2} [\delta_{i,i+x}-\delta_{i+x,i}] = 0, \nonumber \\
\braket{\sum\limits_{\braket{ij}}-\frac{1}{2}\mathcal{T}_{ij}\theta^{2}_{ij}} &= -\frac{\theta^{2}}{4}\braket{\sum\limits^{N}{i}J_{i,i+x}[S^{+}_{i}S^{-}_{i+x}+S^{-}_{i+x}S^{+}_{i}]} \nonumber\\
&= -\frac{J\theta^{2}}{4}\sum\limits^{N}_{i}[\braket{S^{+}_{i}S^{-}_{i+x}}+\braket{S^{-}_{i+x}S^{+}_{i}}] \nonumber\\
&= -\frac{NJ\theta^{2}}{4}[\delta_{i,i+x}+\delta_{i+x,i}] 
\end{align}
$$