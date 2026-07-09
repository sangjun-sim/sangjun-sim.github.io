# ChatGPT Pro Review: Berezinskii-Kosterlitz-Thouless transition (2)

* Date/time KST: 2026-07-09 14:00 KST
* Source file path: /Users/sirius/sangjun-sim.github.io/_posts/2026-04-20-stat-phys-phase-transition-2.md
* Opus review file path: /Users/sirius/sangjun-sim.github.io/opus-review-2026-07-09-stat-phys-phase-transition-2.md
* Model/app used: ChatGPT desktop app Pro
* Input handling: source Markdown and Opus review Markdown were provided as attached files
* Reference/e-book candidates checked or suggested: the local/Google Drive PDF list was used as a bibliography/context list, not as read input. The most relevant candidates to consult are Chaikin & Lubensky, Kardar, Sethna, Arovas, Reichl, Girvin & Yang, Fradkin, Pires, Bhattacharjee–Mahan–Bandyopadhyay, and Monastyrsky. Public bibliographic/reference pages were checked for several primary papers and books; I do not claim to have read the local PDFs.

## Executive Summary

Opus’s review is substantially correct and useful. Its strongest points are the low-temperature Taylor-expansion error, the dropped K or J in the vortex free-energy expression, the mistaken low-temperature vortex-proliferation sentence, the sloppy vortex/antivortex attraction language, the incorrect current expression, and the Coulomb-gas factor-of-2/normalization inconsistency. These are not merely stylistic; they can mislead a reader about the mechanism of the BKT transition. The source post contains the relevant problematic statements directly: the opening paragraph mixes finite-temperature BKT physics with symmetry-breaking language, the low-T expansion has the wrong sign and missing 1/2, the free-energy expression drops the stiffness/energy scale, and the Coulomb-gas section changes normalization conventions without warning.

The main caution is that Opus slightly overstates one point and under-emphasizes another. The phrase “the ground state should break this symmetry” is not literally wrong if it refers only to the T=0 classical ground-state manifold; the real problem is that the post does not clearly say that in two dimensions, at any finite T>0, the continuous U(1) symmetry is not spontaneously broken and the low-temperature phase has quasi-long-range order. Opus is right to demand a Mermin–Wagner/BKT clarification, but Sangjun should not revise into the equally misleading statement that the T=0 ordered ground-state manifold is irrelevant. Mermin and Wagner’s theorem forbids one- or two-dimensional isotropic short-range Heisenberg models from having ferro/antiferromagnetic order at nonzero temperature, and the same finite-temperature lesson is the relevant one for the 2D XY setting.

The most important issue Opus did not emphasize enough is that K_c=2/\pi should be presented as the universal condition for the renormalized stiffness at the transition, or as a crude single-vortex entropy estimate if K is kept bare. It should not be presented as an accurate critical temperature k_B T_c=\pi J/2 for the square-lattice XY model. High-precision numerical work for the classical square-lattice XY model gives \beta_{\mathrm{KT}}\approx 1.1199, i.e. k_B T_{\mathrm{BKT}}/J\approx 0.893, not \pi/2\approx 1.571.

The second important issue Opus largely missed is charge neutrality in the vortex Coulomb gas. A consistent finite-energy or periodic-boundary Coulomb-gas partition function should restrict to neutral vortex configurations, \sum_i n_i=0, or carefully discuss boundary conditions and background charges. The source partition function sums over vortex numbers and windings without explicitly imposing neutrality, while also invoking periodic boundary conditions in the decomposition step. That is a conceptual gap, not just a notation issue.

## High-Confidence Issues

Finite-temperature symmetry breaking needs correction, but with nuance. The source says the ground state should break the U(1) symmetry, then later says the BKT transition is not a symmetry-breaking transition and answers that topological versus symmetry-breaking transitions can be distinguished by the presence of an order parameter.   The safe correction is: the T=0 classical ground-state manifold is aligned and symmetry-related, but in the 2D XY model at any finite temperature there is no true long-range U(1) order and no nonzero local magnetization order parameter; the low-T phase has quasi-long-range order with algebraic correlations. Opus’s proposed Mermin–Wagner correction is directionally right, but Sangjun should preserve the distinction between the zero-temperature ground-state manifold and finite-temperature spontaneous symmetry breaking.

