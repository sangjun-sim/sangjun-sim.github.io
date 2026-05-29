---
title: Tight-binding approximation (1)
date: 2026-05-29 21:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - physics
  - cond-matter
math: true
toc: true
---

## Tight-binding approximation in the first quantization formalism

The tight-binding approximation is one of the methods that calculates the electronic structure of a crystal structure on the premise that the wave function of an electron in a solid is well-localized in real space. Specifically, the wave functions are assumed to decay exponentially with distance. Thus, unlike the nearly free electron method, this is a good approximation when the electrons are well bound to the atom [Ziman p.94]. Additionally, this approximation describes the behavior of electrons; electrons in the ground state are present around the atom, but due to the uncertainty principle, they are not always at the same site and can move from one site to another. In this case, one interprets the electrons as tunneling between the potentials of the separated atoms. How well the electrons tunnel is affected by how well their wave functions overlap, and one can see the result in the band structure [Girvin p.117]. One of the primary purposes of this method is to describe complex electronic structures in a simple way using a 'minimal basis'. Conventionally, the basis is treated as the atomic orbital. In particular, the basis can be chosen by considering the minimum number of valence electrons of the atoms. For instance, the basis for silicon can be selected as the $sp^{3}$ hybrid orbital.

From now on, the basis will be written as:

$$
\begin{equation}
\braket{\mathbf{r}|\varphi_{\alpha}}
\end{equation}
$$

which is the orbital of an $\alpha$th atom located at $\mathbf{r}$. Moreover, it will also be assumed that this basis is 'orthonormal and localized' at the center of the atom. As a result, the basis for the $\alpha$th atom and another basis for the $\beta$th atom are orthogonal to each other. The formula for this relationship is written as follows:

$$
\begin{equation}
	\sum\limits_\mathbf{r} \braket{\mathbf{r}|\varphi_{\alpha}}^{*}\braket{\mathbf{r}-\mathbf{R}|\varphi_{\beta}} = \delta_{\alpha\beta}\delta_{\mathbf{R}}
\end{equation}
$$

where $\mathbf{R}$ is the lattice vector, so $\braket{\mathbf{r}-\mathbf{R}\vert\varphi_{\beta}}$ represents another wave function that is away from $\mathbf{R}$. Such an orthonormal wave function is called a Wannier function. Note that the assumption that the bases on the different atoms are orthogonal is generally invalid since the overlap between the different wave functions can be non-zero. Such non-zero value (or matrix) is called an 'overlap matrix', denoted as $S_{\alpha\beta,\mathbf{R}}$. The assumption of orthonormality is made here to avoid the issue of non-orthogonality, which would make it impossible to normalize the Bloch state to unity in subsequent discussions [Girvin p. 118]. Thus, one always has $S_{\alpha\beta,\mathbf{R}} = 1$.

Since the crystal structure is periodic in space, the basis is also periodic, and the momentum will be a good quantum number. Once one has established the orthonormality assumption, one can next consider the Fourier-transformed form of the Wannier basis. This state is called the quasi-Bloch state and is expressed as $\ket{\chi_{\alpha\mathbf{k}}}$. Additionally, this is given by the linear combination of the Wannier bases:

$$
\begin{equation}
	\braket{\mathbf{r}|\chi_{\alpha\mathbf{k}}} = \frac{1}{\sqrt{N}}\sum\limits_{\mathbf{R}} e^{i\mathbf{k}\cdot\mathbf{R}}\braket{\mathbf{r}-\mathbf{R}|\varphi_{\alpha}}
\end{equation}
$$

