let frame_rate_value;

let initialRadius;
let radius;

let HandleDistance;

let anchor0X;
let anchor0Y;

let anchor1X;
let anchor1Y;

let anchor2X;
let anchor2Y;
let anchor2X_control1;
let anchor2Y_control1;
let anchor2X_control2;
let anchor2Y_control2;

let anchor3X;
let anchor3Y;
let anchor3X_control1;
let anchor3Y_control1;
let anchor3X_control2;
let anchor3Y_control2;

let anchor4X;
let anchor4Y;
let anchor4X_control1;
let anchor4Y_control1;
let anchor4X_control2;
let anchor4Y_control2;

let incremento;

let theta;

let heightControl;
let radiusControl;

let animation_Cicle_Duration_In_Seconds;
let animation_Cicle_Duration_In_Frames;

let frame_oddness;
let cicle_count;

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

  theta = HALF_PI;

  heightControl = -radius;
  radiusControl = 0;

  animation_Cicle_Duration_In_Seconds = 3;
  animation_Cicle_Duration_In_Frames = frame_rate_value * animation_Cicle_Duration_In_Seconds;

  cicle_count = 0;
  frame_oddness = false;
}

function draw() {
  
  if (animation_cicle_ended()) {
    // noLoop();
    theta = HALF_PI;
    cicle_count += 1;
    reinicia_altura();
  }
  
  background(atualiza_cor_de_fundo());
  fill(atualiza_cor_do_circulo());

  atualiza_altura();
  atualiza_raio();
  // radius = radiusControl;

  if (frameCount % animation_Cicle_Duration_In_Frames <= (animation_Cicle_Duration_In_Frames / 3) * 2)
  {
    drawCircle(0);
  } else {
    atualizarPontos();
    desenharBezier();
  }

  if(mouseX > width / 2)
  {
    showHandles();
  }

  stroke(255,255,0);
  mostra_linha_de_controle();
}

function mostra_linha_de_controle() {
  line(0, height / 2, width, height / 2);
  line(0, height / 2 + radius, width, height / 2 + radius);
  line(0, height / 2 + (radius * 2), width, height / 2 + (radius * 2));
  line(width / 2 - (radius), 0, width / 2 - (radius), height);
}

function atualizarPontos() {
  HandleDistance = radius * 0.551915024494;

  anchor0X = 0;
  anchor0Y = 0;

  anchor1X = (width / 2) - radius + (cos(theta) * ((HALF_PI / 2) * radius));
  anchor1Y = (height / 2) + radius - (sin(theta) * (radius)) - heightControl;

  anchor2X = (width / 2);
  anchor2Y = (height / 2) + radius - heightControl;
  anchor2X_control1 = (width / 2) - radius + (cos(theta) * (1));
  anchor2Y_control1 = (height / 2) + radius - (sin(theta) * (radius - HandleDistance)) - heightControl;
  anchor2X_control2 = (width / 2) - HandleDistance;
  anchor2Y_control2 = (height / 2) + radius - heightControl;

  anchor3X = (width / 2) + radius -(cos(theta) * ((HALF_PI / 2) * radius));
  anchor3Y = (height / 2) + radius - (sin(theta) * (radius))  - heightControl;
  anchor3X_control1 = (width / 2) + HandleDistance;
  anchor3Y_control1 = (height / 2) + radius - heightControl;
  anchor3X_control2 = (width / 2) + radius + (cos(theta) * (1));
  anchor3Y_control2 = (height / 2) + radius - (sin(theta) * (radius - HandleDistance)) - heightControl;

  anchor4X = width;
  anchor4Y = 0;

  if(frameCount % animation_Cicle_Duration_In_Frames > (animation_Cicle_Duration_In_Frames / 3) * 2)
  {
    theta += PI / (animation_Cicle_Duration_In_Frames / 3);
  }
}

function desenharBezier() {
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
  push();
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
  pop();
}

function drawCircle() {
  circle(width / 2, height / 2 - (heightControl * 1), radius * 2);
}

function atualiza_cor_de_fundo() {
  if (cicle_count % 2 == 0)
  {
    return 255;
  } else  {
    return 0;
  }
}

function atualiza_cor_do_circulo() {
  if (cicle_count % 2 == 0) {
    return 0;
  } else {
    return 255;
  }
}

//função que detecta se o ciclo de animação acabou
function animation_cicle_ended() {
  if (frameCount % animation_Cicle_Duration_In_Frames == 0) {
    return true;
  } else {
    return false;
  }
}

function atualiza_raio() {
  if (frameCount % animation_Cicle_Duration_In_Frames > animation_Cicle_Duration_In_Frames / 2) {
    decreaseRadius();
  } else {
    increaseRadius();
  }
}

function increaseRadius() {
  radiusControl += (width / 2) / (animation_Cicle_Duration_In_Frames / 3) * 2;
}

function decreaseRadius() {
  radiusControl -= (width / 2) / (animation_Cicle_Duration_In_Frames / 3) * 2;
}

function atualiza_altura() {
  heightControl += (radius * 2) / animation_Cicle_Duration_In_Frames;
}

function reinicia_altura() {
  heightControl = -radius;
}