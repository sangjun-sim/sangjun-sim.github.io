---
title: Matrix Elements
date: 2026-06-24 19:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
math: true
toc: true
---

## Momentum and energy

The photoemission process is governed by the photon, described as a plane wave, and the electron. What one sees from the photoemission experiment is the intensity according to the binding energy at the given $k_{x}$ and $k_{y}$. To understand this, one should notice that the energy of the electrons must be conserved in the photoemission process. From the law of energy conservation, the kinetic energy of a photoelectron in a non-relativistic limit is written as the photon energy $\hbar\omega$, work function $\Phi$, and the binding energy $E_{B}$:

$$  
\begin{equation}  
E_{\text{kin}} = \frac{\mathbf{p}^{2}}{2m_{e}} = \hbar\omega - \Phi - E_{B}  
\end{equation}  
$$

Detecting a photoelectron in an experiment gives information about its kinetic energy. (In the end, one observes the history of electrons from the solid to out of the vacuum in the experiment.) In addition, the experimentalists know the angle of the photoelectron concerning the reference coordinate system inherently from the experimental geometry. This is because the $x$ and $y$ component of the momentum of the photoelectron, corresponding to the Brillouin zone, is written by:

$$  
\begin{equation}  
k_{x} = \frac{\sqrt{2m_{e}E_{\text{kin}}}}{\hbar}\sin\theta\cos\phi,~k_{y} = \frac{\sqrt{2m_{e}E_{\text{kin}}}}{\hbar}\sin\theta\sin\phi  
\end{equation}  
$$

where $\theta$ and $\phi$ are the polar and azimuthal angles. Because of the in-plane periodicity of the crystal structure, $\mathbf{k}_{\parallel}$ is conserved throughout the photoemission process (modulo an in-plane reciprocal lattice vector $\mathbf{G}_{\parallel}$). However, the orthogonal component $\mathbf{k}_{\perp}$ is not conserved during transmission through the surface but can be deduced under certain assumptions (see [Sobota](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.93.025006)). The normal direction wave vector can be conserved if the final state dispersion of the photoelectron within the crystal is parameterized using a free-electron dispersion offset by a potential $V_{0}$:

$$  
\begin{equation}  
E_{\rm kin} = \frac{\hbar^{2}\mathbf{k}^{2}_{\perp}}{2m_{e}} - V_{0}  
\end{equation}  
$$

The potential $V_{0}$ is also known as the inner potential, which is related to the average effective potential experienced by electrons in solids, although it is now typically treated as a phenomenological parameter. This leads to:

$$  
\begin{equation}  
\hbar\mathbf{k}_{\perp} = \sqrt{2m_{e}[E_{\rm kin}\cos^{2}\theta+V_{0}]}~\hat{\mathbf{z}}  
\end{equation}  
$$

What makes it different from other photoemission experiments here is that there is a resolution for the angle. The momentum resolution neglecting the contribution due to the finite energy resolution is given by:

$$  
\begin{equation}  
\Delta\mathbf{k}_{\parallel} = \frac{\sqrt{2m_{e}E_{\rm kin}}}{\hbar}\cos\theta d\theta  
\end{equation}  
$$

As can be seen, the momentum resolution will be better at lower photon energy and for larger polar angles $\theta$ ([A. Damascelli](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.75.473)).

## Velocity matrix elements

The Hamiltonian $H_{0}$ with the translational symmetry is given by:

$$  
\begin{equation}  
\hat{H_{0}} = \frac{\mathbf{p}^{2}}{2m_{e}}+v(\mathbf{r})  
\end{equation}  
$$

where $v(\mathbf{r}) = v(\mathbf{r}+\mathbf{R})$ is the potential of the atoms in a solid. From the Bloch’s theorem, its eigenstates satisfy:

$$  
\begin{equation}  
\hat{H_{0}}\ket{\psi_{n\mathbf{k}}} = \varepsilon_{n\mathbf{k}}\ket{\psi_{n\mathbf{k}}},~\ket{\psi_{n\mathbf{k}}} = e^{i\mathbf{k}\cdot\mathbf{r}}\ket{u_{n\mathbf{k}}}  
\end{equation}  
$$

where $\braket{\mathbf{r}|u_{n\mathbf{k}}}$ is the cell-periodic Bloch function which has the periodic property under the translation; $\braket{\mathbf{r}|u_{n\mathbf{k}}} = \braket{\mathbf{r}+\mathbf{R}|u_{n\mathbf{k}}}$. The Hamiltonian can be rewritten in the reciprocal form:

$$  
\begin{equation}  
\hat{H_{0}}(\mathbf{k}) = e^{-i\mathbf{k}\cdot\mathbf{r}}\hat{H_{0}}e^{i\mathbf{k}\cdot\mathbf{r}}  
\end{equation}  
$$

which yields:

$$  
\begin{equation}  
\hat{H_{0}}(\mathbf{k})\ket{u_{n\mathbf{k}}} = \varepsilon_{n\mathbf{k}}\ket{u_{n\mathbf{k}}}  
\end{equation}  
$$

To consider the interaction between the light and the matter, one needs to include the external field, represented by the vector potential $\mathbf{A}(t)$. The Hamiltonian reads:

$$  
\begin{align}  
\hat{H}(t) &= \frac{1}{2m_{e}}[\mathbf{p}-q\mathbf{A}(t)]^{2} + v(\mathbf{r}) \nonumber \\  
&= \frac{\mathbf{p}^{2}}{2m_{e}}-\frac{1}{2m_{e}} [q\mathbf{A}(t)\cdot\mathbf{p} + q\mathbf{p}\cdot\mathbf{A}(t)] + \frac{q^{2}\mathbf{A}(t)^{2}}{2m_{e}} + v(\mathbf{r}) \nonumber \\  
&= \hat{H_{0}}-\frac{q}{2m_{e}}\mathbf{A}(t)\cdot\mathbf{p} + \frac{q^{2}\mathbf{A}(t)^{2}}{2m_{e}}(\simeq0) \nonumber \\  
&\simeq \hat{H_{0}}-\frac{q}{2m_{e}}\mathbf{A}(t)\cdot\mathbf{p}  
\end{align}  
$$

where we have chosen the Coulomb gauge ($\mathbf{p}\cdot\mathbf{A} = 0$), so that we assume that the electric potential $\phi(\mathbf{r},t)$ has no time dependency. In addition, the magnitude of the square of the vector potential is negligible. Throughout this section, the form of the vector potential will be assumed as the plane wave:

$$  
\begin{equation}  
\mathbf{A} = A_{0}\hat{\mathbf{\varepsilon}}[e^{i(\mathbf{p}\cdot\mathbf{x}-\omega t)}+e^{-i(\mathbf{p}\cdot\mathbf{x}-\omega t)}]  
\end{equation}  
$$

where $\hat{\mathbf{\varepsilon}}$ is the polarization direction, $\mathbf{p}$ is the propagation direction of the photon, $\omega$ is the frequency of the photon. The time-dependent dynamics described by the time-dependent Schrodinger equation is governed by the following equation:

$$  
\begin{equation}  
i\partial_{t}\ket{\phi_{n\mathbf{k}}(t)} = \hat{H}(t)\ket{\phi_{n\mathbf{k}}(t)}  
\end{equation}  
$$

where the initial state at $t = 0$ is equal to the Bloch function:

$$  
\begin{equation}  
\ket{\phi_{n\mathbf{k}}(t=0)} = \ket{\psi_{n\mathbf{k}}}  
\end{equation}  
$$

From this relation, one can expand the time-dependent eigenstate with respect to the Bloch function or basis:

