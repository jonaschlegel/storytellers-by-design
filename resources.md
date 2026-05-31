---
layout: default
title: Resources
permalink: /resources/
---

{% capture resource_markdown %}{% include_relative README.md %}{% endcapture %}
{% assign contributing_link = '/contributing/' | relative_url | prepend: '(' | append: ')' %}
{% assign license_link = '/LICENSE' | relative_url | prepend: '(' | append: ')' %}
{% assign resource_markdown = resource_markdown | replace: '(CONTRIBUTING.md)', contributing_link | replace: '(LICENSE)', license_link %}
{{ resource_markdown | markdownify }}
