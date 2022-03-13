---
layout: article
title: Using Chinese Remainder Theorem IRL
date: 2017-07-27 20:57:57.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories: []
tags: []
meta:
  _publicize_done_external: a:1:{s:8:"facebook";a:1:{i:17882705;s:38:"https://facebook.com/10158957588680184";}}
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '7553549338'
  _publicize_done_18120460: '1'
  _wpas_done_17882705: '1'

permalink: "/2017/07/27/using-chinese-remainder-theorem-irl/"
---
In 1999 I had the privilege of attending the KRMO (Karnataka Regional Maths Olympiad) camp at IISc. While it didn't do much to improve my math capabilities, it taught me a lot about how to preserve self-esteem when in the presence of materially smarter, sharper & more capable folks.

One of the quaint bits of math that I did learn was the [Chinese Remainder Theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem) and true to its name it has remained in the recesses of my brain since unused as yet another thing I learnt in school which I would never use.

Until today.

Earlier today I uploaded a large number of files into Google Drive in batches of 300 or so, a process that took close to an hour. When the upload was done Google helpfully let me know that some uploads in my last batch had failed.

Further Google Drive has some "helpful features" in that:

a. It creates duplicates of files when you re-upload without checking for conflicts

b. It doesn't tell you the number of files that exist in a folder

I needed a quick way of figuring out how many files I was missing. Since only the last batch failed it was between 0 and 300.

Exasperated I listed contents and started counting the number of files manually. Not surprisingly I quickly lost count. I switched to grid mode and scrolled right down when I saw this:

![pic1]({{ site.baseurl }}/assets/images/2017/07/pic1.png)

I stretched out the window and saw this:

![pic2.png]({{ site.baseurl }}/assets/images/2017/07/pic2.png)

I had an epiphany - this was a job for CRT.

I quickly wrote down the number of files in the last row for different column sizes like this:

```
**Number of Columns &nbsp; Number of Files displayed in last row** 7 6
6 2
5 4
4 2
3 2
```

**The number of files in the last row of each grid represents the remainder when N, the number of files in the folder, is divided by the number of columns being displayed. The question for CRT is to compute the total number of files N in the folder based on these remainders. This looks almost impossible to someone who hasn't seen CRT at work.**

After a few minutes of googling I found the method for reconstructing N here:

http://homepages.math.uic.edu/~leon/mcs425-s08/handouts/chinese\_remainder.pdf

The math works out like so:

1. Drop the 6 column case because we need co-prime divisors
2. Compute the product of the co-prime divisors = z
3. Compute z1..z4 as z/m1...z/m4
4. Compute [multiplicative inverse modulos](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) y1..y4 (this takes a slight amount of effort)
5. Compute SumProduct of Remainders, Divisor Products and MIMs
6. Compute remainder R as the SumProduct modulo z

![Table]({{ site.baseurl }}/assets/images/2017/07/table.png)

CRT now tells us that N must be of the form k\*z + R where k is an integer \> 0

```
k=1 => 420+314 = 714
k=2 => 840+314 = 1154
k=3 => 1260+314 = 1574
k=4 => 1680+314 = 1994
```

I was looking to upload 1579 files and I had transferred at least 1200 until the last batch so 1574 was the number I was after. I was missing just 5 files.

Of course, this hardly solves the problem - I still need to find those 5 and re-upload them. :|

