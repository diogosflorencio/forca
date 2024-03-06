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

    for (let i = 0; i <= tamanhoPalavraDaVez; i++) {
        if (letra == palavras[palavraDaVez][i]) {
            escrevePalavra(letra);
            encontrouLetra = true;
        }
        if (!encontrouLetra) { // as vezes, mesmo o "entrouLetra" a cima sendo "true", esse if é executado
            contadorLetras++;
            if (contadorLetras == tamanhoPalavraDaVez) {
                document.getElementsByClassName("boneco")[contadorBoneco].style = "Display: block;";
                contadorBoneco++;
                contadorLetras = 0;
                gameover(contadorBoneco, "derrota");

            }
        }
    }
};

let contadorPalavra = 0
function escrevePalavra(param) {
    for (let i = 0; i < tamanhoPalavraDaVez; i++) {
        if (palavras[palavraDaVez][i] == param) {
            palavra.children[i].innerHTML = param;
            contadorPalavra++;
            gameover(contadorBoneco, "derrota");
        }
    }
}

function gameover(quantidade, situacao ){
    if (quantidade == 9) {
        alert(situacao)
    } else if (quantidade == tamanhoPalavraDaVez){
        alert(situacao)
    }
}

function reset() {
    location.reload();
}


// debug
function log(param) {
    console.log(param)
}
