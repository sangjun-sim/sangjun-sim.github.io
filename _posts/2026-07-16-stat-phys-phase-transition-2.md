---
title: Berezinskii-Kosterlitz-Thouless transition (2)
date: 2026-07-16 00:00:00 +0900
categories:
  - Physics
  - Statistical Physics
tags:
  - physics
  - phase-transition
math: true
toc: true
---


## Beyond spin waves: 2D $XY$ model

The phase transition associated with the vortices is called the Berezinskii–Kosterlitz–Thouless (BKT) transition [1, 2]. This transition occurs in a 2D  model (no -component magnetization), e.g., a 2D superconductor with the complex order parameter with an arbitrary phase factor and 2D  magnets. If there is a gradient of the phase factor, there is a corresponding probability current (that is proportional to ). Goldstone fluctuations destroy long-range order at . Topological defects (vortex and anti-vortex, which are the global excitations) play a distinct role. At , the vortices attract to each other. The correlation function decays as a power law. However, , it decays exponentially, and the vortices are no longer bound and move freely. This cannot be elucidated by Landau's paradigm; that is, it is not a symmetry-breaking transition (there is no divergence on the thermodynamic variables). Experimentally, Resnick et al. measured the resistive transition of a two-dimensional array of proximity-coupled Josephson junctions and observed nonlinear – characteristics consistent with the BKT picture [3]. The exponent in  reaches  — the value predicted by Halperin–Nelson and Ambegaokar–Halperin–Nelson–Siggia [4, 5], following from the universal jump of the superfluid stiffness at  [6].

{: .prompt-info}
> **Q. How to distinguish between symmetry-broken phase transition and topological phase transition?**
>
It can be distinguished by the presence of an order parameter.

## High-temperature limit of correlation function

The Hamiltonian for the 2D $XY$ model is described as:

$$
\begin{equation}
    \beta H = -K\sum_{\braket{i,j}}\mathbf{S}_i\cdot\mathbf{S}_j = -K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)}
\end{equation}
$$

where $\mathbf{S}_i = (\cos{\theta_i},\sin{\theta_i})$. The partition function is given by the summation of $e^{-\beta H}$ for all possible configurations. This can be expressed as:

$$
\begin{equation}
    Z = \prod_{i=1}^{N} \int^{2\pi}_{0} \frac{d\theta_{i}}{2\pi} e^{K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)}}
\end{equation}
$$

The correlation function is given by:

$$
\begin{equation}
    \braket{\mathbf{S}_\mathbf{0}\cdot\mathbf{S}_\mathbf{r}} = \braket{\cos{(\theta_\mathbf{0}-\theta_\mathbf{r})}} = \frac{1}{Z}\prod_{i=1}^{N} \left[\int^{2\pi}_{0} \frac{d\theta_i}{2\pi}\right] \cos{(\theta_\mathbf{0}-\theta_\mathbf{r})} e^{K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j})}
\end{equation}
$$

By calculating the correlation function with high-$T$ expansion ($K \ll 1$), we can guess the point where the phase transition occurs. The correlation function is then approximated by:

$$
\begin{equation}
    \braket{\mathbf{S}_\mathbf{0}\cdot\mathbf{S}_\mathbf{r}} \sim \frac{1}{Z}\prod_{i=1}^{N} \left[\int^{2\pi}_{0} \frac{d\theta_i}{2\pi} \right] \cos{(\theta_\mathbf{0}-\theta_\mathbf{r})} \prod_{\braket{i,j}} (1 + K\cos{(\theta_i-\theta_j)})
\end{equation}
$$

where the summation is transformed into the product from the exponential. Because the integration of $\cos{(\theta_i-\theta_j)}$ over $\theta_i$ is zero;

$$
\begin{equation}
\int^{2\pi}_{0} \frac{d\theta_{1}}{2\pi} \cos(\theta_{1}-\theta_{2}) = 0
\end{equation}
$$

