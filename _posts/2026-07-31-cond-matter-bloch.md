---
title: A short note on the Bloch theorem
date: 2026-07-31 17:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
  - dft
math: true
toc: true
---

## Bloch theorem

The Bloch theorem assumes the translational invariance of the potential $V(\mathbf{r})$. Here, the translational symmetry of $V(\mathbf{r})$ means that the potential at $\mathbf{r}$ is the same as the potential image at $\mathbf{r}-\mathbf{R}$ which is translated by an operator $T_{\mathbf{R}}$:

$$
\begin{equation}
V(\mathbf{r}) = T_{\mathbf{R}}V(\mathbf{r}) = V(\mathbf{r}-\mathbf{R})
\end{equation}
$$

where $\mathbf{R}$ is the Bravais lattice vector, which is expressed as $\mathbf{R} = n_{1}\mathbf{a}\_{1} + n_{2}\mathbf{a}\_{2} + n_{3}\mathbf{a}\_{3}$.
<!-- REVIEW: [low]
Issue: The coefficients $n_1,n_2,n_3$ are not stated to be integers, which is the entire content of "Bravais lattice vector."
Why it matters: Periodicity $V(\mathbf{r})=V(\mathbf{r}-\mathbf{R})$ only holds for integer combinations; without that qualifier the definition is incomplete.
Recommended change: Add "with $n_1,n_2,n_3 \in \mathbb{Z}$" and "$\{\mathbf{a}_i\}$ the primitive lattice vectors."
-->
<!-- REVIEW: [medium]
Issue: The convention here is $T_{\mathbf{R}}f(\mathbf{r}) = f(\mathbf{r}-\mathbf{R})$ (a backward shift of the argument). This choice fixes the sign of the Bloch eigenvalue later and conflicts with the ket labeling used from Eq. 4 onward (see notes at line 50 and Eq. 12).
Why it matters: A single, explicitly stated convention for how $T_{\mathbf{R}}$ acts is what keeps every subsequent sign correct; mixing "backward" and "forward" conventions produces an internal contradiction.
Recommended change: State the convention once and keep it. If $T_{\mathbf{R}}f(\mathbf{r})=f(\mathbf{r}-\mathbf{R})$, then $T_{\mathbf{R}}$ shifts a state "labeled at $\mathbf{0}$" to one "labeled at $-\mathbf{R}$"; reconcile this with $\ket{\mathbf{a}_1}=T_{\mathbf{a}_1}\ket{\mathbf{0}}$ used below.
-->
In addition, the action of $T_{\mathbf{R}}$ on the $n$th derivatives of a function $f(\mathbf{r})$ yields: 

$$
\begin{equation}
T_{\mathbf{R}}\left[\frac{\partial^{n}}{\partial \mathbf{r}^{n}}f(\mathbf{r})\right] = \frac{\partial^{n}}{\partial \mathbf{r}^{n}}f(\mathbf{r}-\mathbf{R}) = \frac{\partial^{n}}{\partial \mathbf{r}^{n}}T_{\mathbf{R}}f(\mathbf{r})
\end{equation}
$$

This implies that $T_{\mathbf{R}}$ commutes with the momentum operator. Now for the Hamiltonian $H$ with the potential $V(\mathbf{r})$, the following relationships hold:

$$
\begin{align}
(T_{\mathbf{R}}H)f(\mathbf{r}) &= -\frac{\hbar^{2}}{2m}\nabla^{2}f(\mathbf{r})\Big\vert_{\mathbf{r}-\mathbf{R}} + V(\mathbf{r}-\mathbf{R})f(\mathbf{r}-\mathbf{R}), \nonumber\\
(HT_{\mathbf{R}})f(\mathbf{r}) &= -\frac{\hbar^{2}}{2m}\nabla^{2}f(\mathbf{r})\Big\vert_{\mathbf{r}-\mathbf{R}} + V(\mathbf{r})f(\mathbf{r}-\mathbf{R})
\end{align}
$$

If and only if the potential is periodic; $V(\mathbf{r}) = V(\mathbf{r}-\mathbf{R})$, those relationships are equal to each other. This indicates that the Hamiltonian commutes with the translation operator:

$$
\begin{equation}
\boxed{[T_{\mathbf{R}},H] = 0.}
\end{equation}
$$

