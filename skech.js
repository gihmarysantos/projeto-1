function setup() {
  createCanvas(1000,800);
  background(" rgb(255,192,227)");
}

function draw() {

  fill("black");
  stroke("blue");
  if(mouseIsPressed)
   rect(mouseX,mouseY,50,70);
}
