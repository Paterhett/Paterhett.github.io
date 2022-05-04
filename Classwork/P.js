///<reference path="lib/p5.global-mode.d.ts" />

class Pong {
  constructor() {
    this.t = new T();
    this.lp = new Rp();
    this.rp = new Lp();
    this.s = new S();
    this.b = new B();
  }
  draw() {
    this.t.draw();
    this.lp.draw();
    this.rp.draw();
    this.b.draw();
    this.s.draw();
  }
}
class T {
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
class P {
  constructor() {
    this.x = 10;
    this.y = windowHeight / 2;
    this.w = 10;
    this.h = 50;
  }
  draw() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}
class Lp extends P {
  draw() {
    this.x = 50;
    this.y = mouseY;
    super.draw();
  }
}
class Rp extends P {
  draw() {
    this.x = windowwidth - 50;
    this.y = mouseX;
    super.draw();
  }
}
class B {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.vx = 6;
    this.vy = 4;
    this.c = 255;
    this.s = 10;
  }

  draw() {
    fill(this.c);
    if (this.x + this.s >= windowWidth) {
      this.vx = -this.vx;
      S.ls += 1;
    }
    if (this.x + this.s <= 0) {
      this.vx = -this.vx;
      S.rs += 1;
    }
    if (this.x <= Lp.x) {
      if (Lp.y >= this.y && Lp.y - Lp.h <= this.y) {
        this.vx = -this.vx;
      }
    }
    if (this.x <= Rp.x) {
      if (Rp.y >= this.y && Rp.y - Rp.h <= this.y) {
        this.vx = -this.vx;
      }
    }
    if (this.y < 5 || this.y + this.s > windowHeight) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
    square(this.x, this.y, this.s);
  }
}

/** Score */
class S {
  constructor() {
    this.ls = 0;
    this.rs = 0;
  }
  draw() {
    fill(255, 100, 255);
    textSize(32);
    text(this.ls, windowWidth / 2 - 50, windowHeight - 50);
    text(this.rs, windowWidth / 2 + 50, windowHeight - 50);
  }
}
