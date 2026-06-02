---
layout: default
title: Contribute
permalink: /contributing/
---

<article class="content-page contributing-page">
{% capture contributing_markdown %}{% include_relative CONTRIBUTING.md %}{% endcapture %}
{{ contributing_markdown | markdownify }}
</article>
