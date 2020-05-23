---
layout:         post
title:          "Test Photo Story"
subtitle:		"Test subtitle"
date:           2020-05-15
type:           photo-story
cover: 			https://c2.staticflickr.com/6/5670/21950900225_ca0a7072e6_b_d.jpg
cover-offset: 	50px
published:		false
---

Some sample text to start off the photo story.

{% include photo-story-100.html photo="25163535813" caption="Victoria Peak" %}
{% include photo-story-100.html photo="25163535813" %}
{% include photo-story-100-with-padding.html photo="25814419435" %}

{% include photo-story-2x1-50-50.html photo1="49926400143" photo2="49926401563" %}
{% include photo-story-2x1-50-50.html photo1="49927218907" photo2="49926404223" caption="Test caption with some text" %}
{% include photo-story-2x1-50-50-vertical.html photo1="16744449915" photo2="21887698611" %}

{% include photo-story-100.html photo="25163535813" caption="Victoria Peak" %}

### Test header in between stories
{: style="text-align: center" }

{% include photo-story-2x1-40-60.html photo1="49926400143" photo2="49926401563" %}
{% include photo-story-2x1-60-40.html photo1="49926400143" photo2="49926401563" caption="Test cation 2" %}

<div class="img-section-divider"></div>

{% include photo-story-3x1-40-40-20.html photo1="49927218907" photo2="49926404223" photo3="25163535813" %}
{% include photo-story-3x1-40-20-40.html photo1="49927218907" photo2="49926404223" photo3="25163535813" %}
{% include photo-story-3x1-20-40-40.html photo1="49927218907" photo2="49926404223" photo3="25163535813" %}

<div class="img-section-divider"></div>

{% include photo-story-3x1-25-50-25.html photo1="49927218907" photo2="49926404223" photo3="25163535813" %}