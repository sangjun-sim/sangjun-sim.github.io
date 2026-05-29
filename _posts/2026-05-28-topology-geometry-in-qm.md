---
title: Geometry in Quantum Mechanics
date: 2026-05-28 21:00:00 +0900
categories:
  - Physics
  - Topology
tags:
  - cond-matter
  - topology
math: true
toc: true
---


## Quantum distance

The Schrödinger equation that has a parametric dependence is given by:

$$
\begin{equation}
H(\mathbf{R})\ket{\Psi(\mathbf{R})} = E(\mathbf{R})\ket{\Psi(\mathbf{R})}
\end{equation}
$$

where $\mathbf{R}$ lives in $d$-dimensional real space. Assume that the ground state $\ket{\Psi_{0}(\mathbf{R})}$ is nondegenerate for $\mathbf{R}$ in a domain of $\mathbb{R}^{d}$. Since the eigenstate has a gauge degree of freedom, there can be an arbitrary phase difference between the state $\ket{\Psi\_{0}(\mathbf{R}\_{i})}$ and $\ket{\Psi\_{0}(\mathbf{R}\_{j})}$. We can quantify the phase difference by:

$$
\begin{align}
e^{-i\phi_{i,j}} &=  \frac{\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{j})}}{|\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{j})}|}, \nonumber \\
\therefore \phi_{i,j} &= -\text{Im} \ln \left[\frac{\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{j})}}{|\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{j})}|}\right]
\end{align}
$$

The phase is modulo $2\pi$ unless two states are orthogonal. However, this quantity is gauge-dependent and carries no physical meaning. Instead, one can define the projection operator and its complement:

$$
\begin{equation}
\hat{P}(\mathbf{R}) = \ket{\Psi_{0}(\mathbf{R})}\bra{\Psi_{0}(\mathbf{R})},~~\hat{Q}(\mathbf{R}) = 1-\hat{P}(\mathbf{R})
\end{equation}
$$

These do not have any dependence on the phase and are gauge-invariant. The Bures has defined the distance between the quantum states as:

$$
\begin{equation}
D^{2} = 1 - \text{Tr}[\hat{P}(\mathbf{R}_{i})\hat{P}(\mathbf{R}_{j})]
\end{equation}
$$

This is also called the Hilbert-Schmidt quantum distance in quantum optics. Here, we will shortly call it quantum distance. The quantum distance is zero when two states are equal to each other ($\mathbf{R}\_{i} = \mathbf{R}\_{j}$):

$$
\begin{align}
D^{2} &=  1 - \text{Tr}[\ket{\Psi_{0}(\mathbf{R}_{i})}\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{i})}\bra{\Psi_{0}(\mathbf{R}_{i})}] \nonumber \\
&= 1 - \text{Tr}[\ket{\Psi_{0}(\mathbf{R}_{i})}\bra{\Psi_{0}(\mathbf{R}_{i})}] \nonumber \\
&= 0
\end{align}
$$

Additionally, $D^{2} = 1$ if two states are orthogonal:

$$
\begin{equation}
\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{j})} = 0
\end{equation}
$$

From the gauge-invariant property of the projection operator, one can see that the quantum distance is also gauge-invariant.

<br>

## Berry phase

The phase difference between two arbitrary quantum states is gauge-covariant. However, one can consider the sum of phase differences along a closed path, especially for periodic systems:

$$
\begin{equation}
\sum\limits_{i,j} \phi_{i,j} = \sum\limits_{i,j} -\text{Im}\ln [\braket{\Psi_{0}(\mathbf{R}_{i})|\Psi_{0}(\mathbf{R}_{j})}]
\end{equation}
$$

Within the summation, the gauge-variant phases vanish, and the remaining term thus becomes a gauge-invariant modulo $2\pi$ value. This is called the "Berry phase," denoted by $\gamma$. The meaning of this phase can be traced by imagining the discretized closed curve in the parameter domain. The phase difference between two points on the curve can be written as:

$$
\begin{equation}
e^{-i\phi} =  \frac{\braket{\Psi_{0}(\mathbf{R})|\Psi_{0}(\mathbf{R}+\Delta\mathbf{R})}}{|\braket{\Psi_{0}(\mathbf{R})|\Psi_{0}(\mathbf{R}+\Delta\mathbf{R})}|}
\end{equation}
$$

