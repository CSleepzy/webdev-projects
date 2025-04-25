var btn = document.getElementById('b1');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 150;
canvas.height = 150;
ctx.beginPath()
ctx.fillStyle = "red";
ctx.fillRect(75, 75, 50, 30);
ctx.closePath()

var circle_diameter = 20
var width_paddle = 15
var height_paddle = 100
var color_paddle = "purple"
var color_circle = "white"
var position_paddle = 0
