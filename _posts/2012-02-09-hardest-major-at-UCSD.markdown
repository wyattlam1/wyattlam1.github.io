---
layout: post
title:  "Hardest Major at UCSD?"
date:   2012-02-09
categories: miscellaneous
---
I got the idea from my friend, Wes, and decided to play around with it myself. I wrote a small Java program that queried the [CAPE](http://www.cape.ucsd.edu/stats.html) database by major. I then parsed the HTML pages I retrieved and averaged the number of hours spent studying/working by adding up all the hours and dividing it by the number of rows on the page. I sorted the majors by “hours spent studying”, from highest to lowest. I also added in a few arbitrary restrictions for several cases did not result in enough data. For example, I excluded results that contained less than 20 questionaire returned. I also excluded majors that had less than 10 CAPE evaluations (some majors didn’t have any at all). I know this is definitely not *completely* representative of “the hardest major.” They’re just some interesting stats. Anyways, here are the results! Hope you found them interesting like I did!

<table style="text-align:left;"><tr><td><h3>Major</h3></td>
<td><h3>Hours Studied per Week</h3></td>
</tr><tr><td>Chemical Engineering :</td>
<td>8.172040816326529</td>
</tr><tr><td>Electrical &amp; Computer Engineering :</td>
<td>7.974568527918782</td>
</tr><tr><td>Mechanical &amp; Aerospace Engineering :</td>
<td>7.912618384401109</td>
</tr><tr><td>Structural Engineering :</td>
<td>7.782485875706211</td>
</tr><tr><td>Computer Science &amp; Engineering :</td>
<td>7.5879729729729695</td>
</tr><tr><td>Chemistry :</td>
<td>7.184901960784308</td>
</tr><tr><td>Bioengineering :</td>
<td>6.5636942675159204</td>
</tr><tr><td>NanoEngineering :</td>
<td>6.124444444444445</td>
</tr><tr><td>Humanities :</td>
<td>6.093731343283583</td>
</tr><tr><td>Physics :</td>
<td>6.022707692307693</td>
</tr><tr><td>Contemporary Issues :</td>
<td>N/A</td>
</tr><tr><td>Biology :</td>
<td>5.884326424870467</td>
</tr><tr><td>Mathematics :</td>
<td>5.83238341968912</td>
</tr><tr><td>Making of the Modern World :</td>
<td>5.720915032679739</td>
</tr><tr><td>Dimensions of Culture :</td>
<td>5.280217391304348</td>
</tr><tr><td>Education Studies :</td>
<td>5.247454545454547</td>
</tr><tr><td>Thurgood Marshall College :</td>
<td>4.944000000000001</td>
</tr><tr><td>International Studies :</td>
<td>4.932631578947368</td>
</tr><tr><td>Cognitive Science :</td>
<td>4.919226190476191</td>
</tr><tr><td>English as a Second Language :</td>
<td>N/A</td>
</tr><tr><td>Law &amp; Society :</td>
<td>4.883333333333333</td>
</tr><tr><td>Literature :</td>
<td>4.803268608414245</td>
</tr><tr><td>Culture, Art, Technology :</td>
<td>4.786162790697674</td>
</tr><tr><td>German Studies :</td>
<td>N/A</td>
</tr><tr><td>Anthropology :</td>
<td>4.784846153846153</td>
</tr><tr><td>Chinese Studies :</td>
<td>4.745271317829457</td>
</tr><tr><td>Philosophy :</td>
<td>4.744918918918917</td>
</tr><tr><td>Ethnic Studies :</td>
<td>4.7118978102189795</td>
</tr><tr><td>International Relations and Pacific Studies :</td>
<td>N/A</td>
</tr><tr><td>Political Science :</td>
<td>4.662821782178217</td>
</tr><tr><td>Economics :</td>
<td>4.592650231124802</td>
</tr><tr><td>Urban Studies &amp; Planning :</td>
<td>4.571085271317831</td>
</tr><tr><td>Communication :</td>
<td>4.557137681159421</td>
</tr><tr><td>Rady School of Management :</td>
<td>4.555939849624059</td>
</tr><tr><td>History :</td>
<td>4.539741602067183</td>
</tr><tr><td>Critical Gender Studies :</td>
<td>4.4980769230769235</td>
</tr><tr><td>Sociology :</td>
<td>4.42496323529412</td>
</tr><tr><td>Muir College Writing Program :</td>
<td>N/A</td>
</tr><tr><td>Visual Arts :</td>
<td>4.320420168067227</td>
</tr><tr><td>Muir College :</td>
<td>N/A</td>
</tr><tr><td>Psychology :</td>
<td>4.19964735516373</td>
</tr><tr><td>Religious Studies :</td>
<td>4.179444444444445</td>
</tr><tr><td>Human Development Program :</td>
<td>4.117966101694916</td>
</tr><tr><td>Environmental Sciences :</td>
<td>4.071578947368422</td>
</tr><tr><td>Linguistics :</td>
<td>4.018823529411764</td>
</tr><tr><td>Japanese Studies :</td>
<td>3.9308411214953267</td>
</tr><tr><td>Latin American Studies :</td>
<td>3.818</td>
</tr><tr><td>Revelle College :</td>
<td>N/A</td>
</tr><tr><td>Environmental Systems :</td>
<td>3.8058974358974362</td>
</tr><tr><td>San Diego Community College :</td>
<td>N/A</td>
</tr><tr><td>Third World Studies :</td>
<td>3.7576923076923077</td>
</tr><tr><td>School of Engineering :</td>
<td>3.6333333333333333</td>
</tr><tr><td>Scripps Institute of Oceanography :</td>
<td>3.3437837837837847</td>
</tr><tr><td>Eleanor Roosevelt College :</td>
<td>3.3249999999999997</td>
</tr><tr><td>Science Technology &amp; Public Affairs :</td>
<td>N/A</td>
</tr><tr><td>Sixth College :</td>
<td>N/A</td>
</tr><tr><td>Teacher Education Program :</td>
<td>N/A</td>
</tr><tr><td>Earth Sciences :</td>
<td>3.101666666666667</td>
</tr><tr><td>Judaic Studies :</td>
<td>2.823333333333333</td>
</tr><tr><td>Music :</td>
<td>2.7260317460317474</td>
</tr><tr><td>Theater &amp; Dance :</td>
<td>2.7113661202185804</td>
</tr><tr><td>Film Studies :</td>
<td>0.82</td>
</tr><tr><td>Warren College :</td>
<td>N/A</td>
</tr><tr><td>Warren College Writing Program :</td>
<td>NaN</td>
</tr><tr><td>N/A:</td>
<td>N/A</td>
</tr><tr><td>N/A:</td>
<td>N/A</td>
</tr></table>