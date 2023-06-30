var radius;

var control;

var anchor0X;
var anchor0Y;

var anchor1X;
var anchor1Y;

var anchor2X;
var anchor2Y;
var anchor2X_control1;
var anchor2Y_control1;
var anchor2X_control2;
var anchor2Y_control2;

var anchor3X;
var anchor3Y;
var anchor3X_control1;
var anchor3Y_control1;
var anchor3X_control2;
var anchor3Y_control2;

var anchor4X;
var anchor4Y;
var anchor4X_control1;
var anchor4Y_control1;
var anchor4X_control2;
var anchor4Y_control2;

var anchor5X;
var anchor5Y;
var anchor5X_control1;
var anchor5Y_control1;
var anchor5X_control2;
var anchor5Y_control2;

var anchor6X;
var anchor6Y;

var incremento = 0;

var cosseno = 0;
var seno = 0;

var tetax;
var tetay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  radius = 100;
  control = radius * 0.551915024494;

  anchor0X = width / 2 - radius;
  anchor0Y = height / 2;
  
  anchor1X = width / 2 -  radius;
  anchor1Y = height / 2;

  anchor2X = width / 2;
  anchor2Y = height / 2 + radius;
  anchor2X_control1 = width / 2 -radius;
  anchor2Y_control1 = height / 2 + control;
  anchor2X_control2 = width / 2 - control;
  anchor2Y_control2 = height / 2 + radius;

  anchor3X = width / 2 + radius;
  anchor3Y = height / 2;
  anchor3X_control1 = width / 2 + control;
  anchor3Y_control1 = height / 2 + radius;
  anchor3X_control2 = width / 2 + radius;
  anchor3Y_control2 = height / 2 + control;

  anchor4X = width / 2 + radius;
  anchor4Y = height / 2;

  tetax = HALF_PI;
  tetay = PI;
}

function draw() {
  background(255);

  line(0, height / 2, width, height / 2);

  desenharBezier();

  // showHandles();

  atualizarPontos(incremento);

  var ycontrol = 320;
  var radiuscontrol = 500;

  push();
  fill(0,0,175,100);
  circle(width / 2, height / 2 - ycontrol, 100 * 2 + radiuscontrol);
  pop();

  incremento += 0;
  cosseno += PI/(60*60);
  seno += 2/(60*60);

  tetax += TWO_PI/(60*5);
  tetay += TWO_PI/(60*5);
}

function atualizarPontos(_incremento) {
  _incremento = 250

  radius = 100 + _incremento;

  height_correction = 320;

  control = radius * 0.551915024494;

  var sine  = 1;
  
  if (cos(tetax) < 0)
  {
    sine = -1;
  }

  // anchor0X = (width / 2) - radius;
  // anchor0Y = (height / 2);

  anchor0X = 0;
  anchor0Y = 0;

  anchor1X = (width / 2) - radius - ((cos(tetax) * ((HALF_PI / 2) * radius)) * sine);
  anchor1Y = (height / 2) + radius - (sin(tetax) * (radius)) - height_correction;

  anchor2X = (width / 2);
  anchor2Y = (height / 2) + radius - height_correction;
  anchor2X_control1 = (width / 2) - radius - ((cos(tetax) * (1)) * sine);
  anchor2Y_control1 = (height / 2) + radius - (sin(tetax) * (radius - control)) - height_correction;
  anchor2X_control2 = (width / 2) - control;
  anchor2Y_control2 = (height / 2) + radius - height_correction;

  anchor3X = (width / 2) + radius + ((cos(tetax) * ((HALF_PI / 2) * radius)) * sine);
  anchor3Y = (height / 2) + radius - (sin(tetax) * (radius)) - height_correction;
  anchor3X_control1 = (width / 2) + control;
  anchor3Y_control1 = (height / 2) + radius - height_correction;
  anchor3X_control2 = (width / 2) + radius - ((cos(tetax) * (1)) * sine);
  anchor3Y_control2 = (height / 2) + radius - (sin(tetax) * (radius - control)) - height_correction;

  anchor4X = width;
  anchor4Y = 0;

}

function desenharBezier() {
  fill(255,255,0,100);
  stroke(0);
  beginShape();
  vertex(anchor0X, anchor0Y);
  vertex(anchor1X, anchor1Y);
  bezierVertex(anchor2X_control1, anchor2Y_control1, anchor2X_control2, anchor2Y_control2, anchor2X, anchor2Y);
  bezierVertex(anchor3X_control1, anchor3Y_control1, anchor3X_control2, anchor3Y_control2, anchor3X, anchor3Y);
  vertex(anchor4X, anchor4Y);
  endShape();
}

function showHandles() {
  fill(0, 50, 0);
  circle(anchor0X, anchor0Y, 10);
  fill(0, 100, 0);
  circle(anchor1X, anchor1Y, 10);

  fill(0, 150, 0);
  circle(anchor2X, anchor2Y, 10);
  fill(255, 0, 0);
  circle(anchor2X_control1, anchor2Y_control1, 10);
  fill(0, 0, 255);
  circle(anchor2X_control2, anchor2Y_control2, 10);

  fill(0, 200, 0);
  circle(anchor3X, anchor3Y, 10);
  fill(255, 0, 0);
  circle(anchor3X_control1, anchor3Y_control1, 10);
  fill(0, 0, 255);
  circle(anchor3X_control2, anchor3Y_control2, 10);

  fill(0, 255, 0);
  circle(anchor4X, anchor4Y, 10);
  fill(255, 0, 0);
  circle(anchor4X_control1, anchor4Y_control1, 10);
  fill(0, 0, 255);
  circle(anchor4X_control2, anchor4Y_control2, 10);
}