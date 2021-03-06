
let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 90.0; // Height of wave
let period = 200.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(710, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
  strokeWeight(3);
  stroke(10, 10, 150);
  fill(10, 10, 150)
  line(100 * xspacing, 50,  100 * xspacing, 350);
  triangle(100 * xspacing - 5, 50, 100 * xspacing + 5, 50, 100 * xspacing, 40)
  line(100 * xspacing, 350,  600 * xspacing, 350);

  triangle(600 * xspacing, 355, 600 * xspacing, 345, 600 * xspacing + 10, 350)
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.10;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 100; x < yvalues.length - 200; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 4, 4);
  }
  fill(255, 60, 90)
  ellipse(yvalues.length - 200, height / 2 + yvalues[yvalues.length - 200], 10, 10)
  
}
