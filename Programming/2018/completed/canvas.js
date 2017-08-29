var petImage;
var foodImage;

// the pet coordinates, start in center of screen
var petX = 200;
var petY = 200;

// the food coordinates being >400 means food is unavailable
var foodX = 404;
var foodY = 404;

var life = 1000;

function preload() {
  // TODO: have some images downloaded and available for the girls to use
  // teach them how to find and load their own if they have time (they probably won't)
  petImage = loadImage("images/panda.png");
  foodImage = loadImage("images/bamboo.png");
}
  

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background("lightblue");
  
  // write the "Life: " string
  fill("black");
  textSize(20);
  text("Life: ", 10, 27);
   
  // update box showing amount of life left
  fill("lightgreen");
  rect(50, 10, life/10, 20);
  
  // if life is <= 0, the game is over
  // otherwise update the pet's position
  if (life <= 0) {
    fill("black");
    text("Game over, press R to restart", 70, 190);
  } else {
    image(petImage, petX, petY, 80, 70);
    life = life - 1;
  }
  
  // if the food is still available, draw it
  if (foodX <= 400 && foodY <= 400) {
    image(foodImage, foodX, foodY, 30, 50);
  }
  
  // if the pet is near the food, give it more life and make the food disappear
  if (petNearFood(petX, petY, foodX, foodY)) {
    life = life + 250;
    foodX = 404;
    foodY = 404;
  }
}

// wasd for movement, r to restart
function keyTyped() {
    if(key == 'w') {
        petY = petY - 10;
    } else if(key == 's') {
        petY = petY + 10;
    } else if(key =='a') {
        petX = petX - 10;
    } else if(key == 'd') {
        petX = petX + 10;
    } else if(key == 'r' && life <= 0) {
        life = 1000;
    }
}

// if there isn't food already available, put food where you click
function mousePressed() {
  if(foodX >= 400 && foodY >= 400) {
        foodX = mouseX;
        foodY = mouseY;
    }
}

// TODO: put in the library
function petNearFood(petX, petY, foodX, foodY) {
  return (petX < foodX + 20 && petX > foodX - 20 && petY < foodY + 20 && petY > foodY - 20);
}

// have a list of colors that the girls can use (I can't find a complete list..._
// "pink"
// "green"
// "lightgreen"
// "purple"
// "blue"
// "lightblue"
// "black"
