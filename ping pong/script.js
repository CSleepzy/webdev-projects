var btn = document.getElementById('b1');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 150;
canvas.height = 150;
// ctx.beginPath()
// ctx.fillStyle = "red";
// ctx.fillRect(75, 75, 50, 30);
// ctx.closePath()
x_vel = 2
y_vel = 2
var ball_size = 20
var paddle_width = 15
var paddle_height = 10
var paddle_color = "purple"
var ball_color = "white"
var position_paddle = 0
var ball_x = 50
var ball_y = 50
var paddle_left_x = 100
var paddle_left_y = 250
var paddle_right_x = 700
var paddle_right_y = 250
var i_keycode = 73
var k_keycode = 75
createPaddle(paddle_width, paddle_height, paddle_color, paddle_left_x, paddle_left_y)
createPaddle(paddle_width, paddle_height, paddle_color, paddle_right_x, paddle_right_y)
createBall(ball_x, ball_y, ball_color, ball_size)
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    moveBall()
    createBall(ball_x, ball_y, ball_color, ball_size)
    createPaddle(paddle_width, paddle_height, paddle_color, paddle_left_x, paddle_left_y)
    createPaddle(paddle_width, paddle_height, paddle_color, paddle_right_x, paddle_right_y)
    window.requestAnimationFrame(animate)
}
function handleKeys(event) {
    switch(event.keyCode){
        case up_keyCode: {
            paddle_right_y += 5
            break;
        };
        case i_keycode: {
            paddle_left_y -= 5;
            break;

        case k_keycode: {
            paddle_left_y -= 5;
            break;
       }
    }
}
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
    ctx.fill(path)
}
function moveBall() {
    if (ball_x + x_vel > canvas.width || ball_x + x_vel < 0) {
        x_vel *= -1
    }
    if (ball_y + y_vel > canvas.height || ball_y + y_vel < 0){
        y_vel *= -1
    }
    ball_x += x_vel
    ball_y += y_vel
}