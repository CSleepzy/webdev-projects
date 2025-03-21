var btn = document.getElementById('b1');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 150;
canvas.height = 150;
ctx.beginPath()
ctx.fillStyle = "red";
ctx.fillRect(75, 75, 50, 30);
ctx.closePath()