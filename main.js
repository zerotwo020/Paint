var mouseevent = "empty";
var last_position_of_x, last_position_of_y;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)

{
    mouseevent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)

{
    mouseevent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)

{
mouseevent = "mouseleave";
}

canvas.addEventListener ("mousemove", my_mousemove);
function my_mousemove(e)

{
    var current_possition_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_possition_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;


        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(current_possition_of_mouse_x,current_possition_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_y = current_possition_of_mouse_y 
    last_position_of_x = current_possition_of_mouse_x 
}