export class InputHandler {
  constructor() {
    this.keys = [];
    const arrowKeys = [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "Enter",
    ];

    window.addEventListener("keydown", (e) => {
      if (arrowKeys.includes(e.key) && !this.keys.includes(e.key)) {
        this.keys.push(e.key);
      }
    });

    window.addEventListener("keyup", (e) => {
      if (arrowKeys.includes(e.key)) {
        const index = this.keys.indexOf(e.key);
        if (index !== -1) {
          this.keys.splice(index, 1);
        }
      }
    });
  }
}
