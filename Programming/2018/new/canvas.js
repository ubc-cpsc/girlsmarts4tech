/*------------------------- Variables ----------------------------------------*/
// We need these variables throughout the file, that's why we declare them here!
let petImage;
let foodImage;
let bombImage;
let garbageImage;
let blackcrossImage;

// Game screen size
let width = 400;
let height = 400;

// Pet's X and Y positions on the screen
let petX = width/2;
let petY = height/2;

// Size of the pet
let petWidth = 80;
let petHeight = 70;
// Moving speed of pet
let petSpeed = 2;

// At the beginning when game just starts, food is available
let foodAvailable = true;
// The food's positions
let foodX;
let foodY;
// Size of the food
let foodWidth = 30;
let foodHeight = 50;

// Amount of life
let life = 1000;
let maxLife = 1500;

// key code of R is 82
let R_KEY = 82;

class Item {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Return true if a coordinate is near the item, false otherwise
  near(x, y) {

  }
}

/*------------------------- Functions ----------------------------------------*/

// We load the pet and food images here
function preload() {
  // If you want to use other images, put them in the images folder
  // and change the panda.png part to be the image file name
  petImage = loadImage("images/panda.png");
  foodImage = loadImage("images/bamboo.png");
  bombImage = loadImage("images/bomb.png");
  garbageImage = loadImage("images/garbage.png");
  blackcrossImage = loadImage("images/blackcross.png");
}

function setup() {
  createCanvas(width, height);
  imageMode(CENTER);
  randomizeFood(); // Initialize food coordinate
}

function draw() {
  // Draw a lightblue background
  background("lightblue");
  // Draw how much life is left on the top left corner
  displayLife();

  // keyIsDown takes in a key code.
  // A list of key codes is available on your info sheet!
  // If an arrow key is pressed, we want our pet to go in that direction!
  if(keyIsDown(UP_ARROW)) {
      goUp();
  } else if (keyIsDown(DOWN_ARROW)) {
      goDown();
  } else if(keyIsDown(LEFT_ARROW)) {
      goLeft();
  } else if(keyIsDown(RIGHT_ARROW)) {
      goRight();
  }

  // If food is available, draw food
  if (foodAvailable) {
    image(foodImage, foodX, foodY, foodWidth, foodHeight);
  }

  // If there is still life left, draw pet and decrease amount of life
  if (!isGameOver()) { // or, isGameOver() === false
    image(petImage, petX, petY, petWidth, petHeight);
    life = life - 1;
  }

  // if the pet is near the food, give it more life and make the food disappear
  if (petNearFood()) {
    life = Math.min(life + 250, maxLife);
    randomizeFood();
  }

  // If there is no life left, the game is over
  if (isGameOver()) {
    displayGameOverMessage();
    foodAvailable = false;
    // If key r is pressed, we reset the game to restart
    if(keyIsDown(R_KEY)) {
        life = 1000;
        foodAvailable = true;
    }
  }
}

function goUp() {
  petY = Math.max(petY - petSpeed, 0);
}

function goDown() {
  petY = Math.min(petY + petSpeed, height);
}

function goLeft() {
  petX = Math.max(petX - petSpeed, 0);
}

function goRight() {
  petX = Math.min(petX + petSpeed, width);
}

// This function returns true when gmae is over, false when not.
function isGameOver() {
  return life <= 0;
}

// When mouse is clicked, we want to draw the food where we click
function mousePressed() {
  // First, we need to make sure game is not over yet
  if (isGameOver() === false) {
    // We have food now!
    foodAvailable = true;
    foodX = mouseX;
    foodY = mouseY;
  }
}

// Return a random number between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Assign a random coordinate for food
function randomizeFood() {
  foodX = getRandomNumber(foodWidth/2, width - foodWidth/2);
  foodY = getRandomNumber(foodHeight/2, width - foodHeight/2);
}

/** ------------------------ Helper functions -------------------------- */
// We have some functions here completed for you to use. You don't need to
// do anything to this part!

/**
  * Use this function to display text on screen
  * color: color of the text. You can refer to the list of colors we provide
  *        on the info sheet.
  * fontSize: a number that represents size of the text
  * message: the text that you want to display
  * xPos: x coordinate of the text
  * yPos: y coordinate of the text
  */
function displayText(color, fontSize, message, xPos, yPos) {
  fill(color);
  textSize(fontSize);
  text(message, xPos, yPos);
}

function petNearFood() {
  return petX < foodX + 20 && petX > foodX - 20
    && petY < foodY + 20 && petY > foodY - 20;
}

// Display how much life is left on the top left corner
function displayLife() {
  // Display the "Life: " text
  displayText("black", 20, `Life: ${life}`, 10, 27);

  // Draw the box showing amount of life left
  fill("lightgreen"); // Change this to change the color of life bar
  rect(100, 10, life/10, 20);
}

// Display the game over message
function displayGameOverMessage() {
  displayText("black", 25, "Game over, press R to restart", 30, 190);
}
