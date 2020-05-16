---
layout:         post
title:          "Test Photo Story"
subtitle:		"Test subtitle"
date:           2020-05-15
categories:     photo-story
cover: 			https://c2.staticflickr.com/6/5670/21950900225_ca0a7072e6_b_d.jpg
cover-offset: 	50px
published:		false
---

Some sample text to start off the photo story.

{% include photo-story-fullscreen.html photo="25163535813" caption="Victoria Peak" %}
{% include photo-story-100.html photo="25814419435" %}
{% include photo-story-2x1-50-50.html photo1="25814428805" photo2="25693471882" %}
{% include photo-story-2x1-50-50-vertical.html photo1="24997782833" photo2="24993997834" %}

### Test header in between stories
{: style="text-align: center" }

{% include photo-story-2x1-40-60.html photo1="25712328395" photo2="24994273214" %}
{% include photo-story-2x1-60-40.html photo1="25598654106" photo2="24994290804" caption="Overlooking the Harbor" %}

<div class="img-section-divider"></div>

{% include photo-story-3x1-40-40-20.html photo1="25430675030" photo2="25636335111" photo3="25610372622" %}
