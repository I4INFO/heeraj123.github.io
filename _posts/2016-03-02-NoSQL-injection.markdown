---
layout:     post
title:      "Web Challenge"
subtitle:   "SSCTF"
date:       2016-03-02 11:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>Web 100</p>

<p>Here you have a website with upload option, the rule is you have to successfully upload the file. That means you have to upload a php file.</p>

<p>Remembering all previous CTF, I tried all those methods, I failed to get the flag. The solution is simple, use a burp suite and analyze the request, change the case of the content type that means make the 'M' of multipart as capital. And the filename should be same as "shell.php"  and content-type:image/png. This was zero day in <a href="http://www.wooyun.org/bugs/wooyun-2015-0125982">wave cms</a>.</p>

<p>The Legend!!!(NoSQL Injection)</p>

<p>NoSQL is also called "Not only SQL" to emphasize that they may support SQL like query language. It has no tabular relations used in relational databases. It is used in many of the top companies such as Google, Amazon and Facebook. Some of the famous NoSQL database are MongoDB,Apache Cassandra and Redis.</p>

<p>NoSQL offers perfomance and scaling benefits but yet the database are still vulnerable to injection attacks. The main problem is that we have 150 NoSQL database, each offer different features and restrictions. So anyone testing should be familiar with the syntax.</p>

<p>Web 300 - Payload</p>

<blockquote>1%27});return%20{title:tojson(db.user.find()[0])}//</blockquote>

<p>Solution <a href="http://806bddce.seclover.com/news.php?newsid=1%27});return%20{title:tojson(db.user.find()[0])}//">link</a></p>

<p>FlagMan(Github Oauth)</p>

<p>Change the github name as given below, then login, you will get the flag. Check this <a href="http://drops.wooyun.org/web/13057">link</a> for more info.</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/img.png" alt="Post Sample Image">
</a>

<p>Thank you for reading the blog! </p>
