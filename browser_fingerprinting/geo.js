function geo_detect(){
	var url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB0D0P-tqVaMWZKen164mCMxPo1JAAwKk0";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var el = document.getElementById("geo");
			var geolocation = JSON.parse(xhttp.responseText).location;
            var loc = geolocation.lat + ',' + geolocation.lng;
            el.innerHTML = '<a target="_blank" href="http://maps.google.com/maps/place/' 
            + loc + '/@' + loc + ',10z/data=!3m1!1e3"><img src=https://maps.googleapis.com/maps/api/staticmap?zoom=10&size=700x400&maptype=roadmap&markers=color:red%7Clabel:C%7C'
            + loc + '&key=AIzaSyDWO8tV87DC4tCaHOLoADkL71G-jcyBdwk ></a><br><br>';

            var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
                if (xhttp2.readyState == 4 && xhttp2.status == 200) {
                    var locationName = JSON.parse(xhttp2.responseText).results;
                    console.log(locationName)
                    el.innerHTML += '<b>Location Name:</b> ' + locationName[0].formatted_address + '<br>';
                    el.innerHTML += '<b>Local Time:</b> ' + new Date();
                }
            };

            xhttp2.open("POST", 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + geolocation.lat 
            + ',' + geolocation.lng + '&sensor=true', true);
            xhttp2.send();
		}
	};
	xhttp.open("POST",url, true);
	xhttp.send();
}