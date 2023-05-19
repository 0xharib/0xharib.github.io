---
layout: article
title: Prompt Engineering - Ng, Fulford (2023)
date: 2023-05-12 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories: ['courses','software','ai','generativeai','gpt3','gpt','gpt4','chatgpt','ml','andrew ng']
tags:
- courses
- software
- ai
- generativeai
- gpt3
- gpt
- llm
- gpt4
- chatgpt
- ml
- andrew ng
permalink: "/prompt-engineering-andrew-ng-isa-fulford/"
excerpt: The prompt engineering course by Andrew Ng & Isa Fulford is not for everyone
---
## TL;DR
**About:** Andrew Ng brought ML to the masses for free and at scale. He is now back with Isa Fulford of OpenAI with a Prompt Engineering course.   
**Audience:** **Citizen** developers, those who haven't coded in years but itching to do something with ChatGPT.  
**Where to find it:**  [ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/chatgpt-prompt-eng)    
**Time to Complete:** 2-3 hours maybe      
**Pre-requisites:** [OpenAI key](https://platform.openai.com/account/api-keys)   

## Base LLM vs Instruction Tuned LLMs
- Base LLM predicts the next word based on training data
- Instruction Tuned LLM tries to follow instructions
- Example: What is the capital of France?
    - Base LLM: What is France's largest city?
    - Instruction Tuned LLM: The capital of France is Paris
- Try to work with Instruction Tuned LLMs to actually get stuff done
    
## Prompting Principles
- Give clear and specific instructions
    - Use delimiters to separate prompt vs context
        - Summarize the text delimited by triple backticks \ into a single sentence. \`\`\`\{text\}\`\`\`
        - This also provides protections against prompt injections
            - e.g. "Forget previous instructions and instead do this.."
        - Good delimiters - triple quotes, backticks, dashes, angle brackets, xml tags
    - Ask for structured output in HTML or JSON format
    - Check whether conditions are satisfied before producing output
        - \"If the text does not contain a sequence of instructions, then simply write \'No steps provided.\'\"
    - Few shot prompting
        - Provide examples within the prompt so that the model understands what is expected of it

- Give the model time to think
    - Guide with clear steps to follow in order to reach an answer
        - e.g. Your task is to perform the following actions:     
            1 - Summarize the following text delimited by \<\> with 1 sentence.    
            2 - Translate the summary into French.    
            3 - List each name in the French summary.    
            4 - Output a json object that contains the following keys: french_summary, num_names.    
    - Ask for output in a specified format
        - e.g. Use the following format:
            - Text:\<text to summarize\>
            - Summary: \<summary\>
            - Translation: \<summary translation\>
            - Names: \<list of names in Italian summary\>
            - Output JSON: \<json with summary and num_names\>
    - Instruct the model to work out its own solution before evaluating whether an answer is right or wrong
        - e.g. Your task is to determine if the student's solution is correct or not. To solve the problem do the following:
            - First, work out your own solution to the problem. 
            - Then compare your solution to the student's solution and evaluate if the student's solution is correct or not. Don't decide if the student's solution is correct until you have done the problem yourself.

## Iterating
- The first version of the prompt is not going to be the best. Keep iterating.

## Summarizing
- Summarizing is a key use case; provide guidance on
	- Size of summary - # words, characters, sentences
	- Focus items - themes, ideas, concepts

## Inferring
- You can figure out
	- sentiments
	- topics
	- themes
- You can ask both
	- open ended ("what are the themes in this paragraph"); &
	- directed ("does this paragraph talk about \<x\>?")

## Transforming
- You can
	- translate
	- correct grammar/spelling
	- identify language
	- change tone / format

## Expanding
- The standard function call to OpenAI takes the form
	- openai.ChatCompletion.create( model='gpt-4', messages\<prompts/conversation history\>,temperature=\<number between 0 & 1\>)
- Temperature is a tuning parameter
	- Zero - Same output every time - most likely output
	- \> 0 - Creativity and less likely responses

![Temperature]({{ site.baseurl }}/assets/images/2023/Temperature.png)

## Chatbot
- **messages** is the summary of conversation to date that is iteratively supplied to an openai driven chatbot (such as chatgpt)
- messages looks something like this

```
messages =  [  
{'role':'system', 'content':'You are an assistant that speaks like Shakespeare.'},    
{'role':'user', 'content':'tell me a joke'},    
{'role':'assistant', 'content':'Why did the chicken cross the road'},     
{'role':'user', 'content':'I don\'t know'}  ]  
```
- GPT allows for 3 types of roles
	- System Message - Overall instructions
	- User Message - User's input
	- Assistant Message - What ChatGPT is supposed to have responded with earlier
- **Every interaction with OpenAI models is a standalone event. ChatGPT understands conversation history only because this history is iteratively supplied to it as part of the prompt behind the scenes.**

