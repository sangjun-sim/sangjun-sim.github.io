---
title: Theorems in magnetism
date: 2026-05-29 09:00:00 +0900
categories:
  - Physics
  - Magnetism
tags:
  - magnetism
math: true
toc: true
---

## Theorems in magnetism

This note shows the summary of well-known theorems in magnetism. The proofs for these theorems are not discussed yet.

{: .prompt-info }
> **Goldstone's theorem**.
> With the locality condition $\|J_{ij}\| \|\mathbf{r}\_{i}-\mathbf{r}\_{j}\| < \infty$, if a spin structure factor
>
> $$
\begin{equation}
\sum\limits_{\braket{ij}}e^{-i\mathbf{k}\cdot(\mathbf{r}_{i}-\mathbf{r}_{j})}\braket{\mathbf{S}_{i}\cdot\mathbf{S}_{j}}
\end{equation}
$$
>
> diverges at $\mathbf{k}=\mathbf{Q}$ due to continuous symmetry breaking, there exists an eigenstate with the momentum $\mathbf{k}$, where the eigenvalue $E(\mathbf{k})$ vanishes at $\mathbf{Q}$. Note that the presence of a gapless excitation does not necessarily mean that a continuous symmetry is broken.

{: .prompt-info }
> **Mermin-Wagner theorem**. 
>
> In one-dimensional Heisenberg model with the locality condition, there must be no spontaneously symmetry breaking. In two-dimension, there must be no spontaneously symmetry breaking at finite temperature.
> 
> $$ \begin{equation} \lim_{h\rightarrow 0}\lim_{N\rightarrow \infty}\braket{m} = 0 \end{equation} $$

{: .prompt-info }
> **Nagaoka theorem**. 
>
> For the system with $U\rightarrow\infty$ and with one extra hole or electron in a bipartite lattice, it favors ferromagnetism. This theorem assumes a situation where the number of electrons is fixed and the lattice size is finite.

{: .prompt-info }
> **Marshall's theorem**. 
>
>For the antiferromagnetic Heisenberg model on the _bipartite_ lattice, the total ground state should be a **singlet state** ($\braket{S} = 0$).

{: .prompt-info }
> **Lieb-Schultz-Mattis theorem**. 
>
>For the $S=1/2$ antiferromagnetic Heisenberg model on the _bipartite one-dimensional_ lattice (satisfying periodic boundary condition), the ground state should be a singlet state with a **gapless spectrum** or a **doubly degenerate state** with **a gapped spectrum**. This implies that there is no unique ground state for a gapped system in thermodynamic limit, but degenerate state below the gap.