var x = 60;
var y = 440;
var radius = 45;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.2;
var angle = 0.5;
var angle = 0.2;
var offset = 450;
var scalar = 120;
var speed = 0.08;


function setup() {
    createCanvas(860, 680);
    strokeWeight(5);
    ellipseMode(RADIUS);
}

function draw() {

    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;

    angle += speed;

    x += random(-4,4);
    y += random(-1,1);

    neckHeight = 80 + sin(angle) * 30;
    angle +=0.05; 

    var ny = y - bodyHeight - neckHeight - radius;

    var targetX = mouseX;
    x += (targetX - x) * easing;

    if (mouseIsPressed) {
        neckHeight = -336;
        bodyHeight = 70;
    }
    else {
        neckHeight = 120;
        bodyHeight = 70;
    }

    var neckY = y - bodyHeight - neckHeight - radius;
    background(85);
    stroke(150);
    line(x + 32, y - bodyHeight, x + 32, neckY);
    line(x + 12, neckY, x - 18, neckY - 43);
    line(x + 12, neckY, x + 42, neckY - 99);
    line(x + 12, neckY, x + 80, neckY + 12);
    noStroke();
    fill(152);
    ellipse(x, y - 33, 33, 33);
    fill(25);
    ellipse(x - 15, y - bodyHeight, 80, bodyHeight - 23);
    fill(40);
    ellipse(x + 12, neckY, radius, radius);
    fill(255);
    ellipse(x + 24, neckY - 6, 14, 14);
    fill(0);
    ellipse(x + 34, neckY - 6, 3, 3);

    translate(110,110);
    stroke(0);
    strokeWeight(70);
    line(0,-35,0,-65);
    noStroke();
    fill(204);
    ellipse(-17.5,-65,35,35);
    ellipse(-17.5,-65,35,35);
    arc(0,-65,70,70,0,PI);
    fill(0);
    ellipse(-14,-65,8,8);
    ellipse(14,-65,8,8);
    quad(0,-58,4,-51,0,-44,-4,-51);


    translate(610,510);
    stroke(0);
    strokeWeight(70);
    line(0,-35,0,-65);
    noStroke();
    fill(204);
    ellipse(-17.5,-65,35,35);
    ellipse(-17.5,-65,35,35);
    arc(0,-65,70,70,0,PI);
    fill(0);
    ellipse(-14,-65,8,8);
    ellipse(14,-65,8,8);
    quad(0,-58,4,-51,0,-44,-4,-51);

    translate(-610,0);
    stroke(0);
    strokeWeight(70);
    line(0,-35,0,-65);
    noStroke();
    fill(204);
    ellipse(-17.5,-65,35,35);
    ellipse(-17.5,-65,35,35);
    arc(0,-65,70,70,0,PI);
    fill(0);
    ellipse(-14,-65,8,8);
    ellipse(14,-65,8,8);
    quad(0,-58,4,-51,0,-44,-4,-51);

    translate(620,-510);
    stroke(0);
    strokeWeight(70);
    line(0,-35,0,-65);
    noStroke();
    fill(204);
    ellipse(-17.5,-65,35,35);
    ellipse(-17.5,-65,35,35);
    arc(0,-65,70,70,0,PI);
    fill(0);
    ellipse(-14,-65,8,8);
    ellipse(14,-65,8,8);
    quad(0,-58,4,-51,0,-44,-4,-51);



}