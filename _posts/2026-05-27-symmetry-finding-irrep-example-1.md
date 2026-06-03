---
title: "Example for group theory 1"
date: 2026-05-27 16:00:00 +0900
categories: [Physics, Symmetry]
tags: [symmetry, group-theory, example]
math: true
toc: true
---

## How to find the irreducible basis for $\Gamma^{-}_{4}$?

The character table of the point group $O_h$ for $T_{1u}$ ($\Gamma^{-}_{4}$) is give by:

|          | $E$ | $8C_{3}$ | $6C'_{2}$ | $6C_{4}$ | $3C_{2}$ | $I$  | $6S_{4}$ | $8S_{6}$ | $3\sigma_{h}$ | $6\sigma_{d}$ |
| -------- | --- | -------- | --------- | -------- | -------- | ---- | -------- | -------- | ------------- | ------------- |
| $T_{1u}$ | $3$ | $0$      | $-1$      | $1$      | $-1$     | $-3$ | $-1$     | $0$      | $1$           | $1$           |

For a given simple cubic lattice with bases located at each lattice point, let us discuss how $\ket{\phi_{1}}$ is written as the irrep. basis of $T_{1u}$. In order to do that, one should use the projection operator:

$$
\begin{equation}
P^{\mu} = \frac{d_{\mu}}{|G|}\sum_{g \in O_{h}}\chi^{\mu}(g)R(g)
\end{equation}
$$

where $d_\mu$ is the dimension of $\mu$th irrep, $|G|$ is the order of the group, $\chi^{\mu}(g)$ is the character of $\mu$th irrep, and $R(g)$ is the symmetry operator. The dimension of $T_{1u}$ irrep is given by $\chi^{T_{1u}}(E) = 3$, and the order of the group $|G|$ is $48$.

The next step is to find where the basis at site $1$, $\ket{\phi_{1}}$ maps to for each group element $g$:

* $g = E$.

$$
\begin{equation}
\chi^{T_{1u}}(E)R(E)\ket{\phi_{1}} = 3\times\ket{\phi_{1}}
\end{equation}
$$

* $g = 6C'\_{2}$.

The $g = 6C'\_{2}$ are the rotations about midpoint axes. Referring [BCS](https://cryst.ehu.es/cgi-bin/cryst/programs/nph-point_genpos?num=32), one can figure out where does it explicitly map to. For example, a rotation $C'\_{2}$ along the axis $[011]$ transforms $(x,y,z)$ to $(-x,z,y)$. Since one has $\ket{\phi_{1}}$ at $(-,-,-)$, acting this operator yields $(+,-,-)$ which corresponds to $\ket{\phi_{2}}$. Doing for all cases:

$$
\begin{equation}
\chi^{T_{1u}}(6C'_{2})R(6C'_{2})\ket{\phi_{1}} = (-1)\times\left[\ket{\phi_{2}} + \ket{\phi_{4}} + \ket{\phi_{5}} + 3\ket{\phi_{7}}\right]
\end{equation}
$$

* $g = 6C_{4}$.

$$
\begin{equation}
\chi^{T_{1u}}(6C_{4})R(6C_{4})\ket{\phi_{1}} = (+1)\times\left[2\ket{\phi_{2}} + 2\ket{\phi_{4}} + 2\ket{\phi_{5}}\right]
\end{equation}
$$

* $g = 3C_{2}$.

$$
\begin{equation}
\chi^{T_{1u}}(3C_{2})R(3C_{2})\ket{\phi_{1}} = (-1)\times\left[\ket{\phi_{3}} + \ket{\phi_{6}} + \ket{\phi_{8}}\right]
\end{equation}
$$

* $g = I$.

$$
\begin{equation}
\chi^{T_{1u}}(I)R(I)\ket{\phi_{1}} = (-3)\times\ket{\phi_{7}}
\end{equation}
$$

* $g = 6S_{4}~(C_{4}\times\sigma_{\perp})$.

$$
\begin{equation}
\chi^{T_{1u}}(6S_{4})R(6S_{4})\ket{\phi_{1}} = (-1)\times\left[2\ket{\phi_{3}} + 2\ket{\phi_{6}} + 2\ket{\phi_{8}}\right]
\end{equation}
$$

* $g = 3\sigma_{h}$.

$$
\begin{equation}
\chi^{T_{1u}}(3\sigma_{h})R(3\sigma_{3})\ket{\phi_{1}} = (+1)\times\left[\ket{\phi_{2}} + \ket{\phi_{4}} + \ket{\phi_{5}}\right]
\end{equation}
$$

* $g = 6\sigma_{d}$.

$$
\begin{equation}
\chi^{T_{1u}}(6\sigma_{d})R(6\sigma_{d})\ket{\phi_{1}} = (+1)\times\left[\ket{\phi_{3}} + \ket{\phi_{6}} + \ket{\phi_{8}} + 3\ket{\phi_{1}}\right]
\end{equation}
$$

The $6$ mirror planes for $g = 6\sigma_{d}$ are shown in Fig.~. Finally, summing all them yields:

$$
\begin{align}
P^{T_{1u}}\ket{\phi_{1}} &= \frac{1}{16}\left[6\ket{\phi_{1}}+2\ket{\phi_{2}}-2\ket{\phi_{3}}+2\ket{\phi_{4}}+2\ket{\phi_{5}}-2\ket{\phi_{6}}-6\ket{\phi_{7}}-2\ket{\phi_{8}}\right] \nonumber \\
&= \frac{1}{8}\left[3\ket{\phi_{1}}+\ket{\phi_{2}}-\ket{\phi_{3}}+\ket{\phi_{4}}+\ket{\phi_{5}}-\ket{\phi_{6}}-3\ket{\phi_{7}}-\ket{\phi_{8}}\right]
\end{align}
$$

*Some cautions*. While doing so, all the rotation axes should be the same. If a lattice point maps to outside of the unit cell, one reduces it to the home unit cell by the lattice vector $\mathbf{R}$. However, this generates an additional phase factor $e^{i\mathbf{k}\cdot\mathbf{R}}$ at $\mathbf{k} \neq \mathbf{0}$.

