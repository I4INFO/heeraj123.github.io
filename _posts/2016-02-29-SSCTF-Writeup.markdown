---
layout:     post
title:      "SSCTF Angular Js Bypass"
subtitle:   "XSS"
date:       2016-02-29 21:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>The question were very nice, but I didn't manage to solve maybe a bad luck for me. I was waiting for this writeup, especially
this one which had most number of the solves. I spent most of time this challenge.</p>

<p>Well by seeing the challenge, the basic idea one gets is that this challenge is a reflected XSS, '<' and '>' tags were replaced, as there was no chance of getting an XSS inside p tag. So when I checked the source the 2 think which I got strike was UTF-8 and angular js.</p>

<p>I read about it when I was googling, tried out, but my payload were not giving me the xss. I lost my hope and went with <a href="http://htmlpurifier.org/live/smoketests/xssAttacks.php">this</a>, this ended me with no solve. Anyway lets come to the solution.</p>

<p>Angular Js is one of the popular javascript framework, which has mainly responsible for server-side template injection, as well as 
it can even give you cross site scripting using angular js sandbox escape. This framework is written by google, when you see the source 
you can view the p tag containing ng-app, which is responsible for client side template injection, even if the user input is html-encoded, thats most important.</p>

<p>You can use the <a href="http://jsfiddle.net/2zs2yv7o/">jsfiddle</a> for checking the different expression and rendering. Anyone who can input double curly braces can execute angular expression. Angular expressions can't do much harm on their own, but when combined with a sandbox escape we can execute arbitrary JavaScript and do some serious damage.</p>

<p>We use htmlspecialchar() as XSS protection,but here inside a ng-app tag we are using, getting XSS is very easy. The angular js will itself convert it.</p>

<p>For detailed version all the payload of cure53, portswinger please <a href="http://blog.portswigger.net/2016/01/xss-without-html-client-side-template.html">visit</a>. Definetly a must read one, it covers many payloads that you can try.</p>

<p>Every CTF gives you more information, especially these CTF's , I happy that very new vulnerability has been used in CTF.</p>

<p>Thank you for reading the blog! </p>
