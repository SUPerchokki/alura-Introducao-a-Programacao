// Codigo feito durante um curso na Alura
// Autor: Gabriel de Nazaré -> SUPerchokki

// Setup para criação do jogo
function setup() {
  createCanvas(600, 400);
  trilha.loop();
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
