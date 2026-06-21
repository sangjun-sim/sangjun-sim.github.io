---
title: Magnetoresistance
date: 2026-05-28 21:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - cond-matter
  - topology
  - transport
math: true
toc: true
published: false
---

## Magnetoresistance

The magnetic field affects the motion of an electron due to the Lorentz force. In solids, the direct consequence of the presence of a magnetic field is the change in electric conduction. Here, the magnetoresistance is a quantity defined as the change in resistance due to the magnetic field. In order to describe the conduction in solids, one can first write the equation of motion of a carrier:

$$
\begin{equation}
m^{*}\frac{d\mathbf{v}}{dt} = q\mathbf{E}-\frac{m^{*}}{\tau}\mathbf{v}+\frac{q}{c}\mathbf{v}\times\mathbf{B}
\end{equation}
$$

where the $m^{*}$ is the effective mass, $\mathbf{v}$ is the velocity, $q$ is the charge of the carrier, $\mathbf{E}$ is the electric field, $\tau$ is the constant relaxation time, and $\mathbf{B}$ is the magnetic field.

For a two-carrier model, the equation of motion is given by two simultaneous equations. The velocity of each carrier in a steady state ($d\mathbf{v}/dt = 0$) is given by:

$$
\begin{equation}
\mathbf{v}_{i} = \frac{q_{i}\tau_{i}}{m^{*}_{i}}\left[\mathbf{E} + \frac{1}{c}\mathbf{v}_{i}\times\mathbf{B}\right]
\end{equation}
$$

where $i$ is either $1$ or $2$, corresponding for each carrier. If the magnetic field $\mathbf{B}$ is aligned along the $z$-direction, the velocity of each carrier is given by:

$$
\begin{align}
v_{i,x} &= \frac{q_{i}\tau_{i}}{m^{*}_{i}}\left[E_{x} + \frac{1}{c}v_{i,y}B_{z}\right], \nonumber \\
v_{i,y} &= \frac{q_{i}\tau_{i}}{m^{*}_{i}}\left[E_{y} - \frac{1}{c}v_{i,x}B_{z}\right], \nonumber \\
v_{i,z} &= \frac{q_{i}\tau_{i}}{m^{*}_{i}}E_{z}
\end{align}
$$

Defining $\mu\_{i} = q\_{i} \tau\_{i} / m^{\*}\_{i}$ and $\zeta\_{i} = q\_{i}\tau\_{i}B\_{z}/m^{\*}\_{i}c$, one can rewrite them as:

$$
\begin{align}
v_{i,x} &= \frac{\mu_{i}}{1+\zeta^{2}_{i}}(E_{x} + \zeta_{i}E_{y}), \nonumber \\
v_{i,y} &= \frac{\mu_{i}}{1+\zeta^{2}_{i}}(E_{y} - \zeta_{i}E_{x}), \nonumber \\
v_{i,z} &= \mu_{i}E_{z}
\end{align}
$$

Since the current density $\mathbf{j}$ is given by the sum of $n\_{i}q\_{i}\mathbf{v}\_{i}$ or the sum of $\mathbf{\sigma}\cdot\mathbf{E}$, one can write the conductivity $\mathbf{\sigma}$ with respect to $n\_{i}q\_{i}\mathbf{v}\_{i}$:

$$
\begin{equation}
\mathbf{j} = n_{1}q_{1}\mathbf{v}_{1} + n_{2}q_{2}\mathbf{v}_{2} = (\boldsymbol{\sigma}^{1} + \boldsymbol{\sigma}^{2})\cdot\mathbf{E}
\end{equation}
$$

The total conductivity tensor $\boldsymbol{\sigma} = \boldsymbol{\sigma}^{2} + \boldsymbol{\sigma}^{2}$ is given by:

$$
\begin{equation}
\mathbf{\sigma} = \begin{bmatrix} \sigma_{xx} & \sigma_{xy} \\ -\sigma_{xy} & \sigma_{yy} \end{bmatrix} = \sum_{i} \begin{bmatrix} \sigma^{i}_{xx} & \sigma^{i}_{xy} \\ -\sigma^{i}_{xy} & \sigma^{i}_{yy} \end{bmatrix} = \sum_{i} n_{i}q_{i}\mu_{i} \begin{bmatrix} \frac{1}{1+\zeta^{2}_{i}} & \frac{\zeta_{i}}{1+\zeta^{2}_{i}} \\ -\frac{\zeta_{i}}{1+\zeta^{2}_{i}} & \frac{1}{1+\zeta^{2}_{i}} \end{bmatrix}
\end{equation}
$$

with:

