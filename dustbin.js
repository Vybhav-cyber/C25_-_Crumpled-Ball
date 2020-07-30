/*
class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            friction: 1.0,
            density: 1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/dustbingreen.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
};
*/

class Dustbin{
    constructor(x,y)
    {
        var options={
            isStatic: true,
            friction: 1.0,
            density: 1.0
        }
        this.thickness = 20;
        this.x=x;
        this.y=y;
        this.width = 200;
        this.height = 213;
        this.image = loadImage("Images/dustbinGreen.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
        this.leftBody =  Bodies.rectangle(this.x - this.width/2, this.y - this.height/2, this.thickness, this.height, this.thickness, options);
        this.rightBody = Bodies.rectangle(this.x + this.width/2, this.y - this.height/2, this.thickness, this.height,options);
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display() {
        var posBottom = this.bottomBody.position;
        fill("yellow");
        
  //      var posLeft =  this.leftBody.position;
  //      var posRight = this.rightBody.postition;
/*
   //     push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER);
        fill(255);
    //    pop();

      //  push()
        translate();
        rectMode(CENTER);
        fill(255);
     //   pop();
//*/
       // push()
        translate(posBottom.x, posBottom.y);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2 + 10, this.width, this.height);
     //   pop();
    }
};