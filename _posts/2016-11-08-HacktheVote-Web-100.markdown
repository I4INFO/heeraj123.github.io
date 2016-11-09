---
layout:     post
title:      "Hack the Vote"
subtitle:   "Web 200"
date:       2016-10-25 05:03:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p>The Hack the Vote CTF was fun, it was made as the theme of US election. I managed to Solve one Crypto50 and Web 200 Challenge.
I will discussing today on web200 challenge. This was a combo attack, with Remote file inclusion and SQL Injection.</p>

<h2 class="section-heading">Clue 1</h2>
<p>I was fussing through the website, I found there was directory traversal.</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/directory.png" alt="Post Sample Image">
</a>

<p>We can see that there are 2 php files, one is default.php and debug.php, in the website they are using only default.php for
all purposes, they are not at all using debug.php. May be debug.php would have suffered from some vulnerability and the default.php would be an patched version of the debug.php</p>

<p>When we open the debug.php, we can see an message.</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/hackthevote1.png" alt="Post Sample Image">
</a>

<p>What I guessed by seeing this is that, it was blocking the users from accessing debug.php using Ip check. So some treasure should be there, otherwise why would they need to block the user from accessing. We have to find some way to bypass this check.</p>

<blockquote>
http://kansas.pwn.republican/download.php?dl=voterregistration
</blockquote>

<p>By seeing this, I thought this is an LFI. Nope, It was not, I tried LFI, it didn't worked. But what I observed was that the get parameter was appended with '.pdf'. Example, here the file named voterregistration.pdf was being downloaded. So that was the reason why LFI was not working. Then What I went next step, I thought of RFI, I was not able to get shell, but I was able to visit any link and able to see the HTML content. This is great.</p>

<blockquote>
http://kansas.pwn.republican/download.php?dl=www.i4info.in
</blockquote>

<p>I was able to see the HTML content of the website mentioned above in burp suite response. So what, now I will try to access debug.php. But debug.php didn't worked showed contents what I needed, It showed the same IP issue. So what I thought, why don't I try accessing through local IP. And It worked!!! </p>

<blockquote>
http://kansas.pwn.republican/download.php?dl=http://127.0.0.1/secure/debug.php?hrj=
</blockquote>

<p>Ok, You may have doubt why I have used the get parameter. Get parameter was used to bypass the append '.pdf'. After going through the debug.php fussing. I found that there was SQL injection in insert context. The challenge was great, thanks to creater and thanks for CTF.</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/hackthevote_flag.png" alt="Post Sample Image">
</a>
