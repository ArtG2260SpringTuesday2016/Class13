// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var WalkersArray=[];

var Walker = function (initialX, initialY) {
  rect(initialX,initialY,5,5)
  this.x = initialX;
  this.y = initialY;

}

// This extends the Walker class. It is similar
// to just including it inside of the Walker constructor function.
Walker.prototype.step = function() {
  var choice = Math.floor(random(0,3))

  if (choice === 0) {
    this.x++;
  }
  if (choice === 1) {
    this.x--;
  }
  if (choice === 2) {
    this.y++;
  }
  else {
    this.y--;
  }
}

var spider = new Walker(50,50)
//
function mouseClicked() {
  fill(0);
  new Walker(mouseX,mouseY,5,5);
  
  WalkersArray.push(new Walker(mouseX,mouseY));

  
  
  // Hint use `push` and `new` to make instances of walkers
  // You might want to pass in mouseX and mouseY

}

// Global scope for an array of walkers
function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight)
  // Set up some kind of background
  // createCanvas with `windowWidth` and
  // `windowHeight` minus height of title

}

function draw() {
  // Tell every walker to take a step

}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
