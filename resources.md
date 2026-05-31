---
layout: default
title: Resources
permalink: /resources/
script: /assets/js/resources.js
---

<section class="resource-browser" aria-labelledby="resource-browser-title">
  <div>
    <p class="workshop-label">resource browser</p>
    <h1 id="resource-browser-title">Find Storytelling Resources</h1>
    <p class="subtitle">Search and filter platforms, sources, and examples from the curated digital storytelling list.</p>
  </div>

  <div class="browser-controls">
    <label for="resource-search">Search resources</label>
    <input id="resource-search" type="search" placeholder="Search maps, IIIF, audio, timelines, no-code..." autocomplete="off">

    <div class="filter-group" aria-label="Resource section filters">
      <button class="filter-chip active" type="button" data-filter="section" data-value="all">All</button>
      <button class="filter-chip" type="button" data-filter="section" data-value="Tools">Tools</button>
      <button class="filter-chip" type="button" data-filter="section" data-value="Sources">Sources</button>
      <button class="filter-chip" type="button" data-filter="section" data-value="Examples">Examples</button>
      <button class="filter-chip" type="button" data-filter="section" data-value="Methods">Methods</button>
    </div>

    <div class="filter-group" aria-label="Resource category filters" id="category-filters"></div>
  </div>

  <p class="result-count" id="resource-count"></p>
  <div class="resource-results" id="resource-results"></div>
</section>

<details class="full-list">
  <summary>View full Markdown resource list</summary>

{% capture resource_markdown %}{% include_relative README.md %}{% endcapture %}
{% assign contributing_link = '/contributing/' | relative_url | prepend: '(' | append: ')' %}
{% assign license_link = '/LICENSE' | relative_url | prepend: '(' | append: ')' %}
{% assign resource_markdown = resource_markdown | replace: '(CONTRIBUTING.md)', contributing_link | replace: '(LICENSE)', license_link %}
<div id="resource-source">
{{ resource_markdown | markdownify }}
</div>
</details>
