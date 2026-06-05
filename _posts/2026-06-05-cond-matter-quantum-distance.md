---
title: Quantum Distance
date: 2026-06-05 13:00:00 +0900
categories:
  - Physics
  - Topology
tags:
  - physics
  - geometry
  - topology
math: true
toc: true
---

{: .prompt-tip}
>Quantum geometry tensors are derived by computing the (gauge-invariant) inner product of two quantum states transformed over a parameter space.

## Quantum distance

The quantum distance is defined as the infinitesimal difference between quantum states by the variation $d\boldsymbol{\lambda}$ ([Cheng-2013](https://arxiv.org/abs/1012.1337)):

$$
\begin{align*}
ds^{2} &= ||\ket{\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})}-\ket{\psi(\boldsymbol{\lambda})}||^{2} = \left(\bra{\psi(\boldsymbol{\lambda})}+\frac{\partial}{\partial\boldsymbol{\lambda}}\bra{\psi(\boldsymbol{\lambda})}d\boldsymbol{\lambda}-\bra{\psi(\boldsymbol{\lambda})}\right)\left(\ket{\psi(\boldsymbol{\lambda})}+\frac{\partial}{\partial\boldsymbol{\lambda}}\ket{\psi(\boldsymbol{\lambda})}d\boldsymbol{\lambda}-\ket{\psi(\boldsymbol{\lambda})}\right) \\
&= \Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})} d\lambda^{\mu} d\lambda^{\nu} \\
&= (\gamma_{\mu\nu}+i\sigma_{\mu\nu}) d\lambda^{\mu} d\lambda^{\nu}
\end{align*}
$$

where the real and imaginary parts of $\Braket{\partial_{\mu}\psi(\boldsymbol{\lambda})\vert\partial_{\nu}\psi(\boldsymbol{\lambda})}$ is given by $\gamma_{\mu\nu}$ and $\sigma_{\mu\nu}$, respectively:

$$
\begin{align*}
\gamma_{\mu\nu} &= \mathrm{Re}\left[\Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}\right],\\
\sigma_{\mu\nu} &= \mathrm{Im}\left[\Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}\right]
\end{align*}
$$

Note that the $\gamma_{\mu\nu}$ is **symmetric** ($\gamma_{\mu\nu} = \gamma_{\nu\mu}$) and $\sigma_{\mu\nu}$ ($\sigma_{\mu\nu} = -\sigma_{\nu\mu}$) is **antisymmetric** since the inner product of two states is *Hermitian*. In addition, $\sigma_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}$ vanishes due to the antisymmetry of $\sigma_{\mu\nu}$ and the symmetry of $d\lambda^{\mu}d\lambda^{\nu}$. Thus, the distance is rewritten as:

$$
\begin{equation}
ds^{2} = \gamma_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}
\end{equation}
$$

*Comment*. The imaginary part; $\sigma_{\mu\nu}$ does not explicitly appear in the quantum distance. This is because quantum distance is mathematically defined in the Riemannian manifold, in which a metric must be symmetric.

## Gauge invariance of $\gamma_{\mu\nu}$

