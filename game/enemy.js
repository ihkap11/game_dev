class Enemy {
  constructor() {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTime = 0;
  }
  update(deltaTimeRefreshRate) {
    //movement
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTimeRefreshRate;
    }
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height.this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export class FlyingEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 60;
    this.height = 44;
    this.x = 200;
    this.y = 200;
    this.speedX = 2;
    this.speedY = 0;
    this.maxFrame = 5;
    this.image = document.getElementById("enemy_fly");
  }
  update(deltaTimeRefreshRate) {
    super.update(deltaTimeRefreshRate);
  }
}

export class GroundEnemy extends Enemy {}

export class ClimbingEnemy extends Enemy {}
