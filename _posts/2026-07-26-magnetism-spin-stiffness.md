---
title: Spin Stiffness
date: 2026-07-26 00:00:00 +0900
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

where $J_{ij} > 0$. If one introduces a rotation of a spin at a site $i$ around the $z$-axis by an angle $\theta_{i}$, the ladder operators transform into:

$$
\begin{align}
S^{+}_{i} &\rightarrow S^{+}_{i}e^{i\theta_{i}}, \nonumber \\
S^{-}_{i} &\rightarrow S^{-}_{i}e^{-i\theta_{i}}
\end{align}
$$

The sign of an angle is reversed since the two operators are in Hermitian conjugate relations. Plugging these into the spin Hamiltonian, the Hamiltonian is modified as:

$$
\begin{align}
H(\theta_{i},\theta_{j}) &= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}(S^{+}_{i}S^{-}_{j}e^{i(\theta_{i}-\theta_{j})} + S^{-}_{i}S^{+}_{j}e^{-i(\theta_{i}-\theta_{j})}) + S^{z}_{i}S^{z}_{j}\right] \nonumber\\
&\simeq \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}\left(S^{+}_{i}S^{-}_{j} \left(1+i\theta_{ij}-\frac{1}{2!}\theta^{2}_{ij}\right) + S^{-}_{i}S^{+}_{j} \left(1-i\theta_{ij}-\frac{1} {2!}\theta^{2}_{ij}\right) \right) + S^{z}_{i}S^{z}_{j}\right] \nonumber \\
&= H_{\rm Heisenberg} + \sum\limits_{\braket{ij}}J_{ij}\frac{i\theta_{ij}}{2}[S^{+}_{i}S^{-}_{j}-S^{-}_{i}S^{+}_{j}] - \sum\limits_{\braket{ij}}J_{ij}\frac{\theta^{2}_{ij}}{4}[S^{+}_{i}S^{-}_{j}+S^{-}_{i}S^{+}_{j}] \nonumber\\
&= H_{\rm Heisenberg} + \sum\limits_{\braket{ij}} (\mathcal{J}_{ij} - \frac{1}{2}\mathcal{T}_{ij}\theta_{ij})\theta_{ij}
\end{align}
$$

where $\theta\_{ij}$ is the difference of angles $\theta\_{i}$ and $\theta\_{j}$ ($\theta\_{ij} \equiv \theta\_{i} - \theta\_{j}$), $\mathcal{J}\_{ij}$ is the spin current operator, and $\mathcal{T}\_{ij}$ is referred to as the spin kinetic energy since they have similar forms with the fermionic current and hopping operators:

$$
\begin{align}
\mathcal{J}_{ij} &= \frac{i}{2}J_{ij}[S^{+}_{i}S^{-}_{j}-S^{-}_{i}S^{+}_{j}], \\
\mathcal{T}_{ij} &= \frac{1}{2}J_{ij}[S^{+}_{i}S^{-}_{j}+S^{-}_{i}S^{+}_{j}]
\end{align}
$$

Using the Rayleigh-Schrödinger perturbation theory, the perturbed energy is given by:

$$
\begin{align}
\braket{0|H(\theta_{i},\theta_{j})|0} &= \braket{0|H_{\rm Heisenberg}|0} + \braket{0|\sum\limits_{\braket{ij}}\mathcal{J}_{ij}\theta_{ij}|0} -\frac{1}{2} \braket{0|\sum\limits_{\braket{ij}}\mathcal{T}_{ij}\theta^{2}_{ij}|0} \nonumber \\
&+ \sum\limits_{\nu\neq 0}\frac{1}{E_{0}-E_{\nu}}\sum\limits_{\braket{ij}}\sum\limits_{\braket{kl}}\left[ \theta_{ij}\theta_{kl} \braket{0|\mathcal{J}_{ij}|\nu}\braket{\nu|\mathcal{J}_{kl}|0} \right] + O(\theta^{4})
\end{align}
$$

For simplicity, let us assume $J_{1}$ model on the square lattice without frustration (see References: [1](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.50.3415) and [2](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.51.6151) for $J_{1}-J_{2}$ model), and introduce a uniform twist $\theta$ between each pair of adjacent rows along the $x$ direction:

$$
\begin{equation}
\theta_{ij} = \theta[(\mathbf{r}_{j}-\mathbf{r}_{i})\cdot\hat{\mathbf{x}}]
\end{equation}
$$

With a consistent orientation of the twisted bonds ($j = i + x$), one defines the following operators:

$$
\begin{equation}
\hat{J}_{x} = \sum_{i}\mathcal{J}_{i,i+\hat{x}},~~\text{and}~~\hat{T}_{x} = \sum_{i}\mathcal{T}_{i,i+\hat{x}}
\end{equation}
$$

Then, the perturbed energy can be rewritten as:

$$
\begin{align}
\braket{0|H(\theta)|0} &= \braket{0|H_{\rm Heisenberg}|0} + \theta\braket{0|\hat{J}_{x}|0} -\frac{\theta^{2}}{2} \braket{0|\hat{T}_{x}|0} \nonumber \\
&+ \theta^{2}\sum\limits_{\nu\neq 0}\frac{\braket{0|\hat{J}_{x}|\nu}\braket{\nu|\hat{J}_{x'}|0}}{E_{0}-E_{\nu}} + O(\theta^{4})
\end{align}
$$

Here, the spin stiffness $\rho_{s}$ is defined as a constant that represents the change in the ground state energy as a consequence of introducing a slow in-plane twist of the spins:

$$
\begin{align}
\rho_{s} &\equiv \left. \frac{1}{N}\frac{d^{2}}{d\theta^{2}}\braket{0|H(\theta)|0} \right|_{\theta=0} \nonumber \\
&= -\frac{1}{N} \braket{0|\hat{T}_{x}|0} + \frac{2}{N}\sum\limits_{\nu\neq 0}\frac{\braket{0|\hat{J}_{x}|\nu}\braket{\nu|\hat{J}_{x'}|0}}{E_{0}-E_{\nu}}
\end{align}
$$

where $N$ is the number of sites. Note that the spin stiffness is also the competition between the diamagnetic rigidity and the paramagnetic screening due to the virtual spin current.
