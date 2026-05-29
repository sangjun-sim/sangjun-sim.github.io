---
title: Landauer-Büttiker formalism
date: 2026-05-29 09:00:00 +0900
categories:
  - Physics
  - Condensed Matter
tags:
  - cond-matter
  - transport
math: true
toc: true
---

## Landauer formalism

Consider a one-dimensional conductor with two sides: the source and the drain. The chemical potential of the source $\mu_{s}$ is higher than that of the drain $\mu_{d}$. The current through the conductor is written as

$$
\begin{equation}
I = -e\Delta N v
\end{equation}
$$

where $\Delta N$ and $v$ is the density and velocity of the carriers, respectively. Note that the number of electrons must be well-defined. The current can be expressed as the chemical potentials:

$$
\begin{align}
I &= -e\Delta N v \nonumber \\
&= -eD(\varepsilon_{F})\times(\mu_{s}-\mu_{d})\times v \nonumber \\
&= -e \frac{1}{2\pi}\frac{\partial k}{\partial E}\times(\mu_{s}-\mu_{d})\times\frac{1}{\hbar}\frac{\partial E}{\partial k} \nonumber \\
&= -\frac{e}{h}(\mu_{s}-\mu_{d})
\end{align}
$$

where the carrier density $\Delta N$ is given by the density of states at the fermi level and the chemical potentials:

$$
\begin{equation}
\Delta N = D(\varepsilon_{F})(\mu_{s}-\mu_{d}) = \frac{1}{2\pi}\frac{\partial k}{\partial E}(\mu_{s}-\mu_{d})
\end{equation}
$$

and the velocity of the carriers is written as:

$$
\begin{equation}
v = \frac{1}{\hbar}\frac{\partial E}{\partial k}
\end{equation}
$$

Moreover, since the chemical potential is given by:

$$
\begin{equation}
\mu_{s}-\mu_{d}=-e(V_{s}-V_{d})
\end{equation}
$$

The current can be rewritten as

$$
\begin{equation}
I = \frac{e^{2}}{h}(V_{s}-V_{d})
\end{equation}
$$

This expression can be naturally associated with conductance. The conductance is basically given as $I/V$, which is written using the above equation as follows:

$$
\begin{equation}
G = \frac{e^{2}}{h}
\end{equation}
$$

Here one can see that the conductance is a quantized quantity for a one-dimensional conductor. Landauer further showed that the conductance of a mesoscopic conductor is given as the product of the number of transverse modes $M$ and the transmission probability that an electron can move from source to drain $T$:

$$
\begin{equation}
G = 2 \frac{e^{2}}{h}MT
\end{equation}
$$

The reason why 2 is multiplied is because the spin of the electron is taken into account. This equation can be recovered to the classic Ohm's law. Noticing that the equation above is for the mesoscopic case if the thickness of the lead wire is thick and the length is long, it will approach the semiclassical regime. Then the number of transverse modes will be proportional to the width of the wire $W$, and transmission probability will be proportional to the ratio of the total length of the lead wire $L$ to the characteristic length $L_{0}$.

$$
\begin{equation}
T = \frac{L_{0}}{L + L_{0}}
\end{equation}
$$

The equation that takes all of this into account is as follows.

$$
\begin{equation}
G = 2 \frac{e^{2}}{h}\times W\times \frac{L_{0}}{L+L_{0}}
\end{equation}
$$

Recall that the conductance can be also written as:

$$
\begin{equation}
G = \frac{1}{R}
\end{equation}
$$

where $R$ is the resistance that is proportional to the length of the wire, and its area. Compare the unit of the resistance and the equation for the resistance derived from the following equation above.

$$
\begin{equation}
R = \frac{h}{2e^{2}}\times \frac{L + L_{0}}{L_{0}W}
\end{equation}
$$

<br>

## Landauer-Büttiker formalism

Landauer formulated an equation for conductance when there is a pair of source and drain at each end of the wire. Büttiker generalized Landauer formalism to the case of multiple terminals. This extension is significant in that it has been useful to interpret the results of experiments measuring real mesoscopic devices. This generalized formalism is called Landauer-Büttiker formalism, where current is given as follows for the $i$-th terminal:

$$
\begin{equation}
I_{i} = \frac{e^{2}}{h}\sum\limits_{i\neq j} (T_{ji}V_{i}-T_{ij}V_{j})
\end{equation}
$$

Here, $V_{i}$ means the voltage of the $i$-th probe, and $T_{ij}$ is given as the product of the number of transverse modes and transmission probability between the $j$-th terminal and the $i$-th terminal. (Here, the transmission probability can be calculated from first-principles calculations.) Assuming that the voltage is the same for all probes (equilibrium condition), $T_{ij}$ satisfies the following relationship:

$$
\begin{equation}
\sum\limits_{i\neq j}T_{ji} = \sum\limits_{i\neq j}T_{ij}
\end{equation}
$$

Under these conditions, the current flow will be $0$, which indicates that the charge is conserved. One can rewrite the current as:

$$
\begin{equation}
I_{i} = \frac{e^{2}}{h}\sum\limits_{i\neq j}T_{ij}(V_{i}-V_{j})
\end{equation}
$$

<br>

## Transport of edge states

In the quantum spin Hall insulator, a pair of edge states consists of two chiral states of electrons with spin up ($\sigma = \uparrow$) and spin down ($\sigma = \downarrow$). The transmission coefficients from the $i$-th terminal to $j$-th terminal are given by

$$
\begin{align}
T^{\uparrow}_{ij} = 1, ~&~T^{\uparrow}_{ji} = 0, \nonumber \\
T^{\downarrow}_{ij} = 0, ~&~T^{\downarrow}_{ji} = 1
\end{align}
$$

The charge current at the $i$-th terminal is defined as the summation of the currents with spin up and down.

$$
\begin{equation}
I^{c}_{i} = I^{\uparrow}_{i} + I^{\downarrow}_{i} = \frac{e^{2}}{h}\sum\limits_{i\neq j,\sigma}(T^{\sigma}_{ij}V_{j} + T^{\sigma}_{ji}V_{i})
\end{equation}
$$

The spin current is defined as the difference between the spin-up current and the spin-down current.

$$
\begin{equation}
I^{s}_{i} = \frac{\hbar}{2e}(I^{\uparrow}_{i} - I^{\downarrow}_{i}) = \frac{e}{4\pi}\sum\limits_{i\neq j,\sigma}(T^{\sigma}_{ij}V_{j} - T^{\sigma}_{ji}V_{i})
\end{equation}
$$

where the $\hbar/2e$ factor was introduced to replace the electron's charge unit of $e$ with the unit of electron spin $\hbar/2$. The quantum spin Hall effect can be measured using these relations and the four-terminal probe [Phys. Rev. Lett. 95, 226801 (2005)].