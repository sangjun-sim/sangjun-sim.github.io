---
title: Constrained Random Phase Approximation
date: 2026-05-25 14:00:00 +0900
categories:
  - Physics
  - Many-Body Physics
tags:
  - many-body
  - rpa
math: true
toc: true
---

## Constrained Random Phase Approximation

To know the magnitude of the Coulomb interaction, one needs to look at the response. The response to the Coulomb interaction is polarization. A real solid system consists of electrons occupying $d$ orbital, electrons occupying $p$ orbital, and vice versa. What one is interested in is how significant the interaction between electrons occupying the $d$ orbital is. In addition, what one can expect is that this interaction will be more negligible in magnitude than the Coulomb interaction in a bare system. This is due to the screening effect of other electrons. In the constrained random phase approximation (cRPA), the polarization of the entire system is considered to be given by the sum of the polarization ($P_d$) of $d$-electrons and the polarization ($P_r$) of electrons in other orbitals. Here, the subscript $d$ does not have meaning. It was originally meant to refer to “atomic-like” $d$ of $f$ states. However, the subscript $r$ denotes _rest_. The relation is written as follows:

$$ \begin{equation} P = P_r + P_d \end{equation} $$

Additionally, there is a relationship between the dielectric function ($\varepsilon$) and polarization $P$:

$$ \begin{equation} \varepsilon = 1 - vP \end{equation} $$

where $v$ is the Coulomb potential. In addition, the full-screened Coulomb interaction reads:

$$ \begin{equation} W = \frac{v}{\varepsilon} = \frac{v}{1 - vP} \end{equation} $$

Because of the fact that $P$ appears as the sum of $P_r$ and $P_d$, we obtain the following equation from the above equation:

$$ \begin{equation} W = \frac{v}{1 - v(P_r + P_d)} \end{equation} $$

Multiplying the denominator and numerator by $\varepsilon^{-1}{r}$ gives:

$$ \begin{align} W &= \frac{\varepsilon^{-1}{r}v}{\varepsilon^{-1}{r}-\varepsilon^{-1}{r}v(P_r + P_d)} \nonumber \\ &= \frac{W_r}{\varepsilon^{-1}_{r}-W_r(P_r + P_d)} \nonumber \\ &= \frac{W_r}{1-W_r P_d} \end{align} $$

Through this expression, one can interpret $W_r$ as a screened interaction as much as $P_d$. It can be understood that this $W_r$ corresponds to the interaction (Hubbard $U$) of electrons occupying the $d$ orbital that one wants to obtain. This parameter is defined for the localized state according to the tight-binding model picture. Therefore, it must be calculated using localized orbital, not plane wave, in order to obtain the matrix elements of this $W_r$. Practically, such a localized orbital can be replaced with a Wannier function.

{: .prompt-tip}
> Can one use the charge density obtained from self-consistent calculation? 
> 
> — Yes. Instead, increase the number of bands. If one uses the different k points, energy cutoff, and PAW potential in SCF and cRPA calculations, one should obtain the charge density again from SCF calculation.