// Arquivo para guardar as funções da bolinha
// Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 23;
// Variaveis de velocidade da Bolinha
let velocidadeX = 6;
let velocidadeY = 6;

// Função que gera a bolinha
function criaBolinha() {
    circle(xBolinha, yBolinha, diametro);
}


// Função que move a bolinha
function moveBolinha() {
    xBolinha += velocidadeX;
    yBolinha += velocidadeY;
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
  