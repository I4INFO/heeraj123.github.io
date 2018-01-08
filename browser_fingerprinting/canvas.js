function generateHash(){
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  var txt = "Amrita Privacy checker";
  ctx.textBaseline = "top";
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125,1,62,20);
  ctx.fillStyle = "#069";
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText(txt, 4, 17);
  var dataURL = c.toDataURL();
  var hash = CryptoJS.MD5(dataURL);
  return hash;
}
