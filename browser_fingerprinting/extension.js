/*function detect_extension(){
        var ext = [];
        var url = ['chrome-extension://mlomiejdfkolichcflejclcbmpeaniij/app/images/apps_pages/tracker.png#adblocker', 
        'chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/icons/icon24.png#ghostery']
        for(u in url){
            var h = document.getElementsByTagName("body")[0];
            var i = document.createElement("img");
            i.id = 'dex';
            i.src = url[u];
            h.appendChild(i);
            var x = (dex.naturalHeight!== 0);
            //console.log(x);
            if(x){
                ext.push(url[u].split('#')[1]);
            }
            h.removeChild(i);
        }
        return ext.toString();
}
*/
$(document).ready(function(){
    $("#ext").ready(function(){
        var ext = [];
        var url = ['chrome-extension://mlomiejdfkolichcflejclcbmpeaniij/app/images/apps_pages/tracker.png#adblocker'];
        for(u in url){
            l = url[u];
            var h = document.getElementsByTagName("body")[0];
            var i = document.createElement("img");
            i.id = l.split('#')[1];
            i.src = l;
            h.appendChild(i);
            i.onload=function(){
                $("#ext").append(l.split('#')[1]);
            };
            h.removeChild(i);
        }
    });
});