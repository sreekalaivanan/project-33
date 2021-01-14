var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,75));
  }

  for (var j = 15; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,175));
  }

  for (var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,275));
  }

  for (var j = 15; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,375));
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10),10,10));
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,75));
  }

  for (var j = 15; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,175));
  }

  for (var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,275));
  }

  for (var j = 15; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,375));
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10),10,10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; j++){
    divisions[k].display();
  }

  for (var j = 0; j < particles.length; j++){
    plinkos[j].display();
  }
        

}