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
  
  this.render{
    rect(this.x,this.y,5,5)
  }
}

var spider = new Walker(this.x,this.y)

function mouseClicked() {
  spider.push(new Walker(mouseX,mouseY))
}

// Global scope for an array of walkers
function setup() {
  color(175,175,175)
  createCanvas(windowWidth,windowHeight)
  spider=new Walker
}

function draw() {
  Walker.prototype.step()
  Walker.prototype.render()
  console.log(spider.x,spider.y)
  

}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
