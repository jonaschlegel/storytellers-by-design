# Resource List Audit

> Status: This audit records the full editorial review that informed the README cleanup. The main recommendations have now been applied to `README.md`: Section A has skill/use labels, planning tools have been moved into their own subsection, duplicate or weaker entries were removed or replaced, rights caveats were sharpened, and several broken example links were replaced with more stable alternatives.

> Remaining link-check warnings are mostly 403/429 responses from institutional or commercial sites that block automated requests. These should be spot-checked manually before the workshop, but they are not automatically grounds for removal.

This audit evaluates the current `README.md` resource list for the DH Benelux 2026 workshop **Storytellers by Design**. The goal is not to maximize the number of entries, but to make sure each entry is useful, understandable, and defensible for a workshop about research-driven digital storytelling, critical digital literacy, and design methods.

## Overall Assessment

The list is useful and broadly well aligned with the workshop, but it should become more curated. It currently mixes several different kinds of resources:

- platforms for publishing stories;
- tools for preparing data, media, or prototypes;
- developer frameworks;
- collections and source repositories;
- published examples for critique;
- planning and facilitation tools.

That mix is not a problem if it is labelled clearly. Without labels, however, nontechnical participants may not know whether an item is no-code, low-code, developer-oriented, commercial, archival, experimental, or mainly useful as an example.

The current list is not "complete" in the sense of being exhaustive. That is fine: it should become a living, curated list. Completeness should mean coverage across modalities, rights conditions, skill levels, and workshop use cases, not a fixed number of entries.

## Status Legend

- **Keep**: Good fit and useful as listed.
- **Keep with caveat**: Good fit, but needs a clearer note about cost, access, skill level, rights, or technical constraints.
- **Verify**: Potentially useful, but maintenance, link stability, or current availability should be checked.
- **Move**: Useful, but belongs in a different subsection or should be labelled as planning/prototyping rather than storytelling output.
- **Replace**: The idea is useful, but another resource would be better or more accessible.
- **Remove**: Weak fit, duplicate, unstable, or not worth workshop attention.

## Link Check Summary

`npx markdown-link-check README.md` checked 235 links and reported 33 failures.

Many 403 and 429 results are probably bot-blocking rather than genuinely dead links. The 404, 0, 503, and unexpected redirect results should be investigated first.

High-priority link checks:

- `https://annotorious.github.io/` returned 404; update to the current Annotorious documentation or remove.
- `https://nathalielawhead.itch.io/electric-zine-maker` returned 404; verify the current Electric Zine Maker page.
- `https://www.bbc.co.uk/timelines/zqchpg8` returned 404; replace or remove.
- `https://interactive.aljazeera.com/aje/2011/egypt-18-days/index.html` returned 404; find archive/current URL or replace.
- `https://www.bl.uk/events/online-exhibitions` returned 404; use a current British Library exhibitions page.
- `https://www.annefrank.org/en/about-us/what-we-do/publications/anne-frank-house-vr/` returned 404; replace with a current page or accessible non-VR alternative.
- `https://www.notesonblindness.co.uk/vr/` returned 404; use the main project page or replace.
- `http://www.evolutionoftheweb.com/` returned 503; verify whether the project is still available.
- `https://stownpodcast.org/`, `https://digitalharlem.org/`, and `https://vectorsdev.usc.edu/NYCsound/777b.html` returned status 0; manually test and consider archived alternatives.
- `https://edithfinch.com/` returned 307; update to the final canonical URL if needed.

## Section A: Platforms & Tools

### Map, Place, and Landscape Stories

| Entry                | Status           | Evaluation                                                                                         |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| StoryMapJS           | Keep             | Strong no-code fit for spatial narratives and workshop demos.                                      |
| ArcGIS StoryMaps     | Keep with caveat | Excellent output quality, but commercial ecosystem and account/export constraints should be noted. |
| Google My Maps       | Keep             | Accessible, no-code, and useful for quick place-based prototypes.                                  |
| Leaflet              | Keep with caveat | Valuable open-source mapping library, but developer-oriented.                                      |
| QGIS                 | Keep with caveat | Excellent for geospatial preparation and analysis, but not primarily a storytelling platform.      |
| Mapbox               | Keep with caveat | Powerful but commercial and more technical than beginner-friendly workshop tools.                  |
| CARTO                | Keep with caveat | Useful for spatial analysis and dashboards, but overpowered for many simple DH stories.            |
| uMap                 | Keep             | Strong no-code/open mapping option built around OpenStreetMap.                                     |
| Kepler.gl            | Keep with caveat | Useful for large geospatial datasets, but specialized and less narrative by default.               |
| Palladio             | Keep             | Strong DH fit for historical data exploration, mapping, and networks.                              |
| Recogito             | Keep             | Strong DH fit for place annotation across texts, images, and maps.                                 |
| StoryMapJS Gigapixel | Keep             | Distinct and useful for close-looking stories around images, maps, manuscripts, and artworks.      |

