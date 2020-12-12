// explicação
//https://www.youtube.com/watch?v=VB1tvZAzsps

//gameplay
//https://www.youtube.com/watch?v=vHcSfdu0yIY

//var do menu
 var ytela= 145
 var xtela= 590
 var ytela1=120
 var xtela1=55
 var ytela2=150
 var xtela2=160
 var selec=1
 var selec1=0
 var tela='telainicial'
 
 //var do personagem 
  var pose = 0;
  var poseTime=0;
  var mode = 0;
  var x = 15;
  var y = 490;
  var idle = [];
  var walk = [];
  var jump = [];
 
 // var do bandido 
  var tempo = 0
  var tempos = 0
  var bandido = []
  var bandido2 = []
  var perninha = 0
  var xbandido=600
  var xbandido2=1600
 
  //var do carro
  var carros=[]
  var xcar1=1300
  var xcar2=1900
  var xcar3=2300
  var xcar4=4000
  var ycar=510
  var contador=0
  
  //var colisão
  var rjogador=15
  var rcarro=50
  var rbandido=10 
  
  //var do pulo  
  let pulo;
  let tempo_pulo=0;
  let pulando;
  let pulo_posicao_y_jogador = y;
  let varpulo;
  
  //hud do jogo
  var vidas=3
  var presos=0
  var fundo1=650
  var fundo2=130
  var yfundo=300

let img;
function preload() {
  //função da tela
  telas = {
  'telainicial': telainicial,
  'menu': menu,
  'jogar': jogar,
  'jogar1': jogar2,
  'jogar3': jogar3,
  'xjogar': xjogar,
  'xjogar2': xjogar2,
  'finalfeliz': finalfeliz,
  'selecaodeprof': selecaodeprof, 
  'creditos': creditos,
  'instrucoes': instrucoes,
  'finaltriste': finaltriste,
  }
  //som do jogo
  soundFormats("mp3");
  mySound = loadSound("battleThemeA.mp3")
  
  //foto de instrução dos jogos
  telapolice= loadImage("telai3.png")
 
  //hud do jogo deu ruim.
  font = loadFont("Gagalin-Regular.ttf")
  life1 = loadImage('vidahud/vida1.png')
  life2 = loadImage('vidahud/vida2.png')
  life3 = loadImage('vidahud/vida3.png')
  
  //final do jogo
  finalfeliz = loadImage("finalpolicialg3.png")
  finaltriste = loadImage("derrota3.png")
  
  //foto do fundo
  city=loadImage("3042.jpg")
  img1 = loadImage("Myfuture3.0.png")
  img2 = loadImage("menu1.png")
  img3 = loadImage("instrução3.png")
  img4 = loadImage("creditos2.png")
  img5 = loadImage("teste3.png")
  img6 = loadImage("dlc.png")
  
  //fotos dos carros
 carros[0] = loadImage('carros/car01_0006.png')
 carros[1] = loadImage('carros/car03_0006.png')
 carros[2]=  loadImage('carros/pickuptruck_0006.png')
 carros[3] = loadImage('carros/police_0006.png')
  
  // fotos do personagem
  idle[0] = loadImage('Police/1_police_Idle_000.png')
  idle[1] = loadImage('Police/1_police_Idle_001.png')
  idle[2] = loadImage('Police/1_police_Idle_002.png')
  idle[3] = loadImage('Police/1_police_Idle_003.png')
  idle[4] = loadImage('Police/1_police_Idle_004.png')
  idle[5] = loadImage('Police/1_police_Idle_005.png')
  idle[6] = loadImage('Police/1_police_Idle_006.png')
  idle[7] = loadImage('Police/1_police_Idle_007.png')
  
  walk[0] = loadImage('Police/1_police_Walk_000.png')
  walk[1] = loadImage('Police/1_police_Walk_001.png')
  walk[2] = loadImage('Police/1_police_Walk_002.png')
  walk[3] = loadImage('Police/1_police_Walk_003.png')
  walk[4] = loadImage('Police/1_police_Walk_004.png')
  walk[5] = loadImage('Police/1_police_Walk_005.png')
  walk[6] = loadImage('Police/1_police_Walk_006.png')
  walk[7] = loadImage('Police/1_police_Walk_007.png')

  jump[0] = loadImage('Police/1_police_Jump_000.png')
  jump[1] = loadImage('Police/1_police_Jump_001.png')
  jump[2] = loadImage('Police/1_police_Jump_002.png')
  jump[3] = loadImage('Police/1_police_Jump_003.png')
  jump[4] = loadImage('Police/1_police_Jump_004.png')
  jump[5] = loadImage('Police/1_police_Jump_005.png')
  jump[6] = loadImage('Police/1_police_Jump_006.png')
  jump[7] = loadImage('Police/1_police_Jump_007.png')

  //fotos do bandido
  bandido[0] = loadImage('bandido/1_terrorist_1_Run_000.png')
  bandido[1] = loadImage('bandido/1_terrorist_1_Run_001.png')
  bandido[2] =loadImage('bandido/1_terrorist_1_Run_002.png')
  bandido[3] =loadImage('bandido/1_terrorist_1_Run_003.png')
  bandido[4] =loadImage('bandido/1_terrorist_1_Run_004.png')
  bandido[5] =loadImage('bandido/1_terrorist_1_Run_005.png')
  
  bandido2[0] = loadImage('bandido/3_terrorist_3_Run_000.png')
  bandido2[1] = loadImage('bandido/3_terrorist_3_Run_001.png')
  bandido2[2] = loadImage('bandido/3_terrorist_3_Run_002.png')
  bandido2[3] = loadImage('bandido/3_terrorist_3_Run_003.png')
  bandido2[4] = loadImage('bandido/3_terrorist_3_Run_004.png')
  bandido2[5] = loadImage('bandido/3_terrorist_3_Run_005.png')
}
 
 
function setup() {
  createCanvas(1300, 600);
}

