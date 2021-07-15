var me="empty";
var lx,ly;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";
wd=2;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width>992)
{
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
}
canvas.addEventListener("touchstrt",mouse);
function mouse(e)
{
    colour=document.getElementById("colour").value;
    wd=document.getElementById("wd").value;
    lx=e.touches[0].clientX-canvas.offsetLeft;
    ly=e.touches[0].clientY-canvas.offsetTop;
}
    canvas.addEventListener("touchmove",mv);
    function mv(e)
    {
    current_x = e.touches[0].clientX-canvas.offsetLeft;
     current_y =e.touches[0].clientY-canvas.offsetTop;
     
     
  
     ctx.beginPath();
     ctx.strokeStyle = colour; 
    ctx.lineWidth = wd;

    ctx.moveTo(lx,ly);
    ctx.lineTo(current_x,current_y);
      ctx.stroke(); 
 
 lx=current_x;
 ly=current_y;
}
       function clear() 
       { 
           ctx.clearRect(0, 0, canvas.width, canvas.height); 
       }