Assuming that we choose a gauge that sets the limit that the change in phase is differentiable, the phase for each small segment of $\mathbf{R}$; $\Delta\mathbf{R}$, is expressed as follows:

$$
\begin{equation}
-i\phi \simeq \braket{\Psi_{0}(\mathbf{R})|\nabla_\mathbf{R}|\Psi_{0}(\mathbf{R})}\cdot\Delta\mathbf{R}
\end{equation}
$$

The result of summing the phases for the numerous points densely clustered on the curve will be expressed as the following line integral:

$$
\begin{equation}
\gamma = \sum\limits_{i,j}\phi_{i,j} = \oint d\mathbf{R}\cdot~i \braket{\Psi_{0}(\mathbf{R})|\nabla_\mathbf{R}|\Psi_{0}(\mathbf{R})}
\end{equation}
$$

where the integrand is called the Berry connection $\mathbf{A}(\mathbf{R})$:

$$
\begin{equation}
\mathbf{A}(\mathbf{R}) = i \braket{\Psi_{0}(\mathbf{R})|\nabla_\mathbf{R}|\Psi_{0}(\mathbf{R})}
\end{equation}
$$

The line integral is nonzero when the curl of Berry connection is finite or nonzero and the curve forms a closed loop. The line integral can be written as the surface integral using Stoke's theorem. One important feature of the Berry connection is that it transforms into a $U(1)$ gauge symmetry. When the state is transformed into:

$$
\begin{equation}
\ket{\Psi_{0}(\mathbf{R})} \rightarrow e^{i\phi(\mathbf{R})}\ket{\Psi_{0}(\mathbf{R})}
\end{equation}
$$

By inserting this into the Berry connection formula, one gets:

$$
\begin{align}
\mathbf{A}(\mathbf{R}) &\rightarrow i\braket{\Psi_{0}(\mathbf{R})|e^{-i\phi(\mathbf{R})}\nabla_{\mathbf{R}}[e^{i\phi(\mathbf{R})}|\Psi_{0}(\mathbf{R})}] \nonumber \\
&= i\braket{\Psi_{0}(\mathbf{R})|e^{-i\phi(\mathbf{R})}[i e^{i\phi(\mathbf{R})}\nabla_{\mathbf{R}}\phi(\mathbf{R})\ket{\Psi_{0}(\mathbf{R})} +e^{i\phi(\mathbf{R})}\nabla_{\mathbf{R}}|\Psi_{0}(\mathbf{R})}] \nonumber \\
&= i\braket{\Psi_{0}(\mathbf{R})|\nabla_\mathbf{R}|\Psi_{0}(\mathbf{R})} - \nabla_\mathbf{R}\phi(\mathbf{R}) \nonumber \\
&= \mathbf{A}(\mathbf{R}) - \nabla_\mathbf{R}\phi(\mathbf{R})
\end{align}
$$

For the surface whose boundary is closed by a curve (or for the surface that is simply connected), Stoke's theorem can be applied:

$$
\begin{equation}
\oint d\mathbf{R}\cdot\mathbf{A}(\mathbf{R}) = \iint_{\partial} d\mathbf{S}\cdot\mathbf{\Omega}(\mathbf{R})
\end{equation}
$$

where the surface integration is done on the closed surface $\partial$ and the integrand is the Berry curvature $\mathbf{\Omega}(\mathbf{R})$ which can be rewritten as:

$$
\begin{align}
\mathbf{\Omega}(\mathbf{R}) &= i\varepsilon_{\alpha\mu\nu}[\partial_{\mathbf{R},\mu}\braket{\Psi_{0}(\mathbf{R})|\partial_{\mathbf{R},\nu}|\Psi_{0}(\mathbf{R})}] \nonumber \\
&= i\varepsilon_{\alpha\mu\nu}\braket{\partial_{\mathbf{R},\mu}\Psi_{0}(\mathbf{R})|\partial_{\mathbf{R},\nu}\Psi_{0}(\mathbf{R})} + i\varepsilon_{\alpha\mu\nu}\braket{\Psi_{0}(\mathbf{R})|\partial_{\mathbf{R},\mu}\partial_{\mathbf{R},\nu}|\Psi_{0}(\mathbf{R})} \nonumber \\
&= i\varepsilon_{\alpha\mu\nu}\braket{\partial_{\mathbf{R},\mu}\Psi_{0}(\mathbf{R})|\partial_{\mathbf{R},\nu}\Psi_{0}(\mathbf{R})}\\
&= \nabla_{\mathbf{R}}\times\mathbf{A}(\mathbf{R})
\end{align}
$$