$$
\begin{equation}
\sigma^{i}_{xx} = \sigma^{i}_{yy} = n_{i}q_{i}\mu_{i}\frac{1}{1+\zeta^{2}_{i}},~\sigma^{i}_{xy} = n_{i}q_{i}\mu_{i}\zeta_{i}\frac{1}{1+\zeta^{2}_{i}}
\end{equation}
$$

By doing so, one can obtain the explicit form of the resistivity tensor $\rho_{\alpha\beta}$ ($\alpha$, $\beta$ = $x, y$). The inverse matrix of the total conductivity tensor directly leads to the resistivity tensor:

$$
\begin{equation}
\boldsymbol{\rho} = \frac{1}{\sigma_{xx}\sigma_{yy} + \sigma^{2}_{xy}} \begin{bmatrix} \sigma_{yy} & -\sigma_{xy} \\ \sigma_{xy} & \sigma_{xx} \end{bmatrix}
\end{equation}
$$

The magnetoresistance measures the change in resistance along the direction of the current flow. If the current applies to a sample along the $x$-direction and the magnetic field is applied along the $z$-direction, the measured resistance will depend on the $x$-direction. This is called the longitudinal magnetoresistance, in which the current and voltage have the same measurement direction (longitudinal) while the magnetic field is perpendicular to it (transverse). The change in the resistivity along the $xx$-direction is then given by:

$$
\begin{equation}
\frac{\Delta\rho_{xx}}{\rho_{xx}} = \frac{\rho_{xx}(B)-\rho_{xx}(0)}{\rho_{xx}(0)} = \frac{\sigma^{(1)}_{0}\sigma^{(2)}_{0}(\beta_{1}-\beta_{2})^{2}B_{z}^{2}}{(\sigma^{(1)}_{0}+\sigma^{(2)}_{0})^{2} + B^{2}_{z}(\beta_{2}\sigma^{(1)}_{0} + \beta_{1}\sigma^{(2)}_{0})^{2}}
\end{equation}
$$

where $\sigma^{(i)}\_{0} = n_{i}e^{2}\_{i}\tau_{i}/m^{\*}\_{i}$ and $\beta_{i} = e\tau_{i}/m^{*}_{i}c$. 

<!-- Comment: 이 결과를 도출하려면 다음 과정이 필요하다:
1) 각 carrier i = 1, 2에 대해 σ^(i)_xx와 σ^(i)_xy를 eq. (5)로 구한다.
2) Total conductivity: σ^(tot)_xx = σ^(1)_xx + σ^(2)_xx, σ^(tot)_xy = σ^(1)_xy + σ^(2)_xy.
3) ρ_xx(B) = σ^(tot)_xx / [(σ^(tot)_xx)^2 + (σ^(tot)_xy)^2]로 inversion한다.
4) ρ_xx(0)은 B=0일 때이므로 ζ_i = 0, 즉 ρ_xx(0) = 1/(σ^(1)_0 + σ^(2)_0).
5) Δρ_xx/ρ_xx(0) = [ρ_xx(B) - ρ_xx(0)]/ρ_xx(0)을 정리하면 위 식이 된다.
핵심 포인트: 단일 carrier(σ^(2)_0 = 0)이면 분자에 (β_1 - β_2)^2 항이 사라져서 
Δρ_xx = 0이 된다. 즉, 동일한 carrier만 있으면 classical MR이 없다는 중요한 결론이다. -->

This equation exhibits the experimental behavior observed in the metals. For the weak fields, the fractional change in resistance (or resistivity) is proportional to $B^{2}$.

$$
\begin{equation}
\frac{\Delta R}{R} = \frac{R(\mathbf{B})-R(0)}{R(0)} \sim B^{2}
\end{equation}
$$

It is known that the magnetoresistance for the single-carrier-type semiconductor is proportional to $(1+(\mu B)^{2})$. In this case, $\mu$ refers to the mobility of the semiconductor. 

<!-- Comment: 위의 single-carrier MR 결과와 eq. (7)의 관계를 명확히 하면 좋겠다:
- Single carrier: two-carrier formula에서 σ^(2)_0 = 0으로 놓으면 분자가 0이 되어 Δρ_xx/ρ_xx = 0.
  즉, isotropic single-carrier Drude model에서는 transverse MR이 정확히 0이다!
- "proportional to (1+(μB)^2)"라고 적혀 있는데, 이는 ρ_xx 자체가 (1+(μB)^2)에 비례한다는 뜻이 아니라,
  Drude model에서 ρ_xx(B) = (1/σ_0)이므로 B에 무관하다는 것이다. 
  실제로 ρ_xx가 B^2에 비례하는 행동을 보이려면 anisotropic effective mass, 
  multiple bands, 또는 non-parabolic dispersion 등의 보정이 필요하다.
