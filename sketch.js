var walkers = [];
var spider;

var Walker = function (initialX, initialY) {
  this.x=initialX;
  this.y=initialY;

  this.display=function(){
    rect(this.x,this.y,5,5)
  }

  this.move = function() {
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
  
  this.render=function(){
    this.display();
    this.move();
  }
}

function mouseClicked() {
  new Walker(mouseX,mouseY)
  walkers.push(new Walker(mouseX,mouseY))
}

// Global scope for an array of walkers
function setup() {
  color(175,175,175)
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  for(var i=0; i<walkers.length;i++){
    walkers[i].render()
  }
}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