The first paragraph incorrectly describes vortices as disordering the phase “at any temperature.” Below T_{\mathrm{BKT}}, free vortices do not proliferate; vortices and antivortices occur primarily as bound neutral pairs. Smooth spin-wave fluctuations already destroy true long-range order in 2D, while unbound vortices drive exponential decay above the transition. The source also says “the vortices attract to each other,” which should be replaced by “vortices and antivortices attract and bind; like-sign vortices repel.”   Opus is correct on this point.

The current expression should be fixed. The source writes a current proportional to \psi^*\partial_i\phi, but for \psi=|\psi|e^{i\phi}, the usual phase current is proportional to
\operatorname{Im}(\psi^*\partial_i\psi)=|\psi|^2\partial_i\phi.
If the post is discussing superconductors, call this a supercurrent or phase stiffness current rather than a “probability current.” Opus’s objection is supported.

The low-temperature Taylor expansion has a real algebra/sign error. The source writes
-K\sum_{\langle i,j\rangle}\left[1-\frac12(\theta_i-\theta_j)^2\right]
= -K\sum_{\langle i,j\rangle}(\theta_i-\theta_j)^2+\mathrm{const.},
but the correct expansion is
-K\sum_{\langle i,j\rangle}\cos(\theta_i-\theta_j)
\simeq \mathrm{const.}
+\frac{K}{2}\sum_{\langle i,j\rangle}(\theta_i-\theta_j)^2.
The following continuum line in the source already has the correct positive (K/2)\int d^2x\,(\nabla\theta)^2, so this is a local but important derivation error.   Opus’s criticism is fully supported.

The single-vortex free energy drops the energy scale. The source correctly writes the dimensionless vortex energy as
\beta\varepsilon_n=\pi K n^2\ln(L/a)+\beta\varepsilon_n^0,
but later rewrites the energetic part of F_n as \pi n^2 k_B T\ln(L/a). With K=\beta J=J/(k_BT), the energetic term should be \pi n^2 J\ln(L/a), or equivalently \pi K n^2 k_BT\ln(L/a). A clean large-L expression is
F_n \simeq \varepsilon_n^0+\left(\pi n^2 J-2k_BT\right)\ln(L/a),
up to the constant -k_BT\ln 2\pi. In dimensionless form,
\beta F_n \simeq \beta\varepsilon_n^0+\left(\pi K n^2-2\right)\ln(L/a).
This is exactly the algebraic issue Opus flagged.

The low-temperature vortex-proliferation sentence is wrong. The source says that at low temperatures the probability to make a vortex is small, but then says the system wants to make many vortices because of large entropy. This should say high temperatures. At low T, vortex creation is suppressed by the logarithmic energy cost; at high T, entropy favors proliferation.   Opus is right to mark this as a self-contradiction.

The vortex-core cutoff must appear before integrating. The source writes \int_0^L dr/r and then explains that the core region must be excluded. It is clearer and mathematically correct to write
2\pi n^2\int_a^L\frac{dr}{r}=2\pi n^2\ln(L/a)
from the start.   This is a small but high-confidence fix.

Core energy should not be added directly to \int d^2x(\nabla\theta)^2 as an energy. The source writes
\int d^2x(\nabla\theta)^2=2\pi n^2\ln(L/a)+\varepsilon_n^0(a),
then later uses \beta\varepsilon_n^0(a).   The cleaner convention is
E_n=\pi J n^2\ln(L/a)+E_c(n),
\qquad
\beta E_n=\pi K n^2\ln(L/a)+\beta E_c(n).
The integral is dimensionless in the continuum scaling used here; the core contribution belongs in the energy or dimensionless action, not literally as an additive term to the gradient integral unless it has been explicitly defined in matching units.

