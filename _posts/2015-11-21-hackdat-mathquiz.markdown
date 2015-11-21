---
layout:     post
title:      "Web 50 Phone lock 1"
subtitle:   "Hack that Ctf"
date:       2015-11-21 13:45:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-0540814478217300"
     data-ad-slot="5956699124"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>This CTF challenges were good and easy I didn't that good. I was able to solve 2 Questions that both were easy.</p>

<p>The web 50 was a simple md5 crypto challenge. You have phone keypad with you,  it opens its lock when you 
enter the correct 4 digit password</p>

<p>When you look it to the source the challenge is quite easy to understand. You are given the salt, valid i.e 
md5(salt+answer)=valid. The problem is now very easy , I just want to find the answer, I wrote a python program for that.</p>

<p>Exploit:<br>

<blockquote>
import hashlib<br>
<br>
valid ="a70f69cd94d70aaef0965fe1a1b4b0de"<br>
salt  ="405f57e46114e0319737ca54ed9247da"<br>
<br>
for i in range(0,10000):<br>
&nbsp;&nbsp;&nbsp;&nbsp;ch= ""<br>
&nbsp;&nbsp;&nbsp;&nbsp;i=str(i);<br>
&nbsp;&nbsp;&nbsp;&nbsp;if(len(i)<4):<br>
&nbsp;&nbsp;&nbsp;&nbsp;for j in range(0,4-len(i)):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ch+=str(0)<br>
&nbsp;&nbsp;&nbsp;&nbsp;i=ch+i<br>
&nbsp;&nbsp;&nbsp;&nbsp;print "Count : " + i<br>
&nbsp;&nbsp;&nbsp;&nbsp;m = hashlib.md5()<br>
&nbsp;&nbsp;&nbsp;&nbsp;m.update(salt+i)<br>
&nbsp;&nbsp;&nbsp;&nbsp;a = m.hexdigest()<br>
&nbsp;&nbsp;&nbsp;&nbsp;print "md5 : " + a<br>
&nbsp;&nbsp;&nbsp;&nbsp;if(a==valid):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print "Got code!!!"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
</blockquote>

<p>Flag:9a1141fade36998789aa711ba8847b99</p>

<p>Thank you for reading the blog! </p>
