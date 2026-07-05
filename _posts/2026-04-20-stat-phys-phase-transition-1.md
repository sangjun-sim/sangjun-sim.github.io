---
title: Berezinskii-Kosterlitz-Thouless transition (1)
date: 2026-04-20 15:00:00 +0900
categories:
  - Physics
  - Statistical Physics
tags:
  - physics
  - phase-transition
math: true
toc: true
---

This document briefly discusses the example of a topological phase transition: the Berezinskii-Kosterlitz-Thouless (BKT) transition. If one wants to read more deeply, go to a site.

## Berezinskii-Kosterlitz-Thouless transition

The vortex is one of the topological defects. It appears in superconductors, superfluids, and magnetic systems. The reason why it has the topological property is that the circulation is quantized in a vortex. Let us consider the two-dimensional $XY$ model where the spin vectors are confined in the $xy$-plane. If $\mathbf{S}_{i}$ is assumed to be normalized as $1$, the Heisenberg model is described as:

$$
\begin{equation}
H_{\rm XY} = -J\sum\limits_{\braket{ij}}\mathbf{S}_{i}\cdot\mathbf{S}_{j} = -J\sum\limits_{\braket{ij}}\cos(\phi_{i}-\phi_{j})
\end{equation}
$$

where $\phi_{i}$ and $\phi_{j}$ are the angles of the spins to the given axis. If one assumes that the lattice constant is $a$ and the system favors the ferromagnetic interaction ($J > 0$) such that the ground state is ordered, the angle between the spins can be small. Then, the Hamiltonian of $XY$ model can be approximated as:

$$
H_{\rm XY} \simeq -J\sum\limits_{\braket{ij}}\left[1-\frac{1}{2}(\phi_{i}-\phi_{j})^{2}\right] = E + \frac{J}{2}\sum\limits_{\braket{ij}}(\phi_{i}-\phi_{j})^{2}
$$

where $E$ is the sum of the exchange interaction between the site $i$ and $j$. The second term must be highlighted: The form is applied to the discrete lattice model. Here, the sum over the first nearest neighbors corresponds to the discrete Laplacian operator; see H. J. Jensen's lecture note [2]. However, in the continuum limit, where the system size $L$ is larger than the lattice spacing $a$, $\phi_{i}$ becomes $\phi(\mathbf{r}_{i})$. Thus, the second term is expressed as:

$$
\begin{equation}
\frac{J}{2}\sum\limits_{\braket{ij}}(\phi_{i}-\phi_{j})^{2}\rightarrow J\sum\limits_{\mathbf{r}}[\nabla\phi(\mathbf{r})]^{2}
\end{equation}
$$

If one creates a vortex that has a uniformly rotating spin alignment around the center point, the following quantity is invariant as $2\pi$:

$$
\begin{equation}
\oint_{\rm C} \nabla\phi\cdot d\mathbf{l} = 2\pi
\end{equation}
$$

where $\mathbf{l}$ is the vector of the arc, and the integral path is given by the closed loop around the center of the vortex. This is because the angle $\phi$ is given by the length of the arc $l$ and the radius of the circle $r$; $\phi = l/r$. If the size of the vortex is finite as $R$, the excitation energy reads:

$$
\begin{align}
J\sum\limits_{\mathbf{r}}[\nabla\phi(\mathbf{r})]^{2} &= J\int^{R}_{a} dr~r\int^{2\pi}_{0} d\phi (\nabla\phi)^{2} = J\int^{R}_{a} dr~r\int^{2\pi}_{0} d\phi \left(\frac{1}{r}\right)^{2} \nonumber \\
&= 2\pi J \ln\left[\frac{R}{a}\right]
\end{align}
$$

The possible cases to create a vortex in the lattice is $(R/a)^{2}$. This corresponds to the amount of multiplicity $\Omega$ in the Boltzmann entropy $S$:

$$
\begin{equation}
S = k_{\rm B}\ln\Omega = 2k_{\rm B}\ln\left[\frac{R}{a}\right]
\end{equation}
$$

From this, one can find Free energy:

$$
\begin{align}
F &= U - TS = 2\pi J \ln\left[\frac{R}{a}\right] - 2k_{\rm B}T\ln\left[\frac{R}{a}\right] \nonumber \\
&= 2(\pi J - k_{\rm B}T)\ln\left[\frac{R}{a}\right]
\end{align}
$$

This implies that there is a specific temperature that determines whether the formation of a vortex is favorable or not. If $F > 0$, the system requires the energy cost. Thus, the vortex will not be easily created. The critical temperature is called ‘Berezinskii-Kosterlitz-Thouless temperature’ and is defined as:

$$
\begin{equation}
T_{\rm BKT} = \frac{\pi J}{k_{\rm B}}
\end{equation}
$$

In addition, the transition for the creation of a topological defect below the Berezinskii-Kosterlitz-Thouless temperature is named the Berezinskii-Kosterlitz-Thouless (BKT) transition.

---

## References

1. Araújo, M. & Sacramento, P. _Topology in Condensed Matter_. p. 151
2. Jensen, H. J. Lecture notes on the XY model. MIT 8.334 Statistical Mechanics II: Statistical Physics of Fields. https://www.mit.edu/~levitov/8.334/notes/XYnotes1.pdf (accessed 5 July 2026).
