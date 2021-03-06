class Iron
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 2,
            'density': 2,            
        }
        this.body=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body);
        
        this.width=90;
        this.height=40;
       
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();     
    }
}