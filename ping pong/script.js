var btn = document.getElementById('b1');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 150;
canvas.height = 150;
ctx.beginPath()
ctx.fillStyle = "red";
ctx.fillRect(75, 75, 50, 30);
ctx.closePath()
x_vel = 2
y_vel = 2
var ball_size = 20
var paddle_width = 15
var paddle_height = 10
var paddle_color = "purple"
var ball_color = "white"
var position_paddle = 0
var ball_x = 0
var ball_y = 0
var paddle_left_x = 100
var paddle_left_y = 250
var paddle_right_x = 700
var paddle_right_y = 250
createPaddle(paddle_width, paddle_height, paddle_color, paddle_left_x, paddle_left_y)
createPaddle(paddle_width, paddle_height, paddle_color, paddle_right_x, paddle_right_y)
createBall(ball_x, ball_y, ball_color, ball_size)
function createPaddle(w, h, c, x, y){
    ctx.beginPath()
    ctx.rect(x, y, w, h)
    ctx.closePath()
    ctx.fillStyle = c
    ctx.fill()
}
function createBall(x, y, c, r){
    var path = new Path2D()
    path.arc(x, y, r, 0, 2 * Math.PI)
    path.fillStyle = c
    ctx.fill()
}
function moveBall() {
    if ()
}