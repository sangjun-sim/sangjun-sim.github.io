---
title: Berezinskii-Kosterlitz-Thouless transition (2)
date: 2026-04-20 15:00:00 +0900
categories:
  - Physics
  - Statistical Physics
tags:
  - physics
  - phase-transition
math: true
toc: true
---


## Beyond spin waves

The phase transition associated with the vortices is called the Berezinskii–Kosterlitz–Thouless (BKT) transition. This transition occurs in a 2D $XY$ model (no $z$-component magnetization), e.g., a 2D superconductor with the complex order parameter with an arbitrary phase factor and 2D $XY$ magnets. The ground state should break this symmetry since it has the $U(1)$ symmetry. Accordingly, if there is a gradient of the phase factor, there is a corresponding probability current (that is proportional to $\psi^{\*}\partial_i\phi$). At any temperature, $\phi$ is disordered by thermally populated topological defects (vortex and anti-vortex, which are the global excitations). At $T < T_{BKT}$, the vortices attract to each other. The correlation function decays as a power law. However, $T > T_{BKT}$, it decays exponentially, and the vortices are no longer bound and move freely. This cannot be elucidated by Landau's paradigm; that is, it is **not** a symmetry-breaking transition (there is no divergence on the thermodynamic variables). Experimentally, Resnick, *et al*. measured the resistance of 2D superconductors across the BKT transition and discovered that $V \propto I^3$ at $T_{BKT}$ [PRL 47, 1542 (1981)].

{: .prompt-info}
> Q. How to distinguish between symmetry-broken phase transition and topological phase transition? 

It can be distinguished by the presence of an order parameter.

### 2D $XY$ model

The Hamiltonian for the 2D $XY$ model is described as:

$$
\begin{equation}
    \beta H = -K\sum_{\braket{i,j}}\mathbf{S}_i\cdot\mathbf{S}_j = -K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)}
\end{equation}
$$

where $\mathbf{S}_i = (\cos{\theta_i},\sin{\theta_i})$. The partition function is given by the summation of $e^{-\beta H}$ for all possible configurations. This can be expressed as:

$$
\begin{equation}
    Z = \prod_{i=1}^{N} \int^{2\pi}_{0} \frac{d\theta}{2\pi} e^{K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)}}
\end{equation}
$$

The correlation function is given by:

$$
\begin{equation}
    \braket{\mathbf{S}_i\cdot\mathbf{S}_j} = \braket{\cos{(\theta_0-\theta_r)}} = \frac{1}{Z}\left[\prod_{i=1}^{N} \int^{2\pi}_{0} \frac{d\theta_i}{2\pi} \cos{(\theta_0-\theta_r)} e^{K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j})}\right]
\end{equation}
$$

By calculating the correlation function with high-$T$ expansion ($K \ll 1$), we can guess the point where the phase transition occurs. The correlation function is then approximated by

$$
\begin{equation}
    \braket{\mathbf{S}_0\cdot\mathbf{S}_r} \sim \frac{1}{Z}\prod_{i=1}^{N} \int^{2\pi}_{0} \frac{d\theta_i}{2\pi} \cos{(\theta_0-\theta_r)} \prod_{\braket{i,j}} (1 + K\cdot\cos{(\theta_i-\theta_j)})
\end{equation}
$$

where the summation is transformed into the product from the exponential. Because the integration of $\cos{(\theta_0-\theta_r)}$ over $\theta_0$ is zero, the $O(1)$ term in the product does not contribute to the sum at all. This goes the same for the $O(K^1)$ term. The leading term must include the multiplication of cosine functions with an even number of $\theta_i$ so that the integration can be non-zero. Then, the correlation function is expressed as

$$
\begin{equation}
    \braket{\mathbf{S}_0\cdot\mathbf{S}_r} = \frac{K^r}{2^r} = e^{-r/\xi}
\end{equation}
$$

#### Review.

The vortex is topologically equivalent (homotopic) to the diverging spin configuration since these are the same when we rotate the whole configuration. The anti-vortex is, however, not topologically equivalent. The quantity to identify them is the vorticity or the winding number which is defined as

$$
\begin{equation}
    W = \frac{1}{2\pi}\oint_C d\mathbf{l}\cdot\nabla\theta = \text{integers}
\end{equation}
$$

