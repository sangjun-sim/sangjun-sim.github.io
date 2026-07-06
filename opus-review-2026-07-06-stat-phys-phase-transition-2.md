# 기술 리뷰: *Berezinskii–Kosterlitz–Thouless transition (2)*

리뷰 대상 파일: `_posts/2026-04-20-stat-phys-phase-transition-2.md`
리뷰 방식: `physics-cs-tutor` 스타일 (물리 정확성 우선, 출처 검증, 계층적 비판 질문)
리뷰어 관점: 전공자 동료 리뷰. 전체 재작성이 아닌 **국소 수정 블록** 위주로 지적합니다.

---

## 0. 전체 평가

유도의 뼈대는 건강합니다. 고온 전개 → 저온 스핀파 근사 → 단일 와동 자유에너지 → 쿨롱 가스 사상(mapping)으로 이어지는 Kardar식 흐름을 정확히 따르고 있고, **최종 결과값들은 맞습니다**:

- 저온 대수 감쇠 지수 $\eta = \dfrac{1}{2\pi K}$ ($T_{BKT}$에서 $K_c=2/\pi$ → $\eta=1/4$) ✓
- 단일 와동 임계값 $K_c = \dfrac{2}{\pi n^2}$, $n=1$일 때 $k_BT_c = \dfrac{\pi}{2}J$ ✓
- 쿨롱 가스 상호작용의 로그 형태와 자기에너지/핵심(core) 항 분리 ✓

다만 다음이 걸립니다. 아래에서 우선순위별로 다룹니다.

- **[P0] 개념 오류 1건**: "바닥상태가 $U(1)$ 대칭을 깬다"는 서술이 Mermin–Wagner 정리 및 **글 후반부의 올바른 서술**과 정면으로 충돌합니다.
- **[P0] 유도 오류 2건**: 저온 전개의 부호·계수 오류, 자유에너지 식에서 $K$ 누락(→ 내부에너지의 온도 독립성 주장과 모순).
- **[P1] 표기/규약 문제**: 와동 상호작용 두 표현 사이의 factor-of-2 합 규약 불일치, 호모토피군 혼동($\pi_1$ vs $\pi_2$), 확률류 표기.
- **[P1] 인용 2건**: "D. Mermin" → **N. D. Mermin**, Resnick 실험 시스템 설명 부정확 + $V\propto I^3$의 이론 출처(Halperin–Nelson) 누락.
- **[P2] 렌더링**: `\textit{}`, `\*`, `\_` 등 kramdown/MathJax 이슈.

---

## 1. 우선순위 체크리스트 (compact)

| # | 위치/주제 | 문제 | 심각도 |
|---|-----------|------|--------|
| 1 | "The ground state should break this symmetry" | Mermin–Wagner 위배, 글 내부 모순 | **P0 개념** |
| 2 | 저온 전개 `= -K∑(θᵢ-θⱼ)² + const` | 부호 반대 + 계수 1/2 누락 | **P0 수학** |
| 3 | 자유에너지 3번째 줄 `π n² k_BT ln` | $K$ 누락 → 문자 그대로면 $\pi n^2=2$ (무의미), 내부에너지 온도독립성 주장과 모순 | **P0 수학** |
| 4 | "at any temperature, φ is disordered" | 스핀파(항상)와 와동(임계온도 위에서만)을 혼동; $T<T_{BKT}$는 준-장거리 질서 | **P1 개념** |
| 5 | $-\pi K\sum_{i,j}$ vs $-4\pi^2 K\sum_{i,j}C$ | 두 식이 동일 기호 $\sum_{i,j}$인데 서로 다른 합 규약(순서쌍 vs 비순서쌍)을 요구 → factor-of-2 | **P1 표기** |
| 6 | "skyrmion number for $S^2$" | 와동 감음수 $\pi_1(S^1)$와 스커미온수 $\pi_2(S^2)$는 다른 불변량 | **P1 개념** |
| 7 | 확률류 $\propto \psi^{*}\partial_i\phi$ | $|\psi|^2\partial_i\phi$ 또는 $\mathrm{Im}(\psi^*\partial_i\psi)$가 맞음 | **P1 표기** |
| 8 | 2D 정전기 `V = q/(4πε) ln` | 2D 그린함수 계수 $1/2\pi$ 누락, `4πε`는 3D SI 잔재 | **P2 표기** |
| 9 | "At low temperatures ... wants to make many vortices" | 엔트로피 증식은 **고온**에서 일어남; 위치가 혼동을 부름 | **P2 서술** |
| 10 | "D. Mermin", Resnick 인용 | 이름/시스템/이론출처 보정 | **P1 인용** |
| 11 | `\textit{giant vortex}`, `\*`, `\_` | MathJax/kramdown 렌더링 | **P2 렌더링** |

---

## 2. 물리 개념 오류 (P0/P1)

### 2.1 [P0] "바닥상태가 대칭을 깬다" — Mermin–Wagner 위배 + 내부 모순

원문:

> "The ground state should break this symmetry since it has the $U(1)$ symmetry."

