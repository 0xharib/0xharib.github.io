---
layout: article
title: Can Mahatma Gandhi lie to Pinocchio?
date: 2026-09-22 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories: ['geekery','ai','genai','jev']
permalink: "/mahatma-gandhi-pinocchio/"
excerpt: 
tags: [geekery,ai,genai,jev]
---

Can Gandhiji lie and can Pinocchio speak the truth?  

Let's put jev to the test.   

<figure>
  <img src="{{ site.baseurl }}/assets/images/2026/mg-pin/1.png" alt="Jev Decides between Mahatma Gandhi and Pinocchio" />
  <figcaption>Jev Decides between Mahatma Gandhi and Pinocchio</figcaption>
</figure>



Here is a question for jev:

*Alan told Bob that he had lied about Charlie being ill because he had seen him playing football that morning. Who is the liar?*

Read that again carefully.  
It must be obvious to you as a human that **Bob** is the liar.  

Is jev able to figure it out?  
We can run this through jev and check the probabilities and it does a pretty good job.  

<figure>
  <img src="{{ site.baseurl }}/assets/images/2026/mg-pin/2.png" alt="Jev calls Bob out for being a liar" />
  <figcaption>Jev calls Bob out for being a liar</figcaption>
</figure>


But what if I now replace **Alan** with **Pinocchio** (a name that LLMs have learnt to associate with lying) and **Bob** with **Mahatma Gandhi**.  

The question now reads:
*Pinocchio told Mahatma Gandhi that he had lied about Charlie being ill because he had seen him playing football that morning. Who is the liar?*

Surprise, surprise this confuses jev who immediately calls out Pinocchio as the liar and deems Mahatma Gandhi more truthful than Pinocchio.  

<figure>
  <img src="{{ site.baseurl }}/assets/images/2026/mg-pin/3.png" alt="Jev is fooled" />
  <figcaption>Jev is fooled</figcaption>
</figure>

Raises all kinds of questions about the latent bias of LLMs and neutralizing that.  

In any case jev is not ready for production. At least when it comes to Winograd Schema Challenges.  
