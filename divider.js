function Divider(x,y){
    this.body = Bodies.rectangle(x,y,10,100)
    World.add(world,this.body)
    Matter.Body.setStatic(this.body,true)
    this.x = x
    this.y = y
    this.show = function(){
        push()
        translate(this.x,this.y)
        rotate(this.body.angle)
        rect(0,0,10,100)
        pop()
    }

}