$$  
\begin{equation}  
\ket{\phi_{n\mathbf{k}}(t)} = \sum\limits_{n'}c_{n,n'}(\mathbf{k},t)\ket{\psi_{n'\mathbf{k}}}  
\end{equation}  
$$

Inserting into the time-dependent Schrodinger equation, one obtains:

$$  
\begin{align}  
i\partial_{t}c_{n,n'}(\mathbf{k},t) &= \sum\limits_{n'} \braket{\psi_{n\mathbf{k}}|\hat{H}(t)|\psi_{n'\mathbf{k}}} c_{n,n'}(\mathbf{k},t) \nonumber \\  
&= \sum\limits_{n'} [\varepsilon_{n\mathbf{k}}\delta_{n,n'} - q \mathbf{A}(t)\cdot\mathbf{v}_{n,n'}(\mathbf{k})] c_{n,n'}(\mathbf{k},t)  
\end{align}  
$$

where the $\mathbf{v}_{n,n'}(\mathbf{k})$ denotes the velocity matrix elements which are written as:

$$  
\begin{equation}  
\mathbf{v}_{n,n'}(\mathbf{k}) = \braket{\psi_{n\mathbf{k}}|\mathbf{p}|\psi_{n'\mathbf{k}}}  
\end{equation}  
$$

The velocity matrix contains fruitful information on the Bloch state and the dipole operator. From the canonical transformation $\mathbf{p} = -i[\mathbf{r}, \hat{H}_{0}]$, the velocity matrix elements are expressed as:

$$  
\begin{align}  
\mathbf{v}_{n,n'}(\mathbf{k}) &= -i\braket{\psi_{n\mathbf{k}}|[\mathbf{r}, \hat{H}_{0}]|\psi_{n'\mathbf{k}}} \nonumber \\  
&= -i\braket{\psi_{n\mathbf{k}}|\mathbf{r}\hat{H}_{0}-\hat{H}_{0}\mathbf{r}|\psi_{n'\mathbf{k}}} \nonumber \\  
&= -i[\varepsilon_{n'\mathbf{k}}-\varepsilon_{n\mathbf{k}}]\braket{\psi_{n\mathbf{k}}|\mathbf{r}|\psi_{n'\mathbf{k}}}  
\end{align}  
$$

Here, one has to pay attention that the operator $\mathbf{r}$ is not well-defined, which can be immediately shown that it diverges when the denominator of the following form goes to zero ($\varepsilon_{n'\mathbf{k}} = \varepsilon_{n\mathbf{k}}$).

- **Velocity matrix element in position operator**

$$  
\begin{equation}  
\braket{\psi_{n\mathbf{k}}|\mathbf{r}|\psi_{n'\mathbf{k}}} = i \frac{\mathbf{v}_{n,n'}(\mathbf{k})}{\varepsilon_{n'\mathbf{k}}-\varepsilon_{n\mathbf{k}}}  
\end{equation}  
$$

For the Bloch Hamiltonian $\hat{H_{0}}(\mathbf{k})$, it satisfies the following commutator relation:

$$  
\begin{equation}  
\nabla_{\mathbf{k}}\hat{H_{0}}(\mathbf{k}) = -i[\mathbf{r}, \hat{H_{0}}(\mathbf{k})]  
\end{equation}  
$$

- **Velocity matrix element in momentum operator**

Using this relation, the velocity matrix elements can be rewritten as:

$$  
\begin{align}  
\mathbf{v}_{n,n'} (\mathbf{k}) &= \braket{u_{n\mathbf{k}}|\nabla_{\mathbf{k}}\hat{H}_{0}(\mathbf{k})|u_{n'\mathbf{k}}} \nonumber \\  
&= [\varepsilon_{n'\mathbf{k}}-\varepsilon_{n\mathbf{k}}]\braket{u_{n\mathbf{k}}|\nabla_{\mathbf{k}}|u_{n'\mathbf{k}}}\\  
\end{align}  
$$

where the second line was derived from the eigenvalue problem of the time-independent Bloch Hamiltonian; $\braket{u_{n\mathbf{k}}|\hat{H}_{0}(\mathbf{k})|u_{n'\mathbf{k}}} = \varepsilon_{n\mathbf{k}}\delta_{n,n'}$. For $n \neq n'$ case, if we take the derivative for $\mathbf{k}$ on both sides, one can show:

$$  
\begin{align}  
\nabla_{\mathbf{k}}(\braket{u_{n\mathbf{k}}|\hat{H}_{0}(\mathbf{k})|u_{n'\mathbf{k}}}) &= \braket{\nabla_{\mathbf{k}}u_{n\mathbf{k}}|\hat{H}_{0}(\mathbf{k})|u_{n'\mathbf{k}}} + \braket{u_{n\mathbf{k}}|\nabla_{\mathbf{k}}\hat{H}_{0}(\mathbf{k})|u_{n'\mathbf{k}}} + \braket{u_{n\mathbf{k}}|\hat{H}_{0}(\mathbf{k})|\nabla_{\mathbf{k}}u_{n'\mathbf{k}}} \nonumber \\  
&= \varepsilon_{n'\mathbf{k}}\braket{\nabla_{\mathbf{k}}u_{n\mathbf{k}}|u_{n'\mathbf{k}}} + \mathbf{v}_{n,n'}(\mathbf{k}) + \varepsilon_{n\mathbf{k}} \braket{u_{n\mathbf{k}}|\nabla_{\mathbf{k}}u_{n'\mathbf{k}}} \nonumber \\  
&= 0  
\end{align}  
$$

Since

$$  
\begin{equation}  
\nabla_{\mathbf{k}}\braket{u_{n\mathbf{k}}|u_{n'\mathbf{k}}} = \braket{\nabla_{\mathbf{k}}u_{n\mathbf{k}}|u_{n'\mathbf{k}}} + \braket{u_{n\mathbf{k}}|\nabla_{\mathbf{k}}u_{n'\mathbf{k}}} = 0,  
\end{equation}  
$$

$\braket{\nabla_{\mathbf{k}}u_{n\mathbf{k}}|u_{n'\mathbf{k}}}$ is written as $-\braket{u_{n\mathbf{k}}|\nabla_{\mathbf{k}}u_{n'\mathbf{k}}}$ which leads to the velocity matrix written in the cell-periodic Bloch function.

Q. Relation between p and theta and phi?  
C. Theta is reduced when photon energy is small.  
C. theta, phi -> theta,-phi for k -> -k.

## Initial and final states

In light-matter interaction, the initial state corresponds to the state in the bulk, which is expressed as the Bloch state (**why isn't it described using the Wannier function instead of the Bloch state?**). Conversely, the final state of the photoelectron can be defined as a plane wave (plane-wave approximation) or a partial wave depending on the approximation method, or it can be accurately expressed as a final state that considers the interaction with the surface. In the partial wave approximation, the outgoing photoelectron is described by:

$$  
\begin{equation}  
\braket{\mathbf{r}|\chi_{\eta\mathbf{p}}} = 4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}i^{l}e^{i\sigma_{l}}R_{\eta l}(r)Y^{m}_{l}(\Omega_{\mathbf{p}})Y^{m*}_{l}(\Omega_{\mathbf{r}})
\end{equation}  
$$

where $\sigma_{l}$ is the Coulomb phase shift, $R_{\eta l}(r)$ is the Coulomb wave function, which is a solution of the following eigenvalue equation:

$$  
\begin{equation}  
\left[-\frac{1}{2}\frac{\partial^{2}}{\partial r^{2}} + \frac{l(l+1)}{2r^{2}} - \frac{Z}{r}\right]R_{\eta l}(r) = \varepsilon R_{\eta l}(r)  
\end{equation}  
$$

Additionally, $Y^{m}_{l}(\Omega_{\mathbf{p}})$ is a spherical harmonics with the emission angle $\Omega_{\mathbf{p}}$ that is given by $(\theta_{\mathbf{p}},\phi_{\mathbf{p}})$. In general, the phase shift is the correction to the plane wave that considers the scattering between the atom and the free particle. For Coulomb potential, the phase shift is given by:

$$
\begin{equation}  
\sigma_{l} = \arg\Gamma(l+1+i\eta)  
\end{equation}  
$$

where $\eta$ is the Sommerfeld parameter, which reads:

$$  
\begin{equation}  
\eta = \frac{Z}{a_{0}|\mathbf{p}|}
\end{equation}  
$$

with Bohr radius $a_{0}$, ion charge $Z$, and the momentum of the final state $\mathbf{p}$. The Sommerfeld parameter describes the impact of the central ion’s Coulomb potential. If the ion charge is small or the photoelectron momentum is large, then $\eta\rightarrow 0$ (**why**?) and $\sigma_{l} = \arg\Gamma(l+1)$. Since $\Gamma(l+1) \in \mathbb{R}$, the Coulomb phase shift vanishes, and the radial wave function $R_{\eta l}$ reduces to a spherical Bessel function $j_{l}(|\mathbf{p}|r)$. Then the final state is reduced to the plane wave:

$$  
\begin{equation}  
\braket{\mathbf{r}|\chi_{\mathbf{p}}} = 4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}i^{l}j_{l}(|\mathbf{p}|r)Y^{m}_{l}(\Omega_{\mathbf{p}})Y^{m*}_{l}(\Omega_{\mathbf{r}}) = e^{i\mathbf{p}\cdot\mathbf{r}}
\end{equation}  
$$

 This is the same result obtained by expanding the plane wave in terms of the spherical harmonics by applying the addition theorem. In analogy to the linear combination of initial states, the final state can be approximated by the coherent superposition of all outgoing partial waves emanating from all participating unit cells:

$$  
\begin{equation}  
\braket{\mathbf{r}|\tilde\chi_{\mathbf{p}}} = \sum_{\mathbf{R}} e^{i\mathbf{p}\cdot\mathbf{R}} \braket{\mathbf{r}-\mathbf{R}|\chi_{\mathbf{p}}}
\end{equation}  
$$

## Gauge choices in the interaction Hamiltonian

The Hamiltonian in the dipole approximation, where the wavelength is larger than the system size, is given by:

$$  
\begin{equation}  
H(\mathbf{r},t) = H_{0}(\mathbf{r}) + \mathbf{E}(\mathbf{r},t)\cdot\mathbf{r}
\end{equation}  
$$

This choice is called the length gauge. The length gauge can be established by putting $\mathbf{A}(\mathbf{r},t) = \mathbf{0}$ and $\phi(\mathbf{r},t) = - \mathbf{r}\cdot\mathbf{E}(\mathbf{r},t)$. Alternatively, one can write it as:

$$  
\begin{equation}  
H(\mathbf{r}, t) = H_{0}(\mathbf{r}) + \mathbf{A}(\mathbf{r}, t)\cdot\mathbf{p}  
\end{equation}  
$$

It is called the velocity gauge. The velocity gauge can be chosen by setting $\mathbf{A}(\mathbf{r},t) = -c\int^{t}_{-\infty}dt'~\mathbf{E}(\mathbf{r},t'),$ and $\phi(\mathbf{r},t) = 0$, where $c$ is an arbitrary constant.

Q. 다음 섹션에서 다루는 $\mathbf{A}$와 어떻게 이어지지?

## Trivial circular dichroism in velocity gauge

The simplest approach would be the plane-wave approximation, which treats the final state as:

$$  
\begin{equation}  
\braket{\mathbf{r}|\chi_{\mathbf{p}}} \simeq e^{i\mathbf{p}\cdot\mathbf{r}}  
\end{equation}  
$$

In the velocity gauge, the matrix element describing a dipole transition between the initial and final state is written as:

$$  
\begin{equation}  
M^{\text{vel.}}_{n\mathbf{k}}(\mathbf{p}) = \braket{\chi_{\mathbf{p}}|\mathbf{A}\cdot\hat{\mathbf{p}}|\psi_{n\mathbf{k}}} = \mathbf{A}\cdot\hat{\mathbf{p}} \braket{\chi_{\mathbf{p}}|\psi_{n\mathbf{k}}}  
\end{equation}  
$$

where $\mathbf{p}$ is the photoelectron momentum, $n$ is the band index, $\mathbf{k}$ is the crystal momentum, $\ket{\chi_{\mathbf{p}}}$ is the final state, $\mathbf{A}$ is the polarization vector, and $\hat{\mathbf{p}}$ is the momentum operator. This approach is simple, however, this approximation gives the wrong dipole selection rules and does not provide any information about circular dichroism. The circular dichroism is the difference in the transition amplitude of the right and left circularly polarized lights. The vector potentials for these polarizations have the following form:

$$  
\begin{equation}  
\mathbf{A}^{\rm LCP} = \mathbf{A}_{1}-i\mathbf{A}_{2},~~\mathbf{A}^{\rm RCP} = \mathbf{A}_{1}+i\mathbf{A}_{2}  
\end{equation}  
$$

where $\mathbf{A}_{1}$ and $\mathbf{A}_{2}$ are perpendicular to each other:

$$  
\begin{align}  
\mathbf{A}_{1} &= [\cos\alpha\sin\beta, \sin\alpha\sin\beta, \cos\alpha], \nonumber \\  
\mathbf{A}_{2} &= [\cos\alpha\cos\beta, \sin\alpha\cos\beta, -\sin\alpha]  
\end{align}  
$$

Here, the angles $\alpha$ and $\beta$ denote the polar and azimuthal angles in the spherical coordinate system, respectively. The matrix elements and the transition amplitude for the right circularly polarized light are explicitly as follows:

$$  
\begin{equation}  
|M^{\rm vel./RCP}_{n\mathbf{k}}(\mathbf{p},\alpha)|^{2} =([\cos^{2}\alpha,\sin^{2}\alpha,1]\cdot\mathbf{p}^{2})|\braket{\chi_{\mathbf{p}}|\psi_{n\mathbf{k}}}|^{2}  
\end{equation}  
$$

The same can be done for the left-polarized light:

$$  
\begin{equation}  
|M^{\rm vel./LCP}_{n\mathbf{k}}(\mathbf{p},\alpha)|^{2} =([\cos^{2}\alpha,\sin^{2}\alpha,1]\cdot\mathbf{p}^{2})|\braket{\chi_{\mathbf{p}}|\psi_{n\mathbf{k}}}|^{2}  
\end{equation}  
$$

From these results, one can see that the circular dichroism is zero.

$$  
\begin{equation}  
|M^{\rm vel./LCP}_{n\mathbf{k}}(\mathbf{p},\alpha)|^{2} - |M^{\rm vel./RCP}_{n\mathbf{k}}(\mathbf{p},\alpha)|^{2} = 0
\end{equation}  
$$

Note that this holds if the momentum $\mathbf{p}$ is not a complex value. In general, the final state has an escape depth of $\lambda$, which is important for surface analysis. In this case, the momentum can be complex. For the further discussion, one assumes that the momentum is real and $\varepsilon$ is a function of the momentum only. Within the plane wave approximation, one can choose another gauge: the length gauge. From the canonical commutation relation $\hat{\mathbf{p}} = -i[\hat{\mathbf{r}}, \hat{H}_{0}]$ (This does not hold in general. It is true when the Kohn-Sham potential $v_{\rm KS}(\mathbf{r})$ is **local**.), the transition matrix element is expressed as:

$$  
\begin{align}  
M^{\text{vel.}}_{n\mathbf{k}}(\mathbf{p}) &= \braket{\chi_{\mathbf{p}}|\mathbf{A}\cdot\hat{\mathbf{p}}|\psi_{n\mathbf{k}}} \rightarrow \mathbf{A}\cdot\braket{\chi_{\mathbf{p}}|\hat{\mathbf{p}}|\psi_{n\mathbf{k}}} \nonumber \\  
&= -i\mathbf{A}\cdot\braket{\chi_{\mathbf{p}}|[\hat{\mathbf{r}},\hat{H}_{0}]|\psi_{n\mathbf{k}}} = -i\mathbf{A}\cdot\braket{\chi_{\mathbf{p}}|(\hat{\mathbf{r}}\hat{H}_{0}-\hat{H}_{0}\hat{\mathbf{r}})|\psi_{n\mathbf{k}}} \nonumber \\  
&= -i(E_{n\mathbf{k}}-E_{\text{kin}})\mathbf{A}\cdot\braket{\chi_{\mathbf{p}}|\hat{\mathbf{r}}|\psi_{n\mathbf{k}}}  
\end{align}  
$$

Here, the difference between the two gauges is whether one is looking at the expected value of the momentum operator $\hat{\mathbf{p}}$ or $\mathbf{A}\cdot\hat{\mathbf{p}}$. The former one originates from the electric dipole transition approximation, where the wavelength of the electromagnetic wave is longer than the atomic length. In addition, the matrix elements from the velocity gauge and the length gauge differ by the size of the energy and polarization vector. Resta et al. showed that there is a relation between the expectation value of the position operator:

$$  
\begin{equation}  
\braket{\psi_{m\mathbf{k}}|\hat{\mathbf{r}}|\psi_{n\mathbf{k}}} = i\braket{u_{m\mathbf{k}}|\nabla_{\mathbf{k}}|u_{n\mathbf{k}}} = \mathcal{A}_{mn}(\mathbf{k})  
\end{equation}  
$$

where $\mathcal{A}_{mn}(\mathbf{k})$ is the Berry connection. Note that the final state $\ket{\chi_{\mathbf{p}}}$ is also a Bloch state. Thus, this relation can be rewritten as:

$$  
\begin{equation}  
\braket{\chi_{\mathbf{p}}|\hat{\mathbf{r}}|\psi_{n\mathbf{k}}} = i\braket{\chi_{\mathbf{p}}|\nabla_{\mathbf{k}}|u_{n\mathbf{k}}}  
\end{equation}  
$$

However, as one has seen in the matrix elements, the position operator is ill-defined for the periodic system. There are two routes to cure this problem: (1) Atom-centered approximation and (2) Modern theory of the Berry phase.

## Atom-centered approximation

Within this approximation, the initial state (Bloch state) is expanded by atomic orbital wave functions:

$$  
\begin{equation} 
\ket{\psi_{n\mathbf{k}}} = \sum\limits_{\mathbf{R},j}\sum\limits_{\alpha lm}c_{jn\mathbf{k}}e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})}\ket{\varphi_{\alpha lm;\mathbf{0}j}}
\end{equation}
$$

where $\mathbf{R}$ is the lattice vector, $c_{jn\mathbf{k}}$ is the initial state eigenvector, $\mathbf{r}_{j}$ is a location of a $j$th atom, and $\ket{\varphi_{\alpha lm;\mathbf{0}j}}$ is a hydrogen-like orbital, which has the form of:

$$  
\begin{equation}  
\braket{\mathbf{r}|\varphi_{\alpha lm;\mathbf{0}j}} = R_{\alpha l}(r)Y^{m}_{l}(\Omega_{\mathbf{r}})
\end{equation}  
$$

with spherical coordinates; the incidence coordinate and angle are given by ($r$, $\theta_{r}$, $\phi_{r}$) = ($r$, $\Omega_{\mathbf{r}}$). The radial energy eigenfunctions for the hydrogen atom $R_{\alpha l}(r)$ and spherical harmonics $Y^{m}_{l}(\Omega_{\mathbf{r}})$ are characterized by the principal quantum number $\alpha$, orbital quantum number $l$ and magnetic quantum number $m$. The matrix element in the length gauge is thus written as:

$$  
\begin{align}  
M^{\text{len.}}_{n\mathbf{k}}(\mathbf{p}) &= i\mathbf{A}\cdot\braket{\chi_{\mathbf{p}}|\nabla_{\mathbf{k}}|\psi_{n\mathbf{k}}} = i\mathbf{A}\cdot \sum_{\mathbf{r}}\sum_{\mathbf{r}'} \braket{\chi_{\mathbf{p}}|\mathbf{r}}\braket{\mathbf{r}|\nabla_{\mathbf{k}}|\mathbf{r}'}\braket{\mathbf{r}'|\psi_{n\mathbf{k}}} \nonumber \\  
&= i\mathbf{A}\cdot \sum_{\mathbf{r}}\sum_{\mathbf{r}'}\sum\limits_{\mathbf{R},j}\sum\limits_{\alpha lm} ~\delta_{\mathbf{r}\mathbf{r}'}e^{-i\mathbf{p}\cdot\mathbf{r}} \nabla_{\mathbf{k}} [e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})} c_{jn\mathbf{k}}]\braket{\mathbf{r}|\varphi_{\alpha lm;\mathbf{0}j}} \nonumber \\  
&= i\mathbf{A}\cdot\sum_{\mathbf{r}}\sum\limits_{\mathbf{R},j}\sum\limits_{\alpha lm} ~e^{-i\mathbf{p}\cdot\mathbf{r}} [i(\mathbf{R}+\mathbf{r}_{j})c_{jn\mathbf{k}}+\nabla_{\mathbf{k}}c_{jn\mathbf{k}}] e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})} \varphi_{\alpha lm}(\mathbf{r}-\mathbf{r}_{j})
\end{align}  
$$

