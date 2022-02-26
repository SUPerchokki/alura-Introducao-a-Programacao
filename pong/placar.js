
// Variaveis do placar
let meusPontos = 0;
let pontosOponente = 0;

function marcaPonto(){
    if (xBolinha > 590){
      meusPontos++;
      ponto.play();
    }
    if (xBolinha < 10){
      pontosOponente++;
      ponto.play();
    }
}

function incluiPlacar(){
    textAlign(CENTER);
    textSize(20);
    fill(255);
    rect(130,10,40,40,10);
    rect(430,10,40,40,10);
    fill(0);
    text(meusPontos, 150, 37);
    text(pontosOponente, 450, 37);
    fill(255)
}
  