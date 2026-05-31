# Storytellers by Design: Digital Storytelling Resources

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of platforms, open collections, and example projects for research-driven digital storytelling in the humanities. The list focuses on tools and sources that are open, accessible, education-friendly, low-code, or no-code, but it also includes selected commercial or non-DH examples when their storytelling affordances are useful for critical discussion.

## Contents

- [A. Tools](#a-tools)
- [B. Sources](#b-sources)
- [C. Examples](#c-examples)
- [Contributing](#contributing)
- [License](#license)

## A. Tools

Labels are deliberately pragmatic rather than strict technical categories. A tool can be useful for storytelling even when its main role is preparing sources, designing interactions, publishing a prototype, or supporting critique.

Where the distinction matters, clusters are split into **Platforms** (where the story is authored, hosted, or consumed) and **Production tools** (which shape what stories are possible in a medium, but where the story itself lives elsewhere). Smaller clusters without a real production tail are not subdivided.

Free tiers and hosting limits change often, so treat pricing notes as a starting point and verify before teaching or publishing.

### Maps

**Platforms**

- [StoryMapJS](https://storymap.knightlab.com/): Free Knight Lab tool for slide-based spatial narratives; good for simple place-by-place stories with maps, images, captions, and a clear sequence
- [ArcGIS StoryMaps](https://storymaps.arcgis.com/): Polished Esri platform for combining maps, media, and scrolling narrative; good for public-facing institutional projects when a hosted commercial ecosystem is acceptable
- [Google My Maps](https://www.google.com/maps/d/): Simple custom Google Maps editor with layers, markers, and media; good for quick teaching maps, route sketches, and collaborative place lists
- [uMap](https://umap.openstreetmap.fr/): OpenStreetMap-based tool for publishing custom maps with markers and layers; good for free, lightweight maps that do not need Google infrastructure
- [Mapbox](https://www.mapbox.com/): Hosted map design and publishing platform for custom basemaps, tiles, and location-aware interfaces; good for polished web maps with strong visual styling
- [CARTO](https://carto.com/): Cloud geospatial platform for interactive maps, spatial analysis, and dashboards; good for larger spatial datasets and map-based analytical interfaces
- [Palladio](https://hdlab.stanford.edu/palladio/): Stanford Humanities + Design tool for mapping and filtering networked historical data; good for classroom exploration of people, places, objects, and relationships
- [Recogito](https://recogito.pelagios.org/): Annotation platform for connecting texts, images, and maps through places; good for place-based markup and historical-geography teaching projects

**Production tools**

- [Leaflet](https://leafletjs.com/): Open-source JavaScript library for custom interactive web maps; good when you need control over data, interface, styling, and hosting
- [QGIS](https://qgis.org/): Open-source desktop GIS for preparing, analyzing, and styling spatial data; good for source preparation before publishing maps elsewhere
- [Kepler.gl](https://kepler.gl/): Browser tool for exploring large geospatial datasets; good for dense point data, movement data, and quick spatial pattern discovery

### Timelines

- [TimelineJS](https://timeline.knightlab.com/): Free Knight Lab timeline builder powered by a Google Sheet; good for quick classroom chronologies, public-history timelines, and embeddable event sequences
- [Sutori](https://www.sutori.com/): Hosted timeline and lesson builder with media, questions, and collaboration; good for teaching sequences, workshop materials, and student projects that should feel like guided presentations
- [Tiki-Toki](https://www.tiki-toki.com/): Visual timeline maker with multimedia entries, categories, and 3D views. The free account allows one timeline, no own-site embeds, no Group Edit, no hosted image uploads, and 200 events
- [Preceden](https://www.preceden.com/): Timeline maker for planning, layered chronologies, project histories, and research timelines. The free version is limited to 10 events per timeline, so it fits compact tests and small presentation sequences
- [TimeMapper](https://timemapper.okfnlabs.org/): Free spreadsheet-driven tool that combines a timeline with a map; good for journeys, campaigns, fieldwork, and place-based events where the story needs both when and where
- [ChronoFlo Timeline Maker](https://www.chronoflotimeline.com/): Browser timeline editor with templates, media, categories, graphs, and shareable public timelines. The free account allows one timeline with up to 50 events but no own-site embedding

### Scrollytelling

Scrollytelling here means long-form web stories where text, images, audio, video, data, or documents are arranged as a guided reading path.

- [Scalar](https://scalar.me/): Scholarly publishing platform for media-rich books and essays with nonlinear paths; good for digital monographs, source-led essays, and projects with multiple reading routes
- [Pageflow](https://pageflow.io/): Web documentary platform for full-screen scenes built from video, audio, images, and text; good for documentary chapters, oral-history features, and paced media narratives
- [Shorthand](https://shorthand.com/): Commercial visual storytelling platform used by newsrooms, universities, and cultural institutions; good for polished public-facing stories, reports, and institutional features
- [Readymag](https://readymag.com/): Design-forward web publishing tool for editorial, typographic, and magazine-style pages; good for visual essays, portfolios, and single-topic stories where layout matters
- [Tapestries](https://tapestries.media/): Experimental platform for arranging media and text into spatial, patchwork-style narratives; good for collections, film corpora, and fragment-based research materials. Still in active development, so treat as exploratory
- [PubPub](https://www.pubpub.org/): Community publishing platform for collaborative, media-rich scholarly projects; good for edited collections, open peer review, lab publications, and teaching publications
- [Manifold](https://manifoldapp.org/): Open-source platform for annotated, media-enhanced digital books; good for course editions, public scholarship, and long-form projects with reader annotation
- [Quarto](https://quarto.org/): Open-source scientific and technical publishing system for books, articles, websites, and dashboards; good for reproducible multimodal writing that combines prose, code, and data

> Historical reference points: [Atavist](https://atavist.com/) and [Exposure](https://exposure.co/) shaped early multimedia long-form publishing on the web. Both should be verified for current platform status before recommending or teaching with them.

### Data Stories

**Platforms**

- [Flourish](https://flourish.studio/): Hosted data storytelling platform for animated charts, maps, quizzes, and scroll-based stories; good for polished classroom demos, public explainers, and fast chart prototypes
- [Datawrapper](https://www.datawrapper.de/): Accessible chart, table, and map builder widely used in data journalism; good for clean explanatory graphics that need to be readable and easy to embed
- [Observable](https://observablehq.com/): Notebook platform for interactive data essays, visualizations, and explanations; good for reproducible analysis, teaching code, and exploratory visual arguments
- [Tableau Public](https://public.tableau.com/): Free public publishing platform for dashboards and exploratory visual stories; good for multi-view datasets, filters, and public-facing dashboards when public hosting is acceptable
- [Evidence](https://evidence.dev/): Open-source Markdown-and-SQL framework for reproducible data reports; good for lightweight analytical sites where the narrative and queries should live together
- [Plotly Chart Studio](https://chart-studio.plotly.com/): Online tool for creating and sharing interactive scientific charts; good for quick exploratory plots and shareable chart prototypes
- [Voyant Tools](https://voyant-tools.org/): Web environment for visualizing patterns in text corpora; good for first-pass literary, historical, or classroom text analysis without coding

**Production tools**

- [RAWGraphs](https://www.rawgraphs.io/): Open-source web tool for turning tabular data into editable visualizations; good for trying unusual chart types before refining them in design software
- [D3.js](https://d3js.org/): JavaScript library for bespoke data-driven visualizations; best when existing chart builders cannot express the interaction, layout, or visual argument you need

### Annotation & IIIF

- [Storiiies](https://storiiies.cogapp.com/): Hosted tool for turning deep-zoom images into guided narrative tours; good for close-looking at artworks, manuscripts, maps, and photographs
- [StoryMapJS Gigapixel](https://storymap.knightlab.com/gigapixel/): Free StoryMapJS mode for image stories across gigapixel images, artworks, manuscripts, and historical maps; good when the object is the landscape of the story
- [Exhibit](https://www.exhibit.so/): British Library Labs tool for making IIIF-driven image exhibitions and tours; good for lightweight object displays and guided image interpretation
- [Mirador](https://projectmirador.org/): Open-source IIIF viewer for comparing, annotating, and presenting digitized cultural objects; good for scholarly image comparison and manuscript work
- [Omeka S](https://omeka.org/s/): Open-source web publishing platform for digital collections, exhibits, and linked data; good for multi-collection projects and structured metadata
- [Omeka Classic](https://omeka.org/classic/): Older, simpler Omeka platform for collection-driven digital exhibitions; good for small teaching exhibits and legacy projects
- [CollectionBuilder](https://collectionbuilder.github.io/): Static-site toolkit for building digital collection exhibits from metadata and media files; good for lightweight, GitHub-friendly collections
- [Wax](https://minicomp.github.io/wax/): Minimal-computing Jekyll toolkit for IIIF-friendly digital exhibitions; good for sustainable, low-dependency collection sites that can be archived as static files
- [Mukurtu](https://mukurtu.org/): Community archive platform designed for culturally sensitive access, protocols, and knowledge sharing; good for projects where permissions and community governance are central
- [FromThePage](https://fromthepage.com/): Hosted platform for transcription, indexing, and annotation of archival materials; good for manuscript transcription and collaborative source work
- [Zooniverse Project Builder](https://www.zooniverse.org/lab): Hosted platform for public classification and transcription projects; good when a collection needs many contributors for structured tasks
- [Hypothesis](https://web.hypothes.is/): Open-source web annotation layer for collaborative reading, marginalia, and class discussion; good for source-led seminars and public annotation projects
- [Annotorious](https://annotorious.dev/): Open-source JavaScript image annotation library; good for custom scholarly interfaces where annotations need to live inside your own site

### Audio

**Platforms**

- [SoundCite](https://soundcite.knightlab.com/): Free Knight Lab tool for embedding short inline audio clips directly into prose; good for close listening, oral-history excerpts, and sound examples inside essays
- [Echoes](https://echoes.xyz/): Platform for GPS-triggered audio walks and location-aware soundscapes; verify current access and pricing before teaching with it
- [VoiceMap](https://voicemap.me/): App and publishing platform for GPS-triggered walking tours; good for place-based audio guides with a public mobile audience
- [izi.TRAVEL](https://izi.travel/): Platform for publishing mobile audio guides, museum tours, and heritage walks; good for institutional or tourism-oriented audio interpretation

**Production tools**

- [Audacity](https://www.audacityteam.org/): Open-source audio editor for recording, cleaning, and mixing spoken stories; good for preparing interviews, narration, and simple podcast material
- [Descript](https://www.descript.com/): Transcript-based audio and video editor; good for interview editing, captions, rough cuts, and workflows where text editing drives media editing
- [Hindenburg](https://hindenburg.com/): Audio production software built for radio features, podcasts, and spoken-word storytelling; good for polished narrative audio work
- [Zencastr](https://zencastr.com/): Browser-based platform for recording remote interviews and podcasts; good when contributors cannot be in the same room
- [Reaper](https://www.reaper.fm/): Flexible digital audio workstation for editing and sound design; good for advanced audio production on a modest budget
- [GarageBand](https://www.apple.com/mac/garageband/): Beginner-friendly Apple audio production app; good for classroom audio projects, narration, music beds, and simple mixes

### Hotspots & Learning

- [H5P](https://h5p.org/): Framework for reusable interactive HTML5 learning content; good for hotspots, branching scenarios, quizzes, and activities inside learning platforms
- [Genially](https://genially.com/): Hosted platform for interactive presentations, infographics, games, and clickable images; good for quick visual explainers and classroom interactives
- [ThingLink](https://www.thinglink.com/): Tool for adding multimedia hotspots to images, videos, 360-degree scenes, and 3D models; good for annotated objects, spaces, and virtual tours
- [JuxtaposeJS](https://juxtapose.knightlab.com/): Free Knight Lab tool for before-and-after image comparisons with a draggable slider; good for visual change over time, restoration, maps, and site comparison

### Branching Narratives

- [Twine](https://twinery.org/): Open-source tool for nonlinear hypertext stories that publish directly to HTML; good for choice-based essays, branching fiction, and beginner-friendly narrative prototypes
- [Ink / Inky](https://www.inklestudios.com/ink/): Narrative scripting language and editor for branching interactive stories; good for dialogue-heavy projects, game writing, and stories with variables or state
- [Inklewriter](https://www.inklewriter.com/): Browser tool for writing simple choice-based stories without coding; good for quick prototypes and introductory branching narrative exercises
- [Inform 7](https://ganelson.github.io/inform-website/): Parser-based interactive fiction system authored in prose-like language; good for room-based worlds, object puzzles, and text adventures
- [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/): Scripting language for choice-driven text games with stats, variables, and branching; good for gamebook structures and character-choice systems
- [Yarn Spinner](https://www.yarnspinner.dev/): Narrative scripting language and tooling for game dialogue; good for conversations, branching dialogue trees, and Unity or Godot prototypes
- [Undum](https://idmillington.github.io/undum/): JavaScript framework for browser-based interactive fiction with stateful prose; good for custom web fiction when Twine feels too constrained
- [Quest](https://textadventures.co.uk/quest/): Tool for creating text adventures and gamebooks through a visual editor or script; verify current maintenance before teaching with it

### Games & Small Worlds

- [Ren'Py](https://www.renpy.org/): Open-source engine for visual novels with dialogue, sprites, backgrounds, and branching stories; good for character-led narrative games
- [Bitsy](https://make.bitsy.org/): Browser editor for tiny pixel-art narrative worlds; good for first games, poetic spaces, short museum prompts, and constrained storytelling
- [Decker](https://internet-janitor.itch.io/decker): HyperCard-inspired tool for interactive card stacks, scripts, and zine-like projects; good for playful prototypes and handmade-feeling digital publications
- [Godot Engine](https://godotengine.org/): Open-source engine for 2D, 3D, and narrative game prototypes; good when interaction, movement, or systems matter more than a linear page
- [PICO-8](https://www.lexaloffle.com/pico-8.php): Fantasy console with strict constraints for small games; good for playful sketches, retro aesthetics, and teaching through limits
- [RPG Maker](https://www.rpgmakerweb.com/): Visual software for tile-based role-playing games; good for exploration narratives, quests, towns, and character dialogue
- [Construct](https://www.construct.net/): No-code and low-code engine for browser-based interactive projects; good for 2D prototypes, educational games, and simple systems storytelling
- [GDevelop](https://gdevelop.io/): Open-source engine for 2D interactive experiences; good for no-code game prototypes and classroom-friendly browser exports
- [itch.io](https://itch.io/): Indie distribution platform for games, zines, interactive books, and experimental HTML works; good for publishing prototypes and finding models of small-form storytelling

### 3D & Immersive

**Platforms**

- [Sketchfab](https://sketchfab.com/): Hosted platform for publishing, annotating, embedding, and viewing 3D models; good for object-based interpretation and quick 3D collection sharing
- [Frame](https://framevr.io/): Browser-based 3D and VR rooms for virtual exhibits, talks, and walkable scenes; good for lightweight shared spaces without building a custom engine
- [Artsteps](https://www.artsteps.com/): Tool for creating 3D gallery spaces and curated walkable exhibitions; good for virtual exhibitions with a familiar gallery metaphor

**Production tools**

- [Blender](https://www.blender.org/): Open-source 3D creation suite for modeling, animation, rendering, and video editing; good for preparing assets before publication
- [A-Frame](https://aframe.io/): Web framework for browser-based VR and 3D scenes with HTML-like markup; good for custom web 3D projects and teaching basic immersive interaction
- [Unity](https://unity.com/): Engine for complex 2D, 3D, AR, and VR projects; good when a project needs interaction, physics, app deployment, or game-like structure
- [Unreal Engine](https://www.unrealengine.com/): High-end real-time 3D engine for cinematic, game, and virtual production work; good for visually ambitious immersive reconstructions
- [Polycam](https://poly.cam/): Mobile photogrammetry and 3D scanning app for turning objects and places into models; good for quick field capture and prototype assets
- [RealityCapture](https://www.capturingreality.com/): Photogrammetry software for generating detailed 3D models from images; good for higher-end object, site, and landscape reconstruction workflows

### Curation & Zines

- [Are.na](https://www.are.na/): Slow, ad-free visual research platform for thematic collections of images, texts, and links; good for gathering references and making public research boards
- [Electric Zine Maker](https://alienmelon.itch.io/electric-zine-maker): Playful printshop-style tool for making foldable eight-page zines; good for low-stakes publication, workshops, and experimental handout formats
- [Notion](https://www.notion.so/): Flexible workspace for collecting sources, drafting narratives, and publishing lightweight pages; good for planning, small public guides, and collaborative project hubs
- [WriteFreely](https://writefreely.org/): Simple, federated, text-first writing platform; good for quiet essays, logs, and minimal publication without heavy design overhead
- [Ghost](https://ghost.org/): Publishing platform for newsletters, memberships, and long-form digital writing; good for sustained public writing projects and audience building

### Planning & Prototyping

- [Miro](https://miro.com/): Collaborative whiteboard for storyboarding, audience mapping, and planning narrative flows; good for workshops and early project design
- [Figma](https://www.figma.com/): Collaborative interface design tool for sketching interaction patterns and testing story structures; good for wireframes, clickable prototypes, and visual systems
- [Mural](https://www.mural.co/): Online whiteboard for facilitation, design-thinking activities, and group critique; good for structured collaborative planning sessions
- [Canva](https://www.canva.com/): Template-based design platform for presentations, explainers, and simple interactive assets; good for fast classroom prototypes and lightweight visual storytelling
- [Aeon Timeline](https://timeline.app/): Planning tool for complex chronologies, character arcs, and narrative structures before publication; good for long projects with many dependencies
- [Zotero](https://www.zotero.org/): Open-source research manager for collecting, annotating, and citing sources behind a story; good for keeping evidence organized before it becomes narrative

## B. Sources

### License Key

- Public Domain / PD means the item is generally free of known copyright restrictions, but local rules can still vary
- CC0 means the creator has waived copyright and related rights as far as legally possible
- CC BY means reuse is allowed with attribution
- CC BY-SA means reuse is allowed with attribution and share-alike terms
- Mixed / item-level rights means the platform contains many licenses, so verify each item before reuse
- Custom terms means the platform has its own license or terms of use, so read them before publishing

### Aggregators

- [Europeana](https://www.europeana.eu/): European cultural heritage portal with millions of images, texts, sounds, and objects; rights: mixed / item-level rights
- [Digital Public Library of America](https://dp.la/): Search portal for US cultural heritage collections from libraries, archives, and museums; rights: mixed / item-level rights
- [Wikimedia Commons](https://commons.wikimedia.org/): Large repository of freely reusable images, audio, video, and media files; rights: mixed CC, CC0, and public domain
- [Internet Archive](https://archive.org/): Massive archive of books, audio, video, software, and web captures; rights: mixed / item-level rights
- [Openverse](https://openverse.org/): Search engine for open images and audio across public repositories; rights: mixed CC and public domain
- [Google Arts & Culture](https://artsandculture.google.com/): Curated cultural heritage stories and high-resolution object views; rights: custom terms, institution-specific reuse, and often limited download/reuse options

### Libraries & Museums

- [Library of Congress Digital Collections](https://www.loc.gov/collections/): Digitized US cultural, historical, audio, map, and photograph collections; rights: mixed, many public domain or no known restrictions
- [British Library Flickr Commons](https://www.flickr.com/photos/britishlibrary/): Public-domain image sets from digitized books and archival materials; rights: public domain / no known copyright restrictions
- [Gallica](https://gallica.bnf.fr/): Digital library of the Bibliotheque nationale de France with books, images, maps, and periodicals; rights: mixed / item-level rights
- [KB Digital Collections](https://www.kb.nl/en/digital-resources): Digital collections from the National Library of the Netherlands; rights: mixed / item-level rights
- [Rijksmuseum Collection](https://www.rijksmuseum.nl/en/rijksstudio): High-resolution images and metadata from the Rijksmuseum collection; rights: many public domain images, verify item records
- [Wellcome Collection](https://wellcomecollection.org/works): Health, medicine, science, and culture collections with strong open-access policies; rights: mixed, many CC BY and public domain items
- [Smithsonian Open Access](https://www.si.edu/openaccess): Millions of Smithsonian images and datasets released for broad reuse; rights: many CC0 items
- [The Met Open Access](https://www.metmuseum.org/art/collection): Metropolitan Museum of Art collection records and public-domain images; rights: public domain for open access images
- [Cleveland Museum of Art Open Access](https://www.clevelandart.org/open-access): Open collection data and high-resolution images for public-domain artworks; rights: CC0 for open access assets
- [Amsterdam City Archives](https://archief.amsterdam/): Archival materials, maps, images, and records related to Amsterdam; rights: mixed / item-level rights

### Geodata

- [David Rumsey Map Collection](https://www.davidrumsey.com/): Historic map collection with high-resolution scans and georeferenced materials; rights: custom terms, with many items available for noncommercial educational use but not all publication contexts
- [OldMapsOnline](https://www.oldmapsonline.org/): Search portal for historical maps across multiple institutions; rights: mixed / item-level rights
- [OpenStreetMap](https://www.openstreetmap.org/): Collaborative global geodata useful for basemaps and spatial context; rights: Open Database License
- [Natural Earth](https://www.naturalearthdata.com/): Public-domain vector and raster map data for cartography; rights: public domain
- [Pelagios Peripleo](https://peripleo.pelagios.org/): Search interface for linked open geodata about historical places; rights: mixed linked open data
- [GeoNames](https://www.geonames.org/): Global geographical database with names, coordinates, and place metadata; rights: Creative Commons Attribution

### Texts

- [Project Gutenberg](https://www.gutenberg.org/): Public-domain ebooks for literary, historical, and educational storytelling; rights: mostly public domain in the United States
- [Standard Ebooks](https://standardebooks.org/): Carefully edited public-domain ebooks with clean formatting and metadata; rights: CC0 for ebook editions where possible
- [Wikisource](https://wikisource.org/): Collaborative library of transcribed source texts; rights: mostly public domain and free licenses
- [Open Library](https://openlibrary.org/): Catalog and lending interface connected to Internet Archive digitized books; rights: mixed / item-level rights
- [HathiTrust Digital Library](https://www.hathitrust.org/): Large digitized research library collection with public-domain and restricted works; rights: mixed / item-level rights
- [Early English Books Online Text Creation Partnership](https://textcreationpartnership.org/tcp-texts/eebo-tcp-early-english-books-online/): Transcribed early printed texts from EEBO-TCP; rights: mixed, many texts available for academic reuse

### Sound Sources

- [Freesound](https://freesound.org/): Community database of sound effects and field recordings; rights: mixed CC0, CC BY, and CC BY-NC
- [Free Music Archive](https://freemusicarchive.org/): Curated music archive for creators and educators; rights: mixed Creative Commons licenses
- [Internet Archive Netlabels](https://archive.org/details/netlabels): Collection of freely downloadable music released by netlabels; rights: mixed / item-level rights
- [Europeana Sounds](https://www.europeana.eu/en/collections/topic/62-sound): Sound recordings and audio heritage surfaced through Europeana; rights: mixed / item-level rights
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/): Archive of BBC sound effects for personal, educational, and research use; rights: custom terms with commercial restrictions
- [Library of Congress Audio Collections](https://www.loc.gov/audio/): Historic recordings, oral histories, music, and spoken-word collections; rights: mixed / item-level rights

### Image & Video

- [Public Domain Review](https://publicdomainreview.org/): Curated essays and collections highlighting public-domain cultural materials; rights: public domain focus, verify source links
- [NASA Image and Video Library](https://images.nasa.gov/): Space, science, mission, and astronomy media from NASA; rights: generally public domain with trademark and endorsement caveats
- [Pexels](https://www.pexels.com/): Free stock photos and videos useful for rapid prototyping rather than source-led scholarship; rights: custom Pexels license
- [Pixabay](https://pixabay.com/): Free stock images, illustrations, video, music, and sound effects useful for mockups and prototypes; rights: custom Pixabay license
- [Unsplash](https://unsplash.com/): Large collection of contemporary photography useful for prototypes but sometimes stock-like in tone; rights: custom Unsplash license
- [The Noun Project](https://thenounproject.com/): Icon library useful for diagrams and explainers; rights: mixed free attribution and paid license options

### Research Data

- [Zenodo](https://zenodo.org/): Research repository for datasets, software, posters, and publications; rights: mixed, item-level licenses
- [OpenAIRE Explore](https://explore.openaire.eu/): Search portal for European open research outputs and datasets; rights: mixed / item-level rights
- [CLARIN Resource Families](https://www.clarin.eu/resource-families): Curated language resources for humanities and social-science research; rights: mixed / item-level rights
- [DARIAH Tools and Services](https://www.dariah.eu/tools-services/): Registry for finding digital research tools, services, and resources in arts and humanities; rights: mixed / item-level rights
- [Wikidata](https://www.wikidata.org/): Collaborative linked open data knowledge base for entities, relationships, and metadata; rights: CC0
- [Open Knowledge Maps](https://openknowledgemaps.org/): Visual discovery tool for exploring open scholarly literature and research fields; rights: mixed source records, platform outputs under open terms

## C. Examples

These examples are included for critique and comparison, not as models to imitate uncritically. Some are canonical, some are experimental, and some are deliberately useful for discussing ethical limits, access barriers, platform constraints, or dated design conventions.

For teaching and project design, it helps to separate **guided narratives** from **exploratory or reference interfaces**.

- **Guided narratives** give the audience an authored path to follow, even if there is some interaction or branching
- **Exploratory / reference interfaces** are still valuable for storytelling research and interpretation, but the user mainly browses, queries, compares, or assembles meaning for themselves

Some projects are hybrids. When in doubt, the question is simple: is the main experience following a story, or exploring a resource?

### Maps & Places

**Guided narratives**

- [Out of Eden Walk](https://www.outofedenwalk.com/): Slow journalism project tracing human migration through maps, photographs, essays, and field encounters; demonstrates place-based narrative with a clear authored route
- [Histories of the National Mall](https://mallhistory.org/): Public history project connecting place, mobile interpretation, archival materials, and thematic tours; demonstrates situated urban storytelling through guided thematic paths
- [Necessary Reunions](https://necessaryreunions.org/): Project reconnecting VOC archives and historical maps of early modern Kerala; demonstrates map-text storytelling, georeferencing, IIIF, and gazetteer work

**Exploratory / reference interfaces**

- [Slave Voyages](https://www.slavevoyages.org/): Research database and interpretive site on the transatlantic and intra-American slave trades; useful as an ethical historical data interface, but primarily exploratory rather than story-led
- [ORBIS: The Stanford Geospatial Network Model of the Roman World](https://orbis.stanford.edu/): Interactive model of travel routes, costs, and time in the Roman world; demonstrates spatial modeling as argument more than a single authored narrative
- [Mapping the Republic of Letters](http://republicofletters.stanford.edu/): Stanford project visualizing correspondence networks among early modern intellectuals; demonstrates maps and networks as exploratory historical interpretation
- [Locating London's Past](https://www.locatinglondon.org/): Interface for exploring early modern and eighteenth-century London datasets on a map; demonstrates layered urban history through browseable evidence
- [Native Land Digital](https://native-land.ca/): Interactive map of Indigenous territories, languages, and treaties; demonstrates place-based knowledge with ethical framing caveats and should not be mistaken for a conventional authored story
- [Monument Lab National Monument Audit](https://monumentlab.com/audit): Research project analyzing US monuments through maps, data, and interpretive essays; a strong hybrid case, but the core experience is analytical exploration

### Historical Timelines

**Guided narratives**

- [A History of the World in 100 Objects](https://www.bbc.co.uk/programmes/b00nrtd2): BBC and British Museum radio series organized through objects across time; demonstrates chronological public humanities storytelling
- [Web Design History Timeline](https://www.webdesignmuseum.org/web-design-history): Visual timeline of web design eras, technologies, and interface conventions; more curated than analytical, and useful as chronology shaped into a readable sequence

**Exploratory / reference interfaces**

- [Histography](https://histography.io/): Interactive timeline of historical events linked to Wikipedia; demonstrates playful temporal navigation, but is less curatorially rigorous than authored timelines
- [TimelineJS Examples](https://timeline.knightlab.com/#examples): Gallery of published timelines from journalism, education, and public history; useful as a pattern library rather than a single narrative example
- [Chronas](https://chronas.org/): Interactive historical atlas organized by time and geography; demonstrates temporal-spatial exploration

### Audio Stories

- [In the Dark](https://features.apmreports.org/in-the-dark/): Investigative podcast with season-long reporting arcs and companion materials; demonstrates serialized narrative, evidentiary pacing, and deep reporting
- [The Memory Palace](https://thememorypalace.us/): Short-form historical audio essays built around memory, archival fragments, and voice; demonstrates compact humanities storytelling through sound
- [This American Life](https://www.thisamericanlife.org/): Weekly radio and podcast program built around themed narrative acts; demonstrates audio structure and pacing
- [99% Invisible](https://99percentinvisible.org/): Audio storytelling series about design, cities, objects, and the built environment; demonstrates compact narrative essays that turn material culture into story
- [Snap Judgment](https://snapjudgment.org/): Storytelling radio show and podcast built around voice-driven first-person narratives; demonstrates curation, performance, and episodic narrative framing
- [Notes on Blindness](https://www.notesonblindness.co.uk/): Project based on John Hull's audio diaries, expanded through film, VR, and archive; demonstrates audio as source and experience
- [The Kitchen Sisters](https://kitchensisters.org/): Archive of radio documentaries about hidden histories and everyday culture; demonstrates oral history and sound-rich storytelling
- [Museum of London Audio Walks](https://www.museumoflondon.org.uk/discover/audio-walks): Place-based audio walks through London history; demonstrates locative sound and public history

### Video & Scrollytelling

- [Snow Fall](https://www.nytimes.com/projects/2012/snow-fall/): Landmark 2012 New York Times multimedia feature; demonstrates early scrollytelling conventions and how web narrative design has evolved
- [The Boat](https://www.sbs.com.au/theboat/): Interactive adaptation of Nam Le's story using text, sound, illustration, and motion; demonstrates literary scrollytelling and sensory design
- [Welcome to Pine Point](https://pinepoint.nfb.ca/): Interactive documentary about a vanished Canadian town; demonstrates memoir, archive, pacing, and a strongly guided multimedia narrative
- [Bear 71](https://bear71.nfb.ca/): Interactive documentary about wildlife surveillance and human-nature boundaries; demonstrates database documentary and embodied navigation, though browser compatibility should be checked
- [Hollow](https://hollowdocumentary.com/): Interactive documentary about a West Virginia county told through local voices; demonstrates community-centered multimedia storytelling
- [Do Not Track](https://donottrack-doc.com/en/intro/): Personalized documentary series about privacy and the web economy; demonstrates episodic interactive storytelling with a clear narrative frame
- [The Fallen of World War II](https://www.fallen.io/ww2/): Animated data documentary on wartime deaths and memory; demonstrates data visualization as narrative argument
- [The Quipu Project](https://interactive.quipu-project.com/): Interactive documentary about forced sterilizations in Peru using testimony, audio, and participation; demonstrates ethical participatory storytelling
- [The Rhythm of Food](https://rhythm-of-food.net/): Google News Lab project visualizing search interest in foods over time; demonstrates data-driven visual storytelling

### Collection Tours

**Guided narratives**

- [Storiiies Examples](https://storiiies.cogapp.com/examples/): Gallery of IIIF-guided image narratives; demonstrates close-looking tours of artworks and manuscripts
- [Exhibit Examples](https://www.exhibit.so/): British Library project examples for IIIF exhibitions; demonstrates collection-led narrative design
- [British Library Discovering Literature](https://www.bl.uk/discovering-literature): Curated digital essays, collection items, and teaching resources; demonstrates institutional collection storytelling
- [Europeana Exhibitions](https://www.europeana.eu/en/exhibitions): Thematic exhibitions built from European cultural heritage collections; demonstrates cross-institutional object narratives
- [Wellcome Collection Stories](https://wellcomecollection.org/stories): Essays and features built around medical, cultural, and historical collections; demonstrates interpretive writing from collection objects
- [The Public Domain Review Essays](https://publicdomainreview.org/essays/): Essays that turn public-domain cultural materials into interpretive stories; demonstrates source-led cultural narration

**Exploratory / reference interfaces**

- [Digital Benin](https://digitalbenin.org/): Platform connecting Benin Kingdom objects, oral histories, provenance data, maps, archives, and Edo-language research; a rich reparative resource, but more browseable and research-led than strictly narrative
- [Nunalleq Digital Museum & Catalogue](https://www.nunalleq.org/): Community co-curated digital museum for a pre-contact Yup'ik archaeological site; demonstrates Indigenous heritage interpretation through objects, voices, reconstructions, and 3D scans
- [Below the Surface](https://belowthesurface.amsterdam/nl): Digital presentation of finds from Amsterdam's Noord/Zuidlijn excavations; demonstrates urban archaeology through browseable objects, vitrines, and collection-making

### 3D & Immersive Examples

**Guided narratives**

- [CyArk](https://www.cyark.org/): 3D documentation and storytelling platform for cultural heritage sites; demonstrates immersive preservation narratives with strong interpretive framing
- [Virtual Angkor](https://www.virtualangkor.com/): Digital reconstruction of Angkor for teaching and historical interpretation; demonstrates immersive historical environment design and the interpretive assumptions behind reconstruction
- [Anne Frank House: The Secret Annex Online](https://www.annefrank.org/en/anne-frank/secret-annex/): Web-accessible exploration of the Secret Annex; demonstrates spatial interpretation without requiring VR hardware
- [Notes on Blindness](https://www.notesonblindness.co.uk/): Cross-media project based on audio diaries about blindness; demonstrates audio, archive, film, and immersive adaptation while avoiding VR-only access

**Exploratory / reference interfaces**

- [Sketchfab Cultural Heritage & History](https://sketchfab.com/3d-models/popular?categories=cultural-heritage-history): Browseable 3D heritage models with annotations and embeds; demonstrates object-based 3D interpretation
- [The Smithsonian 3D Program](https://3d.si.edu/): Open 3D models and stories from Smithsonian collections; blends storytelling and access, but often functions as a browseable model repository
- [Limburg3D: The Maastricht Collection](https://www.limburg3d-umfasos.nl/): Student-built project presenting 22 digitized Maastricht and Limburg objects; demonstrates object-based regional history through themes, timelines, 3D views, and activities

### Interactive Fiction & Games

- [Depression Quest](http://www.depressionquest.com/): Interactive fiction about living with depression; demonstrates constrained choice and affective design
- [80 Days](https://www.inklestudios.com/80days/): Commercial branching narrative game inspired by Jules Verne; demonstrates route choice, worldbuilding, and replayability
- [What Remains of Edith Finch](https://annapurnainteractive.com/en/games/what-remains-of-edith-finch): Commercial narrative exploration game about family memory and storytelling; demonstrates environmental narrative
- [Kentucky Route Zero](https://kentuckyroutezero.com/): Commercial episodic magical realist adventure game; demonstrates atmosphere, dialogue, and literary game form
- [The Uber Game](https://ig.ft.com/uber-game/): Interactive game about gig-economy work and decision-making; demonstrates systems storytelling and constrained agency
- [Spent](https://playspent.org/): Interactive simulation about poverty and survival choices; demonstrates persuasive choice-based storytelling
- [The Republia Times](https://dukope.com/play.php?g=trt): Short browser game about censorship and editorial control; demonstrates mechanics as argument

### Mixed DH Examples

**Guided narratives and strong hybrids**

- [bITEM](https://bitem.at/): Object-biography platform for museum items and specimens; the [Dodo case study](https://bitem.at/entities/234465) shows how linked data can be shaped into an authored object story
- [Tapestries: Films from the Chinese Cultural Revolution](https://tapestries.media/u/futureofthebook/03f9e39a-d4e7-43a7-95c9-acba593fe1ec): Tapestry example arranging media and text around a film corpus; demonstrates patchwork multimodal curation
- [Tapestries: A Digital Bookshelf](https://tapestries.media/u/futureofthebook/A%20Digital%20Bookshelf): Tapestry example presenting publications as a browseable media field; closer to curated spatial narrative than to linear storytelling
- [The Colored Conventions Project](https://coloredconventions.org/): Digital archive and exhibits about nineteenth-century Black organizing; demonstrates archive, pedagogy, and public history through both essays and research access

**Exploratory / analytical interfaces**

- [Visualizing Emancipation](https://dsl.richmond.edu/emancipation/): Map-based project tracing emancipation events during the US Civil War; demonstrates data, geography, and historical argument through exploration
- [Mapping Prejudice](https://mappingprejudice.umn.edu/): Public history project mapping racial covenants and community research in Minnesota; demonstrates participatory spatial storytelling and data ethics, but primarily through evidence exploration
- [Six Degrees of Francis Bacon](http://sixdegreesoffrancisbacon.com/): Network reconstruction of early modern social relations; demonstrates exploratory network analysis rather than a guided story path
- [Radio Aporee Maps](https://aporee.org/maps/): Collaborative global sound map of field recordings and places; demonstrates archival sound, maps, and locative listening through open exploration

## Contributing

Contributions are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for the preferred item format and review criteria.

## License

This curated resource list is licensed under [Creative Commons Attribution 4.0 International](LICENSE). Individual linked resources keep their own licenses and terms of use.
