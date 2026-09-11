---
title: Near-Fault Earthquake Pulses
summary: "80 velocity pulses extracted from five moderate earthquakes across three national networks, then 30 more from the 2023 Kahramanmaraş doublet — each tested against a simulation of the same rupture."
tag: Research
image: /images/velocity-pulses-moderate.jpg
stack: [Python, MATLAB, wavelet analysis, statistical validation, signal processing]
# sourceUrl: https://doi.org/10.1177/87552930241305012
# sourceKind: code
liveUrl: https://pulse-extraction.pages.dev/
featured: false
order: 3
---

Analysing observations from seven Mw 6.1–7.8 earthquakes to understand why damaging velocity pulses vary dramatically between nearby locations and why earthquake magnitude alone cannot reliably predict them.

#### ***Project at a glance***

- Analysed records from seven earthquakes across Taiwan, Japan, New Zealand, and Türkiye
- Screened 637 strong-motion stations from the 2023 Kahramanmaraş doublet down to the 71 that passed the peak-velocity threshold
- Validated the extraction method against 244 independently identified pulses from NGA-West2
- Compared recorded ground motions with seven fault models simulated for this study, and with published dynamic rupture simulations of the Mw 7.8 rupture
- Published the findings in Bulletin of the Seismological Society of America and Earthquake Spectra

#### ***The Challenges***

Near-fault earthquakes can concentrate energy into one or two large velocity pulses. When a pulse period aligns with a structure’s natural period, the resulting demand can be exceptionally damaging.

Common empirical models estimate pulse behaviour primarily from earthquake magnitude and distance. However, records from nearby stations often show very different pulse periods, amplitudes, and orientations. This project tested how well those simplified assumptions represent real earthquakes.

#### ***My contribution***

- **Designed and implemented** a reproducible signal-processing pipeline for multi-network strong-motion records.
- **Processed and analysed** seismic data with different formats and sampling rates from national monitoring networks.
- **Separated permanent ground displacement** from directivity pulses using baseline correction, static-offset estimation, and wavelet analysis.
- **Built the comparison** between recorded motions and the dynamic rupture simulations produced by collaborators.
- **Quantified model performance** using independent validation data and distance-binned detection rates.
- Translated the results into two first-author publications and one as co-author.

#### ***Approach***

**1. Prepare and standardise the data**

Records from multiple seismic networks were corrected for instrument drift and inconsistent baselines. Static ground displacement was estimated before pulse extraction so that fling-step effects would not be mistaken for directivity pulses.

**2. Extract and classify velocity pulses**

Wavelet analysis was applied across both horizontal components. For each record, the workflow identified the strongest pulse and measured its period, peak velocity, energy, and orientation.

**3. Validate the workflow**

Static-offset estimates were checked against InSAR observations. Extracted pulse periods were also compared with 244 independently identified NGA-West2 pulses and published results for the Kumamoto earthquake.

**4. Test physical explanations**

Observed records were compared station by station with seven simulated fault models. The models varied fault dip, asperity size, and asperity location to test how rupture complexity controls pulse characteristics.

#### ***Key Findings***

- **Magnitude alone was a weak predictor.** Across 80 pulses from five moderate earthquakes, pulse period varied substantially within individual events and showed only a weak relationship with magnitude.
- **Rupture heterogeneity mattered.** Simulations showed that asperity location and size strongly affected pulse amplitude and period. An asperity farther from the hypocentre could generate stronger pulses even when total slip remained unchanged.
- **A common empirical model overpredicted pulse occurrence beyond 10 km** for the moderate earthquakes studied.
- **The Mw 7.8 event showed greater variability.** Observed pulse periods ranged from 3 to 14 seconds.
- **Nearby stations produced sharply different results.** Two stations only 1.8 km apart had pulse orientations differing by 73°, while stations 3.8 km apart disagreed on whether a pulse was present at all.
- **The largest measured pulse occurred at Antakya:** 173–179 cm/s, approximately 1.5 km from the rupture.

#### ***Why it matters***

The results show that directivity and earthquake magnitude cannot fully explain near-fault velocity pulses. Local slip heterogeneity, fault geometry, and site response can be equally important.

For seismic hazard assessment, this means that magnitude-based relationships may hide the extreme variability experienced at individual sites. More realistic dynamic rupture models require heterogeneous slip distributions and fault geometries to reproduce what instruments record.

#### ***Publications***

- [Within- and between-event variabilities of strong-velocity pulses of moderate earthquakes within dense seismic arrays](https://doi.org/10.1785/0120200376), *Bulletin of the Seismological Society of America*, 2022
- [Significance of pulse-like ground motions and directivity effects in moderate earthquakes: the example of the Mw 6.1 Gölyaka-Düzce earthquake](https://doi.org/10.1785/0120230043), *Bulletin of the Seismological Society of America*, 2024
- [An analysis of directivity pulses using empirical data and dynamic rupture simulations of the 2023 Kahramanmaraş earthquake doublet](https://doi.org/10.1177/87552930241305012), *Earthquake Spectra*, 2025
