


## 윈도우에서 NAS 쉽게 구축하기

1. Microsoft 계정 로그인: PIN 번호는 안 된다. 비밀번호를 설정해야 한다.
2. 윈도우 컴퓨터와 안드로이드 폰에 Tailscale을 설치한다.
3. 안드로이드 폰에서 CX 파일 탐색기를 설치한다.
4. CX 파일 탐색기에서 **네트워크 > 새 위치 > 원격 저장소 > SMB**를 선택한다.
5. **호스트(IP 주소)** 칸에 아까 메모해 둔 PC의 Tailscale IP(100.x.x.x)를 입력한다.
6. 사용자 이름과 비밀번호는 MS 계정 이메일과 비밀번호를 입력한다.

# Appainter 에러

```jsx
E/flutter ( 4252): [ERROR:flutter/runtime/dart_vm_initializer.cc(40)] Unhandled Exception: 'package:json_theme/src/codec/theme_decoder.g.dart': Failed assertion: line 7075 pos 7: 'SchemaValidator.validate(
E/flutter ( 4252):         schemaId:
E/flutter ( 4252):             '<https://peiffer-innovations.github.io/flutter_json_schemas/schemas/json_theme/theme_data>',
E/flutter ( 4252):         value: value,
E/flutter ( 4252):         validate: validate,
E/flutter ( 4252):       )': is not true.
E/flutter ( 4252): #0      _AssertionError._doThrowNew (dart:core-patch/errors_patch.dart:67:4)
E/flutter ( 4252): #1      _AssertionError._throwNew (dart:core-patch/errors_patch.dart:49:5)
E/flutter ( 4252): #2      ThemeDecoder.decodeThemeData (package:json_theme/src/codec/theme_decoder.g.dart:7075:7)
```

해당 에러는 Appainter로 만든 theme.json이 현재 업데이트된 Flutter와 호환되지 않기 때문에 나타난다. Appainter로 theme.json을 새로 만들면 에러를 없앨 수 있었다.


## Sublattice Interference Mechanism

Around the Van Hove filling, the nesting effect due to the divergent density of states can trigger the various Fermi surface instabilities ([Kiesel 2012](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.86.121105)). Since the Kagome lattice has three distinct sublattice features at van Hove filling, one can make a Bloch state that also owns these features. The reason why one does this is that the eigenstate of the kinetic term of the tight-binding Hamiltonian at van Hove filling can have more than a single component, e.g. $\ket{\psi_{n\mathbf{k}=\mathbf{M}}} = [c_{\mathbf{M}A},c_{\mathbf{M}B},c_{\mathbf{M}C}]^{\dagger}\ket{0}$.

Depending on the distribution of Bloch states in each sublattice, Van Hove singularities at each sublattice can be classified into $p$-type and $m$-type Van Hove singularity. Sublattice interference affects how electronic states interact across sublattices. The interference leads to orthogonality between Bloch states at different Van Hove singularities. This orthogonality reduces the on-site interaction. In other words, the interference modifies the interaction strength such that the nearest-neighbor interaction $V$ becomes larger than the on-site interaction $U$ (See [Wu](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.L081117)). 

