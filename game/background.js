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
    // allows the layer to continuously scroll from right to left
    //(this.x < -this.width): the layer has moved completely off the screen
    // to the left.
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }

  draw(context) {
    // draws the layer at the current this.x position, effectively displaying
    // the layer once at its current position.
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    //  draws the same layer again, but this time it's offset by this.width
    // to the right. This means that it's drawn right next to the first instance of the layer.
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

    this.layerSpeedModifiers = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
    this.backgroundLayers = this.createBackgroundLayers();
  }

  createBackgroundLayers() {
    return this.layerImages.map((image, index) => {
      return new Layer(
        this.game,
        this.width,
        this.height,
        this.layerSpeedModifiers[index],
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