In the last equation, the part of the first term can be written as:

$$  
\begin{equation}  
M^{\text{atom}}_{\alpha lm\mathbf{k};j}(\mathbf{p},\mathbf{R}) = -\sum_{\mathbf{r}}~e^{-i\mathbf{p}\cdot\mathbf{r}}e^{i\mathbf{k}\cdot(\mathbf{r}_{j}+\mathbf{R})} \mathbf{A} \cdot (\mathbf{R}+\mathbf{r}_{j}) \varphi_{\alpha lm}(\mathbf{r}-\mathbf{r}_{j})
\end{equation}  
$$

The part of the second term is given by:

$$  
\begin{equation}  
M^{\text{conn.}}_{n\mathbf{k};j}(\mathbf{p},\mathbf{R}) = i \sum_{\mathbf{r}} e^{-i\mathbf{p}\cdot\mathbf{r}}e^{i\mathbf{k}\cdot(\mathbf{r}_{j}+\mathbf{R})} \mathbf{A} \cdot \nabla_{\mathbf{k}} c_{jn\mathbf{k}} \varphi_{\alpha lm}(\mathbf{r}-\mathbf{r}_{j})  
\end{equation}  
$$

If the first term is expressed as $M^{\text{atom}}_{\alpha lm\mathbf{k};j}(\mathbf{p},\mathbf{R})$, and the second term is written as $M^{\text{conn.}}_{n\mathbf{k};j}(\mathbf{p},\mathbf{R})$, which is named after the gradient term of the coefficient, is similar to the term that contributes to the Berry connection. Then the entire matrix element can be written as:

$$
\begin{equation}
M^{\rm len.}_{n\mathbf{k}}(\mathbf{p}) = \sum_{\mathbf{R},j}\sum_{\alpha lm} [c_{jn\mathbf{k}} M^{\text{atom}}_{\alpha lm\mathbf{k};j}(\mathbf{p},\mathbf{R}) + M^{\text{conn.}}_{n\mathbf{k};j}(\mathbf{p},\mathbf{R})]
\end{equation}
$$

The atom-centered approximation neglects the second term ($M^{\text{conn.}}_{n\mathbf{k};j}(\mathbf{p},\mathbf{R}) = 0$). In _chinook_, the form of orbitals can be hydrogen-like, Slater-type, or user-defined orbitals. Here one assumes that $\varphi_{\alpha lm}(\mathbf{r}-\mathbf{r}_{j})$ is simply hydrogen-like; $\varphi_{\alpha lm}(\mathbf{r}-\mathbf{r}_{j}) = R_{\alpha_{j} l_{j}}(r - r_{j})Y^{l_{j}}_{m_{j}}(\theta_{\mathbf{r}-\mathbf{r}_{j}},\phi_{\mathbf{r}-\mathbf{r}_{j}})$. In the term $M^{\text{atom}}_{\alpha lm\mathbf{k};j}(\mathbf{p},\mathbf{R})$, the plane wave can be expanded in the spherical harmonics by applying the addition theorem for spherical harmonics:

$$  
\begin{align}  
e^{i\mathbf{k}\cdot\mathbf{r}} &= \sum\limits^{\infty}_{l=0}(2l+1)i^{l}j_{l}(kr)P_{l}(\mathbf{k}\cdot\mathbf{r}) \nonumber \\  
&= 4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}i^{l}j_{l}(kr)Y^{*}_{lm}(\theta_{\mathbf{k}},\phi_{\mathbf{k}})Y_{lm}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})  
\end{align}  
$$

where $\theta_{\mathbf{k}}$ and $\phi_{\mathbf{k}}$ ($\theta_{\mathbf{r}}$ and $\phi_{\mathbf{r}}$) represent the polar and azimuthal angles at which the final (initial) state forms with the sample. Then the matrix element is expressed as:

$$  
\begin{align}
M^{\text{atom}}_{j}(\mathbf{k},\mathbf{R})
&= \int d\mathbf{r}~e^{-i\mathbf{k}\cdot(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R})} \mathbf{A} \cdot (\mathbf{r}-\mathbf{r}_{j}-\mathbf{R}) \phi_{j}(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R}) \nonumber \\
&= \int d\tilde{\mathbf{r}}_{j}~e^{-i\mathbf{k}\cdot\tilde{\mathbf{r}}_{j}}\mathbf{A}\cdot\tilde{\mathbf{r}}_{j}\phi_{j}(\tilde{\mathbf{r}}_{j}),~(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R}) \rightarrow \tilde{\mathbf{r}}_{j} \nonumber \\
&= 4\pi\sum_{l=0}^{\infty}\sum_{m=-l}^{l}(-i)^{l} \int d\tilde{\mathbf{r}}_{j}~j_{l}(k\tilde{r}_{j})Y_{lm}(\theta_{\mathbf{k}},\phi_{\mathbf{k}})Y^{*}_{lm}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}}) \mathbf{A} \cdot \tilde{\mathbf{r}}_{j} \phi_{j}(\tilde{\mathbf{r}}_{j}) \nonumber \\
&= 4\pi\sum_{l=0}^{\infty}\sum_{m=-l}^{l}(-i)^{l} \int d\tilde{\mathbf{r}}_{j}~j_{l}(k\tilde{r}_{j})Y_{lm}(\theta_{\mathbf{k}},\phi_{\mathbf{k}})Y^{*}_{lm}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}}) \mathbf{A} \cdot \tilde{\mathbf{r}}_{j} R_{j}(\tilde{r}_{j})Y_{l_{j}m_{j}}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}}) \nonumber \\
&= 4\pi\sum_{l=0}^{\infty}\sum_{m=-l}^{l}(-i)^{l} Y_{lm}(\theta_{\mathbf{k}},\phi_{\mathbf{k}}) \int_{0}^{\infty} d\tilde{r}_{j}~\tilde{r}_{j}^{2} j_{l}(k\tilde{r}_{j})R_{j}(\tilde{r}_{j}) \int \sin\theta_{\tilde{\mathbf{r}}_{j}}d\theta_{\tilde{\mathbf{r}}_{j}}d\phi_{\tilde{\mathbf{r}}_{j}}~ Y^{*}_{lm}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}}) \mathbf{A} \cdot \tilde{\mathbf{r}}_{j}Y_{l_{j}m_{j}}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}}) \nonumber \\
&= 4\pi\sum_{l=0}^{\infty}\sum_{m=-l}^{l}(-i)^{l} Y_{lm}(\theta_{\mathbf{k}},\phi_{\mathbf{k}}) \int_{0}^{\infty} d\tilde{r}_{j}~\tilde{r}_{j}^{3} j_{l}(k\tilde{r}_{j})R_{j}(\tilde{r}_{j}) \int \sin\theta_{\tilde{\mathbf{r}}_{j}}d\theta_{\tilde{\mathbf{r}}_{j}}d\phi_{\tilde{\mathbf{r}}_{j}}~ Y^{*}_{lm}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}}) \mathbf{A} \cdot \frac{\tilde{\mathbf{r}}_{j}}{\tilde{r}_{j}}Y_{l_{j}m_{j}}(\theta_{\tilde{\mathbf{r}}_{j}},\phi_{\tilde{\mathbf{r}}_{j}})
\end{align}
$$

