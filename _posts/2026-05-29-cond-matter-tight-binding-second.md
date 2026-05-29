---
title: Tight-binding approximation (2)
date: 2026-05-29 21:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
math: true
toc: true
---

## Tight-binding approximation in the second quantization formalism

The second quantization gives a viewpoint that the particle (or wave) is a state, not a function. The characteristics of the second quantization are to (1) describe the many-body states simultaneously and (2) to interpret the excitation of the $n$th state as the creation of $n$ particles. For the system of zero fermionic particles, one writes the state as $\ket{j=0}$, and this state is called a vacuum state. The vacuum state is formally defined by the annihilation operator. Applying the operation of annihilation results in a zero eigenvalue $c_{j}\ket{0} = 0$. In addition, one can create a fermion at the site $j$ by acting as the creation operator on the vacuum state; $c^{\dagger}_{j}\ket{0} = \ket{j}$.

There is an important property that the fermions are antisymmetric under permutation symmetry:

$$
\begin{equation}
	c^{\dagger}_{i}c^{\dagger}_{j}\ket{0} = -c^{\dagger}_{j}c^{\dagger}_{i}\ket{0}
\end{equation}
$$

Because of this, the fermion creation and annihilation operators obey the following anticommutation relations:

$$
\begin{equation}
	\{c_{i},c_{j}\} = \{c^{\dagger}_{i},c^{\dagger}_{j}\} = 0, ~\text{and}~ \{c_{i},c^{\dagger}_{j}\} = \delta_{ij}
\end{equation}
$$

Unlike the fermions, the bosonic particles obey the commutation relations. Thus, (anti)commutation relations generally specify the statistical property of a state. For example, if one creates the two fermions at the equivalent site $i$, then one obtains:

$$
\begin{equation}
	c^{\dagger}_{i}c^{\dagger}_{i}\ket{0} = 0
\end{equation}
$$

since $\{c^{\dagger}\_{i},c^{\dagger}\_{i}\} = c^{\dagger}\_{i}c^{\dagger}\_{i} + c^{\dagger}\_{i}c^{\dagger}\_{i} = 0$. This is the Pauli exclusion principle. (Although the spin degree of freedom is not specified, a result that implies the Pauli exclusion principle can be derived as shown in the above equation.) Using these relations, one can show that the orthonormality of the fermionic state:

$$
\begin{equation}
	\braket{i|j} = \braket{0|c_i c^{\dagger}_{j}|0} = \braket{0|\delta_{ij} - c^{\dagger}_{j}c_i |0} = \delta_{ij} 
\end{equation}
$$

Also, $c^{\dagger}\_{j}c_{i}$ can be interpreted as a single fermion jumping from $j$th site to $i$th site, since the fermion at $i$th site is destroyed, and it is created at $j$th site simultaneously. This interpretation can be linked to the hopping of electrons in a lattice system. The tight-binding Hamiltonian for a one-dimensional lattice can be readily reconstructed as:

$$
\begin{equation}
	H = -t\sum_{j}(c^{\dagger}_{j+1}c_{j} + c^{\dagger}_{j}c_{j+1})
\end{equation}
$$

where the $t$ denotes the energy scale of the Hamiltonian. Apparently, it shows an equal probability of hopping from $j \rightarrow j+1$ and $j+1 \rightarrow j$. If one assumes the one-dimensional chain with lattice spacing $a$, then one can apply the periodic boundary condition along the specific axis. Within this condition, the annihilation operator is represented as follows:

$$
\begin{equation}
	c_{j+N_{f}} = c_{j}
\end{equation}
$$

where $N_{f}$ is the total number of fermions. In addition, the Hamiltonian loses information on the number of particles due to the periodic boundary condition. The periodicity embedded in the operators allows one to describe the state $\ket{j}$ in the momentum space by Fourier transformation:

$$
\begin{equation}
	\ket{\mathbf{k}} = \frac{1}{\sqrt{N_{f}}}\sum^{N_{f}}_{j=1}e^{i\mathbf{k}\cdot\mathbf{r}_{j}}\ket{j}.
\end{equation}
$$

This indicates that the momentum is a good quantum number. The reason for this is that there is translational symmetry in the system. Accordingly, one can also express the state as $\ket{\mathbf{k}} = c^{\dagger}_{\mathbf{k}}\ket{0}$, since the Fourier-transformed form of a creation operator is given by:

$$
\begin{equation}
	c^{\dagger}_{j+N_{f}} = \frac{1}{\sqrt{N_{f}}}\sum\limits_{\mathbf{k}} c^{\dagger}_{\mathbf{k}} e^{-i\mathbf{k}\cdot(\mathbf{r}_{j}+\mathbf{r}_{N_{f}})}
\end{equation}
$$

Here, the exponent $\exp(-i\mathbf{k}\cdot\mathbf{r}\_{N\_{f}})$ satisfies:

$$
\begin{equation}
	e^{-i\mathbf{k}\cdot\mathbf{r}_{N_{f}}} = 1,~\exists~k = \frac{2\pi m}{N_{f}}
\end{equation}
$$

where $m$ is the positive integer that can have a value by $N_{f}-1$. Thus, the range of values that $k$ can have is from $0$ to $2\pi/a$. This range can be shifted overall by $-\pi/a$ so that the range is modified as follows:

$$
\begin{equation}
	-\frac{\pi}{a} \leq k \leq \frac{\pi}{a}
\end{equation}
$$

Such a minimum range of the momentum is called the Brillouin zone. The Hamiltonian in the momentum space representation reads:

$$
\begin{equation}
	H = \sum_{\mathbf{k}}\varepsilon_{\mathbf{k}}c^{\dagger}_{\mathbf{k}}c_{\mathbf{k}}
\end{equation}
$$

where $\varepsilon_{\mathbf{k}}$ describes the dispersion, which is given by:

$$
\begin{equation}
	\varepsilon_{\mathbf{k}} = -2t\cos(\mathbf{k}\cdot\mathbf{a})
\end{equation}
$$

This one-dimensional model can be generalized to the two or three-dimensional case.