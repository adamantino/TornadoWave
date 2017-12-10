
var num =20;

var step = 20;
var sz;
var offSet;
var theta = 0;
var angle;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);

	strokeWeight(3);

	//colorMode(RGB);
	frameRate(30);
}

function draw() {
	background(43);	

	translate(width/2, height/2);

	angle = 0;

	for(var i = 0; i < num; i ++) {

	    sz = i * step;

	    var offSet = TWO_PI/num * i;
	    
	    var arcEnd = map( Math.sin(theta+offSet), -1, 1, PI, -PI);

	    var arcColor = map(arcEnd, -PI, PI, 20, 80);

	    stroke(arcColor, 255, 255);
	    noFill();
	    arc(0, 0, sz, sz, PI, arcEnd);
	}

	theta += .09;
}





