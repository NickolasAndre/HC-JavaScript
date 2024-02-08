const parOuImpar = (n) =>{
    return n % 2;
}

console.log(parOuImpar(13));

const imparOuPar = (m =>{
    if(m % 2 === 0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
})

imparOuPar(10);

// Mais sobre Arrow Functions

const raizQuadrada = (x) =>{
    return x * x;
}

console.log(raizQuadrada(8));

const raizQuadrada2 = (n) => n * n;

console.log(raizQuadrada2(12));