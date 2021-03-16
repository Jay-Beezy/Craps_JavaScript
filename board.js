
let canvas = document.getElementById("board");
let context = canvas.getContext('2d');
canvas.style.background = "white";
context.font = "40pt Arial Black";

//Code provided from https://stackoverflow.com/questions/5014851/get-click-event-of-each-rectangle-inside-canvas
function collides(rects, x, y) {
    var isCollision = false;
    for (var i = 0, len = rects.length; i < len; i++) {
        var left = rects[i].x, right = rects[i].x+rects[i].w;
        var top = rects[i].y, bottom = rects[i].y+rects[i].h;
        if (right >= x && left <= x && bottom >= y && top <= y) {
            isCollision = rects[i];
        }
    }
    return isCollision;
}

function board(){
  context.fillStyle = "#28B015";
  context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "white";
  context.fillRect(50,50,100,375);
  context.fillStyle = "white";
  context.fillRect(50,350,670,100);
  context.fillStyle = "white";
  context.fillRect(100,50,620,375);
}

var passRect = [{x: 55, y: 55, w: 90, h: 375},
                {x: 55, y: 355, w: 660, h: 90}];

var fieldRect =  [{x: 150, y: 200, w: 565, h: 150}];

var fourRect =  [{x: 150, y: 55, w: 90, h: 140}];

var fiveRect =  [{x: 245, y: 55, w: 90, h: 140}];

var sixRect =  [{x: 340, y: 55, w: 90, h: 140}];

var eightRect =  [{x: 435, y: 55, w: 90, h: 140}];

var nineRect =  [{x: 530, y: 55, w: 90, h: 140}];

var tenRect =  [{x: 625, y: 55, w: 90, h: 140}];

if (context) {
   board();
    for (var i = 0, len = passRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(passRect[i].x, passRect[i].y, passRect[i].w, passRect[i].h);
      context.fillStyle = 'white';
      context.fillText("PASS LINE", 250, 420);

      context.save();
      context.fillStyle = 'white';
      context.translate(100,300);
      context.rotate(-1.50*Math.PI);
      context.fillText("PASS LINE", -210, 20);
      context.restore();
    }
    for (var i = 0, len = fieldRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(fieldRect[i].x, fieldRect[i].y, fieldRect[i].w, fieldRect[i].h);

      //Double Circles
      context.beginPath();
      context.fillStyle = 'orange';
      context.arc(190, 290, 35, 0, 2 * Math.PI);
      context.fill();
      context.beginPath();
      context.fillStyle = 'green';
      context.arc(190, 290, 27, 0, 2 * Math.PI);
      context.fill();

      //Triple Circles
      context.beginPath();
      context.fillStyle = 'orange';
      context.arc(675, 290, 35, 0, 2 * Math.PI);
      context.fill();
      context.beginPath();
      context.fillStyle = 'green';
      context.arc(675, 290, 27, 0, 2 * Math.PI);
      context.fill();

      context.save();
      context.font = "25pt Arial Black"
      context.fillStyle = 'orange';
      context.fillText("2", 179, 300);
      context.fillStyle = 'orange';
      context.fillText("  3     4     9    10    11", 235, 300);
      context.fillStyle = 'orange';
      context.fillText("12", 652, 300);
      context.fillStyle = 'orange';
      context.restore();

      context.save();
      context.font = "10pt Arial Black"
      context.fillStyle = 'orange';
      context.fillText("TRIPLE", 645, 245);
      context.fillStyle = 'orange';
      context.fillText("DOUBLE", 159, 245);
      context.restore();

      context.fillStyle = 'black';
      context.fillText("FIELD", 345, 248);
      context.fillStyle = 'orange';
      context.fillText("FIELD", 350, 245);
    }
    for (var i = 0, len = fourRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(fourRect[i].x, fourRect[i].y, fourRect[i].w, fourRect[i].h);
      context.fillStyle = 'black';
      context.fillText("4", 170, 148);
      context.fillStyle = 'yellow';
      context.fillText("4", 175, 145);
    }
    for (var i = 0, len = fiveRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(fiveRect[i].x, fiveRect[i].y, fiveRect[i].w, fiveRect[i].h);
      context.fillStyle = 'black';
      context.fillText("5", 268, 148);
      context.fillStyle = 'yellow';
      context.fillText("5", 273, 145);
    }
    for (var i = 0, len = sixRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(sixRect[i].x, sixRect[i].y, sixRect[i].w, sixRect[i].h);
      context.save();
      context.font = "30pt Arial Black"
      context.fillStyle = 'black';
      context.fillText("Six", 344, 143);
      context.fillStyle = 'yellow';
      context.fillText("Six", 349, 140);
      context.restore();
    }
    for (var i = 0, len = eightRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(eightRect[i].x, eightRect[i].y, eightRect[i].w, eightRect[i].h);
      context.fillStyle = 'black';
      context.fillText("8", 456, 148);
      context.fillStyle = 'yellow';
      context.fillText("8", 461, 145);
    }
    for (var i = 0, len = nineRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(nineRect[i].x, nineRect[i].y, nineRect[i].w, nineRect[i].h);
      context.save();
      context.font = "23pt Arial Black"
      context.fillStyle = 'black';
      context.fillText("Nine", 532, 143);
      context.fillStyle = 'yellow';
      context.fillText("Nine", 537, 140);
      context.restore();
    }
    for (var i = 0, len = tenRect.length; i < len; i++) {
      context.fillStyle = "green";
      context.fillRect(tenRect[i].x, tenRect[i].y, tenRect[i].w, tenRect[i].h);
      context.fillStyle = 'black';
      context.fillText("10", 627, 148);
      context.fillStyle = 'yellow';
      context.fillText("10", 632, 145);
    }
}

canvas.addEventListener('click', function(e) {
    var pass_rect = collides(passRect, e.offsetX, e.offsetY);
    var field_rect = collides(fieldRect, e.offsetX, e.offsetY);
    var four_rect = collides(fourRect, e.offsetX, e.offsetY);
    var five_rect = collides(fiveRect, e.offsetX, e.offsetY);
    var six_rect = collides(sixRect, e.offsetX, e.offsetY);
    var eight_rect = collides(eightRect, e.offsetX, e.offsetY);
    var nine_rect = collides(nineRect, e.offsetX, e.offsetY);
    var ten_rect = collides(tenRect, e.offsetX, e.offsetY);

    if(pass_rect){
      GameConsole.write("The pass line has been clicked", 1);
    }
    else if(field_rect){
      GameConsole.write("The field has been clicked", 1);
    }
    else if(four_rect){
      GameConsole.write("The place bet for 4 has been clicked", 1);
    }
    else if(five_rect){
      GameConsole.write("The place bet for 5 has been clicked", 1);
    }
    else if(six_rect){
      GameConsole.write("The place bet for Six has been clicked", 1);
    }
    else if(eight_rect){
      GameConsole.write("The place bet for 8 has been clicked", 1);
    }
    else if(nine_rect){
      GameConsole.write("The place bet for Nine has been clicked", 1);
    }
    else if(ten_rect){
      GameConsole.write("The place bet for 10 has been clicked", 1);
    }
}, false);
