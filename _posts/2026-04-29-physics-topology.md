---
title: Topology
date: 2026-04-29 19:00:00 +0900
categories:
  - Physics
  - Topology
tags:
  - math
  - mathematical-physics
math: true
toc: true
---

## Topology

To define the neighborhood, one should discuss an open set. An open set is a set of points between an open interval in that they exclude their boundary points. For example, the open set $O$ is given by points for which $x^{2}+y^{2}<R$. The neighborhood $U$ is a subset of the open set; $U \subset O$. Then, let $U$ be a set and $\tau$ is defined as a collection of subsets $S_{i}$ of $U$:

$$
\begin{equation}
\tau \equiv \{S\} = \{S_{1}, S_{2}, \dots\}
\end{equation}
$$

$\tau$ gives a topology to $U$ if it satisfies the following axioms:

{: .prompt-info}
> **Axioms**.
>
>1) $\emptyset\subset\tau$ and $U\subset\tau$.
>2) The union of elements of subcollections in $\tau$ is also in $\tau$.
>3) If $\tau$ is finite, the intersection of elements of subcollections in $\tau$ is also in $\tau$.

{: .prompt-info}
> **Example**.
> 
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
S_{x} \cap S_{y} = \emptyset, \nonumber \\
x \in S_{x},~y \in S_{y}, x \neq y
\end{gather}
$$

for two arbitrary points $x$ and $y$. This space is also referred to as a "separated space" in the sense that the two neighborhoods do not intersect with each other. The Hausdorff space is a generalization of *metric space* in which one can measure distances between points. The importance of the metric space will be emphasized when manifolds are discussed.

<br>

## Compactness

For a family of sets $S = \{S_{i}\}$, if $\cup S_{i} \supset U$, then $S$ is a cover of $U$. The cover is open if $S_{i}$ is an open set. In addition, the set $U$ is **compact** when the finite union of open sets ($S_{1} \cup S_{2} \cup S_{3} \cup \dots \cup S_{n}$) contains $U$:

$$
\begin{equation}
S_{1} \cup S_{2} \cup S_{3} \cup \dots \cup S_{n} \supset U,~n < \infty
\end{equation}
$$

{: .prompt-info}
> **Example**.
> 
>Consider the closed disk $C = \{(x,y): x^{2}+y^{2} \leq 1\}$. As an open covering, one chooses the set of concentric disks:
>$$
>\begin{equation}
>S_{n} = \left\{(x,y): x^{2}+y^{2} < \left(1 - \frac{1}{1+n} + \varepsilon\right) \right\} 
>\end{equation}
>$$
> where $\varepsilon > 0$ and $n = 1, 2, \dots$. For a large $n$, the upper bound is $1+\varepsilon$, which is slightly larger than $1$ so that the union of $S_{n}$ contains $C$. Moreover, there exists a finite value for $n$:
> $$
>\begin{gather}
>\left(1 - \frac{1}{1+n} + \varepsilon\right) > 1, \nonumber \\
>\therefore n > \frac{1}{\varepsilon} - 1
>\end{gather}
> $$
> Therefore, the closed disk $C$ is compact. However, the open disk $O = \{(x,y): x^{2}+y^{2} < 1\}$ is non-compact. 
> 

It is a representative example of the Heine-Borel theorem, which states that a set $U \subset \mathbb{R}^{n}$ is compact only if it is closed and bounded.

<br>

## Homeomorphism

A continuous function is a function from a topological space $(S,\sigma)$ to another one $(T,\tau)$, $F: S \rightarrow T$ such that its inverse image $F^{-1}: T \rightarrow S$ is an open set in $(S,\sigma)$. Here, consider two topological spaces $\mathcal{T}\_{1}$ and $\mathcal{T}\_{2}$. For a continuous map between these spaces $f: \mathcal{T}\_{1} \rightarrow \mathcal{T}\_{2}$, if its **reverse** map ($f^{-1}: \mathcal{T}\_{2} \rightarrow \mathcal{T}\_{1}$) **exists** and is also **continuous**; it is a homeomorphism. (The additional continuity condition makes a difference from the concept of isomorphism.) Two spaces are said to be topologically equivalent if there is such a one-to-one correspondence:

$$
\begin{equation}
\mathcal{T}_{1} \simeq \mathcal{T}_{2}
\end{equation}
$$

The quantities that are topologically equivalent (or do not change under a homeomorphism) are referred to as topological invariants. There are three invariants: *compactness*, *connectedness*, and *dimensionality*.

<br>

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

1) *Closure*. $[a][b] = [ab] \in \pi_{1}(X)$ if $[a] \in \pi_{1}(X)$ and $[b] \in \pi_{1}(X)$.

2) *Associativity*. $\left([a][b]\right)[c] = [a]\left([b][c]\right)$.

3) *Identity*. The class of null paths $[1]$ is an identity element since $[a][1] = [a]$.

4) *Inverse*. $[a][a^{-1}] = [1]$.

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