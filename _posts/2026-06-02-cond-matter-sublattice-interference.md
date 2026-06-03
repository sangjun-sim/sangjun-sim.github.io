---
title: Sublattice Interference Mechanism
date: 2026-06-02 09:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
  - kagome
  - hubbard-model
math: true
toc: true
---

## Sublattice Interference Mechanism

<br> 

### Introduction

van Hove singularity에서는 density of states가 divergent하고 Fermi surface nesting이 발생할 수 있기 때문에 SDW나 $d$-wave 초전도와 같은 Fermi surface instabilities를 trigger할 수 있다. 따라서 Van Hove filling 근처의 Fermi surface topology와 density of states만 보면, 서로 비슷한 band structure를 갖는 lattice들은 비슷한 instability scale을 가질 것처럼 보인다. 하지만 실제로 weak-coupling limit에서의 vertex analysis와 perturbative RG 계산에 의하면 Kagome Hubbard model과 Honeycomb Hubbard model은 van Hove filling에서 서로 다른 instability scale을 보인다는 것이 밝혀졌다([Kiesel 2012](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.86.121105)). 

{% include pdf-viewer.html
  src="/pdfs/2012-kiesel-sublattice-interference-kagome-hubbard.pdf"
  title="Kiesel 2012, Sublattice interference in the kagome Hubbard model"
%}

카고메 격자에서 "왜 Fermi surface만으로 예상되는 instability가 실제로는 약하게 보이는지"에 대한 이유를 sublattice interference로 설명하였다. Metallic한 시스템에서 instability는 Fermi level 근처의 state들이 얼마나 산란을 일으키는지에 따라 결정된다. Kagome 격자 시스템과 같은 경우에는 Fermi level 근처의 Bloch state가 sublattice 분포에 대한 정보를 가지고 있다. 이는 interaction vertex를 계산할 때 포함되는데, nesting이 완벽하더라도 propagator의 sublattice character가 다르면 scattering matrix element가 작아져 local Coulomb interaction이 작아지게 된다. 이것이 바로 sublattice interference mechanism이다.

<br>

### States in Kagome lattice

앞으로의 자세한 논의를 위해 논문에서 사용한 용어와 state를 정리할 필요가 있다. 카고메 격자는 $A$, $B$, and $C$ 세 개의 sublattice를 가지고 있다. 이때 real space에서 sublattice에 대한 정보가 담긴 sublattice creation operator를 $c^{\dagger}\_{j\alpha\sigma}$와 같이 쓸 수 있다. 여기서 $j$는 Bravais lattice index이고 원점 셀을 포함한 다른 셀들을 나타낸다. $\alpha$는 sublattice index로 하나의 셀 안에서 세 개의 sublattice를 나타낸다($\alpha\in\{A,B,C\})$. 그리고 $\sigma$는 spin index이다($\sigma\in\{\uparrow,\downarrow\}$). Kagome Hubbard model에서는 이 operator가 canonical fermion operator로써 아래 commutation relation을 만족한다:

$$
\begin{equation}
\{c_{j\alpha\sigma}, c^{\dagger}_{j'\alpha'\sigma'}\} = \delta_{jj'}\delta_{\alpha\alpha'}\delta_{\sigma\sigma'}
\end{equation}
$$

이 관계식에 의해 Fock vacuum $\ket{0}$에 대해 $\ket{j\alpha\sigma} = c^{\dagger}_{j\alpha\sigma}\ket{0}$는 orthonormal basis를 이룬다. 이는 카고메 격자 위 localized orbital에 대한 basis를 의미한다. 이를 Fourier transformation을 통해 momentum space에서 나타내면 아래와 같다:

$$
\begin{equation}
\ket{\mathbf{k}\alpha\sigma} \equiv c^{\dagger}_{\mathbf{k}\alpha\sigma}\ket{0} = \frac{1}{\sqrt{N}}\sum_{j} e^{i\mathbf{k}\cdot(\mathbf{R}_{j}+\mathbf{r}_{\alpha})} c^{\dagger}_{j\alpha\sigma}\ket{0}
\end{equation}
$$

여기서 주의할 점은 $\ket{\mathbf{k}\alpha\sigma}$는 Bloch state가 아니라 specific sublattice $\alpha$에 있는 localized orbital의 Fourier transformation이라는 것이다. 이는 Bloch Hamiltonian을 표현하기 위한 basis에 불과하다. 이는 다른 말로 표현하면, 전자가 서로 다른 sublattice 사이를 hopping하기 때문에, 해당 basis로 나타낸 nearest-neighbor hamiltonian가 일반적으로 diagonal하지 않다는 것을 의미한다:

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

$h_{\alpha\beta}(\mathbf{k})$를 대각화하는 Bloch state를 구하기 위해서는 세 $\ket{\mathbf{k}\alpha\sigma}$ ($\alpha = \{A, B, C\}$)의 선형 결합에 대한 정보가 필요하다. Bloch state는 아래와 같이 쓸 수 있다:

$$
\begin{equation}
\ket{\psi_{n\mathbf{k}\sigma}} = c^{\dagger}_{\mathbf{k}n\sigma}\ket{0} = \sum_{\alpha\in\{A,B,C\}}u_{\alpha n}(\mathbf{k})c^{\dagger}_{\mathbf{k}\alpha\sigma}\ket{0}
\end{equation}
$$

이때 $u_{\alpha n}(\mathbf{k})$는 어떤 선형결합이 $h(\mathbf{k})$를 대각화하는지 알려준다. 이는 추후 논의에 여러 중요한 의미를 가지고 있다. 첫번째로, $u_{\alpha n}(\mathbf{k})$는 $\braket{\mathbf{k}\alpha\sigma\vert\mathbf{k}n\sigma}$로 표현할 수 있고, 이는 물리적으로 sublattice에 대한 basis $\ket{\mathbf{k}\alpha\sigma}$를 band에 대한 basis $\ket{\mathbf{k}n\sigma}$에 projection한 결과라는 것을 알 수 있다. 따라서, 이는 sublattice basis와 Bloch state를 연결하는 **transformation coefficient**라고 하기도 한다. 두번째로, 선형대수의 표현에 의하면 $u_{\alpha n}(\mathbf{k})$는 아래 eigenvalue problem를 풀면 나오는 eigenstate의 component이다:

$$
\begin{equation}
\sum_{\alpha,\beta}h_{\alpha\beta}(\mathbf{k})u_{\beta n}(\mathbf{k}) = \sum_{\alpha,\beta} \varepsilon_{n}(\mathbf{k})u_{\alpha n}(\mathbf{k})
\end{equation}
$$

$\lvert u_{\alpha n}(\mathbf{k})\rvert^{2}$는 the sublattice weight of the Bloch state at momentum $\mathbf{k}$를 의미한다. 추가적으로 $\lvert u_{\alpha n}(\mathbf{k})\rvert^{2}$가 Bloch state와 $\ket{j\alpha\sigma}$의(만약 $\ket{j\alpha\sigma}$가 non-orthogonal atomic orbital basis였다면 overlap matrix $S_{\alpha\beta}(\mathbf{k})$가 등장했을 것이다.) orthonormality 성질을 통해 아래 sum rule을 만족함을 보일 수 있다:

$$
\begin{align}
\braket{\psi_{n\mathbf{k}\sigma}|\psi_{n\mathbf{k}\sigma}} &= \sum_{\alpha,\alpha'} u^{*}_{\alpha' n}(\mathbf{k})u_{\alpha n}(\mathbf{k})\braket{\mathbf{k}\alpha'\sigma|\mathbf{k}\alpha\sigma} \nonumber \\
&= \sum_{\alpha,\alpha'} u^{*}_{\alpha' n}(\mathbf{k})u_{\alpha n}(\mathbf{k}) \delta_{\alpha,\alpha'} \nonumber \\
&= \sum_{\alpha} |u_{\alpha n}(\mathbf{k})|^{2} = 1, \nonumber \\

\therefore ~~&~~ \sum_{\alpha} |u_{\alpha n}(\mathbf{k})|^{2} = 1

\end{align}
$$

Depending on the distribution of Bloch states in each sublattice, the van Hove singularity (vHs) at each $M$ point can be classified into $p$-type ("pure"-type) and $m$-type ("mixed"-type) vHs. The $p$-type vHs is a point where sublattice occupation is accumulated in one specific sublattice. On the other hand, the $m$-type vHs has uniformly distributed sublattice occupation. 현재까지 정리된 Bloch state와 sublattice basis에 대한 notation 정리는 아래 표에 정리해놓았다.

| Symbol                               | Type               | Meaning                                                            |
| ------------------------------------ | ------------------ | ------------------------------------------------------------------ |
| $j$                                  | index              | Bravais lattice index                                              |
| $\alpha$                             | index              | Sublattice index                                                   |
| $\sigma$                             | index              | Spin index, $\uparrow$ 또는 $\downarrow$                             |
| $n$                                  | index              | Band index                                                         |
| $\mathbf{R}_j$                       | vector             | $j$th unit cell                                                    |
| $\mathbf{r}_\alpha$                  | vector             | Position of sublattice $\alpha$                                    |
| $c^\dagger_{j\alpha\sigma}$          | operator           | real-space site/sublattice orbital에 electron을 생성                   |
| $c^\dagger_{\mathbf{k}\alpha\sigma}$ | operator           | sublattice $\alpha$ orbital의 Bloch-summed mode를 생성                 |
| $c^\dagger_{\mathbf{k}n\sigma}$      | operator           | band $n$의 Bloch eigenmode를 생성                                      |
| $\ket{\mathbf{k},\alpha,\sigma}$     | basis state        | sublattice-resolved Bloch basis state                              |
| $\ket{\mathbf{k},n,\sigma}$          | one-particle state | band eigenmode state                                               |
| $u_{\alpha n}(\mathbf{k})$           | coefficient        | band $n$ eigenvector의 sublattice $\alpha$ component                |
| $\|u_{\alpha n}(\mathbf{k})\|^{2}$   | weight             | momentum $\mathbf{k}$에서 band $n$ state의 sublattice $\alpha$ weight |

<br>

### On-site Hubbard interaction

On-site Hubbard interaction은 정의상 $n_{j\alpha\uparrow}n_{j\alpha\downarrow}$이므로 Bloch state가 같은 real-space site와 같은 sublattice 성분을 가져야한다. 즉, Hubbard interaction이 real space에서 local하게 정의되므로, creation/annihilation operator 또한 real space에서 기술해야 한다. 먼저, sublattice basis에 대한 creation/annihilation operator은 아래와 같이 표현된다:

$$
\begin{equation}
c^{\dagger}_{j\alpha\sigma} = \frac{1}{\sqrt{N}}\sum_{\mathbf{k}} c^\dagger_{\mathbf{k}\alpha\sigma}   
e^{-i\mathbf{k}\cdot(\mathbf{R}_{j} + \mathbf{r}_{\alpha})}
\end{equation}
$$

여기서 문제는 $c^{\dagger}\_{\mathbf{k}\alpha\sigma}$를 어떻게 $c^{\dagger}\_{\mathbf{k}n\sigma}$로 나타내는가이다. 먼저 Bloch state를 정의할 때 아래 관계식이 성립함을 알 수 있었다:

$$
\begin{equation}
\ket{\mathbf{k}n\sigma} = \sum_{\alpha\in\{A,B,C\}}u_{\alpha n}(\mathbf{k}) \ket{\mathbf{k}\alpha\sigma}
\end{equation}
$$

$\ket{\mathbf{k}n\sigma}$와 $\ket{\mathbf{k}\alpha\sigma}$는 각각 $c^{\dagger}\_{\mathbf{k}n\sigma}\ket{0}$와 $c^{\dagger}\_{\mathbf{k}\alpha\sigma}\ket{0}$에 대한 표현이다. 여기서 반대로 $\ket{\mathbf{k}n\sigma}$의 completeness 성질을 사용하여 $\ket{\mathbf{k}\alpha\sigma}$를 $\ket{\mathbf{k}n\sigma}$에 대해서 표현하고자 하면 $u_{\alpha n}(\mathbf{k})$의 complex conjugate의 곱이 나타난다.

$$
\begin{equation}
\ket{\mathbf{k}\alpha\sigma} = \sum_{n} \ket{\mathbf{k}n\sigma} \underbrace{(\braket{\mathbf{k}n\sigma|\mathbf{k}\alpha\sigma})}_{u^{*}_{\alpha n}(\mathbf{k})}
\end{equation}
$$

따라서, $c^{\dagger}\_{j\alpha\sigma}$는 $c^{\dagger}\_{\mathbf{k}n\sigma}$에 대해서 아래와 같이 표현된다:

$$
\begin{equation}
c^{\dagger}_{j\alpha\sigma} = \frac{1}{\sqrt{N}}\sum_{\mathbf{k},n} u^{*}_{\alpha n}(\mathbf{k}) c^\dagger_{\mathbf{k}n\sigma}   
e^{-i\mathbf{k}\cdot(\mathbf{R}_{j} + \mathbf{r}_{\alpha})}
\end{equation}
$$

이 식으로부터 Bloch state로 투영된 Hubbard interaction은 단순한 상수가 아니라, transformation coefficient $u_{\alpha n}(\mathbf{k})$들의 곱을 포함하게 된다는 것을 유추할 수 있다. 실제로 보이자면 먼저 Hubbard interaction부터 시작한다:

$$
\begin{equation}
H_{1} = U\sum_{j,\alpha}n_{j\alpha\uparrow}n_{j\alpha\downarrow}
\end{equation}
$$

여기서 $\sum_{j} n_{j\alpha\uparrow}n_{j\alpha\downarrow}$는 아래와 같이 표현된다:

$$
\begin{align}
\sum_{j} n_{j\alpha\uparrow}n_{j\alpha\downarrow} &= \sum_{j} c^{\dagger}_{j\alpha\uparrow}c_{j\alpha\uparrow}c^{\dagger}_{j\alpha\downarrow}c_{j\alpha\downarrow} \nonumber \\
&= \frac{1}{N^{2}}\sum_{j}\sum_{\mathbf{k}_{1},\mathbf{k}_{2}}\sum_{\mathbf{k}_{3},\mathbf{k}_{4}} e^{-i(\mathbf{k}_{1}-\mathbf{k}_{2}+\mathbf{k}_{3}-\mathbf{k}_{4})\cdot(\mathbf{R}_{j}+\mathbf{r}_{\alpha})} c^{\dagger}_{\mathbf{k}_{1}\alpha\uparrow}c_{\mathbf{k}_{2}\alpha\uparrow}c^{\dagger}_{\mathbf{k}_{3}\alpha\downarrow}c_{\mathbf{k}_{4}\alpha\downarrow}
\end{align}
$$

여기서 $\sum_{j} e^{-i(\mathbf{k}\_{1}-\mathbf{k}\_{2}+\mathbf{k}\_{3}-\mathbf{k}\_{4})\cdot\mathbf{R}\_{j}}$는 $N\delta_{\mathbf{k}\_{1}-\mathbf{k}\_{2}+\mathbf{k}\_{3}-\mathbf{k}\_{4},\mathbf{0}}$로 주어지고, 아래 momentum conservation law에 따라 $\mathbf{k}\_{i}$ 간에 관계를 만들 수 있다:

$$
\begin{equation}
\mathbf{k}_{1}-\mathbf{k}_{2} = \mathbf{q},~\text{and}~\mathbf{k}_{3}-\mathbf{k}_{4} = -\mathbf{q}
\end{equation}
$$

$\mathbf{k}\_{2} = \mathbf{k}$, $\mathbf{k}\_{4} = \mathbf{k}'$로 두면 $H\_{1}$는 아래와 같이 표현된다:

$$
\begin{equation}
H_{1} = \frac{U}{N}\sum_{\alpha}\sum_{\mathbf{k},\mathbf{k}',\mathbf{q}} c^{\dagger}_{\mathbf{k}+\mathbf{q}\alpha\uparrow}c_{\mathbf{k}\alpha\uparrow}c^{\dagger}_{\mathbf{k}'-\mathbf{q}\alpha\downarrow}c_{\mathbf{k}'\alpha\downarrow}
\end{equation}
$$

이는 momentum space에서의 on-site Hubbard interaction이다. 여기서 creation/annihilation operator를 sublattice basis가 아니라 Bloch state에 대해서 다시 표현할 수 있다. 이때 위에서 언급한 바와 같이 transformation coefficient이 등장한다:

$$
\begin{align}
H_{1} = \frac{U}{N}\sum_{\alpha}\sum_{m,m',n,n'}\sum_{\mathbf{k},\mathbf{k}',\mathbf{q}} & [u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})] \times \nonumber \\ 
 [u^{*}_{\alpha n}(\mathbf{k}'-\mathbf{q})u_{\alpha n'}(\mathbf{k}')] & \times c^{\dagger}_{\mathbf{k}+\mathbf{q}m\uparrow}c_{\mathbf{k}m'\uparrow}c^{\dagger}_{\mathbf{k}'-\mathbf{q}n\downarrow}c_{\mathbf{k}'n'\downarrow}
\end{align}
$$

<br>

### Form factor and sublattice interference mechanism

이때 $[ u^{\*}\_{\alpha m}(\mathbf{k}+\mathbf{q})u\_{\alpha m'}(\mathbf{k})]$와 $[u^{\*}\_{\alpha n}(\mathbf{k}'-\mathbf{q})u\_{\alpha n'}(\mathbf{k}')]$의 sublattice degree of freedom 대한 summation을 sublattice form factor $F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})$를 정의하여 표현할 수 있다:

$$
\begin{equation}
F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k}) \equiv \sum_{\alpha} u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})
\end{equation}
$$

Form factor라는 용어를 사용하였지만 사실은 $\mathbf{k}$에 있는 Bloch state가 sublattice $\alpha$에 있을 진폭과 $\mathbf{k}+\mathbf{q}$에 있는 Bloch state가 같은 sublattice에 있을 진폭을 곱한 것을 모든 sublattice에 대해서 더한 것이다. 이는 전자가 $\mathbf{k}$에서 $\mathbf{k}+\mathbf{q}$로 산란되는 과정을 기술한다. 그리고 Hubbard interaction이 같은 $\alpha$에 대해서만 작용하므로 $\alpha$에 대해서만 합을 취한다. 만약 두 전자가 서로 다른 sublattice에 있다면(하나는 $A$, 다른 하나는 $C$), 산란 진폭은 $0$이 된다. Hubbard interaction에서 effective two-particle scattering vertex는 공교롭게도 $F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})$와 $F_{nn'}(\mathbf{k'}-\mathbf{q},\mathbf{k'})$의 곱으로 주어진다:

$$
\begin{equation}
\Gamma^{mm',nn'}(\mathbf{k}+\mathbf{q},\mathbf{k};\mathbf{k}'-\mathbf{q},\mathbf{k}') = U\cdot F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})\cdot F_{nn'}(\mathbf{k'}-\mathbf{q},\mathbf{k'})
\end{equation}
$$

즉, Hubbard interaction에서 등장하는 transformation coefficient와 $U$의 곱은 사실 Bethe-Salpeter equation에 등장하는 irreducible kernel $\Gamma_{0}$이다. 논문에서 FRG를 사용할때 initial condition이 바로 여기서 등장한다. 또한, sublattice form factor는 다음 Cauchy-Schwarz inequality를 만족한다:

$$
\begin{equation}
|F_{mm'}(\mathbf{k}+\mathbf{q},\mathbf{k})|^{2} = \Big\lvert\sum_{\alpha}u^{*}_{\alpha m}(\mathbf{k}+\mathbf{q})u_{\alpha m'}(\mathbf{k})\Big\rvert^{2} \leq \left( \sum_{\alpha} |u_{\alpha m}(\mathbf{k}+\mathbf{q})|^{2} \right)\left( \sum_{\alpha} |u_{\alpha m'}(\mathbf{k})|^{2} \right) = 1
\end{equation}
$$

즉, sublattice form factor는 절대 $1$보다 크지 않은 값을 갖는다. 여기서 알 수 있는 사실은 bare interaction은 줄어들게 된다는 것이다. 이 문장이 sublattice interference의 핵심이다. Local Hubbard interaction은 같은 sublattice index $\alpha$에 대해서만 diagonal하게 작용한다. When a nesting vector $\mathbf{q}$ connects two VHS points with orthogonal sublattice polarizations, the vertex is strongly suppressed — the states "don't see each other" through the on-site interaction. 따라서 scattering 전후의 Bloch states가 같은 sublattice component를 충분히 공유해야 interaction이 크게 작용한다. 아래 사진은 nesting vector $\mathbf{Q}$가 서로 다른 sublattice를 연결시켜주는 것을 시각화한다.

![main-page-kagome-BZ](assets/img/image-kagome-BZ.svg)

<br> 

### Sublattice interference with concrete example

해당 조건은 예시를 통해 보일 수 있다. 카고메 격자의 tight-binding Hamiltonian은 아래와 같이 주어진다:

$$
\begin{equation}
h(\mathbf{k}) = -t \begin{bmatrix}
        0 & 1 + e^{-i\mathbf{k}\cdot\mathbf{a}_{1}} & 1 + e^{-i\mathbf{k}\cdot\mathbf{a}_{2}} \\
        1 + e^{i\mathbf{k}\cdot\mathbf{a}_{1}} & 0 & 1 + e^{-i\mathbf{k}\cdot\boldsymbol\delta} \\ 
        1 + e^{i\mathbf{k}\cdot\mathbf{a}_{2}} & 1 + e^{i\mathbf{k}\cdot\boldsymbol\delta} & 0
    \end{bmatrix}
\end{equation}
$$

여기서 lattice vectors $\mathbf{a}\_{1}$, $\mathbf{a}\_{2}$, and $\boldsymbol{\delta}$, reciprocal lattice vectors $\mathbf{k}$는 Kagome tight-binding model 노트를 참고하면 된다. hexagonal Brillouin zone에 있는 세 $\mathbf{M}$ 점에 대해서 lattice vector들과의 내적은 아래와 같다:

$$
\begin{align}
\mathbf{M}_{1}\cdot\mathbf{a}_{1} = \pi, ~\mathbf{M}_{1}\cdot\mathbf{a}_{2} = 0, ~\mathbf{M}_{1}\cdot\boldsymbol{\delta} = \pi, \nonumber \\

\mathbf{M}_{2}\cdot\mathbf{a}_{1} = 0, ~\mathbf{M}_{2}\cdot\mathbf{a}_{2} = \pi, ~\mathbf{M}_{2}\cdot\boldsymbol{\delta} = \pi, \nonumber \\

\mathbf{M}_{3}\cdot\mathbf{a}_{1} = \pi, ~\mathbf{M}_{3}\cdot\mathbf{a}_{2} = \pi, ~\mathbf{M}_{3}\cdot\boldsymbol{\delta} = 0.

\end{align}
$$

여기서 알 수 있는 사실은 $\mathbf{M}$에 대해서 vHs에 해당하는 eigenvalue ($\varepsilon = 0$)의 eigenstate가 단 하나의 sublattice에만 의존한다는 것이다:

$$
\begin{align}
H(\mathbf{M}_{1}) = -t\begin{bmatrix} 0 & 0 & 2 \\ 0 & 0 & 0 \\ 2 & 0 & 0 \end{bmatrix}, ~ \ket{\mathbf{M}_{1}} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, \nonumber \\
H(\mathbf{M}_{2}) = -t\begin{bmatrix} 0 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, ~ \ket{\mathbf{M}_{2}} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}, \nonumber \\
H(\mathbf{M}_{3}) = -t\begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 2 \\ 0 & 2 & 0 \end{bmatrix}, ~ \ket{\mathbf{M}_{3}} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.
\end{align}
$$

$\mathbf{M}$ 점 사이의 scattering에 대한 form factor를 계산하면 같은 $\mathbf{M}$ 점에 머무는 산란이 아니면 모두 $F(\mathbf{M}\_{i},\mathbf{M}\_{j}) = 0$임을 알 수 있다. 이것이 의미하는 바는 다음과 같다: Fermi surface topology만 보면 $\mathbf{Q}$가 좋은 nesting vector더라도, 실제 interaction은 작아질 수 있다. 반대로 두 Fermi surface points가 같은 dominant sublattice character를 가지면 local Hubbard interaction에 의한 scattering은 더 강하게 작용할 수 있다. 이 현상을 sublattice interference라고 부른다.

Honeycomb lattice와의 비교는 이 효과를 잘 보여준다. Honeycomb model은 Kagome model의 dispersive band와 유사한 Fermi surface topology와 density of states를 가질 수 있지만, Van Hove filling 근처에서 sublattice weight가 Fermi surface를 따라 상대적으로 homogeneous하다. 따라서 honeycomb case에서는 Kagome 격자와 같은 sublattice interference가 나타나지 않는다. Kiesel and Thomale의 weak-coupling RG 결과에서 Kagome의 superconducting eigenvalue가 honeycomb보다 크게 작게 나타나는 이유가 바로 여기에 있다.

<br>

### Effect of longer-range interaction

nearest-neighbor interaction $U_1$을 포함하면 서로 다른 sublattice site 사이의 density-density interaction이 생긴다. 이 경우 interaction vertex는 더 이상 sublattice index에 대해 단순히 diagonal하지 않으며, 서로 다른 sublattice components 사이의 scattering channel도 열릴 수 있다.

이 때문에 Kagome Hubbard model에서는 longer-range Hubbard interaction이 일반적인 경우처럼 superconducting scale을 단순히 줄이는 것이 아니라, sublattice interference를 부분적으로 완화하여 pairing scale을 약간 증가시킬 수 있다. 이는 local interaction만 있을 때 sublattice interference가 실제로 Fermi surface instability를 suppress하고 있었다는 중요한 신호로 해석할 수 있다.
