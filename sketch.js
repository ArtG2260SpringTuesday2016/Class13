// var Walker = function (initialX, initialY) {

// }

// class Walker{
//   int x;
//   int y;
// }

// Walker() {
//   x = width/2;
//   y = height/3;
// }

// void display(){
//   stroke(0);
//   point(x,y);
// }

// void step() {
//   size(640,360);
//   w = new Walker();
//   background(255);
// }

//   int choice = int(random(4));
// }

//   if (choice === 0) {
//     this.x++;
//   }
//   if (choice === 1) {
//     this.x--;
//   }
//   if (choice === 2) {
//     this.y++;
//   }
//   else {
//     this.y--;
//   }
// }





// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var Walker = function (initialX, initialY) {
  this.x = 0; 
  this.y = 0; 
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

//
function mouseClicked(mouseX, mouseY) {
  // Hint use `push` and `new` to make instances of walkers
  // You might want to pass in mouseX and mouseY
  w = new Walker();
}

// Global scope for an array of walkers
function setup() {
  // Set up some kind of background
  // createCanvas with `windowWidth` and
  // `windowHeight` minus height of title
  background(255);
}

function draw() {
  // Tell every walker to take a step
  walker.x 
}


/*
  When you have this working try implementing
  some of the following:
    - color or shape changes on key press
    - garbage collection, if a Walker moves off screen, kill it.
    - something we come up with in class
*/
