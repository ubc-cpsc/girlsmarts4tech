/*------------------------- Variables ----------------------------------------*/
// We need these variables throughout the file, that's why we declare them here!
let petImage;
let foodImage;

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

// key code of R is 82
let R_KEY = 82;

/*------------------------- Functions ----------------------------------------*/

// We load the pet and food images here
function preload() {
  // If you want to use other images, put them in the images folder
  // and change the panda.png part to be the image file name
  petImage = loadImage("images/panda.png");
  foodImage = loadImage("images/bamboo.png");
}

function setup() {
  createCanvas(width, height);
  imageMode(CENTER);
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
  } 
  if(keyIsDown(DOWN_ARROW)) {
      goDown();
  } 
  if(keyIsDown(LEFT_ARROW)) {
      goLeft();
  } 
  if(keyIsDown(RIGHT_ARROW)) {
      goRight();
  }

  // If food is available, draw food
  if (foodAvailable) {
    image(foodImage, foodX, foodY, foodWidth, foodHeight);
  }

  // If there is still life left, draw pet and decrease amount of life
  if (!isGameOver()) { // or, isGameOver() == false
    image(petImage, petX, petY, petWidth, petHeight);
    life = life - 1;
  }

  // if the pet is near the food, give it more life and make the food disappear
  if (petNearFood()) {
    life = life + 250;
    foodAvailable = false;
  }

  // If there is no life left, the game is over
  if (isGameOver()) {
    displayGameOverMessage();
    foodAvailable = false;
    // If key r is pressed, we reset the game to restart
    if(keyIsDown(R_KEY)) {
        life = 1000;
    }
  }
}

function goUp() {
  petY = petY - petSpeed;
}

function goDown() {
  petY = petY + petSpeed;
}

function goLeft() {
  petX = petX - petSpeed;
}

function goRight() {
  petX = petX + petSpeed;
}

// This function returns true when gmae is over, false when not.
function isGameOver() {
  return life <= 0;
}

// When mouse is clicked, we want to draw the food where we click
function mousePressed() {
  // First, we need to make sure game is not over yet
  if (isGameOver() == false) {
    // We have food now!
    foodAvailable = true;
    foodX = mouseX;
    foodY = mouseY;
  }
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
  return (petX < foodX + 20 && petX > foodX - 20
    && petY < foodY + 20 && petY > foodY - 20) && foodAvailable;
}

// Display how much life is left on the top left corner
function displayLife() {
  // Display the "Life: " text
  displayText("black", 20, "Life: ", 10, 27);

  // Draw the box showing amount of life left
  fill("lightgreen");
  rect(50, 10, life/10, 20);
}

// Display the game over message
function displayGameOverMessage() {
  displayText("black", 25, "Game over, press R to restart", 30, 190);
}
