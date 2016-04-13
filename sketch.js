// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var walkerArray = []
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
function mouseClicked() {
  fill(0)
  walkerArray.push(new Walker(mouseX,mouseY));
  // Hint use `push` and `new` to make instances of walkers
  // You might want to pass in mouseX and mouseY

}

// Global scope for an array of walkers
function setup() {
  createCanvas(windowWidth,windowHeight-30)
  background(255)
  console.log(walkerArray);
  
  

  // Set up some kind of background
  // createCanvas with `windowWidth` and
  // `windowHeight` minus height of title

}


function draw() {
 
 var youwillwalkdammit = function(walkerArray){
  for(i = 0; i < walkerArray.length; i++){
   walkerArray[i].step();
   walkerArray[i].renderRect();
 
 }
}
youwillwalkdammit(walkerArray)
}