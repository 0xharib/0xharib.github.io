---
layout: post
title: What do you know about Warangal?
date: 2017-01-12 23:17:38.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- geekery
- polling
tags: []
meta:
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '680224360'

permalink: "/2017/01/12/what-do-you-know-about-warangal/"
---
Hastily written, please excuse typos.

First of all I would like to thank everyone who took the time to take [this poll on Facebook](https://apps.facebook.com/my-polls/form/state-the-state). You guys are fantastic people for having taken the time to do this frivolous poll and I hope it was fun.

Polling has been a topic of interest for a while and it has only been exacerbated by how wrong polls have been all of 2016.

Recently [Suhas Mathur](http://www.suhasmathur.com/)&nbsp;flagged to me this [excellent paper](http://www.eecs.harvard.edu/cs286r/courses/fall10/papers/Prelec10.pdf) on using meta-knowledge to improve polls. It is totally worth reading and if this is your cup of tea you should totally go read it (rather than the rest of this post)

Here is an example from the paper itself:

_As an elementary example, consider the (false) proposition that Chicago is the capital of the state of Illinois. Respondents might form different opinions about the truth of the proposition, depending on whether they knew: (a) that Chicago is a large city, (b) that it is located in the state of Illinois, (c) that Springfield is the actual capital of Illinois, and so on. If the typical person is aware of (a) and (b) but not of (c), then the majority of those queried might vote for the incorrect answer, that the proposition is True. A democratic poll ignores the asymmetry in metaknowledge between respondents who know the right answer and those who do not. Those who know that Chicago is not the capital of Illinois can imagine that many others will be misled. A comparable insight into the opinions of others is not available to those who falsely believe the answer is Yes (22). Our scoring method in effect reweights the votes so as to reflect different levels of metaknowledge associated with each possible answer. If the method works as claimed, the true answer should emerge as the winner, regardless of how many respondents endorse it._

The immediate comparable I could think of in the Indian context was the recent creation of Telangana out of Andhra Pradesh. I picked Warangal as a test case - I expected my peer group to be pretty evenly split in guessing which state Warangal was now part of and I was not disappointed. For good measure I added on 9 other cities of what I thought would be varying degrees of difficulty which were all answered by participants correctly 60% or higher on average.

Warangal on the other hand only 21 of my first 41 participants identified correctly as belonging to Telangana. Could Prelec & Seung's method do better? Was it just guesswork or did the metaknowledge of those that answered correctly have some value?

Prelec & Seung advise the creation of a Bayesian Truth Serum (BTS) in order to identify expert subsets within each cohort. Higher BTS scores should suggest greater expertise and this should in turn result in more accurate results.

I find that the chart below provides significant validation to the concept.

The orange line tracks the average performance of a random subset of participants. For instance my first 5 participants (who were perhaps&nbsp;expert quizzers who&nbsp;got cracking without much prodding) all got the answer correct but those that followed have mixed performance taking the average down to just above 50% towards the end.

BTS Sorting allows us to capture the first 13 correct answers in order before a somewhat monotonic convergence towards the average which is commendable.

![warangal]({{ site.baseurl }}/assets/images/2017/01/warangal.png)

Here is the same method of analysis from Prelec & Seung

![PrelecSeung.PNG]({{ site.baseurl }}/assets/images/2017/01/prelecseung.png)

And finally the real MVP with highest average BTS score is [Mansur Ahamed](https://www.facebook.com/profile.php?id=724344072)&nbsp;who incidentally got all answers&nbsp;correct except Warangal (in all fairness he was tied with someone who chose to remain anonymous by not signing in via&nbsp;on FB)

