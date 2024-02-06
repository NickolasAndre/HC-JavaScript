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

// Escopo aninhado(nested Scopes);

let a = 10;

function multiplicar(x, y){
    let a = x * y;

    if(a > 10){

        let a = 0;

        a++;

        console.log(a);

    }

    console.log(a);
}

console.log(a)

multiplicar(3, 7);