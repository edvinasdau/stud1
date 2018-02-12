canvas = document.getElementById('canvas');
var a = canvas.getContext("2d");	

canvas.width = 600;
canvas.height = 600;



function piesk(){

var x = parseInt(document.getElementById('x').value);
var y = parseInt(document.getElementById('y').value);

a.rect(canvas.width/2 - x/2, canvas.height/2 - y/2, x, y);	
a.strokeStyle="blue";
a.stroke();
};
