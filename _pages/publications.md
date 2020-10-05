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

### Optimisation of data-reduction from Adaptive-Optics assisted Astronomical Observations
I have started my PhD on optimising data reduction for AO assisted observations, which will involve PSF reconstructions and learning what parameters are important for us to do so. 

### Direct Imaging of Exoplanets
I have been working on a large direct imaging survey with [Professor Sasha Hinkley](https://emps.exeter.ac.uk/physics-astronomy/staff/sh573), obtained by the W. M. Keck Observatory. My master project is based on a survey of more than 20,000 images obtained from W.M. Keck. All targets have infrared excess in 22 micron from WISE all-sky survey, main A&F type stars. 

The aims of the project are: 
* Searching for exoplanets and disks 
* Enhance the performance at the inner working angle
* Better detection method for searching candidates 

In this project, we managed to find some interesting candidates which require more observations for validation. Other than searching for exoplanets, we managed to improve the sensitivity at the inner working angle by implementing reference image library, using HR-8799 as a case study. In terms of detection limit, this method shows a gain in contrast within 1" region. Therefore, we would like to extend our work to the whole survey. 

<img src='/images/HR_8799.png' width="1500" alt>
<em>Left: Raw image before processing. Middle: PCA residual image of HR 8799. Right: RDI-PCA residual image of HR 8799. We can see that the speckle-pattern is prominent in the raw image. PCA partly removes the noise but RDI-PCA removes most of it.</em>

If you would like to know more about my master project, feel free to drop me a message!