In other words, $H(\mathbf{r}) = H(\mathbf{r}-\mathbf{R})$. To grasp its physical meaning, let $\ket{\mathbf{r}}$ be the eigenstate of $H(\mathbf{r})$ such that $H(\mathbf{r})\ket{\mathbf{r}} = E\ket{\mathbf{r}}$. The translated image of $\ket{\mathbf{r}}$ becomes $T_{\mathbf{R}}\ket{\mathbf{r}} = \ket{\mathbf{r}-\mathbf{R}}$. Due to the commutation relation above, this becomes the eigenstate of $H(\mathbf{r}-\mathbf{R})$ with $H(\mathbf{r})\ket{\mathbf{r}-\mathbf{R}} = E\ket{\mathbf{r}-\mathbf{R}}$. Note that the eigenvalue $E$ is the same for two states. 
<!-- REVIEW: [medium]
Issue: Notation collision. $\ket{\mathbf{r}}$ is the standard symbol for a position eigenstate, but here it denotes an energy eigenstate "located at $\mathbf{r}$." Also, $H$ is a single operator (you just showed $H(\mathbf{r})=H(\mathbf{r}-\mathbf{R})$), so phrasing $\ket{\mathbf{r}-\mathbf{R}}$ as "the eigenstate of $H(\mathbf{r}-\mathbf{R})$" as though it were a different operator is misleading.
Why it matters: A reader will read $T_{\mathbf{R}}\ket{\mathbf{r}}=\ket{\mathbf{r}-\mathbf{R}}$ as the action on a position ket, where the correct relation is $T_{\mathbf{R}}\ket{\mathbf{r}}=\ket{\mathbf{r}+\mathbf{R}}$ (with $T_{\mathbf{R}}$ defined by $T_{\mathbf{R}}f(\mathbf{r})=f(\mathbf{r}-\mathbf{R})$). The clash makes the sign of every later phase ambiguous.
Recommended change: Rename the energy eigenstate, e.g. $\ket{\psi}$ / $\ket{\psi_{\mathbf{0}}}$, and its translate $T_{\mathbf{R}}\ket{\psi_{\mathbf{0}}}=\ket{\psi_{\mathbf{R}}}$. State the argument cleanly: because $[T_{\mathbf{R}},H]=0$, $T_{\mathbf{R}}\ket{\psi}$ is a degenerate eigenstate of the same $H$ with the same $E$.
-->
<!-- REVIEW: [medium]
Issue: Sign/label inconsistency. The rule stated here is $T_{\mathbf{R}}\ket{\mathbf{r}}=\ket{\mathbf{r}-\mathbf{R}}$, so $T_{\mathbf{a}_1}\ket{\mathbf{0}}=\ket{-\mathbf{a}_1}$. But from Eq. 4 onward you take "the translation of $\ket{\mathbf{0}}$ by $\mathbf{a}_1$" to give $\ket{\mathbf{a}_1}$, i.e. $T_{\mathbf{a}_1}\ket{\mathbf{0}}=\ket{+\mathbf{a}_1}$.
Why it matters: The two conventions differ by $\mathbf{R}\to-\mathbf{R}$ and cannot both hold; this is the root of the sign question at Eq. 12.
Recommended change: Adopt one convention. Cleanest here: define $\ket{\mathbf{R}}\equiv T_{\mathbf{R}}\ket{\mathbf{0}}$ (forward labeling) and drop the $T_{\mathbf{R}}\ket{\mathbf{r}}=\ket{\mathbf{r}-\mathbf{R}}$ line, or keep the latter and relabel the translated states consistently.
-->


Apparently, it seems one can obtain an infinite degeneracy in the energy only by changing $\mathbf{R}$. It is because one can think of the translated images of $\ket{\mathbf{r}}$ are independent of each other. However, this intuition is false.

This can be resolved by the following example: First, assume that $\ket{\mathbf{0}} = \ket{\mathbf{r}=\mathbf{0}}$ is two-fold degenerate with two states $\ket{\mathbf{0}^{(1)}}$ and $\ket{\mathbf{0}^{(2)}}$ as in the case of Ziman (p. 17). The translation $T$ of $\ket{\mathbf{0}}$ by $\mathbf{a}\_{1}$ gives:

