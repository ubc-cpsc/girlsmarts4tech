/*------------------------- Variables ----------------------------------------*/
// We need these variables throughout the file, that's why we declare them here!
let petImage;
let foodImage;

// Let's set up the game screen size
let width = 400;
let height = 400;

// Let's make our pet appear on the center of the screen
let petX = width/2;
let petY = height/2;

// We also decide on the size of the pet
let petWidth = 80;
let petHeight = 70;
// Moving speed of pet
let petSpeed = 2;

// At the beginning, food is not available
let foodAvailable = false;
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

// We load any images we want to use here
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
  // Draw the panda image. Remove me when you are doing draw pet!
  image(petImage, petX, petY, petWidth, petHeight);
  // Draw how much life is left on the top left corner
  displayLife();

  // keyIsDown takes in a key code.
  // A list of key codes is available on your info sheet!
  // If the up arrow is pressed, we want our pet to go up!
  // TODO What about other arrow keys?
  if (keyIsDown(UP_ARROW)) {
    goUp();
  }

  // TODO
}

function goUp() {
  petY = petY - petSpeed;
}

function goDown() {
  // TODO
}

function goLeft() {
  // TODO
}

function goRight() {
  // TODO
}

function isGameOver() {
  // TODO
}

// When mouse is clicked, we want to draw the food where we click
function mousePressed() {
  // We have food now!
  foodAvailable = true;
  // TODO make food appear where mouse is pressed
}

/*----------------------------- Helper functions -----------------------------*/
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

function petNearFood(petX, petY, foodX, foodY) {
  return (petX < foodX + 20 && petX > foodX - 20
    && petY < foodY + 20 && petY > foodY - 20);
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