function draw(){
  background(220);
 telas[tela]();
}

function jogar(){
  imageMode(CENTER)
  image(city,fundo1,yfundo,1300,600)

 //carros:
  image(carros[0],xcar1,ycar,2.3*rcarro,1.8*rcarro)
  image(carros[1],xcar2,ycar,2.3*rcarro,1.8*rcarro)
  image(carros[2],xcar3,ycar,2.3*rcarro,1.8*rcarro)
  image(carros[3],xcar4,ycar,2.3*rcarro,1.8*rcarro)
  xcar1=xcar1-5
  xcar2=xcar2-5
  xcar3=xcar3-5
  xcar4=xcar4-5

  //colisão dos carros 
  if(dist(xcar1, ycar, x, pulo_posicao_y_jogador) < (rcarro + rjogador)){
  x=20
  xcar1=5000
  vidas=vidas-1 
  }         
  if(dist(xcar2, ycar, x, pulo_posicao_y_jogador) < (rcarro + rjogador)){
  x=20
  xcar2=5000
  vidas=vidas-1 
  }
  if(dist(xcar3, ycar, x, pulo_posicao_y_jogador) < (rcarro + rjogador)){
  x=20
  xcar3=5000
  vidas=vidas-1 
  }
  if(dist(xcar4, ycar, x, pulo_posicao_y_jogador) < (rcarro + rjogador)){
  x=20
  xcar4=5000
  vidas=vidas-1 
  }
  
  //respawn dos veiculos
  if(xcar1<-100){
    contador++
     xcar1=1500
  }
   if(xcar2<-100){
    contador++
     xcar2=2200
  }
   if(xcar3<-100){
    contador++
    xcar3=3300
  }
  if(xcar4<-100){
    contador++
    xcar4=3600
  }
  
  tempo++
  if(tempo>5){
    perninha++
    tempo=0
  }
  
  //bandido
  image(bandido[perninha%5],xbandido,ycar,4*rjogador,2.5*rcarro)
  image(bandido2[perninha%5],xbandido2,ycar,4*rjogador,2.5*rcarro)
 
  tempos++
  if(tempos>7){
    perninha++
    tempos=0
  }
  
  xbandido=xbandido-3
  xbandido2=xbandido2-4
  //colisão dos bandidos
  if(dist(xbandido, ycar, x, pulo_posicao_y_jogador) < (rcarro + rjogador)){
  xbandido=3750
  presos=presos+1
  }
  if(dist(xbandido2, ycar, x, pulo_posicao_y_jogador) < (rcarro + rjogador)){
    xbandido2=1800
    presos=presos+1
  }
  //respawn
  if(xbandido<-100){
    contador++
     xbandido=2500
  }
   if(xbandido2<-100){
    contador++
     xbandido2=5000
   }
  
  
 //personagem: mode 0: idle mode:1 walk mode:2 jump mode:3 hurt
       if (mode==0){
      image(walk[pose%8], x,        pulo_posicao_y_jogador,4*rjogador, 125)
      }


  else {
     if (mode==1) {
       image(walk[pose%8], x, pulo_posicao_y_jogador,4*rjogador, 125);
     }
    
    else {
         if(mode==2)
            image(jump[pose%8], x, pulo_posicao_y_jogador,6*rjogador, 125);
     }

  }
 
  if(poseTime==5) {
     pose++;
     poseTime=0;
  } else {
    poseTime++;
  }
  
   if (keyIsPressed === true) {
       if(pulando)
          mode=2;
       else
          mode=1;
  } else {
    mode=0;
  }
  
  if (keyIsDown(LEFT_ARROW) && x>20 )
    x-=5;

  if (keyIsDown(RIGHT_ARROW) && x<1250)
    x+=5;
  
  if(keyIsDown(UP_ARROW) || (pulo_posicao_y_jogador< y ))  {
    pulando=true;
   
  }else
    pulando = false;
  
  pular();
  textSize(30);
  text('vidas: '+vidas, 20, 40)
  text('presos: '+presos, 20, 80);{
}
}

