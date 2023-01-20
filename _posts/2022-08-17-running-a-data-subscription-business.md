---
layout: article
title: Data Subscription vs Software Subscription Businesses
date: 2022-09-10 00:00:00
type: post
parent_id: '0'
published: false
password: ''
status: draft
categories:
- business
- software
tags: ['software','business']
excerpt: Running a data subscription business is distinctly different from running a SaaS business
---
## The backstory

In 2017 I co-founded a Data subscription business (DaaS) for the Indian Listed Equities market. 

DaaS businesses can, from the outside, look and feel like a SaaS business and armed with sage advise from more experienced SaaS founders around us we went about trying to build our DaaS platform as if it were a SaaS business.

Finally, in 2020, after much deliberation and customer feedback we moved in the direction of BYOD ("bring your own data") and our experience started to align more closely with what we had learnt to expect from speaking with classic SaaS founders.

I have since tried to reflect and summarize my learnings about how one should think about DaaS.

**TLDR; With a DaaS business you're signing up for all the challenges of a software business and then some.**

## Why does your customer need you?
Classic SaaS businesses address user problems which can broadly be broken down as:
- Top line problems ("Increase Sales") vs Bottom line problems ("Reduce Costs")
- Vitamins ("Increase Productivity") vs Painkillers ("Helps me retain my ISO certification")

Apart from benchmarking your DaaS problem along these lines it behooves you to additionally consider why your customer chooses to pay for you.
Is it:
1. Data Quality: "Data I get from elsewhere is more error prone" (Bonus: can you come up with a cost of bad data?)
2. Availability: "I can't get this data anywhere else"
3. Timeliness: "I can get this data elsewhere but you deliver it before anyone else does"
4. Insightfulness: "I am able to generate insights from this data which I am not able to elsewhere (at least with the same ease)"
5. Storytelling: "I don't care about your data but your commentary is very useful"
6. Cost: "I get the same data elsewhere but it is more expensive"

## Negative Economies of Scale
Traditional SaaS businesses have positive economies of scale / network effects (think Slack).

Data businesses on the other hand, especially when your customers are participating in a zero-sum game (e.g. stock market trading) tend to have negative economies of scale.

If you have created a truly valuable data product it is likely to be incredibly valuable to your first customer. However it is quite likely that your customer will not be keen to refer you to others in order to "protect their edge". 

Further the value that your data can create is depleted quickly as more customers have access to it until the point that it becomes table stakes across all market participants to get access to your data in order to stay on par with their competitors.

## Enter $$$
Let's assume you've managed to create a truly exceptional DaaS business. Investors take notice and fund a competitor with 3x your $$$ who immediately hires a founding employee from your company. Worse yet, you're a startup and the Goliath you're up against takes notice and has 100x your distribution/reach.

You have to now ask yourself which of the 6 value drivers listed in the previous section can truly be a moat in such a scenario.

> ### Lesson #1 from the school of hard-knocks:
> ***Data Quality, Availability/Differentiation, Timeliness and Cost can be largely solved by throwing $$$ at the problem.***   
> ***Only Insightfulness & Storytelling can be long term moats.***

## Storytelling
**Are you presenting facts (e.g. time series of rainfall by geocode) or are you presenting an interpretation (e.g. "Climate change - what to expect")?**

If your product is largely Storytelling  then you're not in the Tech business - you're in the Content business!

It is worth seriously considering if your product is anything more than an app or website to deliver journalistic content and if you're really a tech business to begin with. You will also likely have to deal with content business challenges such as:

1. Dissemination Loss
Users share logins and users capturing and forwarding content pieces

2. News Cycle Issues
You're only as good as your most recent story - it's hard to build and monetize "timeless" content

3. Brand Attribution to Content Writer
What happens if your most successful Content Writer decides to branch out with their audience?

This makes Storytelling an interesting moat to hold on to but something that in the long term will only deliver content business like returns. Storytelling is a great funnel to attract users who can eventually be monetized through Insightfulness.

## Insightfulness