the $O(1)$ term in the product does not contribute to the sum at all. This goes the same for the $O(K^1)$ term. The leading term must include the multiplication of cosine functions with a connected chain of bonds linking sites $\mathbf{0}$ and $\mathbf{r}$, so that the integration can be non-zero:

$$
\begin{equation}
\int^{2\pi}_{0} \frac{d\theta_{2}}{2\pi}\cos(\theta_{1}-\theta_{2})\cos(\theta_{2}-\theta_{3}) = \frac{1}{2}\cos(\theta_{1}-\theta_{3})
\end{equation}
$$

Then, the correlation function is expressed as the exponential decay:

$$
\begin{equation}
    \braket{\mathbf{S}_\mathbf{0}\cdot\mathbf{S}_\mathbf{r}} \simeq \frac{K^r}{2^r} = e^{-r/\xi}
\end{equation}
$$

with $\xi \simeq 1/\ln(2/K)$.

### Review

The vortex is topologically equivalent (homotopic) to the diverging spin configuration since these are the same when one rotates the whole configuration. The anti-vortex is, however, not topologically equivalent. The quantity to distinguish between them is the vorticity or the winding number which is defined as:

$$
\begin{equation}
    W = \frac{1}{2\pi}\oint_C d\mathbf{l}\cdot\nabla\theta = \text{integers}
\end{equation}
$$

where the integral counts how many times the $2\pi$ angle is rotated around the contour. (It is sometimes called skyrmion number for $S^2$.) If one traces the direction of a spin on the lattice along a circular loop, one should count the number of spins in the same direction.

A high winding number $W > 1$ is not usually observed. This can be experimentally observed in a superconductor; \textit{giant vortex}. The homotopic vortices can be distinguished by using XMCD (X-ray Magnetic Circular Dichroism), Lorentz TEM, and NV (Nitrogen vacancy; Nitrogen defect in a diamond) center magnetometry that images the local spin at a nanometer scale.

Let us there is a continuous function $f$ such that $f(0) = f(2\pi)$ that maps between $S^{1}\_{a}$ and $S^{1}\_{b}$ with the parameter; $\theta$. Note that one needs the closed space to define the winding number. Here the winding number classifies the topology and a set of functions can form a group which is called the first homotopy group $\pi_1(S^1)$ (There can be various homotopy groups). N. D. Mermin wrote a review paper on the topological theory of defects in ordered media [7].

## Low-temperature limit of correlation function

In the low-temperature limit, the neighboring spins will be similar to each other ($\theta_i \sim \theta_j$). The Hamiltonian can be expanded as:

$$
\begin{equation}
    \beta H = -K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)} \sim -K\sum_{\braket{i,j}}\left[1-\frac{1}{2}(\theta_i-\theta_j)^2\right] = \frac{K}{2}\sum_{\braket{i,j}}(\theta_i-\theta_j)^2 + const.
\end{equation}
$$

Taking the continuum limit $\theta_i\rightarrow \theta(r_i)$, the $\beta H$ can be written as:

$$
\begin{equation}
    \beta H = \frac{K}{2} \int d^{2}r~(\nabla\theta)^2 + const.
\end{equation}
$$

The spin correlation function can be evaluated as $\braket{\Re e^{i(\theta_i-\theta_j)}} = \Re\braket{e^{i(\theta_i-\theta_j)}}$. If a random variable $\alpha$ follows the Gaussian distribution then the identity holds: $\braket{e^{i\alpha}} \sim e^{-\frac{1}{2}\braket{\alpha^2}}$. Then the correlation function can be expressed as:

$$
\begin{equation}
    \braket{\mathbf{S}_\mathbf{0}\cdot\mathbf{S}_\mathbf{r}} = \Re e^{-\frac{1}{2}\braket{(\theta_\mathbf{0}-\theta_\mathbf{r})^2}}
\end{equation}
$$

