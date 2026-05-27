---
title: "Antiferromagnetism"
date: 2026-05-25 14:00:00 +0900
categories: [Physics, Magnetism]
tags: [magnetism]
math: true
toc: true
---

## Antiferromagnetism

For a bipartite lattice with $J_{ij}\geq 0$, one can assume a Néel state that is the fully polarized ground state with the opposite directions for the two sublattices. It is written as the product of the eigenstates at two different sublattices:

$$
\begin{equation}
\ket{\Psi_{\rm GND}} = \prod_{i\in A}\ket{S}_{i}\prod_{j\in B}\ket{-S}_{j}
\end{equation}
$$

where the state $\ket{S}$ is the eigenstate of $S^{z}$ for the given lattice site with eigenvalues of $\pm S$. Note that $\ket{S}\_{i}$ and $\ket{-S}\_{j}$ are the eigenstates with the maximum value of $S$. Thus, if one applies $S^{+}\_{i}S^{-}\_{j}$ to the Néel state, one gets: $S^{+}\_{i}S^{-}\_{j}\ket{\Psi\_{\rm GND}} = 0$. Acting the Hamiltonian $H$ onto the ground state, one obtains the following relation:

$$
\begin{align}
H\ket{\Psi_{\rm GND}} &= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}(S^{+}_{i}S^{-}_{j} + S^{-}_{i}S^{+}_{j}) + S^{z}_{i}S^{z}_{j}\right]\prod_{i\in A}\ket{S}_{i}\prod_{j\in B}\ket{-S}_{j} \nonumber \\
&= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}S^{-}_{i}S^{+}_{j} - S^{2}\right]\prod_{i\in A}\ket{S}_{i}\prod_{j\in B}\ket{-S}_{j} \nonumber \\
&= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}\sqrt{S(S+1)-S(S-1)}\prod_{i\in A}\ket{S-1}_{i}\sqrt{S(S+1)-S(S-1)}\prod_{j\in B}\ket{-S+1}_{j} - S^{2}\prod_{i\in A}\ket{S}_{i}\prod_{j\in B}\ket{-S}_{j}\right] \nonumber  \\
&= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}{S(S+1)-S(S-1)}\prod_{i\in A}\ket{S-1}_{i}\prod_{j\in B}\ket{-S+1}_{j} - S^{2}\prod_{i\in A}\ket{S}_{i}\prod_{j\in B}\ket{-S}_{j}\right]
\end{align}
$$

Here one can notice that $\ket{\Psi_{\rm GND}}$ is not the eigenstate of the Hamiltonian. The true eigenstate of the Hamiltonian satisfies the so-called *Marshall's theorem*, which states that the ground state for equal-size sublattices is a singlet of the total spin ($S_{\rm tot}\ket{\Psi_{\rm GND}} = 0$). Note the number of singlets grows exponentially as a function of the lattice size.