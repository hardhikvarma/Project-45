class Vaccine
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("vaccinne.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			
		var vaccinepos=this.body.position;		

			push();
			translate( vaccinepos.x,  vaccinepos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			fill(255,0,255);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			//ellipse(0,0,this.r, this.r);
			pop();
			
	}

}