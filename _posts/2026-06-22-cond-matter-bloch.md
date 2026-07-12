---
title: A short note on the Bloch theorem
date: 2026-06-22 17:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
  - dft
math: true
toc: true
---

## Bloch theorem

The Bloch theorem assumes the translational invariance of the potential $V(\mathbf{r})$. Here, the translational symmetry of $V(\mathbf{r})$ means that the potential at $\mathbf{r}$ is the same as the potential image at $\mathbf{r}-\mathbf{R}$ which is translated by an operator $T_{\mathbf{R}}$:

$$
\begin{equation}
V(\mathbf{r}) = T_{\mathbf{R}}V(\mathbf{r}) = V(\mathbf{r}-\mathbf{R})
\end{equation}
$$

where $\mathbf{R}$ is the Bravais lattice vector, which is expressed as $\mathbf{R} = n_{1}\mathbf{a}\_{1} + n_{2}\mathbf{a}\_{2} + n_{3}\mathbf{a}\_{3}$. In addition, the action of $T_{\mathbf{R}}$ on the $n$th derivatives of a function $f(\mathbf{r})$ yields: 

$$
\begin{equation}
T_{\mathbf{R}}\left[\frac{\partial^{n}}{\partial \mathbf{r}^{n}}f(\mathbf{r})\right] = \frac{\partial^{n}}{\partial \mathbf{r}^{n}}f(\mathbf{r}-\mathbf{R}) = \frac{\partial^{n}}{\partial \mathbf{r}^{n}}T_{\mathbf{R}}f(\mathbf{r})
\end{equation}
$$

This implies that $T_{\mathbf{R}}$ commutes with the momentum operator. Now for the Hamiltonian $H$ with the potential $V(\mathbf{r})$, the following relationships hold:

$$
\begin{align}
(T_{\mathbf{R}}H)f(\mathbf{r}) &= -\frac{\hbar^{2}}{2m}\nabla^{2}f(\mathbf{r})\Big\vert_{\mathbf{r}-\mathbf{R}} + V(\mathbf{r}-\mathbf{R})f(\mathbf{r}-\mathbf{R}), \nonumber\\
(HT_{\mathbf{R}})f(\mathbf{r}) &= -\frac{\hbar^{2}}{2m}\nabla^{2}f(\mathbf{r})\Big\vert_{\mathbf{r}-\mathbf{R}} + V(\mathbf{r})f(\mathbf{r}-\mathbf{R})
\end{align}
$$

If and only if the potential is periodic; $V(\mathbf{r}) = V(\mathbf{r}-\mathbf{R})$, those relationships are equal to each other. This indicates that the Hamiltonian commutes with the translation operator:

$$
\begin{equation}
\boxed{[T_{\mathbf{R}},H] = 0.}
\end{equation}
$$

In other words, $H(\mathbf{r}) = H(\mathbf{r}-\mathbf{R})$. To grasp its physical meaning, let $\ket{\mathbf{r}}$ be the eigenstate of $H(\mathbf{r})$ such that $H(\mathbf{r})\ket{\mathbf{r}} = E\ket{\mathbf{r}}$. The translated image of $\ket{\mathbf{r}}$ becomes $T_{\mathbf{R}}\ket{\mathbf{r}} = \ket{\mathbf{r}-\mathbf{R}}$. Due to the commutation relation above, this becomes the eigenstate of $H(\mathbf{r}-\mathbf{R})$ with $H(\mathbf{r})\ket{\mathbf{r}-\mathbf{R}} = E\ket{\mathbf{r}-\mathbf{R}}$. Note that the eigenvalue $E$ is the same for two states. 

Apparently, it seems one can obtain an infinite degeneracy in the energy only by changing $\mathbf{R}$. It is because one can think of the translated images of $\ket{\mathbf{r}}$ are independent of each other. However, this intuition is false.

This can be resolved by the following example: First, assume that $\ket{\mathbf{0}} = \ket{\mathbf{r}=\mathbf{0}}$ is two-fold degenerate with two states $\ket{\mathbf{0}^{(1)}}$ and $\ket{\mathbf{0}^{(2)}}$ as in the case of Ziman (p. 17). The translation $T$ of $\ket{\mathbf{0}}$ by $\mathbf{a}\_{1}$ gives:

$$
\begin{equation}
\begin{bmatrix}
\ket{\mathbf{a}^{(1)}_{1}} \\ 
\ket{\mathbf{a}^{(2)}_{1}}
\end{bmatrix} = 
\begin{bmatrix}
t_{11} & t_{12} \\
t_{21} & t_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\mathbf{0}^{(1)}} \\
\ket{\mathbf{0}^{(2)}}
\end{bmatrix}
\end{equation}
$$

where $t_{ij}$ is the translation coefficient and the matrix element of a unitary matrix $T$. However, $\ket{\mathbf{0}^{(1)}}$ and $\ket{\mathbf{0}^{(2)}}$ are not unique so that their linear combination can be constructed as the follows:

$$
\begin{equation}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix} = 
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\mathbf{0}^{(1)}} \\
\ket{\mathbf{0}^{(2)}}
\end{bmatrix}
\end{equation}
$$