> Neo : What are you trying to tell me? That I can dodge bullets?  
> Morpheus : No, Neo. I'm trying to tell you that when you're ready, you won't have to.

An insight creation engine when it works is pure magic.

It is akin to shipping Lego blocks and watching your users passionately create and share a million different things that you couldn't possibly imagine.

It means that you no longer need to story tell. Your customers will do it for you.

Most importantly it also means that you can ship the same Lego blocks to every user and they're not complaining.

### Teaching Neo to dodge bullets vs be the One

In a classic SaaS business you might have an intuitive easy-to-use product that customers can start using with little to no training.

As a DaaS business you have to additionally train users to make innovative use of the data that you provide to create insights.

Achieving this is surprisingly hard.

Here is an illustrative story drawn from a first hand example:
1. You poll your customers for what they'd like and there is a top of the pack feature request for analytics.
2. You introduce this feature that allows users to analyze patterns in the underlying data.
3. To get your customers started you write a blog with some examples.
4. Three months go by and you look at user stats - you find that with a few exceptions, the only analytics that are being run in the platform are simple derivatives of your original examples.
5. You talk to the exceptional power users and try to understand what they're doing in your product and try to cross pollinate this with others with poor results.

> ### Lesson #2 from the school of hard-knocks: 
> ***Truly extracting insights from data requires creativity***

---

## Manifesting Insightfulness at Scale

Summarizing the story so far:
1. You want to be a DaaS business and not a Content business
2. You want to build Insightfulness as a moat over Data Quality, Availability, Timeliness or Cost

How would you go about creating a DaaS that delivers Insightfulness?

Here are some ideas:

### Focus   

It is generally good startup advise to focus on a narrow problem/set of users when you're getting started.

The important qualifier here is that narrow problem is **not** tantamount restricting yourself to just fewer data sets. Doing that is what I would call "erroneous supply side substitution" (ES3).

Rather list out insight problems. Here is an example to help you differentiate:

> **Insight Problem:**   
> *I need to figure out if this IPO is fairly priced*

> **Erroneous Supply Side Substitution (ES3):**   
> *I need price data of every listing from the past 5 years*

It is worth understanding deeply how customers seek to solve their insight problems before running off to procure data sets.

A more nuanced second order means of falling into ES3 is to ask the wrong question of your customer:

> **Incorrect**   
> *What data feeds do you look at to solve this problem?*

> **Correct**   
> *What would you solve this problem?    
> OR    
> What would you need to solve this problem?*

### Services

When customers struggle to derive insights from your DaaS one tempting solution is to add a services layer on top and to charge for it on a per hour basis.

While in the short term this is likely to deliver results in the long term this is likely to be a serious detriment to your ability to scale as the bottleneck becomes your ability to recruit researchers who can process your data to answer customer questions and is the road to becoming a content/research business.

So what is the alternative?

### Community

One must start by acknowledging that there are 2 classes of users:  

> Those that get paid to **ask the right questions**  

AND   

> Those that get paid to **find the right answers** 

The two might very likely not be the same.  

Paying customers are more likely to be decision makers who get paid to ask the right questions.  

This means that as a DaaS we need to cultivate a community of users "Data Analysts" on our platform who can deliver those answers.    

Having such a data analyst community (DAC), once it achieves a certain critical mass, delivers several benefits: 

1. The DAC takes over responsibility for transforming paying customers' insight problems into DaaS problems that your team can work on
   
2. The DAC self-selects for pro-users who can get the most out of the DaaS elevating the product and allowing you to build rich features that will get exploited by users

3. Both DAs and paying customers get to decide whom they want to work with

4. As the DaaS grows, DAC members can specialize on specific data elements or types of analyses

5. Negative economies of scale arising from a purely data feed supplying business are counteracted by the artisanship that the DAC brings to the table

With an enthusiastic DAC fuelled by paying customers we can finally start to see the magic happen.

That said with the introduction of a community, our DaaS has now become a two-sided marketplace sitting atop Data services.   

This introduces a classic Cold Start problem where the easy side is definitely the building the Community rather than finding paying customers.

How to go about building a Community, is however, a post for another day.