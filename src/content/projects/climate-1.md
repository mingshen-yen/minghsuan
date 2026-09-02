---
title: Current Trends Against 1.5°C Scenarios
summary: "How far Asia's emissions drift from a 1.5°C-compatible pathway if current trends hold, measured against the IPCC AR6 scenario database."
tag: Climate
image: /images/iam-emissions-pathways.jpg
stack: [Python, pyam, pandas, matplotlib]
sourceUrl: https://github.com/mingshen-yen/IAM_analysis
order: 1
---

How far are we from a 1.5°C pathway if current trends continue? This notebook answers that for one region by comparing two scenarios from the IPCC AR6 Scenario Explorer, and quantifying the distance between them.

#### ***Scope & Methods***

1. Load the AR6 regional (R6) database through `pyam.IamDataFrame`
2. Compare a no-additional-policy baseline (`SSP2-baseline`, IMAGE 3.2) against a 1.5°C-compatible pathway (`1.5CNow_Gradual`) for CO₂ emissions in `R6ASIA`, 2010–2050
3. Compute the year-by-year gap, the 2030 gap, the net-zero year, and the summed emissions over the period

#### ***Key Findings***

- The two pathways separate around 2020 and never reconverge: the baseline keeps rising to roughly 25,000 Mt CO₂/yr by 2050 while the 1.5°C pathway falls to about 6,000.
- **The 2030 gap is 11,497 Mt CO₂/yr** — more than the pathway itself emits that year, meaning the shortfall by 2030 is larger than the entire budget the pathway allows.
- Summed across the modelled years, the baseline totals 193,070 Mt CO₂ against the pathway's 107,552 — **a gap of 85,519 Mt CO₂**.
- Neither scenario reaches net zero inside the 2050 window, which is itself the finding: a gradual 1.5°C pathway starting now still leaves this region emitting at mid-century.

#### ***Data***

IPCC AR6 Scenario Explorer, regional (R6) database, hosted by IIASA. Riahi, Schaeffer et al., *Mitigation Pathways Compatible with Long-Term Goals*, in **Mitigation of Climate Change**, IPCC, Geneva, 2022.
