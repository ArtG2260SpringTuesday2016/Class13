var walkers = [];

var Walker = function (initialX, initialY) {
  this.x=initialX;
  this.y=initialY
}

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
  walker.new(new Walker(mouseX,mouseY))
}

// Global scope for an array of walkers
function setup() {
  color(175,175,175)
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  Walker.step()
  console.log(spider.x,spider.y)
  rect(this.x,this.y,5,5)
  

}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
