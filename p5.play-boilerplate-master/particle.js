class Particle{


constructor(x,y,r){
    var options={

        restitution:0.4

    }
    this.body=Bodies.circle(x,y,this.r,options)
    this.color=color|random(0,255),random(8,255),random (0,255)
World.add(world,this.body)

}

display(){

 var pos=this.body.position;
 var angle=this.body.angle;
 Push()
 translate(pos.x,pos.y);
 Rotate(angle);
 Fill(this.color);
 

for(var j=0;j<particles.length;j++){

particles[j].display();

}
for(var k=0;k<division.length;k++){


    divisions[k].display();
}

}






}