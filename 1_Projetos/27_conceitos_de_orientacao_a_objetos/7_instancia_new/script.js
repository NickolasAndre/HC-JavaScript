function cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("auuuuuuuu");
    }
}

let husky = new cachorro("husky", 4, "preto");

console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);

husky.uivar();