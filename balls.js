function Balls(x,y,w,s){
    this.body = Bodies.circle(x,y,w)
    World.add(world,this.body);
    Matter.Body.setStatic(this.body,s)
    this.x = x
    this.y = y
    this.w = w
    this.appear = function (){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.w)
        pop()
    }
}