The expectation value is (look up the old lecture notes):

$$
\begin{equation}
	\braket{(\theta_\mathbf{0}-\theta_\mathbf{r})^2} = \frac{1}{\pi K}\ln \left(\frac{r}{a}\right)
\end{equation}
$$

Then the correlation function is finally given by:

$$
\begin{equation}
    \braket{\mathbf{S}_\mathbf{0}\cdot\mathbf{S}_\mathbf{r}}= \left(\frac{r}{a}\right)^{-\frac{1}{2\pi K}}
\end{equation}
$$

The behaviors of the correlation length in the two limits (low-$T$ and high-$T$) are different. There must be something happening between two different limits!


{: .prompt-info}
> **Q. Why is the vortex called a defect?**
>
Imagine a simple diverging spin configuration. For $\theta:\mathrm{R}^2\rightarrow\mathrm{S}^1$, it is well-defined around a loop. However, there must be a singular point inside the loop. When shrinking this loop, this loop can be arbitrarily small so that it converges to a single point. Since $\theta$ is gone (or ill-defined), we call it a defect. This is not the case for skyrmions or solitons.

## Free energy of a vortex

To obtain the free energy of a vortex, one needs to know the energy of the vortex in order to evaluate the partition function. For the case of $|a\theta \ll 1|$, the continuum form of the Hamiltonian is given by the integration of $(\nabla\theta)^2$, where $a$ is the lattice constant. In addition, the vortex is characterized by the winding number with:

$$
\begin{equation}
    \theta = n\chi + \theta_0
\end{equation}
$$

where $\chi$ is the azimuthal angle of the configuration, $n$ is the winding number, and $\theta_0$ is a constant. This is the stable vortex configuration. Consider the calculating the partition function. The gradient of $\chi$ is pointing to the $\hat{e}_{\phi}$ direction. Thus, the gradient of $\theta$ is expressed as:

$$
\begin{equation}
    \nabla\theta = \frac{n}{r} \hat{e}_{\phi}
\end{equation}
$$

Therefore, the integration of $(\nabla\theta)^2$ is expressed as:

$$
\begin{equation}
    \int d^{2}r~(\nabla\theta)^2 = \int d^{2}r~\frac{n^2}{r^2} = 2\pi n^2 \int^{L}_{0} dr \frac{1}{r}
\end{equation}
$$

The final form of this integration tells us that it diverges. This divergence (essential singularity) comes from the singularity of the vortex that is present at its center. One must exclude this region while doing the integration. (Note that the continuum model fails to capture the free energy of the vortex.) However, there must be some contribution from the center of the vortex. One will compensate for this energy by $\varepsilon^{0}_{n}(a)$ that depends on the winding number $n$. Thus, the integration is given by:

$$
\begin{equation}
    \int d^2 r~(\nabla\theta)^2 = 2\pi n^2\ln{\frac{L}{a}} + \varepsilon^{0}_{n}(a)
\end{equation}
$$

where $L$ is the system size and $a$ is a short distance cutoff or a size of a vortex core. The energy of the vortex is then written by:

$$
\begin{equation}
    \beta\varepsilon_n = \pi K n^2 \ln{\frac{L}{a}} + \beta\varepsilon^{0}_{n}(a)
\end{equation}
$$

The partition function is then the summation of the Boltzmann factor over all possible configurations for a vortex with the winding number. Since the summation does not run over the Boltzmann factor, the partition function reads:

$$
\begin{equation}
    Z_n \sim 2\pi\left(\frac{L}{a}\right)^2 e^{-\pi K n^2 \ln{\frac{L}{a}} - \beta\varepsilon^{0}_{n}(a)}
\end{equation}
$$

where $2\pi$ prefactor comes from the constant $\theta_0$. In the thermodynamic limit ($L\rightarrow\infty$), the free energy is then given by:

