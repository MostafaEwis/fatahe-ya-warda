class Warda {
  constructor(pos) {
    this.pos = pos;
    this.r = Warda.maxR;
    this.dR = -1 * ((Warda.maxR - Warda.minR) / Warda.animationSteps);
    this.isAnimating = false;
  }

  static maxR = 700 / 2;
  static minR = 700 / 16;
  static animationSteps = 60;
  static dotsN = 40;
  static pointStrokeWeight = 5;
  show() {
    for (let i = 0; i < Warda.dotsN; i++) {
      strokeWeight(Warda.pointStrokeWeight);
      point(
        this.r * cos(i * (TWO_PI / Warda.dotsN)) + this.pos.x,
        this.r * sin(i * (TWO_PI / Warda.dotsN)) + this.pos.y
      );
    }
    if (this.isAnimating) this.animateWarda();
  }
  animateWarda() {
    this.isAnimating = true;
    this.r += this.dR;
    if (this.r + this.dR > Warda.maxR || this.r + this.dR < Warda.minR) {
      this.dR *= -1;
    }
    if (this.r == Warda.maxR) {
      this.isAnimating = false;
    }
  }
}
