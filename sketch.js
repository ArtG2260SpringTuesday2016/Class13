var walkers = [];

// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var Walker = function (initialX, initialY) {
  this.x = initialX;
  this.y = initialY;
  this.width = 5;
  this.height = 5;
  
  this.renderRect = function() {
    fill('black');
    rect(this.x, this.y, this.width, this.height)
  }
}


// This extends the Walker class. It is similar
// to just including it inside of the Walker constructor function.
Walker.prototype.step = function() {
  var choice = random(0, 4)

  if (choice===0) {
    this.x++;
  }
  if (choice===1) {
    this.x--;
  }
  if (choice===2) {
    this.y++;
  }
  else if(choice===3) {
    this.y--;
  }
};


function mouseClicked() {
  walkers.push(new Walker(mouseX, mouseY));
  walkers[walkers.length] = new Walker(mouseX, mouseY)

}

// Global scope for an array of walkers
function setup() {
  // Set up some kind of background
  // createCanvas with `windowWidth` and
  // `windowHeight` minus height of title
  createCanvas(windowWidth, windowHeight - 32);
  background('White');
console.log(walkers);
}

function draw() {
  // Tell every walker to take a step
    for(i = 0; i < walkers.length; i++){
      walkers[i].step()
      walkers[i].renderRect()
    }
}
/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/


