var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ball_radius = 10;
function draw_ball(){
  ctx.beginPath();
  ctx.arc(x,y,ball_radius,0,Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  draw_ball();
  x+=dx;
  y+=dy;
  if(y+dy<ball_radius||y+dy>canvas.height-ball_radius){
    dy = -dy;
  }
  if(x+dx<ball_radius||x+dx>canvas.width-ball_radius){
    dx = -dx;
  }
}
setInterval(draw,10);
