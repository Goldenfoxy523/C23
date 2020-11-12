class Box{

    constructor(x,y,width,height){

        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;


        World.add(world,this.body);
    }

    display(){
        
        var angle = this.body.angle
        var position = this.body.position
        push();
        // translate to the bodys position which needs to rotate
        translate(position.x, position.y);

        rotate(angle);
        
        rectMode(CENTER);
        
        rect(0, 0,this.width,this.height);

        pop();

        

    }
}