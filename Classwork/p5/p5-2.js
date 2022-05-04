///<reference path="../lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(windowWidth, windowHeight - 4);
};

var draw = function () {
  background(random(0, 255), random(0, 255), random(0, 255));
  for (i = 0; i < 500; i++) {
    strokeWeight(random(0, 6));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    line(
      random(0, windowWidth),
      random(0, windowHeight - 4),
      random(0, windowWidth),
      random(0, windowHeight - 4)
    );
  }
  for (i = 0; i < 500; i++) {}
};
