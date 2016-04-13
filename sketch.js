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

  if (0<=choice && choice<1) {
    this.x++;
  }
  if (1<=choice && choice<2) {
    this.x--;
  }
  if (2<=choice && choice<3) {
    this.y++;
  }
  if (3<=choice && choice<4) {
    this.y--;
  }
};


function mouseClicked() {
  walkers.push(new Walker(mouseX, mouseY));
  new Walker(mouseX, mouseY);

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
  var walking = function(ar){
    for(i = 0; i < ar.length; i++){
      ar[i].step()
      ar[i].renderRect()
    }
  }
  walking(walkers)
}
/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