그리고 몇 문장 뒤에는 (올바르게):

> "This cannot be elucidated by Landau's paradigm; that is, it is **not** a symmetry-breaking transition ..."

두 문장이 충돌합니다. 2D 단거리 상호작용계에서 **연속 대칭은 유한 온도에서 자발적으로 깨질 수 없습니다** (Mermin–Wagner–Hohenberg 정리). 따라서:

- $T=0$: 바닥상태는 정렬(모든 $\theta_i$ 동일)되어 방향을 하나 고름 — 이 의미에서만 "대칭을 깬다"고 말할 수 있습니다.
- $T>0$: 참 장거리 질서(LRO)는 **존재하지 않습니다**. $T<T_{BKT}$에서는 **준-장거리 질서**(대수적/거듭제곱 상관), $T>T_{BKT}$에서는 지수 감쇠(무질서).
- BKT 전이는 준-LRO ↔ 무질서 전이이며, 두 상 모두 열역학적 극한에서 $\langle\mathbf{S}\rangle = 0$입니다. 그래서 **국소 질서변수가 없고**, 이것이 곧 Landau 패러다임 밖이라는 이야기입니다.

**드롭인 수정 제안** (해당 문단 대체):

> The system has a continuous $U(1)$ symmetry. In two dimensions, however, the Mermin–Wagner theorem forbids spontaneous breaking of this continuous symmetry at any $T>0$: there is no conventional long-range order. Instead, for $T<T_{BKT}$ the system exhibits *quasi*-long-range order (algebraically decaying correlations), while for $T>T_{BKT}$ correlations decay exponentially. The transition between these two regimes is *not* a symmetry-breaking transition — the order parameter $\langle\mathbf{S}\rangle$ vanishes on both sides — which is precisely why it lies outside Landau's paradigm.

> **비판 질문**: "no divergence on the thermodynamic variables"라고 쓰셨는데, 이는 대칭 비깨짐 **때문에** 성립하는 것이 아니라 BKT가 **무한 차수(essential singularity) 전이**이기 때문입니다. 이 둘은 논리적으로 별개의 사실인데, 원문은 괄호로 묶어 인과처럼 서술하고 있습니다. 다음 편(RG)에서 $\xi\sim \exp[b/(T-T_{BKT})^{1/2}]$를 다룰 때 이 구분을 명시하면 좋겠습니다.

### 2.2 [P1] "at any temperature, φ is disordered by ... topological defects"

원문:

> "At any temperature, $\phi$ is disordered by thermally populated topological defects (vortex and anti-vortex ...)."

두 개의 서로 다른 요동을 뭉뚱그렸습니다.

- **스핀파(Goldstone) 요동**은 모든 $T>0$에서 참 LRO를 파괴합니다(→ Mermin–Wagner). 하지만 이것만으로는 준-LRO(거듭제곱 상관)를 줍니다.
- **와동(topological defect)**은 $T>T_{BKT}$에서만 자유롭게 풀려(unbind) 증식하고, 그때 비로소 지수 감쇠가 나타납니다. $T<T_{BKT}$에서는 와동-반와동이 **쌍으로 속박**되어 있어 계는 무질서가 **아닙니다**.

즉 "at any temperature ... disordered by topological defects"는 두 곳에서 틀립니다: ('any temperature'가 아니라 임계온도 위에서만) + (무질서화의 주역을 결함으로 단정). 다음처럼 분리하기를 권합니다:

> Spin-wave (Goldstone) fluctuations already destroy true long-range order at any $T>0$, leaving only quasi-long-range order. Topological defects (vortices/antivortices) play a distinct role: they remain bound in vortex–antivortex pairs for $T<T_{BKT}$ and unbind (proliferate as free defects) only for $T>T_{BKT}$, driving the crossover to exponential decay.

관련하여 "At $T<T_{BKT}$, the vortices attract to each other"도 정밀화가 필요합니다. **반대 부호끼리(와동–반와동) 끌어당기고, 같은 부호끼리는 밀칩니다.** $T<T_{BKT}$의 핵심은 "끌림"이 아니라 "쌍 속박(binding)"입니다.

---

## 3. 수학/유도 오류 (P0/P1)

### 3.1 [P0] 저온 전개의 부호·계수 오류

원문:

$$
\beta H = -K\sum_{\langle i,j\rangle}\cos(\theta_i-\theta_j) \sim -K\sum_{\langle i,j\rangle}\left[1-\tfrac{1}{2}(\theta_i-\theta_j)^2\right] = \underbrace{-K\sum_{\langle i,j\rangle}(\theta_i-\theta_j)^2}_{\text{✗}} + \text{const.}
$$

전개하면
$$
-K\sum\left[1-\tfrac12(\theta_i-\theta_j)^2\right] = -K\sum 1 + \frac{K}{2}\sum(\theta_i-\theta_j)^2 = \text{const.} + \frac{K}{2}\sum_{\langle i,j\rangle}(\theta_i-\theta_j)^2.
$$

