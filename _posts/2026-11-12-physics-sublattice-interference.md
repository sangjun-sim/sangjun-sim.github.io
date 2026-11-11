---
title: Sublattice Interference Mechanism
date: 2026-11-12 01:23:00 +0900
categories:
  - Physics
tags:
  - physics
math: true
toc: true
---

## Sublattice Interference Mechanism

This note uses the following notations:

| Symbol                               | Type               | Meaning                                                            |
| ------------------------------------ | ------------------ | ------------------------------------------------------------------ |
| $$j$$                                  | Index              | Bravais lattice index                                              |
| $$\alpha$$                             | Index              | Sublattice index                                                   |
| $$\sigma$$                             | Index              | Spin index, $$\uparrow$$ or $$\downarrow$$                             |
| $$n$$                                  | Index              | Band index                                                         |
| $$\mathbf{R}_j$$                       | Vector             | $$j$$th unit cell                                                    |
| $$\mathbf{r}_\alpha$$                  | Vector             | Position of sublattice $$\alpha$$                                    |
| $$c^\dagger_{j\alpha\sigma}$$          | Operator           | Create electron at real-space site/sublattice orbital         |
| $$c^\dagger_{\mathbf{k}\alpha\sigma}$$ | Operator           | Create Bloch-summed mode of sublattice $$\alpha$$ orbital                 |
| $$c^\dagger_{\mathbf{k}n\sigma}$$      | Operator           | Create Bloch eigenstate at band $$n$$                                |
| $$\ket{\mathbf{k},\alpha,\sigma}$$     | Basis state        | Sublattice-resolved Bloch basis state                              |
| $$\ket{\mathbf{k},n,\sigma}$$          | One-particle state | Band eigenmode state                                               |
| $$u_{\alpha n}(\mathbf{k})$$           | Coefficient        | Band $$n$$ eigenvector의 sublattice $$\alpha$$ component                |
| $$\lvert u_{\alpha n}(\mathbf{k})\rvert^{2}$$   | Weight             | Sublattice $$\alpha$$ weight of band $$n$$ state at momentum $$\mathbf{k}$$|

<br> 

### Introduction

Van Hove singularity (vHS) in electronic structure exhibits a logarithmic divergence in the density of states. Fermi surface nesting from vHS can trigger instabilities, such as spin density wave (SDW) or $d$-wave superconductivity (SC). Therefore, one can expect any lattice system that shows vHS may have similar instability scale. Nonetheless, [Kiesel 2012](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.86.121105)) proposed that Kagome and Honeycomb lattice have a different scale in the weak-coupling limit, based on their vertex analysis.

In their paper, they explained "sublattice interference" differs from the sublattice structure in each lattice system: For a metallic system, the instability is determined by how many states scatter in the vicinity of the Fermi level. The picture here is that a Bloch state near that level has information on the sublattice distribution. When one calculates interaction vertex, it includes this information. Thus, even if the nesting is perfect, once the sublattice character of a propagator is different, then the scattering matrix element becomes small. Accodingly, the local Coulomb interaction gets smaller. This is what they call: "Sublattice Interference Mechanism (SIM)"

<br>

### States in Kagome lattice

Kagome lattice has three sublattices: $$A$$, $$B$$, and $$C$$. Here, one can write a sublattice creation operator $$c^{\dagger}_{j\alpha\sigma}$$ that has sublattice character in the real space. $$j$$ indicates Bravais lattice index, $$\alpha$$ is a sublattice index within a cell ($$\alpha\in\{A,B,C\})$$), and $$\sigma$$ is a spin index ($$\sigma\in\{\uparrow,\downarrow\}$$). In Kagome Hubbard model, this operator satisfies the following commutation relation as a canonical fermion operator:

$$
\begin{equation}
\{c_{j\alpha\sigma}, c^{\dagger}_{j'\alpha'\sigma'}\} = \delta_{jj'}\delta_{\alpha\alpha'}\delta_{\sigma\sigma'}
\end{equation}
$$

From this relation, $$\ket{j\alpha\sigma} = c^{\dagger}_{j\alpha\sigma}\ket{0}$$ forms orthonormal basis with respect to Fock vacuum $$\ket{0}$$. This is the basis of localized orbital on the Kagome lattice. Through Fourier transformation, one can represent it in the momentum space:

$$
\begin{equation}
\ket{\mathbf{k}\alpha\sigma} \equiv c^{\dagger}_{\mathbf{k}\alpha\sigma}\ket{0} = \frac{1}{\sqrt{N}}\sum_{j} e^{i\mathbf{k}\cdot(\mathbf{R}_{j}+\mathbf{r}_{\alpha})} c^{\dagger}_{j\alpha\sigma}\ket{0}
\end{equation}
$$

Note that $$\ket{\mathbf{k}\alpha\sigma}$$ is the Fourier transformation of localized orbtial on the specific sublattice $$\alpha$$, not the Bloch state. This is nothing but the basis for Bloch Hamiltonian representation. In other words, since electrons hop between different sublattices, the nearest-neighbor Hamiltonian in the corresponding basis is not diagonal in general:

$$
\begin{align}
H_{0} &= \sum_{\mathbf{k},\sigma} \sum_{\alpha,\beta} c^{\dagger}_{\mathbf{k}\alpha\sigma}h_{\alpha\beta}(\mathbf{k})c_{\mathbf{k}\beta\sigma} \nonumber \\
&= \sum_{\mathbf{k},\sigma} 
\begin{bmatrix} 
c^{\dagger}_{\mathbf{k}A\sigma} & 
c^{\dagger}_{\mathbf{k}B\sigma} & 
c^{\dagger}_{\mathbf{k}C\sigma} 
\end{bmatrix} 
\begin{bmatrix} 
0 & h_{\rm AB}(\mathbf{k}) & h_{\rm AC}(\mathbf{k}) \\
h_{\rm BA}(\mathbf{k}) & 0 & h_{\rm BC}(\mathbf{k}) \\
h_{\rm CA}(\mathbf{k}) & h_{\rm CB}(\mathbf{k}) & 0
\end{bmatrix} 
\begin{bmatrix} 
c_{\mathbf{k}A\sigma} \\ 
c_{\mathbf{k}B\sigma} \\ 
c_{\mathbf{k}C\sigma} 
\end{bmatrix} 
\end{align}
$$

<br>

### Transformation coefficient

In order to find the Bloch state that diagonalizes $$h_{\alpha\beta}(\mathbf{k})$$, one needs a linear combintation of $$\ket{\mathbf{k}\alpha\sigma}$$ ($$\alpha = \{A, B, C\}$$). The Bloch state can be written as:

$$
\begin{equation}
\ket{\psi_{n\mathbf{k}\sigma}} = c^{\dagger}_{\mathbf{k}n\sigma}\ket{0} = \sum_{\alpha\in\{A,B,C\}}u_{\alpha n}(\mathbf{k})c^{\dagger}_{\mathbf{k}\alpha\sigma}\ket{0}
\end{equation}
$$

where $$u_{\alpha n}(\mathbf{k})$$ tells one which linear combintation diagonalizes $$h(\mathbf{k})$$. It has seveeral significant meanings for the further discussion. Firstly, $$u_{\alpha n}(\mathbf{k})$$ can be expressed as $$\braket{\mathbf{k}\alpha\sigma\vert\mathbf{k}n\sigma}$$. Physically, this is the projection from the sublattice basis $$\ket{\mathbf{k}\alpha\sigma}$$ to the band basis $$\ket{\mathbf{k}n\sigma}$$. In consequence, it is the transformation coefficient connecting two different states. Secondly, $$u_{\alpha n}(\mathbf{k})$$ is the eigenstate component from solving the following eigenvalue problem:

$$
\begin{equation}
\sum_{\alpha,\beta}h_{\alpha\beta}(\mathbf{k})u_{\beta n}(\mathbf{k}) = \sum_{\alpha,\beta} \varepsilon_{n}(\mathbf{k})u_{\alpha n}(\mathbf{k})
\end{equation}
$$

$$\lvert u_{\alpha n}(\mathbf{k})\rvert^{2}$$ indicates the sublattice weight of the Bloch state at momentum $$\mathbf{k}$$. Additionally, one can show the sum rule of $$\lvert u_{\alpha n}(\mathbf{k})\rvert^{2}$$ by using the orthonormality property of Bloch state and $$\ket{j\alpha\sigma}$$:

$$
\begin{align}
\braket{\psi_{n\mathbf{k}\sigma}|\psi_{n\mathbf{k}\sigma}} &= \sum_{\alpha,\alpha'} u^{*}_{\alpha' n}(\mathbf{k})u_{\alpha n}(\mathbf{k})\braket{\mathbf{k}\alpha'\sigma|\mathbf{k}\alpha\sigma} \nonumber \\
&= \sum_{\alpha,\alpha'} u^{*}_{\alpha' n}(\mathbf{k})u_{\alpha n}(\mathbf{k}) \delta_{\alpha,\alpha'} \nonumber \\
&= \sum_{\alpha} |u_{\alpha n}(\mathbf{k})|^{2} = 1, \nonumber \\

\therefore ~~&~~ \sum_{\alpha} |u_{\alpha n}(\mathbf{k})|^{2} = 1

\end{align}
$$

If $$\ket{j\alpha\sigma}$$ is a non-orthogonal atomic orbital basis, the overlap matrix $$S_{\alpha\beta}(\mathbf{k})$$ will be present. Depending on the distribution of Bloch states in each sublattice, the vHs at each $$M$$ point can be classified into $$p$$-type ("pure"-type) and $$m$$-type ("mixed"-type) vHs. The $$p$$-type vHs is a point where sublattice occupation is accumulated in one specific sublattice. On the other hand, the $$m$$-type vHs has uniformly distributed sublattice occupation.

<br>

### On-site Hubbard interaction

By definition, the on-site Hubbard interaction is $$n_{j\alpha\uparrow}n_{j\alpha\downarrow}$$. Therefore, the interaction Bloch state with the real-space site and same sublattice character. Since Hubbard interaction is locally defined in real space, the creation/annihilation operator also should be described in the real space. First of all, the creation/annihilation operators with respect to sublattice basis are expressed as follows:

$$
\begin{equation}
c^{\dagger}_{j\alpha\sigma} = \frac{1}{\sqrt{N}}\sum_{\mathbf{k}} c^\dagger_{\mathbf{k}\alpha\sigma}   
e^{-i\mathbf{k}\cdot(\mathbf{R}_{j} + \mathbf{r}_{\alpha})}
\end{equation}
$$

where the issue is that how can $$c^{\dagger}_{\mathbf{k}\alpha\sigma}$$ be written as $$c^{\dagger}_{\mathbf{k}n\sigma}$$. One can see that the following relation is established when definining Bloch state:

$$
\begin{equation}
\ket{\mathbf{k}n\sigma} = \sum_{\alpha\in\{A,B,C\}}u_{\alpha n}(\mathbf{k}) \ket{\mathbf{k}\alpha\sigma}
\end{equation}
$$

Here, $$\ket{\mathbf{k}n\sigma}$$ and $$\ket{\mathbf{k}\alpha\sigma}$$ are the expressions of $$c^{\dagger}_{\mathbf{k}n\sigma}\ket{0}$$ and  $$c^{\dagger}_{\mathbf{k}\alpha\sigma}\ket{0}$$. If one uses the completeness of $$\ket{\mathbf{k}n\sigma}$$ so that $$\ket{\mathbf{k}\alpha\sigma}$$ is rewritten as $$\ket{\mathbf{k}n\sigma}$$, then $$\ket{\mathbf{k}\alpha\sigma}$$ reads:

$$
\begin{equation}
\ket{\mathbf{k}\alpha\sigma} = \sum_{n} \ket{\mathbf{k}n\sigma} \underbrace{(\braket{\mathbf{k}n\sigma|\mathbf{k}\alpha\sigma})}_{u^{*}_{\alpha n}(\mathbf{k})}
\end{equation}
$$

Therefore, $$c^{\dagger}_{j\alpha\sigma}$$ is expressed as follows:

$$
\begin{equation}
c^{\dagger}_{j\alpha\sigma} = \frac{1}{\sqrt{N}}\sum_{\mathbf{k},n} u^{*}_{\alpha n}(\mathbf{k}) c^\dagger_{\mathbf{k}n\sigma}   
e^{-i\mathbf{k}\cdot(\mathbf{R}_{j} + \mathbf{r}_{\alpha})}
\end{equation}
$$

From this equation, Hubbard interaction includes the product of transformation coefficients $$u_{\alpha n}(\mathbf{k})$$:

$$
\begin{equation}
H_{1} = U\sum_{j,\alpha}n_{j\alpha\uparrow}n_{j\alpha\downarrow}
\end{equation}
$$

where $$\sum_{j} n_{j\alpha\uparrow}n_{j\alpha\downarrow}$$ is given by:

$$
\begin{align}
\sum_{j} n_{j\alpha\uparrow}n_{j\alpha\downarrow} &= \sum_{j} c^{\dagger}_{j\alpha\uparrow}c_{j\alpha\uparrow}c^{\dagger}_{j\alpha\downarrow}c_{j\alpha\downarrow} \nonumber \\
&= \frac{1}{N^{2}}\sum_{j}\sum_{\mathbf{k}_{1},\mathbf{k}_{2}}\sum_{\mathbf{k}_{3},\mathbf{k}_{4}} e^{-i(\mathbf{k}_{1}-\mathbf{k}_{2}+\mathbf{k}_{3}-\mathbf{k}_{4})\cdot(\mathbf{R}_{j}+\mathbf{r}_{\alpha})} c^{\dagger}_{\mathbf{k}_{1}\alpha\uparrow}c_{\mathbf{k}_{2}\alpha\uparrow}c^{\dagger}_{\mathbf{k}_{3}\alpha\downarrow}c_{\mathbf{k}_{4}\alpha\downarrow}
\end{align}
$$

Here, $$\sum_{j} e^{-i(\mathbf{k}_{1}-\mathbf{k}_{2}+\mathbf{k}_{3}-\mathbf{k}_{4})\cdot\mathbf{R}_{j}}$$ is given by $$N\delta_{\mathbf{k}_{1}-\mathbf{k}_{2}+\mathbf{k}_{3}-\mathbf{k}_{4},\mathbf{0}}$$, and the following momentum conservation law holds:

$$
\begin{equation}
\mathbf{k}_{1}-\mathbf{k}_{2} = \mathbf{q},~\text{and}~\mathbf{k}_{3}-\mathbf{k}_{4} = -\mathbf{q}
\end{equation}
$$

If one puts $$\mathbf{k}_{2} = \mathbf{k}$$, $$\mathbf{k}_{4} = \mathbf{k}'$$, $$H_{1}$$ yields:

$$
\begin{equation}
H_{1} = \frac{U}{N}\sum_{\alpha}\sum_{\mathbf{k},\mathbf{k}',\mathbf{q}} c^{\dagger}_{\mathbf{k}+\mathbf{q}\alpha\uparrow}c_{\mathbf{k}\alpha\uparrow}c^{\dagger}_{\mathbf{k}'-\mathbf{q}\alpha\downarrow}c_{\mathbf{k}'\alpha\downarrow}
\end{equation}
$$

This is the on-site Hubbard Hamiltonian in the momentum space. If one replaces sublattice basis with Bloch state, it is written in terms of the transformation coefficients:

$$
\begin{align}
H_{1} = \frac{U}{N}\sum_{\alpha}\sum_{m,m',n,n'}\sum_{\mathbf{k},\mathbf{k}',\mathbf{q}} & [u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})] \times \nonumber \\ 
 [u^{*}_{\alpha n}(\mathbf{k}'-\mathbf{q})u_{\alpha n'}(\mathbf{k}')] & \times c^{\dagger}_{\mathbf{k}+\mathbf{q}m\uparrow}c_{\mathbf{k}m'\uparrow}c^{\dagger}_{\mathbf{k}'-\mathbf{q}n\downarrow}c_{\mathbf{k}'n'\downarrow}
\end{align}
$$

<br>

### Form factor and sublattice interference mechanism

One defines sublattice form factor $$F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})$$, which sums $$[ u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})]$$ and $$[u^{*}_{\alpha n}(\mathbf{k}'-\mathbf{q})u_{\alpha n'}(\mathbf{k}')]$$ over the sublattice degree of freedom:

$$
\begin{equation}
F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k}) \equiv \sum_{\alpha} u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})
\end{equation}
$$

This describes an electron scattering from $$\mathbf{k}$$ to $$\mathbf{k}+\mathbf{q}$$. Also, Hubbard interaction acts on the same $$\alpha$$, which makes the summation only over $\alpha$. If two electrons are located at different sublattices (one is $$A$$, and the other is $$C$$), the scattering amplitude becomes $$0$$. The effective two-particle scattering vertex is given by a product of $$F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})$$ and $$F_{nn'}(\mathbf{k'}-\mathbf{q},\mathbf{k'})$$:

$$
\begin{equation}
\Gamma^{mm',nn'}(\mathbf{k}+\mathbf{q},\mathbf{k};\mathbf{k}'-\mathbf{q},\mathbf{k}') = U\cdot F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})\cdot F_{nn'}(\mathbf{k'}-\mathbf{q},\mathbf{k'})
\end{equation}
$$

This is the irreducible kernel $$\Gamma_{0}$$ in Bethe-Salpeter equation. The paper uses this as an initial condition for functional renormalization group (fRG). This sublattice form factor satisfies the following Cauchy-Schwarz inequality:

$$
\begin{equation}
|F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})|^{2} = \Big\lvert\sum_{\alpha}u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})\Big\rvert^{2} \leq \left( \sum_{\alpha} |u_{\alpha m}(\mathbf{k}+\mathbf{q})|^{2} \right)\left( \sum_{\alpha} |u_{\alpha m'}(\mathbf{k})|^{2} \right) = 1
\end{equation}
$$

Thus, the sublattice form factor is less than $$1$$. One can see that bare interaction becomes smaller. This is the core of sublattice interference: Local Hubbard interaction acts on the same sublattice index $$\alpha$$. When a nesting vector $$\mathbf{q}$$ connects two VHS points with orthogonal sublattice polarizations, the vertex is strongly suppressed — the states "don't see each other" through the on-site interaction. The interaction is strengthened when scattering Bloch states share the same sublattice component.

<br> 

### Sublattice interference with concrete example

This can be shown with an exmaple. The single-band Kagome tight-binding Hamiltonian is given by:

$$
\begin{equation}
h(\mathbf{k}) = -t \begin{bmatrix}
        0 & 1 + e^{-i\mathbf{k}\cdot\mathbf{a}_{1}} & 1 + e^{-i\mathbf{k}\cdot\mathbf{a}_{2}} \\
        1 + e^{i\mathbf{k}\cdot\mathbf{a}_{1}} & 0 & 1 + e^{-i\mathbf{k}\cdot\boldsymbol\delta} \\ 
        1 + e^{i\mathbf{k}\cdot\mathbf{a}_{2}} & 1 + e^{i\mathbf{k}\cdot\boldsymbol\delta} & 0
    \end{bmatrix}
\end{equation}
$$

where one can refer to my note on Kagome tight-binding model for definitions of lattice vectors $$\mathbf{a}_{i}$$, $$\boldsymbol{\delta}$$, and reciprocal lattice vectors $$\mathbf{k}$$. The inner product of three $$\mathbf{M}$$ in hexagonal Brillouin zone and lattice vectors are given by:

$$
\begin{align}
\mathbf{M}_{1}\cdot\mathbf{a}_{1} = \pi, ~\mathbf{M}_{1}\cdot\mathbf{a}_{2} = 0, ~\mathbf{M}_{1}\cdot\boldsymbol{\delta} = \pi, \nonumber \\

\mathbf{M}_{2}\cdot\mathbf{a}_{1} = 0, ~\mathbf{M}_{2}\cdot\mathbf{a}_{2} = \pi, ~\mathbf{M}_{2}\cdot\boldsymbol{\delta} = \pi, \nonumber \\

\mathbf{M}_{3}\cdot\mathbf{a}_{1} = \pi, ~\mathbf{M}_{3}\cdot\mathbf{a}_{2} = \pi, ~\mathbf{M}_{3}\cdot\boldsymbol{\delta} = 0.

\end{align}
$$

For the eigenvalues at vHs ($$\mathbf{M}$$ points with $$\varepsilon = 0$$), the eigenstate depends on one sublattice:

$$
\begin{align}
H(\mathbf{M}_{1}) = -t\begin{bmatrix} 0 & 0 & 2 \\ 0 & 0 & 0 \\ 2 & 0 & 0 \end{bmatrix}, ~ \ket{\mathbf{M}_{1}} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, \nonumber \\
H(\mathbf{M}_{2}) = -t\begin{bmatrix} 0 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, ~ \ket{\mathbf{M}_{2}} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}, \nonumber \\
H(\mathbf{M}_{3}) = -t\begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 2 \\ 0 & 2 & 0 \end{bmatrix}, ~ \ket{\mathbf{M}_{3}} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.
\end{align}
$$

When one calculates the form factor for scattering between $$\mathbf{M}$$ points, $$F(\mathbf{M}_{i},\mathbf{M}_{j}) = 0$$ for scattering at the same $$\mathbf{M}$$ point. This implies that: Even though $$\mathbf{Q}$$ is a good nesting vector, the interaction can be smaller. On the other hand, if two Fermi surface points share the same dominant sublattice character, the scattering from local Hubbard interaction becomes stronger. This is called sublattice interference.

Honeycomb model demonstrates Fermi surface topology and density of states as in Kagome. However, the sublattice weight around Van Hove filling is relatively homogeneous. Hence, honeycomb case does not show sublattice interference. This is why superconducting eigenvalue is larger in Honeycomb model in the result of weak-coupling-limit RG calculation.

<br>

### Effect of longer-range interaction

If nearest-neighbor interaction $$U_1$$ is included, there is a density-density interaction between different sublattices. In this case, the interaction vertex is no longer diagonal with respect to sublattice index. Moreover, there can be new scattering channel between sublattice components. Owing to this, long-range Hubbard interaction in Kagome Hubbard model relaxes sublattice interference and increases pairing scale.