### Timelines and Temporal Narratives

| Entry                    | Status           | Evaluation                                                                                       |
| ------------------------ | ---------------- | ------------------------------------------------------------------------------------------------ |
| TimelineJS               | Keep             | Foundational, no-code, and very suitable for workshop participants.                              |
| Sutori                   | Keep with caveat | Useful and education-friendly, but proprietary/freemium.                                         |
| Tiki-Toki                | Keep with caveat | Useful visual timeline tool, but proprietary and less open.                                      |
| Preceden                 | Keep with caveat | Works for timelines, but more generic planning/presentation than DH storytelling.                |
| TimeMapper               | Keep             | Strong spreadsheet-to-map/timeline fit for humanities projects.                                  |
| ChronoFlo Timeline Maker | Verify           | Potentially useful, but less established; check maintenance and free-tier limits.                |
| Aeon Timeline            | Move             | Better as a planning/narrative-structure tool than a public-facing historical timeline platform. |

### Scrollytelling and Long-Form Multimedia

| Entry                      | Status           | Evaluation                                                                                            |
| -------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------- |
| Scalar                     | Keep             | Excellent DH-native platform for nonlinear scholarly publishing.                                      |
| Pageflow                   | Keep             | Strong open-source platform for web documentaries.                                                    |
| Shorthand                  | Keep with caveat | Polished and relevant, but commercial.                                                                |
| Atavist                    | Verify           | Historically relevant, but current platform status and access should be checked.                      |
| Exposure                   | Verify           | Useful for photo essays, but link checker returned 403 and current accessibility should be verified.  |
| Readymag                   | Keep with caveat | Useful for visual editorial work, but commercial and less scholarly by default.                       |
| Tapestries                 | Verify           | Conceptually strong and relevant to DH Benelux context, but maintenance and access should be checked. |
| Journal of Digital History | Keep             | Very strong workshop fit for multimodal scholarly publication.                                        |
| PubPub                     | Keep with caveat | Good scholarly/community publishing fit; link checker returned 403, likely bot-blocking.              |
| Manifold                   | Keep             | Strong open-source fit for annotated digital books and scholarly media.                               |

### Data Stories and Visual Explanation

| Entry               | Status           | Evaluation                                                                                                                 |
| ------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Flourish            | Keep             | Strong no-code data storytelling option with many narrative templates.                                                     |
| Datawrapper         | Keep             | Accessible, polished, and useful for explanatory data stories.                                                             |
| Observable          | Keep with caveat | Excellent for interactive data essays, but requires JavaScript literacy for creation.                                      |
| RAWGraphs           | Keep             | Strong open-source visualisation tool, useful for humanities data.                                                         |
| Voyant Tools        | Keep             | Essential DH text-analysis and visualization platform.                                                                     |
| Tableau Public      | Keep with caveat | Useful and free to publish publicly, but commercial and dashboard-oriented.                                                |
| Microsoft Power BI  | Replace          | Useful in institutions, but business-intelligence framing makes it less central than open or narrative-first alternatives. |
| Plotly Chart Studio | Keep with caveat | Useful for charts, but more specialized and technical/scientific.                                                          |
| D3.js               | Keep with caveat | Powerful for bespoke visual stories, but developer-oriented.                                                               |
| RawGraphs 2         | Remove           | Duplicate of RAWGraphs; consolidate into one entry.                                                                        |

### Annotation, IIIF, and Collection Tours

