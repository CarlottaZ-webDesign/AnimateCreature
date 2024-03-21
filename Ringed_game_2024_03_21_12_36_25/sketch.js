let sullyX = 100;
let sullyY = 250; 
let sullySpeed = 2;
let doorWidth = 60;
let doorHeight = 100;
let doorX = [100, 200, 300];
let doorSpeed = 1;
let doorOpening = false;
let doorAngle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  drawBackground();
  drawPlatform(); // Added platform
  drawDoors();
  drawSully();
  animateDoors();
  moveSully();
  moveDoors();
}

function drawBackground() {
  // Patterned background
  background(0);
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      if ((x + y) % 80 === 0) {
        fill(255); // White
      } else {
        fill(255, 255, 0); // Yellow
      }
      ellipse(x, y, 4, 4); // Stars
    }
  }
}

function drawPlatform() {
  // Platform
  fill(172, 91, 207); // Purple
  stroke(0); // Black outline
  rect(0, 300, 400, 100);
}

function drawSully() {
  // Body
  fill(0, 128, 255); // Blue
  stroke(0); // Black outline
  ellipse(sullyX, sullyY, 150, 150);
  
  // Arms
  fill(0, 128, 255); // Blue
  stroke(0); // Black outline
  rect(sullyX - 80, sullyY - 40, 30, 80); // Left arm
  rect(sullyX + 50, sullyY - 40, 30, 80); // Right arm
  
  // Legs
  stroke(0); // Black outline
  rect(sullyX - 50, sullyY + 50, 30, 50); // Left leg
  rect(sullyX + 20, sullyY + 50, 30, 50); // Right leg
  
  // Horns
  fill(255, 255, 0); // Yellow
  stroke(0); // Black outline
  triangle(sullyX - 40, sullyY - 100, sullyX + 40, sullyY - 100, sullyX, sullyY - 150);
  
  // Eyes
  fill(255);
  stroke(0); // Black outline
  ellipse(sullyX - 40, sullyY - 20, 40, 60); // Left eye
  ellipse(sullyX + 40, sullyY - 20, 40, 60); // Right eye
  
  // Pupils
  fill(0);
  ellipse(sullyX - 40, sullyY - 20, 20, 20); // Left pupil
  ellipse(sullyX + 40, sullyY - 20, 20, 20); // Right pupil
  
  // Mouth
  fill(255);
  stroke(0); // Black outline
  rect(sullyX - 40, sullyY + 40, 80, 30);
  // Teeth
  fill(255, 0, 0); // Red
  stroke(0); // Black outline
  triangle(sullyX - 30, sullyY + 40, sullyX - 20, sullyY + 10, sullyX - 10, sullyY + 40);
  triangle(sullyX - 10, sullyY + 40, sullyX, sullyY + 10, sullyX + 10, sullyY + 40);
  triangle(sullyX + 10, sullyY + 40, sullyX + 20, sullyY + 10, sullyX + 30, sullyY + 40);
}

function drawDoors() {
  // Draw multiple doors
  for (let i = 0; i < doorX.length; i++) {
    // Door frame
    fill(139, 69, 19); // Brown
    stroke(0); // Black outline
    rect(doorX[i], 250, doorWidth, doorHeight);
    // Door
    fill(255, 215, 0); // Yellow
    stroke(0); // Black outline
    rect(doorX[i] + 5, 255, doorWidth - 10, doorHeight - 10);
  }
}

function animateDoors() {
  // Animation for doors opening and closing
  if (doorOpening) {
    doorAngle += 3;
    if (doorAngle >= HALF_PI) {
      doorAngle = HALF_PI;
      doorOpening = false;
    }
  } else {
    doorAngle -= 3;
    if (doorAngle <= 0) {
      doorAngle = 0;
      doorOpening = true;
    }
  }
}

function moveSully() {
  // Move Sully back and forth
  sullyX += sullySpeed;
  if (sullyX > 300 || sullyX < 100) {
    sullySpeed *= -1;
  }
}

function moveDoors() {
  // Move doors back and forth
  for (let i = 0; i < doorX.length; i++) {
    doorX[i] += doorSpeed;
    if (doorX[i] > 300 || doorX[i] < 100) {
      doorSpeed *= -1;
    }
  }
}


