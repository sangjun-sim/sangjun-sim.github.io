---
title: A short note on pair-correlation function
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

## A short note on pair-correlation function

The pair-correlation function is the concept in the many-body system that can be applied to understand the physical origin of the exchange-correlation energy. This function corresponds to the "correlation function" in the statistics. The pair-correlation function and its multiplication to the charge density at $\mathbf{r}'$, $n(\mathbf{r}')$ is written as $g(\mathbf{r},\mathbf{r}')n(\mathbf{r}')$. This tells us how the density is distributed at $\mathbf{r}'$ if the density is given at $\mathbf{r}$. [Cohen] Thus, $n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}')$ will give the density distribution of two particles; $n(\mathbf{r},\mathbf{r}')$, which is written as:

$$
\begin{align}
n(\mathbf{r};\sigma,\mathbf{r}';\sigma') &= \braket{\sum\limits_{i\neq j}\delta(\mathbf{r}-\mathbf{r}_{i})\delta_{\sigma\sigma_{i}}\delta(\mathbf{r}'-\mathbf{r}_{j})\delta_{\sigma'\sigma_{j}}} \nonumber \\
&= N(N-1)\sum\limits_{\sigma_{3}\sigma_{4},\dots,\sigma_{N}}\int d\mathbf{r}_{3}d\mathbf{r}_{4}\dots d\mathbf{r}_{N} |\Psi(\mathbf{r};\sigma,\mathbf{r}';\sigma',\mathbf{r}_{3};\sigma_{3};,\dots,\mathbf{r}_{N}\sigma_{N})|^{2}
\end{align}
$$

The explicit form of the pair-correlation function is given by:

$$
\begin{equation}
g(\mathbf{r},\mathbf{r}') = C\frac{n(\mathbf{r},\mathbf{r}')}{n(\mathbf{r})n(\mathbf{r}')}
\end{equation}
$$

where $C$ is an extra constant to be normalized. From this equation, one can see that the interchange of the particles does not change the correlation function. This is called the reciprocal relation, and it mathematically states that $g(\mathbf{r},\mathbf{r}') = g(\mathbf{r}',\mathbf{r})$. Another thing is that the pair-correlation is unity once the particle at $\mathbf{r}'$ is far away from another particle at $\mathbf{r}$.

$$
\begin{equation}
\lim_{\mathbf{r}'\rightarrow\infty} g(\mathbf{r},\mathbf{r}') = 1
\end{equation}
$$

In this case, one mentions that the density of two particles is uncorrelated. (The physical implication of $g(\mathbf{r},\mathbf{r}') = 1$ is that the classical (direct) Coulomb interaction and exchange-correlation energy are not included, so the charge is uniformly distributed in the background.) This is the reason why the pair-correlation function is related to the correlation in statistics for the first time. Finally, the constant $C$ can be determined by integrating the $n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}')$ in terms of $\mathbf{r}$ and $\mathbf{r}'$. This leads to the integration of $n(\mathbf{r},\mathbf{r}')$. Since the density $n(\mathbf{r},\mathbf{r}')$ denotes the two-particle density, the integral gives the total number of the pairs, $\binom{N}{2}$.

$$
\begin{equation}
\int d\mathbf{r}d\mathbf{r}' n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}') = \int d\mathbf{r}d\mathbf{r}' n(\mathbf{r},\mathbf{r}') = \frac{N(N-1)}{2}
\end{equation}
$$

Summarizing the session, the pair-correlation function has the following properties:

1. Symmetry with respect to the interchange of particles ($g(\mathbf{r},\mathbf{r}') = g(\mathbf{r}',\mathbf{r})$).
2. The pair correlation function follows the sum rule:

$$
\begin{equation}
\int d\mathbf{r}d\mathbf{r}' n(\mathbf{r})g(\mathbf{r},\mathbf{r}')n(\mathbf{r}') = \frac{N(N-1)}{2}
\end{equation}
$$

Integration of the pair correlation function $g(\mathbf{r},\mathbf{r}')$ over the strength of the electron-electron interaction can give the kinetic correlations. In addition, it can be separated into exchange and correlation parts [p.67 in Kohanoff]:

$$
\begin{equation}
\bar{g}(\mathbf{r},\mathbf{r}') = \int_{0}^{1} d\lambda~g_{\lambda}(\mathbf{r},\mathbf{r}') = \bar{g}_{\rm x}(\mathbf{r},\mathbf{r}') + \bar{g}_{\rm c}(\mathbf{r},\mathbf{r}')
\end{equation}
$$

$\mathbf{r}$에 한 전자가 위치할 때 그 주변인 $\mathbf{r}'$에 위치해야할 다른 전자는 exchange and correlation effect에 의해 $\mathbf{r}'$에 존재할 확률이 줄어들 수 있다. 이는 $\mathbf{r}$에 위치한 전자 주위에 charge depletion 영역을 만들게 된다. 이러한 영역을 exchange-correlation hole density $n_{\rm xc}(\mathbf{r})$로 나타낸다. The integration of the exchange-correlation hole density over the space yields $-1$. Exchange-correlation hole을 exchange hole과 correlation hole로 나눌 수 있는데, correlation hole은 integration over the space에 대해서 0이 된다. 이는 correlation energy가 charge density와 neutral charge distribution 사이의 상호작용임을 의미한다 [p. 69 in Kohanoff]. 대신, exchange hole은 $-1$을 주게 되는데, 이는 exchange interaction이 Hartree interaction의 unphysical한 self interaction을 제거해주는 역할을 하기 때문이다.