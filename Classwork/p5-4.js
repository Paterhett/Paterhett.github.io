///<reference path="lib/p5.global-mode.d.ts" />
let speed = Math.floor(Math.random() * 10);
let speed1 = Math.floor(Math.random() * 10);
if (speed % 2) {
  speed = -speed;
}
if (speed1 % 2) {
  speed1 = -speed1;
}
let shape = {
  x: 35,
  y: 35,
  vx: speed,
  vy: speed1,
};
let shape1 = {
  x: 40,
  y: 65,
  vx: speed,
  vy: speed1,
};
let shape2 = {
  x: 60,
  y: 35,
  vx: speed,
  vy: speed1,
};
let shape3 = {
  x: 80,
  y: 65,
  vx: speed,
  vy: speed1,
};
let shape4 = {
  x: 75,
  y: 70,
  vx: speed,
  vy: speed1,
};
let shape5 = {
  x: 80,
  y: 90,
  vx: speed,
  vy: speed1,
};
let shape6 = {
  x: 80,
  y: 78,
  vx: speed,
  vy: speed1,
};
let shape7 = {
  x: 100,
  y: 70,
  vx: speed,
  vy: speed1,
};
let shape8 = {
  x: 115,
  y: 35,
  vx: speed,
  vy: speed1,
};
let shape9 = {
  x: 130,
  y: 35,
  vx: speed,
  vy: speed1,
};
let shape10 = {
  x: 150,
  y: 65,
  vx: speed,
  vy: speed1,
};
let shape11 = {
  x: 145,
  y: 70,
  vx: speed,
  vy: speed1,
};
let shape12 = {
  x: 150,
  y: 90,
  vx: speed,
  vy: speed1,
};
let shape13 = {
  x: 170,
  y: 70,
  vx: speed,
  vy: speed1,
};
var setup = function () {
  createCanvas(1905, 915);
};
var draw = function () {
  background(0);
  noStroke();

  //H
  rect((shape.x += shape.vx), (shape.y += shape.vy), 6, 60); //0
  rect((shape1.x += shape1.vx), (shape1.y += shape1.vy), 21, 6); //1
  rect((shape2.x += shape2.vx), (shape2.y += shape2.vy), 6, 60); //2
  //e
  rect((shape3.x += shape3.vx), (shape3.y += shape3.vy), 20, 5); //3
  rect((shape4.x += shape4.vx), (shape4.y += shape4.vy), 6, 21); //4
  rect((shape5.x += shape5.vx), (shape5.y += shape5.vy), 21, 6); //5
  rect((shape6.x += shape6.vx), (shape6.y += shape6.vy), 21, 6); //6
  rect((shape7.x += shape7.vx), (shape7.y += shape7.vy), 6, 9); //7
  //l
  rect((shape8.x += shape8.vx), (shape8.y += shape8.vy), 5, 60); //8
  //l
  rect((shape9.x += shape9.vx), (shape9.y += shape9.vy), 5, 60); //9
  //o
  rect((shape10.x += shape10.vx), (shape10.y += shape10.vy), 21, 6); //10
  rect((shape11.x += shape11.vx), (shape11.y += shape11.vy), 6, 21); //11
  rect((shape12.x += shape12.vx), (shape12.y += shape12.vy), 21, 6); //12
  rect((shape13.x += shape13.vx), (shape13.y += shape13.vy), 6, 21); //13

  ///////////////////////////////////////////////////0done
  if (shape.x < 0 || shape.x > 1765) {
    shape.vx = -shape.vx;
    shape1.vx = -shape1.vx;
    shape2.vx = -shape2.vx;
    shape3.vx = -shape3.vx;
    shape4.vx = -shape4.vx;
    shape5.vx = -shape5.vx;
    shape6.vx = -shape6.vx;
    shape7.vx = -shape7.vx;
    shape8.vx = -shape8.vx;
    shape9.vx = -shape9.vx;
    shape10.vx = -shape10.vx;
    shape11.vx = -shape11.vx;
    shape12.vx = -shape12.vx;
    shape13.vx = -shape13.vx;
    fill(random(0, 255), random(0, 255), random(0, 255));
    background(random(0, 255), random(0, 255), random(0, 255));
  }
  if (shape.y < 0 || shape.y > 855) {
    shape.vy = -shape.vy;
    shape1.vy = -shape1.vy;
    shape2.vy = -shape2.vy;
    shape3.vy = -shape3.vy;
    shape4.vy = -shape4.vy;
    shape5.vy = -shape5.vy;
    shape6.vy = -shape6.vy;
    shape7.vy = -shape7.vy;
    shape8.vy = -shape8.vy;
    shape9.vy = -shape9.vy;
    shape10.vy = -shape10.vy;
    shape11.vy = -shape11.vy;
    shape12.vy = -shape12.vy;
    shape13.vy = -shape13.vy;
    fill(random(0, 255), random(0, 255), random(0, 255));
    background(random(0, 255), random(0, 255), random(0, 255));
  }

  /*
  //,
  rect(185, 90, 5, 10);
  //R
  rect(225, 35, 5, 60);
  rect(230, 35, 20, 5);
  rect(250, 40, 5, 20);
  rect(230, 60, 20, 5);
  rect(250, 65, 5, 30);
  //h
  rect
  */
};
