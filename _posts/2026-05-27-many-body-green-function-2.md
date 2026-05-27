---
title: "Many-Body Green Function 2"
date: 2026-05-27 16:00:00 +0900
categories: [Physics, Many-Body Physics]
tags: [green-function, many-body, q&a]
math: true
toc: true
---

## Studying Green functions #2

Here are the questions that I have, and they are answered by Claude. The answers are not copied and pasted directly from the site. Instead, I included some modifications based on my understanding.

{: .prompt-tip }
> Q1. How is the Gell-Mann-Low theorem related to Wick's theorem?

One cannot solely obtain the Feynman diagram from the Gell-Mann-Low theorem or Wick's theorem. The Gell-Mann-Low theorem expresses the interacting Green function in terms of $S$-matrix and noninteracting vacua. **Two theorems provide the Feynman diagram**.

{: .prompt-tip }
> Q2. Is turning on/off the interaction the same as $U(1)$ transformation?

No, *not in general*. For a special case where the Hubbard-Stratonovich transformation replaces the coupling constant as an auxiliary field, it can be related. However, this is a totally different concept.

{: .prompt-tip }
> Q3. What does it mean by that?

> *In practice, the poles in the interacting Green’s function blur into a continuum of excitation energies with infinitesimal separations*. (Introduction to Many-Body Physics, p. 137)

The noninteracting Green function has a single pole from $(\omega-\varepsilon_{\mathbf{k}}\pm i\delta)^{-1}$. With the interaction, *adding a single particle excites many-body eigenstates* $\ket{N+1}$. This leads to infinitely many poles in Green function:
$$
\begin{equation}
\sum_{\lambda}\frac{|M_{\lambda}(\mathbf{k})|^{2}}{(\omega-\varepsilon_{\lambda\mathbf{k}}+i\delta_{\lambda})}
\end{equation}
$$
In thermodynamic limit ($N \rightarrow \infty$), the separation between poles gets infinitesimally small and the spectrum becomes continuous.

{: .prompt-tip }
> Q4. What is the underlying statistics in spectral function?

The distribution function is implicitly included in the $\theta$ function.
$$
\begin{equation}
A(\mathbf{k},\omega) = \theta(\omega)\rho_{e}(\mathbf{k},\omega) + \theta(-\omega)\rho_{h}(\mathbf{k},-\omega)
\end{equation}
$$
where $\omega > 0$ is the particle sector that creates an electron in the vacuum state and $\omega < 0$ is the hole sector that annihilates an electron below the Fermi sea.

Here, one should note that $A(\mathbf{k},\omega)$ contains information of quantum mechanics at zero temperature. If one interprets the Green function in the finite temperature regime, one requires the Fermi-Dirac distribution:
$$
\begin{equation}
\braket{c^\dagger_{\mathbf{k}\sigma}c_{\mathbf{k}\sigma}} = \int\frac{d\omega}{2\pi} A(\mathbf{k},\omega)f(\omega)
\end{equation}
$$
Thus, spectral function tells the density of states and distribution function tells how the states are filled.