where the integral counts how many times the $2\pi$ angle is rotated around the contour. (It is sometimes called skyrmion number for $S^2$.) If one traces the direction of a spin on the lattice along a circular loop, one should count the number of spins in the same direction. A high winding number $W > 1$ is not usually observed. This can be experimentally observed in a superconductor; \textit{giant vortex}. The homotopic vortices can be distinguished by using XMCD (X-ray Magnetic Circular Dichroism), Lorentz TEM, and NV (Nitrogen vacancy; Nitrogen defect in a diamond) center magnetometry that images the local spin at a nanometer scale. Let us there is a continuous function $f$ such that $f(0) = f(2\pi)$ that maps between $S^{1}\_{a}$ and $S^{1}\_{b}$ with the parameter; $\theta$. Note that one needs the closed space to define the winding number. Here the winding number classifies the topology and a set of functions can form a group which is called the first homotopy group $\pi_1(S^1)$ (There can be various homotopy groups). D. Mermin wrote a fruitful review paper on the topics of topology (Rev. Mod. Phys.).

### Low-temperature limit of correlation function

In the low-temperature limit, the neighboring spins will be similar to each other ($\theta_i \sim \theta_j$). 

$$
\begin{equation}
    \beta H = -K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)} \sim -K\sum_{\braket{i,j}}\left[1-\frac{1}{2}(\theta_i-\theta_j)^2\right] = -K\sum_{\braket{i,j}}(\theta_i-\theta_j)^2 + const.
\end{equation}
$$

Taking the continuum limit $\theta_i\rightarrow \theta(r_i)$, the $\beta H$ can be written as

$$
\begin{equation}
    \beta H = \frac{K}{2} \int dxdy~(\nabla\theta)^2 + const.
\end{equation}
$$

The spin correlation function can be evaluated as $\braket{\Re e^{i(\theta_i-\theta_j)}} = \Re\braket{e^{i(\theta_i-\theta_j)}}$. If a random variable $\alpha$ follows the Gaussian distribution then the identity holds: $\braket{e^{i\alpha}} \sim e^{-\frac{1}{2}\braket{\alpha^2}}$. Then the correlation function can be expressed as

$$
\begin{equation}
    \braket{\mathbf{S}_i\cdot\mathbf{S}_j} = \Re e^{-\frac{1}{2}\braket{(\theta_i-\theta_j)^2}}
\end{equation}
$$

The expectation value is (look up the old lecture notes)

$$
\begin{equation}
    \braket{(\theta_i-\theta_j)^2} = \frac{1}{\pi K}\ln \left(\frac{r}{a}\right)
\end{equation}
$$

Then the correlation function is finally given by

$$
\begin{equation}
    \braket{\mathbf{S}_i\cdot\mathbf{S}_j}= \left(\frac{r}{a}\right)^{-\frac{1}{2\pi K}}
\end{equation}
$$

The behaviors of the correlation length in the two limits (low-$T$ and high-$T$) are different. There must be something happening between two different limits. We will discuss it next Wednesday.

Q. Why is the vortex called a defect? Imagine a simple diverging spin configuration. For $\theta:\mathrm{R}^2\rightarrow\mathrm{S}^1$, it is well-defined around a loop. However, there must be a singular point inside the loop. When shrinking this loop, this loop can be arbitrarily small so that it converges to a single point. Since $\theta$ is gone (or ill-defined), we call it a defect. This is not the case for skyrmions or solitons.

### Free energy of a vortex

To obtain the free energy of a vortex, we need to know the energy of the vortex in order to evaluate the partition function. For the case of $|a\theta \ll 1|$, the continuum form of the Hamiltonian is given by the integration of $(\nabla\theta)^2$. In addition, the vortex is characterized by the winding number with

$$
\begin{equation}
    \theta = n\chi + \theta_0
\end{equation}
$$

where $\chi$ is the azimuthal angle of the configuration, $n$ is the winding number, and $\theta_0$ is a constant. This is the stable of the vortex configuration. We need to consider this to calculate the partition function. The gradient of $\chi$ is pointing to the $\hat{e}_{\phi}$ direction. Thus, the gradient of $\theta$ is expressed as

$$
\begin{equation}
    \nabla\theta = \frac{n}{r} \hat{e}_{\phi}
\end{equation}
$$

Therefore, the integration of $(\nabla\theta)^2$ is expressed as

