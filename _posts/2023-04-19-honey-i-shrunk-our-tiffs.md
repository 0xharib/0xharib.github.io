---
layout: article
title: Honey I shrunk our tiffs
date: 2023-04-18 00:00:00
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
- taxgpt
- promptengineering
- finetuning
- llama
- vicuna
- alpaca
- life
tags: ['geekery','software', 'ai', 'chatgpt','generativeai','nlu','stablediffusion','gpt3','gpt4','gpt','llm','chatgpt','promptengineering','finetuning','llama','vicuna','alpaca', 'life']
excerpt: Are you asking ChatGPT for relationship advice? Don't! Use a local LLM and fine-tune instead.
---

![Just plug in your OpenAI key]({{ site.baseurl }}/assets/images/2023/tiffs1.png)

Over the past 2 weeks I've been wondering about 2 things:   
1. Do you really need local LLMs?   
Surely at some point everyone will come to accept that OpenAI is seeing your PII, the way they got comfortable that AWS, Azure or GCP most likely house your PII today and it isn't on-prem.  
Won't the likes of JP Morgan start to go easy on the use of ChatGPT?  
   
2. Do you really need fine-tuning?  
Prompt engineering (+VectorDBs) seems to work well.  
Fine-tuning with OpenAI doesn't produce significantly better results, is relatively expensive vs prompt engineering, and needs you to work with base models.   
So who really needs fine-tuning?   

### Honey, I shrunk our tiffs   
The Time Traveler's Wife is a book/movie about a man who involuntarily time-travels and meets his wife at different points in the time-line. The movie has often made me wonder how I would interact with my own spouse if I met them at different points in their life.  

I had a lifetime of whatsapp chat history to work with.   

This was finally a great case for production use of both local LLMs (no way I am sending OpenAI my whatsapp history) and fine-tuning (100k messages speak more than an engineered prompt).  
Inspired by Izzy Miller's Robo Boys I fine-tuned Alpaca with two versions:  
- chat history from nearly 10 years ago.
- chat history from more recent years.  
- 
Getting this right took almost a week.  

![Me telling my wife meme]({{ site.baseurl }}/assets/images/2023/tiffs2.png)

I kickstarted generation with conversation starters such as:  
 I am going to be home late today, sorry."  
 What do you want to do this weekend?"  
 Can't seem to reach you. All okay?"  

Neither the experience nor the results were not what I expected.  

## Learnings from the process
Georgi Gerganov (bless his soul), GGML & llama.cpp can have you running Alpaca locally but fine-tuning requires virtual environments, GPUs, cloud services and the rest.   
Prompt generation is a cinch. Fine-tuning and model implementation needs one to to understand & tinker with model params deeply across both training & generation - *batch sizes*, *dropout rates*, *learning rates* and then *temperature*, *top_k* and *top_p*.       
A lot of what OpenAI is throwing at us might just be overfitting based on training data that it has seen.. but we don't seem to care.   
![Just plug in your OpenAI key]({{ site.baseurl }}/assets/images/2023/tiffs3.png)

### The results
**The better half hasn't changed much.. but I have** - I had to go back and browse through conversation history to validate this but it's true.   
**Salience bias** - We remember the dramatic moments in life but the average spousal response is well.. quite mundane.  
**Temperature works quite differently from what I was led to believe** - Cohere has a simple explanation of temperature. I expected that dialling up temperature would dial up the drama but it didn't. Instead it felt like we were starting to channel Krusty the Clown.   

![Just plug in your OpenAI key]({{ site.baseurl }}/assets/images/2023/tiffs4.png)

Can you think of other good production use case for Local LLMs & Fine Tuning?   