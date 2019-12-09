var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ball_radius = 10;
var paddle_height = 10;
var paddle_width = 75;
var paddlex = (canvas.width-paddle_width)/2;
var right_pressed = false;
var left_pressed = false;
function draw_ball(){
  ctx.beginPath();
  ctx.arc(x,y,ball_radius,0,Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function draw_paddle(){
  ctx.beginPath();
  ctx.rect(paddlex,canvas.height-paddle_height,paddle_width,paddle_height);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  draw_ball();
  draw_paddle();
  if(x+dx<ball_radius||x+dx>canvas.width-ball_radius){
    dx*=-1;
  }else if(y+dy<ball_radius){
    dy*=-1;
  }else if(y+dy>canvas.height-ball_radius){
    if(x>paddlex&&x<paddlex+paddle_width){
      dy*=-1;
    }else{
      alert("Game Over");
      document.location.reload();
      clearInterval(interval);
    }
  }
  if(right_pressed&&paddlex<canvas.width-paddle_width){
    paddlex+=7;
  }else if(left_pressed&&paddlex>0){
    paddlex-=7;
  }
  x+=dx;
  y+=dy;
}
document.addEventListener("keydown",keydown_handler,false);
document.addEventListener("keyup",keyup_handler,false);
function keydown_handler(e){
  if(e.key=="Right"||e.key=="ArrowRight"){
    right_pressed = true;
  }
  if(e.key=="Left"||e.key=="ArrowLeft"){
    left_pressed = true;
  }
}
function keyup_handler(e){
  if(e.key=="Right"||e.key=="ArrowRight"){
    right_pressed = false;
  }
  if(e.key=="Left"||e.key=="ArrowLeft"){
    left_pressed = false;
  }
}
var interval = setInterval(draw,10);