$$
\begin{align}
    F_n &= -k_BT\left[\ln{2\pi} + 2\ln{\left(\frac{L}{a}\right)} - \pi K n^2 \ln{\left(\frac{L}{a}\right)} - \beta\varepsilon^{0}_{n}(a)\right] \nonumber \\
    &= \varepsilon^{0}_{n}(a) -k_BT\ln{2\pi} - (2 - \pi K n^2)k_BT\ln{\left(\frac{L}{a}\right)} \nonumber \\
    &\simeq \left[\varepsilon^{0}_{n}(a) + \pi K n^2 k_BT\ln{\left(\frac{L}{a}\right)}\right] - 2k_BT \ln{\left(\frac{L}{a}\right)}
\end{align}
$$

Recall that free energy is defined as $U - TS$ in thermodynamics. Here one can correspond the first term to the internal energy and the second term to the entropy ($S = k_B\ln{\Omega}$). The internal energy in this case is independent of the temperature. At low temperatures ($F\sim U$), the number of vortices is small with the probability $e^{-\beta H}$. On the other hand, it is big enough at high temperatures ($F \sim -TS$) making the lowest energy with more vortices. Since the core energy $\varepsilon^{0}_{n}(a)$ is a constant with respect to the temperature and it is smaller than other terms, the free energy can be approximated as:

$$
\begin{equation}
    F_n \simeq (\pi K n^2 - 2) k_BT\ln{\left(\frac{L}{a}\right)}
\end{equation}
$$

Neglecting all the interactions between the vortices, one can define the critical $K_c = 2/n^2\pi$. The critical temperature can be evaluated from $J/k_B T_c = 2/n^2\pi$. If $T < T_c$, there are a finite number of vortices. However, if $T > T_c$, the free energy is always smaller than zero, and there are infinite numbers of vortices. Note that adding some constant energies does not dramatically change this relation. For $n = 1$, $K_c$ is given by:

$$
\begin{equation}
    k_BT = \frac{\pi}{2}J,~K_c = \frac{2}{\pi}
\end{equation}
$$

At low temperatures, the Boltzmann factor is small and the probability to make a vortex is small. Although there is finite energy if the temperature is high, the system wants to make many vortices. Across the critical temperature, the system exhibits the proliferation of vortices. This is why the behaviors of the correlation length decay were different. In order to obtain the critical temperature accurately, the interaction between the vortices must be included. We have discussed only the single vortex (only vortices or anti-vortices). We will talk about the partition function when there are vortex and anti-vortex pairs.

## Partition function of vortices

In the last section, one started with the following Hamiltonian in the continuum limit:

$$
\begin{equation}
    \beta H = \frac{K}{2} \int d^{2}r~(\nabla\theta)^2 = \frac{K}{2} \int d^{2}r~u^2
\end{equation}
$$

where the gradient of $\theta$ is written as $u = \nabla\theta$, which is also called a distortion field. The line integral of this field gives $2\pi$:

$$
\begin{equation}
    \oint_C d\mathbf{l}\cdot(\nabla \theta) = 2\pi
\end{equation}
$$

If one uses the Stokes' theorem, however, one obtains the conclusion below:

$$
\begin{equation}
    \int d^{2}r~\hat{\mathbf{z}}\cdot(\nabla \times u) = 0?
\end{equation}
$$

where the curl of this field is zero. The contradiction comes from the fact that the curl of a field is zero if and only if the field is well-defined everywhere. If there is a vortex (or a singularity), $\nabla \times u \neq 0$. One can decompose $u = u_0 + u_1$ by the continuous excitations captured by $u_0$ ($\nabla \times u_0 = 0$) and the vortices captured by $u_1$ ($\nabla \times u_1 \neq 0$). In addition, the surface integral will not change if the contour encloses the core of the vortex. If one shrinks the region of the integration, the value will not change. For a single vortex, $\hat{\mathbf{z}}\cdot (\nabla \times u)$ can be represented as a delta function $2\pi\delta(r)$. This goes the same for the vortices with winding number $n$ at position $r$. Then, one can generalize it as:

