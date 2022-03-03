// Codigo do carro

// Variaveis do carro 1
let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [40, 150, 95, 320, 210, 265];
let vCarros = [4.3, 5.1, 3.2, 3.1, 5.5, 3.8];
let cCarros = [65, 60, 75, 65, 60, 75];
let aCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], cCarros[i], aCarros);
  }
}

function movimentaCarro(){
  for(let i=0; i<vCarros.length;i++){
    xCarros[i] -= vCarros[i];
  }
}

function voltaPosicaoInicial(){
  for(let i=0; i < xCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 700;
    }
  }
}

function passouTodaTela(xCarro){
  for(let i = 0; i < cCarros.length; i++){
    return (xCarro < -cCarros[i]);
  }
}