$$
\begin{equation}
\begin{bmatrix}
\ket{\mathbf{a}^{(1)}_{1}} \\ 
\ket{\mathbf{a}^{(2)}_{1}}
\end{bmatrix} = 
\begin{bmatrix}
t_{11} & t_{12} \\
t_{21} & t_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\mathbf{0}^{(1)}} \\
\ket{\mathbf{0}^{(2)}}
\end{bmatrix}
\end{equation}
$$

where $t_{ij}$ is the translation coefficient and the matrix element of a unitary matrix $T$. However, $\ket{\mathbf{0}^{(1)}}$ and $\ket{\mathbf{0}^{(2)}}$ are not unique so that their linear combination can be constructed as the follows:

$$
\begin{equation}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix} = 
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\mathbf{0}^{(1)}} \\
\ket{\mathbf{0}^{(2)}}
\end{bmatrix}
\end{equation}
$$

where $c_{ij}$ is now the expansion coefficient and the matrix element of another unitary matrix $C$. One can find the matrix $C$ that diagonalizes $T$ so that $CTC^{-1}$ is diagonal:

$$
\begin{equation}
CTC^{-1} = 
\begin{bmatrix}
d_{11} & 0 \\
0 & d_{22}
\end{bmatrix}
\end{equation}
$$

Feeding Eq. 5 to Eq. 4, one obtains the states that are like non-degenerate by the translation:

$$
\begin{align}
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\mathbf{a}^{(1)}_{1}} \\ 
\ket{\mathbf{a}^{(2)}_{1}}
\end{bmatrix} &= 
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{bmatrix}
t_{11} & t_{12} \\
t_{21} & t_{22}
\end{bmatrix}
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}^{-1}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix} \nonumber \\
\begin{bmatrix}
\ket{\tilde{\mathbf{a}}^{(1)}_{1}} \\ 
\ket{\tilde{\mathbf{a}}^{(2)}_{1}}
\end{bmatrix} &=
\begin{bmatrix}
d_{11} & 0 \\
0 & d_{22}
\end{bmatrix}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix}
\end{align}
$$

using

$$
\begin{equation} 
\begin{bmatrix}
\ket{\mathbf{0}^{(1)}} \\
\ket{\mathbf{0}^{(2)}}
\end{bmatrix} =
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}^{-1}
\begin{bmatrix}
\ket{\tilde{\mathbf{0}}^{(1)}} \\ 
\ket{\tilde{\mathbf{0}}^{(2)}}
\end{bmatrix}
\end{equation}
$$

Since the norm of states $\{\ket{\tilde{\mathbf{a}}^{(i)}\_{1}}\}$ is equal to $1$, $d_{11}$ and $d_{22}$ are given by $e^{ik_{1}}$ and $e^{ik_{1}'}$, respectively. Note that $k_{1}$ and $k_{1}'$ are called the crystal momenta and have the same direction. However, their magnitudes are different.
<!-- REVIEW: [medium]
Issue: Two problems in this sentence. (1) The cleaner justification for $|d_{ii}|=1$ is that $T$ is unitary, so its eigenvalues lie on the unit circle; "the norm of the states is 1" gives $|d_{ii}|=1$ only because translation is norm-preserving, which is the same fact but should be stated as such. (2) $k_1$ and $k_1'$ here are dimensionless phases (they equal $\mathbf{k}\cdot\mathbf{a}_1$ and $\mathbf{k}'\cdot\mathbf{a}_1$), i.e. real scalars mod $2\pi$ — they are not vectors, so "have the same direction ... magnitudes are different" is not meaningful, and there is no reason the two bands' wavevectors share a direction.
Why it matters: Calling a scalar phase a "crystal momentum" with a "direction" conflates the phase $\mathbf{k}\cdot\mathbf{a}_1$ with the wavevector $\mathbf{k}$; readers may think both eigenstates carry parallel $\mathbf{k}$.
Recommended change: Say "because $T$ is unitary, $|d_{ii}|=1$, so $d_{11}=e^{ik_1}$, $d_{22}=e^{ik_1'}$ with real phases $k_1=\mathbf{k}\cdot\mathbf{a}_1$, $k_1'=\mathbf{k}'\cdot\mathbf{a}_1$." Drop the "same direction/different magnitude" clause, or reserve "crystal momentum" for the vectors $\mathbf{k},\mathbf{k}'$.
-->
Now, think of the translation $T$ of $\ket{\mathbf{0}}$ by $\mathbf{a}\_{2}$. This operator commutes with the translation by $\mathbf{a}\_{1}$. This is because $T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}}$ and $T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}$ to $\ket{\mathbf{0}}$ result in the same state $\ket{\mathbf{a}\_{1}+\mathbf{a}\_{2}}$ (identical with $\ket{\mathbf{a}\_{2}+\mathbf{a}\_{1}}$):

