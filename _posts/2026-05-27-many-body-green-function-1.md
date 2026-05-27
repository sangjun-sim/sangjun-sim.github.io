---
title: "Many-Body Green Function 1"
date: 2026-05-27 16:00:00 +0900
categories: [Physics, Many-Body Physics]
tags: [green-function, many-body, q&a]
math: true
toc: true
---

## Studying Green functions

Here are the questions that I have, and they are answered by Claude. The answers are not copied and pasted directly from the site. Instead, I included some modifications based on my understanding.

{: .prompt-tip }
> Q1. What if $V(t)$ and $V(t')$ do not commute with each other?

What we want to do is to express the scattering matrix as the multiplication of time-sliced $e^{-i\int dt~V(t)}$. If $V(t)$ commutes, one can express the scattering matrix as the simple exponential function: $e^{-i\int dt~V(t)}$. If $\left[V(t), V(t')\right] \neq 0$, Baker-Campbell-Hausdorff formula must be used.  However, this formula renders the function quite complicated. Thus, the ordering of operators does *matter*.

This is why the time-ordering operators is quintessential in many-body physics. Time-ordering operator sorts the operators (represented by interaction picture) by "time". This allows slicing the time by $\Delta t$ and multiplying the $e^{-i\Delta t V(\tau_{j})}$ to have the mathematical consistency.


{: .prompt-tip }
> Q2. Is it always possible to treat two arbitrary operators as commuting operators?

*Only in time-ordering operator*. If $A(t_{1})$ does not commute with $A(t_{2})$, $e^{A(t_{1})}e^{A(t_{2})} \neq e^{A(t_{1})+A({t_{2}})}$ in general. Once one applies the time-ordering operator $T$ to this expression, one obtains $e^{A(t_{1})}e^{A(t_{2})} = e^{A(t_{1})+A(t_{2})}$. The $S$-matrix is then expanded as the Taylor series:
$$
\begin{equation}
S(t_{2}, t_{1}) = \sum^{\infty}_{n = 0}\frac{(-i)^{n}}{n!} \int^{t_{2}}_{t_{1}} d\tau_{1} ... d\tau_{n} T\left[V(\tau_{1})\cdots V(\tau_{n})\right]
\end{equation}
$$
The following intuition must be taken: If there are $n$ scattering events, the array of $V(\tau_{j})$ ordered through $T$ is one of $n!$ permutations. Since all these $n!$ permutations are equal (what does it mean?), the integration over $[0, t]$ cancels the factor $n!$.


{: .prompt-tip }
> Q3. Which property of time-ordering operator allows the commutation?

Time-ordering operator is **not** an operator in Hilbert space. The input for this operator is the multiplication of operators that have labels of time and the output is the product ordered in time. Mathematically, its map is defined as:
$$
\begin{equation}
T: \mathcal{A}^{\otimes n} \rightarrow \mathcal{A}
\end{equation}
$$
If $A(t_{1})B(t_{2})$ ($t_{1} > t_{2}$) is given, $T[A(t_{1})B(t_{2})]$ and $T[B(t_{2})A(t_{1})]$ give the same result: $T[A(t_{1})B(t_{2})]$. For example, the noncommuting product yields $(A + B)^{2} = A^{2} + AB + BA + B^{2}$ which is not equal to $A^{2} + 2AB + B^{2}$. However, inside the time-ordering operator, the operations re-ordered in time and all expressions reduce to the (anti)-symmetric products. This allows $T[(A+B)^{2}] = T[A^{2}] + T[2AB] + T[B^{2}]$.


{: .prompt-tip }
> Q4. Is Wick's theorem assuming noninteracting system?

*Yes*. The theorem in Eq. 5. 54 is only established in noninteracting systems where creation/annihilation operators evolve in time by free particle Hamiltonian. If there is interaction in the system, one must use Gell-Mann-Low theorem to show that interacting Green function can be represented by noninteracting Green function. This is *what Feynman diagram does*.

The Wick's theorem states that
$$
\begin{equation}
G(1, ..., n; 1', ..., n') = \sum_{\substack{\textrm{all}\\\rm{contractions}}}\prod G(r - P'_{r})
\end{equation}
$$
where $P'_{r}$ denotes the permutation. For example, in the case of $n = 2$, the Green function is written as:
$$
\begin{equation}
G(1,2;1',2') = G(1 - 1')G(2 - 2') \pm G(1 - 2')G(2 - 1')
\end{equation}
$$
where $+$ for bosons and $-$ for fermions.