//metodo usando arrow fuction

function  somax(x){
    return  y => x + y
}

let somat = somax(2);
console.log(somat(3));


let somatt = somax(4);
console.log(somatt(5));


function armazenarSoma(q){
    return w => q + w
}

let rr = armazenarSoma(8);
console.log(rr(2));

function lembrarSoma(c){
    return function(v){
        return c + v
    }
}

let soma1 = lembrarSoma(5);
console.log(soma1(1))

let soma2 = lembrarSoma(3);
console.log(soma2(1));


function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(11);
meuContador();
meuContador();
meuContador();
meuContador();