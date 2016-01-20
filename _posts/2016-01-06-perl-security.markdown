---
layout:     post
title:      "Security Issue in perl scripts"
subtitle:   "Security flaws"
date:       2016-01-06 14:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>Happy new year readers! One of the domain, where I didn't have look would the perl security issue. So I thought to have a blog on that. I would like to mention,that as language no language has inbuilt security issue's, its the devolper who makes all the issue, same is with the perl. Some bad habits, that makes creates the problem, this can help even the hacker's to take down your system.</p>

<p>Many problem, is validation every input should be properly validated, thus you can avoid most of the troubles. Perl is known as "glue language" , as it make other work for it. For that perl uses two function system() and exec().</p>

<blockquote>system ("cat /usr/stats/$username");</blockquote>

<p>Think that above $username comes from get parameter, if there is no proper validation. Destructive minded user can pass the value ";rm -rf /*". "THE END". One way to avoid this is by.</p>

<blockquote>system ("cat", "/usr/stats/$username");</blockquote>

<p>Here the ";rm -rf /*" will not be wrking but chance of getting the detal by passing "../../etc/passwd". This is much more better since there is no shell here. This applies for both exec and system.</p>

<p>One common problem is that some versions of the Unix "mail" utility will execute a shell command when they see the ~! escape sequence in particular contexts. Thus, user input containing "~!rm -rf *" on a blank line in a message body may cause trouble under certain circumstances.</p> 

<p>The above one was lucky way! But the correct was to first get the dump, that you can get by clicking the error message. The same as above intercept the request , see the code there you have a filter function. So here you has to use some trick , to run function</p>

<p>Rest about the perl security will be soon be updated</p>
<p>Thank you for reading the blog! </p>
