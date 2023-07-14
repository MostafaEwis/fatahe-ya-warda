let firstWarda, secondWarda;
let d = true;
let wardas = [];
let bigWardaR;
let wardasCount = 400;
let w = 0;
//fixed comment
function setup() {
  createCanvas(700, 700);
  Warda.maxR = width / 16;
  Warda.minR = width / 64;
  Warda.pointStrokeWeight = 3;
  Warda.animationSteps = 120;
  bigWardaR = width / 2;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      wardas.push(
        new Warda({
          x: i * (width / 20),
          y: j * (height / 20),
        })
      );
    }
  }
}

function draw() {
  w >= wardasCount && (w = 0);
  background("darkblue");
  // translate(width / 2, height / 2);
  stroke("gold");

  wardas.forEach((e) => {
    e.show();
  });

  !wardas[floor(w)].isAnimating && wardas[floor(w)].animateWarda();
  w += 1;
}
