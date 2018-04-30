var sourceText = "Life is short,enjoy it!";
var x = 400;
var y = 0;
var xSpeed = 20;
var ySpeed = 3;
var rndm = 1;
var r = 255, g = 255, b = 255;

function setup() {
  createCanvas(400, 400);
  //frameRate(10);
background(100);
	fill(255);
	noStroke();
}
function draw() {
    // text file 
  background(50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  var middle = sourceText.length / 2;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
    
    // ball change color
    var sz = random(40, 60);
	ellipse(x, y, sz);
	if (frameCount % 30 == 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
		rndm = random(0, 2);
}
    // speed of the ball 
fill(r, g, b);
x += xSpeed * rndm;
	y += ySpeed * rndm;
	if (x > width || x < 0) {
		xSpeed *= -1;
	}
	
	if (y > height || y < 0) {
		ySpeed *= -1;
	}
	// console.log(x);
}