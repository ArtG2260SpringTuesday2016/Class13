// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var walkers = []
var Walker = function (initialX, initialY) {

 this.x = 0;
 this.y = 0;
//  fill(0)
// rect(this.x,this.y,10,10)
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

var creepyspider = new Walker (50,50)
//
function mouseClicked() {
  new Walker(mouseX,mouseY)
  // Hint use `push` and `new` to make instances of walkers
  // You might want to pass in mouseX and mouseY

  walkers.push(new Walker(mouseX,mouseY))
}

// Global scope for an array of walkers
function setup() {
  createCanvas(windowWidth,windowHeight)
  background(255)
  console.log(walkers)

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
