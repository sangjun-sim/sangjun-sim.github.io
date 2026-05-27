---
title: "Example for group theory 2"
date: 2026-05-27 16:00:00 +0900
categories: [Physics, Symmetry]
tags: [symmetry, group-theory, example]
math: true
toc: true
---

## How to find the irreducible basis for $\Gamma^{-}_{2}$?
The character table of the point group $O_h$ for $A_{2u}$ ($\Gamma^{-}_{2}$) is give by:

|          | $E$ | $8C_{3}$ | $6C'_{2}$ | $6C_{4}$ | $3C_{2}$ | $I$  | $6S_{4}$ | $8S_{6}$ | $3\sigma_{h}$ | $6\sigma_{d}$ |
| -------- | --- | -------- | --------- | -------- | -------- | ---- | -------- | -------- | ------------- | ------------- |
| $A_{2u}$ | $1$ | $1$      | $-1$      | $-1$     | $1$      | $-1$ | $1$      | $-1$     | $-1$          | $1$           |

The dimension of this irrep is $1$. Let us find where the basis at site $1$, $\ket{\phi_{1}}$ maps to for each group element $g$:
* $g = E$.
$$
\begin{equation}
\chi^{A_{2u}}(E)R(E)\ket{\phi_{1}} = \ket{\phi_{1}}
\end{equation}
$$
* $g = 8C_{3}$.
$$
\begin{equation}
\chi^{A_{2u}}(8C_{3})R(8C_{3})\ket{\phi_{1}} = (+1)\times\left[2\ket{\phi_{1}} + 2\ket{\phi_{3}} + 2\ket{\phi_{6}} + 2\ket{\phi_{8}}\right]
\end{equation}
$$
* $g = 6C'_{2}$.
$$
\begin{equation}
\chi^{A_{2u}}(6C'_{2})R(6C'_{2})\ket{\phi_{1}} = (-1)\times\left[\ket{\phi_{2}} + \ket{\phi_{4}} + \ket{\phi_{5}} + 3\ket{\phi_{7}}\right]
\end{equation}
$$
* $g = 6C_{4}$.
$$
\begin{equation}
\chi^{A_{2u}}(6C_{4})R(6C_{4})\ket{\phi_{1}} = (-1)\times\left[2\ket{\phi_{2}} + 2\ket{\phi_{4}} + 2\ket{\phi_{5}}\right]
\end{equation}
$$
* $g = 3C_{2}$.
$$
\begin{equation}
\chi^{A_{2u}}(3C_{2})R(3C_{2})\ket{\phi_{1}} = (+1)\times\left[\ket{\phi_{3}} + \ket{\phi_{6}} + \ket{\phi_{8}}\right]
\end{equation}
$$
* $g = I$.
$$
\begin{equation}
\chi^{A_{2u}}(I)R(I)\ket{\phi_{1}} = (-1)\times\ket{\phi_{7}}
\end{equation}
$$
* $g = 6S_{4}~(C_{4}\times\sigma_{\perp})$.
$$
\begin{equation}
\chi^{A_{2u}}(6S_{4})R(6S_{4})\ket{\phi_{1}} = (+1)\times\left[2\ket{\phi_{3}} + 2\ket{\phi_{6}} + 2\ket{\phi_{8}}\right]
\end{equation}
$$
* $g = 8S_{6}$.
$$
\begin{equation}
\chi^{A_{2u}}(8S_{6})R(8S_{6})\ket{\phi_{1}} = (-1)\times\left[2\ket{\phi_{2}} + 2\ket{\phi_{4}} + 2\ket{\phi_{5}} + 2\ket{\phi_{7}}\right]
\end{equation}
$$
* $g = 3\sigma_{h}$.
$$
\begin{equation}
\chi^{A_{2u}}(3\sigma_{h})R(3\sigma_{3})\ket{\phi_{1}} = (-1)\times\left[\ket{\phi_{2}} + \ket{\phi_{4}} + \ket{\phi_{5}}\right]
\end{equation}
$$
* $g = 6\sigma_{d}$.
$$
\begin{equation}
\chi^{A_{2u}}(6\sigma_{d})R(6\sigma_{d})\ket{\phi_{1}} = (+1)\times\left[\ket{\phi_{3}} + \ket{\phi_{6}} + \ket{\phi_{8}} + 3\ket{\phi_{1}}\right]
\end{equation}
$$
Finally, summing all them yields:
$$
\begin{align}
P^{A_{2u}}\ket{\phi_{1}} &= \frac{1}{16}\left[6\ket{\phi_{1}}-6\ket{\phi_{2}}+6\ket{\phi_{3}}-6\ket{\phi_{4}}-6\ket{\phi_{5}}+6\ket{\phi_{6}}-6\ket{\phi_{7}}+6\ket{\phi_{8}}\right] \nonumber \\
&= \frac{3}{8}\left[\ket{\phi_{1}}-\ket{\phi_{2}}+\ket{\phi_{3}}-\ket{\phi_{4}}-\ket{\phi_{5}}+\ket{\phi_{6}}-\ket{\phi_{7}}+\ket{\phi_{8}}\right]
\end{align}
$$
