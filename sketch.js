let frame_rate_value;

var initialRadius;
var radius;

var HandleDistance;

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

var incremento = 0;

var teta;

var heightControl = 0;
var radiusControl = 0;

let animation_Cicle_Duration_In_Seconds;
let animation_Cicle_Duration_In_Frames;

function setup() {
  createCanvas(windowWidth, windowHeight);

  frame_rate_value = 60;
  frameRate(frame_rate_value);

  initialRadius = 100;
  radius = initialRadius;
  HandleDistance = radius * 0.551915024494

  anchor0X = width / 2 - radius;
  anchor0Y = height / 2;
  
  anchor1X = width / 2 -  radius;
  anchor1Y = height / 2;

  anchor2X = width / 2;
  anchor2Y = height / 2 + radius;
  anchor2X_control1 = width / 2 -radius;
  anchor2Y_control1 = height / 2 + HandleDistance;
  anchor2X_control2 = width / 2 - HandleDistance;
  anchor2Y_control2 = height / 2 + radius;

  anchor3X = width / 2 + radius;
  anchor3Y = height / 2;
  anchor3X_control1 = width / 2 + HandleDistance;
  anchor3Y_control1 = height / 2 + radius;
  anchor3X_control2 = width / 2 + radius;
  anchor3Y_control2 = height / 2 + HandleDistance;

  anchor4X = width / 2 + radius;
  anchor4Y = height / 2;

  teta = HALF_PI;

  animation_Cicle_Duration_In_Seconds = 3;
  animation_Cicle_Duration_In_Frames = frame_rate_value * animation_Cicle_Duration_In_Seconds;

}

function draw() {
  background(255);

  line(0, height / 2, width, height / 2);
  line(0, height / 2 + radius, width, height / 2 + radius);
  line(0, height / 2 + (radius * 2), width, height / 2 + (radius * 2));
  line(width / 2 - (radius), 0, width / 2 - (radius), height);

  if (frameCount % animation_Cicle_Duration_In_Frames <= animation_Cicle_Duration_In_Frames / 3)
  {
    teta = HALF_PI;

    drawCircle(0);
  } else if (frameCount % animation_Cicle_Duration_In_Frames <= (animation_Cicle_Duration_In_Frames / 3) * 2) {
    atualizarPontos();
    desenharBezier();
  } else {
    background(0);

    drawCircle(255);
  }

  // showHandles();

  if(mouseX > width / 2)
  {
    showHandles();
  }
  noLoop();
}

function atualizarPontos() {
  HandleDistance = radius * 0.551915024494;

  anchor0X = 0;
  anchor0Y = 0;

  anchor1X = (width / 2) - radius + (cos(teta) * ((HALF_PI / 2) * radius));
  anchor1Y = (height / 2) + radius - (sin(teta) * (radius));

  anchor2X = (width / 2);
  anchor2Y = (height / 2) + radius;
  anchor2X_control1 = (width / 2) - radius + (cos(teta) * (1));
  anchor2Y_control1 = (height / 2) + radius - (sin(teta) * (radius - HandleDistance));
  anchor2X_control2 = (width / 2) - HandleDistance;
  anchor2Y_control2 = (height / 2) + radius;

  anchor3X = (width / 2) + radius -(cos(teta) * ((HALF_PI / 2) * radius));
  anchor3Y = (height / 2) + radius - (sin(teta) * (radius));
  anchor3X_control1 = (width / 2) + HandleDistance;
  anchor3Y_control1 = (height / 2) + radius;
  anchor3X_control2 = (width / 2) + radius + (cos(teta) * (1));
  anchor3Y_control2 = (height / 2) + radius - (sin(teta) * (radius - HandleDistance));

  anchor4X = width;
  anchor4Y = 0;

  if(frameCount % animation_Cicle_Duration_In_Frames <= (animation_Cicle_Duration_In_Frames / 3) * 2 || frameCount >= animation_Cicle_Duration_In_Frames)
  {
    teta += PI / (animation_Cicle_Duration_In_Frames / 3);
  }
}

function desenharBezier() {
  fill(255,255,0,100);
  // fill(0);
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

function drawCircle(_fill) {
  push();
  fill(0,0,175,100);
  fill(_fill);
  circle(width / 2, height / 2 - (heightControl * 1), radius * 2);
  pop();
}
