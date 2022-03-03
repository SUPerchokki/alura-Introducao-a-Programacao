// Codigo principal
function setup() {
  createCanvas(700, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicial();
  verificaColisao();
  movAtor();
  ponto();
  placar();
}
