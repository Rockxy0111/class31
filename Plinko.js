class Plinko
{
  constructor (x,y,r) {
   
  var options={
  isStatic:true,
 
 }

this.r=r
this.body=Bodies.circle(x,y,this.r,options)
World.add(world,this.body)

  }
  display() {

    var paperpos=this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y)
    fill(255);
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
    
    }
}