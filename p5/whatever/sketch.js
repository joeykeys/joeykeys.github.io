var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1600, 850);
  centerCanvas();
  background(255, 200, 200);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(230,140,200, 100);

  for (let x = 10; x <= 300; x += 10) {
    fill(x + 100, x * 3, x * 110, 20);
    rect(x, x + 5, x * 5, 200);
  }

}