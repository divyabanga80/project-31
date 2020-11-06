class Divsion{

constructor(x,y,w,h){

var options={

isStatic : true

}

this.body=  Bodies.Rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
World.add(world,this.body)

}
display(){
var pos=this.body.position;
rectMode(CENTRE);
Fill("white");
rect(pos.x,pos.y,this.w,this.h)

for(vark=8; k<=width;k=k+80){
divisions.push(new Divisions(k,height* divisionHeight/2,10,divisionHeight));
}
}
};