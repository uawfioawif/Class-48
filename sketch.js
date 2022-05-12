var playerMouse;
var tableBackground;
var button;
var gameState = "menu";
var isMenuCreated = false;
var level1Button;
var brokenBlueWireImg,
  brokenRedWireImg,
  brokenGreenWireImg,
  blueWire,
  blueWireImg,
  redWire,
  redWireImg,
  greenWire,
  greenWireImg;

function preload() {
  tableBackground = loadImage("assets/images/table.png");
  button = loadImage("assets/images/button.png");
  bombBackground = loadImage("assets/images/bombBackground.jpg");
  brokenBlueWireImg = loadImage("assets/images/brokenBlueWire.png");
  brokenRedWireImg = loadImage("assets/images/brokenRedWire.png");
  brokenGreenWireImg = loadImage("assets/images/brokenGreenWire.png");
  blueWireImg = loadImage("assets/images/blueWire.png");
  redWireImg = loadImage("assets/images/redWire.png");
  greenWireImg = loadImage("assets/images/greenWire.png");
}

function setup() {
  createCanvas(windowWidth - 13, windowHeight - 20);
  blueWire = createSprite(windowWidth / 3 - 87.5, windowHeight / 2, 100, 100);
  blueWire.addImage(blueWireImg);
  //blueWire.addImage("brokenB", brokenBlueWireImg);
  blueWire.visible = false;
  redWire = createSprite(windowWidth / 2 + 140, windowHeight / 2, 375, 500);
  redWire.addImage(redWireImg);
  //redWire.addImage("brokenR", brokenRedWireImg);
  redWire.visible = false;
  redWire.scale = 0.95;
  greenWire = createSprite(windowWidth / 2 + 407.5, windowHeight / 2, 375, 500);
  greenWire.addImage(greenWireImg);
  //greenWire.addImage("brokenG", brokenGreenWireImg);
  greenWire.visible = false;
}

function draw() {
  background(255);
  image(tableBackground, 0, 0, windowWidth, windowHeight);
  if (gameState === "menu") {
    drawMenu();
    level1Button.mousePressed(function () {
      gameState = "level1";
      hideButtons();
    });
  }

  if (gameState === "level1") {
    drawLevel1();
  }

  drawSprites();
}

function drawMenu() {
  textAlign(CENTER);
  push();
  fill("yellow");
  textSize(100);
  text("Levels", windowWidth / 2 - 50, 100);
  pop();
  fill("red");
  textSize(30);
  imageMode(CENTER);

  if (!isMenuCreated) {
    level1Button = createButton("Level 1");
    level1Button.class("levelButton");
    level1Button.position(windowWidth / 2 - 240, 190);
    isMenuCreated = true;
  }

  level1Button.mousePressed(function () {
    gameState = "level1";
  });

  /*image(button, windowWidth / 2 - 50, 190, 300, 100);
  level1 = text("Level 1", windowWidth / 2 - 50, 200);

  image(button, windowWidth / 2 - 50, 340, 300, 100);
  level2 = text("Level 2", windowWidth / 2 - 50, 350);

  image(button, windowWidth / 2 - 50, 490, 300, 100);
  level3 = text("Level 3", windowWidth / 2 - 50, 500);*/
}

function drawLevel1() {
  image(
    bombBackground,
    windowWidth / 6,
    windowHeight / 6,
    windowWidth / 1.5,
    windowHeight / 1.5
  );

  blueWire.visible = true;
  redWire.visible = true;
  greenWire.visible = true;

  if (mousePressedOver(blueWire)) {
    //blueWire.changeImage("brokenB", brokenBlueWireImg);
  }

  // image(brokenBlueWire, windowWidth / 7.5, windowHeight / 5.5, 600, 600);
  // image(brokenRedWire, windowWidth / 2.17, windowHeight / 4.15, 375, 500);
  // image(brokenGreenWire, windowWidth / 1.55, windowHeight / 4.2, 375, 500);
}

function hideButtons() {
  level1Button.hide();
}