즉 **부호가 반대이고 계수 $1/2$가 빠졌습니다.** 올바른 형태는 $+\dfrac{K}{2}\sum(\theta_i-\theta_j)^2$입니다. 바로 다음 줄의 연속체 형태 $\dfrac{K}{2}\int (\nabla\theta)^2$은 맞으므로, 이건 중간 단계의 오타이지만 주의 깊은 독자가 바로 잡아냅니다.

**드롭인 수정:**
```latex
\beta H = -K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)}
       \sim -K\sum_{\braket{i,j}}\left[1-\frac{1}{2}(\theta_i-\theta_j)^2\right]
       = \frac{K}{2}\sum_{\braket{i,j}}(\theta_i-\theta_j)^2 + \text{const.}
```

### 3.2 [P0] 자유에너지에서 $K$ 누락 — 내부에너지의 온도 독립성 주장과 모순

원문 (align의 2→3번째 줄):

$$
\cdots = \varepsilon^{0}_{n}(a) - k_BT\ln 2\pi - (2-\pi K n^2)k_BT\ln\!\Big(\tfrac{L}{a}\Big)
= \Big[\varepsilon^{0}_{n}(a) + \underbrace{\pi n^2 k_BT\ln(\tfrac{L}{a})}_{\text{✗ } K\text{ 누락}}\Big] - 2k_BT\ln\!\Big(\tfrac{L}{a}\Big)
$$

$(2-\pi K n^2)$를 전개하면 로그 항 계수는 $+\pi K n^2 k_BT$인데, 3번째 줄에서 $K$가 사라졌습니다. 이건 단순 오타를 넘어 **글 자신의 주장과 모순**됩니다:

- 원문은 "The internal energy in this case is **independent of the temperature**"라고 씁니다. 실제로 $\pi K n^2 k_BT = \pi\big(\tfrac{J}{k_BT}\big)n^2 k_BT = \pi n^2 J$로 **온도 독립**입니다. 반면 $K$를 뺀 $\pi n^2 k_BT$는 온도 의존이 되어 이 주장과 배치됩니다.
- 또한 문자 그대로 받아들이면 이후 "$F_n = \pi n^2 k_BT\ln - 2k_BT\ln$"에서 임계조건이 $\pi n^2 = 2$가 되어 정수 $n$에 대해 무의미합니다. 그런데 직후에 정의하는 $K_c = 2/(\pi n^2)$는 $K$가 살아 있어야만 나옵니다 → 내부 불일치.

**드롭인 수정** (내부에너지 = 온도 독립임을 드러내는 형태):
```latex
F_n = \left[\varepsilon^{0}_{n}(a) + \pi K n^2 k_BT\ln\!\left(\frac{L}{a}\right)\right] - 2 k_BT \ln\!\left(\frac{L}{a}\right)
    = \left[\varepsilon^{0}_{n}(a) + \pi n^2 J\ln\!\left(\frac{L}{a}\right)\right] - 2 k_BT \ln\!\left(\frac{L}{a}\right)
```
그리고 근사 자유에너지도:
```latex
F_n \simeq (\pi K n^2 - 2)\, k_BT \ln\!\left(\frac{L}{a}\right)
```
로 쓰면 부호 반전 조건 $\pi K n^2 - 2 = 0 \Rightarrow K_c = 2/(\pi n^2)$가 곧바로 따라 나오고, $n=1$에서 $K_c=2/\pi$가 일관되게 나옵니다.

### 3.3 [P1] 와동 상호작용 — factor-of-2 합 규약 불일치

두 곳에서 상호작용 항을 씁니다.

(A) 유도 결과:
$$
\beta H = \frac{K}{2}\int (\nabla\phi)^2 \;-\;\pi K \sum_{i,j} n_i n_j \ln|\mathbf{x}_i-\mathbf{x}_j|
$$

(B) "관례적" 형태:
$$
\beta H = \frac{K}{2}\int (\nabla\phi)^2 \;-\; 4\pi^2 K \sum_{i,j} n_i n_j\, C(\mathbf{x}_i-\mathbf{x}_j) + \sum_i \beta\varepsilon^0_{n_i},\qquad C = \frac{\ln|\mathbf{x}_i-\mathbf{x}_j|}{2\pi}
$$

(B)를 풀면 $-4\pi^2 K\cdot\dfrac{1}{2\pi}\sum n_i n_j\ln = -2\pi K\sum n_i n_j\ln$. (A)는 $-\pi K\sum n_i n_j\ln$. **두 식이 같은 기호 $\sum_{i,j}$를 쓰면서 계수가 2배 차이납니다.**

물리적 검산으로 어느 규약이 맞는지 고정할 수 있습니다. 와동–반와동 쌍($n=+1,-1$, 거리 $d$)의 에너지는 표준적으로
$$
\beta E_{\text{pair}} = 2\pi K \ln(d/a) + 2\beta\varepsilon_c.
$$

