let palavras = ["DAWDAWDWRdwdwdEQ", "ZZZZZ"]

const temLetra = (letra) => {
    for (let i = 0; i < palavras[palavraDaVez()].length; i++) {
        if(letra == palavras[palavraDaVez()][i]){
            console.log(letra, i)
        }else(console.log("fail"))
        
    }
}

function palavraDaVez(){
    const posicao = Math.round(Math.random()*10);
    console.log("pos" + posicao)
    return posicao;
}