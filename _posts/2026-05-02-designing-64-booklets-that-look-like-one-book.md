---
title: Designing 64 booklets that look like one book
date: 2026-01-18T09:51:00
description: Behind the master template that unified Mexico's National Agricultural Plan. Grids, locked typography, and decoupled production.
image: ''
---

### Designing 64 Booklets That Look Like One Book

In 2016, I took on the lead editorial designer and production strategist role for the Planeación Agrícola Nacional 2017–2030 — Mexico's federal agricultural planning initiative directed by SAGARPA (now SADER). The scope of the project was, by most measures, operationally impossible to produce the conventional way.

The deliverables: two massive core editions of the national plan, plus 64 individual booklets — one for each of the country's principal crops and agricultural product sectors, covering regions from Baja California to Chiapas. Each booklet had different content, different data, different regional maps, and inputs from dozens of separate agricultural departments across the government.

All 66 publications had to look like they came from the same place.

***

**Why conventional production fails at this scale**

The conventional editorial approach to a project like this would be to design each booklet individually, using a shared style guide as a reference. Designers would work from the guide, try to match the reference, and deliver 64 documents that are approximately consistent.

Approximately consistent at this scale means 64 points of deviation, compounding. By the time you're producing booklet 30, the small decisions that felt like they were within acceptable range — a slightly different sidebar width, a label at 7pt instead of 8pt, a slightly different treatment of the running header — have accumulated into a publication family that reads as visually fragmented.

For a government document reaching 4.2 million farmers across 32 states, visual fragmentation is not an aesthetic problem. It is a communication problem. It signals inconsistency in the institution behind the document.

***

**The shift from "pages" to "system"**

The decision that made this project deliverable was conceptual: I stopped thinking about designing pages and started thinking about designing a system.

A system, in this context, means: a set of rules, templates, and components that produce correct output predictably, regardless of who inputs the content or what content is input.

I applied what I call _Editorial Systems Thinking_ — treating the publication not as a series of unique design decisions, but as a container for variable data. If the system is correctly designed, the output is correct by default. Design decisions are made once, at the system level, and inherited everywhere.

***

**The Master Narrative Framework**

The first structural decision was defining the narrative architecture that all 64 booklets would share. Every booklet followed an identical user flow:

1. Introduction to the crop/product sector
2. Regional production data
3. Crop-specific production data and key metrics
4. Future projections and strategic priorities

This wasn't just an editorial convenience — it was an accessibility decision. A reader picking up the Aguacate (avocado) booklet after having read the Arroz (rice) booklet would already know how to navigate it. The structure itself was a usability feature.

With the narrative framework fixed, the layout decisions became about supporting that framework consistently — not about creating visual variety.

***

**The Master Template: locked grids and coupled typography**

The master template in InDesign was built to enforce the system, not invite interpretation.

**Grid system:** A fixed column grid with explicit margin rules was applied across all page types. Sidebar widths were locked. The bleed area was defined globally. No template layout allowed content outside the defined zones.

**Typography locking:** Every typographic decision — body text size and leading, heading sizes and weights, caption style, footnote style, pull-quote style, running header size — was defined as a named paragraph style in the master file. Production designers were instructed to never apply manual character formatting. Style names were explicit: `Heading-2-CropName`, `Caption-DataTable`, `Sidebar-RegionalNote`. The specificity of the naming reduced ambiguity in application.

**Locked layout zones:** Pages with high structural importance — the opening spread of each booklet, the data tables section, the maps spread — were designed as master pages with key elements locked at the master level. Production designers could update content within designated frames; they could not move or resize the frames themselves.

**Color system:** Each crop booklet used a consistent base palette with a single accent color drawn from a predefined palette for the crop category (grains, fruits, vegetables, etc.). The accent color was the only design variable that changed by booklet. Everything else was fixed.

***

**Decoupling design from content**

The most important operational decision was to decouple the design from the content — meaning, the layout system was complete before the content for individual booklets arrived.

In conventional production, design and content are entangled: a designer receives copy, places it, adjusts the layout to fit, delivers. This produces one-off decisions at every layout stage.

In the system I built, the layout was fully designed as a template with placeholder content. When real content arrived from the agricultural department, it was filled into the defined frames. If content was too long, the system had defined rules for handling overflow (secondary font size reduction, or content moved to a supplementary page) — not a unique judgment call by whoever was producing that booklet that week.

This is what allowed simultaneous production. Multiple booklets could be in layout production at the same time, because each layout operator was filling a defined container, not making design decisions.

***

**Map vectorization and GIS integration**

Each of the 64 booklets required custom maps showing regional production zones, state-level distribution, and geographic context. These couldn't be produced as individual bespoke illustrations without breaking the production timeline.

I developed a standardized visual treatment for geographic data using GIS vector layers: a consistent base map style (projection, state boundary weight, label size and placement), a standardized treatment for production intensity zones (choropleth color ramps drawn from the established accent palette), and predefined legend formats.

Map production was therefore not a design task on each booklet — it was a data-input task feeding into a defined visual template. This reduced the production time for each map significantly and ensured visual consistency across all regional representations.

***

**The results**

The system delivered:

- 64 crop booklets + 2 core editions, on time, to government deadline
- Consistent brand voice across thousands of pages of content
- National reach: materials aligned agricultural planning strategy across all 32 Mexican states
- Social media assets (infographics, short animations) produced from the same system reached 2,662 organic followers on the Subsecretary of Agriculture's Twitter account without paid promotion
- The publications are still cited as a reference for national agricultural policy design

***

**What this kind of project teaches you**

Designing 64 booklets that look like one book is not a design challenge. It is a systems design challenge. The craft is in building the container correctly — the grid, the type rules, the template architecture, the production protocol — so that the content can flow in and the output can flow out without design judgment required at every step.

The freedom for creativity exists at the system level, not at the individual page level. Build the system well, and you can move fast without breaking things.

***

**Sources and further reading**

- SAGARPA/SADER — _Planeación Agrícola Nacional 2017–2030_ — [gob.mx/sader](https://www.gob.mx/sader)
- Bringhurst, R. — _The Elements of Typographic Style_ (4th ed.) — Hartley & Marks (on typographic systems and governance)
- Müller-Brockmann, J. — _Grid Systems in Graphic Design_ — Niggli Verlag (the foundational reference on grid systems)
- Lupton, E. (ed.) — _Type on Screen_ — Princeton Architectural Press (screen and print typography systems)
- Adobe — _Using InDesign master pages and template architecture_ — [helpx.adobe.com](https://helpx.adobe.com/indesign/using/master-pages.html)
- ESRI — _ArcGIS and cartographic design for publication_ — [esri.com](https://www.esri.com/)
- Ambrose, G. & Harris, P. — _The Layout Book_ — AVA Publishing (on editorial systems design)