- (A)에서 $\sum_{i,j}$를 **모든 순서쌍**($\sum_i\sum_j$, 대각선 = 자기에너지)으로 보면, 비대각 기여는 $(i,j)+(j,i) = 2 n_1 n_2\ln d = -2\ln d$, 따라서 $-\pi K\cdot(-2\ln d) = +2\pi K\ln d$ ✓ (쌍 에너지와 일치).
- (B)를 **동일하게 모든 순서쌍**으로 보면 $-2\pi K\cdot(-2\ln d) = +4\pi K\ln d$ ✗ (2배 과다).

결론: (A)는 순서쌍 합, (B)는 **비순서쌍 합**($\sum_{i<j}$)이어야 각각 옳습니다. 즉 오류라기보다 **동일 기호로 다른 규약을 쓴 표기 불일치**이며, 재유도하는 사람을 반드시 헷갈리게 합니다. 규약을 하나로 통일하기를 권합니다. 예를 들어 비순서쌍 $\sum_{i<j}$로 통일하면:
```latex
\beta H = \frac{K}{2}\int d^2x\,(\nabla\phi)^2 \;-\; 2\pi K \sum_{i<j} n_i n_j \ln\frac{|\mathbf{x}_i-\mathbf{x}_j|}{a} \;+\; \sum_i \beta\varepsilon^{0}_{n_i}
```
(관례적 형태로 쓰고 싶으면 $-4\pi^2K\sum_{i<j}n_in_j C$로 두고 "$\sum_{i<j}$"를 명시.)

> 참고: (B)의 $4\pi^2 K$ 계수는 와동 "전하"를 순환량 $q_i = 2\pi n_i$로 정의하고 2D 쿨롱 퍼텐셜 $C=\ln/2\pi$로 상호작용시키는 관례에서 자연스럽게 나옵니다($q_i q_j = 4\pi^2 n_i n_j$). 이 정의를 한 줄 적어 주면 계수의 출처가 분명해집니다.

### 3.4 [P1] 부호 오타 (부분적분)

원문:
$$
\int (\nabla\psi)(\nabla\psi) = -\int \psi\nabla^2\psi = \int \Big[\sum n_i\ln\Big]\Big[2\pi\sum n_j\delta\Big] = -2\pi\sum n_i n_j\ln|\mathbf{x}_i-\mathbf{x}_j|
$$

중간 항 $\int[\sum n_i\ln][2\pi\sum n_j\delta]$에서 **마이너스 부호가 빠졌습니다** ($-\int\psi\nabla^2\psi$이므로). 최종 결과의 부호는 맞으므로 중간 항만 $-\int[\cdots][\cdots]$로 고치면 됩니다.

---

## 4. 표기·정밀도 (P1/P2)

### 4.1 [P1] 감음수 vs 스커미온수 — 호모토피군 혼동

원문:
> "(It is sometimes called skyrmion number for $S^2$.)"

와동의 감음수(winding number)는 사상 $S^1\to S^1$의 불변량으로 $\pi_1(S^1)=\mathbb{Z}$에 속합니다. 스커미온수는 사상 $S^2\to S^2$의 불변량으로 $\pi_2(S^2)=\mathbb{Z}$에 속합니다. **둘은 서로 다른 호모토피군의 원소**이며 동일시하면 안 됩니다. 이 괄호는 삭제하거나, "감음수의 $\pi_2(S^2)$ 유사물이 스커미온수"라고 명시적으로 구별해 주십시오.

관련: "If one traces the direction of a spin ... one should count the number of spins in the same direction"도 부정확합니다. 감음수는 "같은 방향 스핀의 개수"가 아니라 **경로를 한 바퀴 돌 때 스핀 벡터가 $2\pi$의 몇 배로 회전하는지**를 셉니다. 다음처럼:
> ... counts how many times the spin vector rotates by $2\pi$ as one traverses the loop once.

### 4.2 [P1] 확률류(초유체 흐름) 표기

원문:
> "there is a corresponding probability current (that is proportional to $\psi^{*}\partial_i\phi$)"

$\psi = |\psi|e^{i\phi}$에 대해 확률류/초유체류는
$$
j_i \propto \mathrm{Im}(\psi^{*}\partial_i\psi) = |\psi|^2\,\partial_i\phi.
$$
$\psi^{*}\partial_i\phi$는 차원/의미가 맞지 않습니다($\psi^*$는 복소 진폭, $\partial_i\phi$는 실수 위상 기울기). $|\psi|^2\partial_i\phi$ 또는 $\mathrm{Im}(\psi^*\partial_i\psi)$로 고쳐 주십시오.

### 4.3 [P2] 2D 정전기 그린함수 계수

원문:
> "the solution of the equation ($\nabla^2 V = \frac{q}{4\pi\varepsilon}\delta(x-x_i)$) was $V = \frac{q}{4\pi\varepsilon}\ln|\mathbf{x}-\mathbf{x}_i|$"

