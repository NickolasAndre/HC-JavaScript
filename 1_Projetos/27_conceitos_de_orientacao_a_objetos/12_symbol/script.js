class cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au ")
    }
}

let patas = Symbol();

let olhos = Symbol();

cachorro.prototype[patas] = 4;

cachorro.prototype[olhos] = 2;

let labrador = new cachorro("labrador", "amarelo");

console.log(cachorro.prototype[patas]);

console.log(cachorro.prototype[olhos]);

console.log(labrador[patas]);