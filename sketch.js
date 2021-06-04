const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
   
    if(hour>=12){
     text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour===0){
     text("Time : 12 AM", 50 ,100)   
    }else{
        text("Time : "+ hour + " AM", 50,100);  
    }

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    console.log(dateTime);
    hour = dateTime.slice(11,13);
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png"
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png"
    }else if(hour>=23 && hour<=00){
        bg = "sunset10.png"
    }else if(hour>=00 && hour<=03){
        bg = "sunset11.png"
    }else{
        bg = "sunset12.png"
    }
    backgroundImg= loadImage(bg);
}
