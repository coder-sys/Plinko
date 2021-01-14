const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var containers = []
var row1 = []
var row2 = []
var row3 = []
var base
var e = 40
var r = 40
var q = 40
var da = []
var x = 40
function mousePressed(){
  containers.push(new Balls(mouseX,mouseY,20,false))
}
function setup() {
  var canvas = createCanvas(800,400)
  engine = Engine.create()
  world = engine.world
  Engine.run(engine)
  for(var u = 0;u<10;u++){
    row1.push(new Balls(e,60,20,true))
    e += 90
  }
  for(var g = 0;g < 10;g++){
    row2.push(new Balls(r,120,20,true))
    r += 90
  }
  for(var o=0;o<10;o++){
    row3.push(new Balls(q,180,20,true))
      q += 90
  }
  for(var er = 0;er < 10;er++){
    da.push(new Divider(x,290))
    x += 90
  }
  base = Bodies.rectangle(367,387,width,10,{isStatic:true})
  World.add(world,base)
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var i = 0;i<containers.length;i++){
    containers[i].appear()
  }
  for(var t = 0;t < row1.length;t++){
    row1[t].appear()
  }
  for(var f = 0;f < row2.length;f++){
    row2[f].appear()
  }
  for(var b = 0;b < row3.length;b++){
    row3[b].appear()
  }
  push()
  translate(base.position.x,base.position.y)
  rotate(base.angle)
  rectMode(CENTER)
  fill(255)
  rect(0,0,width,10)
  pop()
  for(var c = 0;c<10;c++){
    da[c].show()
  }
}