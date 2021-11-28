canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
mouseevent="";
var LastPositionx;
var LastPositiony;
color="blue";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentpositionX=e.clientX-canvas.offsetLeft;
    currentpositionY=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(currentpositionX,currentpositionY,40,0,2*Math.PI)
    ctx.stroke();
    }
    LastPositiony=currentpositionY;
    LastPositionx=currentpositionX;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}