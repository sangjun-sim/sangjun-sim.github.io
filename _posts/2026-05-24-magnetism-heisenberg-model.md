---
title: Heisenberg Model
date: 2026-05-25 14:00:00 +0900
categories:
  - Physics
  - Magnetism
tags:
  - magnetism
math: true
toc: true
---

## Heisenberg model

The Hamiltonian of the Heisenberg model is represented as:

$$ \begin{equation} H = \sum\limits_{\braket{ij}}J_{ij}\mathbf{S}_{i}\cdot\mathbf{S}_{j} \end{equation} $$

where the sum $i$ and $j$ run over all lattice sites and $J_{ij}$ refers to the exchange constant. If $J<0$, the energy is minimized when the spins are parallel to each other (ferromagnet). If $J>0$, the antiparallel orientation is preferred, which is called antiferromagnet. Rewritting the spin operators in terms of creation/annihilation operators:

$$ \begin{align} S^{+}_{j} &= S^{x}_{j}+iS^{y}_{j}, \nonumber \\ S^{-}_{j} &= S^{x}_{j}-iS^{y}_{j}, \end{align} $$

The Hamiltonian is then expressed as:

$$ \begin{align} H &= \sum\limits_{\braket{ij}}J_{ij}\mathbf{S}_{i}\cdot\mathbf{S}_{j} = \sum\limits_{\braket{ij}}J_{ij}[S^{x}_{i}S^{x}_{j}+S^{y}_{i}S^{y}_{j}+S^{z}_{i}S^{z}_{j}] \nonumber \\ &= \sum\limits_{\braket{ij}}J_{ij}\left[\frac{1}{2}(S^{+}_{i}S^{-}_{j} + S^{-}_{i}S^{+}_{j}) + S^{z}_{i}S^{z}_{j}\right] \end{align} $$

with the following result:

$$ \begin{align} S^{+}_{i}S^{-}_{j} &= S^{x}_{i}S^{x}_{j} - iS^{x}_{i}S^{y}_{j} + iS^{y}_{i}S^{x}_{j} + S^{y}_{i}S^{y}_{j}, \nonumber \\ S^{-}_{i}S^{+}_{j} &= S^{x}_{i}S^{x}_{j} + iS^{x}_{i}S^{y}_{j} - iS^{y}_{i}S^{x}_{j} + S^{y}_{i}S^{y}_{j}, \\ \therefore 2(S^{x}_{i}S^{x}_{j} + S^{y}_{i}S^{y}_{j}) &= S^{+}_{i}S^{-}_{j} + S^{-}_{i}S^{+}_{j} \nonumber \end{align} $$
