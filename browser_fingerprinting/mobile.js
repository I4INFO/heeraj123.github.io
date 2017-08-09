function checkBrowser(){
	var check = false;
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	//Check if the client is mobile
	if (isAndroid){
		return "Android Detected";
	}
	else if(iOS) {
        	return "iOS device Detected";
	}
	else if(navigator.userAgent.match('CriOS')) {    //wouldn't match unless specified
        	return "Chrome for iOS detected";
	}
	else if(navigator.userAgent.match(/Windows Phone/i)){
 		return 'Is a windows phone!';
	}
	else {
       		return "Desktop browser detected";
	}
}