2D 라플라시안의 그린함수는 $\nabla^2\!\left(\dfrac{1}{2\pi}\ln|\mathbf{x}|\right) = \delta^2(\mathbf{x})$이므로, $\nabla^2 V = s\,\delta$의 해는 $V = \dfrac{s}{2\pi}\ln|\mathbf{x}|$입니다. 원문은 **$1/2\pi$ 인자를 빠뜨렸고**, 또 "$4\pi\varepsilon$"은 3D SI 표기의 잔재라 2D 맥락에서 어색합니다. 다행히 최종 $\psi(x)=\sum_i n_i\ln|\mathbf{x}-\mathbf{x}_i|$는 $\nabla^2\psi = 2\pi\sum n_i\delta$와 정확히 일관되므로(즉 $\nabla^2\ln|\mathbf{x}|=2\pi\delta$ 사용) **결과는 맞습니다.** 중간 정전기 비유만 정리하면 됩니다:
```latex
\nabla^2 G(\mathbf{x}) = \delta^2(\mathbf{x}) \quad\Longrightarrow\quad G(\mathbf{x}) = \frac{1}{2\pi}\ln|\mathbf{x}|
```

### 4.4 [P2] 엔트로피 서술의 위치 혼동

원문:
> "At low temperatures, the Boltzmann factor is small and the probability to make a vortex is small. Although there is finite energy, the system wants to make many vortices because of the large entropy that leads to the disorder."

"At low temperatures"로 시작한 뒤 "the system wants to make many vortices because of the large entropy"가 이어져 **저온에서 와동이 증식한다**는 인상을 줍니다. 실제로는 반대입니다: 저온에서는 에너지 비용이 우세해 와동이 적고, **온도가 올라가 $TS$ 항이 에너지 비용을 능가할 때** 임계온도 위에서 증식합니다. 문장을 온도 순서대로 재배열하기를 권합니다.

### 4.5 [P2] 고온 전개 서술

원문:
> "The leading term must include the multiplication of cosine functions with an even number of $\theta_i$ ..."

정확한 조건은 "짝수 개의 $\theta_i$"가 아니라 **사이트 0과 $r$을 잇는 연결된 결합(bond) 사슬**이 존재해야 한다는 것입니다. 각 결합은 인자 $K$, 각 중간 사이트의 각도 적분은 항등식
$$
\int_0^{2\pi}\frac{d\theta_k}{2\pi}\cos(\theta_i-\theta_k)\cos(\theta_k-\theta_j) = \frac12\cos(\theta_i-\theta_j)
$$
에 의해 인자 $1/2$를 줍니다. 길이 $r$의 최단 경로에서 $K^r/2^r=(K/2)^r$이 나오고(검산 완료 ✓), $\xi^{-1}=\ln(2/K)$입니다. 서술을 "a connected chain of activated bonds linking sites $0$ and $r$"로 바꾸면 정확해집니다.

### 4.6 소소한 표기
- 식 (2): $\displaystyle\prod_i\int_0^{2\pi}\frac{d\theta}{2\pi}$ → $\dfrac{d\theta_i}{2\pi}$ (적분변수 첨자).
- "vortex and anti-vortex, which are the **global** excitations" → **topological** excitations (스핀파 = 국소/섭동적, 와동 = 위상적/비섭동적 대비).
- 가우시안 항등식 $\langle e^{i\alpha}\rangle \sim e^{-\frac12\langle\alpha^2\rangle}$은 $\langle\alpha\rangle=0$인 가우시안에 대해 **등호**로 성립합니다("$\sim$"보다 "$=$"가 정확).

---

## 5. 인용/출처 확인

### 5.1 [P1] Mermin 리뷰 — 이름 보정

원문 "D. Mermin"은 부정확합니다. 저자명은 **N. David Mermin** (N. D. Mermin)입니다. 완전한 서지:

> N. D. Mermin, "The topological theory of defects in ordered media," *Rev. Mod. Phys.* **51**, 591–648 (1979). DOI: 10.1103/RevModPhys.51.591

(검증: APS/ADS/Semantic Scholar 모두 "N. David Mermin", RMP 51, 591 (1979)로 일치.)

### 5.2 [P1] Resnick 실험 — 시스템 설명 + $V\propto I^3$의 이론 출처

원문:
> "Resnick, *et al*. measured the resistance of **2D superconductors** across the BKT transition and discovered that $V \propto I^3$ at $T_{BKT}$ [PRL 47, 1542 (1981)]."

서지 자체는 정확합니다:
> D. J. Resnick, J. C. Garland, J. T. Boyd, S. Shoemaker, R. S. Newrock, "Kosterlitz–Thouless Transition in Proximity-Coupled Superconducting Arrays," *Phys. Rev. Lett.* **47**, 1542–1545 (1981).

두 가지 보정 권장:

1. **시스템 정밀화**: 이 실험은 연속 박막 "2D superconductor"가 아니라 **근접 결합(proximity-coupled) Pb–Sn 조셉슨 접합의 삼각 배열**입니다(초록: "triangular planar arrays of proximity-coupled Pb-Sn junctions"). 조셉슨 배열은 2D 초전도의 한 실현이지만, "2D superconductors"라고만 적으면 오해의 소지가 있습니다. "a 2D Josephson-junction array"로 명시하는 편이 정확합니다.

