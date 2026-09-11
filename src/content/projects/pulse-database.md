---
title: Near-Fault Pulse Database
summary: "A pipeline that pulls strong-motion waveforms straight from the archives, runs each one end to end through a velocity-pulse classifier, and publishes the verdicts as a live map — reproducing 25 of 27 published pulses without a local file anywhere."
tag: Software
image: /images/pulse-database.jpg
stack: [Python, ObsPy, NumPy, SciPy, PyWavelets, pandas, pytest, Leaflet]
liveUrl: https://pulse-extraction.pages.dev/
featured: true
order: 1
---

The classifier that identifies near-fault velocity pulses existed as MATLAB, run by hand on files someone had already downloaded and corrected. This rewrites it in Python and wires it to the archives directly, so a record goes from an FDSN query to a pulse verdict in one call — and then keeps doing it on a schedule.

#### ***Pipeline***

`fetch → instrument response → QC gate → baseline correction → Arias window → classifier`

- **Fetch** from any FDSN node (IRIS, GeoNet, GFZ), from ESM in DYNA format, from Taiwan's CWA FreeField exports, or from local MiniSEED and SAC with StationXML
- **Resolve the instrument** from StationXML and remove the response, so raw counts become ground motion without a manual step
- **Gate on quality** before anything downstream spends time on a bad record
- **Correct the baseline** with either the Kamai or the eBASCO method — fling-step removal changes the verdict, so the choice is explicit rather than buried
- **Window** to the Arias 5–95% strong-motion interval and decimate to 50 Hz
- **Classify** with the Shahi & Baker (2014) stratified wavelet algorithm, returning the verdict, period, peak velocity and orientation

#### ***Validation***

A port is only worth anything if it reproduces the original. Measured against the published Shahi & Baker (2014) pulse table, with every record fetched live from the archive and no local files involved:

- **25 of 27 pulse verdicts matched**, across five earthquakes spanning 1979 to 2011 — L'Aquila, Irpinia and Montenegro through ESM, Darfield and Christchurch through GeoNet
- **median |ΔTp| 0.032 s** and **median |ΔPGV| 0.60 cm/s** against the published values
- **70 tests across 19 files** covering the QC gate, response removal, baseline correction and the data export the site reads

#### ***Automation***

A scheduled job re-runs the event set every six hours and redeploys the site, so what the map shows tracks the archives instead of a snapshot someone took once.

#### ***Front end***

A Leaflet map per event: pulse against no-pulse, marker size scaled to peak velocity, pulse orientation drawn on the marker, fling-step records flagged separately. Each event carries its pulse count and median period, with period and peak velocity plotted against rupture distance. Six events are processed end to end so far.

#### ***Related***

The method this implements, and what it found, is the subject of *Near-Fault Earthquake Pulses* — two first-author papers on why pulse period resists prediction from magnitude alone.
