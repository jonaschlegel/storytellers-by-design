# Storytellers by Design: Digital Storytelling Resources

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of platforms, open collections, and example projects for research-driven digital storytelling in the humanities. The list focuses on tools and sources that are open, accessible, education-friendly, low-code, or no-code, but it also includes selected commercial or non-DH examples when their storytelling affordances are useful for critical discussion.

## Contents

- [A. Tools](#a-tools)
- [B. Sources](#b-sources)
- [C. Examples](#c-examples)
- [D. Design Methods & Workshop Inspiration](#d-design-methods--workshop-inspiration)
- [Contributing](#contributing)
- [License](#license)

## A. Tools

Labels are deliberately pragmatic rather than strict technical categories. Some entries are places to publish a finished story; others are workshop tools, source-preparation utilities, or examples worth arguing with.

Where the distinction matters, clusters are split into **Platforms** (where the story is authored, hosted, or consumed) and **Production tools** (which shape what stories are possible in a medium, but where the story itself lives elsewhere). Smaller clusters without a real production tail are not subdivided.

Free tiers and hosting limits change often. Treat any pricing or access note here as a prompt to check again before teaching with it.

### Maps

**Platforms**

- [StoryMapJS](https://storymap.knightlab.com/): No-code. A reliable first stop for place-by-place stories: map, image, caption, next slide.
- [ArcGIS StoryMaps](https://storymaps.arcgis.com/): Very polished, very institutional. Strong when the story needs to look finished quickly, less ideal when platform independence matters.
- [Google My Maps](https://www.google.com/maps/d/): Quick-and-dirty collaborative mapping. Useful for route sketches, field notes, and group lists of places.
- [uMap](https://umap.openstreetmap.fr/): Lightweight OpenStreetMap publishing without the Google ecosystem.
- [Mapbox](https://www.mapbox.com/): Beautiful maps, more design control, more technical decisions.
- [CARTO](https://carto.com/): Spatial analysis plus dashboards. Probably overkill for a tiny story, useful once the dataset starts to drive the argument.
- [Palladio](https://hdlab.stanford.edu/palladio/): A DH classroom classic for people, places, objects, and relationships. Exploratory rather than glossy.
- [Recogito](https://recogito.pelagios.org/): Place annotation for texts and images. Especially handy when the map grows out of close reading.

**Production tools**

- [Leaflet](https://leafletjs.com/): JavaScript map library. Use this when the story needs its own interface rather than another platform's template.
- [QGIS](https://qgis.org/): Desktop GIS; not a storytelling tool by itself, but often where the hard map work happens.
- [Kepler.gl](https://kepler.gl/): Dense points, flows, and movement data. More exploratory lab bench than finished essay.

### Timelines

- [TimelineJS](https://timeline.knightlab.com/): Google Sheet in, embeddable timeline out. Still one of the easiest ways to make chronology readable.
- [Sutori](https://www.sutori.com/): Timeline-ish lesson builder with questions and media. Feels more like a guided classroom sequence than a standalone DH publication.
- [Tiki-Toki](https://www.tiki-toki.com/): Visual timelines, categories, 3D view. Free tier: one timeline, 200 events, and some important embedding/upload limits.
- [Preceden](https://www.preceden.com/): Planning timelines and small layered chronologies. The 10-event free limit makes it a sketch tool, not a large project home.
- [TimeMapper](https://timemapper.okfnlabs.org/): Spreadsheet to map plus timeline. Nice for journeys, campaigns, fieldwork, and anything that needs when and where together.
- [ChronoFlo Timeline Maker](https://www.chronoflotimeline.com/): Browser timeline editor with public sharing. Free tier: one timeline, up to 50 events, no own-site embedding.

### Scrollytelling

Scrollytelling here means long-form web stories where text, images, audio, video, data, or documents are arranged as a guided reading path.

- [Scalar](https://scalar.me/): Scholarly, media-rich, nonlinear. A serious option for digital monographs and source-led essays with multiple routes through the material.
- [Pageflow](https://pageflow.io/): Web documentary chapters: full-screen image, video, audio, text. Pacing matters here.
- [Shorthand](https://shorthand.com/): Commercial, polished, familiar from institutional reports and newsroom features.
- [Readymag](https://readymag.com/): Layout-first web publishing. Useful when typography and visual rhythm are part of the argument.
- [Tapestries](https://tapestries.media/): Patchwork/spatial narratives for media collections. Interesting and still exploratory; check current status before depending on it.
- [PubPub](https://www.pubpub.org/): Collaborative scholarly publishing, especially for communities, edited projects, and open-review experiments.
- [Manifold](https://manifoldapp.org/): Annotated digital books and course editions. More bookish than flashy.
- [Quarto](https://quarto.org/): Reproducible writing with code, data, books, websites, and dashboards in the same ecosystem.

> Historical reference points: [Atavist](https://atavist.com/) and [Exposure](https://exposure.co/) shaped early multimedia long-form publishing on the web. Both should be verified for current platform status before recommending or teaching with them.

### Data Stories

**Platforms**

- [Flourish](https://flourish.studio/): Animated charts, maps, quizzes, scroll stories. Fast, impressive, and worth discussing critically because the templates do a lot of rhetorical work.
- [Datawrapper](https://www.datawrapper.de/): Clean charts, maps, and tables. Data-journalism style; readable before it is spectacular.
- [Observable](https://observablehq.com/): Interactive notebooks and data essays. Powerful, but assumes some comfort with JavaScript.
- [Tableau Public](https://public.tableau.com/): Public dashboards and multi-view datasets. Good when filtering/exploration is the point and public hosting is acceptable.
- [Evidence](https://evidence.dev/): Markdown plus SQL for analytical sites. Narrative and query live close together.
- [Plotly Chart Studio](https://chart-studio.plotly.com/): Shareable scientific charts without building the whole interface yourself.
- [Voyant Tools](https://voyant-tools.org/): Text analysis without coding. Often a first pass, sometimes enough.

**Production tools**

- [RAWGraphs](https://www.rawgraphs.io/): Tabular data to editable visual forms. Especially useful for trying less standard chart types.
- [D3.js](https://d3js.org/): Bespoke data visualization in JavaScript. Reach for it when templates flatten the argument.

### Annotation & IIIF

- [Storiiies](https://storiiies.cogapp.com/): Guided tours through deep-zoom images. Close looking, basically.
- [StoryMapJS Gigapixel](https://storymap.knightlab.com/gigapixel/): When the image itself is the landscape: maps, manuscripts, paintings, huge photographs.
- [Exhibit](https://www.exhibit.so/): Lightweight IIIF exhibitions from British Library Labs. Object display without building a whole collections platform.
- [Mirador](https://projectmirador.org/): IIIF viewer for comparing and annotating digitized objects. Scholarly workbench energy.
- [Omeka S](https://omeka.org/s/): Collections, exhibits, linked data, multiple sites. The heavier-duty Omeka.
- [Omeka Classic](https://omeka.org/classic/): Older and simpler; still useful for small teaching exhibits or inherited projects.
- [CollectionBuilder](https://collectionbuilder.github.io/): Static collections from metadata and media files. GitHub-friendly, pleasantly practical.
- [Wax](https://minicomp.github.io/wax/): Minimal-computing Jekyll toolkit for IIIF-friendly exhibits. Sustainable, archivable, a little more technical.
- [Mukurtu](https://mukurtu.org/): Community archive platform where access, protocols, and governance are part of the design problem.
- [FromThePage](https://fromthepage.com/): Transcription and indexing for archival materials; useful when participation is structured around documents.
- [Zooniverse Project Builder](https://www.zooniverse.org/lab): Public classification/transcription projects. Many contributors, many small tasks.
- [Hypothesis](https://web.hypothes.is/): Web annotation for shared reading, class discussion, and public marginalia.
- [Annotorious](https://annotorious.dev/): Image annotation library for custom interfaces. Developer-oriented.

### Audio

**Platforms**

- [SoundCite](https://soundcite.knightlab.com/): Tiny inline audio clips inside prose. Lovely for close listening and oral-history snippets.
- [Echoes](https://echoes.xyz/): GPS-triggered audio walks and soundscapes. Verify current access/pricing before putting it in a lesson plan.
- [VoiceMap](https://voicemap.me/): Published walking tours for a mobile audience. More public-facing than experimental.
- [izi.TRAVEL](https://izi.travel/): Museum tours, heritage walks, audio guides; institution/tourism vocabulary, but useful to compare.

**Production tools**

- [Audacity](https://www.audacityteam.org/): Open-source audio editing. Interviews, cleanup, narration, simple mixes.
- [Descript](https://www.descript.com/): Edit audio/video through the transcript. Very accessible, also very platform/AI-dependent.
- [Hindenburg](https://hindenburg.com/): Built for radio features, podcasts, spoken-word work. Polished audio, professional workflow.
- [Zencastr](https://zencastr.com/): Remote interview/podcast recording in the browser.
- [Reaper](https://www.reaper.fm/): Serious audio workstation at a modest price; flexible, not beginner-cuddly.
- [GarageBand](https://www.apple.com/mac/garageband/): Apple-only, beginner-friendly, enough for many classroom audio stories.

### Hotspots & Learning

- [H5P](https://h5p.org/): Reusable HTML5 learning objects: hotspots, quizzes, branching scenarios, small activities.
- [Genially](https://genially.com/): Quick interactive presentations and clickable images. Very workshop-friendly, quite template-driven.
- [ThingLink](https://www.thinglink.com/): Multimedia hotspots on images, video, 360 scenes, and 3D models.
- [JuxtaposeJS](https://juxtapose.knightlab.com/): Before/after image slider. One job, does it well.

### Branching Narratives

- [Twine](https://twinery.org/): The obvious starting point for nonlinear hypertext. Publishes to plain HTML.
- [Ink / Inky](https://www.inklestudios.com/ink/): Branching narrative scripting, especially strong for dialogue and variables.
- [Inklewriter](https://www.inklewriter.com/): Simple browser-based choice stories, no coding.
- [Inform 7](https://ganelson.github.io/inform-website/): Parser fiction written in prose-like rules. Wonderful tradition, specialized learning curve.
- [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/): Gamebook-like scripting with stats, variables, and consequential choices.
- [Yarn Spinner](https://www.yarnspinner.dev/): Dialogue trees and game conversations, often used with Unity or Godot.
- [Undum](https://idmillington.github.io/undum/): JavaScript framework for stateful prose fiction; useful when Twine starts to feel too boxed-in.
- [Quest](https://textadventures.co.uk/quest/): Visual/scripted text adventures and gamebooks. Check maintenance before teaching with it.

### Games & Small Worlds

- [Ren'Py](https://www.renpy.org/): Visual novels: dialogue, sprites, backgrounds, branches. Script required, but approachable.
- [Bitsy](https://make.bitsy.org/): Tiny pixel worlds. Excellent for first games, poetic rooms, museum prompts, and constrained stories.
- [Decker](https://internet-janitor.itch.io/decker): HyperCard-ish card stacks and zines. Handmade, playful, odd in a useful way.
- [Godot Engine](https://godotengine.org/): Open-source game engine for 2D/3D prototypes when movement, systems, or interaction matter.
- [PICO-8](https://www.lexaloffle.com/pico-8.php): Fantasy console with strict limits. Retro aesthetics, small sketches, constraints as pedagogy.
- [RPG Maker](https://www.rpgmakerweb.com/): Tile-based exploration, quests, towns, character dialogue. Genre-shaped but accessible.
- [Construct](https://www.construct.net/): Browser-based no/low-code engine for 2D interactive projects and simple systems.
- [GDevelop](https://gdevelop.io/): Open-source 2D game engine with classroom-friendly browser exports.
- [itch.io](https://itch.io/): Publishing/distribution for games, zines, interactive books, and experimental HTML works. Also a place to find small-form references.

### 3D & Immersive

**Platforms**

- [Sketchfab](https://sketchfab.com/): Publish, annotate, and embed 3D models. A practical route into object-based interpretation.
- [Frame](https://framevr.io/): Browser-based shared 3D rooms; lightweight virtual exhibits/talk spaces without building an engine.
- [Artsteps](https://www.artsteps.com/): Walkable gallery metaphor. Familiar, sometimes too familiar, but easy to understand.

**Production tools**

- [Blender](https://www.blender.org/): The 3D workhorse: modelling, cleanup, rendering, animation.
- [A-Frame](https://aframe.io/): Web 3D/VR with HTML-like markup. Good teaching bridge between web pages and immersive scenes.
- [Unity](https://unity.com/): Heavy-duty engine for interaction, physics, apps, AR/VR, and game-like structures.
- [Unreal Engine](https://www.unrealengine.com/): High-end real-time 3D and cinematic reconstruction. Powerful, resource-hungry.
- [Polycam](https://poly.cam/): Mobile scanning/photogrammetry for quick field capture and prototype models.
- [RealityCapture](https://www.capturingreality.com/): More professional photogrammetry pipeline for detailed sites and objects.

### Curation & Zines

- [Are.na](https://www.are.na/): Slow visual research boards. Good for collecting references without turning everything into productivity theatre.
- [Electric Zine Maker](https://alienmelon.itch.io/electric-zine-maker): Eight-page foldable zines, printshop chaos, workshop-friendly.
- [Notion](https://www.notion.so/): Planning, source gathering, small public guides. Convenient, proprietary.
- [WriteFreely](https://writefreely.org/): Quiet, federated, text-first publishing.
- [Ghost](https://ghost.org/): Long-form publishing/newsletters with audience infrastructure attached.

### Planning & Prototyping

- [Miro](https://miro.com/): Whiteboards for storyboarding, audience mapping, workshop sorting, messy early thinking.
- [Figma](https://www.figma.com/): Wireframes, clickable prototypes, interface systems. Useful when the story is partly an interface.
- [Mural](https://www.mural.co/): Facilitated group boards and design-thinking activities.
- [Canva](https://www.canva.com/): Fast templates for presentations, explainers, and lightweight visual prototypes.
- [Aeon Timeline](https://timeline.app/): Complex chronology planning before anything becomes public-facing.
- [Zotero](https://www.zotero.org/): Source management behind the story. Boring in the best possible way.

## B. Sources

### License Key

- Public Domain / PD means the item is generally free of known copyright restrictions, but local rules can still vary
- CC0 means the creator has waived copyright and related rights as far as legally possible
- CC BY means reuse is allowed with attribution
- CC BY-SA means reuse is allowed with attribution and share-alike terms
- Mixed / item-level rights means the platform contains many licenses, so verify each item before reuse
- Custom terms means the platform has its own license or terms of use, so read them before publishing

### Aggregators

- [Europeana](https://www.europeana.eu/): European cultural heritage at aggregator scale. Rights are item-level and uneven; always click through.
- [Digital Public Library of America](https://dp.la/): US cultural heritage collections from libraries, archives, and museums. Mixed rights.
- [Wikimedia Commons](https://commons.wikimedia.org/): Enormous, messy, indispensable. Licenses vary from CC0/public domain to attribution/share-alike requirements.
- [Internet Archive](https://archive.org/): Books, audio, video, software, web captures; rights vary wildly by item.
- [Openverse](https://openverse.org/): Search open images and audio across repositories. Mostly CC/public-domain discovery, still verify.
- [Google Arts & Culture](https://artsandculture.google.com/): Beautiful object views and curated stories. Reuse is often limited by custom or institution-specific terms.

### Libraries & Museums

- [Library of Congress Digital Collections](https://www.loc.gov/collections/): Deep US collections: maps, photographs, manuscripts, recordings. Many items are public domain or no-known-restrictions, but not all.
- [British Library Flickr Commons](https://www.flickr.com/photos/britishlibrary/): Public-domain image sets from digitized books. Odd, rich, and good for visual prompts.
- [Gallica](https://gallica.bnf.fr/): BnF books, images, maps, periodicals. Item-level rights.
- [KB Digital Heritage](https://www.kb.nl/en/over-ons/expertises/digitaal-erfgoed): Delpher, DBNL, image collections, web archiving. Dutch digital heritage, with rights and access varying by service.
- [Rijksmuseum Collection](https://www.rijksmuseum.nl/en/rijksstudio): High-resolution museum images and metadata. Many public-domain images, but verify the record.
- [Wellcome Collection](https://wellcomecollection.org/works): Health, medicine, science, culture. Strong open-access posture; mixed item rights.
- [Smithsonian Open Access](https://www.si.edu/openaccess): Millions of CC0 images and datasets from the Smithsonian.
- [The Met Open Access](https://www.metmuseum.org/art/collection): Public-domain images and collection data from the Met's open-access records.
- [Cleveland Museum of Art Open Access](https://www.clevelandart.org/open-access): CC0 collection data and images for open-access artworks.
- [Amsterdam City Archives](https://archief.amsterdam/): Local maps, images, records, and urban history material; rights are mixed.

### Geodata

- [David Rumsey Map Collection](https://www.davidrumsey.com/): Historic maps, high-resolution scans, georeferencing. Custom terms; many educational uses are fine, publication still needs checking.
- [OldMapsOnline](https://www.oldmapsonline.org/): A finding aid for historical maps across institutions. Rights live with the holding institution.
- [OpenStreetMap](https://www.openstreetmap.org/): Collaborative global geodata. Open Database License.
- [Natural Earth](https://www.naturalearthdata.com/): Public-domain cartographic data, especially useful for clean base maps.
- [Pelagios Peripleo](https://peripleo.pelagios.org/): Historical places through linked open data; rights depend on the underlying records.
- [GeoNames](https://www.geonames.org/): Place names, coordinates, and metadata. CC BY.

### Texts

- [Project Gutenberg](https://www.gutenberg.org/): Public-domain ebooks, mostly from a US copyright perspective.
- [Standard Ebooks](https://standardebooks.org/): Public-domain texts with careful editing, clean formatting, and CC0 editions where possible.
- [Wikisource](https://wikisource.org/): Collaborative transcriptions. Mostly public domain/free licenses, but check the specific text.
- [Open Library](https://openlibrary.org/): Catalog plus lending layer for Internet Archive books. Rights/access vary.
- [HathiTrust Digital Library](https://www.hathitrust.org/): Huge research-library corpus with public-domain and restricted works side by side.
- [Early English Books Online Text Creation Partnership](https://textcreationpartnership.org/tcp-texts/eebo-tcp-early-english-books-online/): Transcribed early printed books; many texts are available for academic reuse, but terms are not uniform.

### Sound Sources

- [Freesound](https://freesound.org/): Field recordings and sound effects from a community archive. CC0/CC BY/CC BY-NC mix.
- [Free Music Archive](https://freemusicarchive.org/): Curated music with Creative Commons licenses; useful, but license details matter.
- [Internet Archive Netlabels](https://archive.org/details/netlabels): Freely downloadable music from netlabels. Item-level rights.
- [Europeana Sounds](https://www.europeana.eu/en/collections/topic/62-sound): Audio heritage surfaced through Europeana; mixed rights.
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/): Excellent sound archive for personal, educational, and research use. Commercial reuse is restricted.
- [Library of Congress Audio Collections](https://www.loc.gov/audio/): Recordings, oral histories, music, spoken-word collections. Check item-level rights.

### Image & Video

- [Public Domain Review](https://publicdomainreview.org/): Curated public-domain material with essays. Follow source links when reuse matters.
- [NASA Image and Video Library](https://images.nasa.gov/): Space/science media, generally public domain with trademark and endorsement caveats.
- [Pexels](https://www.pexels.com/): Stock photos/videos for quick prototypes, not usually source-led scholarship. Custom license.
- [Pixabay](https://pixabay.com/): Stock images, illustration, video, music, and sound effects. Custom Pixabay license.
- [Unsplash](https://unsplash.com/): Contemporary photography; useful for mockups, sometimes too recognizably stock-like. Custom license.
- [The Noun Project](https://thenounproject.com/): Icons for diagrams and explainers. Free attribution or paid license routes.

### Research Data

- [Zenodo](https://zenodo.org/): Datasets, software, posters, papers, workshop materials. Item-level licenses.
- [OpenAIRE Explore](https://explore.openaire.eu/): European open research outputs and datasets; mixed source records.
- [CLARIN Resource Families](https://www.clarin.eu/resource-families): Curated language resources for humanities and social-science research. Rights vary.
- [DARIAH Tools and Services](https://www.dariah.eu/tools-services/): Registry of arts/humanities tools, services, and resources.
- [Wikidata](https://www.wikidata.org/): Collaborative linked open data. CC0, which is one reason it travels so well.
- [Open Knowledge Maps](https://openknowledgemaps.org/): Visual discovery of scholarly literature and research fields; source records have their own rights.

## C. Examples

These examples are included for critique and comparison, not as models to imitate uncritically. Some are canonical, some are experimental, some are dated in productive ways, and some are here because they make ethical or design tensions visible.

For teaching and project design, it helps to separate **guided narratives** from **exploratory or reference interfaces**.

- **Guided narratives** give the audience an authored path to follow, even if there is some interaction or branching
- **Exploratory / reference interfaces** are still valuable for storytelling research and interpretation, but the user mainly browses, queries, compares, or assembles meaning for themselves

Some projects are hybrids. When in doubt, the question is simple: is the main experience following a story, or exploring a resource?

### Maps & Places

**Guided narratives**

- [Out of Eden Walk](https://www.outofedenwalk.com/): Slow journalism, walking, maps, photographs, essays. A very authored route through place.
- [Histories of the National Mall](https://mallhistory.org/): Mobile public history with archival materials and thematic tours. Good for talking about situated interpretation.
- [Necessary Reunions](https://necessaryreunions.org/): VOC archives and historical maps of early modern Kerala; map-text storytelling with georeferencing, IIIF, and gazetteer work in the mix.
- [Digital Buffalo Interactive Histories](https://digitalbuffalo.uark.edu/interactive-histories/): Six StoryMap-based histories of the Buffalo National River. Pick one and follow it as a short multimedia place narrative.
- [Library of Congress Story Maps](https://www.loc.gov/research-centers/main/researcher-resources/story-maps/): Collection-based map narratives from the Library of Congress; more of a shelf of guided stories than a single project.

**Exploratory / reference interfaces**

- [Slave Voyages](https://www.slavevoyages.org/): Research database and interpretive site on the transatlantic and intra-American slave trades. Essential for ethical historical data/interface discussion; not simply a "story."
- [ORBIS: The Stanford Geospatial Network Model of the Roman World](https://orbis.stanford.edu/): Routes, costs, and travel time in the Roman world. Spatial modeling as argument.
- [Mapping the Republic of Letters](http://republicofletters.stanford.edu/): Correspondence networks among early modern intellectuals; exploratory historical interpretation through maps and networks.
- [Locating London's Past](https://www.locatinglondon.org/): Early modern and eighteenth-century London datasets layered on a map.
- [Native Land Digital](https://native-land.ca/): Indigenous territories, languages, and treaties. Use with its own ethical caveats; not a neutral basemap or simple authored story.
- [Monument Lab National Monument Audit](https://monumentlab.com/audit): Maps, data, essays, and audit method around US monuments. Strong hybrid; mostly analytical exploration.

### Historical Timelines

**Guided narratives**

- [A History of the World in 100 Objects](https://www.bbc.co.uk/programmes/b00nrtd2): Object-based chronology at public-broadcast scale.
- [Web Design History Timeline](https://www.webdesignmuseum.org/web-design-history): Web eras, technologies, and interface conventions arranged as a readable visual sequence.

**Exploratory / reference interfaces**

- [Histography](https://histography.io/): Playful Wikipedia-linked timeline. More navigation toy than rigorous curation, which can itself be useful to discuss.
- [TimelineJS Examples](https://timeline.knightlab.com/#examples): A pattern library of published timelines rather than one example.
- [Chronas](https://chronas.org/): Historical atlas organized by time and geography.

### Audio Stories

- [In the Dark](https://features.apmreports.org/in-the-dark/): Season-long investigation with careful evidentiary pacing and companion materials.
- [The Memory Palace](https://thememorypalace.us/): Compact historical audio essays: memory, archive, voice.
- [This American Life](https://www.thisamericanlife.org/): Useful for structure: themed acts, pacing, narrative handoffs.
- [99% Invisible](https://99percentinvisible.org/): Design, cities, objects, built environment; material culture turned into short audio essays.
- [Snap Judgment](https://snapjudgment.org/): First-person performance and curation. Voice-led.
- [Notes on Blindness](https://www.notesonblindness.co.uk/): John Hull's audio diaries expanded into film, archive, and immersive work.
- [The Kitchen Sisters](https://kitchensisters.org/): Radio documentaries on hidden histories and everyday culture; oral history with texture.
- [Museum of London Audio Walks](https://www.museumoflondon.org.uk/discover/audio-walks): Locative sound for public history.

### Video & Scrollytelling

- [Snow Fall](https://www.nytimes.com/projects/2012/snow-fall/): The 2012 scrollytelling reference point. Useful partly because the form has aged.
- [The Boat](https://www.sbs.com.au/theboat/): Literary adaptation with text, sound, illustration, motion. Sensory and guided.
- [Welcome to Pine Point](https://pinepoint.nfb.ca/): Vanished town, memoir, archive, pacing. Still a strong guided multimedia documentary.
- [Bear 71](https://bear71.nfb.ca/): Wildlife surveillance, database documentary, embodied navigation. Check browser compatibility.
- [Hollow](https://hollowdocumentary.com/): Community-centered interactive documentary told through local voices.
- [Do Not Track](https://donottrack-doc.com/en/intro/): Episodic interactive documentary about privacy and the web economy.
- [The Fallen of World War II](https://www.fallen.io/ww2/): Animated data argument about wartime deaths and memory.
- [The Quipu Project](https://interactive.quipu-project.com/): Testimony, audio, participation, and the ethics of documenting forced sterilizations in Peru.
- [The Rhythm of Food](https://rhythm-of-food.net/): Search interest in foods over time; data story with a deliberately lightweight premise.

### Collection Tours

**Guided narratives**

- [Storiiies Examples](https://storiiies.cogapp.com/examples/): IIIF close-looking tours of artworks and manuscripts.
- [Exhibit Examples](https://www.exhibit.so/): Collection-led narrative design from the British Library context.
- [British Library Discovering Literature](https://www.bl.uk/discovering-literature): Essays, objects, teaching resources; very institutional, very useful.
- [Europeana Exhibitions](https://www.europeana.eu/en/exhibitions): Cross-institutional object narratives built from European collections.
- [Wellcome Collection Stories](https://wellcomecollection.org/stories): Interpretive writing from medical, cultural, and historical collections.
- [The Public Domain Review Essays](https://publicdomainreview.org/essays/): Public-domain source material turned into essays with a strong editorial voice.

**Exploratory / reference interfaces**

- [Digital Benin](https://digitalbenin.org/): Objects, oral histories, provenance, maps, archives, Edo-language research. Reparative and research-led; more browseable than linear.
- [Nunalleq Digital Museum & Catalogue](https://www.nunalleq.org/): Community co-curated Yup'ik archaeological heritage through objects, voices, reconstructions, and 3D scans.
- [Below the Surface](https://belowthesurface.amsterdam/nl): Amsterdam Noord/Zuidlijn finds presented through objects, vitrines, and urban archaeology.
- [When Women Lost the Vote](https://www.amrevmuseum.org/exhibits/when-women-lost-the-vote-a-revolutionary-story): Online exhibit about women and free people of color voting in Revolutionary-era New Jersey
- [The Searchable Museum](https://www.searchablemuseum.com/about/): NMAAHC digital exhibits and stories. Browseable, but the exhibit sections are built as guided online museum narratives

### 3D & Immersive Examples

**Guided narratives**

- [CyArk](https://www.cyark.org/): 3D heritage documentation with preservation narratives and interpretive framing.
- [Virtual Angkor](https://www.virtualangkor.com/): Historical reconstruction for teaching; useful for discussing both immersion and assumption-making.
- [Anne Frank House: The Secret Annex Online](https://www.annefrank.org/en/anne-frank/secret-annex/): Spatial interpretation of the Secret Annex without requiring VR hardware.
- [Notes on Blindness](https://www.notesonblindness.co.uk/): Audio diaries, archive, film, immersive adaptation. Cross-media without being VR-only.

**Exploratory / reference interfaces**

- [Sketchfab Cultural Heritage & History](https://sketchfab.com/3d-models/popular?categories=cultural-heritage-history): Browseable 3D heritage models with annotations and embeds.
- [The Smithsonian 3D Program](https://3d.si.edu/): Open 3D models and stories from Smithsonian collections; part story, part model repository.
- [Limburg3D: The Maastricht Collection](https://www.limburg3d-umfasos.nl/): Student-built Maastricht/Limburg object histories with themes, timelines, 3D views, and activities.

### Interactive Fiction & Games

- [Depression Quest](http://www.depressionquest.com/): Constrained choice as affective design.
- [80 Days](https://www.inklestudios.com/80days/): Jules Verne reworked through routes, worldbuilding, and replayability.
- [What Remains of Edith Finch](https://annapurnainteractive.com/en/games/what-remains-of-edith-finch): Environmental narrative around family memory and storytelling.
- [Kentucky Route Zero](https://kentuckyroutezero.com/): Atmosphere, dialogue, episodic structure, literary game form.
- [The Uber Game](https://ig.ft.com/uber-game/): Systems storytelling about gig-economy work and constrained agency.
- [Spent](https://playspent.org/): Persuasive choice-based simulation about poverty and survival.
- [The Republia Times](https://dukope.com/play.php?g=trt): Tiny browser game where mechanics do the political arguing.

### Mixed DH Examples

**Guided narratives and strong hybrids**

- [bITEM](https://bitem.at/): Object biographies for museum items and specimens; the [Dodo case study](https://bitem.at/entities/234465) is the one to inspect.
- [Tapestries: Films from the Chinese Cultural Revolution](https://tapestries.media/u/futureofthebook/03f9e39a-d4e7-43a7-95c9-acba593fe1ec): Media and text arranged around a film corpus; patchwork multimodal curation.
- [Tapestries: A Digital Bookshelf](https://tapestries.media/u/futureofthebook/A%20Digital%20Bookshelf): Publications as a browseable media field. More spatial curation than linear story.
- [The Colored Conventions Project](https://coloredconventions.org/): Archive, pedagogy, exhibits, public history around nineteenth-century Black organizing.

**Exploratory / analytical interfaces**

- [Visualizing Emancipation](https://dsl.richmond.edu/emancipation/): Emancipation events during the US Civil War, traced through maps and historical data.
- [Mapping Prejudice](https://mappingprejudice.umn.edu/): Racial covenants, community research, spatial evidence, data ethics.
- [Six Degrees of Francis Bacon](http://sixdegreesoffrancisbacon.com/): Reconstructed early modern social networks; exploratory rather than story-led.
- [Radio Aporee Maps](https://aporee.org/maps/): Global sound map of field recordings and places. Open-ended locative listening.

## D. Design Methods & Workshop Inspiration

This section is less a canon than a workbench. We are borrowing from design thinking, service design, critical making, cultural heritage work, UX, and whatever else helps participants slow down before choosing a platform. The basic move: ask better questions about audience, evidence, interface, power, and form.

### General Design Thinking Toolkits

- [Digital Society School Design Method Toolkit](https://toolkits.dss.cloud/design/): Main workshop shelf. Searchable methods such as actors maps, backcasting, brainwriting, empathy maps, paper prototyping, storyboards, wireframes, Wizard of Oz, and WWWWWH. Pick a card, adapt it, don't worship it.
- [Stanford d.school: Getting Started with Design Thinking](https://dschool.stanford.edu/resources/getting-started-with-design-thinking): Fast entry point. Good when everyone needs a shared vocabulary in ten minutes.
- [IDEO Design Thinking Resources](https://designthinking.ideo.com/resources): The polished mainstream version. Useful, but bring a little suspicion.
- [IDEO.org Design Kit Methods](https://www.designkit.org/methods): Big method drawer. Interviews, immersion, prototyping, evaluation. Take one method; leave the ideology if needed.
- [Design Thinking for Educators](https://page.ideo.com/design-thinking-edu-toolkit): Workbook mode. More classroom than gallery, which is sometimes exactly right.
- [Google Design Sprint Kit](https://designsprintkit.withgoogle.com/): Time boxes, decisions, pressure. Helpful when the workshop needs momentum rather than endless discussion.
- [Design Council Framework for Innovation](https://www.designcouncil.org.uk/resources/framework-for-innovation/): Double Diamond. Diverge, converge, repeat. Clean diagram, messy reality.

### Workshop Methods

- [NN/g: Journey Mapping 101](https://www.nngroup.com/articles/customer-journey-mapping/): Turn this into a reader journey, visitor journey, participant journey. Where do they get curious? Where do they get lost?
- [NN/g: Empathy Mapping](https://www.nngroup.com/articles/empathy-mapping/): Useful assumption dump. Dangerous if treated as actual knowledge of people.
- [NN/g: Using Scenarios](https://www.nngroup.com/articles/scenario-mapping-personas/): Tiny stories before the story: "A teacher arrives five minutes before class..." etc.
- [NN/g: Storyboards Help Visualize UX Ideas](https://www.nngroup.com/articles/storyboards-visualize-ideas/): Sketch first, choose tools later.
- [Miro: How Might We Template](https://miro.com/templates/how-might-we/): Overfamiliar, yes. Still a handy way to turn complaints into design questions.

### Design, Digital Humanities & Cultural Heritage

- [Design, Digital Humanities, and Information Visualization for Cultural Heritage](https://www.mdpi.com/2076-0752/12/6/254): Slower reading. Design, visualization, heritage; not a workshop card, more a background text.
- [Critical Making](https://opendesignnow.org/index.html%3Fp%3D434.html): Making as thinking. Good antidote to prototype theatre.
- [Speculative Design](https://speculativedesign.com/): What if the point is not to solve, but to unsettle?
- [Mapping Access](https://www.criticaldesignlab.com/project/mapping-access): Access as method, not garnish. Disability-led, spatial, critical.
- [Design Justice Network Principles](https://designjustice.org/read-the-principles): Keep nearby when "user-centered" starts sounding too innocent.

## Contributing

Contributions are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for the preferred item format and review criteria.

## License

This curated resource list is licensed under [Creative Commons Attribution 4.0 International](LICENSE). Individual linked resources keep their own licenses and terms of use.
