---
layout: article
title: Reading the GPT leaves - Making sense of LLMs as a CXO
date: 2023-04-28 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: published
categories:
- software
- ai
- generativeai
- gpt3
- gpt
- llm
- gpt4
- chatgpt
tags: ['software', 'ai', 'chatgpt','generativeai','gpt3','gpt4','gpt','llm','chatgpt']
excerpt: Is ChatGPT a fad? As a CXO how much should you really care?
---

![How much do I care?]({{ site.baseurl }}/assets/images/2023/howmuchdoIcare1.png)

## How much should you care about ChatGPT?

Let me know if this sounds familiar.

A few months ago, you came across ChatGPT and thought, "That's intriguing."
However, you quickly returned to pressing matters, such as closing new hires, worrying about hitting growth milestones, and meeting quarterly targets.

But that wasn't the last of it.   

In the weeks that followed though, ChatGPT kept resurfacing. You heard about it over watercooler talk, coffee catch ups, team outings and dinner parties.   

Then one fine day, without warning, a million experts, who until last year, were telling you want crypto tokens to buy, turned up on Twitter, LinkedIn and even TikTok/Insta your feed to tell you why you must be paying attention (always with listicles), to this life changing piece of tech.    

At that point you gave in.   

You made inquiries, read articles, subscribed to newsletters, and watched some videos. But soon you find yourself overwhelmed by a constant influx of information.

ChatGPT comes up in your monthly management meeting. Your VP Product starts hyperventilating about the untapped potential of ChatGPT while your CTO/Head of Analytics tells you that he knows all about it because after all, he has been working on AI since God was a child.   

An hour goes by. Your team has finally agreed that you will integrate ChatGPT into your product. This is the very least you can do right? 

Tasks are assigned and people promise to "take things offline".   

As you walk away from the meeting you have a sense of deja vu. It seems like you had a similar meeting 18 months ago about Blockchain. 18 months before that before that it was Machine Learning.   

Are you doing enough? Or is this a passing fad you should just ignore?   

If you relate to any of the above, here are a few things to keep in mind as you navigate the world of Large Language Models like GPT.

### 1. Play around with ChatGPT

Not just you, but every employee in your firm MUST be allowed to use ChatGPT in their daily jobs.   
Incognito mode is already available and a business version of ChatGPT is on its way. While everyone should be educated about the liabilities of pasting confidential information or PII into GPT, these changes should allow you to rest easy even if someone inadvertently does make a mistake.

This first step is incredibly important because it allows your firm to understand & appreciate GPT's potential.

### 2. Examine your high priority objectives

Are there problems or features that are a high priority for you internally or your customers/clients?
Can you or your team see the potential for GPT to change the way things get done?
Solve problems 10x better than existing solutions or better yet solve unsolved problems?
These are definitely spaces worth examining.

### 3. Why is GPT going into your product?

There are typically two objectives to introducing GPT into your product:
a. To improve / solve a product ask or a validated problem which directly improves business/revenue outcomes
b. To position your firm as being AI or LLM enabled to your customers   

I would strongly advocate refraining from the latter.    

## Reading the GPT leaves

![Tea Leaves]({{ site.baseurl }}/assets/images/2023/tealeaves.png)

The past few weeks have seen a flurry of products related to and enabled by the LLM ecosystem. Having used, dissected and observed market reaction to a number of these, I've tried to develop a framework for what makes a successful GPT driven product.   

For the purpose of this discussion we're going to ignore the infra layer LLM companies,  VectorDBs, GPU manufacturers etc.   

### 1. Creativity & Large Volumes of Private Data

#### 1(a). Large Volumes of Private Data

Any problem that requires parsing a sizable volume of private documents or data is intractable to ChatGPT out of the box.   
For now private could just mean a website that ChatGPT hasn’t trained on but I believe that unless the data is truly private, this won’t be defensible once **ChatGPT Browsing** becomes widely available.  
Note that **ChatGPT Business** getting rolled out solves for secure usage of private data & potential future token size increases can address a number of use cases which breach current token size limits.  

#### 1(b). Creativity

Simple information retrieval, using GPT on an underlying corpus, in most situations is not a defensible product. To be truly defensible, one needs either some form of abstractive summarization (beyond simply quoting snippets from the underlying data) or synthesis (drawing conclusions, combining ideas or facts, generating arguments or counterarguments).  
Defensibility here likely goes beyond just writing clever prompts (which can be easily replicated by others).    
Truly remarkable solutions will rely on something more such as innovative use of databases, combining public with private data or blending traditional programming techniques with GPT use.

> The best example of this use case is [kapa.ai](https://kapa.ai) that does Automated Q&A on Product Documentation and > I expect in a few days [dexa.ai](dexa.ai) (sign up for it if you listen to podcasts) will get there too.

### 2. High Context Use Cases

**RATL** (Regulatory, Accounting, Tax & Legal) documents, Life Sciences, Technical Documentation & a number of other high context small markets will still need custom solutions built on top of AI.

> Here I have to mention [the work being done by Prof Andrew White and his team](https://thewhitelab.org/). His work is technical and high context to the point of being inaccessible to those who understand deep learning but not Chemistry or Chemical Engineering. I expect to come across many more examples of such skilful & creative usage of LLMs in context rich problem spaces.

A good thumb rule here is to dump some context about your domain into ChatGPT Plus and to examine if its native answers are sensible. If it isn’t you’re probably in luck.

### 3. How vs What Use Cases
I am a huge fan of anagrams and word games and I periodically benchmark GPT by asking for a word ladder that transforms one five letter word into another (e.g. transform WHALE to KRILL by changing 1 letter at a time).  

GPT does abysmally at this task (and many other math challenges as well). However it does a great job at writing code that can solve this problem given a list of 5 letter English words.   
Coding is just the tip of the iceberg here and we might see interesting context specific use cases where a lot of time and effort goes into answering a complex “how” question on a one-time or infrequent basis. But once this question is answered, the answer itself can be abstracted away and used to create 10x improvement in perpetuity by improving a business process.

> One well recognized shortcoming of LLMs is their ability to plan. However they can deliver code. There is some [interesting work happening in the space of getting GPT to spit out PDDL (Planning Domain Definition Languge)](https://arxiv.org/abs/2304.11477) to get around this problem.  

     

   
## Closing Thoughts

From a CXO perspective:
- Spend time exploring GPT - both you and your team should spend time understanding and playing around with the product.
- Develop a framework for what kind of problems you'll spend time exploring.
- Avoid building “cool” products which have only PR value. Instead focus on identifying critical problems where GPT could make a meaningful difference.