| Entry                      | Status           | Evaluation                                                                                |
| -------------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| Storiiies                  | Keep             | Excellent IIIF storytelling tool for guided image interpretation.                         |
| Exhibit                    | Keep             | Strong fit for IIIF collection tours and exhibitions.                                     |
| Mirador                    | Keep with caveat | Excellent IIIF viewer, but often needs technical setup.                                   |
| Omeka S                    | Keep             | Core DH platform for collections, exhibits, and linked data.                              |
| Omeka Classic              | Keep with caveat | Still useful, but Omeka S should be preferred for new projects unless simplicity matters. |
| CollectionBuilder          | Keep             | Strong static-site option for sustainable digital collections.                            |
| Mukurtu                    | Keep             | Important for culturally sensitive community archives and access protocols.               |
| FromThePage                | Keep             | Strong fit for transcription, crowdsourcing, and archival participation.                  |
| Zooniverse Project Builder | Keep             | Strong fit for public participation and classification workflows.                         |
| Annotorious                | Verify           | Conceptually useful image annotation library, but current link returned 404.              |

### Audio and Locative Sound

| Entry      | Status           | Evaluation                                                                   |
| ---------- | ---------------- | ---------------------------------------------------------------------------- |
| SoundCite  | Keep             | Strong, lightweight way to integrate audio into prose.                       |
| Audacity   | Keep             | Essential open-source tool for recording and editing audio.                  |
| Descript   | Keep with caveat | Highly accessible transcript-based editing, but commercial and AI-dependent. |
| Hindenburg | Keep with caveat | Strong for radio/podcast work, but professional/commercial.                  |
| Zencastr   | Keep with caveat | Useful for remote interviews, but commercial/freemium.                       |
| GarageBand | Keep with caveat | Good beginner tool, but Apple-only.                                          |
| Reaper     | Keep with caveat | Powerful and affordable, but advanced.                                       |
| Echoes     | Verify           | Strong concept for GPS audio, but check maintenance and workshop usability.  |
| VoiceMap   | Keep with caveat | Strong locative audio publishing platform, but commercial.                   |
| Placecloud | Verify           | Interesting fit, but check activity, documentation, and adoption.            |

### Interactive Images, Hotspots, and Learning Objects

| Entry       | Status           | Evaluation                                                                                     |
| ----------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| H5P         | Keep             | Excellent open-source educational interaction framework.                                       |
| Genially    | Keep with caveat | Accessible no-code interaction tool, but commercial/freemium.                                  |
| ThingLink   | Keep with caveat | Strong hotspot and 360-media storytelling tool, but commercial/freemium.                       |
| JuxtaposeJS | Keep             | Strong, focused tool for visual comparison.                                                    |
| Canva       | Keep with caveat | Useful for quick design/prototyping, but limited as a storytelling platform.                   |
| Miro        | Move             | Better as a design-thinking and workshop planning tool than a published storytelling platform. |
| Figma       | Move             | Better as a design/prototyping tool than a published storytelling platform.                    |
| Mural       | Move             | Better as a facilitation and planning tool than a storytelling platform.                       |

### Branching Narrative and Interactive Fiction

| Entry        | Status           | Evaluation                                                                             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------- |
| Twine        | Keep             | Excellent open-source, low-barrier nonlinear storytelling tool.                        |
| Ink / Inky   | Keep with caveat | Excellent narrative scripting system, but requires some scripting.                     |
| Inklewriter  | Keep             | Strong no-code entry point for choice-based stories.                                   |
| Inform 7     | Keep with caveat | Valuable parser-based tradition, but specialized and less beginner-friendly.           |
| ChoiceScript | Keep with caveat | Useful for choice-driven narratives, but requires scripting.                           |
| Yarn Spinner | Keep with caveat | Useful for dialogue-heavy projects, but mainly game-development oriented.              |
| Undum        | Keep with caveat | Useful historical web IF framework, but developer-oriented.                            |
| Quest        | Keep with caveat | Useful visual editor/script hybrid, but check current maintenance and browser support. |

### Visual Novels, Games, and Small Worlds

| Entry        | Status           | Evaluation                                                                             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------- |
| Ren'Py       | Keep with caveat | Excellent visual novel engine, but scripting is required.                              |
| Bitsy        | Keep             | Excellent beginner-friendly tool for small walkable narrative worlds.                  |
| Decker       | Keep             | Strong card-stack/zine-like environment for experimental interactive narratives.       |
| Godot Engine | Keep with caveat | Strong open-source game engine, but technical.                                         |
| PICO-8       | Keep with caveat | Artistically useful fantasy console, but paid and code-based.                          |
| RPG Maker    | Keep with caveat | Accessible game-making environment, but commercial and genre-specific.                 |
| Construct    | Keep with caveat | Useful low-code game engine, but link checker returned 403 and platform is commercial. |
| GDevelop     | Keep             | Strong no-code/open-source option for 2D interactive experiences.                      |
| itch.io      | Keep with caveat | Important publishing/distribution platform, not a creation tool; clarify role.         |

