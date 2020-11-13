class Particle
{
  constructor (x,y,r) {
   
  var options={
  isStatic:true,
 
 }
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.color=color(random(0,255),random(0,255),random(0,255))
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