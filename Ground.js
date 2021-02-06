class Ground{

    constructor(x,y,w,h){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,w,h,ground_options)
          this.w= w;
          this.h=h;
          World.add(world,this.ground);
    }
    display(){
        push();
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
        pop()
    }
}