$$
\begin{equation}
\begin{rcases}
T_{\mathbf{a}_{2}}T_{\mathbf{a}_{1}}\ket{\mathbf{0}} &= T_{\mathbf{a}_{2}}\ket{\mathbf{a}_{1}} \\
T_{\mathbf{a}_{1}}T_{\mathbf{a}_{2}}\ket{\mathbf{0}} &= T_{\mathbf{a}_{1}}\ket{\mathbf{a}_{2}}
\end{rcases} \rightarrow \ket{\mathbf{a}_{1}+\mathbf{a}_{2}}
\end{equation}
$$

This indicates that there is a matrix that simultaneously diagonalizes $T_{\mathbf{a}\_{1}}$ and $T_{\mathbf{a}\_{2}}$. 
<!-- REVIEW: [low]
Issue: Commuting operators are simultaneously diagonalizable, but Eq. 10 then uses the *same* eigenbasis $\{\ket{\tilde{\mathbf{0}}^{(i)}}\}$ that diagonalized $T_{\mathbf{a}_1}$ to also diagonalize $T_{\mathbf{a}_2}$. That step is automatic only when the eigenvalues $d_{11},d_{22}$ of $T_{\mathbf{a}_1}$ are distinct; if they coincide, a further rotation within the degenerate block is needed.
Why it matters: The argument silently assumes the generic non-degenerate case; a careful reader will want that noted.
Recommended change: Add one clause: "assuming $d_{11}\neq d_{22}$, the eigenbasis is unique and hence also diagonalizes $T_{\mathbf{a}_2}$ (otherwise diagonalize the two commuting matrices jointly)."
-->


{: .prompt-info }
> Here one can see the path independence:
> 
$$
\begin{equation}
\boxed{T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}} = T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}.}
\end{equation}
$$
>
> This implies that the translation operator is *abelian*. However, if there is a uniform magnetic field, such a path independence does not hold anymore; $T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}} \neq T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}$, instead $T_{\mathbf{a}\_{1}}T_{\mathbf{a}\_{2}} = e^{i\phi}T_{\mathbf{a}\_{2}}T_{\mathbf{a}\_{1}}$, where the additional phase factor $e^{i\phi}$ is called "Peierls phase."
<!-- REVIEW: [medium]
Issue: Terminology. In a magnetic field the ordinary translations must be replaced by *magnetic translation operators* (Zak), and their non-commutation phase is the Aharonov–Bohm flux through the unit cell: $\phi = 2\pi\,\Phi/\Phi_0$ with $\Phi_0=h/e$. The name "Peierls phase" conventionally refers to the phase $\exp\!\big(\tfrac{ie}{\hbar}\int_i^j \mathbf{A}\cdot d\boldsymbol{\ell}\big)$ attached to a single hopping (the Peierls substitution). The plaquette/unit-cell flux $\phi$ is the *sum* of Peierls phases around the loop, i.e. the enclosed flux — not itself "the Peierls phase."
Why it matters: Conflating the per-bond hopping phase with the enclosed-flux phase is a common source of factor/definition errors when a reader tries to compute $\phi$.
Recommended change: Call $\phi$ the "Aharonov–Bohm (magnetic-flux) phase, $\phi=2\pi\Phi/\Phi_0$" and note that the $T$'s are magnetic translation operators; mention Peierls substitution separately as the per-bond phase.
Sources: Please verify against a standard reference (e.g. J. Zak, Phys. Rev. 134, A1602 (1964); Ashcroft & Mermin, or a magnetic-translation-group review) since web lookup was unavailable during this review.
-->
<!-- REVIEW: [low]
Issue: "the translation operator is *abelian*" — abelian is a property of a group (or a set of operators under composition), not of a single operator.
Recommended change: "the lattice translations form an abelian group" / "the translation operators commute."
-->