### 3D, Virtual Exhibits, and Immersive Spaces

| Entry          | Status           | Evaluation                                                                            |
| -------------- | ---------------- | ------------------------------------------------------------------------------------- |
| Sketchfab      | Keep             | Strong platform for annotated 3D objects and accessible embeds.                       |
| Frame          | Keep             | Useful browser-based virtual space for exhibits and talks.                            |
| Artsteps       | Keep with caveat | Good virtual-gallery tool, but account/platform dependency should be noted.           |
| Blender        | Keep with caveat | Essential open-source 3D tool, but steep learning curve.                              |
| A-Frame        | Keep with caveat | Strong web-based 3D/VR framework, but developer-oriented.                             |
| Unity          | Keep with caveat | Powerful but advanced, commercial ecosystem, and often too heavy for short workshops. |
| Unreal Engine  | Keep with caveat | Professional-level and resource-intensive; link checker returned 403.                 |
| Polycam        | Keep with caveat | Accessible mobile scanning tool, but commercial/freemium and device-dependent.        |
| RealityCapture | Keep with caveat | Strong photogrammetry software, but specialized/professional.                         |

### Research Curation and Zines

| Entry               | Status           | Evaluation                                                                                                                |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Are.na              | Keep             | Strong for research curation, thematic collections, and slow web practice.                                                |
| Electric Zine Maker | Verify           | Excellent fit conceptually, but current link returned 404.                                                                |
| Notion              | Keep with caveat | Useful for planning and lightweight pages, but commercial/proprietary.                                                    |
| WriteFreely         | Keep             | Good open-source text-first publishing option.                                                                            |
| Ghost               | Keep with caveat | Good open-source publishing tool, but hosting/admin setup may be needed.                                                  |
| Zotero              | Move             | Essential research infrastructure, but better in a planning/source-management subsection than as a storytelling platform. |

## Section B: Open Collections & Sources

### License Key

| Entry                     | Status | Evaluation                                                     |
| ------------------------- | ------ | -------------------------------------------------------------- |
| Public Domain / PD        | Keep   | Useful and appropriately cautious about local legal variation. |
| CC0                       | Keep   | Accurate and useful.                                           |
| CC BY                     | Keep   | Accurate and useful.                                           |
| CC BY-SA                  | Keep   | Accurate and useful.                                           |
| Mixed / item-level rights | Keep   | Essential for cultural heritage aggregators.                   |
| Custom terms              | Keep   | Essential for stock platforms and institutional portals.       |

### Aggregators and Cultural Heritage Portals

| Entry                             | Status           | Evaluation                                                                              |
| --------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Europeana                         | Keep             | Strong European source; item-level rights caveat is correct.                            |
| Digital Public Library of America | Keep with caveat | Strong US aggregator; link checker returned 403, likely bot-blocking.                   |
| Wikimedia Commons                 | Keep             | One of the most useful reusable media sources; mixed-license caveat is correct.         |
| Internet Archive                  | Keep             | Broad and useful, but item-level access and rights vary widely.                         |
| Openverse                         | Keep with caveat | Useful discovery layer for open media; link checker returned 403, likely bot-blocking.  |
| Google Arts & Culture             | Keep with caveat | Useful for discovery and examples, but reuse is institution-specific and often limited. |

### Libraries, Archives, and Museums

| Entry                                   | Status           | Evaluation                                                                   |
| --------------------------------------- | ---------------- | ---------------------------------------------------------------------------- |
| Library of Congress Digital Collections | Keep with caveat | Strong source; link checker returned 403, likely bot-blocking.               |
| British Library Flickr Commons          | Keep             | Excellent reusable public-domain/no-known-restrictions image source.         |
| Gallica                                 | Keep             | Strong French/European source; item-level rights caveat is correct.          |
| KB Digital Collections                  | Keep with caveat | Highly relevant for Benelux; link checker returned 403, likely bot-blocking. |
| Rijksmuseum Collection                  | Keep             | Excellent open image source; item-level verification is still needed.        |
| Wellcome Collection                     | Keep             | Strong open-access collection with generous reuse.                           |
| Smithsonian Open Access                 | Keep with caveat | Strong CC0 source; link checker returned 403, likely bot-blocking.           |
| The Met Open Access                     | Keep with caveat | Excellent source; link checker returned 429, likely rate-limiting.           |
| Cleveland Museum of Art Open Access     | Keep             | Strong CC0 source.                                                           |
| Amsterdam City Archives                 | Keep             | Strong regional source; rights caveat is correct.                            |

