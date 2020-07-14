class Ground {
	
	constructor(x,y,width,height){
	var option={
		isStatic:true
	}
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
    this.color="white";
    World.add(world,this.body);
	}
  	display(){
  	push();
  	fill(this.color);
  	rectMode(CENTER);
 	rect(this.body.position.x,this.body.position.y,this.width,this.height)
 	pop();
  	}


  		

  	

  
}