That is, $\{\ket{\tilde{\mathbf{a}}^{(i)}\_{2}}\}$ will be expressed as:

$$
\begin{equation}
\ket{\tilde{\mathbf{a}}^{(1)}_{2}} = e^{ik_{2}}\ket{\tilde{\mathbf{0}}^{(1)}},~\text{and}~\ket{\tilde{\mathbf{a}}^{(2)}_{2}} = e^{ik'_{2}}\ket{\tilde{\mathbf{0}}^{(2)}}
\end{equation}
$$

This will hold for $\mathbf{a}\_{3}$, and there exists a crystal momentum $\mathbf{k}$ such that:

$$
\begin{equation}
\boxed{\ket{\mathbf{R}} = e^{i\mathbf{k}\cdot\mathbf{R}}\ket{\mathbf{0}}}
\end{equation}
$$
<!-- REVIEW: [medium]
Issue: Sign of the phase versus your own $T_{\mathbf{R}}$ convention. You defined $T_{\mathbf{R}}f(\mathbf{r})=f(\mathbf{r}-\mathbf{R})$ (Eq. 1-2). For a standard Bloch state $\psi_{\mathbf{k}}(\mathbf{r})=e^{i\mathbf{k}\cdot\mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$ this gives $T_{\mathbf{R}}\psi_{\mathbf{k}}=e^{-i\mathbf{k}\cdot\mathbf{R}}\psi_{\mathbf{k}}$. So with $\ket{\mathbf{R}}\equiv T_{\mathbf{R}}\ket{\mathbf{0}}$ the eigenvalue is $e^{-i\mathbf{k}\cdot\mathbf{R}}$, i.e. Eq. 12 as written implicitly defines $\mathbf{k}$ with the opposite sign to the usual $e^{i\mathbf{k}\cdot\mathbf{r}}u$ convention.
Why it matters: Readers cross-referencing Ashcroft-Mermin/Ziman will get a $\mathbf{k}\to-\mathbf{k}$ mismatch (group velocity, current direction, etc.). It is not wrong as a self-contained definition, but it must be flagged.
Recommended change: Either write $\ket{\mathbf{R}}=e^{-i\mathbf{k}\cdot\mathbf{R}}\ket{\mathbf{0}}$ (consistent with $T_{\mathbf{R}}f=f(\mathbf{r}-\mathbf{R})$ and $\psi=e^{i\mathbf{k}\cdot\mathbf{r}}u$), or switch the operator convention to $T_{\mathbf{R}}f(\mathbf{r})=f(\mathbf{r}+\mathbf{R})$ so that $e^{+i\mathbf{k}\cdot\mathbf{R}}$ is consistent. State which choice you make.
-->

[Not Safe] This is Bloch's theorem in its careful form.
<!-- REVIEW: [low]
Issue: "[Not Safe]" appears to be a leftover draft/status marker, not prose.
Recommended change: Remove the "[Not Safe]" tag before publishing.
-->
<!-- REVIEW: [low]
Issue: The physics of this paragraph is correct and well put (an arbitrary degenerate state is a superposition of Bloch states of the same $E$ but generally different $\mathbf{k}$). One phrase to tighten: "each is multiplied by a pure phase under any lattice translation" is exactly the eigenvalue statement $T_{\mathbf{R}}\ket{\psi}=e^{i\mathbf{k}\cdot\mathbf{R}}\ket{\psi}$ — worth stating explicitly so the reader ties it back to Eq. 12.
-->
 The eigenstates of a lattice-periodic Hamiltonian **can be chosen** so that each is multiplied by a pure phase $e^{i\mathbf{k}\cdot\mathbf{R}}$ under any lattice translation. An arbitrary state drawn from a degenerate level need *not* itself be a Bloch state: it is a superposition of Bloch states of the same energy but, in general, of different $\mathbf{k}$.

This also disposes of the apparent paradox above. Translating a solution does not manufacture an endless supply of new ones: all the translated states $T_{\mathbf{R}}\ket{0}$ lie inside the same $g$-dimensional eigenspace, so at most $g$ of them are linearly independent. In the non-degenerate case $g=1$, and the translated state is the original one up to a phase.

Bloch function is expressed as a function of a phase factor $e^{i\mathbf{k}\cdot\mathbf{r}}$ multiplied by a function $\ket{u_{n\mathbf{k}}}$ that has the periodic symmetry of the lattice ($u_{n\mathbf{k}}(\mathbf{r}) = u_{n\mathbf{k}}(\mathbf{r}-\mathbf{R})$):

$$
\begin{equation}
\ket{\psi_{n\mathbf{k}}} = e^{i\mathbf{k}\cdot\mathbf{r}}\ket{u_{n\mathbf{k}}}
\end{equation}
$$

with the crystal momentum $\mathbf{k}$ that labels the state, and the band index $n$. If one applies the translation operator for both sides, one gets:

$$
\begin{align}
T_{\mathbf{R}}\ket{\psi_{n\mathbf{k}}} &= T_{\mathbf{R}}[e^{i\mathbf{k}\cdot\mathbf{r}}\ket{u_{n\mathbf{k}}}] \nonumber \\
&= e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\ket{u_{n\mathbf{k}}}
\end{align}
$$

This is another statement that the eigenvalue of a Bloch state for the translation operator is given by the phase factor $e^{-i\mathbf{k}\cdot\mathbf{R}}$. Multiplying $\bra{\mathbf{r}}$, the relationship leads to:

$$
\begin{gather}
\braket{\mathbf{r}|T_{\mathbf{R}}|\psi_{n\mathbf{k}}} = \braket{\mathbf{r}-\mathbf{R}|\psi_{n\mathbf{k}}} = e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{R})}\braket{\mathbf{r}|u_{n\mathbf{k}}} \rightarrow e^{-i\mathbf{k}\cdot\mathbf{R}}\braket{\mathbf{r}|\psi_{n\mathbf{k}}}, \nonumber \\\\
\boxed{\therefore \braket{\mathbf{r}-\mathbf{R}|\psi_{n\mathbf{k}}} = e^{-i\mathbf{k}\cdot\mathbf{R}}\braket{\mathbf{r}|\psi_{n\mathbf{k}}}}
\end{gather}
$$

