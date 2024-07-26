let nomes = ["Andre","Pedro","Nickolas","Matheus","Felipe"];

let animais = ["gato", "cavalo"];

function verificarElementosArray(arr){
    if(arr.length >= 5){
        console.log("maior")
    }else{
        console.log("Menor")
    }
}

verificarElementosArray(nomes);
verificarElementosArray(animais);