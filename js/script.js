let palavras = ["DAWDAWDWRdwdwdEQ"]

const temLetra = (letra) => {
    for (let i = 0; i < palavras[palavraDaVez()].length; i++) {
        if(letra == palavras[palavraDaVez()][i]){
            console.log(letra, i)
        }else(console.log("fail"))
        
    }
}

function palavraDaVez(){
    return 0;
}