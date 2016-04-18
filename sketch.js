// Walker constructor function
// It will take in a position
// It will then take a `step` every frame

var walkers = [];

var Walker = function (initialX, initialY) {
  this.x = initialX;
  this.y = initialY;
  rect(this.x,this.y,20,20);
  
  this.renderRect = function() {
  fill('yellow');
  rect(this.x, this.y, 20, 20);
  }
}

// This extends the Walker class. It is similar
// to just including it inside of the Walker constructor function.
Walker.prototype.step = function() {
  var choice = Math.floor(random(0,3))

  if ((choice > 1) && (choice < 2)){
    this.x++;
  }
  if ((choice > 3) && (choice < 4)){
    this.x--;
  }
  if ((choice > 5) && (choice < 6)){
    this.y++;
  }
  else {
    this.y--;
  }
}


function mouseClicked() {

  walkers.push(new Walker(mouseX,mouseY));
}

// Global scope for an array of walkers
function setup() {
  // Set up some kind of background
  // createCanvas with `windowWidth` and
  // `windowHeight` minus height of title
  createCanvas(windowWidth,windowHeight);
  background("red");
}

function draw() {
  // Tell every walker to take a step
  for(var i=0; i<walkers.length;i++){
      walkers[i].step();
      walkers[i].renderRect();
  }
}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/


