---
layout: article
title: Harnessing Hallucinations - Guiding LLMs to Success
date: 2023-03-21 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: published
categories:
- geekery
- software
- ai
- generativeai
- nlu
- stablediffusion
- gpt3
- gpt
- llm
- gpt4
- chatgpt
tags: ['geekery','software', 'ai', 'chatgpt','generativeai','nlu','stablediffusion','gpt3','gpt4','gpt','llm']
excerpt: Large Language Models (LLMs) constantly hallucinate, sometimes producing accurate and profound outputs, but often going awry. For most, building on top of existing large scale LLMs makes the most sense. Builders will need to tease out high quality & reliable results from these models through prompt engineering & creative orchestration.
---

### The Doors of Perceptrons

![The Doors of Perceptrons]({{ site.baseurl }}/assets/images/2023/mushroom.jpeg) 

All Large Language Models hallucinate. In fact, all that LLMs do is hallucinate.   

At times they do so in such accurate and profound ways that seem to convey sentience and stoke AGI fears.  

At other times they go spectacularly wrong eliciting memes, spreading misinformation & making the case for better alignment.  

As builders, working on top of existing LLM offerings, we should primarily concern ourselves with making LLMs hallucinate in useful and predictable ways.  

### Fine Tuning vs Prompt Engineering
Given a pre-trained model & a certain baseline performance on a task, we can choose to do a few things:  
1. Train the model further i.e Fine Tuning
2. Freeze the model and work on better inputs i.e Prompt Engineering
3. Something in between

Of the three approaches, the image generation world has clearly chosen #2 and we've been witness to fascinating inputs such as the one used to create the mushroom above:   

> Surreal giant mushroom on top of a hill, detailed, path up the hill, Paper art, paper quilling, paper illustration, Pointillism, Magical, Fantasy, Sunset, vast landscape, Nathan Walsch, hyperdetailed, hdr,  beautiful lighting, volumetric lighting, fantasy, otherworldly, An Jung-hwan, 8k, concept art, illustration

When it comes to language models while large purpose-built products might choose to fine-tune, MVPs for new and emerging use cases might be better off using prompt engineering to guide hallucinations. Beyond early jailbreaks such as DAN and Sydney, text generation prompts haven't gained quite the same popularity as image prompts but I expect to see this changing over the coming weeks.

### The Token Size Problem
The path to useful hallucinations presents us with yet another challenge. The most recent version of GPT supports a maximum of 4097 tokens or about 3000 words worth of prompts.  
There are many use cases which will need to work with a larger corpus of data. For example:   
- A book review app that is looking to read an entire book to write reviews
- A source material look up or citation application
- An emulator chatbot which can answer questions such as "What do the scriptures tell us about X"
- An eDiscovery tool using LLMs

The prevailing set of ideas to deal with this problem all start with breaking down source material into smaller chunks and then:  
1. **Dripfeeding Microdoses** - Iteratively supplying consecutive chunks of source material along with "a story so far" summary generated in the previous iteration. This is expensive, time consuming & suffers from recency biases.
2. **Detoxified Dosage** - Using a "traditional" NLP approach such as word-embeddings or simple key word match even to supply only task specific chunks to the LLM for processing.
3. **Hallucinate to Detoxify** - HyDE takes a different approach to detoxification
- Step 1: Elicit a response from the LLM without localized context
- Step 2: Use the faux response to discover relevant source material
- Step 3: Feed relevant source material to regenerate response
This approach is not without its shortcomings but it is without a doubt frightfully clever.  
![A Cunning Plan]({{ site.baseurl }}/assets/images/2023/blackadder.jpeg) 

### The way ahead
It is quite possible that one day we might engineer a model that is so large, efficient and well-read that prompt engineering is a thing of the past and we might not have to worry about token sizes.  
But until that day it seems that we will continue to rely on human ingenuity & artisanship to build functionally useful & reliable applications on top of LLMs.  

