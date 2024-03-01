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



let palavraDaVez = Math.round(Math.random() * 10)
let tamanhoPalavraDaVez = palavras[palavraDaVez].length;
let palavra = document.querySelector(".palavra");
let dica = document.querySelector(".dica");
dica.innerHTML = dicas[palavraDaVez]

for (let i = 0; i < tamanhoPalavraDaVez; i++) {
    let traco = document.createElement("p");
    traco.innerHTML = "_"
    palavra.appendChild(traco);
}


let contadorLetras = 0;
let contadorBoneco = 0;
const temLetra = (letra) => {
    let encontrouLetra = false;

    for (let i = 0; i < tamanhoPalavraDaVez; i++) {
        if (letra == palavras[palavraDaVez][i]) {
            escrevePalavra(letra);
            log(palavras[palavraDaVez][i]);
            encontrouLetra = true;
        }
        if (!encontrouLetra) {
            contadorLetras++;
            log("else, de letra diferete do escolhido, ativo");
            if (contadorLetras == tamanhoPalavraDaVez) {
                log("contador + tamanho p" + contadorLetras + "----" + tamanhoPalavraDaVez + "lll");
                document.getElementsByClassName("boneco")[contadorBoneco].style = "Display: block;";
                contadorBoneco++;
                log(palavras[palavraDaVez].length);
                contadorLetras = 0;
            }
        }
    }


};


function escrevePalavra(param) {
    for (let i = 0; i < tamanhoPalavraDaVez; i++) {
        if (palavras[palavraDaVez][i] == param) {
            palavra.children[i].innerHTML = param;
        }
    }
}

function reset() {
    location.reload();
}


// debug
function log(param) {
    console.log(param)
}