At a weak coupling limit, such a form of the eigenstate will not affect the dispersion of the electronic structure. However, at the intermediate coupling limit, the sublattice character that is deeply related to the Kagome band structure should be correctly encoded in the eigenstate. Also, to treat the scattering process between the different $\mathbf{M}$ points, the eigenstate near the van Hove singularity must be represented by a pure sublattice $s = A, B$ and $C$ (See [Kiesel 2013](https://link.aps.org/doi/10.1103/PhysRevLett.110.126405)).

When two Van Hove points on a Fermi surface connected by a nesting vector have different sublattice occupations, the interaction vertex between them becomes smaller. This is called sublattice interference, and it is a unique feature found only in the Kagome lattice with Van Hove filling. While this interference may not be taken into account, the phase diagrams shown by the calculations are markedly different. Here, the following transformation can be reached to have the fermion operator with sublattice information:
$$
c^{\dagger}_{is} = \sum\limits_{\mathbf{k},n} u^{*}_{ns}(\mathbf{k}) c^{\dagger}_{\mathbf{k}n} e^{-i\mathbf{k}\cdot(\mathbf{R}_{i} + \mathbf{r}_{s})}
$$
where $s$ is the sublattice index and $u^{*}_{ns}(\mathbf{k})$ is the ($U(1)$ gauge?) transformation coefficient that satisfies:
$$
\sum\limits_{s} |u_{ns}(\mathbf{k})|^{2} = 1
$$
which indicates the total sublattice occupation is identical to one for each band and $k$-point. 이를 따로 고려한 이유는 다른 sublattice 간의 hopping을 고려해야하기 때문이다. 만약 $u_{ns}(\mathbf{k})$가 $1$이면 unit cell 안에 sublattice가 있어도 그 정보는 사라지게 된다. 또한, interacting term을 계산할 때 밴드의 eigenstate 정보도 포함되도록 만든다 [From notes discussing with Dr. HJ Lee].

This is similar to the basis transformation when one deals with the orbital basis. However, this transformation coefficient has nothing to do with the orbital occupancy or the spin degree of freedom. It depends on the band index, the sublattice index, and the momentum $\mathbf{k}$. Now, the fermion operators carry the sublattice information. The effect of sublattice comes in when considering the particle-particle interaction in the Hubbard model. The interaction Hamiltonian can be written in terms of the creation, annihilation operators, and the transformation coefficient:
$$
H_{1} = U_{0}\sum\limits_{\mathbf{q},\mathbf{k},\mathbf{k}'}\sum\limits_{s}u^{*}_{s}(\mathbf{k})u^{*}_{s}(\mathbf{q}-\mathbf{k})u_{s}(\mathbf{q}-\mathbf{k}')u_{s}(\mathbf{k}')c^{\dagger}_{\mathbf{k}}c^{\dagger}_{\mathbf{q}-\mathbf{k}}c_{\mathbf{q}-\mathbf{k}'}c_{\mathbf{k}'}
$$
where the band index is omitted since we only considered the band near the Fermi level. Also, since the on-site Hubbard interaction occurs in the same sublattice, the creation and annihilation operators have the same sublattice index. If one expresses each momentum as $\mathbf{k}_{1}$, $\mathbf{k}_{2}$, $\mathbf{k}_{3}$, and $\mathbf{k}_{4}$ in order, the interaction vertex $V(\mathbf{k}_{1},\mathbf{k}_{2},\mathbf{k}_{3},\mathbf{k}_{4})$ can be written as:
$$
V(\mathbf{k}_{1},\mathbf{k}_{2},\mathbf{k}_{3},\mathbf{k}_{4}) = \sum\limits_{s}u^{*}_{s}(\mathbf{k}_{1})u^{*}_{s}(\mathbf{k}_{2})u_{s}(\mathbf{k}_{3})u_{s}(\mathbf{k}_{4})
$$
Note that it is diagonal in the sublattice index. This implies that the interaction strength and the nesting effect will be small if $\mathbf{q}$ connects two nested Fermi surfaces. Such a weakness in the nesting due to the sublattices is called sublattice interference.

In order to see this, assume that the sublattice occupation $|u_{s}(\mathbf{k})|$ is homogeneous (or constant) throughout the Fermi surface. This gives rise to the enhanced magnitude of the pairing vertex $V$ compared to the inhomogeneous case. This is not the case for the Kagome lattice, especially when the filling is at the Van Hove singularity. Thus, with only on-site Hubbard interaction, one cannot expect exotic many-body phases ([Dong 2023](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.045127)). The tuning parameter to increase the nesting effect for the Kagome Hubbard model is the intersite Coulomb interaction $U_{1}$. Since the intersite Hubbard model is **not diagonal** about the sublattice index, instability can be expected when the $U_{1}$ enhances. 

Lately, it has been predicted that the charge bond order emerges when the nearest-neighbor interaction $U_{1}$ is promoted ([Denner 2022](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.217601)). The charge bond order is an order from the charge fluctuation that modulates the kinetic hopping strengths instead of the on-site densities. It was also reported that the complex (or imaginary) charge order (also called the [[chiral flux phase]]) emerges with help from the long-range electron-electron interaction [PRB 104, 035142 (2021)]. Here, the exact VHS filling is unnecessary for the chiral flux phase emergent in $A$V$_{3}$Sb$_{5}$ [Nat. Commun. 13, 7288 (2022)].

---

### Comments and corrections

1. **$p$-type and $m$-type VHS가 정의되지 않았다.** 첫 등장 시 정의를 줘야 한다. $p$-type VHS는 sublattice occupation이 하나의 sublattice에 집중된 ("pure") 경우이고, $m$-type은 여러 sublattice에 고르게 분포된 ("mixed") 경우이다. 이 구분이 이후의 interference 논의의 핵심이므로, $\|u_{ns}(\mathbf{k}_{\rm VHS})\|^2$의 분포로 명시적으로 정의하는 것이 좋다.

2. **"$U(1)$ gauge?" (line with $u^{*}_{ns}(\mathbf{k})$)**: $u_{ns}(\mathbf{k})$는 tight-binding Hamiltonian을 대각화하여 얻는 Bloch eigenstate의 sublattice component이다. 즉, $H(\mathbf{k})\|u_n(\mathbf{k})\rangle = \varepsilon_n(\mathbf{k})\|u_n(\mathbf{k})\rangle$에서 $\langle s\|u_n(\mathbf{k})\rangle = u_{ns}(\mathbf{k})$이다. 이 계수는 고유벡터의 위상 선택에 따라 $U(1)$ gauge freedom ($u_{ns} \to e^{i\phi(\mathbf{k})} u_{ns}$)을 가진다. 다만 interaction vertex $V(\mathbf{k}_1,\ldots,\mathbf{k}_4)$에서는 $u^*u^*uu$ 형태로 들어가므로 전체 위상은 상쇄되어 gauge-invariant하다. 따라서 "$U(1)$ gauge transformation coefficient"라고 부르기보다는 단순히 **Bloch eigenstate의 sublattice component** (또는 sublattice form factor)라고 하는 것이 정확하다.

3. **$H_1$에서 band index가 생략된 것에 대한 보충**: 현재 "band index is omitted since we only considered the band near the Fermi level"이라고만 되어 있다. Spin index도 생략되어 있는데, 이에 대한 언급이 없다. SU(2) spin symmetry 하에서 on-site Hubbard $U$는 반대 스핀끼리만 작용하므로 ($c^\dagger_\uparrow c^\dagger_\downarrow c_\downarrow c_\uparrow$), spin index를 명시적으로 보여주거나 생략 이유를 밝히는 것이 좋다.

4. **"the interaction strength and the nesting effect will be small if $\mathbf{q}$ connects two nested Fermi surfaces"**: 이 문장이 sublattice interference의 핵심 주장인데 논리 연결이 약하다. 더 명확하게: nesting vector $\mathbf{q}$가 연결하는 두 VHS point $\mathbf{M}_1$과 $\mathbf{M}_2$의 sublattice character가 서로 다르면 (예: $\mathbf{M}_1$은 $A$-sublattice pure, $\mathbf{M}_2$는 $B$-sublattice pure), $\sum_s u^*_s(\mathbf{M}_1)u_s(\mathbf{M}_2) \approx 0$ (직교성)이 되어 vertex가 억제된다는 점을 수식으로 보여주면 좋겠다.

5. **Homogeneous case 설명의 논리 흐름**: "assume that the sublattice occupation $\|u_s(\mathbf{k})\|$ is homogeneous... This gives rise to the enhanced magnitude of the pairing vertex $V$ compared to the inhomogeneous case." → 이 문장은 반례(counter-example)를 통해 interference 효과를 강조하려는 의도인데, 서술 순서가 뒤집혀 있어 혼란스럽다. "만약 sublattice character가 균일하다면 interference가 없어 vertex가 최대값을 가진다. 하지만 Kagome VHS에서는 그렇지 않으므로 vertex가 억제된다"로 순서를 정리하면 더 명확해진다.

6. **마지막 문단 (charge bond order, chiral flux phase)의 연결**: 앞 문단까지는 on-site $U$만으로는 exotic phase가 어렵다는 결론인데, 갑자기 charge bond order와 chiral flux phase가 등장한다. $U_1$ (nearest-neighbor interaction)이 sublattice-diagonal이 아니기 때문에 interference를 우회한다는 점을 먼저 강조하고, 그 결과로 이러한 phase들이 가능해진다는 흐름을 만들면 좋겠다.

7. **사소한 수정사항**:
   - "$\mathbf{M}$ points" → 세 개의 inequivalent $M$ points ($M_1$, $M_2$, $M_3$)임을 처음 등장 시 명시
   - "charge bond order is an order from the charge fluctuation that modulates the kinetic hopping strengths instead of the on-site densities" → "charge bond order"의 order parameter가 $\langle c^\dagger_i c_j \rangle$의 modulation이라는 점을 명시하면 더 좋겠다
   - [[chiral flux phase]] → wiki-link 형식이 남아있으므로 정리 필요

---

### Summary: Sublattice Interference Mechanism

The sublattice interference mechanism is a **momentum-dependent suppression of interaction vertices** that arises from the internal sublattice structure of Bloch eigenstates on the Kagome lattice at Van Hove filling.

**Core idea.** On the Kagome lattice, each unit cell contains three sublattices ($A$, $B$, $C$). A Bloch eigenstate $\|u_n(\mathbf{k})\rangle$ at momentum $\mathbf{k}$ is not uniformly distributed across these sublattices — it has a sublattice-dependent weight $u_{ns}(\mathbf{k})$. At the three Van Hove singularities (the $M$ points of the Brillouin zone), each VHS is dominated by a *different* sublattice ($p$-type). This sublattice polarization is a unique feature of the Kagome geometry.

**Consequence for interactions.** When the on-site Hubbard interaction $U$ is projected onto the band basis, the effective interaction vertex acquires a sublattice form factor:

$$V(\mathbf{k}_1,\mathbf{k}_2,\mathbf{k}_3,\mathbf{k}_4) = \sum_s u^*_s(\mathbf{k}_1) u^*_s(\mathbf{k}_2) u_s(\mathbf{k}_3) u_s(\mathbf{k}_4)$$

Because this sum is diagonal in the sublattice index $s$, it acts as an inner product between the sublattice characters of the incoming and outgoing states. When a nesting vector $\mathbf{q}$ connects two VHS points with orthogonal sublattice polarizations, the vertex is strongly suppressed — the states "don't see each other" through the on-site interaction. This destructive interference between sublattice components is what is meant by sublattice interference.

**Physical meaning.** Sublattice interference reveals that the Kagome lattice has a built-in protection mechanism against conventional Fermi surface instabilities (SDW, CDW) driven by on-site repulsion alone, even in the presence of perfect nesting at Van Hove filling. The divergent density of states and the nesting geometry, which would ordinarily guarantee a strong instability, are rendered ineffective by the orthogonality of sublattice wave functions at the nested points. This is fundamentally different from, e.g., the square lattice, where sublattice structure does not suppress nesting.

**Way out.** To recover strong instabilities and access exotic phases (charge bond order, chiral flux phase), one must go beyond on-site $U$ and include the nearest-neighbor Coulomb interaction $U_1$, which couples *different* sublattices and is therefore not subject to sublattice interference. This explains why the Kagome Hubbard model with only $U$ has a relatively featureless phase diagram at Van Hove filling, while the extended Hubbard model with $U_1$ hosts a rich variety of correlated phases.








## Topology

To define the neighborhood, one should discuss an open set. An open set is a set of points between an open interval in that they exclude their boundary points. For example, the open set $O$ is given by points for which $x^{2}+y^{2}<R$. The neighborhood $U$ is <span style="color:rgb(255, 0, 0)">a subset of the open set</span>; $U \subset O$. Then, let $U$ be a set and $\tau$ is defined as a collection of subsets $S_{i}$ of $U$:
$$
\begin{equation}
\tau \equiv \{S\} = \{S_{1}, S_{2}, \dots\}
\end{equation}
$$
$\tau$ gives a topology to $U$ if it satisfies the following axioms:

> [!Axioms] Axioms
>1) $\emptyset\subset\tau$ and $U\subset\tau$.
>2) The union of elements of subcollections in $\tau$ is also in $\tau$.
>3) If $\tau$ is finite, the intersection of elements of subcollections in $\tau$ is also in $\tau$.

