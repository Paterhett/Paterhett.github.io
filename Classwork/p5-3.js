///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(1905, 917);
};
let shape = {
  x: 327,
  y: 800,
  vx: -7,
  vy: -6,
};
let shape1 = {
  x: 273,
  y: 392,
  vx: 17,
  vy: -29,
};
let shape2 = {
  x: 362,
  y: 486,
  vx: 6,
  vy: 0,
};
let shape3 = {
  x: 937,
  y: 80,
  vx: -7,
  vy: 5,
};
let shape4 = {
  x: 500,
  y: 500,
  vx: -7,
  vy: -6,
};
let shapy = {
  x: 1089,
  y: 476,
  vx: -4,
  vy: -10,
};
var draw = function () {
  background(0);
  fill("purple");
  circle((shape.x += shape.vx), (shape.y += shape.vy), 100);
  if (shape.x < 50 || shape.x > 1855) {
    shape.vx = -shape.vx;
  }
  if (shape.y < 50 || shape.y > 867) {
    shape.vy = -shape.vy;
  }
  fill("yellow");
  circle((shape1.x += shape1.vx), (shape1.y += shape1.vy), 100);
  if (shape1.x < 50 || shape1.x > 1855) {
    shape1.vx = -shape1.vx;
  }
  if (shape1.y < 50 || shape1.y > 867) {
    shape1.vy = -shape1.vy;
  }
  fill("red");
  circle((shape3.x += shape3.vx), (shape3.y += shape3.vy), 100);
  if (shape3.x < 50 || shape3.x > 1855) {
    shape3.vx = -shape3.vx;
  }
  if (shape3.y < 50 || shape3.y > 867) {
    shape3.vy = -shape3.vy;
  }
  fill("green");
  circle((shape4.x += shape4.vx), (shape4.y += shape4.vy), 100);
  if (shape4.x < 50 || shape4.x > 1855) {
    shape4.vx = -shape4.vx;
  }
  if (shape4.y < 50 || shape4.y > 867) {
    shape4.vy = -shape4.vy;
  }
  fill("blue");
  circle((shapy.x += shapy.vx), (shapy.y += shapy.vy), 100);
  if (shapy.x < 50 || shapy.x > 1855) {
    shapy.vx = -shapy.vx;
  }
  if (shapy.y < 50 || shapy.y > 867) {
    shapy.vy = -shapy.vy;
  }
};