The 2D Green’s-function reminder is mis-normalized. The source says that in two dimensions a solution of \nabla^2 V=(q/4\pi\varepsilon)\delta is V=(q/4\pi\varepsilon)\ln r.   The standard identity is
\nabla^2\ln r=2\pi\delta^{(2)}(\mathbf{x}),
so if \nabla^2 V=C\delta^{(2)}(\mathbf{x}), then V=(C/2\pi)\ln r, up to an additive harmonic function and sign conventions. Opus is right that the source’s actual \psi=\sum_i n_i\ln|\mathbf{x}-\mathbf{x}_i| is compatible with \nabla^2\psi=2\pi\sum_i n_i\delta^{(2)}(\mathbf{x}-\mathbf{x}_i); the mistake is mainly in the electrostatics analogy.

The Coulomb-gas interaction has a factor-of-2 convention problem. The source first obtains
\beta H_{\mathrm{vort}}=-\pi K\sum_{i,j}n_i n_j\ln|\mathbf{x}_i-\mathbf{x}_j|,
then rewrites the interaction as
-4\pi^2K\sum_{i,j}n_i n_j C(\mathbf{x}_i-\mathbf{x}_j),
\qquad
C(\mathbf{x})=\frac{\ln|\mathbf{x}|}{2\pi}.
The second expression equals -2\pi K\sum_{i,j}n_i n_j\ln|\mathbf{x}_i-\mathbf{x}_j|, twice the previous coefficient if the same ordered (i,j) sum is intended.   Opus is correct that this can be fixed by explicitly choosing either \sum_{i<j} or \sum_{i\ne j}, and by separating self-energies from pair interactions.   A standard pairwise form is
\beta H_{\mathrm{vort}}
=
-2\pi K\sum_{i<j}n_i n_j\ln(r_{ij}/a)
+\sum_i \beta E_c(n_i),
with neutrality and cutoff conventions stated.

The winding-number/skyrmion-number statement conflates two different invariants. The source defines the vortex winding number W=(2\pi)^{-1}\oint d\mathbf{l}\cdot\nabla\theta, then says it is sometimes called skyrmion number for S^2.   This should be corrected to: vortex winding in the XY model is classified by \pi_1(S^1)=\mathbb{Z}, whereas the usual 2D skyrmion number for maps into S^2 is classified by \pi_2(S^2)=\mathbb{Z} and is computed by an area integral such as
Q=\frac{1}{4\pi}\int d^2x\,
\mathbf{n}\cdot(\partial_x\mathbf{n}\times\partial_y\mathbf{n}).
Opus is correct to flag this.

## Likely Issues / Needs Verification

The K_c=2/\pi statement needs careful wording. The source presents the single-vortex entropy estimate and then writes K_c=2/\pi, k_BT=(\pi/2)J for n=1.   This is fine as a heuristic energy–entropy estimate or as the universal relation for the renormalized stiffness K_R(T_{\mathrm{BKT}}^-)=2/\pi. It is not the accurate bare critical temperature of the square-lattice XY model. Sangjun should revise this passage to say something like: “The single-vortex argument suggests the universal stiffness criterion K_R=2/\pi, but because interactions and screening renormalize K, the bare lattice critical temperature is not k_BT_c=\pi J/2.” Hasenbusch’s high-precision Monte Carlo study reports \beta_{\mathrm{KT}}\approx 1.1199 for the classical square-lattice XY model.

The vortex-gas partition function should impose neutrality. The source writes a grand-canonical-looking sum over vortex numbers and windings but does not state \sum_i n_i=0.   Under periodic boundary conditions, net vorticity is constrained; in the infinite plane, non-neutral configurations have infrared-divergent energy unless one introduces a compensating background or boundary treatment. A safer partition function should include something like \delta_{\sum_i n_i,0}, a 1/N! or 1/(N_+!N_-!) factor depending on how vortices are counted, dimensionless measures d^2x_i/a^2, and fugacity factors \prod_i y_{n_i}.