where $c_{ij}$ is now the expansion coefficient and the matrix element of another unitary matrix $C$. One can find the matrix $C$ that diagonalizes $T$ so that $CTC^{-1}$ is diagonal:

$$
\begin{equation}
CTC^{-1} = 
\begin{bmatrix}
d_{11} & 0 \\
0 & d_{22}
\end{bmatrix}
\end{equation}
$$

Feeding Eq. 5 to Eq. 4, one obtains the states that are like non-degenerate by the translation:

$$
\begin{align}
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\mathbf{a}^{(1)}_{1}} \\ 
\ket{\mathbf{a}^{(2)}_{1}}
\end{bmatrix} &= 
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{bmatrix}
t_{11} & t_{12} \\
t_{21} & t_{22}
\end{bmatrix}
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}^{-1}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix} \nonumber \\
\begin{bmatrix}
\ket{\tilde{\mathbf{a}}^{(1)}_{1}} \\ 
\ket{\tilde{\mathbf{a}}^{(2)}_{1}}
\end{bmatrix} &=
\begin{bmatrix}
d_{11} & 0 \\
0 & d_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix}
\end{align}
$$

using

$$
\begin{equation} 
\begin{bmatrix}
\ket{\mathbf{0}^{(1)}} \\
\ket{\mathbf{0}^{(2)}}
\end{bmatrix} =
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}^{-1}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix}
\end{equation}
$$

Since the norm of states $\{\ket{\tilde{\mathbf{a}}^{(i)}\_{1}}\}$ is equal to $1$, $d_{11}$ and $d_{22}$ are given by $e^{ik_{1}}$ and $e^{ik_{1}'}$, respectively. Note that $k_{1}$ and $k_{1}'$ are called the crystal momenta and have the same direction. However, their magnitudes are different. Now, think of the translation $T$ of $\ket{\mathbf{0}}$ by $\mathbf{a}\_{2}$. This operator commutes with the translation by $\mathbf{a}\_{1}$. This is because $T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}}$ and $T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}$ to $\ket{\mathbf{0}}$ result in the same state $\ket{\mathbf{a}\_{1}+\mathbf{a}\_{2}}$ (identical with $\ket{\mathbf{a}\_{2}+\mathbf{a}\_{1}}$):

$$
\begin{equation}
\begin{rcases}
T_{\mathbf{a}_{2}}T_{\mathbf{a}_{1}}\ket{\mathbf{0}} &= T_{\mathbf{a}_{2}}\ket{\mathbf{a}_{1}} \\
T_{\mathbf{a}_{1}}T_{\mathbf{a}_{2}}\ket{\mathbf{0}} &= T_{\mathbf{a}_{1}}\ket{\mathbf{a}_{2}}
\end{rcases} \rightarrow \ket{\mathbf{a}_{1}+\mathbf{a}_{2}}
\end{equation}
$$

This indicates that there is a matrix that simultaneously diagonalizes $T_{\mathbf{a}\_{1}}$ and $T_{\mathbf{a}\_{2}}$. 

{: .prompt-info }
> Here one can see the path independence:
> 
$$
\begin{equation}
\boxed{T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}} = T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}.}
\end{equation}
$$
>
> This implies that the translation operator is *abelian*. However, if there is a uniform magnetic field, such a path independence does not hold anymore; $T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}} \neq T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}$, instead $T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}} = e^{i\phi}T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}$, where the additional phase factor $e^{i\phi}$ is called "Peierls phase."

That is, $\{\ket{\tilde{\mathbf{a}}^{(i)}\_{2}}\}$ will be expressed as:

$$
\begin{equation}
\ket{\tilde{\mathbf{a}}^{(1)}_{2}} = e^{ik_{2}}\ket{\tilde{\mathbf{0}}^{(1)}},~\text{and}~\ket{\tilde{\mathbf{a}}^{(2)}_{2}} = e^{ik'_{2}}\ket{\tilde{\mathbf{0}}^{(2)}}
\end{equation}
$$

This will hold for $\mathbf{a}\_{3}$, and there exists a crystal momentum $\mathbf{k}$ such that:

$$
\begin{equation}
\ket{\mathbf{R}} = e^{i\mathbf{k}\cdot\mathbf{R}}\ket{\mathbf{0}}
\end{equation}
$$

[Not Safe] This is Bloch's theorem in its careful form. The eigenstates of a lattice-periodic Hamiltonian **can be chosen** so that each is multiplied by a pure phase $e^{i\mathbf{k}\cdot\mathbf{R}}$ under any lattice translation. An arbitrary state drawn from a degenerate level need *not* itself be a Bloch state: it is a superposition of Bloch states of the same energy but, in general, of different $\mathbf{k}$.

This also disposes of the apparent paradox above. Translating a solution does not manufacture an endless supply of new ones: all the translated states $T_{\mathbf{R}}\ket{0}$ lie inside the same $g$-dimensional eigenspace, so at most $g$ of them are linearly independent. In the non-degenerate case $g=1$, and the translated state is the original one up to a phase.

---

## References

1. Ziman, J. M. _Principles of the Theory of Solids_. (Cambridge University Press, Cambridge, 1972).
2. 