---
layout:     post
title:      "Cryptopals - Set 1"
subtitle:   "Cryptography"
date:       2016-10-25 05:03:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p>Today I am going to discuss about the Cryptopals Set 1 challenges. Cryptopals is designed in such a way that a beginner can easily step into cryptography. Not only that, It even increases your python scripting skills. I am not going to discuss the solutions, As I don't want others to just make copy of that, there is no use of that. I will just discuss the concept I learnt adn the confusions, I had.</p>

<h2 class="section-heading">Challenge 1, 2</h2>

<p>The first challenge is very easy, you need to just convert the hex to base64. I recommend using python, if you rely on some online websites, tools, you will never be able to learn much about scripting in python. Now challenge 2, now this is only easy. You just need to hex decode and xor, again please python or any programming language you prefer.</p>

<h2 class="section-heading">Challenge 3,4</h2>

<p>Challenge 3 is single Xor, you have to find the key with which the cipher text has been xor'ed. The way I have used is brute force, and checking the result is valid. The word valid here means it is proper english, you can do that using frequency analysis. And the plain text you have to print it out. Challenge 4 is also the same thing, if you have solved the challenge 3, I don't think solving challenge 4 is big mess.</p>

<h2 class="section-heading">Challenge 5</h2>

<p>Next challenge is implementing repeated xor, which is quite easy. In repeated xor, you have to make the key size equal to the size of the cipher. For that you may require to repeat the string, then perform simple xor that we have done in the older challenge. May be if you have made a function to do all this task, you can reimplement it very easily.</p>

<h2 class="section-heading">Challenge 6</h2>

<p>In this challenge, you have to break repeated Xor. This challenge, I took a lot of time because of the edit distance or the hamming distance. Don't see the definition of the hamming distance in wikipedia, it's actually the difference between the bits of 2 string. In the question, they have mentioned about the hamming distance of 2 example string, make sure your function returns that. Next thing is finding the keysize using the hamming distance and normalising it by dividing it with keysize. Then you have to transpose the blocks and get the key. </p>

<h2 class="section-heading">Challenge 7</h2>

<p>In challenge 7,for AES encryption in ECB mode, you can use an python module or openssl in command line. Detect ECB is quite easy, you need to find out pattern which is repeating, it's quite easy. </p>

<p>Thank you for reading my blog, soon I will come with Set2. Please write to me, if you have any kinds of doubt</p>
