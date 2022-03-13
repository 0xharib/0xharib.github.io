---
layout: article
title: Data Mining Hong Kong Property Prices
date: 2016-03-20 13:52:23.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- geekery
tags:
- "#geekery #hk #property"
meta:
  _publicize_job_id: '20934234785'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:1:{s:8:"facebook";a:1:{i:13846646;s:38:"https://facebook.com/10156607624460184";}}
  _publicize_done_13918324: '1'
  _wpas_done_13846646: '1'

permalink: "/2016/03/20/data-mining-hong-kong-property-prices/"
---
With property prices in HK finally starting to ease looks like it's&nbsp;finally time to think about buying.

Fortunately, for a&nbsp;data&nbsp;junkie like me, a lot of websites, including banks like HSBC, provide detailed historic data on price trends and current bank valuations right down to individual floors and units for each apartment out there.&nbsp;However there don't seem to be easily downloadable CSV files anywhere and getting hold of the data seems to involve a tonne of clicking and form filling.

After examining a few websites I found [Home Price](http://en.homeprice.com.hk/)&nbsp;to have detailed and reliable data as well as a simple and elegant structure and well-suited to scraping.

Finally found some time this weekend to build a quick and dirty [scraper](https://github.com/8u1x0/legendary-broccoli/blob/master/HomePrice.py)&nbsp;(deploy at your own risk!).

Also some&nbsp;[preliminary raw data](https://docs.google.com/spreadsheets/d/1VVrm_bGjXDMOoWjnnc1TLeqY1mIcwVIl7hLS31btl9o/edit?usp=sharing)&nbsp;for just one building.

Happy House Hunting!

IMPORTANT INFORMATION&nbsp;- I do not claim ownership of this data and I am not looking to share or profit from it - it is property of [Home Price](http://en.homeprice.com.hk/about-us/).

