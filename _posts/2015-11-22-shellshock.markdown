---
layout:     post
title:      "Web 150 Math Quiz"
subtitle:   "Hack that Ctf"
date:       2015-11-21 14:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---

<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>This CTF challenge math quiz, there was website in which question were displayed, whenever we refresh a random question would be displayed. That there would be a random function running behind. </p>

<p>I saw something intresting when we select the correct option we could see a error message in the website , which show there is eval() function.</p>

<p>So I thought , we could get shell by eval, so I decided to intercept the request using burp. I intrecepted the request which is sent when we click the option. There was a hint in the question that he has hidden something inside the question. </p>

<p>When I intercepted the option I found that the there was 5 parameter that is 4 parameter index and one question,
the index was showing the current question's index. While Changing the index you can get all the index, we can find that there are 7 question. As a fun , I just gave index 0 , that was very intresting one of the option in that was the flag</p> 

<p>The above one was lucky way! But the correct was to first get the dump, that you can get by clicking the error message. The same as above intercept the request , see the code there you have a filter function. So here you has to use some trick , to run function</p>

<p>You have to provide the parameter $question=phpinfo/**/(), to run the function and get the shell, this is the right way.</p>

<p>Thank you for reading the blog! </p>
