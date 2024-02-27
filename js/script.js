// definição das palavras e dicas

let palavras = [
    "ENIGMA",
    "AVENTURA",
    "MISTERIO",
    "ENCANTAMENTO",
    "FANTASIA",
    "DESAFIO",
    "FANTASIA",
    "FABULA",
    "POESIA",
    "HARRY-POTTER"
];

var dicas = [
    "Pista: Desafio para a mente!",
    "Pista: Muita adrenalina!",
    "Pista: Sempre surpreendente!",
    "Pista: Deixe-se levar pela imaginação!",
    "Pista: O limite é a sua criatividade!",
    "Pista: Muito movimento e emoção!",
    "Pista: Onde os sonhos se tornam realidade!",
    "Pista: Histórias incríveis esperam por você!",
    "Pista: Transforme palavras em sentimentos!",
    "Pista: A magia está no ar!"
];



let palavraDaVez = Math.round(Math.random()*10)
let palavra = document.querySelector(".palavra");

let dica = document.querySelector(".dica");
dica.innerHTML = dicas[palavraDaVez]

for(let i = 0; i < palavras[palavraDaVez].length; i++){
    let traco = document.createElement("p");
    traco.innerHTML = "-"
    palavra.appendChild(traco);
}


const temLetra = (letra) => {
    
    for (let i = 0; i < palavras[palavraDaVez].length; i++) {

        if(letra == palavras[palavraDaVez][i]){
            escrevePalavra(letra)
            return letra

        }
        
    }

}

function escrevePalavra(param) {
    for(let i = 0; i < palavras[palavraDaVez].length; i++){
        if (palavras[palavraDaVez][i] == param){ 
            palavra.children[i].innerHTML = param
            log(param)
            
        }
    }
}



// debug
function log(param){
    console.log(param)
}
