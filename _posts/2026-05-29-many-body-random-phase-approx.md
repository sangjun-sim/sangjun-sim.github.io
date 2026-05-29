---
title: Random Phase Approximation
date: 2026-05-29 09:00:00 +0900
categories:
  - Physics
  - Many-Body Physics
tags:
  - many-body
  - rpa
math: true
toc: true
---

## Why "random phase approximation"?

{: .prompt-info }
> This document is based on Xinguo Ren's “Basics and Recent Progress of Random Phase Approximation for First-principles GroundState Energy Calculations” (p. 8) and R. Martin's lecture notes ([link](https://courses.physics.illinois.edu/phys561/fa2005/lnotes/lec8.pdf)).

The reason why the random phase approximation is called "random phase" is largely due to historical reasons. It is known that Bohm and Pines used this approximation in order to describe the collective motion, such as plasmons. If an external perturbation is a wave with the wave vector $\mathbf{q}$, the electrons largely exhibit two responses against it. The first one is a coherent response with a phase consistent with the external wave ($\phi_{\rm coh} = \phi_{ext}$), and the second one is an incoherent response whose phase differs by the position of electrons ($\phi_{\rm incoh} = \phi(\mathbf{r_{i}})$).

The coherent response affects the collective behavior of a system, while the incoherent one makes the phase difference. In the homogeneous electron gas where the positions of electrons are randomly distributed, the sum of phases $e^{-i\mathbf{q}\cdot\mathbf{r}_{i}}$ averages to zero, except for $\mathbf{q} = \mathbf{0}$. Here, note that the incoherent part ($\mathbf{q}\neq\mathbf{0}$ and $\mathbf{q}\neq\mathbf{q}'$) vanishes. In this approximation, therefore, the collective mode and microscopic motion whose phase is not ordered are separated. In addition, the contribution from the microscopic motion is cancelled in average.

In the modern context, the "random phase" is explicitly shown in the equation. Instead, it is introduced as the approximation that infinitely sums the bubble diagram of the polarizability $\chi_{0}$:

$$ \begin{equation} \chi_{\rm RPA}(\mathbf{q},\omega) = \frac{\chi_{0}(\mathbf{q},\omega)}{1-v_{\mathbf{q}}\chi_{0}(\mathbf{q},\omega)} \end{equation} $$

However, the meaning of original one implicitly remains in the equation: The interaction dependent on $\mathbf{q}$ and another one dependent on $\mathbf{q}$ and $\mathbf{q}'$ are separated. This neglects the lines (that have a different momentum from $\mathbf{q}$) in the $N$-particle Green function diagram, and finally gives the sum of bubble diagrams.

