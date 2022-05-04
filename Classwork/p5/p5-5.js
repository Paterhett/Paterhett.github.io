///<reference path="../lib/p5.global-mode.d.ts" />

class Shape {
  constructor(vx = 1, vy = 1, color) {
    this.x = random(50, 550);
    this.y = random(50, 350);
    this.vx = random(-7, 7);
    this.vy = random(-7, 7);
    this.color = [random(0, 255), random(0, 255), random(0, 255)];
  }
}
class Square extends Shape {
  draw() {
    super.draw();
    square((this.x += this.vx), (this.y += this.vy), 50);
    fill(this.color);
    if (this.x < 0 || this.x > 550) {
      this.vx = -this.vx;
    }
    if (this.y < 25 || this.y > 350) {
      this.vy = -this.vy;
    }
  }
}
class Circle extends Shape {
  draw() {
    super.draw();
    circle((this.x += this.vx), (this.y += this.vy), 50);
    fill(random(0, 255), random(0, 255), random(0, 255));
    if (this.x < 0 || this.x > 550) {
      this.vx = -this.vx;
    }
    if (this.y < 25 || this.y > 350) {
      this.vy = -this.vy;
    }
  }
}
let shapes = [];

var setup = function () {
  createCanvas(600, 400);
  for (let i = 0; i < random(50, 400); i++) {
    shapes.push(new Circle(), new Square());
  }
};

var draw = function () {
  background(random(0, 255));
  for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index];
    shape.draw();
  }
};
