canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseevent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
line_width = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_pos_of_x = e.clientx - canvas.offsetLeft;
    current_pos_of_y = e.clienty - canvas.offsetTop;
    if(MouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.line_width = line_width;
    console.log("last position of x and y coordinates =");
    console.log("x =" + last_pos_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("current position of x and y coordinates =");
    console.log("x =" + current_pos_of_x + "y = " + current_pos_of_y);    
    ctx.lineTo(current_pos_of_x, current_pos_of_y);
    ctx.stroke();
    }
    last_position_of_x = current_pos_of_x;
    last_position_of_y = current_pos_of_y;
}