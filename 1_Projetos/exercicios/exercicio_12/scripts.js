/*let classificarNumero = Math.floor(prompt("número"));

if(classificarNumero > 1){
    if(classificarNumero % 2 == 0){
        console.log("Positivo e Par");

    }else if(classificarNumero > 1){
        if(classificarNumero % 2 == 1){
            console.log("Positivo e Ímpar");
        }
    }
}else if(classificarNumero < 0){
    console.log("Negativo");
}else if(classificarNumero === 0){
    console.log("Neutro");
}
*/



let numero = Math.floor(prompt("Digite um número:"));

function classificarNumero(numero){
    if(numero >0){
        if(numero % 2 == 0){
            return"Positivo e Par";
        }else{
            return"Positivo e Ímpar";
        }
    }else if(numero){
        if(numero < 0){
            return"Negativo";
        }
    }else if(numero == 0){
        return"Neutro";
    }
}

console.log(classificarNumero(numero));
