---
title: Tensor Analysis
date: 2026-05-29 09:00:00 +0900
categories:
  - Physics
  - Symmetry
tags:
  - mathematical-physics
  - symmetry
  - physics
math: true
toc: true
---

## Jacobian

{: .prompt-tip}
> **Q. Jacobian은 무엇이며 왜 필요한가?**
> 
> Jacobian은 보존량이 좌표계에 무관하게 동일한 값을 주기 위해 필요하다.

$q\rightarrow q'$로 좌표계를 변환할때 $q$ 좌표계에서의 체적/면적 등을 $q'$ 좌표계에서 미소 변위 $d\mathbf{s}(q'_i)/dq'_i$를 적절히 스케일함으로써 쉽게 구할 수 있다. 그리고 그 스케일링 값은 $dq_i/dq'_i$ matrix의 determinant로 정의된다. 이 비율은 아래 서로 다른 좌표계에서의 basis vectors의 곱으로부터 유도될 수 있다:

$$ \begin{equation} \mathbf{e}'_{i}\cdot\mathbf{e}_{j} \end{equation} $$

먼저 위치벡터 $\mathbf{r} = q^{j}\mathbf{e}_{j}$을 이용해 서로 다른 두 좌표계의 위치를 각각 표현한다: $q^{j} = \mathbf{e}_j \cdot \mathbf{r}$, $q'^{i} = \mathbf{e}'_{i} \cdot \mathbf{r}$. 이때, $\mathbf{r} = q^{j}\mathbf{e}_{j}$이므로 다음을 얻는다:

$$ \begin{equation} q'^{i} = \mathbf{e}'_{i} \cdot \mathbf{r} = (\mathbf{e}'_{i}\cdot \mathbf{e}_{j}) q^{j} \end{equation} $$

양변을 $q^{j}$에 대해서 편미분을 하면 아래와 같은 식을 구한다:

$$ \begin{equation} \frac{\partial q'^{i}}{\partial q^{j}} = \mathbf{e}'_{i}\cdot \mathbf{e}_{j} \end{equation} $$

{: .prompt-tip}
> **Q. 왜 Jacobian은 determinant로 주어지는가?**
>
>가장 직관적인 답은 determinant는 곱으로 주어지고, Jacobian이 서로 다른 좌표계에서 체적/면적의 스케일링 값이므로 곱으로 연산하는 형식이 자연스럽기 때문이다.

# Tensor

텐서는 선형대수에서 다루는 스칼라, 벡터, 그리고 행렬들을 일반화한 개념이다. 텐서를 특징짓는 양들로는 rank, dimension, 그리고 co/contra-variance가 있다. 먼저, 텐서는 rank $n$만큼의 인덱스로 표현되며 $n = 2$인 경우 $T_{ij}$와 같이 나타낼 수 있다. 이 텐서가 만약 dimension $d$에 정의된 텐서라면 총 원소들의 개수는 $d^n$으로 주어진다. 예를 들어 $T_{ij}$가 $3$차원 텐서라면 $9$개의 원소를 가지고 있다. 텐서의 component는 좌표 변환시 정해진 규칙에 따라 변환되며, 그 규칙에는 covariant와 contravariant 두가지가 있다.

## Covariant and Contravariant Tensors

만약 Cartesian coordiantes system (orthonormal system)에서 좌표 변환을 할 경우에는 이 두 개념사이에 차이점이 없다. 하지만 텐서를 통해 궁극적으로 다루고자하는 시스템은 Non-Cartesian하기에 이 개념을 적용해야한다. 두 개념을 크게 특징짓는 기준은 어떤 벡터 $\mathbf{A}$가 변환될 때 그 기저벡터가 Inverse Jacobian으로 변하냐(contravariant) 아니면 Jacobian으로 변하냐(covariant)이다. 먼저, $\mathbf{A}$가 contravariant 벡터라면 $\mathbf{A} = A^{i}\mathbf{e}_{i}$로 주어진다. 이때 기저벡터는 변환시 chain rule에 의해 아래와 같이 쓰여진다:

$$ \begin{equation} (\mathbf{e}')_{i} = \frac{\partial\mathbf{r}}{\partial q'^{i}}\hat{\mathbf{r}} = \frac{\partial q^{j}}{\partial q'^{i}}\frac{\partial\mathbf{r}}{\partial q^{j}}\hat{\mathbf{r}} = \frac{\partial q^{j}}{\partial q'^{i}} \mathbf{e}_{j} \end{equation} $$

여기서 기저벡터가 Inverse Jacobian으로 변한다는 것을 알 수 있다. 이때, 벡터의 성분은 그와 반대로 Jacobian으로 변해서 같은 벡터 $\mathbf{A}$를 만들어야한다.

또한, 중요한 차이점으로 contravariant 텐서의 인덱스는 항상 위에 위치해있고, 반대로 covariant 텐서의 인덱스는 아래에 위치해있다. 또한, contravariant 텐서는 contravariant 텐서끼리 합이 가능하다는 점이 있다. 아래는 각 텐서의 벡터 성분의 변환 규칙을 정리해두었다:

- **Components in contravariant tensors**

$$ \begin{equation} (A')^{i} = \frac{\partial q'^{i}}{\partial q^{j}} A^{j} \end{equation} $$

- **Components in covariant tensors**

$$ \begin{equation} (A')_{i} = \frac{\partial q^{j}}{\partial q'^{i}} A_{j} \end{equation} $$

몇몇 레퍼런스는 그림과 함께 직관적인 설명을 덧붙인다: “contravariant component는 다른 축에 평행하게 내리며, 이에 따라 기저벡터의 방향은 내린 축에 평행하게 된다. 반대로, covariant component는 자기 자신 축을 제외한 나머지 다른 축들과 수직하게 만든다.”

## Isotropic tensors

임의의 직교 변환(inner product를 보존하는 변환) $S$에 대해서 텐서 $T$가 변환된 텐서 $T'$와 같을때 텐서 $T$를 isotropic tensor라고 한다. 예를 들어, 2차원 isotropic tensor에는 $\delta^{i}_{j}$가 있다. 이때 주의해야할 점은 텐서는 좌표를 변환하여 그 성분 값이 달라도 같은 텐서를 나타낼 수 있기에 변환이 어떤 변환인지 명확하게 할 필요가 있다. 또한, 대칭성에 의해서 보존되는 텐서들도 있기에 임의의 "모든" 변환에 대해서 불변인지 조건을 주어야한다.

{: .prompt-tip}
> **Q. Isotropic tensor (회전을 해도 변환된 텐서가 원래 텐서와 동일하게 되는 텐서)가 있는데, isotropic vector는 없는가?**
>
벡터는 특정한 방향을 가리키는데, 변환 후 제자리로 오는 벡터는 오로지 항등 변환에 의해서만 가능하기 때문이다.

{: .prompt-tip}
>**Q. 그렇다면 서로 다른 종류의 텐서끼리 곱은 불가능한가?**
>
두 텐서 간의 직접곱(direct product)는 새로운 고차원 rank의 텐서를 만드는 것을 가능케 한다. 예를 들면 아래와 같다:
>
>$$ \begin{equation} C^{ij}_{klm} = A^{i}_{k} B^{j}_{lm} \end{equation} $$

## Pseudotensors

변환 $S$ (proper rotation)에 대해서 부호가 바뀌지 않는 벡터는 vector 혹은 polar vector라고 불린다. 그리고 반전, 거울 대칭 등이 포함된 $S$ (improper rotation)에 대해서 부호가 바뀌는 벡터는 pseudovector 혹은 axial vector라고 한다. 이를 일반화하여 변환 $S$에 대해서 아래 조건을 만족하는 텐서는 tensor이고,

$$ \begin{equation} A' = SA \end{equation} $$

아래 조건을 만족하는 텐서를 pseudotensor라고 한다:

$$ \begin{equation} A' = \det(S) SA \end{equation} $$

$\varepsilon_{ijk}$는 3차원 텐서 중 isotropic tensor이다[Arfken 예제 4.2.1 참고]. 하지만 반전 대칭을 포함하는 $O(3)$에 대해서는 $-1$이 따르기 때문에 isotropic pseudotensor라고 한다. 한 가지 중요한 점은 Pseudotensor와 tensor간의 직접곱은 pseudotensor를 주고, pseudotensor와 pseudotensor간의 직접곱은 tensor를 준다는 것이다.

$$ \begin{equation} P\otimes T = P,~P\otimes P = T \end{equation} $$

## Metric tensor

Metric tensor $g_{ij} \equiv \mathbf{e}_{i}\cdot\mathbf{e}_{j}$는 covariant basis vector $\mathbf{e}_{i}$와 position $q^{i}$이 $\mathbf{e}_{j}$와 $q^{j}$로 변함에 따라 미소변위(displacement)를 정의할때 등장한다:

$$ \begin{align} ds^{2} &= (\mathbf{e}_{i}dq^{i})\cdot(\mathbf{e}_{j}dq^{j}) = (\mathbf{e}_{i}\cdot\mathbf{e}_{j}) dq^{i}dq^{j} \nonumber \\ &= g_{ij}dq^{i}dq^{j} \end{align} $$

1. Metric tensor는 covariant form이고 얼마든지 contravariant form도 쓸 수 있다; $g^{ij}$. 이들 사이에 아래 관계식이 만족한다:

$$ \begin{equation} g^{ik}g_{kj} = g_{jk}g^{ki} = \delta^{i}_{j} \end{equation} $$

1. Metric tensor는 임의의 co/contravariant tensor를 contra/covariant tensor로 바꿀 수 있다:

$$ \begin{equation} g^{ij}F_{j} = F^{i},~g_{ij}F^{j} = F_{i} \end{equation} $$

이는 qutioent rule (LHS의 텐서 인덱스가 summation convention에 의해 사라지는 것이 있다면 RHS의 텐서 인덱스도 그에 따라 똑같이 따라가야한다는 규칙)에 의해서 보일 수 있다.

## Covariant Derivatives

Metric tensor는 한 점에서 벡터들 간의 길이나 내적을 계산하여 비교를 하는 도구이다. 반면, 서로 다른 점에서 벡터들의 변화율을 알아야할 때가 있다. 이는 contravariant vector component $A^{k}$에 대해서 단순히 변화율을 아래와 같이 계산하면 될 것 같다:

$$ \begin{equation} \frac{\partial (A')^{i}}{\partial q^{j}} = \frac{\partial A^{k}}{\partial q^{j}} \frac{\partial q'^{i}}{\partial q^{k}} + A^{k} \frac{\partial^2 q'^{i}}{\partial q^{k}q^{j}} \end{equation} $$

{: .prompt-tip}
> **Q. 단순히 second derivative가 있다는 것이 왜 2nd rank tensor와 변환규칙과 다르다는 것인가?**
>
> 이 질문은 위 값이 텐서가 왜 아닌지에 대한 질문으로 바뀔 수 있다. 텐서는 **Jacobian 1개씩**만 곱해져서 변해야한다. 하지만 식의 두번째 항에는 2계 미분으로 쓰여져 있는 항이 존재한다. 따라서, 벡터 성분에 대한 미분은 텐서 변환 법칙을 만족하지 않는다.
>
>이는 곧 아래 Christoffel symbol의 도입의 동기에 대한 실마리를 준다. 실제로 Christoffel symbol은 텐서 기호로 쓰여진 것과 달리 텐서 변환 법칙을 만족하지 않아 텐서가 아니다. 그러므로 covariant derivative에서 Christoffel symbol은 비텐서적인 항들을 상쇄시키기 위해 등장한다.

위 식이 텐서가 아닌지 간단한 예를 들어서 설명할 수 있다. Carteisan coordinates $(x, y)$에서 $A^{x} = 1$, $A^{y} = 0$라 하자. 즉, $\mathbf{A}$는 $x$축의 unit vector이다. 이는 어떤 선형 변환($q \rightarrow q'$)에 대해서 항상$\partial (A')^{i} / \partial q^{j} = 0$를 준다. 하지만 polar coordinates $(r, \theta)$에서는 $A^{r} = \cos\theta$, $A^{\theta} = -\sin\theta/r$로 주어진다. 일반적으로 $\partial q'^{i}/\partial q^{k} \neq 0$ 되지 않는 이상 $\partial (A')^{i} / \partial q^{j} = 0$를 만족하지 않는다. 따라서 위 식은 좌표변환(텐서의 변환이 아님)에 따라 다른 값을 주므로 텐서가 아니다.

Vector component의 변화율을 보는 대신 contravariant vector $\mathbf{A} = A^{k}\mathbf{e}_{k}$의 변화율을 따져본다. 이것의 $q^{j}$에 대한 변화율은 아래와 같이 기술된다:

$$ \begin{equation} \frac{\partial \mathbf{A}'}{\partial q^{j}} = \frac{\partial A^{k}}{\partial q^{j}} \mathbf{e}_{k} + A^{k} \frac{\partial \mathbf{e}_{k}}{\partial q^{j}} \end{equation} $$

Basis vector는 상수가 아니고 일반적으로 좌표에 의존하는 벡터임에 주의한다. 이때 두번째 항의 $\partial \mathbf{e}_{k}/\partial q^{j}$은 $\mathbf{e}_{k}$로 표현될 수 있을 것이다. 따라서 이것을 아래와 같이 나타낼 수 있다:

$$ \begin{equation} \frac{\partial \mathbf{e}_{k}}{\partial q^{j}} = \Gamma^{\mu}_{jk}\mathbf{e}_{\mu} \end{equation} $$

여기서 $\Gamma^{\mu}_{jk}$를 **Christoffel symbol of the second kind**라고 하고 basis vector를 covariant derivative한 것을 그 basis로 전개했을 때 수반되는 “**연결 계수**”라고 해석할 수 있다. 또한, basis vector의 orthonormality condition ($\mathbf{e}_{i}\cdot\mathbf{e}^{j} = \delta^{j}_{i}$)에 의해서 $\Gamma^{\mu}_{jk}$에 대한 식으로만 쓸 수 있다:

$$ \begin{equation} \Gamma^{m}_{jk} = \mathbf{e}^{m}\cdot\frac{\partial \mathbf{e}_{k}}{\partial q^{j}} \end{equation} $$

이를 식 (16)에 대입하면 아래를 얻는다:

$$ \begin{equation} \frac{\partial \mathbf{A}'}{\partial q^{j}} = \left[\frac{\partial A^{k}}{\partial q^{j}} + A^{\mu}\Gamma^{k}_{j\mu}\right]\mathbf{e}_{k} \end{equation} $$

{: .prompt-tip}
> **Q. 왜 “contravariant” derivative는 없는 것인가?**
>
> Covariant derivative는 좌표 변환에 대해서 공변적으로 잘 변하는 미분임을 의미한다. Contrvariant derivative는 정의를 못하는 것은 아니지만 Manifold에 대한 정보(metric)가 있어야한다.

$\Gamma^{m}_{ij}$는 그 앞에 metric tensor $g_{mk}$를 위치함으로써 인덱스 $k$를 아래첨자로 내릴 수 있다: $\Gamma_{ij;k}$. 이는 **Christoffel symbol of the first kind**라 하며 아래와 같이 표현된다:

$$ \begin{align} \Gamma_{ij;k} &= g_{mk}\mathbf{e}^{m}\cdot\frac{\partial \mathbf{e}_{j}}{\partial q^{i}} \nonumber \\ &= \mathbf{e}_{k}\cdot\frac{\partial \mathbf{e}_{j}}{\partial q^{i}} \end{align} $$

마지막 식은 $g_{ij}$를 $q^{k}$에 대해서 미분하면 얻을 수 있다:

$$ \begin{align} \frac{\partial g_{ij}}{\partial q^{k}} &= \frac{\partial \mathbf{e}_{i}}{\partial q^{k}}\cdot\mathbf{e}_{j} + \mathbf{e}_{i}\cdot\frac{\partial \mathbf{e}_{j}}{\partial q^{k}} \nonumber \\ &= \Gamma_{ki;j} + \Gamma_{kj;i} \end{align} $$

$\Gamma_{ij;k}$는 $\Gamma_{ji;k}$와 같다는 대칭 조건을 만족한다(이는 second kind도 마찬가지이다.) 이를 통해 $\Gamma_{ij;k}$와 $\Gamma^{n}_{ij}$에 대한 일반 식을 쓸 수 있다:

$$ \begin{align} \Gamma_{ij;k} &= \frac{1}{2}\left[\frac{\partial g_{ik}}{\partial q^{j}} + \frac{\partial g_{jk}}{\partial q^{i}} - \frac{\partial g_{ij}}{\partial q^{k}}\right], \nonumber \\ \Gamma^{n}_{ij} &= \frac{1}{2} g^{nk} \left[\frac{\partial g_{ik}}{\partial q^{j}} + \frac{\partial g_{jk}}{\partial q^{i}} - \frac{\partial g_{ij}}{\partial q^{k}}\right] \end{align} $$

참고로, Second kind는 covariant derivative 식에 직접 들어가는 양인데 비해, first kind는 내적이나 변분 등 계산에서 등장하게 된다는 차이점이 있다.

## Tensor Derivative Operators

이 섹션에서는 벡터 미분 연산자들을 텐서 형식으로 정리하였다:

- **Gradient operator**

$$ \begin{equation} \nabla \psi = \frac{\partial \psi}{\partial q^{i}} \mathbf{e}^{i} \end{equation} $$

- **Divergence operator**

$$ \begin{equation} \nabla\cdot\mathbf{A} = \mathbf{e}^{j}\cdot\frac{\partial (A^{i}\mathbf{e}_{i})}{\partial q^{j}} = \frac{1}{\sqrt{\det g}}\frac{\partial}{\partial q^{k}}(\sqrt{\det g}A^{k}) \end{equation} $$

두번째 항등식을 만족하기 위해 아래 관계식들을 이용하였다.

$$ \begin{align} \frac{d \det g}{dq^{k}} &= \det g ~g^{im} \frac{\partial g_{im}}{\partial q^{k}} \nonumber \\ \Gamma^{i}_{ik} &= \frac{1}{\sqrt{\det g}}\frac{\partial}{\partial q^{k}}(\sqrt{\det g}) \end{align} $$

- **Laplacian operator**

$$ \begin{equation} \nabla^{2}\psi = \nabla\cdot(\nabla\psi) = \frac{1}{\sqrt{\det g}}\frac{\partial}{\partial q^{k}}\left(\sqrt{\det g}~g^{ki}\frac{\partial \psi}{\partial q^{i}}\right) \end{equation} $$

식 (23)에서의 gradient operator는 covariant component로 표현되어 있으니 metric tensor $g^{ki}$로 contravariant component로 바꾸어야한다.

- **Curl operator**

$$ \begin{equation} \nabla\times\mathbf{B} = \frac{\partial B_{i}}{\partial q^{j}} - \frac{\partial B_{j}}{\partial q^{i}} = \frac{\partial B_{i}}{\partial q^{j}} - B_{k}\Gamma^{k}_{ij} - \frac{\partial B_{j}}{\partial q^{i}} + B_{k}\Gamma^{k}_{ji} \end{equation} $$

## Symmetry and tensors

{: .prompt-tip}
> **Q. Tensor와 character table만으로 어떤 성분이 남아야하는지 알 수 있을까?**

 예) Polarizability tensor ($p_i = \alpha_{ij} E_{j}$)

먼저 대칭 연산자 $O$에 대해서 $p’ = Op$이고 $E’ = OE$이다. 따라서, $p’ = Op = O(\alpha E) = O \alpha O^{T} E’ = ( O \alpha O^{T}) E’$이고, $\alpha’ = O \alpha O^{T}$를 얻는다. Neumann’s principle에 따라 $\alpha = O \alpha O^{T}$이어야한다. 직접 대칭 연산자를 곱하여 대칭인 것을 찾는 방법이 있지만 character table을 참고하는 방법이 수월하다.

1. Character table의 irrep들 중 invariant한 것들을 찾는다. 이는 각 irrep의 dimension을 구하면 알 수 있고, 수치적으로 $n_i \chi_i$의 합을 통해 구해진다. 만약 $0$인 경우, 불변이 아니므로 제외하고, $0$이 아닌 경우, 불변함으로 해당 irrep을 고려한다.
2. 2차원 텐서와 같은 경우 character table에 주어진 quadratic function을 보면 바로 알 수 있다. 만약 $x^2 + y^2$와 $z^2$와 같은 함수가 허용된다면 $\alpha_{xx}$, $\alpha_{yy}$, 그리고 $\alpha_{zz}$가 대칭성에 의해서 허용된다는 것을 의미한다.

### 일반적인 방법: Rank-$n$ 텐서의 대칭 허용 성분

Rank $n$인 텐서 $T_{i_{1}i_{2}\cdots i_{n}}$이 점군 $G$의 대칭성을 가진 물질에 정의되어 있다고 하자. 이 텐서의 각 인덱스는 좌표 변환에 대해 벡터 표현(vector representation) $\Gamma_{\text{vec}}$으로 변환된다. 따라서 rank-$n$ 텐서 전체는 $n$번의 직접곱(direct product)으로 이루어진 표현을 따른다:

$$ \begin{equation} \Gamma_{\text{tensor}} = \underbrace{\Gamma_{\text{vec}} \otimes \Gamma_{\text{vec}} \otimes \cdots \otimes \Gamma_{\text{vec}}}_{n} \end{equation} $$

이 표현의 character는 각 대칭 연산 $R$에 대해 아래와 같이 주어진다:

$$ \begin{equation} \chi_{\text{tensor}}(R) = [\chi_{\text{vec}}(R)]^{n} \end{equation} $$

여기서 $\chi_{\text{vec}}(R)$은 벡터 표현의 character이다. 예를 들어, $3$차원에서 회전 연산 $C_{n}$에 대한 벡터 표현의 character는 $1 + 2\cos(2\pi/n)$이다.

**Neumann's principle**에 따르면 물질의 점군 대칭 하에서 물리적으로 허용되는 텐서 성분은 totally symmetric representation ($A_{1}$ 또는 $\Gamma_{1}$)에 속하는 성분만 남는다. 따라서 독립 성분의 개수는 $\Gamma_{\text{tensor}}$를 기약 표현(irreducible representation)으로 분해했을 때 $A_{1}$이 몇 번 나타나는지와 같다:

$$ \begin{equation} n_{A_{1}} = \frac{1}{|G|}\sum_{R \in G} \chi_{\text{tensor}}(R) \cdot \chi_{A_{1}}(R)^{*} = \frac{1}{|G|}\sum_{R \in G} [\chi_{\text{vec}}(R)]^{n} \end{equation} $$

마지막 등호는 $\chi_{A_{1}}(R) = 1$이라는 사실을 이용하였다.

### 예시: Rank-3 텐서 $T_{ijk}$와 점군 $C_{3v}$

$C_{3v}$ 점군을 예로 들자. 이 점군의 대칭 연산은 $\{E, 2C_{3}, 3\sigma_{v}\}$이고, 벡터 표현의 character는 다음과 같다:

| $C_{3v}$ | $E$ | $2C_{3}$ | $3\sigma_{v}$ |
|---|---|---|---|
| $\chi_{\text{vec}}$ | $3$ | $0$ | $1$ |

Rank-3 텐서의 character는 $[\chi_{\text{vec}}]^{3}$으로 계산된다:

| $C_{3v}$ | $E$ | $2C_{3}$ | $3\sigma_{v}$ |
|---|---|---|---|
| $\chi_{\text{tensor}}$ | $27$ | $0$ | $1$ |

따라서 $A_{1}$의 개수는:

$$ \begin{equation} n_{A_{1}} = \frac{1}{6}[1\times 27 + 2\times 0 + 3\times 1] = 5 \end{equation} $$

즉, $C_{3v}$ 대칭을 가진 물질의 rank-3 텐서는 $27$개의 성분 중 **$5$개의 독립 성분**만 대칭에 의해 허용된다.

### Intrinsic symmetry에 의한 축소

텐서가 물리적 이유로 인덱스 교환에 대한 내재적 대칭성(intrinsic symmetry)을 가지는 경우, 독립 성분의 수는 더 줄어든다. 예를 들어:

- **Piezoelectric tensor** $d_{ijk}$: 응력 텐서의 대칭성 ($\sigma_{jk} = \sigma_{kj}$)에 의해 $d_{ijk} = d_{ikj}$를 만족한다. 이에 따라 마지막 두 인덱스를 Voigt notation으로 축약하여 $d_{i\alpha}$ ($\alpha = 1, \dots, 6$)의 $18$개 성분으로 줄일 수 있다.
- **Elastic stiffness tensor** $C_{ijkl}$: $C_{ijkl} = C_{jikl} = C_{ijlk} = C_{klij}$를 만족하므로 $81$개에서 $21$개의 독립 성분으로 줄어든다.

이러한 intrinsic symmetry를 반영한 표현을 구성한 뒤 위의 분해 공식을 적용하면 실제 독립 성분의 수를 구할 수 있다. 구체적으로, 대칭화된 직접곱(symmetrized direct product)의 character를 사용해야 한다. Rank-2 대칭 텐서의 경우:

$$ \begin{equation} \chi_{\text{sym}}(R) = \frac{1}{2}\left[(\chi_{\text{vec}}(R))^{2} + \chi_{\text{vec}}(R^{2})\right] \end{equation} $$

반대칭(antisymmetric) 텐서의 경우:

$$ \begin{equation} \chi_{\text{asym}}(R) = \frac{1}{2}\left[(\chi_{\text{vec}}(R))^{2} - \chi_{\text{vec}}(R^{2})\right] \end{equation} $$

이를 일반화하면 rank-$n$에 대한 대칭화된 직접곱의 character는 Young tableau를 이용하여 체계적으로 구할 수 있다.