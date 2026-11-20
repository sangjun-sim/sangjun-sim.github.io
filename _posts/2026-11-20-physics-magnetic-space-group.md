---
title: Magnetic Space Group
date: 2026-11-20 16:31:00 +0900
categories:
  - Physics
tags:
  - physics
math: true
toc: true
---

## Classification of a magnet
The space group, which is the symmetry of the charge distribution $\rho(x,y,z)=\braket{\rho}_{t}$ takes time-reversal symmetry $T$ to be an identity operator. The symmetry of space group is specified by the $32$ classes that include the rotation, reflection, screw, and glide symmetries. If these classes are combined with the time-reversal symmetry, then there are $58$ **magnetic crystal classes**. Here, unlike the space group that qualitatively determines the polarization vector $\mathbf{P}$, the magnetic crystal symmetry determines the microscopic magnetic moment density distribution $\mathbf{M}(x,y,z) = \mathbf{r}\times\mathbf{j}(x,y,z)$. This distribution can be regarded as the symmetry of the configuration and orientation of the time-averaged values of the magnetic moments $\boldsymbol{\mu}$ of the atoms. The sum of them classifies the magnets into two large species: a **ferromagnet** (non-zero magnetic moment) and an **antiferromagnet** (zero magnetic moment).

More specifically, one distinguishes two different magnetic configurations by the magnetic sublattice, a set of atoms in the lattice having equal values of $\boldsymbol{\mu}$. Antiferromagnets have two magnetic sublattices with opposite and equal values of $\boldsymbol{\mu}$. Additionally, if the antiferromagnets have parallel or antiparallel moments, such crystals are said to be collinear. If not, they are called non-collinear antiferromagnets. The ferromagnets can have more than one sublattice and can be specified further by the direction or the magnitude of the moments. If there are two or more sublattices with different directions or magnitudes of the moments, such crystals are called **ferrimagnets**. The ferrimagnets are similar to the antiferromagnets. They share the same property that the sublattices contain different directions or magnitudes of the moments and can also be collinear or non-collinear. However, the ferrimagnets have non-zero magnetic moments.

## Magnetic Space Group (Shubnikov Group)
In the more general context, the magnetic class is written as:
$$
\begin{equation}  
M = \mathcal{G} + T\mathcal{G}  
\end{equation}  
$$
where $\mathcal{G}$ is an element of a point group and $T$ is a time-reversal symmetry. $T$ is characterized by the fact that it commutes with $\mathcal{G}$ because it does not affect any space group symmetry. These magnetic classes are categorized into four main types: Type-I is called colorless (Fedorov) group, since $T = I$. This is nothing but the space group $\mathcal{G}$. Type-II has a time-reversal symmetry $T$. Since $T$ flips all moments, the net moment becomes zero. Therefore, it describes the paramagnet phase. Type-III and Type-IV, otherwise, have no single $T$ but the combination of $T$ and other symmetries. They both are called black-and-white (dichromatic) group. How do one constructs such types? First, consider a set $\mathcal{H}$ which includes the elements of $\mathcal{G}$ that are not multiplied by $T$. This set contains the identity element. Otherwise, the $M$ would have the element of $T$ itself so that it belongs to the type-II class. Then, all other elements of $\mathcal{G}$ appear in $M$ multiplied by $T$; since $T^{2} = I$, all products of pairs of these elements belong to $\mathcal{H}$. It follows that $\mathcal{H}$ is a subgroup of $\mathcal{G}$ with index $2$. Using the unitary subgroup $H$, $M$ is expressed as:
$$
\begin{equation}
M = H + (\mathcal{G}-H)T
\end{equation}
$$
For Type-III, $T$ is coupled with a point group symmetry, while $T$ is combined with translation symmetry and $M$, $\mathcal{G}$ share the same point group for Type-IV. Either ferromagnet or antiferromagnet belongs to type-III or type-IV. The process of finding the magnetic class transforms into finding the subgroup with index $2$ in all crystal classes. 

If the character of an irrep is one dimensional, this is easily done by looking at the character table of a point group. Note that every representation has an equal number of characters $+1$ and $-1$ and the elements with $+1$ character form a subgroup with index $2$. One can create a magnetic class by multiplying all elements by $T$ except those with the $+1$ character. In the Landau's book, the character table for the $C_{4v}$ point group is represented as an example:

|         | $E$ | $C_{2}$ | $2C_{4}$ | $2\sigma_{v}$ | $2\sigma'_{v}$ |
| ------- | --- | ------- | -------- | ------------- | -------------- |
| $A_{1}$ | 1   | 1       | 1        | 1             | 1              |
| $A_{2}$ | 1   | 1       | 1        | -1            | -1             |
| $B_1$   | 1   | 1       | -1       | 1             | -1             |
| $B_2$   | 1   | 1       | -1       | -1            | 1              |
| $E$     | 2   | -2      | 0        | 0             | 0              |

The representation $B_{1}$ has the elements $E$, $C_{2}$, and $2\sigma_{v}$ with the character $+1$ that form a subgroup $C_{2v}$ and the elements $2C_{4}$ and $2\sigma'_{v}$ with the character $-1$_._ Thus, it has the same magnetic class $C_{4v}$, whose elements are $E$, $C_{2}$, $2\sigma_{v}$, $2TC_{4}$, and $2T\sigma'_{v}$. Also, the unitary subgroup $H$ is a subgroup of the color group, which has the same number of elements as the point group. Since the color group $M$ is represented as the sum of $H$ and $(\mathcal{G}-H)T$, if a material has a point group of $2/m$, it would have a magnetic point group of $2/m$, $2/m1'$, $2/m'$, $2'/m$, or $2'/m'$ [Hamermesh p.65]. If one wants to go back to the point group, **get rid of the primes** (and $1'$), then you will get the corresponding point group!

## Practical determination of magnetic space group
First, prepare a structure (POSCAR) and determine its symmetry using software tools such as phonopy, spglib, or aflowlib. For a monolayer with a honeycomb lattice, the $P\bar{3}1m$ space group is possible, so this example is based on that symmetry. Next, go to "General position for space group" on the Bilbao Crystallographic Server (BCS) website to identify the symmetry operators associated with the given space group. For $P\bar{3}1m$, there are $2C_{3z}$, $3C_{2}$, $P$, $2PC_{3z}$, and $3m$. The subsequent step involves calculating the determinant, $\det(R)$, of each symmetry operator $R$. This value can be obtained by computing the determinant of the upper-left $3\times 3$ submatrix of the matrix representation provided by the BCS. For instance, the matrix form for the $C_{3z}$ operator, as retrieved from the website, is given as follows:
$$
\begin{equation}
R(C_{3z}) = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & -1 & 0 & 0 \\
0 & 0 & 1 & 0
\end{bmatrix}
\end{equation}
$$
In this case, the values ​​in the fourth column—corresponding to the translation part—are all zero for $C_{3z}$, which is a pure rotation. Consequently, the determinant for this operator is $-1$. Once the matrix representation and the determinant of a symmetry operator are established, the remaining task is to determine how a given moment transforms under that symmetry. This can be assessed by examining the following relationship for a given $R$:
$$
\begin{equation}
m' = \det(R)\cdot R\cdot m
\end{equation}
$$
For example, for $m_{yz}$ with $m = (1, 0, 0)$, the transformation is as follows:
$$
\begin{equation}
\begin{aligned}
m' &= \det(m_{yz})\cdot m_{yz} \cdot (1,0,0)^{\rm T} \\
&= (-1)\times\begin{bmatrix}
-1 & 0 & 0 \\
-1 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
1 \\ 0 \\ 0
\end{bmatrix} = \begin{bmatrix}
1 \\ 0 \\ 0
\end{bmatrix}
\end{aligned}
\end{equation}
$$
If $m$ transforms as $+m$, the operator is classified as unitary; if it transforms as $-m$, it is classified as antiunitary (in conjunction with time-reversal symmetry). For $m = (1, 0, 0)$, the set of operators is given by $\{E, TC_2, Tm, P\}$. We now require the general positions for these operators. For each operator, we list the coordinates in the order $(x, y, z, T)$, where $T$ indicates the presence of time reversal (assigning a value of $-1$ for operators that involve time reversal):
$$
\begin{equation}
\begin{aligned}
&E: (x,y,z,+1), \\
&TC_{2}: (-x+y,y,-z,-1), \\
&P: (-x,-y,-z,+1), \\ 
&Tm: (x-y,-y,z,-1)
\end{aligned}
\end{equation}
$$
Then, in BCS website, enter the `Identify magnetic group` menu in the `Magnetic Symmetry and Applications` menu. If we write the general positions above, one can see that MSG is classified as $C2'/m'$ (12.62). It belongs to Type-II MSG. At this time, the magnetic point group is simply $2'/m'$ with the translation part, $C$, removed.