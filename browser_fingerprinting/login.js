$(document).ready(function(){
    $("#login").ready(function(){
        var url = ['https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico#FB'];
        for(u in url){
            ur = url[u];
            var h = document.getElementsByTagName("body")[0];
            var i = document.createElement("img");
            i.id = 'dex';
            i.src = ur;
            h.appendChild(i);
            i.onload=function(){
                //alert(1);
                $("#login").append(ur.split('#')[1]);
            };
            h.removeChild(i);
        }
    });
});