2. **$V\propto I^3$의 출처**: 임계온도에서 $V\propto I^{\alpha(T)}$의 지수가 $\alpha(T_{BKT})=3$으로 뛰는 것은 **Halperin–Nelson / Ambegaokar–Halperin–Nelson–Siggia(AHNS)의 이론적 예측**입니다(초유체 밀도의 보편적 도약 = "Nelson jump"의 결과). Resnick 실험은 이 예측과 **부합하는 비선형 I–V**를 관측했습니다. 따라서 "discovered that $V\propto I^3$"는 뉘앙스가 어긋납니다. 다음을 추가 인용하기를 권합니다:
   - B. I. Halperin, D. R. Nelson, *J. Low Temp. Phys.* **36**, 599 (1979).
   - V. Ambegaokar, B. I. Halperin, D. R. Nelson, E. D. Siggia, *Phys. Rev. B* **21**, 1806 (1980).

   (검증: 다수의 2D 초전도 논문이 $V\propto I^{\alpha(T)}$, $\alpha(T_{BKT})=3$을 "Halperin–Nelson formula"의 표준 BKT 신호로 인용. 저항은 $R\sim\exp[-b/(T-T_{BKT})^{1/2}]$.)

**드롭인 수정:**
> Experimentally, Resnick *et al.* measured the resistive transition of a 2D array of proximity-coupled Josephson junctions and observed nonlinear $I$–$V$ characteristics consistent with the Kosterlitz–Thouless picture; in particular the exponent in $V\propto I^{\alpha(T)}$ approaches the universal value $\alpha(T_{BKT})=3$ predicted by Halperin–Nelson/AHNS [PRL **47**, 1542 (1981); J. Low Temp. Phys. **36**, 599 (1979)].

### 5.3 [P1] 누락된 1차 문헌

유도가 Kardar식 쿨롱 가스 사상을 따르므로, 최소한 다음을 참고문헌에 넣기를 권합니다(현재 글엔 Resnick/Mermin만 있음):
- V. L. Berezinskii, *Sov. Phys. JETP* **32**, 493 (1971); **34**, 610 (1972).
- J. M. Kosterlitz, D. J. Thouless, *J. Phys. C* **6**, 1181 (1973).
- M. Kardar, *Statistical Physics of Fields*, Ch. 8 (교재 흐름과 표기가 이 글과 가장 가까움).
- (보편적 도약) D. R. Nelson, J. M. Kosterlitz, *Phys. Rev. Lett.* **39**, 1201 (1977).

---

## 6. 렌더링 (MathJax / kramdown) — MathJax 정확성 관점

MathJax/kramdown 렌더링에 신경 쓰시는 만큼 몇 군데 짚습니다.

- `\textit{giant vortex}`: 이 부분이 **수식 밖 본문**에 있습니다. kramdown 본문에서 `\textit{}`는 TeX 매크로가 아니라 그냥 리터럴 텍스트로 새어 나옵니다. 마크다운 강조 `*giant vortex*`로 바꾸십시오.
- `\psi^{\*}`, `S^{1}\_{a}`, `S^{1}\_{b}`의 `\*`, `\_`: 이는 kramdown이 `*`/`_`를 강조로 먹는 것을 막으려는 **마크다운 이스케이프**로 보입니다. 하지만 `$...$` 안으로 들어가면 MathJax가 `\*`, `\_`를 받습니다. `\*`는 TeX에서 의도한 위첨자 별표가 아니라 이산 곱셈 기호로 처리될 수 있습니다. 복소켤레는 `\psi^{*}` 또는 `\psi^{\ast}`, 아래첨자는 `S^{1}_{a}`처럼 이스케이프 없이 쓰는 편이 안전합니다. (인라인 수식에서 `_`가 강조로 먹히면, kramdown의 `$$...$$` 블록으로 바꾸거나 MathJax 인라인 설정을 확인하십시오.)
- `\begin{equation}`를 `$$...$$` 안에 중첩: MathJax + kramdown에서 이중 처리/번호 매김이 꼬이는 전형적 지점입니다. 렌더 결과에서 식 번호가 어긋나지 않는지 확인하십시오(안 되면 `equation` 대신 `aligned`/무번호 사용 또는 MathJax `tags: 'ams'` 설정 점검).

이 항목들은 물리와 무관하지만, "MathJax 렌더링 정확성"이 이 시리즈의 목표라 포함합니다.

---

## 7. 드롭인 수정 블록 모음 (복붙용)

**(a) 저온 전개**
```latex
\beta H = -K\sum_{\braket{i,j}}\cos{(\theta_i-\theta_j)}
       \sim -K\sum_{\braket{i,j}}\left[1-\frac{1}{2}(\theta_i-\theta_j)^2\right]
       = \frac{K}{2}\sum_{\braket{i,j}}(\theta_i-\theta_j)^2 + \text{const.}
```

