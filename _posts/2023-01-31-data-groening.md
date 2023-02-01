---
layout: article
title: Deceiving with Data
date: 2023-01-31 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: published
categories:
- geekery
- analytics
- data
tags: ['geekery','analytics','data']
excerpt: Groening is a hard to catch, insidious means of telling misleading stories with Data
---

![Groening]({{ site.baseurl }}/assets/images/2023/groening.png)    


*In God we trust, the rest must bring data* - W.E. Deming    
  


We live in a world today where, whether you're:
- a brand marketing to your consumers; or
- a political party looking for public support on a policy change; or   
- a startup pitching to potential investors for your next round of funding   
 
you need to back up your assertions with some data.  

It is not uncommon, therefore, to encounter data that has been manipulated in some way to validate a story.   

## Level 1: Anecdotal Evidence aka Favourable Sampling

The simplest and probably most convincing approach to story telling is to present highly specific anecdotal data.   

Here is an example:

![Anecdotal Evidence]({{ site.baseurl }}/assets/images/2023/anecdotalEvidence.png)

While it makes for a great story, Shankar's singular experience tells me little about what my experience will be.   
## Level 2: Cherry Picking aka Favourable Filtering

Something slightly better and less obvious is cherry picking / selective filtering. Presenting a statistic helps legitimize the statement to some extent but those reading the fine print and quick to be convinced otherwise.  

![Cherry Picking]({{ site.baseurl }}/assets/images/2023/toothpaste.png)

## Level 3: Data Groening aka Favourable Partitioning

Neither anecdotal evidence nor cherry picking beats the insidiousness of what I'd like to call Data [Groening](https://en.wikipedia.org/wiki/Matt_Groening) because it manufactures a, hard to sniff out, Simpson's Paradox to support a false narrative. Especially in the context of Covid stats, I have now repeatedly seen malicious use of this tactic.   

## Simpson's Paradox

Simpson's Paradox described first by Edward Simpson and [explained beautifully by causality expert Judea Pearl here](https://ftp.cs.ucla.edu/pub/stat_ser/r414.pdf) is a means of partitioning or splitting the underlying data set in a manner that reverses results. The partitioning in question needs to be examined for causality. If causality can be established, the partition holds. In the hands of a skilled data analyst, Simpson's paradox can be weaponized to support false narratives.  
## Groening Covid Data

Let us say, for instance, that you're an anti-vaxxer. You're convinced that no one should take a covid vaccine and you'd like to convince your audience of this.  

A common fear amongst the masses is that taking the vaccine will itself give one covid.  

In order to allay this fear, the State rolls out vaccination trials to a limited audience and then presents their results.  

The State releases this info:  

*Around 17,000 individuals across locations, age groups & gender were vaccinated.*   
*The incidence of covid amongst these individuals over a period of 3 months post vaccination was compared with unvaccinated individuals from the same locations/demographics*   
*We note that the difference in covid incidence was statistically insignificant.*   
*The results of the survey are presented herein.*   
*We recommend that everyone get vaccinated as soon as possible*   

You pull out the raw data and this is what you see:    

![State's Evidence]({{ site.baseurl }}/assets/images/2023/statesEvidence.png)

Amongst those who are vaccinated the incidence of covid subsequent to vaccination is actually 0.02% LOWER than those who were not vaccinated.  

How do you turn this around you wonder?  

Half a hour later you come up with this astounding counterfactual:

*Getting vaccinated could increase your chance of contracting covid by 5-7%!*
*Our analysis of publicly available data shows that this is consistent across both urban and rural populations*

![counterfactual]({{ site.baseurl }}/assets/images/2023/counterfactual.png)

Notice that:  
1. On an aggregate basis the incidence of covid is the same whether one is vaccinated or unvaccinated i.e **~6.9%** of the population   
2. The moment we partition along the lines of urban/rural, being vaccinated starts to show a higher incidence of covid positive post vaccination across **BOTH** cohorts i.e Urban: 9.25% vs 8.65% and Rural: 5.09% vs 4.87%   

There is no cherry picking of data here.   
No information has been selectively excluded.  
All we have done is create a partition to change the narrative which is pretty hard to counter.    

![Simpson's Paradox Gif from Wikimedia](https://upload.wikimedia.org/wikipedia/commons/f/fb/Simpsons_paradox_-_animation.gif)

## Is the partition real?
The crux of the problem comes down to the determination of causality.  
**Is there a reason why whether a person is an urban or rural dweller should stand to make a difference to their physiological ability to contract covid?**  
If the answer is NO then the partition is nonsensical.   
There are real partitions of course.   
The best case in point being the [UC Berkeley Gender Bias Lawsuit](https://setosa.io/simpsons/)  

Alternately if the partition was along the lines of gender or age it might be worth a closer look:  

![Counter CounterFactual]({{ site.baseurl }}/assets/images/2023/countercounterfactual.png)

At last some kind of explanation emerges.  
It is possible that those under 60, who represent the working age population, dropped their guard and returned to work / commenced travel post vaccination leading to the slightly increased incidence. The over 60 cohort, otoh, continued to stay vigilant and incidence of covid reduced.  

On Twitter at least, I see only one really sharp person repeatedly calling out faux partitions when it comes to covid analyses:  

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This idiot doen&#39;t get Simpson&#39;s paradox.<a href="https://t.co/6GGE0MsB59">https://t.co/6GGE0MsB59</a> <a href="https://t.co/gECoeIJb0P">https://t.co/gECoeIJb0P</a></p>&mdash; Nassim Nicholas Taleb (@nntaleb) <a href="https://twitter.com/nntaleb/status/1553326397388619776?ref_src=twsrc%5Etfw">July 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">LAST BS BUSTING OF 2022<br>1/ Epoch Times, the conspiracy sheet, claims boosted is worse than vaxxed &amp; report claims by Robert Malone as to the ineffectiveness of vaccines. Then provide data showing EFFECTIVENESS of vaxx (up to 92% lower death) and they fall for Simpson&#39;s paradox. <a href="https://t.co/QuWQMIueW4">pic.twitter.com/QuWQMIueW4</a></p>&mdash; Nassim Nicholas Taleb (@nntaleb) <a href="https://twitter.com/nntaleb/status/1609320690636800007?ref_src=twsrc%5Etfw">December 31, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Simpson&#39;s paradox.<br>Why is it so hard?<a href="https://t.co/6GGE0MsB59">https://t.co/6GGE0MsB59</a> <a href="https://t.co/OvGcGYWV3R">https://t.co/OvGcGYWV3R</a></p>&mdash; Nassim Nicholas Taleb (@nntaleb) <a href="https://twitter.com/nntaleb/status/1612947159787118593?ref_src=twsrc%5Etfw">January 10, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Avoiding Inadvertent Groening

Every data point comes with a far longer list of features/attributes than in the past making a zealous data analyst prone to inadvertent groening.   

Here are a few things one can do to avoid unintentional groening:  

**1. Inversion**
Invert your null hypothesis and attempt to prove it.  

**2. Parsimonious Partitions**
If you cannot make sense of why a partition produces counter intuitive results examine/avoid that partition.  

**3. Keep it Simple**
Build and operate simple models as far as possible so that explainability is maintained.  

**4. Measure what Matters**
Collect as much data as possible that pertains to relevant / causal features. Avoid the temptation to create more features just because data has been collected if there is no clarity on causal impact.   