### Maps and Geodata

| Entry                       | Status           | Evaluation                                                                       |
| --------------------------- | ---------------- | -------------------------------------------------------------------------------- |
| David Rumsey Map Collection | Keep with caveat | Excellent historical map source, but noncommercial terms should be clearer.      |
| OldMapsOnline               | Keep             | Strong discovery layer for historic maps; item-level rights caveat is correct.   |
| OpenStreetMap               | Keep             | Essential open geodata and basemap source under ODbL.                            |
| Natural Earth               | Keep             | Excellent public-domain cartographic data.                                       |
| Pelagios Peripleo           | Keep             | Strong historical place discovery tool; explain linked data if used in teaching. |
| GeoNames                    | Keep             | Useful place-name metadata under CC BY.                                          |

### Texts and Books

| Entry                                                | Status           | Evaluation                                                              |
| ---------------------------------------------------- | ---------------- | ----------------------------------------------------------------------- |
| Project Gutenberg                                    | Keep             | Excellent source; US public-domain caveat is necessary.                 |
| Standard Ebooks                                      | Keep             | Excellent curated public-domain texts.                                  |
| Wikisource                                           | Keep             | Useful open text source; verify item-level status.                      |
| Open Library                                         | Keep             | Useful access layer, but rights and borrowing constraints vary.         |
| HathiTrust Digital Library                           | Keep with caveat | Strong research source; link checker returned 403, likely bot-blocking. |
| Early English Books Online Text Creation Partnership | Keep             | Useful specialized text source for early printed materials.             |

### Audio, Music, and Sound

| Entry                                 | Status           | Evaluation                                                                               |
| ------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------- |
| Freesound                             | Keep             | Strong source, but CC BY-NC and attribution chains need attention.                       |
| Free Music Archive                    | Keep             | Useful music source with mixed CC licenses.                                              |
| ccMixter                              | Verify           | Conceptually useful, but link checker returned status 0; manually verify.                |
| Europeana Sounds                      | Keep             | Useful European audio heritage; item-level rights caveat is correct.                     |
| BBC Sound Effects                     | Keep with caveat | Useful for education/research, but custom terms and commercial limits should be clearer. |
| Library of Congress Audio Collections | Keep with caveat | Strong source; link checker returned 403, likely bot-blocking.                           |

### Image and Video Media

| Entry                        | Status           | Evaluation                                                                              |
| ---------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Public Domain Review         | Keep             | Excellent curated source and example of interpretive reuse.                             |
| NASA Image and Video Library | Keep             | Strong public-domain-oriented source with correct trademark/endorsement caveat.         |
| Pexels                       | Keep with caveat | Useful for rapid prototyping, but stock imagery may feel generic and uses custom terms. |
| Pixabay                      | Keep with caveat | Useful for rapid prototyping, but stock imagery may feel generic and uses custom terms. |
| Unsplash                     | Keep with caveat | Useful photography source, but custom license and stock aesthetics should be noted.     |
| The Noun Project             | Keep with caveat | Useful for icons and diagrams, but attribution/paid-license distinctions matter.        |

### DH, GLAM, and Research Data

| Entry                     | Status | Evaluation                                                                                                 |
| ------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| Zenodo                    | Keep   | Excellent open research repository with item-level licenses.                                               |
| OpenAIRE Explore          | Keep   | Useful European open-research discovery layer.                                                             |
| CLARIN Resource Families  | Keep   | Strong source for language resources; rights vary by resource.                                             |
| DARIAH Tools and Services | Move   | More a registry of tools/services than an open collection/source; useful but category should be clarified. |
| Wikidata                  | Keep   | Excellent CC0 linked-data source for storytelling and enrichment.                                          |
| Open Knowledge Maps       | Move   | More a discovery/visualization tool than a source collection; useful but category should be clarified.     |

