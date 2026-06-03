---
title: Topological Superconductor
date: 2026-06-03 15:00:00 +0900
categories:
  - Physics
  - Topology
tags:
  - physics
  - cond-matter
  - topology
  - phase-transition
  - symmetry
  - superconductor
math: true
toc: true
---


## Bogoliubov transformation

초전도체에서 두 전자는 Cooper pair를 형성하는데, spin-singlet ($s$-wave or $d$-wave)인 pair에 대해서 mean-field BCS Hamiltonian은 아래와 같다:

$$ \begin{equation} H^{\rm MF}_{\rm BCS} = \sum_{\mathbf{k},s}\varepsilon_{\mathbf{k}}c^{\dagger}_{\mathbf{k}s}c_{\mathbf{k}s} + \sum_{\mathbf{k}}\Delta_{\mathbf{k}}c^{\dagger}_{\mathbf{k}\uparrow}c^{\dagger}_{-\mathbf{k}\downarrow} + \sum_{\mathbf{k}}\Delta^{*}_{\mathbf{k}}c_{-\mathbf{k}\downarrow}c_{\mathbf{k}\uparrow} \end{equation} $$

여기서 $\varepsilon_{\mathbf{k}}$는 tight-binding model에서 얻어지는 밴드에 대한 정보이고, $\Delta_{\mathbf{k}}$는 gap function이다. 이 해밀토니안이 기술하는 초전도체와 절연체의 차이점은 에너지 갭 주변에 particle-hole 대칭성의 존재 여부에 있다. 전자는 이 대칭성을 가지고 있는 반면, 후자는 일반적으로 그렇지 않다. (이때 PH 대칭성은 초전도의 quasiparticle에 대한 것이다). $s$-wave의 경우, $\Delta_{\mathbf{k}} = \Delta_{-\mathbf{k}}$; 즉 $\mathbf{k}$에 대해 even parity를 가지며, gap function을 단순하게 $\Delta_{\mathbf{k}} = \Delta_0$로 나타낼 수 있다. 이 해밀토니안을 대각화하기 위해 아래와 같이 다시 나타낼 수 있다:

$$ \begin{equation} H^{\rm MF}_{\rm BCS} = \sum_{\mathbf{k}}\varepsilon_{\mathbf{k}} + \sum_{\mathbf{k}} \begin{bmatrix} c^{\dagger}_{\mathbf{k}\uparrow} & c_{-\mathbf{k}\downarrow} \end{bmatrix} \begin{bmatrix} \varepsilon_{\mathbf{k}} & \Delta_{\mathbf{k}} \\ \Delta^{*}_{\mathbf{k}} & -\varepsilon_{\mathbf{k}} \end{bmatrix} \begin{bmatrix} c_{\mathbf{k}\uparrow} \\ c^{\dagger}_{-\mathbf{k}\downarrow} \end{bmatrix} \end{equation} $$

$2\times 2$ 행렬인 $h(\mathbf{k})$를 대각화하면 고유값은 $\pm\sqrt{\varepsilon^{2}\_{\mathbf{k}}+\lvert\Delta\_{\mathbf{k}}\rvert^{2}}$이며 eigenstates는 다음과 같이 주어진다:

$$ \begin{equation} \ket{u_{+}} = \begin{bmatrix} u_{\mathbf{k}} \\ v_{\mathbf{k}} \end{bmatrix},~ \ket{u_{-}} = \begin{bmatrix} -v^{*}_{\mathbf{k}} \\ u_{\mathbf{k}} \end{bmatrix} \end{equation} $$

이때 $\ket{u_{\pm}}$는 각각 particle state($+$)와 hole state($-$)로 나뉘며, $u_{\mathbf{k}}$와 $v_{\mathbf{k}}$는 아래와 같이 쓰여진다:

$$ \begin{align} u_{\mathbf{k}} = \sqrt{\frac{1}{2}\left(1+\frac{\varepsilon_{\mathbf{k}}}{E_{\mathbf{k}}}\right)}, \nonumber\\ v_{\mathbf{k}} = \frac{\Delta^{*}_{\mathbf{k}}}{|\Delta_{\mathbf{k}}|}\sqrt{\frac{1}{2}\left(1-\frac{\varepsilon_{\mathbf{k}}}{E_{\mathbf{k}}}\right)} \end{align} $$

