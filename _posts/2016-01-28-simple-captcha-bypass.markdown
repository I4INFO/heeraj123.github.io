---
layout:     post
title:      "Captcha Bypass"
subtitle:   "Using python"
date:       2016-01-28 21:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>Sometimes in the CTF , you get problems were you have to solve the Captcha. Today I thought
to write on Captcha bypass, a simple trick using pytesser and tesseract ocr. The
thing used by me is really a simple trick, where you can get the string of some simple Captch.</p>

<p>If you would like to download pytesser, go to this <a href="https://code.google.com/archive/p/pytesser/wikis/README.wiki">link</a>.</p>

<p>Tesseract</p>

<p>Tesseract is an optical character recognition engine for various operating systems. It is free software, released under the Apache License, Version 2.0, and development has been sponsored by Google since 2006. Tesseract is considered one of the most accurate open source OCR engines currently available.</p>

<p>To install tesseract-ocr</p>

<blockquote>sudo apt-get install tesseract-ocr</blockquote>

<p>To get the string in the command line.</p>

<blockquote>tesseract input_image_file output_text</blockquote>

<p>Now we will try OCR with one image using python.</p>

<blockquote>from PIL import Image<br>
import pytesser<br>
<br>
im = Image.open(image_file)<br>
text = image_file_to_string(image_file, graceful_errors=True)<br>
print "=====output=======\n"<br>
print text<br>
</blockquote>

<p>Well this is the simplest way to do this, I will try to update the thread.</p>

<p>Thank you for reading the blog! </p>