> [!Example] Example
> Consider a set $U = \{a,b,c,d,e\}$ and the collection of subsets
> $$
> \begin{equation}
> \tau \equiv \{ \emptyset,M,\{a\},\{c,d\},\{a,c,d\},\{b,c,d,e\} \}
> \end{equation}
> $$
> Firstly, the empty set and a set $U$ are subsets of $\tau$, which indicates that the first axiom is satisfied. Secondly, the union of subsets is given by:
> $$
\begin{align*}
> \{a\} \cup \{c,d\} &= \{a,c,d\} \subset \tau,\\
> \{a\} \cup \{a,c,d\} &= \{a,c,d\} \subset \tau,\\
> \{c,d\} \cup \{a,c,d\} &= \{a,c,d\} \subset \tau,
\end{align*}
>$$
>where other trivial combinations that include the empty set and the set $U$ are not written. This concludes that the second axiom is fulfilled. Thirdly, it is evident that the intersection of subsets is in $\tau$. 
> $$
\begin{align*}
> \{a\} \cap \{c,d\} &= \emptyset \subset \tau,\\
> \{a\} \cap \{a,c,d\} &= \{a\} \subset \tau,\\
> \{c,d\} \cap \{a,c,d\} &= \{c,d\} \subset \tau,
\end{align*}
>$$
>Note that $\{a\}$, $\{c,d\}$, and $\{a,c,d\}$ are the subsets of $U$ so that the intersection of these subsets is itself. Otherwise, the intersection of an empty set and other sets is the empty set.