Particle state와 Hole state로 unitary operator $U$를 만들 수 있다. 이 operator를 $\begin{bmatrix} c_{\mathbf{k}\uparrow} & c_{-\mathbf{k}\downarrow} \end{bmatrix}^{\rm T}$에 가하면 해밀토니안을 대각화하는 basis를 찾을 수 있다. 그 basis는 Bogoliubov quasiparticle이라 하며 아래와 같이 쓰여진다:

$$ \begin{equation} \begin{bmatrix} \gamma_{\mathbf{k}\uparrow} \\ \gamma^{\dagger}_{-\mathbf{k}\downarrow} \end{bmatrix} = U^{\dagger}\begin{bmatrix} c_{\mathbf{k}\uparrow} \\ c_{-\mathbf{k}\downarrow} \end{bmatrix} \end{equation} $$

Bogoliubov quasiparticle로 쓰여진 $h(\mathbf{k})$는 $\text{diag}[E_{\mathbf{k}},-E_{\mathbf{k}}]$로 주어지고, 이러한 unitary (similarity) transformation를 **Bogoliubov-Valatin 변환**이라고 한다.

{: .prompt-info }
> **Bogoliubov transformation은 Jordan-Wigner transformation과 병행해서 사용할 수 있는가? 만약 사용이 가능하다면 tight-binding model이 아니라 spin model에서도 해당 변환 방법을 적용할 수 있는가(즉, 마그논 입자에 대한 위상 분석과 마요라나 입자의 존재를 예측할 수 있는가?)?**

이 변환은 PH 대칭성과 상관없이 quadratic form인 페르미온 해밀토니안에 대해서 항상 적용할 수 있고, 보존 입자의 경우에는 unstable mode가 없을때만 가능하다(즉 $h(\mathbf{k})$가 positive definte한 경우). 이 quasiparticle은 phonon과 같이 (1) **서로 상호작용하지 않는** 특징이 있다. 또한 (2) particle과 hole의 중첩상태로 **charge가 제대로 정의되지 않는다**. 마지막으로 우리는 Bogoliubov quasiparticle을 fermion operator에서부터 유도하였다. 이 Bogoliubov quasiparticle은 fermion의 anticommutation relation을 그대로 유지한다:

$$ \begin{equation} \{\gamma_{\mathbf{k}s},\gamma^{\dagger}_{\mathbf{k}'s'}\} = \delta_{\mathbf{k}\mathbf{k}'}\delta_{ss'}, ~\{\gamma_{\mathbf{k}s},\gamma_{\mathbf{k}'s'}\} = 0 \end{equation} $$

<br>

## Bogoliubov-de Gennes Hamtiltonian

만약 시스템이 공간적으로 가 없을 때(edge가 있거나 vortices와 같은 defect가 존재할 때) mean-field Hamiltonian을 real space에서 기술하면 쉽게 쓰여진다는 장점이 있다. Bogoliubov 변환과 해밀토니안은 real space에서 아래와 같이 쓰여진다:

$$ 
\begin{align} 
\gamma_{n\uparrow} &= \int d\mathbf{r} ~[u^{*}_{n}(\mathbf{r})\psi_{\uparrow}(\mathbf{r}) + v^{*}_{n}(\mathbf{r})\psi^{\dagger}_{\downarrow}(\mathbf{r})], \nonumber \\ 

\gamma^{\dagger}_{n\downarrow} &= \int d\mathbf{r} ~[-v_{n}(\mathbf{r})\psi_{\uparrow}(\mathbf{r}) + u_{n}(\mathbf{r})\psi^{\dagger}_{\downarrow}(\mathbf{r})] \\

H_{\rm eff} &= \int d\mathbf{r} \left[ \sum_{s=\uparrow,\downarrow}\psi^{\dagger}_{s}H_0\psi_{s} + \Delta(\mathbf{r})\psi^{\dagger}_{\uparrow}\psi^{\dagger}_{\downarrow} + \Delta^{*}(\mathbf{r})\psi_{\downarrow}\psi_{\uparrow} \right] \nonumber 
\end{align}
$$

즉, BdG 해밀토니안은 BCS mean-field 해밀토니안을 real space에서 기술한 것이다. 이전에 $\ket{u_+}$와 $\ket{u_-}$는 각각 particle state와 hole state라 하였다. 이들은 particle-hole 대칭성(혹은 charge-conjugate 대칭성)으로 연결되어 있다. 이 대칭성은 $C$라는 연산자로 표현하며 time-reversal 대칭성과 마친가지로 anti-unitary 성질을 가지고 있다. 따라서, $CiC^{-1} = -i$를 만족한다. $\gamma_{ns}$로 대각화하는 $u_n$와 $v_n$을 고르면 아래 Bogoliubov-de Gennes 해밀토니안 (BdG Hamiltonian)을 얻는다:

$$ \begin{equation} \begin{bmatrix} H_0 & \Delta \\ \Delta^{*} & -H_0 \end{bmatrix} \begin{bmatrix} u_n \\ v_n \end{bmatrix} = E_n \begin{bmatrix} u_n \\ v_n \end{bmatrix} \end{equation} $$

또한, $C$를 $\ket{u_+}$에 가하면 $C\ket{u_+} = \ket{u_-}$일 것이다. 만약 gap function이 even parity를 갖는다면($\Delta_{\mathbf{k}} = \Delta_{-\mathbf{k}}$), $u_{\mathbf{k}}$와 $v_{\mathbf{k}}$는 아래 성질을 만족한다:

$$ \begin{equation} u_{\mathbf{k}} = u_{-\mathbf{k}},~v_{\mathbf{k}} = v_{-\mathbf{k}} \end{equation} $$

이 사실을 통해 $\ket{u_-}$의 고유값은 $E_{-\mathbf{k}}$임을 알 수 있다.

{: .prompt-info }
> **왜 charge-conjugate 대칭성은 anti-unitary 성질을 가지고 있는가?**

A. 전하는 파동함수에서 ‘$U(1)$ phase가 어떤 방향으로 감기는가’로 정의된다($\psi\rightarrow e^{iq\theta}\psi$). Charge conjugation은 전하를 반대로 취했다는 것인데, 이는 $U(1)$ phase factor의 부호를 반대로 하는 것과 같다. 이 작용을 할 수 있는 연산자는 anti-unitary 성질을 가져야한다.

$\ket{u_+}$가 $C$에 의해 $\ket{u_-}$로 바뀐다는 것은 $C$가 아래와 같은 형태로 표현되어야한다는 것을 의미한다:

$$ \begin{align} C &= \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}K \nonumber \\ &= -i\tau_{y}K, \\ C^{2} &= -1. \nonumber \end{align} $$

따라서 even parity의 gap function에 대한 charge-conjugate 연산자는 half-integer spin에 대한 time-reversal 대칭성의 연산자와 비슷하다는 것을 볼 수 있다. 위 사실들을 통해 BCS 해밀토니안은 charge-conjugate symmetry가 있을때 아래와 같이 변환된다는 것을 보일 수 있다:

$$ \begin{equation} CH(\mathbf{k})C^{-1} = -H(-\mathbf{k}) \end{equation} $$

실제로 $h(\mathbf{k})$는 $C$에 대해서 다음과 같이 변환된다:

$$ \begin{align} \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}K \begin{bmatrix} \varepsilon_{\mathbf{k}} & \Delta_{\mathbf{k}} \\ \Delta^{*}_{\mathbf{k}} & -\varepsilon_{\mathbf{k}} \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}K^{-1} &= K \begin{bmatrix} -\Delta^{*}_{\mathbf{k}} & \varepsilon_{\mathbf{k}} \\ \varepsilon_{\mathbf{k}} & \Delta_{\mathbf{k}} \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}K^{-1} \nonumber \\ &= \begin{bmatrix} -\varepsilon_{\mathbf{k}} & -\Delta_{\mathbf{k}} \\ -\Delta^{*}_{\mathbf{k}} & \varepsilon_{\mathbf{k}} \end{bmatrix} = -h(-\mathbf{k}) \end{align} $$

<br>

## Nontrivial topology in superconductor

이전까지 초전도를 mean-field 해밀토니안으로 기술하는 방법과 그 해밀토니안이 갖는 대칭성에 대해서 논하였다. 이제는 nontrivial topology를 보이는 초전도를 다루고자 한다. 초전도에서도 topology는 절연체에서 했던 것과 같이 winding number로 구별될 수 있으며 edge state가 나오는 등 기본적인 논의 방식은 topological insulator에서와 유사하다. Topological superconductor의 대표적인 모델에는 $p$-wave superconductor가 있으며 1D에서 $p$-wave 초전도체 모델은 Kitaev model이 있다. 이 모델은 spinless electron을 전제로 한다. Topological superconductor의 candidate material로는 Sr$_2$RuO$_4$, UTe$_2$가 제시되었다. 앞으로의 논의를 위해 BCS mena-field 해밀토니안을 다시 써보자:

$$ \begin{align} H^{\rm MF}_{\rm BCS} &= \sum_{\mathbf{k}}\varepsilon_{\mathbf{k}} + \sum_{\mathbf{k}} \begin{bmatrix} c^{\dagger}_{\mathbf{k}\uparrow} & c_{-\mathbf{k}\downarrow} \end{bmatrix} \begin{bmatrix} \varepsilon_{\mathbf{k}} & \Delta_{\mathbf{k}} \\ \Delta^{*}_{\mathbf{k}} & -\varepsilon_{\mathbf{k}} \end{bmatrix} \begin{bmatrix} c_{\mathbf{k}\uparrow} \\ c^{\dagger}_{-\mathbf{k}\downarrow} \end{bmatrix} \nonumber \\ &\stackrel{S=0}{=} \frac{1}{2}\sum_{\mathbf{k}} \begin{bmatrix} c^{\dagger}_{\mathbf{k}} & c_{-\mathbf{k}} \end{bmatrix} \begin{bmatrix} \varepsilon_{\mathbf{k}} & \Delta_{\mathbf{k}} \\ \Delta^{*}_{\mathbf{k}} & -\varepsilon_{\mathbf{k}} \end{bmatrix} \begin{bmatrix} c_{\mathbf{k}} \\ c^{\dagger}_{-\mathbf{k}} \end{bmatrix} \end{align} $$

두번째 식은 Spin degree of freedom을 무시하여 $1/2$ factor가 붙게 되었다. $p$-wave를 구별하는 기준은 $\Delta_{\mathbf{k}}$이 odd parity를 $\mathbf{k}$에 대해 갖는가에 달려있다. $p$-wave gap function은 $\Delta_{\mathbf{k}} = -\Delta_{-\mathbf{k}}$를 만족하며 단순히 $\mathbf{k}$의 1차 선형식 $\Delta_{\mathbf{k}} = \Delta_{0}\mathbf{k}$으로 나타낼 수 있다. 위 해밀토니안의 고유값들은 $\pm\sqrt{\varepsilon^{2}\_{\mathbf{k}}+\lvert\Delta\_{\mathbf{k}}\rvert^{2}}$로 주어지며, eigenstate의 각 component들은 식 (5)과 똑같이 주어진다. 이들 모두 charge-conjugate 대칭성에 의해 $u_{\mathbf{k}} = u_{-\mathbf{k}}$와 $v_{\mathbf{k}} = -v_{-\mathbf{k}}$를 만족한다. 따라서 $\ket{u_+}$에 대해서 아래의 관계식을 얻는다:

$$ \begin{equation} C\ket{u_+} = \ket{u_-} = \begin{bmatrix} v^{*}_{-\mathbf{k}} \\ u_{-\mathbf{k}} \end{bmatrix} ~ (u_{\mathbf{k}}\in \mathbb{R}) \end{equation} $$

따라서, charge-conjugate 연산자는 $C^2 = 1$를 만족하고, 그 형태는 아래와 같이 쓰여진다는 것을 알 수 있다:

$$ \begin{equation} \therefore C = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}K = \tau_x K \end{equation} $$

Spinful $s$-wave 초전도체와 달리 지금의 경우에는 spinless electron에 대한 time-reversal 대칭성의 연산자와 비슷하다는 점을 주목한다.

위의 해밀토니안을 가지고 topology를 다루기 위해 Fermi surface에서 pairing이 어떤 topology를 이루는지 알아야한다. 해밀토니안을 continuum limit으로 끌어내림으로써 알 수 있다. 이 한계에서 해밀토니안의 lattice energy $\varepsilon_{\mathbf{k}}$는 $\mathbf{k} = \mathbf{0}$ 근방에서 $-\mu$로 주어지고, $\mu$ 값에 따라 $E_{\mathbf{k}}$는 다르게 주어진다.