**(b) 자유에너지 (내부에너지 온도독립 명시)**
```latex
F_n = \left[\varepsilon^{0}_{n}(a) + \pi n^2 J\ln\!\left(\frac{L}{a}\right)\right] - 2 k_BT \ln\!\left(\frac{L}{a}\right)
    \;\simeq\; (\pi K n^2 - 2)\,k_BT\ln\!\left(\frac{L}{a}\right)
\quad\Rightarrow\quad K_c = \frac{2}{\pi n^2}
```

**(c) 와동 상호작용 (합 규약 통일)**
```latex
\beta H = \frac{K}{2}\int d^2x\,(\nabla\phi)^2
        \;-\; 2\pi K \sum_{i<j} n_i n_j \ln\frac{|\mathbf{x}_i-\mathbf{x}_j|}{a}
        \;+\; \sum_i \beta\varepsilon^{0}_{n_i}
```

**(d) 확률류**
```latex
j_i \propto \mathrm{Im}\big(\psi^{*}\partial_i\psi\big) = |\psi|^2\,\partial_i\phi
```

**(e) 2D 그린함수**
```latex
\nabla^2 G(\mathbf{x}) = \delta^2(\mathbf{x}) \;\Longrightarrow\; G(\mathbf{x}) = \frac{1}{2\pi}\ln|\mathbf{x}|,\qquad
\psi(\mathbf{x}) = \sum_i n_i \ln|\mathbf{x}-\mathbf{x}_i|
```

---

## 8. 비판적 사고를 위한 질문 (계층별)

### [Level 1 — 이해 확인]
- 저온 상관함수가 $\langle\mathbf{S}_i\cdot\mathbf{S}_j\rangle = (r/a)^{-1/(2\pi K)}$로 나왔습니다. 여기서 $\braket{(\theta_i-\theta_j)^2}=\frac{1}{\pi K}\ln(r/a)$의 **$1/\pi K$ 계수**가 어디서 오는지(운동량 공간 등분배 $\braket{|\theta_k|^2}=1/(Kk^2)$ + 2D 적분 $\int\frac{d^2k}{(2\pi)^2}\frac{1-\cos k\cdot r}{k^2}=\frac{1}{2\pi}\ln(r/a)$) 스스로 재유도해 보시면, 지수 $\eta$의 계수 검산이 됩니다.
- 단일 와동 자유에너지에서 엔트로피 항 $-2k_BT\ln(L/a)$의 "2"는 어디서 오나요? (와동 핵심의 위치 자유도 $\sim (L/a)^2$.) 계가 3D였다면 이 지수와 로그 에너지 항의 경쟁은 어떻게 달라질까요?

### [Level 2 — 가정 도전]
- 단일 와동 논변은 **와동 간 상호작용을 무시**합니다. 그 결과 $K_c=2/\pi\approx0.64$가 나오지만, 상호작용을 포함한 RG의 참값은 $K_c\approx?$ 다음 편에서 다룰 재규격화가 이 값을 **어느 방향으로** 밀어낼지(속박쌍의 유전 가림 → 유효 $K$ 감소) 예상해 보십시오.
- $T_{BKT}$ 정확히 위에서 상관길이가 **거듭제곱이 아니라 본질적 특이성** $\xi\sim\exp[b/(T-T_{BKT})^{1/2}]$로 발산합니다. 이 "무한 차수" 성질이 왜 비열에 **발산 없는 완만한 봉우리**(그것도 $T_{BKT}$보다 약간 위)를 주는지, 자유에너지의 어떤 해석성과 연결되는지 설명해 보십시오.

### [Level 3 — 구조/일반화]
- 쿨롱 가스 사상에서 와동 "전하 중성 조건" $\sum_i n_i = 0$이 왜 유한 에너지를 위해 필요한지(중성이 아니면 총 에너지가 $\ln L$로 발산) 보이십시오. 이것이 위 §3.3에서 자기에너지/상호작용 분리와 어떻게 맞물리나요?
- BKT의 **보편적 도약**: $T_{BKT}$에서 유효 강성 $K_R$이 정확히 $2/\pi$로 뛴다는 것과, 실험의 $\alpha(T_{BKT})=3$이 같은 물리(Nelson jump)의 두 얼굴임을 연결해 보십시오. 이 지점이 Resnick 인용을 "관측"이 아니라 "이론 예측과의 부합"으로 정정해야 하는 이유입니다.

### [Level 4 — 교차 영역 / 열린 문제] **(⚠️ Advanced — Graduate/Research Level)**
- 사가 소재/자기 BKT: 최근 스핀-큐빗 잡음 분광(예: 2D 자성체의 자기 BKT 관측)이 초전도 I–V 대신 **자기 요동 스펙트럼**으로 같은 전이를 보고 있습니다. 당신의 연구 맥락(2D vdW 자성체, magnon)에서 와동-반와동 unbinding이 magnon 스펙트럼/감쇠에 남기는 신호는 무엇일지, 그리고 그것이 TB2J류 에너지 사상에서 잡히는지 생각해 볼 만합니다.

---

## 부록 A. 글 말미의 "열린 질문"에 대한 짧은 코멘트 (⚠️ Advanced, 본 리뷰 범위 밖)

