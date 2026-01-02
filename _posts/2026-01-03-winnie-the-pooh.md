---
layout: article
title: Winnie the Pooh - Revisiting The Hundred Acre Wood with AI
date: 2026-01-03 00:00:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories: ['geekery','genai', 'agents','books']
tags:
- books
- geekery
- genai
- agents
permalink: "/pooh/"
excerpt: Using AI to continue the legacy of A A Milne and Peter Dennis
---

![Winnie the Pooh toy set at the Museum of Brands London]({{ site.baseurl }}/assets/images/2026/pooh0.png)


![Winnie the Pooh toy set at the Museum of Brands London]({{ site.baseurl }}/assets/images/2026/pooh1.png)


# Winnie the Pooh

Like everyone else, I spent the year end break tinkering with Claude Code and Codex.  
One of the most delightful rabbit holes came from kiddo.

We both love Peter Dennis's rendition of [**Winnie the Pooh**](https://www.downpour.com/products/book-3397) and [**The House at Pooh Corner**](https://www.downpour.com/products/book-3404?variant=49394082775344).

Alas there are only two books and about twenty stories.

Kiddo asked AI could help write more. Pooh is out of copyright, so it felt fair to try.  

We now have about 20 new stories. It took many iterations to get the pipeline right.  
Codex was absolutely up to the task.  

## The rules we set

We wanted new stories that felt like they belonged in A. A. Milne's world.  
That meant sticking to a few non-negotiables:

1. **Stay faithful to the characters** - Pooh is gentle and literal, Piglet is anxious but brave, Rabbit is efficient and fussy, Eeyore is dry, and Tigger never stops bouncing.  
2. **Keep the language simple and warm** - short sentences, gentle humor, and a clear resolution.  
3. **No anachronisms** - no modern references, no tech metaphors, no 2020s slang.  
4. **Be inspired by Peter Dennis, not derivative** - capture the cadence and charm without copying his voice or anyone else's.  

## The pipeline (after ~40 hours of work)

We tried a bunch of prompt stacks before this settled into something stable:

- We have a pretty strong system prompt which can take ideas: season, setting, main characters, and a tiny conflict.  
- Draft the story in Milne-ish cadence.  
- Run a consistency pass to catch out-of-character lines and any modern artifacts.  
- Edit for warmth and add small motifs (honey, rumbly tummies, spelling quirks).  
- Final polish, title, and a quick re-read with kiddo.  

Now we can generate new stories on the fly, and they stay surprisingly faithful to the originals.  

## Turning it into an audiobook

[ElevenLabs](https://elevenlabs.io/) made the audio pipeline feasible.  
We were careful to be inspired by, but not use verbatim, Peter Dennis's voice or any of the other character voices.  
Getting this right was ridiculously tricky, but Codex helped us iterate fast.  
All voices had to pass muster with kiddo.  
The only quirky thing we did was to make Kanga an Australian woman's voice.  

## The first story

The first story is [here]() for you to read and [here](https://youtu.be/fDx-VPugJOA) for you to listen.  

More to come, if time lets me build.  
