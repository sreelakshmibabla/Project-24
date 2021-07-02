class Metal{
	constructor(x,y,r)
	{
		var options = {
			'restitution':1,
			'friction':6,
			'density':2
		}
		this.x = x;
		this.y = y;
		this.r = r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var metalpos=this.body.position;		
			push()
			translate(metalpos.x, metalpos.y);
			rectMode(CENTER)
			strokeWeight(1);
			stroke("black");
			fill("green");
			
			//drawing the metal
            ellipse(0,0,10);
			pop()
	}

}