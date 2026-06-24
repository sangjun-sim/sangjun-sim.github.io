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

## A short note on the Bloch theorem

  
{: .prompt-tip}
> This is a draft version of the Bloch theorem. Please exercise caution when reading this document.


Due to the translational invariance of the potential, the eigenstates of the Schrödinger equation are called Bloch states. The solutions of the Schrödinger equation can be expressed as a plane wave $e^{i\mathbf{k}\cdot\mathbf{r}}$ times a function having the translational invariance of the lattice:

$$
\begin{equation}
\braket{\mathbf{r}|\psi_{n\mathbf{k}}} = e^{i\mathbf{k}\cdot\mathbf{r}}\braket{\mathbf{r}|u_{n\mathbf{k}}}
\end{equation}
$$

where

$$
\begin{equation}
\braket{\mathbf{r}-\mathbf{R}_{\alpha}|u_{n\mathbf{k}}} = \braket{\mathbf{r}|u_{n\mathbf{k}}}
\end{equation}
$$

The electronic states are labeled by a quantum number, $\mathbf{k}$. Since the unit cells that confine the electrons exist, the energy levels would group into bands. In addition, these bands are indexed by the letter $n$.

The Bloch state satisfies the translational symmetry condition:

$$
\begin{equation}
\braket{\mathbf{r}-\mathbf{R}_{\alpha}|\psi_{n\mathbf{k}}} = e^{i\mathbf{k}\cdot\mathbf{R}_{\alpha}}\braket{\mathbf{r}|\psi_{n\mathbf{k}}}
\end{equation}
$$

In order to prove this relation, define a set of translation operators $\{T_{\alpha}\}$ such that:

$$
\begin{equation}
T_{\alpha}f(\mathbf{r}) = f(\mathbf{r}-\mathbf{R}_{\alpha})
\end{equation}
$$

where $f(\mathbf{r})$ is an arbitrary function and $\alpha = (\alpha_{1}, \alpha_{2}, \alpha_{3})$ is a set of integers. This operator can be divided into $T\_{\alpha} = [T^{\alpha_{1}}\_{x}][T^{\alpha_{2}}\_{y}][T^{\alpha_{3}}\_{z}]$. The action of $T_{\alpha}$ on the derivatives of a function yields:

$$
\begin{equation}
T_{\alpha}\left[\frac{\partial^{n}}{\partial x^{n}}f(\mathbf{r})\right] = \frac{\partial^{n}}{\partial x^{n}}f(\mathbf{r}-\mathbf{R}_{\alpha}) = \frac{\partial^{n}}{\partial x^{n}}T_{\alpha}f(\mathbf{r})
\end{equation}
$$

where it also holds for $y$ and $z$. This implies that the Hamiltonian commutes with the translation operator; $[T_{\alpha},H] = 0$. Here, the action of two translation operators on $f(\mathbf{r})$ gives:

$$
\begin{equation}
T_{\alpha}T_{\beta}f(\mathbf{r}) = f(\mathbf{r}-\mathbf{R}_{\alpha}-\mathbf{R}_{\beta}) = T_{\beta}T_{\alpha}f(\mathbf{r}) = T_{\alpha+\beta}f(\mathbf{r})
\end{equation}
$$

Thus, $\{T_{\alpha}\}$ is a set of operators that commute with the Hamiltonian. Let the eigenvalues of $T_{\alpha}$ be $\lambda_{\alpha}$:

$$
\begin{equation}
T_{\alpha}\braket{\mathbf{r}|\psi_{n}} = \lambda_{\alpha}\braket{\mathbf{r}|\psi_{n}}
\end{equation}
$$

Then, the eigenvalues of $T_{\alpha}T_{\beta}$ are given by:

$$
\begin{equation}
\lambda_{\alpha}\lambda_{\beta} = \lambda_{\alpha+\beta}
\end{equation}
$$