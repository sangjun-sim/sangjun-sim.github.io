---
title: A short note on pseudopotential
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

## A short note on pseudopotential


Pseudopotentials are artificial potentials created in atomic configurations that smooth out potentials in the core region. This method assumes that the core state is insensitive to the environment and attempts to describe the core electrons with smooth potentials. This concept is based on the idea of the Orthogonal Plane Wave (OPW) method [Herring, Callaway], which writes the wavefunction as a linear combination of the valence and core states and makes them orthogonal as in the Gram-Schmidt procedure. This is necessary because in the case of conventional plane wave methods, many basis sets are used to compute the fast oscillations of the wavefunction near the core region. That is, we need a plane wave with a large $\mathbf{G}$ (or cut-off energy from $E_{\text{cut-off}} = \hbar^2\mathbf{G}^2/2m$).

Pseudopotential weakens the strong electron-ion interaction and can effectively reduce the number of plane waves required for calculation by avoiding the strong oscillation of the wave function near the core. Thus, it has the advantage of reducing the cost when evaluating observables of a huge dimension.

In solids, there are both core and valence electrons. The former are localized and have large energy, but the latter are diffusive and have low energy due to the screening of the nuclei by the core electrons. The pseudopotential focuses on describing valence electrons that participate in chemical reactions rather than core electrons. How the core electrons react to the environment determines transferability of the correspondig pseudopotential. The transferability refers to the ability of the designed pseudopotential to describe the core electrons in any arbitrary chemical environment.

An earlier formulation of pseudopotential was introduced by Antoncik, Philips and Kleinmann [J Phys. Chem. Solids 10 314 (1959), Phys. Rev. 116. 287880 (1959)]. Following their idea, the Kohn-Sham orbital can be expressed as:

$$
\begin{equation}
\ket{\psi_{n\mathbf{k}}} = \ket{\phi^{v}_{n\mathbf{k}}} + \sum_{c}b^{c}\ket{\phi^{c}_{n\mathbf{k}}}
\end{equation}
$$

where $\ket{\psi_{n\mathbf{k}}}$ is the Kohn-Sham orbital, $\ket{\phi^{v}\_{n\mathbf{k}}}$ is the valence electron Bloch state which is also called pseudowavefunction, $b^c$ is the coefficient of $\ket{\phi^{c}\_{n\mathbf{k}}}$ which is the Bloch state for the core electrons. As in the orthogonalized plane wave method, these Bloch states for the core states are orthogonal to $\ket{\phi^{v}_{n\mathbf{k}}}$. Note that summation runs over the all core states. In order to make the core electron wavefunction and the Kohn-Sham orbital orthogonal, we have:

$$
\begin{equation}
\braket{\phi^{c}_{n\mathbf{k}}|\psi_{n\mathbf{k}}} = 0.
\end{equation}
$$

Thus, we get the expression for $b^c$:

$$
\begin{align}
\braket{\phi^{c}_{n\mathbf{k}}|\psi_{n\mathbf{k}}} &= \braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}} + \sum_{c}b^c\braket{\phi^{c}_{n\mathbf{k}}|\phi^{c}_{n\mathbf{k}}} \nonumber \\
0 &= \braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}} + b^c \nonumber \\
\therefore b^c &= -\braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}}
\end{align}
$$

Then the form of the Kohn-Sham orbital becomes:

$$
\begin{equation}
\ket{\psi_{n\mathbf{k}}} = \ket{\phi^{v}_{n\mathbf{k}}} - \sum_{c}\ket{\phi^{c}_{n\mathbf{k}}}\braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}}
\end{equation}
$$

The norm of the Kohn-Sham orbital $\braket{\psi_{n\mathbf{k}}\vert\psi_{n\mathbf{k}}}$ is given by:

$$
\begin{align}
\braket{\psi_{n\mathbf{k}}|\psi_{n\mathbf{k}}} &= \braket{\phi^{v}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}} - \sum_{c}\braket{\phi^{v}_{n\mathbf{k}}|\phi^{c}_{n\mathbf{k}}}\braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}} \nonumber \\
&- \sum_{c}\braket{\phi^{v}_{n\mathbf{k}}|\phi^{c}_{n\mathbf{k}}}\braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}} + \sum_{c}\braket{\phi^{v}_{n\mathbf{k}}|\phi^{c}_{n\mathbf{k}}}\braket{\phi^{c}_{n\mathbf{k}}|\phi^{c}_{n\mathbf{k}}}\braket{\phi^{c}_{n\mathbf{k}}|\phi^{v}_{n\mathbf{k}}} \nonumber \\
&= 1 - \sum_{c}|\braket{\phi^{v}_{n\mathbf{k}}|\phi^{c}_{n\mathbf{k}}}|^2
\end{align}
$$

Within this method, the crystalline potential is nearly constant, because they spend most of their times around the nuclei. Even though the core electrons are excited a little bit, their wavefunctions would be same as for the isolated atom. Thus, if one deals with the solid system, it is not a serious problem to assume the wavefunctions of core electrons are identical to those of the isolated atoms. We call this method a frozen-core approximation.

Pseudopotential is a non-local operator and depends on the energy. In the current discussion, we did not include other quantum numbers, such as the orbital angular momentum quantum number $l$, and the magnetic quantum number $m_l$. More advanced techniques including such quantum numbers and spin-orbit coupling which lifts the $m_l$ degeneracy will not be covered here. (Ref. Quantum Theory of the Solid State: An Introduction by Lev Kantorovich)

## Practical

The actual numerical calculations were first performed for $s$ and $p$ orbital systems by Harrison. Pseudopotential is nowadays used when calculating the electronic structure or dealing with the electron-ion interaction perturbatively. It has been verified and is well-established. For the construction of pseudopotentials, see Advanced Quantum Condensed Matter Physics.