Loosely speaking, a topology is a family of subsets that is closed under unions and intersections. This implies that it is possible to give more than one topology to $U$. In addition, the set $U$ and its topology $\tau$ constitute a topological space $\mathcal{T}$:
$$
\begin{equation}
\mathcal{T} \equiv \{U, \tau\}
\end{equation}
$$
An example of a topological space is "Hausdorff space," where there exists a pair of open sets $S_{x}$ and $S_{y}$ such that:
$$
\begin{gather}
S_{x} \cap S_{y} = \emptyset,\\
x \in S_{x},~y \in S_{y}, x \neq y
\end{gather}
$$
for two arbitrary points $x$ and $y$. This space is also referred to as a "separated space" in the sense that the two neighborhoods do not intersect with each other. The Hausdorff space is a generalization of *metric space* in which one can measure distances between points. The importance of the metric space will be emphasized when manifolds are discussed.

## Compactness
For a family of sets $S = \{S_{i}\}$, if $\cup S_{i} \supset U$, then $S$ is a cover of $U$. The cover is open if $S_{i}$ is an open set. In addition, the set $U$ is **compact** when the finite union of open sets ($S_{1} \cup S_{2} \cup S_{3} \cup \dots \cup S_{n}$) contains $U$:
$$
\begin{equation}
S_{1} \cup S_{2} \cup S_{3} \cup \dots \cup S_{n} \supset U,~n < \infty
\end{equation}
$$