In order for $ds^{2}$ to be a quantity that measures the distance between states, $ds^{2}$ must be gauge invariant. The gauge covariant property of $\gamma_{\mu}$ can be shown by applying the $U(1)$ gauge transformation to the state; $\ket{\psi'(\boldsymbol{\lambda})} = e^{i\phi(\boldsymbol{\lambda})}\ket{\psi(\boldsymbol{\lambda})}$. Firstly, the gradient of this transformed state gives:

$$
\begin{equation}
\Ket{\frac{\partial}{\partial\lambda_{\mu}}\psi'(\boldsymbol{\lambda})} = i\frac{\partial\phi}{\partial\lambda_{\mu}}e^{i\phi(\mathbf{\boldsymbol{\lambda}})}\ket{\psi(\boldsymbol{\lambda})}+e^{i\phi(\mathbf{\boldsymbol{\lambda}})}\Ket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})}
\end{equation}
$$

The inner product of two transformed states is given by:

$$
\begin{align*}
\gamma'_{\mu\nu} &= \mathrm{Re}\left[\Braket{\frac{\partial\psi'(\boldsymbol{\lambda})}{\partial\lambda_{\mu}}|\frac{\partial\psi'(\boldsymbol{\lambda})}{\partial\lambda_{\nu}}}\right] \\
&= \left(-i\frac{\partial\phi}{\partial\lambda_{\mu}}e^{-i\phi(\mathbf{\boldsymbol{\lambda}})}\bra{\psi(\boldsymbol{\lambda})}+e^{-i\phi(\mathbf{\boldsymbol{\lambda}})}\Bra{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})}\right) \left(i\frac{\partial\phi}{\partial\lambda_{\nu}}e^{i\phi(\mathbf{\boldsymbol{\lambda}})}\ket{\psi(\boldsymbol{\lambda})}+e^{i\phi(\mathbf{\boldsymbol{\lambda}})}\Ket{\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}\right) \\
&= \frac{\partial\phi}{\partial\lambda_{\mu}}\frac{\partial\phi}{\partial\lambda_{\nu}}-i\frac{\partial\phi}{\partial\lambda_{\mu}}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}+i\frac{\partial\phi}{\partial\lambda_{\nu}}\Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\psi(\boldsymbol{\lambda})}+\Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})} \\
&= \frac{\partial\phi}{\partial\lambda_{\mu}}\frac{\partial\phi}{\partial\lambda_{\nu}}-\frac{\partial\phi}{\partial\lambda_{\mu}}A_{\nu}-\frac{\partial\phi}{\partial\lambda_{\nu}}A_{\mu}+\gamma_{\mu\nu}
\end{align*}
$$

where $\mathrm{Re}$ is omitted for simplicity and $A_{\mu}$ is the Berry connection:

$$
\begin{equation}
A_{\mu}(\boldsymbol{\lambda}) = i\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\mu}}|\psi(\boldsymbol{\lambda})}
\end{equation}
$$

The gauge transformation also changes the Berry connection as:

$$
\begin{align*}
A'_{\mu}(\boldsymbol{\lambda}) &= i(\bra{\psi(\boldsymbol{\lambda})}e^{-i\phi(\boldsymbol{\lambda})})\left(i\frac{\partial\phi}{\partial\lambda_{\mu}}e^{i\phi(\mathbf{\boldsymbol{\lambda}})}\ket{\psi(\boldsymbol{\lambda})}+e^{i\phi(\mathbf{\boldsymbol{\lambda}})}\Ket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})}\right) \\
&= -\frac{\partial\phi}{\partial\lambda_{\mu}}+i\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})} \\
&= A_{\mu}(\boldsymbol{\lambda})-\frac{\partial\phi}{\partial\lambda_{\mu}}
\end{align*}
$$

To make $\gamma_{\mu\nu}$ gauge-invariant; one introduces quantum metric $g_{\mu\nu}$:

$$
\begin{equation}
g_{\mu\nu} \equiv \gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})
\end{equation}
$$

where the second term cancels out the terms in $\gamma'\_{\mu\nu}$, except $\gamma\_{\mu\nu}$. This is because the product of two Berry connections is transformed as:

$$
\begin{align*}
A'_{\mu}(\boldsymbol{\lambda})A'_{\nu}(\boldsymbol{\lambda}) &= \left(A_{\mu}(\boldsymbol{\lambda})-\frac{\partial\phi}{\partial\lambda_{\mu}}\right)\left(A_{\nu}(\boldsymbol{\lambda})-\frac{\partial\phi}{\partial\lambda_{\nu}}\right) \\
&= A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})-A_{\mu}(\boldsymbol{\lambda})\frac{\partial\phi}{\partial\lambda_{\nu}}-A_{\nu}(\boldsymbol{\lambda})\frac{\partial\phi}{\partial\lambda_{\mu}}+\frac{\partial\phi}{\partial\lambda_{\mu}}\frac{\partial\phi}{\partial\lambda_{\nu}}
\end{align*}
$$

The difference between $\gamma_{\mu\nu}$ and $g_{\mu\nu}$ lies in the vector space of quantum states: $\gamma_{\mu\nu}$ measures the distance of bare states in Hilbert space $\mathcal{H}$, while $g_{\mu\nu}$ measures the distance of rays in Hilbert space $\mathcal{H}/U(1)$. In addition, due to the principle of gauge invariance in physics, observables that are Hermitian operators act on rays. Thus, the main interest is in $g_{\mu\nu}$, not $\gamma_{\mu\nu}$.

## Quantum geometric tensor

In a more general context, the gauge invariant form of $\Braket{\partial_{\mu}\psi(\boldsymbol{\lambda})\vert\partial_{\nu}\psi(\boldsymbol{\lambda})}$ is referred to as a quantum geometric tensor (QGT), which is given by:

$$
\begin{equation}
\mathfrak{G}_{\mu\nu}(\boldsymbol{\lambda}) \equiv \Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})} - \Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\psi(\boldsymbol{\lambda})}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}
\end{equation}
$$

It can be separated into its real part $g_{\mu\nu}$ and imaginary part $\Omega_{\mu\nu}$:

$$
\begin{equation}
g_{\mu\nu} = \mathrm{Re}[\mathfrak{G}_{\mu\nu}],~\mathrm{and}~\Omega_{\mu\nu} = \mathrm{Im}[\mathfrak{G}_{\mu\nu}]
\end{equation}
$$

<!--- Comment.
>[!Warning] Jargons
Bernevig[PRL 124, 167002 (2020)], S. Das Sarma[PRB 102, 165118 (2020)]은  quantum metric $g_{\mu\nu}$을 Fubini-Study metric이라고 칭하는 반면, 안준영씨[PRX 10, 041041 (2020)], Törmä[PRL 131, 240001 (2023)], Antoine Georges[arXiv:2402.01565v1]는 quantum geometric tensor $\mathfrak{G}_{\mu\nu}$을 Fubini-Study metric이라고 한다. 
>
>양범정 교수님은 이 용어를 사용하시진 않는다. 대신 quantum distance를 논의하는 부분[PRB 109, 035134 (2024)]에서 "QGT는 Fubini-Study metric이다"라고 하는 Ran Cheng 논문을 인용해주시긴 하셨다. 
>
>임준원 교수님 논문[Commun Phys 6, 1–9 (2023)]에 의하면 Berry curvature가 0이 되는 상황에서는 QGT는 Fubini-Study metric라고 이야기 한다. 따라서, Berry curvature가 0이 되는 특정 상황에서 quantum metric을 Fubini-Study metric이라고 생각을 하는 것 같다.
--->

## Relationship between $g_{\mu\nu}$ and quantum distance

Recall that the quantum distance is determined by the **real part** of $\Braket{\partial_{\mu}\psi(\boldsymbol{\lambda})\vert\partial_{\nu}\psi(\boldsymbol{\lambda})}$, which had to be transformed into the real part of $\mathfrak{G}_{\mu\nu}$ to be gauge invariant. This statement is rewritten as:
$$
\begin{equation}
ds^{2} = g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}
\end{equation}
$$

To explicitly see how $g_{\mu\nu}$ plays the role of a metric, one takes the inner 
product of a state $\ket{\psi(\boldsymbol{\lambda})}$ and with $\ket{\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})}$:

$$
\begin{align*}
\braket{\psi(\boldsymbol{\lambda})|\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})} &= \bra{\psi(\boldsymbol{\lambda})}\left(\ket{\psi(\boldsymbol{\lambda})}+\frac{\partial}{\partial\lambda_{\mu}}\ket{\psi(\boldsymbol{\lambda})}d\lambda^{\mu}+\frac{1}{2!}\frac{\partial}{\partial\lambda_{\mu}}\frac{\partial}{\partial\lambda_{\nu}}\ket{\psi(\boldsymbol{\lambda})}d\lambda^{\mu}d\lambda^{\nu}\right) \\
&= 1+iA_{\mu}(\boldsymbol{\lambda})d\lambda^{\mu}+\frac{1}{2}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\mu}}\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})}d\lambda^{\mu}d\lambda^{\nu}
\end{align*}
$$

Note that the derivative of the Berry connection is given by:

$$
\begin{equation}
\frac{\partial}{\partial\lambda_{\mu}}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})} = \Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})} + \Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\mu}}\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})}
\end{equation}
$$

which is equivalent to:

$$
\begin{align*}
\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\mu}}\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})} &= 
\frac{\partial}{\partial\lambda_{\mu}}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})} - \Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}\\
&=  \frac{\partial}{\partial\lambda_{\mu}}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})}-(\gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda}))
\end{align*}
$$

Recall that the gauge invariant form of $\Braket{\frac{\partial}{\partial\lambda_{\mu}}\psi(\boldsymbol{\lambda})\vert\frac{\partial}{\partial\lambda_{\nu}}\psi(\boldsymbol{\lambda})}$ is given by $\gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})$. Using this relation, the third term of $\braket{\psi(\boldsymbol{\lambda})\vert\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})}$ will be expressed as:

$$
\begin{align*}
\frac{1}{2}\Braket{\psi(\boldsymbol{\lambda})|\frac{\partial}{\partial\lambda_{\mu}}\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})}d\lambda^{\mu}d\lambda^{\nu} &= \frac{1}{2}\left[-(\gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})) + \frac{\partial}{\partial\lambda_{\mu}}\Braket{\psi\left(\boldsymbol{\lambda}\right)|\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})}\right]d\lambda^{\mu}d\lambda^{\nu} \\
&= -\frac{1}{2}(\gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})) d\lambda^{\mu}d\lambda^{\nu} + \frac{1}{2}\Braket{\psi\left(\boldsymbol{\lambda}\right)|\frac{\partial}{\partial\lambda_{\nu}}|\psi(\boldsymbol{\lambda})} d\lambda^{\nu} \\
&= -\frac{1}{2}(\gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})) d\lambda^{\mu}d\lambda^{\nu} - \frac{1}{2}iA_{\nu}(\boldsymbol{\lambda})d\lambda^{\nu}
\end{align*}
$$

Therefore, $\braket{\psi(\boldsymbol{\lambda})\vert\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})}$ is given by:
$$
\begin{align*}
\braket{\psi(\boldsymbol{\lambda})|\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})} &= 1-\frac{1}{2}(\gamma_{\mu\nu}-A_{\mu}(\boldsymbol{\lambda})A_{\nu}(\boldsymbol{\lambda})) d\lambda^{\mu}d\lambda^{\nu} \\
&= 1-\frac{1}{2}g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}
\end{align*}
$$

whose square up to $\mathcal{O}(d\lambda^{2})$ gives rise to:

$$
\begin{align*}
||\braket{\psi(\boldsymbol{\lambda})|\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})}||^{2} &= \left|\left|1-\frac{1}{2}g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}\right|\right|^{2} \\
&= \left(1-\frac{1}{2}g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}\right)^{*}\left(1-\frac{1}{2}g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}\right) \\
&= \left(1-\frac{1}{2}g_{\nu\mu}d\lambda^{\mu}d\lambda^{\nu}\right)\left(1-\frac{1}{2}g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}\right) \\
&= 1 - g_{\mu\nu}d\lambda^{\mu}d\lambda^{\nu}
\end{align*}
$$

where one has used the symmetric relation of quantum metric; $g_{\mu\nu}=g_{\nu\mu}$. Note that the quantum metric $g_{\mu\nu}$ directly corresponds to the quantum distance $ds^{2}$ (or [trace distance](https://en.wikipedia.org/wiki/Trace_distance) for pure states), which is given by:

$$
\begin{equation}
ds^{2} = 1 - ||\braket{\psi(\boldsymbol{\lambda})|\psi(\boldsymbol{\lambda}+d\boldsymbol{\lambda})}||^{2} = g_{\mu\nu}d\lambda^{\mu}\lambda^{\nu}
\end{equation}
$$

When the state is given by a density matrix, the first term in the equation is called the Bures distance. The different concepts (quantum distance and Bures distance) become the same *for a pure state only*.

## Example. Spin-$1/2$ system

A spinor of spin-$1/2$ is represented as:

$$
\begin{equation}
\ket{\uparrow;\hat{\mathbf{n}}} = \begin{bmatrix} \cos\left(\frac{\theta}{2}\right) \\ \sin\left(\frac{\theta}{2}\right)e^{i\varphi} \end{bmatrix},~\ket{\downarrow;\hat{\mathbf{n}}} = \begin{bmatrix} -\sin\left(\frac{\theta}{2}\right) \\ \cos\left(\frac{\theta}{2}\right)e^{i\varphi} \end{bmatrix}
\end{equation}
$$

where $\theta$ and $\varphi$ are the polar and azimuthal angles of $\hat{\mathbf{n}}$. The derivative of the spinor with respect to the polar and azimuthal angles reads:

$$
\begin{align*}
\ket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}} &= \begin{bmatrix} -\frac{1}{2}\sin\left(\frac{\theta}{2}\right) \\ \frac{1}{2}\cos\left(\frac{\theta}{2}\right)e^{i\varphi} \end{bmatrix},~\ket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}} = \begin{bmatrix} -\frac{1}{2}\cos\left(\frac{\theta}{2}\right) \\ -\frac{1}{2}\sin\left(\frac{\theta}{2}\right)e^{i\varphi} \end{bmatrix},  \\
\ket{\uparrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}} &= \begin{bmatrix} 0 \\ i\sin\left(\frac{\theta}{2}\right)e^{i\varphi} \end{bmatrix},~\ket{\downarrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}} = \begin{bmatrix} 0 \\ i\cos\left(\frac{\theta}{2}\right)e^{i\varphi} \end{bmatrix}
\end{align*}
$$

