let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let imgWidth = 60; // Width of the image
let imgHeight = 60; // Height of the image

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
var x = 20;
var y = 20;

var xaxis = "Neutral";

var yaxis = "Neutral";

var img;
var imgg;
function preload() {
  img = loadImage('assets/player.png');
  imgg = loadImage('assets/THX_logo.png');
}

function collisionDetection(){
  if (x > xpos + imgWidth && x < xpos - imgWidth){
    console.log("BITCH!");
  }
  if (y > ypos + imgHeight && y < ypos - imgHeight){
    console.log("GET OVER HERE!");
  }
}

function setup() {
  createCanvas(1080, 500);
  strokeWeight(4);
  frameRate(60);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(102);
  collisionDetection();
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - imgWidth || xpos < 0) {
    xdirection *= -1;
  }
  if (ypos > height - imgHeight || ypos < 0) {
    ydirection *= -1;
  }



if (x > width - 20) {
  // If the object reaches either edge, multiply speed by -1 to turn it around.
  xaxis = "Right";
} else if (x < 0) {
  xaxis = "Left";
}


if (y > height - 20) {
  // If the object reaches either edge, multiply speed by -1 to turn it around.
  yaxis = "Down";

} else if (y < 0) {
  xaxis = "Up";
}

if ((x <= width - 20) && (x >= 0) && (y <= height - 20) && (y >= 0)) {
  xaxis = "Neutral"
  yaxis = "Neutral"
}


// Draw the shape
image(imgg, xpos, ypos, imgHeight, imgWidth);

if (keyIsDown(90)) {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 2;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 2;
  }
}
else if (keyIsDown(88)) {
  if (keyIsDown(LEFT_ARROW)) {
    x--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x++;
  }
  if (keyIsDown(UP_ARROW)) {
    y--;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y++;
  }
}



image(img, x, y, 20, 20);




}