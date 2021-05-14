class crumbledPaper {
    constructor(x,y,radius) {
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("paper.png");

        World.add(world,this.body);
    }

    display () {
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,40,40,this.radius,this.radius);
        pop()
    }
}