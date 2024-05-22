function repetirFrase(frase, n=2){
    for(let x =1; x <= 2; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");

function potencia(base, exp=2){
    return Math.pow(base,exp);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));
console.log(potencia(2,4));