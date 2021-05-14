var sunny , vehicle , tree , traffic , lady ;

var sunnyimg , vehicleimg , treeimg , trafficimg , ladyimg , trackImg;  

var gameState = "start";

var ground ;
function preload(){
   sunnyimg = loadImage("carfinal.png");
   vehicleimg = loadImage("car2.png");
 trafficimg = loadImage("Traffic.png");
 ladyimg = loadImage("walking.png");
 trackImg = loadImage("road.jpg");
}

function setup(){
createCanvas(800,800);
ground = createSprite(400,400,600,800);
ground.addImage("road",trackImg);
ground.scale = 4 ;
sunny = createSprite(400,700,50,50);
sunny.addImage("sunny",sunnyimg);
sunny.scale = 0.6;
//sunny.shapeColor = "red";

}

function draw(){
    background("blue");
if ( gameState === "start"){
    background("black");
    textSize(20);
    text("Sunny is a 18 year old boy who wants to give a driving test , but due to this pandamic ",10,100);
    text("he cannot . He also wants to learn the traffic rules . So we need to prepare a game for him ",0,140)
    text("so that he learns the traffic rules",200,180);
    text("Press the up-arrow to start leaning some traffic rules !!" , 150,260);
    text("Use the mouse cursor to move the car horizontally  ", 150 ,300);
    sunny.visible = false ;
    ground.visible = false ;
    if (keyDown(UP_ARROW)){
        gameState = "play" ;
    }

}
 if (gameState === "play"){
    sunny.visible = true ;
    ground.visible = true ; 
    sunny.x = mouseX ;
    spawnVehicles();
    spawnTraffic();
    
 }

drawSprites();
}

function spawnVehicles(){
    if (frameCount%80 === 0){
    var vehicle = createSprite(200,0,50,50);
    vehicle.x = random(120,700);
    vehicle.velocityY = 5 ;
    vehicle.lifetime = 260 ;
    vehicle.addImage("car",vehicleimg);
    vehicle.scale = 0.5 ;
    }
}

function spawnTraffic(){
    if (frameCount%190 === 0){
    var traffic = createSprite(50,0,50,50);
    //vehicle.x = random(50,750);
    traffic.velocityY = 5 ;
    traffic.lifetime = 260 ;
    traffic.addImage("trafic",trafficimg);
    traffic.scale = 0.5 ;
    }
}