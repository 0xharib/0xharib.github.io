---
layout: article
title: Where are the New Computer Overlords?
date: 2023-01-22 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: published
categories:
- geekery
- software
- cricket
- Wikipedia
- dbpedia
- ai
- generativeai
- nlu
- stablediffusion
- gpt3
- gpt
- llm
tags: ['geekery','software', 'ai', 'wardleymaps', 'generativeai','nlu','stablediffusion','gpt3','gpt','llm','cricket','Wikipedia','DBpedia']
excerpt: Using a cricket example to examine Google's continued dominance post the advent of IBM Watson and why LLMs might succeed where IBM Watson failed
---

![Ken Jenning's Final Jeopardy! Answer on Feb 16th, 2011]({{ site.baseurl }}/assets/images/2023/computeroverlords.png)

Nearly 12 years ago, IBM Watson bested legendary winners Ken Jennings & Brad Rutter to establish AI dominance in the field of quizzing.  
At that point there was much speculation that Watson, the all-knowing, with the ability to give you precise answers would bring Google to its knees ([here](https://www.marketwatch.com/story/watson-is-just-a-super-search-engine-2011-02-18) is an example).  

This, of course, has not panned out.  

Google has continued to maintain its dominance in Search.

Fast forward to 2023 and my newsfeed is again rife with stories about how Google's dominance is being challenged by the rise of LLMs and ChatGPT with the market awaiting Google's response.  

As a thought experiment, I took a quiz question that happens to be a favourite and tried to imagine how I would go about finding the answer sans Google (Bing, YahooSearch and their ilk)

## The Question

In the past 50 years, who is the ONLY male, overseas-born player to have represented India in ODIs?

Take a moment first to come up with the answer before reading on.

## Contender 1: Cricinfo

Cricinfo has a really underrated Natural Language Query engine called [Ask](https://www.espncricinfo.com/ask)

[Ask has been around for over 15 months now](https://www.espncricinfo.com/story/introducing-askcricinfo-an-artificial-intelligence-based-stats-query-tool-1264610) and I find it to be an excellent alternative to Statsguru on most occasions.

While Cricinfo should have the answers it is likely that they do not possess the birth location info and the results aren't helpful.

![Cricinfo Results]({{ site.baseurl }}/assets/images/2023/askCricinfo.png)

Here is the [link to the query](https://www.espncricinfo.com/ask/cricket-qna/Indian-ODI-players-born-outside-India&tournament=odi)

## Contender 2: Wikipedia

Wikipedia has had it's own fill of press coverage touting it as the Google killer going back to this [2007 Wired Article](https://www.wired.com/2007/11/rumor-wikipedia/)

That said, Wikipedia can be a powerful tool especially if you know how to look beneath the hood and write DBPedia queries.  

I haven't used SPARQL or SNORQL in a while so it took me a good 30 minutes to construct the query correctly but this is what I ended up with:  


    SELECT DISTINCT ?person ?countryOfBirth ?countryOfPlay ?odiDebutYear
    {
    ?person a dbo:Cricketer  .
    ?person dbpedia2:country ?countryOfPlay   .
    ?person dbpedia2:birthPlace/dbo:country* ?countryOfBirth .
    ?countryOfBirth a dbo:Country   .
    ?person dbpedia2:odidebutyear ?odiDebutYear  .
    FILTER(!(?countryOfBirth As :India))
    FILTER(regex(?countryOfPlay, "^India"))
    FILTER(?odiDebutYear > 1980)
    }
    LIMIT 20

![DBPedia Query Results]({{ site.baseurl }}/assets/images/2023/dbpedia.png)

Finally Robin Singh surfaces along with some noise (East Punjab, Calcutta and the British Raj are all classified as Country under DBPedia's ontology)

## Contender 3: ChatGPT

I don't expect ChatGPT to possess encyclopedic knowledge of every capped player and their birth locations.  

While I did expect ChatGPT to fail, it did so in a highly amusing fashion!  

![ChatGPT Lolwut]({{ site.baseurl }}/assets/images/2023/chatGPTlolwut.png)

## And Finally Google

Well Google simply hits it out of the park.

![Google hits it out of the park]({{ site.baseurl }}/assets/images/2023/google.png)

Here is the [search query itself](https://www.google.com/search?{google:acceptedSuggestion}oq=who+is+the+only+Indian+ODI+player+to+be+born+overseas%3F&sourceid=chrome&ie=UTF-8&q=who+is+the+only+Indian+ODI+player+to+be+born+overseas%3F) for you to try out.

## Will LLMs learn to succeed where Watson failed?

*If you're not embarrassed by the first version of your product, you've launched too late* - Reid Hoffman

IBM Watson was introduced to the world:
1. from within the "artificial" universe of Jeopardy! Watson, in a highly structured and well defined setting
2. and managed to perform far exceeding the highest expectations of any viewer 

This did two things:
1. It announced the arrival of Watson with a bang. As a PR exercise it made people sit up and take notice.
2. It created sky-high expectations amongst viewers who believed that Watson's expertise could translate to ANY context.

Generative AI projects/companies have done exactly the opposite.

Generative AI has been made available:
1. to a really broad audience of individual creators & experimenters
2. and made usable in a very broad context, without any fear of failure, open to the criticisms & legal actions of detractors

From a PR perspective this is definitely a mixed blessing.

However this has:
1. Made the potentials & limitations of Generative AI as it stands today clear to users
2. Given rise to a swathe of developer interest in building with these models & working on improving performance in specific contexts

As a result, I suspect that Generative AI will have far greater broad spectrum impact on the world 10 years from today than what IBM Watson has managed to achieve.