The high-temperature expansion result is directionally right but overclaimed. The source says high-T expansion can let us “guess the point where the phase transition occurs,” then gives (K/2)^r=e^{-r/\xi}.   The exponential decay at small K is correct in spirit, but the displayed leading term suppresses lattice path-counting factors and does not locate the BKT transition. It should be framed as showing exponential decay in the high-T phase, not as a way to estimate T_{\mathrm{BKT}}. Opus treated the high-T result as “already correct”; that is acceptable for the leading physical conclusion, but too generous if the post implies transition-point estimation.

The phrase “there is no divergence on the thermodynamic variables” is too broad. The source uses this to explain why BKT is not a Landau symmetry-breaking transition.   The BKT transition does not have the usual local-order-parameter singularity or conventional specific-heat divergence, but the correlation length above T_{\mathrm{BKT}} has an essential divergence. The post should distinguish thermodynamic free-energy derivatives from correlation length, susceptibility, stiffness, and transport signatures.

The Stokes-theorem discussion needs a more precise topology statement. The source says the curl of a field is zero “if and only if” the field is well-defined everywhere, then says a vortex gives \nabla\times u\ne0.   More precisely: away from the vortex core, u=\nabla\theta is locally curl-free, but \theta is multivalued or undefined at the core, and the domain is punctured. The nonzero circulation is represented distributionally by a delta-function curl at the singularity. This is a likely conceptual-exposition issue rather than a fatal derivation error.

The experimental-imaging paragraph needs source verification. The source says homotopic vortices can be distinguished by XMCD, Lorentz TEM, and NV-center magnetometry.   This is not a safe statement as written. “Homotopic” means in the same topological class, so topology itself does not distinguish them. The listed probes can image magnetic textures under appropriate conditions, but they are not generally the standard way to identify superconducting XY-phase vortices; superconducting vortices are often discussed through flux imaging, transport, SQUID/Hall probes, STM, or Josephson-array measurements depending on the system. Sangjun should verify the intended physical system before keeping this claim.

The Resnick citation correction is likely right and should be verified in final citations. The source says Resnick et al. measured resistance of 2D superconductors and found V\propto I^3.   Opus says the system was a triangular array of proximity-coupled Pb–Sn junctions and that the measurement concerned resistive transition and nonlinear I–V features. APS’s abstract says evidence was reported in triangular planar arrays of proximity-coupled Pb–Sn junctions.   The V\propto I^3 interpretation should be linked to Halperin–Nelson’s resistive-transition theory.

## Opus Review Assessment

Opus is strongest where the source text itself contains an algebraic contradiction or incorrect physical statement. Its best-supported objections are: the low-T Taylor expansion sign/factor error; the dropped K or J in the vortex free energy; the low-temperature vortex-proliferation self-contradiction; the like-sign versus opposite-sign vortex interaction distinction; the current formula; the 2D Green’s-function normalization; and the Coulomb-gas factor-of-2 convention. These are all real revision targets.

Opus is also right that the opening conceptual framing needs revision. The source combines “ground-state symmetry breaking,” “no symmetry-breaking transition,” “no order parameter,” vortex disordering, and superconductor current language too quickly.   However, Opus’s wording that the “ground state should break this symmetry” sentence “contradicts Mermin–Wagner” is slightly overstated if the source literally means the T=0 ground state. The actual correction should be finite-temperature focused: no true U(1) long-range order for T>0, quasi-long-range order below T_{\mathrm{BKT}}, and no local order parameter for the transition.

Opus is somewhat too generous in saying the single-vortex estimate gives the correct k_BT_c=\pi J/2 for n=1. It is correct only as the bare single-vortex entropy estimate or as a universal renormalized-stiffness criterion after replacing J by the renormalized stiffness. Since the source says accurate T_c requires interactions, the post is partly protected; but the displayed k_BT=(\pi/2)J still needs a warning label.

Opus missed or underplayed the neutrality constraint in the Coulomb-gas partition function. This is important because the source invokes periodic boundary conditions while summing over all vortex configurations without explicitly requiring \sum_i n_i=0.   This omission affects the mathematical consistency of the Coulomb-gas representation.

