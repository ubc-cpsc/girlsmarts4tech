// We need this variable throughout the file, that's why we declare it here!
let petImage;

// Let's set up the game screen size
let width = 400;
let height = 400;

// Let's make our pet appear on the center of the screen
let petX = width/2;
let petY = height/2;

// We also decide on the size of the pet
let petWidth = 80;
let petHeight = 70;

// We load any images we want to use here
function preload() {
  // If you want to use other images, put them in the images folder
  // and change the panda.png part to be the image file name
  petImage = loadImage("images/panda.png");
}

function setup() {
  createCanvas(width, height);
  imageMode(CENTER);
}

function draw() {
  background("lightblue");
  image(petImage, petX, petY, petWidth, petHeight);

  // keyIsDown takes in a key code.
  // A list of key codes is available on your info sheet!
  if (keyIsDown(UP_ARROW)) {
    goUp();
  }
}

function goUp() {
  petY = petY - 2;
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

function petNearFood() {
  // TODO
}
