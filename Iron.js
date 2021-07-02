class iron{
	constructor(x,y)
	{
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30
		}
		this.x = x;
		this.y = y;
		this.width = 50;
        this.height = 30;
		this.body = Bodies.rectangle(this.x, this.y, 50,30, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos = this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke(0);
			fill("red");
			
			//drawing the stone
            rect(0,0,this.width,this.height);
			pop()
	}

}