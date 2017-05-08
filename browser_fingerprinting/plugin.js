$("#ext").ready(function(){	
	var x=navigator.plugins.length;  
	var txt="";
	for(var i=0;i<x;i++)
	{
  		txt+=navigator.plugins[i].name + "<br/>"; 
	}
	document.getElementById("plugins").innerHTML=txt;
});