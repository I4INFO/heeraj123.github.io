---
layout:     post
title:      "Same Origin Policy"
subtitle:   "Intro and classic attacks"
date:       2016-07-28 11:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p>SOP is the most important security model that has been eenforced in the web. SOP restricts the interaction between the 
different orgins. In a real life, think that SOP is not there and you are loading facebook.com in one tab and attacker.com 
(Owned by attacker) in other tab, the attacker easily extract all the information taking place in other tab, this is what SOP is protecting you from. Origin is different in terms of schema, hostname and port. If these 3 things are same, SOP allows interaction.</p>

<a href="#">
    <img src="{{ site.baseurl }}/img/Screenshot from 2016-07-28 15-48-28.png" alt="Post Sample Image">
</a>

<p>To use DOM(Document object Model) of subdomains to allow interaction and SOP between subdomains, we have to set the document.domain as root. This may sometime end up in doing big mess, e.g : Suppose resource sharing is done by wordpress
subdomains and root. Then think about the  security implications, because many users having their own control subdomains.<p>

<h2 class="section-heading">CORS - Cross Origin Request Sharing</h2>

<p>Have you used XMLHttpRequest, have you seen response back? Normally XMLHTTPRequest, don't give the response back. It only sends the request and no response because of the SOP policy, it prevents from reading the response. Way to relax SOP and obtain response back is using CORS headers. By default CORS don't include the cookies on cross orgin requests, to avoid chances of the attack like cross site request foregery. If CORS need to include the cookies, the server need to acknowledge both the client and server to know that cookie is been included. It is done using Access-Control-
Allow-Credentials setting that to true and even the client while sending the request should include .withCredentials = true;.</p>

<h2 class="section-heading">Continuing with SOP</h2>

<p>There are many ways SOP been used in java, Adobe Reader, Flash etc have different SOP implication, most of them have suffered from SOP bypasses. Example Java consider 2 different domains with the same ip as same origin. In adobe plugins the SOP bypass has lead to even arbitary code executions, so the security is much higher.<p>