Opus’s “global excitations” criticism is right as a terminology fix but lower priority than the algebra and finite-temperature-order issues. If Sangjun meant “global” as “nonlocal/topological configuration,” the intended meaning is recoverable; still, “topological defects” or “non-perturbative topological excitations” is better.

Opus’s citation recommendations are good. The original BKT literature, Mermin–Wagner, Mermin’s defect review, Nelson–Kosterlitz stiffness jump, Halperin–Nelson transport theory, and Resnick’s Josephson-array experiment are exactly the right citation cluster. Public records support these bibliographic directions.

## Additional Issues ChatGPT Pro Found

The post should distinguish “topological phase transition” from modern “topological order.” BKT is often called a topological transition because vortex unbinding and homotopy-class defects drive it. But it is not “topological order” in the modern quantum-information/topological-insulator sense. Since the post later mentions skyrmions and topology books, this distinction will prevent conceptual drift.

The order-parameter answer is too binary. The source says the distinction between symmetry-broken and topological transitions is the presence of an order parameter.   That is serviceable for a first sentence, but too blunt. Better: Landau transitions are characterized by a local order parameter and symmetry-breaking pattern; BKT lacks a local order parameter and is diagnosed by algebraic versus exponential correlations, vortex-pair binding/unbinding, and the universal stiffness jump.

The correlation-length discussion is inaccurate in the low-temperature phase. The source says the “behaviors of the correlation length” differ in the low- and high-temperature limits after deriving a power-law correlation.   In the quasi-long-range-ordered phase, there is no finite correlation length in the ordinary exponential-decay sense; one can say the correlation length is infinite or that correlations decay algebraically.

The high-T expansion should mention path multiplicity and lattice distance. The result (K/2)^r is the weight of a minimal chain contribution in a simplified picture. On a 2D lattice, there are multiple shortest paths and longer graph contributions. This does not change the conclusion of exponential decay for small K, but it matters if presenting the formula as an equality. Sangjun can write \sim (K/2)^{|r|} up to lattice-dependent prefactors, with |r| the Manhattan distance in lattice units.

The winding-number explanation “count the number of spins in the same direction” is wrong or at least very misleading. Winding number counts the net angular advance of the spin direction as one traverses a closed loop around the defect. It is not a count of spins pointing in the same direction. The correct intuitive instruction is: unwrap the angle continuously along the loop and count the net change divided by 2\pi.

“Closed space” should be “closed loop” or “closed contour.” The source says one needs closed space to define winding number.   For the vortex invariant here, one needs a closed contour in real space that does not cross the defect core, giving a map S^1_{\mathrm{space}}\to S^1_{\mathrm{order}}.

“Homotopic vortices can be distinguished” is internally contradictory. Homotopic configurations are in the same homotopy class. They may differ by core structure, chirality conventions, polarity in a magnetic vortex, microscopic details, or experimental contrast, but those are not topological distinctions within \pi_1(S^1).

The Coulomb-gas partition function needs combinatorial and measure factors. The source’s schematic partition function is fine as a first pass, but if it is presented as a formula, it should include 1/N! or 1/(N_+!N_-!) depending on the summation convention, dimensionless measures d^2x_i/a^2, fugacity factors \prod_i y_{n_i}, and the neutrality constraint.

Boundary terms are not always irrelevant. The source says boundary terms matter for transport but not for the phase transition.   This is often acceptable in the thermodynamic bulk discussion, but the derivation of the vortex interaction and the integration by parts also depend on neutrality and boundary conditions. The post should say the boundary terms vanish under the stated boundary conditions and neutrality assumptions, rather than asserting they never affect the phase-transition discussion.

The source should use d^2x, \delta^{(2)}(\mathbf{x}-\mathbf{x}_i), and vector notation consistently. Several deltas are written as \delta(x-x_i), even though the derivation is two-dimensional.   This is a small notation issue but important in the Coulomb-gas derivation.

