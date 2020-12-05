class Mango {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic:true
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    this.image = loadImage("sprites/mango.png");
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    stroke("green");
    fill(255); 
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
  }
};