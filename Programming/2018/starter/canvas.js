var petImage;

var petX = 200;
var petY = 200;

function preload() {
  petImage = loadImage("images/panda.png");
}
  

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background("lightblue");
  image(petImage, petX, petY, 80, 70);
}

function keyTyped() {
    if(key == 'w') {
        petY = petY - 10;
    }
}
