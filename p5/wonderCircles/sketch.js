var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 1;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 700);
  centerCanvas();
  background(110, 120, 310);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  if (mouseX !== pmouseX || mouseY != pmouseY) {
    if (mouseIsPressed) {
      fill(100,255,150);
    }
    else {
      fill(random(150),random(200),random(325));
    }
    ellipse(120,100,110,110);
    triangle(234,23,320,60,32,200)
  }
  ellipse(mouseX, mouseY, 80, 80);
  //ellipse(mouseX, mouseY, 80, 80);
  triangle(mouseX, mouseY, 190, 90);

  

}