$$
\begin{equation}
    \int d^2x (\nabla\theta)^2 = \int d^2x \frac{n^2}{r^2} = 2\pi n^2 \int^{L}_{0} dr \frac{1}{r}
\end{equation}
$$

The final form of this integration tells us that it diverges. This divergence comes from the singularity of the vortex that is present at its center. We must exclude this region while doing the integration. (Note that the continuum model fails to capture the free energy of the vortex.) However, there must be some contribution from the center of the vortex. We will compensate for this energy by $\varepsilon^{0}_{n}(a)$ that depends on the winding number $n$. Thus, the integration is given by

$$
\begin{equation}
    \int d^2x (\nabla\theta)^2 = 2\pi n^2\ln{\frac{L}{a}} + \varepsilon^{0}_{n}(a)
\end{equation}
$$

where $L$ is the system size and $a$ is a short distance cutoff or a size of a vortex core. The energy of the vortex is then written by

$$
\begin{equation}
    \beta\varepsilon_n = \pi K n^2 \ln{\frac{L}{a}} + \beta\varepsilon^{0}_{n}(a)
\end{equation}
$$

The partition function is then the summation of the Boltzmann factor over all possible configurations for a vortex with the winding number. Since the summation does not run over the Boltzmann factor, the partition function reads

$$
\begin{equation}
    Z_n \sim 2\pi\left(\frac{L}{a}\right)^2 e^{-\pi K n^2 \ln{\frac{L}{a}} - \beta\varepsilon^{0}_{n}(a)}
\end{equation}
$$

where $2\pi$ prefactor comes from the constant $\theta_0$. The free energy is then given by

$$
\begin{align}
    F_n &= -k_BT\left[\ln{2\pi} + 2\ln{\left(\frac{L}{a}\right)} - \pi K n^2 \ln{\left(\frac{L}{a}\right)} - \beta\varepsilon^{0}_{n}(a)\right] \nonumber \\
    &= \varepsilon^{0}_{n}(a) -k_BT\ln{2\pi} - (2 - \pi K n^2)k_BT\ln{\left(\frac{L}{a}\right)} \nonumber \\
    &= \left[\varepsilon^{0}_{n}(a) + \pi n^2 k_BT\ln{\left(\frac{L}{a}\right)}\right] - 2 k_BT \ln{\left(\frac{L}{a}\right)}
\end{align}
$$

Recall that free energy is defined as $U - TS$ in thermodynamics. Here one can correspond the first term to the internal energy and the second term to the entropy ($S = k_B\ln{\Omega}$). The internal energy in this case is independent of the temperature. At low temperatures ($F\sim U$), the number of vortices is small with the probability $e^{-\beta H}$. On the other hand, it is big at high temperatures ($F \sim -TS$) making the lowest energy with more vortices. Since the core energy $\varepsilon^{0}_{n}(a)$ is a constant with respect to the temperature and it is smaller than other terms, the free energy can be rewritten as

$$
\begin{equation}
    F_n = \pi n^2 k_BT\ln{\left(\frac{L}{a}\right)} - 2 k_BT \ln{\left(\frac{L}{a}\right)}
\end{equation}
$$

Neglecting all the interactions between the vortices, we can define the critical $K_c = 2/n^2\pi$. The critical temperature can be evaluated from $J/k_B T_c = 2/n^2\pi$. If $T < T_c$, there are a finite number of vortices. However, if $T > T_c$, the free energy is always smaller than zero, and there are infinite numbers of vortices. Note that adding some constant energies does not dramatically change this relation. For $n = 1$, $K_c$ is given by

$$
\begin{equation}
    k_BT = \frac{\pi}{2}J,~K_c = \frac{2}{\pi}
\end{equation}
$$

At low temperatures, the Boltzmann factor is small and the probability to make a vortex is small. Although there is finite energy, the system wants to make many vortices because of the large entropy that leads to the disorder. Across the critical temperature, the system exhibits the proliferation of vortices. This is why the behaviors of the correlation length decay were different. In order to obtain the critical temperature accurately, the interaction between the vortices must be included. We have discussed only the single vortex (only vortices or anti-vortices). We will talk about the partition function when there are vortex and anti-vortex pairs.

<br>

### Partition function of vortices

We started with the Hamiltonian

