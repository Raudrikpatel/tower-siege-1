class polygon {
  constructor(x,y,w,h) {
    var options = {
        isStatic: false,
        'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    fill("yellow")
    this.image = loadImage("polygon.png");

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.w, this.h);
    imageMode(CENTER);
        image(this.image,pos.x, pos.y,40,40);
        pop();
  }
};
