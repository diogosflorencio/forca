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
    traco.innerHTML = "_"
    palavra.appendChild(traco);
}


let contadorLetras = 0;
let contadorBoneco = 0;
const temLetra = (letra) => {
    for (let i = 0; i < palavras[palavraDaVez].length; i++) {

        if(letra == palavras[palavraDaVez][i]){
            escrevePalavra(letra)
            return letra

        }else {
            contadorLetras++;
        }
        
    }
    if (contadorLetras == palavras[palavraDaVez].length){
        document.getElementsByClassName("boneco")[contadorBoneco].style="Display: block;"
        contadorBoneco++;
        contadorLetras = 0;
    }

}

function escrevePalavra(param) {
    for(let i = 0; i < palavras[palavraDaVez].length; i++){
        if (palavras[palavraDaVez][i] == param){ 
            palavra.children[i].innerHTML = param;
        }
    }
}

function reset(){
    location.reload();
}


// debug
function log(param){
    console.log(param)
}
