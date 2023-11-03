import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { FlyingEnemy, ClimbingEnemy, GroundEnemy } from "./enemy.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 80;
      this.speed = 0;
      this.maxSpeed = 10;

      this.background = new Background(this);
      this.player = new Player(this);
      this.input = new InputHandler();

      this.enemies = [];
      this.enemyTimer = 0;
      this.enemyEntryInterval = 1000;
    }
    update(deltaTimeRefreshRate) {
      this.background.update();
      this.player.update(this.input.keys, deltaTimeRefreshRate);

      // handle enemies
      if (this.enemyTime > this.enemyInterval) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
      this.enemies.forEach((enemy) => {
        enemy.update(deltaTime);
      });
    }
    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });
    }
    addEnemy() {
      this.enemies.push(new FlyingEnemy(this));
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);
  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTimeRefreshRate = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTimeRefreshRate);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate(0);
});
