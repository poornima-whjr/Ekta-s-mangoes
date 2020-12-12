class Tree{

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:0,
            restitution:1
        }
   
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        this.height=height;
        this.width=width;
        this.image=loadImage("Plucking mangoes/tree.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }
}