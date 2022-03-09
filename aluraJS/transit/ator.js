// Codigo do ator
// variaveis
let yAtor = 370;
let xAtor = 90;
let colisao = false;
let pontos = 0;
let mortes = 0;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 30, 27);
}


function movAtor(){
  if(keyIsDown(UP_ARROW)){
       yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover("y")){
      yAtor += 2;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(podeMover("x")){
      xAtor -= 2;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }
}

function verificaColisao(){
  for(let i = 0; i < xCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], cCarros[i], 40, xAtor, yAtor, 15);
    if(colisao){
      colidiu();
      mortes++;
    }
  }
}

function colidiu(){
  yAtor = 370;
  xAtor = 90;
  somColidiu.play();
}

function ponto(){
  if (yAtor < 15){
    pontos++;
    yAtor = 370;
    xAtor = 90;
    somPonto.play();
  } 
}

function placar(){
  textSize(25);
  fill(25,25, 112);
  text(pontos, width/5, 28);
  text(mortes, width/5 + 400, 28);
}

function podeMover(eixo){
  if (eixo == "y"){
    return (yAtor < 370)
  }
  if (eixo == "x"){
    return (xAtor > 2);
  }
}