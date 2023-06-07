var waterbottle,basket
var gameOversound,pointSound
var waterbottleImage,basketImage,position
var points = 0
var Play
var city,cityImage
var end
var waterbottle2
var bottle2

function preload(){
basketImage = loadImage("./assets/basket2.png")
waterbottleImage = loadImage("./assets/waterbottle.png")
cityImage = loadImage("./assets/city.png")
}

function setup(){
  createCanvas(600,600)
  waterbottle = createSprite(250,20,40,40)
  waterbottle.addImage("waterbottle",waterbottleImage)
waterbottle.scale=0.4
city = createSprite(200,200)
city.addImage(cityImage)
basket = createSprite(250,560,80,80)
basket.addImage("basket",basketImage)
points = 0
bottle = new Group()
bottle2 = new Group()
}
function draw(){
background(0)

basket.x = World.mouseX;

edges= createEdgeSprites();
basket.collide(edges);

drawSprites()

textSize(25)
text("points: " + points, 488,50)
//points = points + Math.round(frameCount/60);

if (frameCount % 50 == 0) { 
    createwaterbottle();

}

if (frameCount % 70 == 0) { 
  createwaterbottle2();

}


if (bottle.isTouching(basket)) {
  bottle.destroyEach();
  points=points+50;
}

if (bottle2.isTouching(basket)) {
  bottle2.destroyEach();
  points=points+50;
}

}

function createwaterbottle() {
  waterbottle = createSprite(random(50, 350),40, 10, 10);
  waterbottle.addImage(waterbottleImage);
  waterbottle.scale=0.2;
 waterbottle.velocityY = 2;
 //waterbottle.lifetime = 150;
 bottle.add(waterbottle)
 }

 function createwaterbottle2() {
  waterbottle2 = createSprite(random(50, 350),40, 10, 10);
  waterbottle2.addImage(waterbottleImage);
  waterbottle2.scale=0.2;
 waterbottle2.velocityY = 4;
 //waterbottle.lifetime = 150;
 bottle2.add(waterbottle2)
 }