The trailing Gilbert-damping/skyrmion block should be removed or moved. The post ends with unrelated questions about skyrmion speed, Landé g factor, spin-orbit Hamiltonians, and Gilbert damping, plus a linear-response formula.   This material is not integrated into the BKT discussion and could confuse readers about the scope of the post. If preserved, it should become a separate “open questions” draft, not part of this BKT article.

## Style or Exposition Notes

The article has a strong lecture-note skeleton: high-T expansion, low-T spin waves, vortex free energy, and Coulomb-gas mapping are the right sequence. The main improvement is to turn “lecture memory” into a self-contained derivation. Phrases such as “look up the old lecture notes,” “We will discuss it next Wednesday,” and long blank regions should be removed before publication.

Use one convention for K, J, E_c, and \beta E_c. At the start, define
K=\beta J=\frac{J}{k_BT}.
Then write physical energies with J or \rho_s, and dimensionless Boltzmann exponents with K. For a continuum superfluid/superconductor, it may be cleaner to use \rho_s instead of J:
\beta H=\frac{\rho_s}{2k_BT}\int d^2x\,(\nabla\theta)^2,
\qquad
K=\frac{\rho_s}{k_BT}.

Use “renormalized stiffness” when discussing the universal BKT jump:
K_R(T_{\mathrm{BKT}}^-)=\frac{2}{\pi}.
Use “bare stiffness” or “single-vortex estimate” when discussing J directly. This one wording change will prevent a major misconception.

The homotopy section should be shortened and made more precise. A possible replacement structure is: define the order-parameter manifold S^1; a loop around a point defect gives a map S^1\to S^1; homotopy classes are \pi_1(S^1)=\mathbb{Z}; the integer is W=(2\pi)^{-1}\oint\nabla\theta\cdot d\ell; vortex W=+1, antivortex W=-1, and higher-charge vortices cost energy \propto W^2, so they tend to split.

The Resnick experiment sentence should be more specific. Instead of “2D superconductors,” write “triangular planar arrays of proximity-coupled Pb–Sn Josephson junctions” or “Josephson-junction arrays,” and instead of only “resistance,” mention nonlinear I–V characteristics. APS’s abstract supports that system description.

The post should avoid saying BKT has “no divergence” without qualification. Say that it has no conventional local-order-parameter singularity and no ordinary Landau second-order thermodynamic singularity, while the correlation length has an essential singularity and the stiffness has a universal jump.

## References to Check

The most important textbook/e-book candidates from Sangjun’s local list are, in priority order:

1. Chaikin & Lubensky, Principles of Condensed Matter Physics. This is likely the best first check for the XY model, topological defects, vortex energetics, and the Coulomb-gas picture. Cambridge lists the book as Principles of Condensed Matter Physics by P. M. Chaikin and T. C. Lubensky.
2. Kardar, Statistical Physics of Fields. This is likely the best reference for field-theory/RG normalization, Coulomb-gas/sine-Gordon mappings, and the meaning of renormalized couplings. Cambridge lists Kardar’s Statistical Physics of Fields.
3. Sethna, Statistical Mechanics: Entropy, Order Parameters, and Complexity. This is probably the most readable reference for order parameters, topology, RG intuition, and phase-transition classification. Sethna’s Cornell page states that the second edition is available as a PDF and from Oxford University Press.
4. Arovas, Lecture Notes on Condensed Matter Physics. Useful for a derivation-oriented check, especially if the local 2024/2025 version has BKT, superfluid stiffness, or defect sections. I found a public UCSD course copy of Arovas’s notes, but did not read Sangjun’s local PDF.
5. Reichl, A Modern Course in Statistical Physics. Useful for broader statistical-mechanics background and phase-transition context; Wiley describes it as covering equilibrium and nonequilibrium statistical physics.
6. Girvin & Yang, Modern Condensed Matter Physics. Useful for condensed-matter framing, superfluid/superconducting phase stiffness, and modern terminology. Cambridge lists the 2019 book by Steven M. Girvin and Kun Yang.
7. Fradkin, Field Theories of Condensed Matter Physics. Best if Sangjun wants the advanced field-theoretic view or sine-Gordon/RG formulation. Cambridge describes the second edition as including RG, gauge theory, topological fluids, topological insulators, and quantum entanglement.
8. Pires, A Brief Introduction to Topology and Differential Geometry in Condensed Matter Physics. Useful for cleaning up the topology/skyrmion distinction, but less central than Mermin’s RMP review for this BKT post. IOP lists the second edition and describes it as an introduction to topology and differential geometry methods for condensed-matter physics.
9. Bhattacharjee, Mahan, and Bandyopadhyay, Topology and Condensed Matter Physics. Useful as background for broader topology language, but not the first place to check the XY/BKT derivation. Springer lists the edited volume.
10. Monastyrsky, Topology in Condensed Matter. Useful for broader topology context, not the first BKT derivation source. Springer lists Topology in Condensed Matter in its solid-state sciences series.

