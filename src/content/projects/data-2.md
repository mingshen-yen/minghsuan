---
title: Seismic Stress Drop Scaling Study
tag: Data
image: /images/stress-drop-fig8b.jpg
stack: [Python, SQL]
sourceUrl: https://www.researchgate.net/publication/377440476_Source_parameters_and_scaling_relationships_of_stress_drop_for_shallow_crustal_seismic_events_in_Western_Europe
liveUrl: https://beaded-tumble-185.notion.site/Earthquakes-Stress-Drop-Scaling-Study-38fe7c276c51816a9a4dd2d8f2c967a7?pvs=73
featured: true
order: 1
---

Built a large-scale seismic waveform processing pipeline covering Western Europe (1990-2020). Starting from ~52 million raw waveforms, the pipeline performed automated quality control, spectral decomposition, and source parameter estimation — successfully characterizing 6,135 seismic events in terms of seismic moment, corner frequency, and stress drop, and investigating the scaling relationship between stress drop and moment magnitude.

#### ***Method***

1. **Model used**: ω²-source model — stress drop derived by combining corner frequency and seismic moment
2. **Technique**: Generalized Inversion Technique (GIT) to separate source, site, and path effects
3. **Dataset**: 220,000 high-quality records from 6,135 seismic events (Jan 1990 - May 2020), shallow crustal events in Western Europe

#### ***Key Findings***

1. Most source spectra conform to the standard ω²-model
2. Stress drop shows a positive correlation with moment magnitude for Mw 3-4
3. Self-similarity observed for magnitudes Mw > 4
4. Mean stress drop in western Europe: 13.8 MPa
