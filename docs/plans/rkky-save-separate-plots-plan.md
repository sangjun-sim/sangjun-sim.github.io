# RKKY Notebook Separate Plot Save Plan

## Request

`rkky.ipynb`에서 현재 하나의 큰 composite figure로 그려지는 플롯들을 각각 별도 이미지 파일로 저장한다.

## Current Notebook Structure

- Target file: `rkky.ipynb`
- Notebook has 2 code cells.
  - Cell 0 contains almost all code.
  - Cell 1 appears to have no meaningful source.
- Main plotting entry point:
  - `make_figure(out_path)`
  - Current call:
    ```python
    make_figure('/mnt/user-data/outputs/rkky_first_principles.png')
    ```
- Current failure seen in notebook output:
  - `plt.savefig(out_path, dpi=150, bbox_inches='tight')` fails because `/mnt/user-data/outputs/...` is not a reliable local project path.
- Current figure layout:
  - `fig = plt.figure(figsize=(18, 14))`
  - `gs = gridspec.GridSpec(3, 3, hspace=0.52, wspace=0.40)`
  - Visible panels:
    - `(a)` Im `G_{0R}(E)` heatmap
    - `(b)` Energy-resolved Green's function curves
    - `(c)` Energy integrand and cumulative integral
    - `(d)` Method comparison at filling `n=1/3`
    - `(e)` Method comparison at filling `n=1/2`
    - `(f)` Strong-coupling breakdown scan
    - `(g)` `J_sd^2` scaling verification
    - `(h)` Derivation hierarchy diagram
  - Matplotlib reports 10 axes because `(a)` has a colorbar axis and `(c)` has a twin y-axis.

## Target Behavior

- Save the combined figure as before, but to a local project path.
- Save each conceptual panel as its own PNG.
- Default output directory:
  - `_outputs/rkky/`
  - This avoids accidentally publishing temporary notebook artifacts as Jekyll pages/assets.
- Use stable, sortable filenames:
  - `_outputs/rkky/00_rkky_first_principles_combined.png`
  - `_outputs/rkky/01_green_heatmap.png`
  - `_outputs/rkky/02_green_energy_slices.png`
  - `_outputs/rkky/03_energy_integrand_cumulative.png`
  - `_outputs/rkky/04_method_comparison_n_1_3.png`
  - `_outputs/rkky/05_method_comparison_n_1_2.png`
  - `_outputs/rkky/06_strong_coupling_breakdown.png`
  - `_outputs/rkky/07_jsd_squared_scaling.png`
  - `_outputs/rkky/08_derivation_hierarchy.png`

## Implementation Approach

Refactor the notebook plotting section instead of trying to crop axes out of the already-built composite figure.

Reason:

- Cropping axes from a composite Matplotlib figure is fragile, especially with colorbars and twin axes.
- Separate plot functions keep each image clean and let each panel have its own figure size.
- Shared calculations can still run once and be reused by the combined figure and separate figures.

## Files To Change

- Change `rkky.ipynb`
  - Keep existing helper functions and comments.
  - Replace the current monolithic plotting body with reusable data preparation and plotting functions.
  - Replace the `/mnt/user-data/outputs/...` path with `_outputs/rkky/`.
- Optionally add `_outputs/` to `.gitignore`
  - Only do this if generated plots should stay local and untracked.
  - Do not overwrite existing `.gitignore` changes.

## Proposed Code Snippets

Add near the plotting section:

```python
from pathlib import Path

DEFAULT_OUT_DIR = Path("_outputs/rkky")


def ensure_out_dir(out_dir=DEFAULT_OUT_DIR):
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    return out_dir


def save_fig(fig, out_dir, filename, dpi=180):
    out_dir = ensure_out_dir(out_dir)
    path = out_dir / filename
    fig.savefig(path, dpi=dpi, bbox_inches="tight")
    plt.close(fig)
    print(f"Saved: {path}")
    return path
```

Add a data preparation function:

```python
def prepare_rkky_plot_data(R_max=35):
    data = {"R_max": R_max}

    print("Computing G(R,E) matrix ...")
    E_arr, R_arr, G_mat, EF_half = compute_G_R_vs_E(
        N_k=4000, filling=0.5, eta=0.025
    )
    data["green"] = {
        "E_arr": E_arr,
        "R_arr": R_arr,
        "G_mat": G_mat,
        "EF_half": EF_half,
    }

    data["integrand"] = prepare_integrand_data(EF_half)
    data["method_comparison"] = prepare_method_comparison_data(R_max)
    data["strong_coupling"] = prepare_strong_coupling_data()
    data["scaling"] = prepare_scaling_data()

    return data
```