$$
\begin{equation}
    \beta H = \frac{K}{2} \int dxdy (\nabla\theta)^2 = \frac{K}{2} \int dxdy u^2
\end{equation}
$$

Let us find the gradient of $\theta$ ($u = \nabla\theta$, a distortion field). The line integral of this field gives $2\pi$. 

$$
\begin{equation}
    \oint_C d\mathbf{l}\cdot(\nabla \theta) = 2\pi
\end{equation}
$$

If we use the Stokes' theorem, however, we have

$$
\begin{equation}
    \int dxdy \hat{z}\cdot (\nabla \times u) = 0?
\end{equation}
$$

where the curl of this field is zero. The contradiction comes from the fact that the curl of a field is zero if and only if the field is well-defined everywhere. If there is a vortex, $\nabla \times u \neq 0$. One can decompose $u = u_0 + u_1$ by the continuous excitations captured by $u_0$ ($\nabla \times u_0 = 0$) and the vortices captured by $u_1$ ($\nabla \times u_1 \neq 0$). In addition, the surface integral will not change if the contour encloses the core of the vortex. If we shrink the region of integration, the value will not change. For a single vortex, $\hat{z}\cdot (\nabla \times u)$ can be represented as a delta function $2\pi\delta(x)$. This goes the same for the vortices with winding number $n$ at position $x$. Then, one can generalize it

$$
\begin{equation}
    \nabla \times u = 2\pi\hat{z}\sum^{N}_{i=1} n_i\delta(x-x_i)
\end{equation}
$$

This is the partial differential equation ($\nabla \times u = f(\mathbf{x})$). There is a trick if we encounter this kind of problem: $u \rightarrow - \nabla \times (\hat{z} \psi)$ as we did in the electrodynamics. Then the equation is given by

$$
\begin{equation}
    \nabla^2\psi = 2\pi\sum^{N}_{i=1} n_i\delta(x-x_i)
\end{equation}
$$

