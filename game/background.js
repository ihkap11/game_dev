class Layer {
  constructor(game, width, height, speedModifier, image) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }

  update() {
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 1667;
    this.height = 500;

    this.layerImages = [
      document.getElementById("layer1"),
      document.getElementById("layer2"),
      document.getElementById("layer3"),
      document.getElementById("layer4"),
      document.getElementById("layer5"),
    ];
    this.backgroundLayers = this.createBackgroundLayers();
  }

  createBackgroundLayers() {
    const layerSpeedModifiers = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
    return this.layerImages.map((image, index) => {
      return new Layer(
        this.game,
        this.width,
        this.height,
        layerSpeedModifiers[index],
        image
      );
    });
  }

  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }

  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}