The integral equation for $\tilde{r}_{j}$ is a Fourier transformation of the radial atomic wave function $R_{j}(\tilde{r}_{j})$ [J. Electron Spectrosc. Relat. Phenom. 214 (2017) 29-52]. (In other words, it's a Hankel transform where the kernel is the spherical Bessel function [Hassani].) This integral will be denoted as $I_{l,j}(k)$. The integral for the angular part is determined by the selection rule [Gasiorowicz]. It only allows the transition for the conditions written below:

$$  
\begin{equation}  
|l-l_{j}| = 1,~|m-m_{j}| = 0, 1  
\end{equation}  
$$

If we express the integral value of the angular part as $C^{\Delta l}_{m,m_{j}}(\mathbf{A})$, the matrix element can be written as follows:

$$  
\begin{equation}  
M^{\text{atom}}_{j}(\mathbf{k},\mathbf{R}) = 4\pi\sum\limits_{m} [ (-i)^{l_{j}-1}C^{-1}_{m,m_{j}}(\mathbf{A})Y_{l_{j}-1,m}(\theta_{\mathbf{k}},\phi_{\mathbf{k}}) I_{l_{j}-1,j}(\mathbf{k}) + (-i)^{l_{j}+1}C^{+1}_{m,m_{j}}(\mathbf{A})Y_{l_{j}+1,m}(\theta_{\mathbf{k}},\phi_{\mathbf{k}}) I_{l_{j}+1,j}(\mathbf{k}) ]  
\end{equation}  
$$

## Matrix element

The matrix element describing a dipole transition between the initial and final states computes:

$$  
\begin{align}  
M_{\mathbf{k}_{f},\mathbf{k}} &= \int d\mathbf{r} ~\Psi^{*}_{\mathbf{k}_{f}}(\mathbf{r})(\varepsilon\cdot\nabla)\Psi_{\mathbf{k}}(\mathbf{r}) \nonumber \\  
&= \sum\limits_{\mathbf{R}'}e^{-i\mathbf{k}_{f}\cdot\mathbf{R}'}\sum\limits_{\mathbf{R}}e^{i\mathbf{k}\cdot\mathbf{R}}\sum\limits_{nlm}c^{\mathbf{k}}_{nlm}\int d\mathbf{r}~\chi^{*}_{\eta}(\mathbf{r}-\mathbf{R}'+\mathbf{R})(\varepsilon\cdot\nabla)\Phi_{nlm}(\mathbf{r}) \nonumber \\  
&\simeq \sum\limits_{\mathbf{R}}e^{i(\mathbf{k}-\mathbf{k}_{f})\cdot\mathbf{R}}\sum\limits_{nlm}c^{\mathbf{k}}_{nlm}\varepsilon\cdot\int d\mathbf{r}~\chi^{*}_{\eta}(\mathbf{r})\nabla\Phi_{nlm}(\mathbf{r}) \nonumber \\  
&= \sum\limits_{\mathbf{G}}\delta(\mathbf{k}-\mathbf{k}_{f}+\mathbf{G})\sum\limits_{nlm}c^{\mathbf{k}}_{nlm}\varepsilon\cdot\int d\mathbf{r}~\chi^{*}_{\eta}(\mathbf{r})\nabla\Phi_{nlm}(\mathbf{r})  
\end{align}  
$$

where one has used the coordinate transformation $\mathbf{r}\rightarrow\mathbf{r}-\mathbf{R}$. In the second step, one applied the independent atomic center approximation ($\mathbf{R}\sim\mathbf{R}'$). In addition, one utilized the periodicity of the lattice in the third step. Typically, one focuses on the first Brillouin zone such that $\mathbf{G}$ is equal to zero. One can set $\mathbf{k} = \mathbf{k}_{f}$, since the Dirac delta function represents the momentum conservation. The gradient of $\Phi_{nlm}(\mathbf{r})$ is given by \[Arfken p. 811\]:

$$  
\begin{align}  
\nabla\Phi_{nlm}(\mathbf{r}) &= \nabla R_{nl}(r)Y^{m}_{l}(\Omega_{r}) \nonumber \\  
&= -\sqrt{\frac{l+1}{2l+1}}\underbrace{\left[\frac{\partial}{\partial r}-\frac{l}{r}\right]R_{nl}(r)}_{f_{nl}(r)}\mathbf{Y}_{l,l+1,m}(\Omega_{r})+\sqrt{\frac{l}{2l+1}}\underbrace{\left[\frac{\partial}{\partial r}+\frac{l+1}{r}\right]R_{nl}(r)}_{g_{nl}(r)}\mathbf{Y}_{l,l-1,m}(\Omega_{r})  
\end{align}  
$$

Here, one introduced the vector spherical harmonics that are defined as:

$$  
\begin{equation}  
\mathbf{Y}_{J,L,M}(\Omega_{r}) = \sum\limits^{L}_{m=-L}\sum\limits^{1}_{m'=-1}\braket{L,m;1,m'|J,M}Y^{m}_{L}(\Omega_{r})\boldsymbol{\varepsilon}_{m'}  
\end{equation}  
$$

where $\braket{L,m;1,m'|J,M}$ is the Clebsch-Gordan coefficient and $\boldsymbol{\varepsilon}_{m'}$ denotes a given polarization vector. In the spherical coordinate system, the gradient of the radial wave function only has a vector component of $\hat{\mathbf{r}}$. Also, the vector $\boldsymbol{\varepsilon}_{m'}$ indicates the unit radial ($\hat{\mathbf{r}}$), azimuthal ($\hat{\boldsymbol{\phi}}$), and polar ($\hat{\boldsymbol{\theta}}$) vectors. Each vector spherical harmonics in the gradient of $\Phi_{nlm}(\mathbf{r})$ is represented as:

$$  
\begin{align}  
\mathbf{Y}_{l,l+1,m}(\Omega_{r}) &= \sum\limits^{(l+1)}_{m=-(l+1)}\sum\limits^{1}_{m'=-1}\braket{l+1,m;1,m'|l,m}Y^{m}_{l+1}(\Omega_{r})\boldsymbol{\varepsilon}_{m'} \nonumber \\  
\mathbf{Y}_{l,l-1,m}(\Omega_{r}) &= \sum\limits^{(l-1)}_{m=-(l-1)}\sum\limits^{1}_{m'=-1}\braket{l-1,m;1,m'|l,m}Y^{m}_{l-1}(\Omega_{r})\boldsymbol{\varepsilon}_{m'}  
\end{align}  
$$

The dipole transition matrix elements from a hydrogen-like orbital $\Phi_{nlm}$ into scattering states $\chi_{\eta}$ is given by:

$$  
\begin{align}  
M^{\eta}_{nlm} &= \int d\mathbf{r}~\chi^{*}_{\eta}(\mathbf{r})\nabla\Phi_{nlm}(\mathbf{r}) \nonumber \\  
&= \int d\mathbf{r}~\chi^{_}_{\eta}(\mathbf{r})\left(-\sqrt{\frac{l+1}{2l+1}}f_{nl}(r)\mathbf{Y}_{l,l+1,m}(\Omega_{r})+\sqrt{\frac{l}{2l+1}}g_{nl}(r)\mathbf{Y}_{l,l-1,m}(\Omega_{r})\right) \nonumber \\  
&= \int d\mathbf{r}~4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}(-i)^{l}e^{-i\sigma_{l}}R_{\eta l}(r)Y^{m_}_{l}(\Omega_{k_{f}})Y^{m}_{l}(\Omega_{r}) \left(-\sqrt{\frac{l+1}{2l+1}}f_{nl}(r)\mathbf{Y}_{l,l+1,m}(\Omega_{r})+\sqrt{\frac{l}{2l+1}}g_{nl}(r)\mathbf{Y}_{l,l-1,m}(\Omega_{r})\right)
\end{align}  
$$

If one computes with the Kohn-Sham state, one writes the relation from the Bloch theorem:

$$  
\begin{equation}  
\ket{\psi_{n\mathbf{k}}} = e^{i\mathbf{k}\cdot\mathbf{r}}\ket{u_{n\mathbf{k}}}  
\end{equation}  
$$

where $\braket{\mathbf{r}|u_{n\mathbf{k}}}$ is the cell-periodic Bloch function which has the periodic property under the translation; $\braket{\mathbf{r}|u_{n\mathbf{k}}} = \braket{\mathbf{r}+\mathbf{R}|u_{n\mathbf{k}}}$. The photoemission matrix element with respect to the Kohn-Sham states is defined as:

$$  
\begin{equation}  
M_{n\mathbf{k}}(\mathbf{p}) \equiv \braket{\chi_\mathbf{p}|\mathbf{A}\cdot\mathbf{r}|\psi_{n\mathbf{k}}}  
\end{equation}  
$$

where $\mathbf{p}$ is the photoelectron momentum, $n$ is the band index, $\mathbf{k}$ is the crystal momentum, $\ket{\chi_{\mathbf{p}}}$ is the final state, and $\mathbf{A}$ is the polarization vector. Here, the photoelectron momentum is represented by a summation of parallel components and a perpendicular component:

$$  
\begin{equation}  
\mathbf{p} = \mathbf{p}_{\parallel} + \mathbf{p}_{\perp}  
\end{equation}  
$$

One sticks to this notation since the momentum does not conserve for the perpendicular direction in a photoemission process. Accordingly, a photoelectron obeys the Bloch theorem only in the two-dimensional plane. Thus, it follows a following Bloch theorem:

$$  
\begin{equation}  
\braket{\mathbf{r}+\mathbf{R}|\chi_{\mathbf{p}}} = e^{i\mathbf{p}_{\parallel}\cdot\mathbf{R}}\braket{\mathbf{r}|\chi_{\mathbf{p}}}  
\end{equation}  
$$

Thus, one can write the final state as the Bloch state $\ket{\chi_{\mathbf{p}}} = e^{i\mathbf{p}_{\parallel}\cdot \mathbf{r}}\ket{\widetilde{\chi}_{\mathbf{p}}}$ with $\braket{\mathbf{r}+\mathbf{R}|\widetilde{\chi}_{\mathbf{p}}} = \braket{\mathbf{r}|\widetilde{\chi}_{\mathbf{p}}}$. The matrix element can be rewritten in the following form (\[Schuler's lecture note 2024\]):

$$  
\begin{align}  
M_{n\mathbf{k}}(\mathbf{p}) &= \braket{\chi_{\mathbf{p}}|\mathbf{e}\cdot\mathbf{r}|\psi_{n\mathbf{k}}} \nonumber \\  
&= \int d\mathbf{r}~e^{-i\mathbf{p}_{\parallel}\cdot\mathbf{r}}\widetilde\chi^{*}_{\mathbf{p}}(\mathbf{r}) (\mathbf{e}\cdot\mathbf{r}) e^{i\mathbf{k}\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r}) \nonumber \\  
&= \sum\limits_{\mathbf{R}} \int_{\rm Cell} d\mathbf{r}~e^{-i\mathbf{p}_{\parallel}\cdot(\mathbf{r}+\mathbf{R})}\widetilde\chi^{*}_{\mathbf{p}}(\mathbf{r}+\mathbf{R}) (\mathbf{e}\cdot\mathbf{r}) e^{i\mathbf{k}\cdot(\mathbf{r}+\mathbf{R})} u_{n\mathbf{k}}(\mathbf{r}+\mathbf{R}) \nonumber \\  
&= \sum\limits_{\mathbf{R}} e^{i(\mathbf{k}-\mathbf{p}_{\parallel})\cdot\mathbf{R}} \int_{\rm Cell} d\mathbf{r}~ \chi^{_}_{\mathbf{p}}(\mathbf{r}) (\mathbf{e}\cdot\mathbf{r}) e^{i(\mathbf{k}-\mathbf{p}_{\parallel})\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r}) \nonumber \\  
&= \sum\limits_{\mathbf{R}} e^{i(\mathbf{k}-\mathbf{p}_{\parallel})\cdot\mathbf{R}}e^{-i\mathbf{p}_{\parallel}\cdot\mathbf{r}} \int_{\rm Cell} d\mathbf{r}~ \chi^{_}_{\mathbf{p}}(\mathbf{r}) (\mathbf{e}\cdot\mathbf{r}) \psi_{n\mathbf{k}}(\mathbf{r})  
\end{align}  
$$

The summation for the lattice vector $\mathbf{R}$ has the following conditions:

$$  
\begin{equation}  
\sum\limits_{\mathbf{R}} e^{i(\mathbf{k}-\mathbf{p}_{\parallel})\cdot\mathbf{R}} =  
\begin{cases}  
0,~\text{for}~\mathbf{k}+\mathbf{G}\neq\mathbf{p}_{\parallel} \\  
N,~\text{for}~\mathbf{k}+\mathbf{G} = \mathbf{p}_{\parallel}  
\end{cases}  
\end{equation}  
$$

where $N$ is the number of unit cells. Typically, $\mathbf{G}$ is equal to zero and $\mathbf{k} = \mathbf{p}_{\parallel}$, so that the summation is nonzero. The matrix element is then rewritten as follows:

$$  
\begin{equation}  
M_{n\mathbf{k}}(\mathbf{p}) = N \int_{\rm Cell} d\mathbf{r}~ \chi^{*}_{\mathbf{p}}(\mathbf{r}) (\mathbf{e}\cdot\mathbf{r}) \psi_{n\mathbf{k}}(\mathbf{r})  
\end{equation}  
$$

However, the evaluation of integral with respect to $\mathbf{r}$ within the unit cell is impossible. This is because the length operator $\mathbf{r}$ is ill-defined in the periodic systems. As a solution for this, one can represent the Kohn-Sham state as a Wannier function:

$$  
\begin{align}  
\ket{\psi_{n\mathbf{k}}} &= \frac{1}{N} \sum\limits_{j}c_{jn\mathbf{k}}\ket{\psi^{(W)}_{j\mathbf{k}}} \nonumber \\  
&= \frac{1}{N} \sum\limits_{j}c_{jn\mathbf{k}}\sum\limits_{\mathbf{R}}e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})}\ket{w_{\mathbf{R}j}} \nonumber \\  
&= \frac{1}{N} \sum\limits_{\mathbf{R}j}c_{jn\mathbf{k}}e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})}\ket{w_{\mathbf{R}j}}  
\end{align}  
$$

