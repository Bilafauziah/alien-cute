class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2,2), random(-2,2)) 
    this.acceleration = createVector(0,0); 
  }
  display(){ 
    stroke(139,0,0)
    fill(249,19,147)
    ellipse(this.location.x,this.location.y,100,50)
    fill(254,230,250)
    ellipse(this.location.x,this.location.y-15,60,50)
   
  } 
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 8
    dir.normalize(); 
    dir.mult(0.3); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<5;i++){
    movers[i] = new Mover(random(windowWidth), random(windowHeight));   
  }
}
function draw() {
  background(22); 
  stroke(144,238,144)
  fill(144,238,144)
  ellipse(mouseX,mouseY-20,80,99)
  ellipse(mouseX,mouseY-30,90,90)
  stroke(128,128,1)
  fill(105,105,105)
  ellipse(mouseX+16,mouseY-28,20,40)
  ellipse(mouseX-16,mouseY-28,20,40)
  fill(205,92,92)
  ellipse(mouseX,mouseY+6,26,20)
  
  
    for (let i=0; i<5;i++){
      movers[i].cekUjung(); 
      movers[i].display(); 
      movers[i].update();    
  }  
}