where $N$ is the normalization constant for the sum of the lattice vector over $N$ unit cells. This function is named a quasi-'Bloch state' because it satisfies the Bloch theorem, which states that the state is invariant for translations of the lattice vector $\mathbf{R}$. However, it is not a true Bloch state since it is not an eigenstate of the Hamiltonian in general. To check whether a quasi-Bloch state given above satisfies the Bloch theorem, $\hat{T}\_{\mathbf{R}'}\braket{\mathbf{r}\vert\chi_{\alpha\mathbf{k}}} \stackrel{?}= e^{i\mathbf{k}\cdot\mathbf{R}'}\braket{\mathbf{r}\vert\chi_{\alpha\mathbf{k}}}$, one redefines the translated lattice vector $\mathbf{R}-\mathbf{R}'$ as $\mathbf{R}''$. The process is as follows:

$$
\begin{align}
	\hat{T}_{\mathbf{R}'}\braket{\mathbf{r}|\chi_{\alpha\mathbf{k}}} &= \braket{\mathbf{r}+\mathbf{R}'|\chi_{\alpha\mathbf{k}}} \nonumber \\
	&= \frac{1}{\sqrt{N}}\sum\limits_{\mathbf{R}''}e^{i\mathbf{k}\cdot(\mathbf{R}'+\mathbf{R}'')}\braket{\mathbf{r}-\mathbf{R}''|\varphi_{\alpha}} \nonumber \\
	&= e^{i\mathbf{k}\cdot\mathbf{R}'}\frac{1}
	{\sqrt{N}}\sum\limits_{\mathbf{R}''}e^{i\mathbf{k}\cdot\mathbf{R}''}\braket{\mathbf{r}-\mathbf{R}''|\varphi_{\alpha}} \nonumber \\
	&= e^{i\mathbf{k}\cdot\mathbf{R}'}\braket{\mathbf{r}|\chi_{\alpha\mathbf{k}}}
\end{align}
$$

Thus, a quasi-Bloch state satisfies the Bloch theorem. However, the remaining question is whether or not the quasi-Bloch state is orthonormal. This can be shown by:

$$
\begin{align}
	\braket{\chi_{\alpha\mathbf{k}}|\chi_{\beta\mathbf{k}}} &= \frac{1}{N}\sum\limits_{\mathbf{R}}\sum\limits_{\mathbf{R}'} e^{-i\mathbf{k}\cdot(\mathbf{R}-\mathbf{R}')} \braket{\varphi_{\alpha}|\mathbf{r}-\mathbf{R}}\braket{\mathbf{r}-\mathbf{R}'|\varphi_{\beta}} \nonumber \\
	&= \frac{1}{N}\sum\limits_{\mathbf{R}}\sum\limits_{\mathbf{R}'} e^{-i\mathbf{k}\cdot(\mathbf{R}-\mathbf{R}')} \braket{\varphi_{\alpha}|\mathbf{r}-\mathbf{R}}\braket{\mathbf{r}-\mathbf{R}|\mathbf{r}-\mathbf{R}'}\braket{\mathbf{r}-\mathbf{R}'|\varphi_{\beta}} \nonumber \\
	&= \sum\limits_{\mathbf{R}'} e^{i\mathbf{k}\cdot\mathbf{R}'} \braket{\varphi_{\alpha}|\mathbf{r}-\mathbf{R}'}\braket{\mathbf{r}-\mathbf{R}'|\varphi_{\beta}} = \delta_{\alpha\beta}
\end{align}
$$

As mentioned above, if one drops the orthogonality assumption on the basis that one made earlier, the quasi-Bloch state cannot be normalized. Instead, it will introduce the nonzero value,  $\braket{\chi_{\alpha\mathbf{k}}\vert\chi_{\beta\mathbf{k}}} = \epsilon(\mathbf{k})\delta_{\alpha\beta}$ [Girvin p.118]. (It is always true that it is orthogonal for different $\mathbf{k}$ and $\mathbf{k}'$ ($\mathbf{k},\mathbf{k}' \in \rm 1st~BZ$) as long as they satisfy the Bloch theorem; $\braket{\chi_{\alpha\mathbf{k}}\vert\chi_{\beta\mathbf{k}'}} = 0$.) 

A quasi-Bloch state is always orthogonal by the Bloch theorem and may not be normalized depending on the underlying normalization condition. Now, one can express the eigenstate of the Bloch Hamiltonian by expanding the quasi-Bloch state [Kaxiras p.77]: [how?]

$$
\begin{equation}
	\ket{\psi_{n\mathbf{k}}} = \sum\limits_{\alpha} \mathcal{C}_{n\alpha\mathbf{k}}\ket{\chi_{\alpha\mathbf{k}}}
\end{equation}
$$

where $\mathcal{C}_{n\alpha\mathbf{k}}$ is the coefficient to be determined by solving the eigenvalue problem:

$$
\begin{equation}
	H_{n\mathbf{k}}\mathcal{C}_{n\mathbf{k}} = \varepsilon_{n\mathbf{k}}\mathcal{C}_{n\mathbf{k}}
\end{equation}
$$

The way to solve this problem is basically to diagonalize the matrix of $N\times N$ at each $\mathbf{k}$-point. (where $N$, the dimension of the system, is the product of the number of atoms in the unit cell and the number of orbitals of each atom.) Before that, let's first look at how to express the tight-binding Hamiltonian in real space. After finding the basis and state according to the symmetry of the Hamiltonian (in this case, translational symmetry), the next thing to find is the observable. To find this, one should rewrite the Hamiltonian as follows:

$$
\begin{equation}
	\hat H = \frac{\hat{\mathbf{p}}^{2}}{2m_{e}} + \sum\limits_{\alpha}\hat{V}(\mathbf{r-\mathbf{R}_{\alpha}})
\end{equation}
$$

The first term represents the kinetic energy term, and the second term represents the Coulomb potential of the individual atom that is positioned at $\mathbf{R}\_{\alpha}$. Given that the basis of the eigenstate of this Hamiltonian is $\ket{\varphi_{\alpha}}$, the eigenvalue problem can be written as follows:

$$
\begin{equation}
	\hat H \ket{\varphi_{\alpha}} = \left[\frac{\hat{\mathbf{p}}^{2}}{2m_{e}} + \hat{V}(\mathbf{r}-\mathbf{R}_{\alpha})\right]\ket{\varphi_{\alpha}} + \sum\limits_{\alpha \neq \beta} \hat{V}(\mathbf{r}-\mathbf{R}_{\beta})\ket{\varphi_{\alpha}}
\end{equation}
$$

The first term represents the Hamiltonian for a single electron around the $\alpha$th atom. Therefore, if one calls the eigenvalue of this term $\varepsilon_{\rm at}$, one can interpret it as the energy of an electron around a single atomic nucleus [Simon p.100]. The second term represents the state of the single electron around the $\alpha$th atom with respect to the potential of the other atom ($\beta$th atom). To distinguish between $\mathbf{R}\_{\alpha}$, the position of the $\alpha$th atom, and $\mathbf{R}_{\beta}$, the position of the $\beta$th atom, we use subscripts to denote different indices of the atoms. Based on this discussion, one can rephrase the above expression in a simpler way:

$$
\begin{equation}
	\hat H \ket{\varphi_{\alpha}} = \varepsilon_{\rm at}\ket{\varphi_{\alpha}} + \sum\limits_{\alpha \neq \beta} \hat{V}(\mathbf{r}-\mathbf{R}_{\beta})\ket{\varphi_{\alpha}}
\end{equation}
$$

However, this expression only indicates the expectation value at the $\alpha$th atom. To read all the information in $\hat{H}$, we need to find its matrix elements. This can be done by simply multiplying both sides by $\bra{\varphi_{\gamma}}$:

$$
\begin{align}
	\braket{\varphi_{\gamma}|\hat H|\varphi_{\alpha}} &= \varepsilon_{\rm at}\braket{\varphi_{\gamma}|\varphi_{\alpha}} + \sum\limits_{\alpha \neq \beta} \braket{\varphi_{\gamma}|\hat{V}(\mathbf{r}-\mathbf{R}_{\beta})|\varphi_{\alpha}} \nonumber \\
	&= \varepsilon_{\rm at}\delta_{\gamma\alpha} + \sum\limits_{\alpha \neq \beta} \braket{\varphi_{\gamma}|\hat{V}(\mathbf{r}-\mathbf{R}_{\beta})|\varphi_{\alpha}}
\end{align}
$$

What one should note from this expression is that one now knows all the components of the Hamiltonian matrix, and the physical meaning of the second term is clear: it means that an electron that was in the $\alpha$th atom can be transferred (skipped) to another $\gamma$th atom by the interaction of the $\beta$th atom. Here, in general, the index $\gamma$ can be $\alpha$, and it can be $\alpha+1$ or $\beta$, since there is no constraint on it ($\alpha \neq \beta$), unlike $\beta$. However, if one assumes that the electron can only transfer to one atom around the $\alpha$th atom, then the only possible combinations of $\gamma$ are $\alpha$, $\alpha+1$, and $\alpha-1$. Based on this, one can express the components of the second summation term by counting the number of cases [Simon p.101]:

$$
\begin{equation}
	\sum\limits_{\alpha \neq \beta} \braket{\varphi_{\gamma}|\hat{V}(\mathbf{r}-\mathbf{R}_{\beta})|\varphi_{\alpha}} = \begin{cases}
		v & \mathrm{if}~~ \gamma = \alpha \\
		-t & \mathrm{if}~~\gamma = \alpha\pm 1 \\
		0 & \rm otherwise.
	\end{cases}
\end{equation}
$$

Here $t$ is called the hopping parameter and represents the degree to which electrons from other atoms can transfer, and one conventionally gives this value a negative sign. And $v$ is the interaction experienced by electrons at the same site. In this sense, $v$ is similar to $\varepsilon_{\rm at}$. If one expresses the sum of these as the on-site energy $\varepsilon_{0}$ ($= \varepsilon_{\rm at} + v$), one can simply represent the diagonal components of the Hamiltonian. It's important to note, however, that they have different physical origins: $\varepsilon_{\rm at}$ is the eigenvalue of the Hamiltonian of a single atom, as one saw a moment ago. However, $v$ represents the energy of an electron that cannot move to another site, which is the result of interacting with the atomic potentials of other sites. Based on that discussion, one can rewrite the Hamiltonian as follows:

$$
\begin{equation}
	\braket{\varphi_{\gamma}|\hat H|\varphi_{\alpha}} = \varepsilon_{0}\delta_{\gamma\alpha} -t(\delta_{\gamma,\alpha-1} + \delta_{\gamma,\alpha+1})
\end{equation}
$$

Technically, this Hamiltonian is called the nearest-neighbor or 1st nearest-neighbor tight-binding Hamiltonian because it considers hopping up to just one atom. Furthermore, it is intuitively obvious that this Hamiltonian is Hermitian when the hopping parameter $t$ is real ($H_{\gamma\alpha}^{\dagger} = H_{\alpha\gamma}$). Basically, this Hamiltonian is described in real space, and its eigenvalues will tell one how the energy between the atoms varies with distance. However, this description does not tell that the energy dispersion in the momentum space. Therefore, one needs to convert this Hamiltonian to reciprocal space. To do this, one can replace the basis (atomic wave function) written in real space with a Bloch state via a Fourier transform, and then rewrite the crystal Hamiltonian with that state. This can be expressed mathematically as:

$$
\begin{equation}
	\hat H \ket{\psi_{\mathbf{k}}} = \varepsilon_{\rm at}\ket{\psi_{\mathbf{k}}} + \frac{1}{\sqrt{N}} \sum\limits_{\mathbf{R}_{\alpha}} \sum\limits_{\alpha \neq \beta} \hat{V}(\mathbf{r}-\mathbf{R}_{\beta}) e^{i\mathbf{k}\cdot\mathbf{R}_{\alpha}} \ket{\varphi_{\alpha}}
\end{equation}
$$

The first thing to note here is that $\hat{V}(\mathbf{r}-\mathbf{R}\_{\beta})$ has a $\mathbf{R}$ dependence on $\mathbf{R}$, so it cannot be directly converted to a Bloch state. Also, when rewriting the Hamiltonian as a Bloch state, one assumes that the undetermined parameter $\mathcal{C}\_{n\mathbf{k}}$ is $1$ for convenience. In general, $\mathcal{C}\_{n\mathbf{k}}$ is the value computed by diagonalizing $\hat{H}$, which is equivalent to assuming that the Bloch state, $\ket{\psi_{n\mathbf{k}}}$, and the quasi-Bloch state, $\ket{\chi_{\alpha\mathbf{k}}}$, are equal. As a representation of the matrix elements of the Hamiltonian in real space, one can write $\bra{\psi_{\mathbf{k}}}$ with $\bra{\psi_{\mathbf{k}}}$ on both sides:

$$
\begin{equation}
	\braket{\psi_{\mathbf{k}}|\hat H|\psi_{\mathbf{k}}} = \varepsilon(\mathbf{k}) = \varepsilon_{\rm at} + \frac{1}{N} \sum\limits_{\mathbf{R}_{\alpha},\mathbf{R}_{\gamma}} \sum\limits_{\alpha \neq \beta} e^{i\mathbf{k}\cdot(\mathbf{R}_{\alpha}-\mathbf{R}_{\gamma})} \braket{\varphi_{\gamma}|\hat{V}(\mathbf{r}-\mathbf{R}_{\beta})|\varphi_{\alpha}}
\end{equation}
$$

In the first term, one used $\braket{\psi_{\mathbf{k}}\vert\psi_{\mathbf{k}}} = 1$ in the first term. The second term is a form of the Fourier transform of the hopping parameter in real space. If one takes the same number of possible values for this term as above but only for the first nearest neighbor, then the above expression is expressed as:

$$
\begin{align}
	\varepsilon(\mathbf{k}) &= \varepsilon_{\rm at} + \frac{1}{N} \left[Nv - t \sum\limits_{\mathbf{R}_{\alpha},\mathbf{R}_{\gamma(\alpha)}} e^{i\mathbf{k}\cdot(\mathbf{R}_{\alpha}-\mathbf{R}_{\gamma(\alpha)})}\right] \nonumber \\
	&= \varepsilon_{0} - \frac{t}{N} \sum\limits_{\mathbf{R}_{\alpha},\mathbf{R}_{\gamma(\alpha)}} e^{i\mathbf{k}\cdot(\mathbf{R}_{\alpha}-\mathbf{R}_{\gamma(\alpha)})}
\end{align}
$$

where the relation $\varepsilon_{0} = \varepsilon_{\rm at} + v$ has been used, and it is explicitly shown that $\gamma$ depends on $\alpha$. As a simple example, for an infinite one-dimensional chain system with a lattice parameter of $a$ along the $x$ axis, one can show that $\mathbf{R}\_{\alpha}-\mathbf{R}\_{\gamma(\alpha)} = a\mathbf{\hat{x}}$, and the Hamiltonian is described by:

$$
\begin{equation}
	\varepsilon(\mathbf{k}) = \varepsilon_{0} - \frac{t}{N}N(e^{i\mathbf{k}\cdot a\mathbf{\hat{x}}}+e^{-i\mathbf{k}\cdot a\mathbf{\hat{x}}}) = \varepsilon_{0}-2t\cos k_{x}a
\end{equation}
$$

This energy dispersion is shown in the Fig.~. The basic information one can get from the band structure calculated by the tight-binding approximation is the bandwidth (the difference between the maximum and minimum of the band). For the bands calculated above, the bandwidth is $W = 4t$. This value shows how widely distributed they are in energy space and is proportional to the hopping parameter. Thus, a large bandwidth means that the electrons are well-hopped from atom to atom.