Primary papers and review articles Sangjun should check before finalizing corrections:

* V. L. Berezinskii, “Destruction of Long-range Order in One-dimensional and Two-dimensional Systems Possessing a Continuous Symmetry Group. II. Quantum Systems,” Sov. Phys. JETP 34, 610–616 (1972). JETP lists the English translation and bibliographic details.
* J. M. Kosterlitz and D. J. Thouless, “Ordering, metastability and phase transitions in two-dimensional systems,” Journal of Physics C 6, 1181–1203 (1973). InspireHEP lists the paper and publication details.
* N. D. Mermin and H. Wagner, “Absence of Ferromagnetism or Antiferromagnetism in One- or Two-Dimensional Isotropic Heisenberg Models,” Phys. Rev. Lett. 17, 1133 (1966).
* N. D. Mermin, “The topological theory of defects in ordered media,” Rev. Mod. Phys. 51, 591 (1979). This is especially relevant for the homotopy-defect section.
* D. R. Nelson and J. M. Kosterlitz, “Universal Jump in the Superfluid Density of Two-Dimensional Superfluids,” Phys. Rev. Lett. 39, 1201 (1977). This is the source to check before writing K_R(T_{\mathrm{BKT}}^-)=2/\pi.
* B. I. Halperin and D. R. Nelson, “Resistive transition in superconducting films,” J. Low Temp. Phys. 36, 599–616 (1979). This is the source to check for the V\propto I^{a(T)}, a(T_{\mathrm{BKT}})=3 discussion.
* D. J. Resnick, J. C. Garland, J. T. Boyd, S. Shoemaker, and R. S. Newrock, “Kosterlitz-Thouless Transition in Proximity-Coupled Superconducting Arrays,” Phys. Rev. Lett. 47, 1542 (1981). This supports the Josephson-array experimental wording.
* M. Hasenbusch, “The two dimensional XY model at the transition temperature: A high precision Monte Carlo study,” for checking the numerical square-lattice XY transition temperature and avoiding the bare T_c=\pi J/2k_B misconception.

## Questions for Sangjun

1. When you say “ground state should break this symmetry,” do you mean the T=0 classical ground-state manifold, or are you trying to describe the finite-temperature low-T BKT phase? The revision should explicitly separate these.
2. Do you want this post to treat K=J/(k_BT) as a bare lattice coupling, or K=\rho_s/(k_BT) as a renormalized/continuum stiffness? This choice determines how you should phrase K_c=2/\pi.
3. Should the single-vortex free-energy section be labeled as a heuristic entropy–energy argument rather than a calculation of the actual lattice T_{\mathrm{BKT}}?
4. In the Coulomb-gas partition function, are you assuming periodic boundary conditions? If yes, where will you impose \sum_i n_i=0?
5. Do you want the article to cover superconducting films/Josephson arrays, XY magnets, or both? The experimental probes and current formula should be tailored to the chosen system.
6. Should the skyrmion/Gilbert-damping notes become a separate post? They are interesting, but they currently distract from the BKT derivation and introduce unverified formulas outside the article’s scope.
