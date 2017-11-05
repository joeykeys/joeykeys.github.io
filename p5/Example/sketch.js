var angle = 0.2;
var offset = 320;
var scalar = 100;
var speed = 0.09;


function setup() {
  createCanvas(1200, 620);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(50, 150, 200)
  var y1 = offset + sin(angle) * scalar;
  var y2 = offset + sin(angle + 0.4) * scalar;
  var y3 = offset + sin(angle + 0.8) * scalar;
  var y4 = offset + sin(angle + 1.2) * scalar;
  var y5 = offset + sin(angle + 1.8) * scalar;
  var y6 = offset + sin(angle + 2.4) * scalar;
  var y7 = offset + sin(angle + 3.2) * scalar;
  var y8 = offset + sin(angle + 4.0) * scalar;
  var y9 = offset + sin(angle + 4.6) * scalar;
  var y10 = offset + sin(angle + 5.6) * scalar;
  ellipse( 50, y1, 50, 40);
  ellipse( 110, y2, 40, 40);
  ellipse( 160, y3, 50, 40);
  ellipse( 220, y4, 40, 40);
  ellipse( 280, y5, 60, 40);
  ellipse( 350, y6, 40, 40);
  rect( 390, y7, 60, 40);
  rect( 470, y8, 40, 40);
  rect( 530, y9, 50, 40);
  rect( 590, y10, 40, 70);
  rect( 640, y9, 50, 40);
  rect( 710, y8, 40, 40);
  rect( 770, y7, 60, 40);
  ellipse( 860, y6, 40, 40);
  ellipse( 920, y5, 60, 40);
  ellipse( 980, y4, 40, 40);
  ellipse( 1030, y3, 50, 40);
  ellipse( 1090, y2, 40, 40);
  ellipse( 1140, y1, 50, 40);
  angle += speed;
}