- 이 부분의 서술을 재검토할 필요가 있다. -->

For the high fields ($B \rightarrow \infty$), it can host the saturation, no saturation, or the selected saturation directions, depending on the number of carriers and the shape of orbits near the Fermi surface. In the saturation, $R(\mathbf{B})$ goes to a **constant** as $B$ increases for all orientations of $\mathbf{B}$ with respect to the crystalline directions. This is observed for metals with a closed Fermi surface. With no saturation, $R(\mathbf{B})$ keeps increasing as $\mathbf{B}$ increases. This occurs in crystals with equal numbers of electron and hole carriers. 

<!-- Comment: 위의 high-field behavior에 대한 보충:
1) Compensated semimetal (n_e = n_h): 이 경우 eq. (7)의 분모에서 β 관련 항들이 상쇄되어 
   MR ~ B^2이 saturation 없이 계속 증가한다. 이를 "non-saturating linear or quadratic MR"이라 한다.
   예: Bi, WTe2 (Type-II Weyl semimetal).
2) Closed Fermi surface with unequal carriers: 분모의 B^2 항이 지배적이 되어 
   Δρ/ρ → constant (saturation).
3) Open orbits: Fermi surface가 특정 방향으로 열려 있으면 그 방향으로는 
   carrier가 cyclotron orbit을 완성하지 못하므로 B^2에 비례하는 unsaturated MR이 나온다.
   이것이 "selected saturation directions"의 물리적 의미이다.
   
또한 $R(\mathbf{R})$로 적힌 부분들은 $R(\mathbf{B})$의 오타로 보인다 (위에서 수정함). -->

With the selected saturation directions, $R(\mathbf{B})$ is unsaturated for $\mathbf{B}$ oriented along some crystalline directions, but not for all directions. Regardless of whether the sample being measured is metal or insulator, most materials exhibit positive magnetoresistance. However, in the case of topological semimetals, negative magnetoresistance is also present.

<!-- Comment: Negative magnetoresistance에 대한 보충이 필요하다:
Negative MR은 자기장이 증가할수록 저항이 감소하는 현상이다. Classical framework에서는 
설명이 어렵고, 주요 메커니즘은 다음과 같다:
1) Weak localization 파괴: 자기장이 time-reversal symmetry를 깨서 coherent backscattering을 
   억제하면 저항이 감소한다. 이는 disorder가 있는 2D 시스템에서 흔하다.
2) Magnetic ordering: 자기장이 spin disorder를 줄여 spin-dependent scattering을 감소시킨다 
   (예: ferromagnetic metals near Curie temperature).
3) Chiral anomaly (Weyl/Dirac semimetals): 아래 topology 섹션에서 자세히 다룸. -->

<br>

## Connection to topology

<!-- Comment: 이 섹션은 나중에 topology 노트와 연결하기 위한 bridge이다. 
"Geometry in Quantum Mechanics" 포스트의 Berry curvature, Berry phase, quantum metric과 
직접 연결된다. -->

### Berry curvature correction to transport

The semiclassical Boltzmann transport theory above treats carriers as classical particles with an effective mass. However, when the Bloch band has a nontrivial Berry curvature $\mathbf{\Omega}(\mathbf{k})$, the semiclassical equations of motion are modified:

$$
\begin{align}
\dot{\mathbf{r}} &= \frac{1}{\hbar}\nabla_{\mathbf{k}}\varepsilon(\mathbf{k}) - \dot{\mathbf{k}}\times\mathbf{\Omega}(\mathbf{k}), \nonumber \\
\hbar\dot{\mathbf{k}} &= q\mathbf{E} + \frac{q}{c}\dot{\mathbf{r}}\times\mathbf{B}
\end{align}
$$

The additional $\dot{\mathbf{k}}\times\mathbf{\Omega}$ term is the **anomalous velocity**, which gives rise to the anomalous Hall effect even in the absence of an external magnetic field when time-reversal symmetry is broken. This directly connects the Berry curvature. to the transport phenomena discussed here.

<!-- Comment: 위의 anomalous velocity는 Berry curvature가 0이 아닌 band에서 나타나며, 
conductivity tensor에 추가적인 항을 기여한다:
σ^AH_xy = -e^2/ℏ ∫ (dk/(2π)^d) f(k) Ω_xy(k)
이것이 intrinsic anomalous Hall conductivity이며, 이는 Berry curvature의 Brillouin zone 적분이다.
이 양은 Chern number와 직접 관련된다: 
filled band에 대해 σ_xy = (e^2/h) × C (quantized).
따라서 geometry note의 Chern number 정의와 자연스럽게 연결된다. -->

### Chiral anomaly and negative longitudinal magnetoresistance

