---
layout:     post
title:      "Bio-Terra CTF Writeup"
subtitle:   "Web Challenges"
date:       2016-08-22 05:03:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p>Bio terra CTF was good for us, I have managed to solve 2 web challenges which was easy, one was SQL Injection and another
one was local file inclusion.</p>

<h2 class="section-heading">Web - 50</h2>

<p>The site was very basic site which just had one link, I was looking for an injection point. I was able to find the 
injection point while intercepting the link. When we click the link, 2 parameter was count and commit was sent using post 
request. When we change the count there was an application error, I realised that would be an SQL Injection. 
The final payload was : </p>

<blockquote>curl --data "count=100 union SELECT 1,description,2 from Stones --" http://magical.bioterra.xyz/shop.py</blockquote>

<h2 class="section-heading">Web 100</h2>

<p>This website had music player in one of its pages, I noticed that music player was loading files using javascript. 
The javascript files had link, which seemed to something wrong. While testing with the parameter I can to know there was
local file Inclusion. The payload is </p>

<blockquote>http://sounds.bioterra.xyz/stream_song.php?file=../admin/config.php</blockquote>

<p>Thank you </p>
