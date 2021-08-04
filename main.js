var color ="black";
var width = "5";
 var current_Y_axis="";
 var current_X_axis="",
// MouseEvent="";

mouseEvent = "empty";
var last_P_Y="" , last_P_X="";

var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",mouse_down_now);
function mouse_down_now(e){
color=document.getElementById("color").value;

// please write width_l instead of width in below
width_l=document.getElementById("width_l").value;

// please write mouseDown use capital D
MouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    MouseEvent="mouseleave";
    }

    canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    // please write UP in capital
    MouseEvent="mouse UP ";
    }

    canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_X_axis=e.clientX-canvas.offsetLeft;
    current_Y_axis=e.clientY-canvas.offsetTop;
        // MouseEvent="mouse move";
    
        if (MouseEvent=="mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle= color;
            // please write width_l instead of width in below
            ctx.lineWidth = width_l;
            ctx.arc(current_X_axis,current_Y_axis,radius,0);
            ctx.stroke();
        }
        last_P_Y=current_Y_axis;
        last_P_X=current_X_axis;
            
    }

    function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}