var bullets, wall ;
var speed, weight, thicknes;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  thicknes=random(22,83)
  weight=random(30,52)

 
  wall = createSprite(1200,200,thicknes,height/2);
  wall.shapeColor=color(80,80,80);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(225);

}

function draw() {
  background("black");  
  
if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thikness *thicknes * thicknes);


if(damage>10)
{
  wall.shapeColor=color(225,0,0);

}


if(damage<10)
{
  wall.shapeColor=color(0,225,0);
}


}


  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge= lbullet.x + lbullet.width;
  wallLeftEdge= lwall.x;
  if(belletRightEdge>= wallLeftEdge)
{
  return true
}
return false;
}