## Section C: Story Examples

### Map and Place-Based Examples

| Entry                                | Status           | Evaluation                                                                                        |
| ------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| Out of Eden Walk                     | Keep             | Excellent spatial/slow journalism example.                                                        |
| Slave Voyages                        | Keep             | Essential for ethical historical data storytelling and representation.                            |
| ORBIS                                | Keep             | Excellent example of spatial modeling as argument.                                                |
| Mapping the Republic of Letters      | Keep             | Strong network/spatial historical visualization example.                                          |
| Locating London's Past               | Keep with caveat | Strong urban history example, but link checker returned 403.                                      |
| Native Land Digital                  | Keep             | Essential for discussing contested geographies, ethics, and sovereignty.                          |
| Pelagios Peripleo                    | Move             | Useful discovery interface, but not really a story example; better as infrastructure/source/tool. |
| Monument Lab National Monument Audit | Keep             | Strong civic spatial storytelling and public scholarship example.                                 |

### Timelines and Historical Sequence

| Entry                      | Status           | Evaluation                                                                                 |
| -------------------------- | ---------------- | ------------------------------------------------------------------------------------------ |
| Histography                | Keep with caveat | Useful interface example, but Wikipedia-driven and less curatorially rigorous.             |
| TimelineJS Examples        | Keep with caveat | Useful gallery, but link checker returned 403 and it is a gallery rather than one example. |
| Chronas                    | Keep with caveat | Useful temporal-spatial exploration, but more exploratory atlas than authored narrative.   |
| The Evolution of the Web   | Verify           | Good design-history timeline if available, but link checker returned 503.                  |
| BBC World War One Timeline | Replace          | Link returned 404; find a current BBC timeline or another institutional timeline example.  |

### Audio and Podcast Documentary

| Entry                        | Status           | Evaluation                                                                                           |
| ---------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| Serial                       | Keep with caveat | Canonical audio narrative, but link checker returned 403 and ethical debates should be acknowledged. |
| S-Town                       | Verify           | Strong audio example, but link checker returned status 0; also ethically complex.                    |
| This American Life           | Keep             | Strong model for act-based radio storytelling.                                                       |
| Notes on Blindness           | Keep             | Excellent cross-media project grounded in audio diaries.                                             |
| The Kitchen Sisters          | Keep             | Strong oral-history/radio archive example.                                                           |
| Museum of London Audio Walks | Keep             | Strong locative public-history audio example.                                                        |

### Video, Scrollytelling, and Visual Essays

| Entry                      | Status           | Evaluation                                                                                   |
| -------------------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| Snow Fall                  | Keep with caveat | Canonical and historically important, but dated as current practice.                         |
| The Displaced              | Keep with caveat | Strong example, but NYT access and link checker 403 may limit workshop use.                  |
| Bear 71                    | Keep with caveat | Excellent interactive documentary, but verify current browser compatibility.                 |
| Hollow                     | Keep             | Strong community-centered multimedia documentary.                                            |
| The Fallen of World War II | Keep             | Excellent data animation and argument example.                                               |
| 18 Days in Egypt           | Replace          | Link returned 404; find archive/current URL or replace with another interactive documentary. |
| The Rhythm of Food         | Keep             | Good data-driven visual storytelling example.                                                |

### Collection and Image Tours

| Entry                              | Status  | Evaluation                                                        |
| ---------------------------------- | ------- | ----------------------------------------------------------------- |
| Storiiies Examples                 | Keep    | Strong IIIF-guided image narrative examples.                      |
| Exhibit Examples                   | Keep    | Strong IIIF exhibition example page.                              |
| British Library Online Exhibitions | Replace | Link returned 404; use a current British Library exhibition page. |
| Europeana Exhibitions              | Keep    | Strong cross-institutional collection storytelling examples.      |
| Wellcome Collection Stories        | Keep    | Strong interpretive collection writing.                           |
| Public Domain Review Essays        | Keep    | Excellent source-led cultural storytelling examples.              |

### 3D, Virtual Exhibition, and Immersive Examples

