/*
class Paper {
  constructor(x,y, radius){    
  var options ={
      isStatic: false,
      restitution: 0.3,
      friction: 1.0,
      density: 1.2
   }
   this.body = Bodies.circle(x,y,radius, options);
   this.radius = 70;
   this.image = loadImage("Images/paper.png");
   World.add(world, this.body);
}

display(){
  
  var pos = this.body.position;
  push;
  fill("purple");
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  circle(pos.x, pos.y, this.radius);
  pop;
}
};

*/

class Paper {
  constructor(x,y, radius){    
  var options ={
      isStatic: false,
      restitution: 0.3,
      friction: 1.0,
      density: 1.2
   }
   this.radius = radius;
   this.x =x;
   this.y =y;
   this.image = loadImage("Images/paper.png");
 
   this.body = Bodies.circle(this.x,this.y,this.radius, options);
    World.add(world, this.body);
}

display(){
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  fill(255,0,255);
  imageMode(CENTER);
  image(this.image, 20 , 45, this.radius, this.radius);
  pop();
}
};