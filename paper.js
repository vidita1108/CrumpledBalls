class Paper{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;

        var options={
            restitution: 0.3, density: 1.2, friction: 0.5
        }

        this.object = Bodies.circle(100, 100, 40, options);
        World.add(world, circle);
       
    }

    display(){
    var angle = this.object.angle;
    var pos = this.object.position;
    push();
    translate(pos.x, pos.y);
    fill("purple");
    rotate(angle);
    elipseMode(RADIUS);
    circle(0, 0, this.w, this.h);
    pop();
    }

   
}