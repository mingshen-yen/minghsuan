---
title: Asia's 2030 Emissions Gap
summary: "How far Asia's emissions drift from a 1.5°C-compatible pathway if current trends hold, measured against the IPCC AR6 scenario database."
tag: Analysis
image: /images/iam-emissions-pathways.jpg
stack: [Python, pyam, pandas, matplotlib]
sourceUrl: https://github.com/mingshen-yen/IAM_analysis
featured: false
order: 4
---

How far do emissions drift from a 1.5°C-compatible pathway if current trends hold? The answer is a number, and getting to it means pulling two scenarios out of a database of thousands and measuring the distance between them.

#### ***Data***

IPCC AR6 Scenario Explorer, regional (R6) database, hosted by IIASA. Two scenarios pulled from it, both modelled with IMAGE 3.2: `SSP2-baseline`, a middle-of-the-road future with no policy beyond current trends, and `1.5CNow_Gradual`, where reductions start immediately and decline gradually.

#### ***Pipeline***

1. **Load** the AR6 database through `pyam.IamDataFrame`
2. **Filter** to one region, one variable, and the two scenarios — `R6ASIA`, `Emissions|CO2`, 2010–2050 — averaging across models where a filter returns more than one
3. **Compute** the year-by-year gap, the 2030 gap, the net-zero year for each pathway, and the emissions summed across the period
4. **Plot** trajectories, annual gap, and the summed comparison

#### ***Outcome***

- The two pathways separate around 2020 and never reconverge: the baseline rises to roughly 25,000 Mt CO₂/yr by 2050 while the 1.5°C pathway falls to about 6,000
- **The 2030 gap is 11,497 Mt CO₂/yr** — larger than the pathway's own emissions that year, so the shortfall by 2030 exceeds the entire budget the pathway allows for it
- Summed across the modelled years: 193,070 Mt CO₂ for the baseline against 107,552 for the pathway, **a gap of 85,519 Mt CO₂**
- Neither reaches net zero inside the window, which is itself the finding: a gradual 1.5°C pathway starting now still leaves this region emitting at mid-century

The database reports at five-year intervals and those sampled values are summed directly, so the totals above compare to each other but are not tonnes emitted — a true cumulative figure would integrate over the interval.

#### ***Reference***

Riahi, Schaeffer et al., 2022, Mitigation Pathways Compatible with Long-Term Goals, in Mitigation of Climate Change, IPCC, Geneva.
