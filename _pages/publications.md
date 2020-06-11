---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

## Direct Imaging of Exoplanets
I have been working on a large direct imaging survey with [Professor Sasha Hinkley](https://emps.exeter.ac.uk/physics-astronomy/staff/sh573), observed at the W. M. Keck Observatory. Another website has been built to showcase the data of the survey. 