$$
\begin{equation}
    \nabla \times u = 2\pi\hat{\mathbf{z}}\sum^{N}_{i=1} n_i\delta(r-r_i)
\end{equation}
$$

This is the partial differential equation ($\nabla \times u = f(\mathbf{r})$). There is a trick if we encounter this kind of problem; substituting $u \rightarrow - \nabla \times (\hat{\mathbf{z}} \psi)$ as one did in the electrodynamics. Then, the equation is given by:

$$
\begin{equation}
    \nabla^2\psi = 2\pi\sum^{N}_{i=1} n_i\delta(r-r_i)
\end{equation}
$$

This equation (Poisson's equation) is famous in the electrodynamics course. In two-dimensional space, the solution of the equation:

$$
\begin{equation}
	\nabla^2 V = \frac{q}{4\pi\varepsilon_{0}}\delta(r-r_i)
\end{equation}
$$

was expressed as:

$$
\begin{equation}
    V(r) = \frac{q}{4\pi\varepsilon_{0}}\frac{1}{2\pi}\ln{|\mathbf{r}-\mathbf{r}_i|}
\end{equation}
$$

Similarly, the solution of $\psi$ is given by:

$$
\begin{equation}
    \psi(r) = \sum_{i=1}n_i\ln{|\mathbf{r}-\mathbf{r}_i|}
\end{equation}
$$

Additionally, the non-singular $u_0$ can be expressed as the non-singular $-\nabla \phi$. Then, the free energy can be rewritten as:

$$
\begin{align}
    \beta H &= \frac{K}{2} \int d^{2}r~[\nabla\phi - \nabla \times (\hat{\mathbf{z}} \psi)]^2 \nonumber\\
    &= \frac{K}{2} \int d^{2}r~[(\nabla\phi)^2 -2\nabla\phi\cdot\{\nabla \times (\hat{\mathbf{z}} \psi)\} + \{\nabla \times (\hat{\mathbf{z}} \psi)\}^2] \nonumber\\
    &= \frac{K}{2} \int d^{2}r~[(\nabla\phi)^2 + (\nabla \times \{\hat{\mathbf{z}} \psi)\}^2] \nonumber\\
    &= \frac{K}{2} \int d^{2}r~[(\nabla\phi)^2 + (\nabla\psi)^2]
\end{align}
$$

The integration for $-2\nabla\phi\cdot\{\nabla \times (\hat{\mathbf{z}} \psi)\}$ turns out to be zero if one assumes the periodic boundary condition. (The boundary terms are relevant to the calculation of transport properties. For the discussion of the phase transition, the boundary condition does not affect the results.)

$$
\begin{equation}
    \int d^{2}r~[-2\nabla\phi\cdot\{\nabla \times (\hat{\mathbf{z}} \psi)\}] = \int d^{2}r~[-2\nabla\times(\nabla\phi)\cdot\hat{\mathbf{z}}\psi] = 0
\end{equation}
$$

Instead, the second term $(\nabla\psi)^{2}$ can be expressed by:

$$
\begin{align}
    \int d^{2}r~(\nabla\psi)(\nabla\psi) &= -\int d^{2}r~ \psi\nabla^2\psi \nonumber\\
    &= -\int d^{2}r~\left[\sum_{i=1}n_i\ln{|\mathbf{r}-\mathbf{r}_i|}\times2\pi\sum_{j=1} n_j\delta(r-r_j)\right] \nonumber\\
    &= -2\pi\sum_{i,j} n_in_j\ln{|\mathbf{r}_i-\mathbf{r}_j|}
\end{align}
$$

Then the Hamiltonian is rewritten as:

$$
\begin{equation}
    \beta H = \frac{K}{2} \int d^{2}r~(\nabla\phi)^2 -\pi K \sum_{i,j} n_in_j\ln{|\mathbf{r}_i-\mathbf{r}_j|}
\end{equation}
$$

The second term describes the interaction of two vortices. If the vortices have different signs, then the sign of the potential becomes positive so that the distance between the two vortices tends to be small. If $i = j$, it contributes to the self-energy of the vortex. This is related to the core of the vortex. This is analogous to the electrostatics in the two-dimensional space. It is conventional to denote this equation by:

$$
\begin{equation}
    \beta H = \frac{K}{2} \int d^{2}r~(\nabla\phi)^2 - 4 \pi^2 K \sum_{i<j} n_in_j C(\mathbf{r}_i-\mathbf{r}_j) + \beta\sum_i\varepsilon^{0}_{n_i}
\end{equation}
$$

where the second term is the 2D Coulomb potential:

$$
\begin{equation}
C(\mathbf{r}_i-\mathbf{r}_j) = \frac{1}{2\pi}\ln{|\mathbf{r}_i-\mathbf{r}_j|}
\end{equation}
$$ 

and the third term is the self-energy of the vortex. For the winding number $n_i$ and the positions of vortices $\mathbf{r}_i$, the partition function is then given by:

$$
\begin{equation}
    Z = \sum_{\substack{\text{all possible} \\ \text{configurations}}} \exp\left[-\frac{K}{2} \int d^{2}r~ (\nabla\phi)^2\right] \exp\left[4 \pi^2 K \sum_{i<j} n_in_j C(\mathbf{r}_i-\mathbf{r}_j)\right]
\end{equation}
$$

The two exponential terms are independent of each other. The first term comes from the excitation, and the second comes from the vortices. The final form of the partition function is written as:

$$
\begin{equation}
    Z = \int D[\phi(\mathbf{r})]~\exp\left[-\frac{K}{2}\int d^{2}r~ (\nabla\phi)^2\right] \times \sum_{N}\sum_{n_i}\prod^{N}_{i=1} e^{-\beta\varepsilon^{0}_{n_i}}\int dr_i~\exp\left[4 \pi^2 K \sum_{i<j} n_in_j C(\mathbf{r}_i-\mathbf{r}_j)\right]
\end{equation}
$$

where $N$ is the number of vortex, $n_i$ is the winding number of a vortex. One can get the critical value using the renormalization group.

---

## References

1. V. L. Berezinskii, "Destruction of long-range order in one-dimensional and two-dimensional systems having a continuous symmetry group. I. Classical systems," _Sov. Phys. JETP_ **32**, 493–500 (1971).
2. J. M. Kosterlitz and D. J. Thouless, "Ordering, metastability and phase transitions in two-dimensional systems," _J. Phys. C: Solid State Phys._ **6**, 1181–1203 (1973).
3. D. J. Resnick, J. C. Garland, J. T. Boyd, S. Shoemaker, and R. S. Newrock, "Kosterlitz–Thouless transition in proximity-coupled superconducting arrays," _Phys. Rev. Lett._ **47**, 1542–1545 (1981).
4. B. I. Halperin and D. R. Nelson, "Resistive transition in superconducting films," _J. Low Temp. Phys._ **36**, 599–616 (1979).
5. V. Ambegaokar, B. I. Halperin, D. R. Nelson, and E. D. Siggia, "Dynamics of superfluid films," _Phys. Rev. B_ **21**, 1806–1826 (1980).
6. D. R. Nelson and J. M. Kosterlitz, "Universal jump in the superfluid density of two-dimensional superfluids," _Phys. Rev. Lett._ **39**, 1201–1205 (1977).
7. N. D. Mermin, "The topological theory of defects in ordered media," _Rev. Mod. Phys._ **51**, 591–648 (1979).
8. M. Kardar, _Statistical Physics of Fields_ (Cambridge University Press, Cambridge, 2007), Ch. 8. — general reference; the derivation in this post follows this text.