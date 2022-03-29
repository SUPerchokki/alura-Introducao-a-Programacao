function tocaSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
       elemento.play(); 
    } else {
        alert('elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < 9; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        console.log(evento);
        if (evento.code === ('space' || 'Enter')){
            tecla.classList.add('ativa');
        }
        if (evento.code === `Numpad${contador + 1}`){
            console.log(contador);
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}