Create separate panel functions:

```python
def plot_green_heatmap(data):
    fig, ax = plt.subplots(figsize=(6, 4.5))
    E_arr = data["green"]["E_arr"]
    R_arr = data["green"]["R_arr"]
    G_mat = data["green"]["G_mat"]
    EF_half = data["green"]["EF_half"]

    extent = [E_arr[0], E_arr[-1], R_arr[-1], R_arr[0]]
    im = ax.imshow(
        G_mat,
        aspect="auto",
        extent=extent,
        cmap="RdBu_r",
        vmin=-0.15,
        vmax=0.15,
        origin="upper",
    )
    ax.axvline(EF_half, color="lime", lw=1.8, ls="--", label="$E_F$")
    ax.set(
        xlabel=r"Energy $E\;[t]$",
        ylabel="$R$ [lattice]",
        title="(a) $\\mathrm{Im}\\,G_{0R}(E+i\\eta)$",
        ylim=(1, 30),
    )
    fig.colorbar(im, ax=ax, shrink=0.8, label="Im $G$")
    ax.legend(fontsize=9)
    return fig
```

Use the same pattern for:

- `plot_green_energy_slices(data)`
- `plot_energy_integrand_cumulative(data)`
- `plot_method_comparison(data, filling_key)`
- `plot_strong_coupling_breakdown(data)`
- `plot_jsd_squared_scaling(data)`
- `plot_derivation_hierarchy()`
- `plot_combined_figure(data)`

Add one public entry point:

```python
def make_figures(out_dir=DEFAULT_OUT_DIR, save_combined=True, save_separate=True):
    out_dir = ensure_out_dir(out_dir)
    data = prepare_rkky_plot_data(R_max=35)
    saved_paths = []

    if save_combined:
        fig = plot_combined_figure(data)
        saved_paths.append(save_fig(fig, out_dir, "00_rkky_first_principles_combined.png"))

    if save_separate:
        panel_specs = [
            ("01_green_heatmap.png", plot_green_heatmap),
            ("02_green_energy_slices.png", plot_green_energy_slices),
            ("03_energy_integrand_cumulative.png", plot_energy_integrand_cumulative),
            ("06_strong_coupling_breakdown.png", plot_strong_coupling_breakdown),
            ("07_jsd_squared_scaling.png", plot_jsd_squared_scaling),
            ("08_derivation_hierarchy.png", lambda _: plot_derivation_hierarchy()),
        ]

        for filename, plotter in panel_specs:
            saved_paths.append(save_fig(plotter(data), out_dir, filename))

        saved_paths.append(
            save_fig(
                plot_method_comparison(data, "1/3"),
                out_dir,
                "04_method_comparison_n_1_3.png",
            )
        )
        saved_paths.append(
            save_fig(
                plot_method_comparison(data, "1/2"),
                out_dir,
                "05_method_comparison_n_1_2.png",
            )
        )

    return saved_paths
```

Replace the final block:

```python
if __name__ == "__main__":
    import time

    t0 = time.time()
    make_figures("_outputs/rkky")
    print(f"Total time: {time.time() - t0:.1f}s")
```

## Implementation Checklist

- [ ] Preserve existing physics helper functions.
- [ ] Preserve existing explanatory comments unless a comment must move with its plot function.
- [ ] Add `Path`-based output directory creation.
- [ ] Replace `/mnt/user-data/outputs/...` with `_outputs/rkky/`.
- [ ] Split calculations from plotting so heavy numerical work runs once.
- [ ] Add separate plot functions for panels `(a)` through `(h)`.
- [ ] Keep a combined figure output for continuity.
- [ ] Run the notebook or extracted cell enough to verify PNG files are created.
- [ ] Verify generated filenames and count.
- [ ] If desired, add `_outputs/` to `.gitignore` without touching unrelated user changes.

## Open Questions

- Should `_outputs/rkky/` be ignored by git?
  - Recommended: yes, if these are generated artifacts.
  - If the images are meant to be used in blog posts, save them under `assets/img/rkky/` instead.
- Do you want only PNG, or both PNG and PDF/SVG?
  - Recommended default: PNG only.

## Suggested Commit Message

```text
Plan separate RKKY notebook plot exports
```
