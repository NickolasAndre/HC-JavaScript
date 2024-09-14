function criarCachorro(raca, pata, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.pata = pata;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarCachorro("Doberman", 4, "preto");

console.log(doberman);

let bulldog = criarCachorro("Bulldog", 4, "branco");

console.log(bulldog)