이 부분들은 저자 스스로 "(Is it correct?)"로 표시한 연구 노트라 가볍게만 답합니다. 확실치 않은 부분은 명시합니다.

- **"스커미온이 왜 위상 전하를 갖는가"**: 스커미온수는 $\pi_2(S^2)$의 정수 불변량(사상 밀도 $\frac{1}{4\pi}\mathbf{n}\cdot(\partial_x\mathbf{n}\times\partial_y\mathbf{n})$의 적분)이라, 연속 변형으로 바꿀 수 없는 보존량이라는 의미에서 "전하"입니다. **와동 감음수($\pi_1$)와는 다른 불변량**이라는 점을 §4.1과 연결하십시오.
- **"스커미온 속도를 무엇이 정하는가 / 작을수록 빠른가?"**: 강체 스커미온 운동은 **Thiele 방정식**으로 기술되며, 자이로결합(Magnus 항)·소산 텐서·구동 전류의 상호작용으로 속도와 **스커미온 홀 각**이 정해집니다. "작을수록 빠르다"는 **구동 메커니즘(STT vs SOT)과 소산에 따라 달라지며 일반적으로 단정할 수 없습니다.** 이 항목은 "확실치 않음"으로 두는 것이 정확합니다.
- **Gilbert 감쇠 텐서 공식** ($\alpha^{\mu\nu}\propto \int\!\int(-\partial_\varepsilon f)\,\mathrm{Tr}[\Gamma^\mu\,\mathrm{Im}G\,(\Gamma^\nu)^\dagger\,\mathrm{Im}G]$, $\Gamma^\mu=[\sigma^\mu,H_{\rm SO}]$): 이는 **Kamberský의 토크-상관(torque-correlation) 모형**의 구조와 일치합니다. 다만 (i) 전역 계수, (ii) 2D 소재라면 $d^3k$가 아니라 $d^2k$여야 하는 점, (iii) $\braket{\mathbf{S}}$ 대신 자기 모멘트/포화 자화가 들어가야 하는지, (iv) spin/site 자유도가 $G$에 암묵적이라는 저자 본인의 경고는 실제 수치 구현에서 결정적입니다. **정확한 전역 인자와 규격화는 원논문(예: Mankovsky–Ebert 리뷰; Gilmore–Stiles PRL 2007)과 대조**하여 확정하시길 권합니다. 저는 이 공식의 전역 상수를 기억만으로 보증하지 않겠습니다.

이 부록은 BKT 본문 리뷰의 범위를 벗어나므로 여기까지만 답합니다.

---

## 9. 참고문헌 (검증 출처)

본 리뷰에서 인용·검증에 사용한 출처:

1. **Resnick et al. (검증)** — D. J. Resnick, J. C. Garland, J. T. Boyd, S. Shoemaker, R. S. Newrock, "Kosterlitz–Thouless Transition in Proximity-Coupled Superconducting Arrays," *Phys. Rev. Lett.* **47**, 1542–1545 (1981). APS 원문/ADS bibcode `1981PhRvL..47.1542R`로 저자·페이지·시스템("triangular planar arrays of proximity-coupled Pb-Sn junctions") 확인.
2. **Mermin (검증)** — N. D. Mermin, "The topological theory of defects in ordered media," *Rev. Mod. Phys.* **51**, 591–648 (1979). APS/ADS/Semantic Scholar로 저자명 "N. David Mermin" 및 서지 확인.
3. **Halperin–Nelson / AHNS (검증)** — $V\propto I^{\alpha(T)}$, $\alpha(T_{BKT})=3$ 및 $R\sim\exp[-b/(T-T_{BKT})^{1/2}]$가 다수 2D 초전도 문헌에서 "Halperin–Nelson formula"의 표준 BKT 신호로 인용됨을 확인 (예: arXiv:2501.08687, arXiv:1309.5910, arXiv:1805.07560). 원 이론: Halperin & Nelson, *J. Low Temp. Phys.* **36**, 599 (1979); Ambegaokar, Halperin, Nelson, Siggia, *Phys. Rev. B* **21**, 1806 (1980).

권장 추가 문헌(교재/1차 문헌, 본문에 넣을 것):
4. V. L. Berezinskii, *Sov. Phys. JETP* **32**, 493 (1971).
5. J. M. Kosterlitz, D. J. Thouless, *J. Phys. C* **6**, 1181 (1973).
6. D. R. Nelson, J. M. Kosterlitz, *Phys. Rev. Lett.* **39**, 1201 (1977) — 보편적 도약.
7. M. Kardar, *Statistical Physics of Fields*, Cambridge Univ. Press, Ch. 8 — 본 글의 유도 흐름/표기와 가장 근접.

*자기 검산(수식): $\eta=1/(2\pi K)$, $(K/2)^r=e^{-r/\xi}$, 와동쌍 에너지 $2\pi K\ln(d/a)$, $K_c=2/\pi$ 는 별도 문헌 없이 직접 계산으로 확인함(계산 과정은 §3, §4.5에 포함).*