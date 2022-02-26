
// Variaveis da Raquete
let xRaquete = 20;
let yRaquete = 100;
let cRaquete = 11;
let aRaquete = 110;
let rRaquete = 20;

// Variaveis do oponente
let xrOponente = 560;
let yrOponente = 100;
let vyOponente;


// Função que cria a raquete do player
function criaRaquete(x,y){
    rect(x, y,cRaquete, aRaquete, rRaquete)
  }
  
  // Função para criar a raquete adversaria
  function criaOponente(){
    rect(xrOponente,yrOponente,cRaquete, aRaquete, rRaquete)
  }
  
  // Função que movimenta a raquete
  function moveRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 5;
    }
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 5;
    }
  }
  function moveOponente(){
     if (keyIsDown(87)){
      yrOponente -= 5;
    }
    if (keyIsDown(83)){
      yrOponente += 5;
    }
  }
  
  // Usando a biblioteca para colisão, economizando codigo
  function colisaoRaqueteBiblioteca(x,y){
    let colidiu = collideRectCircle(x,y,cRaquete,aRaquete,xBolinha,yBolinha,diametro/2);
    
    if (colidiu == true){
      raquetada.play();
      velocidadeX *= -1;
    }
  }
  