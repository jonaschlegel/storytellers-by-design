---
layout: default
title: Contribute
permalink: /contributing/
---

{% capture contributing_markdown %}{% include_relative CONTRIBUTING.md %}{% endcapture %}
{{ contributing_markdown | markdownify }}