function pular(){
  if (pulando) {
    varpulo = tempo_pulo-23; 
    pulo =- tempo_pulo*varpulo;
    
    tempo_pulo = tempo_pulo + 0.5;
    if (pulo < 0) {
      pulando=false;
      pulo=0;
      tempo_pulo=0;
    }
    pulo_posicao_y_jogador = y - pulo;
    
}
}
function telainicial(){
   image(img1,fundo1,yfundo,1300,600);
   imageMode(CENTER)
}
function menu(){
   image(img2,fundo1,yfundo,1300,600);
   imageMode(CENTER)
  rect (xtela,ytela ,140, 40)
  textFont(font)
  textSize (40);
  textSize (30);
  text("jogar", 600, 175);
  text("Instrução",600, 275);
  text("Créditos",600, 375);
}
function instrucoes(){
  image(img3,fundo1,yfundo,1300,600);
  imageMode(CENTER)
  }
function xjogar(){
  image(telapolice,fundo1,yfundo,1300,600)
  imageMode(CENTER)
}
function xjogar2(){
    imageMode(CENTER)
  image(img6,fundo1,yfundo,1300,600);
}

function creditos(){
  image(img4,fundo1,yfundo,1300,600);
}
function selecaodeprof(){
  imageMode(CENTER)
  image(img5,fundo1,yfundo,1300,600);
  ellipse(xtela2, ytela2, 40,40)
  
}
function jogar2(){
  imageMode(CENTER)
  image(img6,fundo1,yfundo,1300,600);
}
function jogar3(){
  image(img3,0,0,500,400)
}
function finaltriste(){
  image(finaltriste,fundo1,yfundo,1300,600)
  imageMode(CENTER)
}
function finalfeliz(){
  image(finalfeliz,fundo1,yfundo,1300,600)
  imageMode(CENTER)
}
function keyPressed(){
  opmenu[tela](key);
}
opmenu={
  //telainicial
  'telainicial': (key) => {
    if(key === "Enter"){
     tela='menu'
     selec=1
    }
  },
  //menu
  'menu': (key) => {
    if(key === "ArrowUp" && selec > 1){
      ytela = ytela-100;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 3){
      ytela = ytela+100;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === 1){
        tela = 'selecaodeprof';
        xtela2 = 160;
        ytela2= 150;
        selec1= 1
        
      }
      
      else if(selec === 2){
        tela = 'instrucoes';
      }
      
      else if(selec === 3){
        tela='creditos';
      }
      
    }
    
    if(key === "Escape"){
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'creditos': (key) => {
    if(key === "Escape") tela = 'menu';
  },
  
  'instrucoes': (key) => {
    if(key === "Escape") tela = 'menu';
  },
 // seleção 
  'selecaodeprof': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      ytela2 = ytela2-300;
      selec = selec-1;
    }
    if(key === "ArrowDown" && selec < 2){
      ytela2 = ytela2+300;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === 1){
        tela='xjogar'
        
      }
      
      else if(selec === 2){
        tela = 'xjogar2';
      }
      
    }
    
    if(key === "Escape"){
      xtela = 590;
      ytela = 145;
      selec = 1;
      tela = 'menu'
    }    
    },
  // xjogar
   'xjogar': (key) => {
    if(key === "Enter"){
      tela = 'jogar';
    }
    if(key === "Escape"){
      tela = 'menu';
    }
  },
  'xjogar2': (key) => {
    if(key === "Escape"){
      tela = 'menu';
      xtela = 590;
      ytela = 145;
      selec = 1 
    }
  },
  //jogar
  'jogar':(key)=>{
    if(key==="Escape"){
      tela='menu'
      vidas=3
      presos=0
    }
    else if
      (vidas<=0){
      tela='finaltriste'
    }
    else if
      (presos===10){
      tela='finalfeliz'
    }
  },
  'finaltriste': (key) => {
    if(key === "Escape"){
      tela = 'menu';
       vidas=3
      presos=0
    }
},
  'finalfeliz': (key) => {
    if(key === "Escape"){
      tela = 'menu';
      vidas=3
      presos=0
    }
}
}