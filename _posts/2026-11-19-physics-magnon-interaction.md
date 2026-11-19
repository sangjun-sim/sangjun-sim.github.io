---
title: Magnon-magnon interaction
date: 2026-11-19 16:31:00 +0900
categories:
  - Physics
tags:
  - physics
math: true
toc: true
---

## Magnon-magnon interaction

For a simple ferromagnet dimer model, I want to see the role of symmetry in determining the quartic Hamiltonian. The conclusion I found is that symmetry reduces the interaction terms. First, I start with $H = -J\mathbf{S}_{a}\cdot \mathbf{S}_{b}$, where $a$ and $b$ denote the sites. In this case, there is an inversion symmetry connecting between two sites. The Holstein-Primakoff transformation to $H$ yields:

$$
\begin{equation}
H = -J\left[S^{z}_{a}S^{z}_{b} + \frac{1}{2}(S^{+}_{a}S^{-}_{b} + S^{-}_{a}S^{+}_{b})\right]
\end{equation}
$$

Using $S^{z}_{i} = S - a^{\dagger}_{i}a_{i}$, one obtains:
  
$$
\begin{equation}
(S - a^{\dagger}_{a}a_{a})(S - a^{\dagger}_{b}a_{b}) = S^{2}-S(a^{\dagger}_{a}a_{a}+a^{\dagger}_{b}a_{b})+a^{\dagger}_{a}a_{a}a^{\dagger}_{b}a_{b}
\end{equation}
$$

From $S^{\dagger}_{i} = \sqrt{2S-a^{\dagger}_{i}a_{i}}a_{i}$, $S^{\dagger}_{i} \simeq \sqrt{2S}(1-a^{\dagger}_{i}a_{i}/4S)a_{i}$,

$$
\begin{equation}
\begin{aligned}
S^{+}_{a}S^{-}_{b} &= 2S(1-a^{\dagger}_{a}a_{a}/4S)a_{a}a^{\dagger}_{b}(1-a^{\dagger}_{b}a_{b}/4S) \\
&= 2S(a_{a}-\frac{1}{4S}a^{\dagger}_{a}a_{a}a_{a})a^{\dagger}_{b}(1-\frac{1}{4S}a^{\dagger}_{b}a_{b}) \\
&= 2Sa_{a}a^{\dagger}_{b}-\frac{1}{2}(a^{\dagger}_{a}a_{a}a_{a}a^{\dagger}_{b}+a_{a}a^{\dagger}_{b}a^{\dagger}_{b}a_{b})
\end{aligned}
\end{equation}
$$

Leaving only quartic terms yields:

$$
\begin{equation}
-J\left[a^{\dagger}_{a}a_{a}a^{\dagger}_{b}a_{b} - \frac{1}{4}(a^{\dagger}_{a}a_{a}a_{a}a^{\dagger}_{b}+a_{a}a^{\dagger}_{b}a^{\dagger}_{b}a_{b}+a^{\dagger}_{b}a_{b}a_{b}a^{\dagger}_{a}+a_{b}a^{\dagger}_{a}a^{\dagger}_{a}a_{a})\right]
\end{equation}
$$

**How can one obtain the allowed terms before explicit Holstein-Primakoff transformation?** This is possible by reading the character table of $U(1)$ group, because spin is conserved for $U(1)$ rotation around the quantization axis in this model. First, one defines operators $c$ and $c^{\dagger}$. Since $U(1)$ operator is given by $U_{z}(\phi) = \exp[i\phi S^{z}_{\rm tot}]$, the characters for $c$ and $c^{\dagger}$ are $e^{i\phi}$ and $e^{-i\phi}$, respectively. For three components $S^{z}_{i}S^{z}_{j}$,  $S^{+}_{i}S^{-}_{j}$, and $S^{-}_{i}S^{+}_{j}$, the product of characters must be $1$ because $\mathbf{S}_{i}\cdot\mathbf{S}_{j}$ is invariant under $U(1)$ symmetry, giving an irrep. of $1$. Then, the allowed quartic nomial is given by a combination of $ccc^\dagger c^\dagger$.

For example, if there are two sites $i = a$ and $j = b$, the combination of $(a^\dagger a^\dagger, a^\dagger b^\dagger, b^\dagger b^\dagger)$ and $(aa, ab, bb)$ is possible with the total $9$ quartic terms. This preserves the number of magnons. However, the symmetry-allowed terms are given by bond symmetry in this case. Since our Hamiltonian is $\sum_{\braket{ij}}\mathbf{S}_{i}\cdot\mathbf{S}_{j}$, neither two-magnon $a^\dagger a^\dagger bb$ nor single site terms $a^\dagger a^\dagger a a$ is allowed. Therefore, the following $5$ combinations are allowed:

$$
\begin{equation}
a^\dagger a^\dagger a b, \, a^\dagger b^\dagger a a, \, a^\dagger b^\dagger a b, \, a^\dagger b^\dagger bb, \, b^\dagger b^\dagger a b 
\end{equation}
$$


