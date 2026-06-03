---
title: Frustrated magnet
date: 2026-05-26 14:00:00 +0900
categories:
  - Physics
  - Magnetism
tags:
  - magnetism
math: true
toc: true
---

## What is frustration?

Frustration in magnetic systems indicates **the absence of long-range order due to quantum fluctuation**s. In other words, the frustrated magnets contain competing interactions that cannot be fully satisfied. This implies that it is difficult to form an order for magnetic moments. Thus, they exhibit giant fluctuations even at low temperatures [(see p. 5, Knolle)](https://link.springer.com/book/10.1007/978-3-319-23953-8). The frustration can be created by geometry or by adding an extra exchange interaction in the Heisenberg model. If one includes the second nearest neighbor interaction and assumes that it is comparable to the first nearest neighbor interaction, then the ground state becomes degenerate to the classical state.

{: .prompt-info}
> One usually thinks that the disorder occurs from a temperature through the Helmholtz free energy relation: $F = U - TS$. However, quantum spin liquid is a phase where the disorder can emerge at zero temperature due to fluctuations. The mechanisms of disorder are quantum fluctuation, geometric frustration, and the dimensionality of a system.

## Properties of a frustrated magnet

For example, the Ising model for a triangular lattice with the nearest-neighbor antiferromagnetic interaction ($\braket{\mathbf{S}} = 0$) is frustrated ([see Wannier](https://journals.aps.org/pr/abstract/10.1103/PhysRev.79.357)). This can be restated as follows: There is no unique ordering but a huge degeneracy, which gives a finite entropy at zero temperature ([See p. 173 in Khomskii](https://www.cambridge.org/core/books/transition-metal-compounds/037907D3274F602D84CFECA02A493395)). This entropy is a measure of the degeneracy and is called residual entropy. Since there are $1/3$ sites of the total number of spins $N$ to put a frustrated spin state (up or down) at the corner of a triangle, there are $2^{N/3}$ degenerate states. Accordingly, the entropy is given by:

$$ \begin{equation} S = k\ln\Omega = \frac{Nk}{3}\ln 2 \simeq 0.231Nk \end{equation} $$

For the triangular lattice with the exact solution, it is given by:

$$ \begin{equation} S = \frac{2Nk}{\pi}\int^{\pi/3}_{0} d\omega~\log(2\cos\omega) \simeq 0.3383Nk \end{equation} $$

For the kagome lattice, $S \simeq 0.50183 Nk$, which states that the kagome lattice is more frustrated than the triangular lattice. If one applies a magnetic field so that $H\neq 0$, the magnetic field will point up the undecided spin. This will change the magnetization from $M = 0$ to $M = NM_{\rm max} = \frac{1}{3}M_{\rm max}$, where $N$ is the number of sites. With increasing the magnetic field, $M$ still remains finite until another critical field $H_c$. Above the critical field, all spins will flip in up directions, and finally, the system will be ferromagnetic. This results in _magnetization plateaux_, which is typical for frustrated magnets.

For noncollinear spins, the classical state of a triangular lattice would be $120°$ spin configuration. This gives the energy of $E = 3JS^{2}\cos(2\pi/3) = -3JS^{2}/2$. One can expect the realization of $120°$ spin configuration in the quantum case ($S = 1/2$). However, due to the strong antiferromagnetic correlation, the system can exhibit no long-range order. Based on Pauling's work on the Benzene molecule [citation], Anderson suggested a spin liquid phase that is stable and showed no long-range order for $S = 1/2$ antiferromagnetic triangular lattice. Here, the spin liquid is realized by a **resonating valence bond state**. However, note that it is not an exact ground state. Simple calculations can show that the spin liquid state and the classical state are degenerate ([See p. 114 in Khomskii](https://www.cambridge.org/core/books/basic-aspects-of-the-quantum-theory-of-solids/6FAA00743ABE9CD0774352627FA6CB96)). Also, several numerical calculations with many-body techniques reveal that $120°$ spin configuration is still stable for $S = 1/2$ case.

## Valence bond in a one-dimensional spin chain

Consider a one-dimensional spin chain with $S = 1/2$. The Heisenberg model for this system is described as:

$$ \begin{equation} H = -J\sum\limits^{N}_{i}\mathbf{S}_{i}\cdot\mathbf{S}_{i+1} \end{equation} $$

where $N$ is the number of sites. If the coupling is antiferromagnetic ($J < 0$), one would expect the ground state to be the Néel state. The Néel state is described as $\ket{\rm Neel} = \ket{\uparrow\downarrow\uparrow\downarrow\cdots\uparrow\downarrow}$. Accordingly, its eigenvalue gives rise to:

$$ \begin{align} H\ket{\rm Neel} &= -J(S^{z}_{1}S^{z}_{2}+S^{z}_{2}S^{z}_{3}+\cdots+S^{z}_{N}S^{z}_{N+1})\ket{\uparrow\downarrow\uparrow\downarrow\cdots\uparrow\downarrow} \nonumber \\ &= -\frac{JN}{4}\ket{\rm Neel} \end{align} $$

However, this is not the true eigenstate for $S = 1/2$ case. Instead, It is the classical eigenstate of the Heisenberg model. This can be shown by the following: Using the ladder operator notation,

$$ \begin{align} S^{+}_{i} &= S^{x}_{i}+iS^{y}_{i}, \nonumber \\ S^{-}_{i} &= S^{x}_{i}-iS^{y}_{i}, \end{align} $$

one can rewrite the Hamiltonian:

$$ \begin{equation} H = -J\sum\limits^{N}_{i}\left[S^{z}_{i}S^{z}_{i+1}+\frac{1}{2}(S^{+}_{i}S^{-}_{i+1}+S^{-}_{i}S^{+}_{i+1})\right] \end{equation} $$

Due to the terms; $S^{+}_{i}S^{-}_{i+1}$ and its Hermitian conjugate, the Neél state is not the true ground state. The true ground state should be a superposition of multiple spin configurations. Recall that a state for a pair of spins can be represented as a spin singlet:

$$ \begin{equation} \ket{\mathrm{Singlet}} = \frac{1}{\sqrt 2}(\ket{\uparrow\downarrow}-\ket{\downarrow\uparrow}) \end{equation} $$

A spin singlet is antisymmetric and isotropic in spin space. Here, one assumes that an eigenstate is a multiplicative combination of single states, which considers a bond between the $i$th and $(i+1)$th site **without repetitive choices**. This trial state is called a _valence bond_, and it is given by:

$$ \begin{equation} \ket{\Psi_{\rm VB}} = \prod_{i\in 2\mathbb{Z}+1} \frac{1}{\sqrt 2}(\ket{\uparrow_{i}\downarrow_{i+1}}-\ket{\downarrow_{i}\uparrow_{i+1}}) \end{equation} $$

Since the singlet state is isotropic in spin space (see the block below), the eigenvalue with respect to $S^{x}$, $S^{y}$, and $S^{z}$ is required to obtain the eigenvalue of the Heisenberg model. One strategy is to represent $\mathbf{S}\_{i}\cdot\mathbf{S}\_{i+1}$ as:

$$ \begin{equation} \mathbf{S}_{i}\cdot\mathbf{S}_{i+1} = \frac{1}{2}[\mathbf{S}^{2}_{\rm tot}-\mathbf{S}^{2}_{i}-\mathbf{S}^{2}_{i+1}] \end{equation} $$

where $\mathbf{S}\_{\rm tot} = \mathbf{S}\_{i}+\mathbf{S}\_{i+1}$. For a singlet state, the eigenvalue of $\mathbf{S}^{2}\_{\rm tot}$ is $S\_{\rm tot} = 0$, while the eigenvalue of $\mathbf{S}^{2}\_{i}$ is $3/4$. Thereby, $\braket{\mathbf{S}\_{i}\cdot\mathbf{S}\_{i+1}}$ is $-3J/4$. In general, the number of bonds is given by $N_{\rm bond} = N/z$ where $z$ is the number of neighboring sites. Therefore, the total energy of this state is equal to:

$$ \begin{equation} E_{\rm VB} = -\frac{3J}{4}\sum\limits^{'}_{i} = -\frac{3JN}{8} \end{equation} $$

which is lower than the Néel state. 

{: .prompt-info}
> Here, the isotropy in spin space of the singlet state means that any global $SU(2)$ rotation does not change the singlet state:
> $$ \begin{equation} U(R)\ket{\rm Singlet} = \ket{\rm Singlet} \end{equation} $$

## Resonance valence bond

As a matter of fact, the energy can be further lowered by superimposing many valence bond states that have interchanged singlet bonds for empty bonds. In addition, each valence bond state has its own coefficient. Since this concept is similar to the resonating valence bond in a Benzene molecule, such a state is coined as a resonating valence bond.

Within the framework of the nonlinear sigma model, consider the $J_{1}$-$J_{2}$ model on the square lattice. Depending on the value of $J_{2}$, three phases can be expected:

1. Néel order along the $\mathbf{Q} = (\pi,0)$ or $\mathbf{Q} = (0,\pi)$ direction ($J_{1}>J_{2}$),
2. Destruction of Néel order and a transition to a paramagnetic phase ($J_{2}\geq J_{c}$),
3. A new Néel order along the $\mathbf{Q} = (\pi,\pi)$ direction ($J_{2}\gg J_{1}$).

In the second case, one expects the bare coupling constant $g$ to increase and the spin-wave velocity $v_{s}$ to decrease. Finally, in the classical frustrated limit $J_{1} = 2J_{2}$, the spin-correlation length becomes very short ($\xi \sim a$), and a state with short-range spin singlets ($S = 0$) emerges. Such a state is called a valence-bond state.

## Excited state of the valence bond state

The excitation of the valence bond is realized by creating a triplet that reverses the direction of a spin on the valence bond. Two spins from this broken pair of valence bonds are called spinons. Each spin carries $S = 1/2$, while it does not have a charge. This is because commuting the spin does not have to move the charge, and the positive nucleus and negatively charged electrons remain at each site. Another characteristic of a spinon is that its spectrum is gapless. Nonetheless, it is not a consequence of the Goldstone theorem, which states that a continuous symmetry breaking leads to a gapless boson. The excited state preserves the symmetry of the ground state. Another excitation is also possible. One can remove an electron in a broken single state (or a **spinon**) so that there is an uncompensated charge $+e$ but no spin. This kind of an excited state due to an empty electron is referred to as a **holon**. The spinon and holon imply that one has a degree of freedom in the spin-charge separation. However, this is valid only in one dimension. (It is not proven that the spin-charge separation is possible in two or three dimensions.)

These valence-bond states can be broadly classified according to whether time-reversal symmetry is preserved or broken:

| TRS       | Type                      | Spectrum | Gauge structure          | Excitations                                  | Topological order                                                           | Reference                                       |
| --------- | ------------------------- | -------- | ------------------------ | -------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------- |
| Preserved | Long-range RVB            | Gapless  | $U(1)$                   | Spinon Fermi surface                         | None                                                                        | Anderson, *Mater. Res. Bull.* **8**, 153 (1973) |
| Preserved | Short-range RVB           | Gapped   | $\mathbb{Z}_{2}$         | Spinons, visons                              | $\mathbb{Z}_{2}$ (fourfold GSD on torus)                                    | Rokhsar & Kivelson, *PRL* **61**, 2376 (1988)   |
| Preserved | Algebraic SL              | Gapless  | $U(1)$                   | Dirac spinons                                | None (critical, power-law correlations)                                     | Rantner & Wen, *PRL* **86**, 3871 (2001)        |
| Preserved | Kitaev SL (gapless phase) | Gapless  | $\mathbb{Z}_{2}$         | Majorana fermions, $\mathbb{Z}_{2}$ vortices | None                                                                        | Kitaev, *Ann. Phys.* **321**, 2 (2006)          |
| Preserved | Kitaev SL (gapped phase)  | Gapped   | $\mathbb{Z}_{2}$         | Non-Abelian anyons (Ising type)              | Non-Abelian; threefold GSD on torus                                         | Kitaev, *Ann. Phys.* **321**, 2 (2006)          |
| Broken    | Kalmeyer-Laughlin         | Gapped   | $U(1)$ Chern-Simons      | Semions ($\theta = \pi/2$)                   | Twofold GSD on torus                                                        | Kalmeyer & Laughlin, *PRL* **59**, 2095 (1987)  |
| Broken    | Chiral spin liquid        | Gapped   | $SU(2)_{1}$ Chern-Simons | Anyons; chiral edge modes                    | $\braket{\mathbf{S}\_{i}\cdot(\mathbf{S}\_{j}\times\mathbf{S}\_{k})}\neq 0$ | Wen, Wilczek & Zee, *PRB* **39**, 11413 (1989)  |
| Broken    | Spiral spin liquid        | Gapless  | —                        | Magnons (Goldstone)                          | None; degenerate manifold in $\mathbf{k}$-space                             | Bergman *et al.*, *PRB* **75**, 144403 (2007)   |
| —         | Valence bond solid        | Gapped   | —                        | Triplons (gapped $S=1$)                      | None; breaks lattice translational symmetry                                 | Read & Sachdev, *PRL* **62**, 1694 (1989)       |
| —         | AKLT state                | Gapped   | —                        | Fractionalized $S=1/2$ edge states           | SPT (Haldane phase); no intrinsic topological order                         | Affleck *et al.*, *PRL* **59**, 799 (1987)      |

The valence-bond (VB) state is built by the tensor product of the singlet states:

$$ \begin{equation} \ket{\rm VB} = \prod_{k\in \mathrm{pairs}}\otimes\ket{(i_{k}j_{k})} \end{equation} $$

where $\ket{(ij)}$ denotes the singlet state at the sites $i$ and $j$:

$$ \begin{equation} \ket{(ij)} = \frac{1}{\sqrt{2}}(\ket{\uparrow_{i}\downarrow_{j}}-\ket{\downarrow_{i}\uparrow_{j}}) \end{equation} $$

which gives a null eigenvalue of $\mathbf{S}^{2}$ and $S_{z}$ operators. This implies that $S_{\rm tot} = 0$. This is a necessary condition for a VB state. One expects that the linear combination of the valence-bond states gives the ground state:

$$ \begin{equation} \ket{\rm GND} = \sum\limits_{P}A(P)\ket{\rm VB} \end{equation} $$

where $P$ indicates the partition that distinguishes the singlet-pair and $A(P)$ is the amplitude of the valence-bond state at each partition. If the number of lattice sites is not even (non-bipartite) so that the singlet state cannot form a pair, the correlation length becomes finite, and the excitation spectrum would be gapped [p. 292 in Field theories of condensed matter physics]. However, there are a few issues: (1) the valence-bond state is **not orthogonal**, and (2) it is **linearly dependent**. To remedy these issues, one uses the factorized amplitude, which assumes that:

$$ \begin{equation} A(P) = \prod_{\rm pairs}a(i,j) \end{equation} $$

The value of $a\left(i,j\right)$ is determined by the variational calculations. If one further asserts that $a\left(i,j\right) = a\left(\|i-j\|\right)$, then one calls this state a resonating-valence-bond state (RVB state). The meaning of the 'resonance' comes from the sense that the same amplitude applies to all the valence bonds with different sites at the same relative distance. An extensive study on this state showed that if the order of a power-law ansatz for:

$$
\begin{equation}
a (i,j) \simeq \frac{\mathrm{const.}}{|i-j|^{\sigma}}
\end{equation}
$$

is smaller than $5$, there is a long-range Néel order. An example of a resonating valence-bond state is the "short-range" RVB, which is the linear superposition of all dimer configurations with equal amplitude. The short-range RVB is linear-independent. However, it is nonorthogonal. It can be shown by the following two states.

$$ \begin{equation} \ket{a} = \ket{\overline{12}}\otimes\ket{\overline{34}},~\ket{b} = \ket{\overline{13}}\otimes\ket{\overline{42}} \end{equation} $$

where

$$ \begin{equation} \ket{\overline{12}} = \frac{1}{\sqrt{2}}[\ket{\uparrow_{1}\downarrow_{2}}-\ket{\downarrow_{1}\uparrow_{2}}] \end{equation} $$

Thus, the states can be rewritten as:

$$ \begin{align} \ket{a} &= \ket{\overline{12}}\otimes\ket{\overline{43}} = \frac{1}{2}[\ket{\uparrow_{1}\downarrow_{2}\uparrow_{4}\downarrow_{3}}-\ket{\uparrow_{1}\downarrow_{2}\downarrow_{4}\uparrow_{3}}-\ket{\downarrow_{1}\uparrow_{2}\uparrow_{4}\downarrow_{3}}+\ket{\downarrow_{1}\uparrow_{2}\downarrow_{4}\uparrow_{3}}], \nonumber \\ \ket{b} &= \ket{\overline{13}}\otimes\ket{\overline{42}} = \frac{1}{2}[\ket{\uparrow_{1}\downarrow_{3}\uparrow_{4}\downarrow_{2}}-\ket{\uparrow_{1}\downarrow_{3}\downarrow_{4}\uparrow_{2}}-\ket{\downarrow_{1}\uparrow_{3}\uparrow_{4}\downarrow_{2}}+\ket{\downarrow_{1}\uparrow_{3}\downarrow_{4}\uparrow_{2}}] \end{align} $$

The inner product of $\ket{a}$ and $\ket{b}$ is given by:

$$ \begin{align} \braket{a|b} &= \frac{1}{4}[\braket{\uparrow_{1}\downarrow_{2}\uparrow_{4}\downarrow_{3}|\uparrow_{1}\downarrow_{3}\uparrow_{4}\downarrow_{2}}+\braket{\downarrow_{1}\uparrow_{2}\downarrow_{4}\uparrow_{3}|\downarrow_{1}\uparrow_{3}\downarrow_{4}\uparrow_{2}}] \nonumber \\ &= \frac{1}{2} \neq 0 \end{align} $$

The overlap between two arbitrary short-range VB states, e.g. $\ket{\Psi_{a}}$ and $\ket{\Psi_{b}}$, can be calculated by a sum over all the 'closed' loops $\Gamma$ on the lattice obtained by superposing the dimer coverings.

The length of a loop in the units of the lattice spacing is given by $2L(\Gamma)$ with $L(\Gamma) = 1,2,\dots$. Its contribution to the overlap is $2\times 2^{-L(\Gamma)}$ whose factor of $2$ comes from the antiferromagnetic coupling of the spins on the sites of a loop. The overlap is determined by:

$$ \begin{align} \braket{\Psi_{a}|\Psi_{b}} &= \prod_{\Gamma}2\times 2^{-L(\Gamma)} = 2^{\sum\limits_{L}}\times 2^{-\frac{1}{2}\sum\limits_{\Gamma}2L(\Gamma)} \nonumber \\ &= 2^{P(a,b)}\times 2^{-N/2} \end{align} $$

|                  | Gapless phase                                         | Gapped phase                                                                                                    |
| ---------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Hamiltonian      | $H = J \sum\_i \mathbf{S}\_i \cdot \mathbf{S}\_{i+1}$ | $H = J \sum_i \mathbf{S}\_i \cdot \mathbf{S}\_{i+1} + \Delta \sum\_i (\mathbf{S}\_i \cdot \mathbf{S}\_{i+1})^2$ |
| Degeneracy       | Infinite                                              | finite for special cases                                                                                        |
| Spin correlation | $C(r) \sim (-1)^r / r^\alpha$                         | $C(r) \sim e^{-r/\xi}$                                                                                          |

## Haldane gap

{: .prompt-info}
>There are three things that one should keep in one's mind:
>
>1. While the continuous-orientation picture suggests a continuous spectrum of gapless Goldstone mode, the discreteness implies that a collection of spins might exhibit discrete excitation and a gap.
>
>2. The discreteness of the quantum state is a consequence of the interference effects of superpositions of all possible classical paths.
>  
>3. A fundamental difference between integer and half-integer spins lies in the phase generated by a $2\pi$ rotation:
>$$ \begin{equation} e^{i2\pi S_{z}}\ket{s} = (-1)^{2s}\ket{s} \end{equation} $$

The quantum fluctuations ruin the long-range staggered magnetic order even at zero temperature. In a one-dimensional spin chain system, the half-integer spins can have gapless excitation (due to Lieb-Schultz-Mattis theorem), while they are not spin waves. However, the discreteness becomes relevant for integer spins, and the spin chain shows the so-called **Haldane gap**.

## Misconception

It can still be confusing since a paramagnet that has randomly oriented magnetic moments in the absence of a magnetic field is similar to the characteristics of a spin liquid. Additionally, a quantum magnet shares the same origin of the disorder as a spin liquid in that it is a phase heavily influenced by quantum fluctuation. Also, since a spin glass is a disordered magnet, one can see the similarity between a spin liquid.

| | Paramagnet | Quantum paramagnet | Quantum spin liquid | Spin glass | Classical spin liquid |
|---|---|---|---|---|---|
| Spin orientation | Randomly disordered | Randomly disordered | Disordered (no long-range magnetic order even at $T = 0$) | Randomly disordered (frozen mixture of FM and AFM) | Disordered (frustrated, no unique ground state) |
| Correlation | Short-range | No correlation (product state) | Short-range spin-spin, but long-range entanglement | Short-range (amorphous) | Short-range (power-law in some cases) |
| Origin of disorder | Thermal fluctuation | Quantum fluctuation (gapped singlet ground state) | Quantum fluctuation [R. Mukherjee] | Site (or bond)-randomness | Thermal fluctuation [R. Mukherjee] |
| Behavior above $T_c$ | Paramagnet | No phase transition (crossover) | No symmetry-breaking transition (crossover) | Paramagnet | Paramagnet (crossover from cooperative regime) |
| ZFC/FC | No hysteresis | No hysteresis | No hysteresis, no remnant magnetization | Remnant magnetization in FC, nonexponential decay in ZFC [R. Mukherjee] | No hysteresis |
| Entanglement | No entanglement | Short-range entanglement (trivial) | Long-range entanglement [R. Mukherjee] | Classical disorder (no intrinsic entanglement) | Short-range entanglement [R. Mukherjee] |

The parton Hamiltonian can be expressed in a form similar to the BCS Hamiltonian by applying mean-field theory and relaxing the single-occupancy constraint. To incorporate fluctuations beyond the mean-field Hamiltonian, one must employ the path integral formalism. The path integral serves as a method for deriving the effective theory of new phases such as the chiral spin liquid. The fluctuations are captured by the Hubbard-Stratonovich field $\chi_{ij}$, which can be decomposed into an amplitude and a phase: $\chi\_{ij} = \bar{\chi}\_{ij}e^{ia\_{ij}}$. Since the amplitude field is gapped, it is treated as a constant. The resulting effective Hamiltonian describes correlations through the gauge field $a_{ij}$, which distinguishes it from the mean-field Hamiltonian. When the partons — the eigenstates of this effective Hamiltonian — are **deconfined** (i.e., separating two partons requires only finite energy), the system is called a quantum spin liquid.

{: .prompt-tip}
> **Why is the deconfinement condition necessary?**
> If partons are confined (as quarks are in QCD), gauge fluctuations bind them back into integer-spin composite objects (magnons). In this case, the low-energy excitations are conventional and the system behaves as an ordinary magnet. Fractionalization — the hallmark of a spin liquid — requires that partons propagate as independent quasiparticles. Only in the deconfined phase do the exotic properties emerge: fractional quantum numbers, topological degeneracy, and anyonic statistics. A confining phase, even if the mean-field ansatz appears spin-liquid-like, is adiabatically connected to a conventional state and is therefore not a true quantum spin liquid.

The phases predicted by the mean-field Hamiltonian are summarized below.

**Result 1.** The chiral spin liquid is a spin liquid that breaks both parity ($P$) and time-reversal ($T$) symmetries. Theoretically, it is realized by introducing complex-valued hopping in the mean-field Hamiltonian, which opens a **gap** in the parton band structure. The degree of symmetry breaking is characterized by the scalar chirality operator:

$$ \begin{equation} \mathbf{S}_{i}\cdot(\mathbf{S}_{j}\times\mathbf{S}_{k}) \end{equation} $$

This spin liquid phase can be described by an effective Chern-Simons theory. Since the same theory is used to describe the fractional quantum Hall effect (FQHE) in the low-energy limit, the chiral spin liquid can be regarded as a **spin analogue of the FQHE** in the context of band topology.

**Result 2.** The $U(1)$ spin liquid is characterized by Dirac bands at the Fermi level in the parton band structure. Accordingly, it can be viewed as a **spin analogue of Dirac materials** in the context of band topology. Unlike the chiral spin liquid, this phase is **gapless**: the partons cannot be integrated out and instead interact through the gauge field, resulting in an effective theory described by four flavors of partons coupled to a $U(1)$ gauge field. The full gauge theory for this spin liquid phase has not yet been completely established.