| Entry                                 | Status           | Evaluation                                                                                                            |
| ------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| Sketchfab Cultural Heritage & History | Keep             | Strong accessible 3D object example space.                                                                            |
| Smithsonian 3D Program                | Keep with caveat | Strong institutional 3D source/example; link checker returned 403.                                                    |
| CyArk                                 | Keep             | Strong cultural heritage preservation and 3D storytelling example.                                                    |
| Virtual Angkor                        | Keep with caveat | Excellent reconstruction example, but technical requirements and interpretive assumptions should be discussed.        |
| Anne Frank House VR                   | Replace          | Link returned 404 and VR hardware access is a barrier; use current accessible page or move to VR-only caveat section. |
| Notes on Blindness VR                 | Replace          | Link returned 404 and VR hardware access is a barrier; use main project page or move to VR-only caveat section.       |

### Interactive Fiction and Game-Based Examples

| Entry                       | Status           | Evaluation                                                                             |
| --------------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| Depression Quest            | Keep             | Strong free web example of constrained choice and affective design.                    |
| 80 Days                     | Keep with caveat | Excellent branching narrative, but commercial access should be noted.                  |
| What Remains of Edith Finch | Keep with caveat | Excellent environmental storytelling, but commercial and link redirects.               |
| Kentucky Route Zero         | Keep with caveat | Excellent literary game, but commercial access should be noted.                        |
| The Uber Game               | Keep with caveat | Strong systems storytelling, but FT link returned 403 and may have access constraints. |
| Spent                       | Keep             | Strong free persuasive simulation.                                                     |
| The Republia Times          | Keep             | Strong short mechanics-as-argument example.                                            |

### Mixed and Multimodal DH Examples

| Entry                                                  | Status | Evaluation                                                                                     |
| ------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------- |
| Journal of Digital History                             | Keep   | Excellent scholarly multimodal publication model.                                              |
| Tapestries: Films from the Chinese Cultural Revolution | Keep   | Strong patchwork media curation example.                                                       |
| Tapestries: A Digital Bookshelf                        | Keep   | Useful corpus-level narrative arrangement example.                                             |
| The Colored Conventions Project                        | Keep   | Excellent archive, pedagogy, and public-history example.                                       |
| Visualizing Emancipation                               | Keep   | Strong map/data/historical argument example.                                                   |
| Digital Harlem                                         | Verify | Excellent DH example, but link checker returned status 0; find current/archived URL if needed. |
| Six Degrees of Francis Bacon                           | Keep   | Strong network exploration example.                                                            |
| The Roaring Twenties                                   | Verify | Excellent sound-map example, but link checker returned status 0; verify current availability.  |

## Immediate Editorial Recommendations

1. Add consistent labels to Section A entries: `no-code`, `low-code`, `developer`, `advanced`, `commercial`, `open-source`, `hosted`, `self-hosted`, `planning`, `publishing`, and `source-prep`.
2. Split planning/prototyping tools from storytelling-output tools: Miro, Figma, Mural, Zotero, and possibly Aeon Timeline belong in a `Planning, Prototyping, and Source Management` subsection.
3. Consolidate duplicate RAWGraphs entries.
4. Add caveats for commercial and advanced tools so participants do not interpret them as beginner workshop tools.
5. Replace or update likely broken story/example links: BBC WWI timeline, 18 Days in Egypt, British Library Online Exhibitions, Anne Frank House VR, Notes on Blindness VR, and possibly Evolution of the Web.
6. Treat VR examples as a separate access category; do not imply they are equally available to all workshop participants.
7. Keep Section B mostly intact; its rights notes are cautious and useful, but sharpen David Rumsey, BBC Sound Effects, and Google Arts & Culture.
8. Replace generic business/platform entries if space or attention becomes a concern: Microsoft Power BI is the clearest candidate for replacement.
9. Add a small note that Section C contains critique examples, not necessarily models to imitate uncritically.
10. Consider adding more Benelux and multilingual examples over time, especially Dutch, Flemish, French, and German cultural heritage projects.

## Completeness Gaps to Address Later

The list is strong across maps, timelines, audio, collection tours, games, and multimodal DH. Future additions should improve coverage in these areas:

- participatory/community storytelling platforms and examples;
- oral-history specific tools and archives;
- accessibility-first storytelling practices and examples;
- multilingual and Benelux cultural heritage examples;
- web archiving and sustainability tools;
- ethical AI-assisted storytelling tools, only if carefully framed;
- classroom-ready examples that participants can evaluate within 10 to 15 minutes;
- examples from literature, art history, archaeology, memory studies, media studies, and contemporary urban culture, not only history and journalism.
