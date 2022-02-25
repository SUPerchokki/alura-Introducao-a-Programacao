// Codigo feito durante um curso na Alura
// Autor: Gabriel de Nazaré -> SUPerchokki

// Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 23;
// Variaveis de velocidade da Bolinha
let velocidadeX = 6;
let velocidadeY = 6;


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

// Variaveis do placar
let meusPontos = 0;
let pontosOponente = 0;

// Variaeis de sons
let raquetada;
let ponto;
let trilha;

// Setup para criação do jogo
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

// Função para carregar os audios
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

// Função para criar os objetos(Fundo, Bolinha) e seus movimentos
function draw(){
  
  background(0);
  
  criaOponente(xrOponente,yrOponente);
  criaRaquete(xRaquete,yRaquete);
  criaBolinha();
  moveBolinha();
  moveRaquete();
  moveOponente();
  colisaoBolinha();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xrOponente, yrOponente);
  incluiPlacar();
  
  marcaPonto();
}

// Função que gera a bolinha
function criaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

// Função que cria a raquete do player
function criaRaquete(x,y){
  rect(x, y,cRaquete, aRaquete, rRaquete)
}

// Função para criar a raquete adversaria
function criaOponente(){
  rect(xrOponente,yrOponente,cRaquete, aRaquete, rRaquete)
}

// Função que move a bolinha
function moveBolinha() {
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
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

// Função para verificar a colisão com as bordas
function colisaoBolinha() {
  if (xBolinha + diametro / 2 > width || xBolinha - diametro / 2 < 0) {
    velocidadeX *= -1;
  }

  if (yBolinha + diametro / 2 > height || yBolinha - diametro / 2 < 0) {
    velocidadeY *= -1;
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

