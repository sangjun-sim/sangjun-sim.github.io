---
title: A short note on Janak theorem
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

## A short note on Janak theorem

The total energy derived by the Kohn-Sham (KS) equation, $E[n]$ inherently does not have any physical meaning. In the Hartree-Fock approximation, the energy required to subtract or add an electron from a single orbital is the eigenvalue, as Koopman's theorem states. However, in the KS scheme, such energy is not the eigenvalue. Instead, the KS eigenvalue truly becomes the ground state energy $E_{0}$ when the number of particles is the integer value $N$ and the eigenvalue can be minimized by $\Theta_{i}$. However, the occupation $\Theta_{i}$ can be fractional. In this case, the number of particles $N$ becomes a non-integer value $N+\alpha$ with $0 \le \alpha \le 1$.

If the KS eigenvalue is differentiable with respect to $\Theta_i$, then the KS total energy $E[n]$ naturally provides the continuous interpolation between the energies with the integer number of particles; say $N$ and $N+1$. With the orthonormalized eigenstates, the explicit derivative of the KS eigenvalue with respect to $\Theta_{i}$ is given by:

$$
\begin{align}
\frac{\partial E}{\partial \Theta_{i}} &= \frac{\partial T}{\partial \Theta_{i}} + \frac{\partial E_{\text{H}}}{\partial \Theta_{i}} + \frac{\partial E_{\text{ext}}}{\partial \Theta_{i}} + \frac{\partial E_{\text{xc}}}{\partial \Theta_{i}} \nonumber \\
&= \varepsilon_{i} + \sum\limits_{j}\Theta_{j} \int d^{3}\mathbf{r} \frac{\partial \varphi^{*}_{j}(\mathbf{r})}{\partial \Theta_{i}} [ -\frac{\hbar^{2}}{2m}\nabla^{2} + v_\text{H}(\mathbf{r}) + v_\text{ext}(\mathbf{r}) + v_\text{xc}(\mathbf{r})] \varphi_{j}(\mathbf{r}) + \text{c.c.} \nonumber \\
&= \varepsilon_{i} + \sum\limits_{j}\Theta_{j} \int d^{3}\mathbf{r} \frac{\partial \varphi^{*}_{j}(\mathbf{r})}{\partial \Theta_{i}} \varepsilon_{j} \varphi_{j}(\mathbf{r}) + \text{c.c.} \nonumber \\
&= \varepsilon_{i} + \sum\limits_{j}\Theta_{j} \varepsilon_{j} \frac{\partial}{\partial \Theta_{i}} \int d^{3}\mathbf{r} |\varphi_{j}(\mathbf{r})|^{2} (=1)
\end{align}
$$

Therefore, one gets:

$$
\begin{equation}
\therefore \frac{\partial E}{\partial \Theta_{i}} = \varepsilon_{i}
\end{equation}
$$

Here, we took advantage of the fact that the derivative of density for occupation is given by:

$$
\begin{equation}
\frac{\partial n}{\partial \Theta_{i}} = |\varphi_{i}(\mathbf{r})|^{2} + \sum\limits_{j} \Theta_{j}\frac{\partial |\varphi_{j}(\mathbf{r})|^{2}}{\partial \Theta_{i}}
\end{equation}
$$

Then we used the KS equation to separate the real-valued $\varepsilon_{i}$ and the expression that is given by a derivative for the occupation of the eigenstate. The relationship is called Janak's theorem (or Slater-Janak's theorem). Using this theorem, we can find out what physical meaning the eigenvalue obtained from the KS equation has.