The Berry curvature is measurable since it is gauge-independent, while the Berry connection is not. This can be shown by performing the gauge transformation ($\mathbf{A}'\rightarrow\mathbf{A}+\nabla\chi$) in the parametric space. Thus, one can see the similarity between the Berry curvature and the magnetic field $\mathbf{B}$ in classical electromagnetism.

$$
\begin{equation}
\mathbf{B} = \nabla \times \mathbf{A}
\end{equation}
$$

 which is also gauge-independent. The question then arises: "Is there any counterpart of the magnetic flux corresponding to the Berry curvature?" The answer is the Berry phase since it is written as the surface integration over the closed loop. One other physical quantity is the surface integral, including the origin of the source. This is the quantity so-called charge from Gauss's law, and it is known that in the case of classical magnetic field, it is $0$ ($\nabla\cdot\mathbf{B}=0$). However, if Gauss's law is applied to Berry curvature $\mathbf{\Omega}$, it can be proven that one gets an integer value. That value is named the Chern number and is defined as:
 
 $$
 \begin{equation}
 C = \frac{1}{2\pi}\iint_{\partial}d\mathbf{S}\cdot\mathbf{\Omega}(\mathbf{R})
 \end{equation}
$$

<br>

## Quantum metric

The infinitesimal quantum distance corresponds to $D^{2}\_{\mathbf{R},\mathbf{R}+d\mathbf{R}}$. It is expressed as:

$$
\begin{equation}
D^{2}_{\mathbf{R},\mathbf{R}+d\mathbf{R}} = \sum\limits_{\mu,\nu} g_{\mu\nu}(\mathbf{R})dR_{\mu}dR_{\nu}
\end{equation}
$$

where $g_{\mu\nu}$ is called the quantum metric tensor. Note that the connection between the distance and the metric is analogous to the geometry in the theory of relativity. The form of the quantum metric tensor can be derived by explicitly writing the quantum distance:

$$
\begin{align}
D^{2} &= 1 - \text{Tr}[\ket{\Psi_{0}(\mathbf{R})}\braket{\Psi_{0}(\mathbf{R})|\Psi_{0}(\mathbf{R}+d\mathbf{R})}\bra{\Psi_{0}(\mathbf{R} + d\mathbf{R})}]\\
&= 1 - \text{Tr}[\ket{\Psi_{0}(\mathbf{R})}\bra{\Psi_{0}(\mathbf{R})}(\ket{\Psi_{0}(\mathbf{R})} + \nabla_\mathbf{R}\ket{\Psi_{0}(\mathbf{R})})(\bra{\Psi_{0}(\mathbf{R})} + \nabla_\mathbf{R}\bra{\Psi_{0}(\mathbf{R})})] \nonumber \\
&= 1 - \text{Tr}[\ket{\Psi_{0}(\mathbf{R})}\bra{\Psi_{0}(\mathbf{R})}(\ket{\Psi_{0}(\mathbf{R})}\bra{\Psi_{0}(\mathbf{R})} + \ket{\Psi_{0}(\mathbf{R})}\bra{\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})} + \ket{\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})}\bra{\Psi_{0}(\mathbf{R})} + \ket{\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})}\bra{\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})})] \nonumber \\
&= 1 - \text{Tr}[\ket{\Psi_{0}(\mathbf{R})}\bra{\Psi_{0}(\mathbf{R})} + \ket{\Psi_{0}(\mathbf{R})}\bra{\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})} + \braket{\Psi_{0}(\mathbf{R})|\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})} + |\braket{\Psi_{0}(\mathbf{R})|\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})}|^{2}] \nonumber \\
&= -\text{Tr}[\ket{\Psi_{0}(\mathbf{R})}\bra{\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})} + \braket{\Psi_{0}(\mathbf{R})|\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})} + |\braket{\Psi_{0}(\mathbf{R})|\nabla_{\mathbf{R}}\Psi_{0}(\mathbf{R})}|^{2}]
\end{align}
$$

Therefore, one obtains:

$$
\begin{align}
g_{\mu\nu} &= \text{Re}\braket{\partial_\mu\Psi_{0}(\mathbf{R})|\partial_\nu\Psi_{0}(\mathbf{R})} - \braket{\partial_\mu\Psi_{0}(\mathbf{R})|\Psi_{0}(\mathbf{R})}\braket{\Psi_{0}(\mathbf{R})|\partial_{\nu}\Psi_{0}(\mathbf{R})} \nonumber \\
&= \text{Re}\braket{\partial_{\mu}\Psi_{0}(\mathbf{R})|1-\hat{P}(\mathbf{R})|\partial_{\nu}\Psi_{0}(\mathbf{R})} \nonumber \\
&= \text{Re}\braket{\partial_{\mu}\Psi_{0}(\mathbf{R})|\hat{Q}(\mathbf{R})|\partial_{\nu}\Psi_{0}(\mathbf{R})}
\end{align}
$$

The concept of the quantum metric tensor is developed by Provost and Vallee. Comparing it with the Berry curvature, one can notice that the quantum metric tensor and the Berry curvature are apart for a $-2$ factor. In addition, they are the real and imaginary components of the quantum geometric tensor $T_{\mu\nu}$, which is also called the Fubini-Study metric. The quantum geometric tensor is defined as:

$$
\begin{equation}
T_{\mu\nu} = g_{\mu\nu} - \frac{i}{2}\Omega_{\mu\nu}
\end{equation}
$$

where $g_{\mu\nu}$ is the quantum metric tensor, and $\Omega_{\mu\nu}$ is the Berry curvature. This tensor is a gauge-invariant tensor. The equivalent form of the quantum geometric tensor is given by:

$$
\begin{align}
T_{\mu\nu}(\mathbf{R}) &= \braket{\partial_{\mu}\Psi_{0}(\mathbf{R})|\hat{Q}(\mathbf{R})|\partial_{\nu}\Psi_{0}(\mathbf{R})} \nonumber \\
&= \text{Tr}[\partial_{\mu}\hat{P}(\mathbf{R})\hat{Q}(\mathbf{R})\partial_{\nu}\hat{P}(\mathbf{R})]
\end{align}
$$

<br>

## Numerical evaluation

While taking the derivative of the eigenstate is trivial analytically, the numerical differentiation of the eigenstate is not. This is because the eigenstate has a $U(1)$ gauge symmetry and the momentum-dependent phase factor can change the values of the observables. The derivative of the state can be expressed as:

$$
\begin{align}
\ket{\Psi_{0}(\mathbf{R}+d\mathbf{R})} - \ket{\Psi_{0}(\mathbf{R})} &\simeq \sum\limits_{n \neq  0} \ket{\Psi_{n}(\mathbf{R})}\frac{\braket{\Psi_{n}(\mathbf{R})|H(\mathbf{R}+d\mathbf{R})-H(\mathbf{R})|\Psi_{0}(\mathbf{R})}}{E_{0}(\mathbf{R})-E_{n}(\mathbf{R})} \nonumber \\
\ket{\partial_{\mu}\Psi_{0}(\mathbf{R})} &=  \sum\limits_{n \neq 0} \ket{\Psi_{n}(\mathbf{R})}\frac{\braket{\Psi_{n}(\mathbf{R})|\partial_{\mu}H(\mathbf{R})|\Psi_{0}(\mathbf{R})}}{E_{0}(\mathbf{R})-E_{n}(\mathbf{R})}
\end{align}
$$

In this expression, one can see that a differential operator does not apply to the eigenstate but rather to the Hamiltonian. It results from the parallel transport gauge where the multiplication of an arbitrary phase $\varphi(\mathbf{R})$ is legitimate and does not change the physical results. Using this equation, the quantum geometric tensor is written as:

$$
\begin{equation}
T_{\mu\nu}(\mathbf{R}) =  \sum\limits_{n \neq 0} \frac{\braket{\Psi_{0}(\mathbf{R})|\partial_{\mu}H(\mathbf{R})|\Psi_{n}(\mathbf{R})}\braket{\Psi_{n}(\mathbf{R})|\partial_{\nu}H(\mathbf{R})|\Psi_{0}(\mathbf{R})}}{[E_{0}(\mathbf{R})-E_{n}(\mathbf{R})]^{2}}
\end{equation}
$$

---

## References

1. Resta, R. The insulating state of matter: a geometrical theory. _Eur. Phys. J. B_ **79**, 121–137 (2011).