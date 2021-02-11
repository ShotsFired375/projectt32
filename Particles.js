class Particles{
    constructor(x,y,width,height) {

        var options = {
          'restitution':0.01,
          'friction':0.01,
          'density':1000
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("white");
        fill("lightblue");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}