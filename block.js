class block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restituation:1.0,
        friction:0.5,
        density:2.0

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
