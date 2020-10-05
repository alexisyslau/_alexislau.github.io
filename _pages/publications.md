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

### Direct Imaging of Exoplanets
I have been working on a large direct imaging survey with [Professor Sasha Hinkley](https://emps.exeter.ac.uk/physics-astronomy/staff/sh573), obtained by the W. M. Keck Observatory. During my master, I continued worked on this dataset and investigate the possibilty on applying Reference Differential Imaging (RDI) to the survey. HR 8799 was chosen as a case study. Another website has been built to showcase the data of the survey (coming soon). 


<p>
    <img src='/images/HR_8799.png' alt>
    <em>Left: Raw image before processing. Middle: PCA residual image of HR 8799. Right: RDI-PCA residual image of HR 8799. We can see that the speckle-pattern is prominent in the raw image. PCA partly removes the noise but RDI-PCA removes most of it.</em>
</p>




If you would like to know more about my master project, feel free to drop me a message!

### Optimisation of data-reduction from Adaptive-Optics assisted Astronomical Observations
I have started my PhD on optimising data reduction for AO assisted observations, which will involve PSF reconstructions and learning what parameters are important for us to do so. 
