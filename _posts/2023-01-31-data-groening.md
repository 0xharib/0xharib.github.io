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

We live in a world today where whether you're a:
- brand pitching to your consumers for adoption
- political party looking for public support on a policy change
- startup pitching to potential investors for your next round of funding
you need to back up your assertions with some data.

In each of these scenarios, data is being used to tell a story. There is a null hypothesis and the data being presented is good only so long as it validates that story.

# Anecdotal Evidence (Favourable Sampling)

The simplest and probably most convincing approach to story telling is to present highly specific anecdotal data. Here is an example:

![Anecdotal Evidence]({{ site.baseurl }}/assets/images/2023/anecdotalEvidence.png)

# Cherry Picking (Favourable Filtering)

Something slightly better and less obvious is cherry picking / selective filtering. There are no more individual stories being presented here but instead a statistic.

![Cherry Picking]({{ site.baseurl }}/assets/images/2023/toothpaste.png)

# Data Groening (Utilizing Simpson's Paradox)

However none of this beats the insidiousness of what I'd like to call Data [Groening](https://en.wikipedia.org/wiki/Matt_Groening) because it utilizes Simpson's Paradox to create a false narrative.

## Simpson's Paradox

![Simpson's Paradox Gif from Wikimedia](https://upload.wikimedia.org/wikipedia/commons/f/fb/Simpsons_paradox_-_animation.gif)

Simpson's Paradox described first by Edward Simpson and [explained beautifully by causality expert Judea Pearl here](https://ftp.cs.ucla.edu/pub/stat_ser/r414.pdf) is a means of partitioning or splitting the underlying data set in a manner that reverses results.

While Simpson's Paradox is largely inadvertent, it can be proactively used to reverse unfavourable conclusions.

## Groening Covid Data

Let us say, for instance, that you're an anti-vaxxer. You're convinced that no one should take the covid vaccine and you'd like to convince your audience of this.

A common fear amongst the masses is that taking the vaccine will itself give one covid.

In order to allay this fear, the State rolls out vaccination trials to a limited audience and then presents their results.

The State says:

*Around 17,000 individuals across locations, age groups & gender were vaccinated.*
*The incidence of covid amongst these individuals over a period of 3 months post vaccination was compared with unvaccinated individuals from the same locations/demographics*
*We note that the difference in covid incidence was statistically insignificant.*
*The results of the survey are presented herein.*
*We recommend that everyone get vaccinated as soon as possible*

You pull out the data and this is what you see:

![State's Evidence]({{ site.baseurl }}/assets/images/2023/statesEvidence.png)

Amongst those who are vaccinated the incidence of covid subsequent to vaccination is actually 0.02% LOWER than those who were not vaccinated.

How do you turn this around you wonder?

Half a hour later you come up with this astounding counterfactual:

*Getting vaccinated could increase your chance of contracting covid by 5-7%!*
*Our analysis of publicly available data shows that this is true across both senior citizens and those under 60 years of age*

![Counterfactual]({{ site.baseurl }}/assets/images/2023/counterfactual.png)

The numbers are factually correct but misleading because they lean on a partition that doesn't aid causality.

On Twitter at least, I see only one really sharp person repeatedly calling this out when it comes to covid numbers:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This idiot doen&#39;t get Simpson&#39;s paradox.<a href="https://t.co/6GGE0MsB59">https://t.co/6GGE0MsB59</a> <a href="https://t.co/gECoeIJb0P">https://t.co/gECoeIJb0P</a></p>&mdash; Nassim Nicholas Taleb (@nntaleb) <a href="https://twitter.com/nntaleb/status/1553326397388619776?ref_src=twsrc%5Etfw">July 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">LAST BS BUSTING OF 2022<br>1/ Epoch Times, the conspiracy sheet, claims boosted is worse than vaxxed &amp; report claims by Robert Malone as to the ineffectiveness of vaccines. Then provide data showing EFFECTIVENESS of vaxx (up to 92% lower death) and they fall for Simpson&#39;s paradox. <a href="https://t.co/QuWQMIueW4">pic.twitter.com/QuWQMIueW4</a></p>&mdash; Nassim Nicholas Taleb (@nntaleb) <a href="https://twitter.com/nntaleb/status/1609320690636800007?ref_src=twsrc%5Etfw">December 31, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Simpson&#39;s paradox.<br>Why is it so hard?<a href="https://t.co/6GGE0MsB59">https://t.co/6GGE0MsB59</a> <a href="https://t.co/OvGcGYWV3R">https://t.co/OvGcGYWV3R</a></p>&mdash; Nassim Nicholas Taleb (@nntaleb) <a href="https://twitter.com/nntaleb/status/1612947159787118593?ref_src=twsrc%5Etfw">January 10, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Avoiding Inadvertent Groening

We collect far more data today than we've done in the past.
Every data point comes with a far longer list of features/attributes irrespective of relevance all.

Here are a few things one can do to avoid unintentional groening:

**1. Inversion**
Invert your null hypothesis and attempt to prove it

**2. Parsimonious Partitions**
If you cannot make sense of why a partition produces counter intuitive results examine/avoid that partition

**3. Keep it Simple**
Build and operate simple models as far as possible so that explainability is maintained.