We also met this equation (Poisson's equation) in the electrodynamics course. In two-dimensional space, the solution of the equation ($\nabla^2 V = \frac{q}{4\pi\varepsilon}\delta(x-x_i)$) was

$$
\begin{equation}
    V = \frac{q}{4\pi\varepsilon}\ln{|\mathbf{x}-\mathbf{x}_i|}
\end{equation}
$$

Similarly, the solution of $\psi$ is 

$$
\begin{equation}
    \psi(x) = \sum_{i=1}n_i\ln{|\mathbf{x}-\mathbf{x}_i|}
\end{equation}
$$

In addition, the non-singular $u_0$ can be expressed as the non-singular -$\nabla \phi$. Then the free energy can be rewritten as

$$
\begin{align}
    \beta H &= \frac{K}{2} \int dxdy [\nabla\phi - \nabla \times (\hat{z} \psi)]^2 \nonumber\\
    &= \frac{K}{2} \int dxdy [(\nabla\phi)^2 -2\nabla\phi\cdot(\nabla \times (\hat{z} \psi)) + (\nabla \times (\hat{z} \psi))^2] \nonumber\\
    &= \frac{K}{2} \int dxdy [(\nabla\phi)^2 + (\nabla \times (\hat{z} \psi))^2] \nonumber\\
    &= \frac{K}{2} \int dxdy [(\nabla\phi)^2 + (\nabla\psi)^2]
\end{align}
$$

where the following integration turns out to be zero if we assume the periodic boundary condition. The boundary terms are relevant to the calculation of transport properties. For the discussion of the phase transition, the boundary condition does not affect the results. 

$$
\begin{equation}
    \int dx dy -2\nabla\phi\cdot(\nabla \times (\hat{z} \psi)) = \int dx dy -2\nabla\times(\nabla\phi)\cdot\hat{z}\psi = 0
\end{equation}
$$

The second term can be expressed by

$$
\begin{align}
    \int dx dy (\nabla\psi)(\nabla\psi) &= -\int dx dy \psi\nabla^2\psi \nonumber\\
    &= \int dx dy [\sum_{i=1}n_i\ln{|\mathbf{x}-\mathbf{x}_i|}][2\pi\sum_{j=1} n_j\delta(x-x_j)] \nonumber\\
    &= -2\pi\sum_{i,j} n_in_j\ln{|\mathbf{x}_i-\mathbf{x}_j|}
\end{align}
$$

Then the Hamiltonian is written as

$$
\begin{equation}
    \beta H = \frac{K}{2} \int dxdy (\nabla\phi)^2 -\pi K \sum_{i,j} n_in_j\ln{|\mathbf{x}_i-\mathbf{x}_j|}
\end{equation}
$$

The second term describes the interaction of two vortices. If the vortices have different signs, then the sign of the potential becomes positive so that the distance between the two vortices tends to be small. If $i = j$, it contributes to the self-energy of the vortex. This is related to the core of the vortex. This is analogous to the electrostatics in two-dimensional space. It is conventional to denote this equation by

$$
\begin{align}
    \beta H &= \frac{K}{2} \int dxdy (\nabla\phi)^2 \nonumber\\
    &- 4 \pi^2 K \sum_{i,j} n_in_j C(\mathbf{x}_i-\mathbf{x}_j) \nonumber\\
    &+ \sum_i\beta\varepsilon^{0}_{n_i}
\end{align}
$$

where the second term has the 2D Coulomb potential $C(\mathbf{x}_i-\mathbf{x}_j) = \frac{\ln{|\mathbf{x}_i-\mathbf{x}_j|}}{2\pi}$ and the third term is the self-energy of the vortex. For the winding number $n_i$ and the positions of vortices $\mathbf{x}_i$, the partition function should be given by

$$
\begin{equation}
    Z = \sum_{\text{all possible configurations}}e^{\int dx dy -\frac{K}{2} (\nabla\phi)^2}e^{4 \pi^2 K \sum_{i,j} n_in_j C(\mathbf{x}_i-\mathbf{x}_j)}
\end{equation}
$$

The two exponential terms are independent of each other. The first term comes from the excitation, and the second comes from the vortices. 

$$
\begin{equation}
    Z = \int D[\phi(\mathbf{x})] e^{\int dx dy -\frac{K}{2} (\nabla\phi)^2} \times \sum_{N}\sum_{n_i}\prod^{N}_{i=1} \int dx_i e^{4 \pi^2 K \sum_{i,j} n_in_j C(\mathbf{x}_i-\mathbf{x}_j)}e^{-\beta\varepsilon^{0}_{n_i}}
\end{equation}
$$

where $N$ is the number of vortex, $n_i$ is the winding number of a vortex. One can get the critical value using the renormalization group. The $e^{-\beta\varepsilon^{0}_{n_i}}$ is called $y_{n_i}$. This changes the number of particles in the grand canonical ensemble. 


---

## References

1. Kardar, M. _Statistical Physics of Fields_. (Cambridge University Press, Cambridge, 2007).
2. 


Q. Why people say that a skyrmion has a topological charge?
> Q. What is the physical meaning of the topological charge?

Q. What determines the speed of the skyrmion?
A. The size of the skyrmion and the (charge/spin?) current determine the speed of the skyrmion. As the size of the skyrmion gets smaller, the skyrmion becomes faster. (Is it correct?)

Q. In which form does the entropy vanish when two skyrmions with the different topological charges meet and annihilate?

Q. How can we calculate the Lande g factor via first-principles?
Q. How can we extract the spin-orbit coupling Hamiltonian from the DFT results?
Q. What is the physical origin of the Gilbert damping? (Read more in Kambersky's theory.)

If the questions above are resolved, then the following linear response formula can be used for the evaluation of the Gilbert damping tensor:
$$
\alpha^{\mu\nu} = \frac{g}{\braket{\mathbf{S}}\pi}\int\int\left(-\frac{df(\varepsilon)}{d\varepsilon}\right)\text{Tr}[\Gamma^{\mu}\Im G(\Gamma^{\nu})^{\dagger}\Im G] \frac{d^{3}\mathbf{k}}{(2\pi)^{3}} d\varepsilon
$$
where $g$ is the Lande g factor, $f(\varepsilon)$ is the Fermi-Dirac distribution, $\Im G$ is the imaginary part of the Green function, and the $\Gamma^{\mu}$ is the torque operator which is given by:
$$
\Gamma^{\mu} = [\sigma^{\mu},H_{\rm SO}]
$$
with the Pauli matrix $\sigma^{\mu}$. The caution is required in the Gilbert damping tensor since the spin and site degrees of freedom are not explicitly written in the Green function.