>[!Example] Example
>Consider the closed disk $C = \{(x,y): x^{2}+y^{2} \leq 1\}$. As an open covering, one chooses the set of concentric disks:
>$$
>\begin{equation}
>S_{n} = \left\{(x,y): x^{2}+y^{2} < \left(1 - \frac{1}{1+n} + \varepsilon\right) \right\} 
>\end{equation}
>$$
> where $\varepsilon > 0$ and $n = 1, 2, \dots$. For a large $n$, the upper bound is $1+\varepsilon$, which is slightly larger than $1$ so that the union of $S_{n}$ contains $C$. Moreover, there exists a finite value for $n$:
> $$
>\begin{gather}
>\left(1 - \frac{1}{1+n} + \varepsilon\right) > 1, \\
>\therefore n > \frac{1}{\varepsilon} - 1
>\end{gather}
> $$
> Therefore, the closed disk $C$ is compact. However, the open disk $O = \{(x,y): x^{2}+y^{2} < 1\}$ is non-compact. 
> 

It is a representative example of the Heine-Borel theorem, which states that a set $U \subset \mathbb{R}^{n}$ is compact only if it is closed and bounded.

## Homeomorphism
A continuous function is a function from a topological space $(S,\sigma)$ to another one $(T,\tau)$, $F: S \rightarrow T$ such that its inverse image $F^{-1}: T \rightarrow S$ is an open set in $(S,\sigma)$. Here, consider two topological spaces $\mathcal{T}_{1}$ and $\mathcal{T}_{2}$. For a continuous map between these spaces $f: \mathcal{T}_{1} \rightarrow \mathcal{T}_{2}$, if its **reverse** map ($f^{-1}: \mathcal{T}_{2} \rightarrow \mathcal{T}_{1}$) **exists** and is also **continuous**; it is a homeomorphism. (The additional continuity condition makes a difference from the concept of isomorphism.) Two spaces are said to be topologically equivalent if there is such a one-to-one correspondence:
$$
\begin{equation}
\mathcal{T}_{1} \simeq \mathcal{T}_{2}
\end{equation}
$$
The quantities that are topologically equivalent (or do not change under a homeomorphism) are referred to as topological invariants. There are three invariants: *compactness*, *connectedness*, and *dimensionality*.