---

## References

1. Ziman, J. M. _Principles of the Theory of Solids_. (Cambridge University Press, Cambridge, 1972).
2. 
<!-- REVIEW: [low]
Issue: Reference 2 is empty, and the "Ziman (p. 17)" citation should specify the edition (2nd ed., 1972) since page numbers differ between editions. The magnetic-translation / Peierls remark in the info box has no source.
Recommended change: Fill in Ref. 2 (or delete the blank entry) and add a reference for the magnetic translation group (e.g. J. Zak, Phys. Rev. 134, A1602 (1964)) supporting the info-box claim.
-->
<!-- REVIEW: priority checklist
[medium] Line 50: rename energy eigenstate away from $\ket{\mathbf{r}}$ (collides with position ket); fix $H(\mathbf{r})$ vs $H(\mathbf{r}-\mathbf{R})$ wording.
[medium] Line 50 vs Eq. 4: reconcile $T_{\mathbf{R}}\ket{\mathbf{r}}=\ket{\mathbf{r}-\mathbf{R}}$ with $T_{\mathbf{a}_1}\ket{\mathbf{0}}=\ket{\mathbf{a}_1}$ (opposite sign).
[medium] Eq. 12: phase sign inconsistent with the stated $T_{\mathbf{R}}f(\mathbf{r})=f(\mathbf{r}-\mathbf{R})$ convention ($e^{-i\mathbf{k}\cdot\mathbf{R}}$ expected).
[medium] Line 166: $k_1,k_1'$ are scalar phases $=\mathbf{k}\cdot\mathbf{a}_1$, not vectors — drop "same direction/different magnitude"; justify $|d_{ii}|=1$ via unitarity.
[medium] Info box: $e^{i\phi}$ is the Aharonov-Bohm unit-cell flux phase $2\pi\Phi/\Phi_0$ of magnetic translation operators, not "the Peierls phase" (verify vs Zak 1964).
[low] Line 25: state $n_i\in\mathbb{Z}$. Line 177/Eq. 10: note $d_{11}\neq d_{22}$ assumption. Info box: "abelian" is a group property. "[Not Safe]" draft marker; empty Ref. 2; specify Ziman edition.
-->