Using these relations, one can obtain the quantum geometry tensor for $\mu=\theta$ and $\nu=\theta$:

$$
\begin{align*}
\mathfrak{G}^{\uparrow\uparrow}_{\theta\theta} &= \Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}}-\Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\hat{\mathbf{n}}}\Braket{\uparrow;\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}} \\
&= \frac{1}{4} - 0 = \frac{1}{4}, \\
\mathfrak{G}^{\uparrow\downarrow}_{\theta\theta} &= \Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}}-\Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\hat{\mathbf{n}}}\Braket{\uparrow;\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}} \\
&= 0-\left(+\frac{1}{2}\right)\left(-\frac{1}{2}\right) = \frac{1}{4}, \\
\mathfrak{G}^{\downarrow\uparrow}_{\theta\theta} &= \Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}}-\Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\hat{\mathbf{n}}}\Braket{\downarrow;\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}} \\
&= 0-\left(-\frac{1}{2}\right)\left(+\frac{1}{2}\right) = \frac{1}{4}, \\
\mathfrak{G}^{\downarrow\downarrow}_{\theta\theta} &= \Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}}-\Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\hat{\mathbf{n}}}\Braket{\downarrow;\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}} \\
&= \frac{1}{4} - 0 = \frac{1}{4} \\
\therefore \mathfrak{G}_{\theta\theta} &= 1
\end{align*}
$$

Likewise, for $\mu=\theta$ and $\nu=\varphi$,

$$
\begin{align*}
\mathfrak{G}^{\uparrow\uparrow}_{\theta\varphi} &= \Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}}-\Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\hat{\mathbf{n}}}\Braket{\uparrow;\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}} \\
&= \frac{1}{4} - 0 = \frac{1}{4}, \\
\mathfrak{G}^{\uparrow\downarrow}_{\theta\varphi} &= \Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}}-\Braket{\uparrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\hat{\mathbf{n}}}\Braket{\uparrow;\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}} \\
&= 0-\left(+\frac{1}{2}\right)\left(-\frac{1}{2}\right) = \frac{1}{4}, \\
\mathfrak{G}^{\downarrow\uparrow}_{\theta\varphi} &= \Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}}-\Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\uparrow;\hat{\mathbf{n}}}\Braket{\downarrow;\hat{\mathbf{n}}|\uparrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}} \\
&= 0-\left(-\frac{1}{2}\right)\left(+\frac{1}{2}\right) = \frac{1}{4}, \\
\mathfrak{G}^{\downarrow\downarrow}_{\theta\varphi} &= \Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}}-\Braket{\downarrow;\frac{\partial}{\partial\theta}\hat{\mathbf{n}}|\downarrow;\hat{\mathbf{n}}}\Braket{\downarrow;\hat{\mathbf{n}}|\downarrow;\frac{\partial}{\partial\varphi}\hat{\mathbf{n}}} \\
&= \frac{1}{4} - 0 = \frac{1}{4}
\end{align*}
$$

The quantum metric and Berry curvature are written as:

$$
\begin{align*}
g_{\mu\nu} &= \begin{bmatrix} g_{\theta\theta} & g_{\theta\varphi} \\ g_{\varphi\theta} & g_{\varphi\varphi} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & \sin^{2}\left(\frac{\theta}{2}\right)\cos^{2}\left(\frac{\theta}{2}\right) \end{bmatrix}, \\
\Omega_{\mu\nu} &= \begin{bmatrix} \Omega_{\theta\theta} & \Omega_{\theta\varphi} \\ \Omega_{\varphi\theta} & \Omega_{\varphi\varphi} \end{bmatrix} = \begin{bmatrix} 0 & \sin\left(\frac{\theta}{2}\right)\cos\left(\frac{\theta}{2}\right) \\ -\sin\left(\frac{\theta}{2}\right)\cos\left(\frac{\theta}{2}\right) & 0 \end{bmatrix}
\end{align*}
$$

which implies that there are a nontrivial quantum metric and Berry curvature.