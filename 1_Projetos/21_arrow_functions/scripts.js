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