In Weyl semimetals, the low-energy excitations near each Weyl node have a definite chirality (left or right). When $\mathbf{E} \parallel \mathbf{B}$, the chiral anomaly pumps charge from one Weyl node to the other, creating an imbalance in the chiral chemical potential. This leads to an additional current proportional to $\mathbf{E}\cdot\mathbf{B}$, resulting in **negative longitudinal magnetoresistance**:

$$
\begin{equation}
\Delta\sigma \propto B^{2}
\end{equation}
$$

<!-- Comment: Chiral anomaly의 핵심 물리:
1) 각 Weyl node는 Berry curvature의 monopole(source 또는 sink)이다. 
   Chern number = ±1로, 이는 geometry note의 C = (1/2π)∮ dS·Ω 와 직접 대응된다.
2) E·B ≠ 0이면 Adler-Bell-Jackiw anomaly에 의해 각 node의 particle number가 보존되지 않는다:
   ∂n_R/∂t - ∂n_L/∂t ∝ E·B
3) Inter-node scattering이 유한한 relaxation time τ_v를 가지면, 정상상태에서 
   chiral chemical potential μ_5 ∝ E·B·τ_v가 생기고, 이것이 추가 전류를 만든다.
4) 실험적 signature: B ∥ I일 때 ρ_xx가 감소. B ⊥ I일 때는 통상적인 positive MR.
   이 anisotropy가 chiral anomaly의 핵심 지표이다.

Weyl semimetal의 대표적 예: TaAs, NbAs, TaP, NbP (Type-I), WTe2, MoTe2 (Type-II). 
Type-II에서는 Weyl cone이 tilted되어 Fermi surface에서 electron과 hole pocket이 공존하며, 
이것이 위에서 논의한 compensated two-carrier non-saturating MR과도 연결된다. -->

### Quantum oscillations and topology

In the presence of a strong magnetic field, the Landau quantization gives rise to quantum oscillations in the magnetoresistance (Shubnikov–de Haas oscillations). The oscillation pattern is periodic in $1/B$ with frequency $F = (\hbar/2\pi e) A_{F}$, where $A_{F}$ is the extremal cross-sectional area of the Fermi surface. The phase of these oscillations contains topological information:

$$
\begin{equation}
\Delta\rho_{xx} \propto \cos\left[2\pi\left(\frac{F}{B} - \gamma + \delta\right)\right]
\end{equation}
$$

where $\gamma = 1/2 - \phi_B / 2\pi$ and $\phi_B$ is the Berry phase accumulated along the cyclotron orbit. For a trivial band, $\phi_B = 0$ (hence $\gamma = 1/2$), while for a Dirac or Weyl band with a linear dispersion, $\phi_B = \pi$ (hence $\gamma = 0$). This Berry phase shift is a direct experimental probe of the band topology through magnetoresistance measurements.

<!-- Comment: SdH oscillation에서 Berry phase를 추출하는 방법:
1) ρ_xx vs 1/B를 plot하여 oscillation의 maxima/minima의 index n을 정한다.
2) Landau fan diagram: n vs 1/B를 linear fit하여 y-절편에서 γ를 추출한다.
3) γ = 0이면 Berry phase π → nontrivial topology (Dirac/Weyl fermion)
   γ = 1/2이면 Berry phase 0 → trivial band.
4) δ는 Fermi surface의 dimensionality에 의존하는 보정 (2D: δ = 0, 3D: δ = ±1/8).

이는 geometry note에서 정의한 Berry phase γ = ∮ dk · A(k) 를 
실험적으로 측정하는 가장 직접적인 방법 중 하나이다.

<!-- Comment: [질문에 대한 답변] "왜 xx-direction인가?"

또한 B를 전류와 평행하게 걸면(B ∥ j, 즉 B도 x-방향) "longitudinal magnetoresistance"라 하는데, 
이 경우 classical Drude model에서는 Lorentz force가 0이 되어 MR이 사라진다. 
그러나 Weyl semimetal 등에서는 chiral anomaly로 인해 이 방향에서도 
negative longitudinal magnetoresistance가 나타나며, 이것이 topology와 직접 연결된다. -->

---

**References**

1. Ashcroft, N. W. & Mermin, N. D. _Solid State Physics_. (Holt, Rinehart and Winston, 1976).
2. Ziman, J. M. _Principles of the Theory of Solids_. (Cambridge University Press, 1972).
3. Xiao, D., Chang, M.-C. & Niu, Q. Berry phase effects on electronic properties. _Rev. Mod. Phys._ **82**, 1959 (2010).
4. Armitage, N. P., Mele, E. J. & Vishwanath, A. Weyl and Dirac semimetals in three-dimensional solids. _Rev. Mod. Phys._ **90**, 015001 (2018).