쿠퍼쌍의 파동함수 $g(\mathbf{k})$는 $v_{\mathbf{k}}/u_{\mathbf{k}}$라 알려져 있다(*Why*?). 먼저 $\mu < 0$일때 $u_{\mathbf{k}} \simeq 1$, $v_{\mathbf{k}} \simeq \Delta^{*}/2\mu$로 주어진다. 따라서 $g(\mathbf{k})$는 $\mathbf{k}$에 비례한다. $\mu = 0$일때 $g(\mathbf{k})$가 analytic하다. 이는 함수가 exponentially decay하는 성질을 가졌음을 의미한다($g(k)\propto e^{-k/k_0}$). $\mu > 0$일때는 $u_{\mathbf{k}} \simeq \lvert\Delta_{\mathbf{k}}\rvert/2\mu$, $v_{\mathbf{k}} \simeq 1$로 주어지며 $g(\mathbf{k})$는 $1/\mathbf{k}$에 비례한다. 이는 함수가 느리게 decay한다는 것을 의미한다. 

여기서 주목할 점은 다음 두 가지 경우이다: $\mu < 0$는 strong-coupling regime이라하며, $\mu > 0$는 weak-coupling regime이라 한다. 이 두 phase는 adiabatic하게 연결되어 있지 않다. 이는 두 밴드 모두 gap이 열려있는 phase이며, 중간 단계에 그 gap이 닫히는 과정이 있다는 것을 의미한다. 하지만 둘 중 어떤 경우가 topologically nontrivial한지 구분하기 위해 chemical potential $\mu$가 $x < 0$에서 $0$보다 작고, $x > 0$에서 $0$보다 크다고 생각한다. 이러한 특성을 갖는 $\mu$를 아래 함수로 표현할 수 있다:

$$ \begin{equation} \mu(x) = \mu_0 \tanh(x) \end{equation} $$

이러한 가정을 하는 이유는 1D $p$-wave SC가 massive Dirac 방정식과 유사하다는 사실과 mass kink에 대해 bound-state zero mode를 유도할 수 있다고 기대하기에 도입되었다. $E = 0$일때 eigenstate $\ket{\psi}$가 아래와 같이 주어진다고 가정하자:

$$ \begin{equation} \braket{x|\psi} = \psi_0 e^{-\frac{1}{\Delta_0}\int^{x}_{0} dx' \mu(x')} \end{equation} $$

BdG 해밀토니안은 $k^2$가 작은 범위 내에서 아래와 같이 수정된다:

$$ \begin{equation} H = \begin{bmatrix} -\mu(x) & \Delta_0 k \\ \Delta_0 k & \mu(x) \end{bmatrix} \end{equation} $$

이때 $k = -i\partial_x$이므로 고유값 문제는 다음과 같이 주어진다.

$$ \begin{equation} \begin{bmatrix} -\mu(x) & i\mu(x) \\ i\mu(x) & \mu(x) \end{bmatrix}\psi_0 = 0 \end{equation} $$

이 방정식의 해는 아래와 같다:

$$ \begin{equation} \psi_0 = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ -i \end{bmatrix} \end{equation} $$

이 zero mode의 Bogoliubov quasiparticle 연산자 $\gamma_0$의 형태는 아래와 같이 쓰여진다:

$$ \begin{equation} \gamma_0 = \int dx ~ e^{-\frac{1}{\Delta_0}\int^{x}_{0} dx' \mu(x')}\cdot\frac{1}{\sqrt{2}}[c(x) - ic^{\dagger}(x)] \end{equation} $$

$\gamma_0$에 $e^{i\pi/4}$라는 $U(1)$ phase factor를 곱하면 $\bar\gamma_{0} = \bar\gamma^{\dagger}\_{0}$를 만족한다. 즉, quasiparticle의 반입자가 곧 quasiparticle과 같게 된다. 입자가 반입자와 같은 페르미온을 마요라나 페르미온(Majorana fermion)이라 한다. 마요라나 페르미온 $\gamma_{j}$는 $\gamma_{j} = \gamma^{\dagger}\_{j}$, $\gamma^{2}\_{j} = 1$와 아래 Fermionic anticommutation 관계식을 만족한다:

$$ \begin{equation} \{\gamma_j, \gamma^{\dagger}_{j'}\} = 2\delta_{j,j'} \end{equation} $$

일반적인 페르미온 연산자 $c_j$와 마요라나 페르미온 연산자 사이에는 다음과 같은 관계가 있다:

$$ \begin{align} c_{j} = \frac{1}{2}(\gamma_{2j-1}+i\gamma_{2j}) \nonumber \\ c^{\dagger}_{j} = \frac{1}{2}(\gamma_{2j-1}-i\gamma_{2j}) \end{align}

$$

{: .prompt-info}
> **페르미온 연산자와 마요라나 페르미온 연산자 간의 관계는 어떻게 성립된 것인가? 그리고 Continuum limit 모델에서 마요라나 페르미온의 위상학적 성질이 논의되지 않았다. Kitaev model에서만 보일 수 있는 것인가?**

이는 복소수 $z$를 두 개의 실수 $a$, $b$로 표현하는 것과 비슷하다는 것을 볼 수 있다($z = a + ib$). 여기까지 우리는 1D $p$-wave SC가 continuum limit에서 고유상태가 마요라나 페르미온이라는 것을 알게 되었다. 마요라나 페르미온은 topological SC를 기술하는 또 다른 모델인 **open boudary 조건에서의 Kitaev 1D chain model**의 eigenstate를 구하기 위해 사용될 수 있다. 이 모델의 해밀토니안은 일반적인 페르미온에 대해서 그리고 마요라나 페르미온에 대해서 각각 아래와 같이 기술된다:

$$ \begin{align} H &= -\frac{t}{2}\sum^{N-1}_{j=1}(c^\dagger_{j+1}c_j + c^\dagger_{j}c_{j+1}) - \mu\sum^{N}_{j=1}c^{\dagger}_jc_j + \frac{\Delta_0}{2}\sum^{N-1}_{j=1}(c^\dagger_{j+1}c^{\dagger}_j + c_{j}c_{j+1}) \nonumber \\ &= \frac{i}{4}\sum^{N-1}_{j=1}\left\{ -(t+\Delta_0)\gamma_{2j+1}\gamma_{2j} + (t-\Delta_0)\gamma_{2j+2}\gamma_{2j-1}\right\} -\frac{i\mu}{2}\sum^{N}_{j=1}\gamma_{2j-1}\gamma_{2j} \end{align} $$

논의의 단순함을 위해 $\Delta_0 = t$라 하자(이는 $p$-wave 성질을 더이상 가정하지 않는다는 것이다.). 위 해밀토니안은 아래와 같이 다시 쓸 수 있다:

$$ \begin{equation} H = -\frac{it}{2}\sum^{N-1}_{j=1}\gamma_{2j+1}\gamma_{2j} - \frac{i\mu}{2}\sum^{N}_{j=1}\gamma_{2j-1}\gamma_{2j} \end{equation} $$

이 해밀토니안을 통해 얻을 수 있는 고유상태는 두가지가 있다: (1) 각 격자 사이트에 두 개의 마요라나 페르미온이 에너지 $\mu$만큼 결합되어 있고 다른 격자 사이트의 마요라나 페르미온과는 $t$만큼 결합하는 경우와 (2) $j=1$과 $j=N$에 Majorana edge state가 각각 한 개씩 존재하는 경우가 있다. 이때 두번째 경우가 topologically nontrivial phase이다. 우리는 앞에서 $\mu$의 부호에 따라 strong/weak coupling phase를 나누었다. 여기서는 첫번째 경우가 $\lvert\mu\rvert > t$이고 strong coupling phase에 해당한다. 반대로 두번째 경우는 $\lvert\mu\rvert < t$이고 weak coupling phase에 해당한다.

{: .prompt-info}
> **두번째 경우가 위상학적으로 nontrivial하다는 것을 edge state의 존재말고도 다른 근거로 보일 수 있는가?**

<br>

## Fermion parity

1D Kitaev chain 모델에서 nontrivial topological phase는 두 개의 decoupled된 마요라나 페르미온을 보인다고 언급했다. 이 두 페르미온에는 일반적인 디락 페르미온과 같이 occupied되어있거나 unoccupied되어있는 상태가 존재한다. 각각의 마요라나 페르미온들은 zero energy를 갖게 되고, 이는 그들이 twofold degenerate된 바닥 상태임을 의미한다(How?). 여기서 각각의 상태를 fermion parity로 특정하려 시도할 것이다. Fermion parity는 $j$번째 사이트에 있는 페르미온에 대해서 다음과 같이 정의된다:

$$ \begin{equation} (-1)^{n_j} = \begin{cases} +1,~\text{if}~n_j = 0, \\ -1,~\text{if}~n_j = 1 \end{cases} \end{equation} $$

여기서 $n_{j} = c^{\dagger}\_{j}c\_{j}$이다. 위 식을 조금 더 구체화하면 아래와 같다:

$$ \begin{align} (-1)^{n_j} &= e^{i\pi n_j} \nonumber \\ &= 1 + i\pi n_j + \frac{1}{2!}(i\pi n_j)^{2} + \frac{1}{3!}(i\pi n_j)^{3} + \cdots \nonumber \\ &= 1 + i\pi n_j + \frac{1}{2!}(i\pi )^{2}n_j + \frac{1}{3!}(i\pi)^{3}n_j + \cdots \nonumber \\ &= 1 - 2n_j \end{align} $$

$n_j$를 마요라나 페르미온 연산자로 표현하면 아래와 같다:

$$ \begin{align} n_j &= c^{\dagger}_{j}c_{j} \nonumber \\ &= \frac{1}{4}(\gamma_{2j-1}-i\gamma_{2j})(\gamma_{2j-1}+i\gamma_{2j}) \nonumber \\ &= \frac{1}{4}(1 + i\gamma_{2j-1}\gamma_{2j} - i\gamma_{2j}\gamma_{2j-1} + \gamma^{2}_{2j}) \nonumber \\ &= \frac{1}{2}(1+i\gamma_{2j-1}\gamma_{2j}) \end{align} $$

따라서 fermion parity는 다음과 같이 다시 쓸 수 있다:

$$ \begin{equation} (-1)^{n_j} = -i\gamma_{2j-1}\gamma_{2j} \end{equation} $$

{: .prompt-info}
> **이 fermion parity 연산자는 BCS 해밀토니안과 commute하는가? Commutation이 만족한다면 그것이 갖는 물리적인 의미는 무엇인가?**
>
먼저 kinetic term인 $c^{\dagger}\_{j}c\_{j+1}$와 $n_j$이 commute한다. 대신 coupling term인 $c^{\dagger}\_{j}c^{\dagger}\_{j+1}$와는 commute하지 않는다(대신 $0\mod 2$와 같다.). 하지만 ground state에 대해서 Cooper 쌍의 개수가 잘 정의되지 않는 까닭에 effective하게 commute한다고 볼 수 있다.

전체 시스템에 대해서(모든 격자 사이트에 대해서) fermion parity는 아래와 같이 정의된다:

$$ \begin{align} P_{F} &= \prod^{N}_{j=1}(1-2c^{\dagger}_{j}c_{j}) \nonumber \\ &= \prod^{N}_{j=1}(-i\gamma_{2j-1}\gamma_{2j}) \end{align} $$

이 연산자는 $P^2_F = 1$를 만족한다. 이 연산자를 통해 Kitaev model에서 trivial phase와 nontrivial phase를 확실하게 구별해보도록 한다.

{: .prompt-info}
> **왜 Fermion parity를 도입하였는가?**
>
이 연산자를 도입하는 이유는 초전도체에서는 쿠퍼 쌍에 의해서 입자 개수가 보존되지 않고 대신 페르미온 수의 $\mod 2$만큼은 보존되기 때문이다.

각 경우에 대해서 fermion parity의 고유값을 구해본다. 먼저 strong coupling regime ($\lvert\mu\rvert > t$)에서는 해밀토니안은 $i\gamma\_{2j-1}\gamma\_{2j} = 2c^{\dagger}\_{j}c\_{j-1}$라는 관계를 통해 아래와 같이 쓸 수 있다:

$$ \begin{align} H &= -\frac{i\mu}{2}\sum^{N}_{j=1}\gamma_{2j-1}\gamma_{2j} \nonumber \\ &= |\mu|\sum^{N}_{j=1}(c^{\dagger}_jc_j-\frac{1}{2}) \end{align} $$

이 해밀토니안의 바닥 상태는 $c_j$에 의해 소멸되므로 $P_F$에 대해서 $+1$의 고유값을 갖는다:

$$ \begin{align} P_F\ket{0} &= \prod^{N}_{j=1}(1-2c^{\dagger}_{j}c_{j})\ket{0} \nonumber \\ &= \ket{0} \end{align} $$

Weak coupling regime ($\lvert\mu\rvert < t$)에서는 해밀토니안은 아래와 같다:

$$ \begin{equation} H = -\frac{it}{2}\sum^{N-1}_{j=1}\gamma_{2j+1}\gamma_{2j} \end{equation} $$

이 해밀토니안의 edge state는 bulk state와 공간적으로 떨어져 있었고, 해당 state를 분리해서 표현하기 위해 페르미온 연산자를 다음과 같이 다시 정의할 수 있다:

$$ \begin{align} d_{j} = \frac{1}{2}(\gamma_{2j}+i\gamma_{2j+1}), \nonumber \\ d^{\dagger}_{j} = \frac{1}{2}(\gamma_{2j}-i\gamma_{2j+1}) \end{align} $$

이 연산자들을 이용하여 해밀토니안은 다시 표현할 수 있다:

$$ \begin{equation} H = t\sum^{N}_{j=1}(d^{\dagger}_{j}d_{j}-\frac{1}{2}) ~\text{with}~ 2d^{\dagger}_{j}d_{j} = 1 + i\gamma_{2j}\gamma_{2j+1} \end{equation} $$

이 해밀토니안의 바닥 상태는 $d_{j}$에 의해 소멸되지만($d_{j}\ket{0} = 0$) $P_F$에 대한 고유값을 계산하기 위해 $P_F$를 $d_j$로 표현해야할 필요가 있다. 접근하기 가장 쉬운 방법은 $2d^{\dagger}\_{j}d\_{j} = 1 + i\gamma\_{2j}\gamma\_{2j+1}$이란 관계식을 사용하는 것이다. 이를 위해 곱의 범위를 변형시킬 필요가 있다:

$$ \begin{align} P_F &= \prod^{N}_{j=1}(-i\gamma_{2j-1}\gamma_{2j}) \nonumber \\ &= (-i)a_1\prod^{N-1}_{j=1}(-i\gamma_{2j}\gamma_{2j+1})a_{2N} \nonumber \\ &= (-ia_1a_N)\prod^{N-1}_{j=1}(1-2d^{\dagger}_{j}d_{j}) \end{align} $$

바닥 상태에 대해서 $P_F\ket{0} = (-ia_1a_N)\ket{0}$로 주어진다. 이는 말끔한 고유값 방정식으로 보여지진 않는데, 이는 nonlocality에 의해 발생한 것이다. Edge 양쪽 끝의 두 페르미온에 대해서 nonlocal fermion operator $f$를 정의하여 간단히 표현할 수 있다:

$$ \begin{equation} f = \frac{1}{2}(a_1 + ia_{2N}) \end{equation} $$

이 연산자는 교환관계 $\{f,f^{\dagger}\} = 1$를 만족하고, 이 연산자로 fermion number 연산자를 정의할 수 있다($f^\dagger f$). 이 number 연산자의 고유값은 $0$ 아니면 $1$이 되며, 해당 고유상태는 각각 $\ket{0\_+}$ 혹은 $\ket{0\_-}$으로 주어진다. 앞서 우리는 weak coupling 해밀토니안의 고유상태들에 twofold degeneracy가 있다고 언급했다. $P_F$는 $(-ia_{1}a_{N})$ 때문에 고유상태를 특정짓기에 좋은 연산자가 아님을 보였고, 이를 nonlocal fermion 연산자를 도입하여 가능하도록 만들 수 있다:

$$ \begin{align} P_F\ket{0_{\pm}} &= (-ia_1a_N)\ket{0_{\pm}} \nonumber \\ &= (1-2f^{\dagger}f)\ket{0_{\pm}} ~\text{using}~-ia_1a_N=1-2f^{\dagger}f \nonumber \\ &= \pm\ket{0_{\pm}} \end{align} $$

이 문장은 심오한 의미를 담고 있다:

{: .prompt-note}
> **Nonlocal한 페르미온은 local한 섭동에 대해 고유상태(qubit) $\ket{0_{\pm}}$가 robust하다.**

Local perturbation은 단일 마요라나 페르미온에만 가하게 될 것이고(예를 들어 $\gamma_1$), 이는 전체 fermion parity에 영향을 주지 않는다. 또한, fermion parity는 초전도체에 대해서 보존되는 양이므로(When does it become not conserved anymore?), perturbation이 양쪽 끝 마요라나 페르미온에 가해져도 parity는 변화시키지 못한다. 이러한 매커니즘은 양자 정보, 큐빗을 저장하는데 좋은 밑바탕이 된다는 것을 의미한다.

---

## References

1. Neupert, T. & Huber, S. Topological Condensed Matter Physics. Condensed Matter Theory and Metamaterials, ETH Zurich https://cmt-qo.phys.ethz.ch/education/spring-semester-2021.html (2021).
2. Chang, M.-C. Topology in condensed matter systems. Department of Physics, National Taiwan Normal University https://phy.ntnu.edu.tw/~changmc/Teach/Topo/Topo_24.html (2024).