## Homotopy
A path in a topological space $X$ is defined as a continuous function $p(s)$ of some parameters $0 \leq s \leq 1$ that associate each value with a point $p(s)$ in the space. Such a path connects the points $P$ and $Q$ in the space $M$ if $p(0) = P$ and $p(1) = Q$. A closed path at a point $S$ corresponds to:
$$
\begin{equation}
p(S) \equiv p(0) = p(1)
\end{equation}
$$
Two closed paths $p(S)$ and $p'(S)$ are referred to as homotopic (continuously deformable one into the other) if a function $h(t,S)$ exists that satisfies:
$$
\begin{equation}
h(0,S) = p(S),~ h(1,S) = p'(S)
\end{equation}
$$
This implies that the function $h(t,S)$ connects two independent closed paths by a parameter $t \in [0, 1]$. The space of continuous maps $C(X,Y)$ from $X$ to $Y$ is divided by homotopy into equivalence classes; $[X,Y]$. Note that the homotopy equivalence class is topologically invariant since the homeomorphism is a continuous map. <span style="color:rgb(0, 176, 240)">The equivalence class is used to discuss the topological difference between topological spaces</span>: If one chooses a fixed space of $X$ and allows $Y$ to vary over all topological spaces of interest, one can distinguish the topological difference between two spaces $Y$ and $Y'$ by comparing their equivalence classes under maps. Additionally, the equivalence classes of $C(X,Y)$ have a group structure. Consider two paths $a(s)$ and $b(s)$. The product path $c = ab$ is defined as:
$$
\begin{equation}
c(s) =
\begin{cases}
a(s),~~0 \leq s \leq \frac{1}{2} \\
b(2s-1),~~\frac{1}{2} \leq s \leq 1
\end{cases}
\end{equation}
$$
if the endpoint of $a(s)$ coincides with the beginning of $b(s)$. Likewise, a null path can be defined as the product $aa^{-1}$, in which $a^{-1}$ is a path traversing in the opposite direction:
$$
\begin{equation}
a^{-1} = a(1-s)
\end{equation}
$$
Let $[a]$ denote the set of closed paths that are homotopic to the path $a$, and introduce a multiplication law for the space $X$ for these homotopy classes; $[a,b]$. In addition, the multiplication of the classes of closed paths has a common basepoint in a space. This defines a group called the first homotopy group (fundamental group) $\pi_{1}(X)$ of the space $X$, since it satisfies the group postulates:
1) Closure. $[a][b] = [ab] \in \pi_{1}(X)$ if $[a] \in \pi_{1}(X)$ and $[b] \in \pi_{1}(X)$.
2) Associativity. $([a][b])[c] = [a]([b][c])$.
3) Identity. The class of null paths $[1]$ is an identity element since $[a][1] = [a]$.
4) Inverse. $[a][a^{-1}] = [1]$
A space is simply connected if its fundamental group includes only an identity. Thus, $[1]$ is said to be "simply connected." For example, it can be shown that the product of a one-dimensional line $\mathbb{R}^{1}$ and a circle $S^{1}$ is a two-dimensional Euclidean space with a hole in it. Since $\pi_{1}(A\times B) = \pi_{1}(A)\times\pi_{1}(B)$,
$$
\begin{equation}
\pi_{1}(\mathbb{R}^{1}\times S^{1}) = \pi_{1}(\mathbb{R}^{1})\times \pi_{1}(S^{1})
\end{equation}
$$
However, $\mathbb{R}^{1}$ is simply connected so that:
$$
\begin{equation}
\pi_{1}(\mathbb{R}^{1}\times S^{1}) = \pi_{1}(S^{1})
\end{equation}
$$
The concept of homotopy groups is extended to higher homotopy groups $\pi_{n}(X)$ involving mapping from a space $X$ (which is usually taken as $m$-dimensional sphere in physics) to $n$-dimensional sphere $S^{n}$. The higher homotopy groups are abelian, while the fundamental group can be non-abelian.