where $c_{jn\mathbf{k}}$ is the eigenstate coefficient of a $j(= \{\mu\alpha\})$th tight-binding orbital. Here, $\mu$ indicates an atom in a primitive cell and $\alpha$ denotes an orbital of a given atom. Thus, $\mathbf{r}_{j}$ is a position of atom $\mu$ in a home unit cell. In addition, $\ket{\widetilde{\psi}_{j\mathbf{k}}}$ is a quasi Bloch state which is the Fourier transformation of a Wannier function $\ket{w_{\mathbf{R}j}}$. The Wannier function $\braket{\mathbf{r}|w_{\mathbf{R}j}}$ is defined as:

$$  
\begin{equation}  
\braket{\mathbf{r}|w_{\mathbf{R}j}} = w_{j}(\mathbf{r}-\mathbf{R}) = w_{\mu\alpha}(\mathbf{r}-\mathbf{r}_{\mu}-\mathbf{R})  
\end{equation}  
$$

This lets the tight-binding basis orbital of type $j$ in cell $\mathbf{R}$. One can drop $\mu$ and $\alpha$ indices and work only with $j$ (\[Coh 2022\]): $\mathbf{r}_{\mu} = \mathbf{r}_{j}$.

Another issue is that computing the final state ab initio is challenging. However, the final state $\braket{\mathbf{r}|\chi_{\mathbf{p}}}$ can be represented as $e^{i\mathbf{p}\cdot\mathbf{r}}$ in the plane wave approximation. This form is expanded into spherical harmonics by applying the addition theorem for spherical harmonics, as shown below:

$$  
\begin{equation}  
e^{i\mathbf{p}\cdot\mathbf{r}} = 4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}i^{l}j_{l}(pr)Y^{m}_{l}(\theta_{\mathbf{p}},\phi_{\mathbf{p}})Y^{m*}_{l}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})  
\end{equation}  
$$

where $\theta_{\mathbf{p}}$ and $\phi_{\mathbf{p}}$ ($\theta_{\mathbf{r}}$ and $\phi_{\mathbf{r}}$) represent the polar and azimuthal angles at which the final (initial) state forms with the sample.

Wannier function with respect to the position operator is described as:

$$  
\begin{align}  
\mathbf{r}\ket{w_{n\mathbf{R}}} &= \frac{V_{\rm cell}}{(2\pi)^{3}}\int_{\rm BZ} d\mathbf{k}~\mathbf{r}e^{-i\mathbf{k}\cdot\mathbf{R}}\ket{\psi_{n\mathbf{k}}} \nonumber \\  
&= \frac{V_{\rm cell}}{(2\pi)^{3}}\int_{\rm BZ} d\mathbf{k}~\mathbf{r}e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\ket{u_{n\mathbf{k}}}  
\end{align}  
$$

Using the relation $\nabla_{\mathbf{k}}[e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}] = i(\mathbf{r}-\mathbf{R})e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}$, the integrand part is rewritten as $\mathbf{r}e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})} = \mathbf{R}e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}-i\nabla_{\mathbf{k}}[e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}]$. Thus, the integration is given by:

$$  
\begin{equation}  
\frac{V_{\rm cell}}{(2\pi)^{3}}\int_{\rm BZ} d\mathbf{k}~(\mathbf{R}e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}-i\nabla_{\mathbf{k}}[e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}])\ket{u_{n\mathbf{k}}}  
\end{equation}  
$$

Focusing on the second term, one can modify the form by using an integration by parts:

$$  
\begin{equation}  
\int_{\rm BZ} d\mathbf{k}~\underbrace{\nabla_{\mathbf{k}}[e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}])}_{v'}\underbrace{\ket{u_{n\mathbf{k}}}}_{u} = e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\ket{u_{n\mathbf{k}}}|_{\mathbf{k} \in \rm BZ} - \int_{\rm BZ} d\mathbf{k}~e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\nabla_{\mathbf{k}}\ket{u_{n\mathbf{k}}}  
\end{equation}  
$$

The first part is zero since $\psi_{n\mathbf{k}}(\mathbf{r}-\mathbf{R})$ has the same value at boundaries of the Brillouin zone. With this equation, the integration is finally described as:

$$  
\begin{align}  
\mathbf{r}\ket{w_{n\mathbf{R}}} &= \frac{V_{\rm cell}}{(2\pi)^{3}}\int_{\rm BZ} d\mathbf{k}~(\mathbf{R}e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}+ie^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\nabla_{\mathbf{k}})\ket{u_{n\mathbf{k}}} \nonumber \\  
&= \frac{V_{\rm cell}}{(2\pi)^{3}}\int_{\rm BZ} d\mathbf{k}~e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}(\mathbf{R}+i\nabla_{\mathbf{k}})\ket{u_{n\mathbf{k}}}  
\end{align}  
$$

Multiplying $\bra{w_{n\mathbf{0}}}$ on the left side, one obtains:

$$  
\begin{align}  
\braket{w_{n\mathbf{0}}|\mathbf{r}|w_{n\mathbf{R}}} &= \left[\frac{V_{\rm cell}}{(2\pi)^{3}}\right]^{2} \int_{\rm BZ} d\mathbf{k} d\mathbf{k}'~e^{-i\mathbf{k}'\cdot(\mathbf{r}-\mathbf{0})}e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\braket{u_{n\mathbf{k}'}|(\mathbf{R}+i\nabla_{\mathbf{k}})|u_{n\mathbf{k}}} \nonumber \\  
&= \frac{V_{\rm cell}}{(2\pi)^{3}} \int_{\rm BZ} d\mathbf{k}~e^{-i\mathbf{k}\cdot\mathbf{R}}\braket{u_{n\mathbf{k}}|i\nabla_{\mathbf{k}}|u_{n\mathbf{k}}}  
\end{align}  
$$

The second equation is derived from the evaluation of $e^{i(\mathbf{k}-\mathbf{k}')\cdot\mathbf{r}}\braket{u_{n\mathbf{k}'}|u_{n\mathbf{k}}} = \braket{\psi_{n\mathbf{k}'}|\psi_{n\mathbf{k}}}$ that yields the constraint:

$$  
\begin{equation}  
\braket{\psi_{n\mathbf{k}}|\psi_{n\mathbf{k}'}} = \frac{(2\pi)^{3}}{V_{\rm cell}} \delta(\mathbf{k}-\mathbf{k}')  
\end{equation}  
$$

Since the final state is also a Bloch state, the following relation holds:

$$  
\begin{equation}  
\braket{\chi_{\mathbf{p}}|\mathbf{r}|\psi_{n\mathbf{k}}} = i\braket{\chi_{\mathbf{p}}|\nabla_{\mathbf{k}}|u_{n\mathbf{k}}}  
\end{equation}  
$$

Combining the expressions for initial and final states, one can write a matrix element of a $j$th basis orbital as:

$$  
\begin{align}  
M_{n\mathbf{k}}(\mathbf{p}) &= N \int_{\rm Cell} d\mathbf{r}~ \chi^{_}_{\mathbf{p}}(\mathbf{r}) (\mathbf{e}\cdot\mathbf{r}) \psi_{n\mathbf{k}}(\mathbf{r}) \nonumber \\  
&= 4\pi \sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l} (-i)^{l} \int_{\rm Cell} d\mathbf{r}~j_{l}(pr)Y^{m_}_{l}(\theta_{\mathbf{p}},\phi_{\mathbf{p}})Y^{m}_{l}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})(\mathbf{e}\cdot\mathbf{r})\sum\limits_{\mathbf{R}j}c_{jn\mathbf{k}}e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})}w_{j}(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R}) \nonumber \\  
&= 4\pi \sum\limits_{\mathbf{R}j}c_{jn\mathbf{k}}\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l} (-i)^{l} \int_{\rm Cell} d\mathbf{r}~j_{l}(pr)Y^{m*}_{l}(\theta_{\mathbf{p}},\phi_{\mathbf{p}})Y^{m}_{l}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})(\mathbf{e}\cdot\mathbf{r})e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})}w_{j}(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R})  
\end{align}  
$$

When a Wannier function is close to an atomic orbital; $w_{j}(\mathbf{r}) = R_{n_{j}l_{j}}(r)Y^{m_{j}}_{l_{j}}(\theta_{\mathbf{p}},\phi_{\mathbf{p}})$, the matrix element reads:

$$  
\begin{equation}  
M_{n\mathbf{k}}(\mathbf{p}) = \sum\limits_{\mathbf{R}j}c_{jn\mathbf{k}} e^{i\mathbf{k}\cdot(\mathbf{R}+\mathbf{r}_{j})} M^{\rm ACA}_{j}(\mathbf{p})  
\end{equation}  
$$

with $M^{\rm ACA}_{j}(\mathbf{p})$ that is given by:

$$  
\begin{align}  
M^{\rm ACA}_{nj}(\mathbf{p}) &= 4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}(-i)^{l} Y^{m*}_{l}(\theta_{\mathbf{p}},\phi_{\mathbf{p}}) \underbrace{\int^{\infty}_{0} dr~r^{3} j_{l}(pr)R_{n_{j}l_{j}}(r)}_{I_{n_{j}l_{j}l}(p)} \int \sin\theta d\theta d\phi ~Y^{m}_{l}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})(\mathbf{e}\cdot\mathbf{r})~Y^{m_{j}}_{l_{j}}(\theta_{\mathbf{r}},\phi_{\mathbf{r}}) \nonumber \\  
&= 4\pi\sum\limits^{\infty}_{l=0}\sum\limits^{l}_{m=-l}(-i)^{l} Y^{m*}_{l}(\theta_{\mathbf{p}},\phi_{\mathbf{p}}) I_{n_{j}l_{j}l}(p) \int \sin\theta d\theta d\phi ~Y^{m}_{l}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})(\mathbf{e}\cdot\mathbf{r})~Y^{m_{j}}_{l_{j}}(\theta_{\mathbf{r}},\phi_{\mathbf{r}})  
\end{align}  
$$

where $n_{j}$, $m_{j}$, and $l_{j}$ denote the principal, magnetic, and angular momentum quantum number of the $j$th basis orbital, respectively. The function $I_{n_{j}l_{j}l}(p)$ is called the radial integral and is symmetric with respect to $p\leftrightarrow -p$. In practice, $l_{j}$ and $n_{j}$ are inputs and $l$ is a value to be determined by selection rules:

$$  
\begin{equation}  
|l-l_{j}| = 1,~|m-m_{j}| = 0, 1  
\end{equation}  
$$

Thus, $`I_{n_{j}l_{j}l}(p)`$ is indexed from $`l`$ and $`p`$. Also, the form of $`R_{n_{j}l_{j}}(r)`$ can be hydrogen-like, Slater-type, or user-defined orbital. Note that the radial wave function $`R_{n_{j}l_{j}}(r)`$ implicitly depends on the ion charge $`Z_{j}`$. The right (and left)-circularly polarization vectors are given by:

$$  
\begin{align*}  
[\mathbf{e}\cdot\mathbf{r}]_{\rm RCP} &= \frac{x+iy}{r} = -\sqrt{2}Y^{1}_{1}, \\  
[\mathbf{e}\cdot\mathbf{r}]_{\rm LCP} &= \frac{x-iy}{r} = +\sqrt{2}Y^{-1}_{1}  
\end{align*}  
$$

Sch철nhense (Sch철nhense 1990) showed that the circular dichroism for the polarization vector $\mathbf{e} = [0,\pm i,1]$ disappears from a single $2p_{z}$ orbital. In this section, based on the matrix element outlined above, one will see how circular dichroism is distributed over a single $2p_{z}$ orbital at an arbitrary polarization angle ($\alpha$ and $\beta$).