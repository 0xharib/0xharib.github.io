---
layout: article
title: Reading the GPT leaves - Making sense of LLMs as a CXO
date: 2023-04-18 00:00:00
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

If you’re a CXO who saw ChatGPT and went “Wow, that thing our customers have been asking for which we couldn’t deliver? Well we can do that now.”, good for you and you can stop reading here.   

More likely though, you looked at ChatGPT, thought that’s interesting. Then 5 minutes later you went back to the real world, the new hire that needs to be closed, your next growth milestone & meeting this quarter's targets.   

In the weeks that followed though, ChatGPT kept resurfacing. You heard about it over watercooler talk, coffee catch ups and dinner parties.   

Then without warning, a million experts, who until last year, were telling you want crypto tokens to buy, turned up on Twitter, LinkedIn and even TikTok/Insta your feed to tell you why you must be paying attention, almost always with listicles, to this life changing piece of tech.    

Fine, you said - Maybe this is something I should pay attention to.   

You made some calls, read some posts, signed up to some newsletters and even watched some videos.   

But now that you’ve dipped your toes in the water you’re inundated with new information every day, especially the 20 new backronyms being coined each day.    

You bring it up in your monthly management meeting. Your VP Product starts hyperventilating about the potential of ChatGPT while your CTO/Head of Analytics tells you that he has been working on AI since God was a child.   

At the end of an hour, the team has agreed that you will integrate ChatGPT into your product. I mean this is the least you can do right?   

As you walk away from the meeting you have a sense of deja vu. It seems like you had a similar meeting 18 months ago about Blockchain and 18 months before that before that Machine Learning.   

So what more should you be doing?

### Play around with ChatGPT

Not just you, but every employee in your firm MUST be allowed to use ChatGPT in their daily jobs.   
Incognito mode is already available and a business version of ChatGPT is on its way. While everyone should be educated about the liabilities of pasting confidential information or PII into GPT, these changes should allow you to rest easy even if someone inadvertently does make a mistake.

This first step is incredibly important because it allows your firm to understand & appreciate GPT's potential.

### Examine your high priority objectives

Are there problems or features that are a high priority for you internally or your customers/clients?
Can you or your team see the potential for GPT to change the way things get done?
Solve problems 10x better than existing solutions or better yet solve unsolved problems?
These are definitely spaces worth examining.

### Before adding GPT into your product

There are typically two objectives to introducing GPT into your product:
- To improve / solve a product ask or a validated problem which directly improves business/revenue outcomes
- To position your firm as being AI or LLM enabled to your customers   

I would strongly advocate refraining from the latter.    

## Reading the GPT leaves

![How much do I care?]({{ site.baseurl }}/assets/images/2023/tealeaves.png)

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

### High Context Use Cases

**RATL** (Regulatory, Accounting, Tax & Legal) documents, Life Sciences, Technical Documentation & a number of other high context small markets will still need custom solutions built on top of AI.

> Here I have to mention [the work being done by Prof Andrew White and his team](https://thewhitelab.org/). His work is technical and high context to the point of being inaccessible to those who understand deep learning but not Chemistry or Chemical Engineering. I expect to come across many more examples of such skilful & creative usage of LLMs in context rich problem spaces.

A good thumb rule here is to dump some context about your domain into ChatGPT Plus and to examine if its native answers are sensible. If it isn’t you’re probably in luck.

### How vs What Use Cases
I am a huge fan of anagrams and word games and I periodically benchmark GPT by asking for a word ladder that transforms one five letter word into another (e.g. transform WHALE to KRILL by changing 1 letter at a time).  

GPT does abysmally at this task (and many other math challenges as well). However it does a great job at writing code that can solve this problem given a list of 5 letter English words.   
Coding is just the tip of the iceberg here and we might see interesting context specific use cases where a lot of time and effort goes into answering a complex “how” question on a one-time or infrequent basis. But once this question is answered, the answer itself can be abstracted away and used to create 10x improvement in perpetuity by improving a business process.

> One well recognized shortcoming of LLMs is their ability to plan. However they can deliver code. There is some [interesting work happening in the space of getting GPT to spit out PDDL (Planning Domain Definition Languge)](https://arxiv.org/abs/2304.11477) to get around this problem.  

     

   
### Closing Thoughts

From a CXO perspective:
- Spend time exploring GPT - both you and your team should spend time understanding and playing around with the product.
- Develop a framework for what kind of problems you'll spend time exploring.
- Avoid building “cool” products which have only PR value. Instead focus on identifying critical problems where GPT could make a meaningful difference.



