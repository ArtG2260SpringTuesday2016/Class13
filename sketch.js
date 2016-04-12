var myArray = []

var Walker = function (initialX, initialY) {
  fill('black')
  rect(initialX,initialY,5,5)
  this.render=function(){
  this.prototype
  }
}

Walker.prototype.step = function() {
  var choice = Math.floor(random(0,3))

  if (choice === 0) {
    this.x++;
    rect(this.x,this.y,5,5)
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

//
function mouseClicked() {
  Walker(mouseX,mouseY)

}

// Global scope for an array of walkers
function setup() {
  color(175,175,175)
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  Walker(300,300)

}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
