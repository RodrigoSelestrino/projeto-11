var jogador
var carregajogador

var chao
var carregachao

var paredeinvisivel
var paredeinvisivel2




function preload(){
  //imagens pré-carregadas
carregajogador =loadAnimation("Runner-1.png","Runner-2.png")

carregachao = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
 chao = createSprite(200,200)
 chao.addImage(carregachao)
 chao.scale= 1.3
 chao.velocityY = 10
  
 jogador = createSprite(200,200) 
 jogador.addAnimation("correndo", carregajogador)
 jogador.scale=0.1

 paredeinvisivel = createSprite(-10,0,69,900)
 paredeinvisivel.visible = false

 paredeinvisivel2 = createSprite(410,0,60,900)
 paredeinvisivel2.visible = false 



}

function draw() {
  background(0);

if(chao.y>500){
 chao.y = height/2
 }
 jogador.x = World.mouseX
 jogador.collide(paredeinvisivel)
 jogador.collide(paredeinvisivel2)


  drawSprites()



}
