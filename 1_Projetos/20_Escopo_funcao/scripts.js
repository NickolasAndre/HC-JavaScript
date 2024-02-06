let n = 10;

function imprimir(){
    let n = 25;
    console.log(n);
}

imprimir()

console.log(n);

// Mais sobre escopo

let x = 20;

if(true){
    let x =12;
    console.log(x); // escopo if
}

console.log(x); // escopo global