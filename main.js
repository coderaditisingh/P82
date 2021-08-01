var color ="blue";
var width_l = 5;
var current_Y_axis="",last_P_Y="";
var current_X_axis="",last_P_X="";

mouseEvent="empty";

var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",mouse_down_now);
function mouse_down_now(e){
color=document.getElementById("color").value;
width_l=document.getElementById("width_l").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouse leave";
    }

    canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouse up ";
    }

    canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_X_axis=e.clientX-canvas.offsetLeft;
    current_Y_axis=e.clientY-canvas.offsetTop;
        mouseEvent="mouse move";
    
        if (mouseEvent=="mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle= color;
            ctx.lineWidth = width_l;
            console.log("last Pos Y="+ last_P_Y+ "last Pos X="+last_P_X);
            ctx.arc(current_X_axis,current_Y_axis, radius,0);
        }
        last_P_Y=current_Y_axis;
        last_P_X=current_X_axis;
            
    }

    function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}


