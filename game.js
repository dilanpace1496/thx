let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let imgWidth = 60; // Width of the image
let imgHeight = 60; // Height of the image

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
var x = 600;
var y = 550;

var xstart = 600;
var ystart = 550;


var moving = false;
var direction = "Neutral";
var pastdirection = "";

var xaxis = "Neutral";

var yaxis = "Neutral";

var particles = [];

var hit = false;

var img;
var imgg;
function preload() {
  img = loadImage('assets/player.png');
  imgg = loadImage('assets/THX_logo.png');
}

function collisionDetection() {
  if (x > xpos + imgWidth && x < xpos - imgWidth) {
    console.log("BITCH!");
  }
  if (y > ypos + imgHeight && y < ypos - imgHeight) {
    console.log("GET OVER HERE!");
  }
}

function setup() {
  createCanvas(1200, 550);
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
    yaxis = "Up";
  }

  if ((x <= width - 20) && (x >= 0) && (y <= height - 20) && (y >= 0)) {
    xaxis = "Neutral"
    yaxis = "Neutral"
  }


  // Draw the shape
  image(imgg, xpos, ypos, imgHeight, imgWidth);

  moving = false;

  if (keyIsDown(90)) {
    if ((xaxis == "Right") || (xaxis == "Neutral")) {
      if (keyIsDown(LEFT_ARROW)) {
        direction = "Left";
        x -= 2;
        moving = true;
        

      }
    }
    if ((xaxis == "Left") || (xaxis == "Neutral")) {
      if (keyIsDown(RIGHT_ARROW)) {
        direction = "Right";
        x += 2;
        moving = true;
        


      }
    }
    if ((yaxis == "Down") || (yaxis == "Neutral")) {
      if (keyIsDown(UP_ARROW)) {
        direction = "Up";
        y -= 2;
        moving = true;
        

      }
    }
    if ((yaxis == "Up") || (yaxis == "Neutral")) {
      if (keyIsDown(DOWN_ARROW)) {
        direction = "Down";
        y += 2;
        moving = true;
        

      }
    }
  }
  else if (keyIsDown(88)) {
    if ((xaxis == "Right") || (xaxis == "Neutral")) {
      if (keyIsDown(LEFT_ARROW)) {
        direction = "Left";
        x--;
        moving = true;
        

      }
    }
    if ((xaxis == "Left") || (xaxis == "Neutral")) {
      if (keyIsDown(RIGHT_ARROW)) {
        direction = "Right";
        x++;
        moving = true;
        

      }
    }
    if ((yaxis == "Down") || (yaxis == "Neutral")) {
      if (keyIsDown(UP_ARROW)) {
        direction = "Up";
        y--;
        moving = true;


      }
    }
    if ((yaxis == "Up") || (yaxis == "Neutral")) {
      if (keyIsDown(DOWN_ARROW)) {
        direction = "Down";
        y++;
        moving = true;


      }
    }
  }

  if (direction != pastdirection) {
    pastdirection = direction;
    particles.push(new Particle(x, y));
  }







  if (yaxis == "Up" && hit == false) {
    particles.push(new Particle(x, y));
    hit = true;
    particles.push(new Particle(xstart, ystart));
    
  }
  if (yaxis == "Down" && hit == false) {
    particles.push(new Particle(x, y));
    hit = true;
    particles.push(new Particle(xstart, ystart));
  }
  if (xaxis == "Left" && hit == false) {
    particles.push(new Particle(x, y));
    hit = true;
    particles.push(new Particle(xstart, ystart));
  }
  if (xaxis == "Right" && hit == false) {
    particles.push(new Particle(x, y));
    hit = true;
    particles.push(new Particle(xstart, ystart));
  }

  if (hit == true){
    if ((xaxis == "Left" && direction == "Right")||(xaxis == "Right" && direction == "Left")||(yaxis == "Up" && direction == "Down")||(yaxis == "Down" && direction == "Up")) {
        hit = false
        xstart = x;
        ystart = y;
        
    }
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
















  image(img, x, y, 20, 20);




}

