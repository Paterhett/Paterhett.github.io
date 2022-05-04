///<reference path="lib/p5.global-mode.d.ts" />

class Pong {
  constructor() {
    this.table = new Table();
    this.leftPaddle = new LeftPaddle();
    this.rightPaddle = new RightPaddle();
    this.ball = new Ball(this.s);
    this.score = new S();
  }

  draw() {
    this.table.draw();
    this.leftPaddle.draw();
    this.rightPaddle.draw();
    this.ball.draw();
    this.score.draw();
  }
}

class Table {
  draw() {
    background("black");

    let midPoint = windowWidth / 2;
    for (let y = 0; y < windowHeight; y++) {
      fill(50);
      rect(midPoint, y, 10, 20);
      y += 40;
    }
  }
}
class Paddle {
  constructor() {
    this.x = 10;
    this.y = windowHeight / 2;
    this.width = 10;
    this.height = 100;
  }
  draw() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
}
class LeftPaddle extends Paddle {
  x = 50;
  draw() {
    this.y = mouseX;
    super.draw();
  }
}
class RightPaddle extends Paddle {
  x = windowWidth - 50;
  draw() {
    this.y = mouseY;
    super.draw();
  }
}
class Ball {
  constructor() {
    this.s = S;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.vx = 3;
    this.vy = 2;
    this.color = 255;
  }

  draw() {
    fill(this.color);
    if (this.x + 10 >= windowWidth) {
      this.vx = -this.vx;
      LeftScore += 1;
    }
    if (this.x + 10 <= 0) {
      this.vx = -this.vx;
      RightScore += 1;
    }
    if (this.y < 0 || this.y > windowHeight - 14) {
      this.vy = -this.vy;
    }
    if (this.x <= 60) {
      if (this.y >= mouseX && this.y <= mouseX + 100) {
        if (this.x < 40) {
          this.x = windowWidth / 2;
          RightScore += 1;
        } else {
          this.vx = -this.vx;
          this.vx += 0.3;
          this.vy += 0.2;
        }
      }
    }
    if (this.x >= windowWidth - 60) {
      if (this.y >= mouseY && this.y <= mouseY + 100) {
        if (this.x > windowWidth - 40) {
          this.x = windowWidth / 2;
          LeftScore += 1;
        } else {
          this.vx = -this.vx;
          this.vx += 0.3;
          this.vy += 0.2;
        }
      }
    }
    this.x += this.vx;
    this.y += this.vy;
    square(this.x, this.y, 10);
  }
}
RightScore = 0;
LeftScore = 0;
class S {
  constructor() {}
  draw() {
    fill(255, 100, 255);
    textSize(32);
    text(LeftScore, windowWidth / 2 - 50, windowHeight - 50);
    text(RightScore, windowWidth / 2 + 50, windowHeight - 50);
  }
}
