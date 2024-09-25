class cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("auauauaauau");
    }
    latir(){
        console.log("auauaauuauauauauau");
    }

}

cachorro.prototype.raca = "SRD"
cachorro.prototype.patas = 4



let labrador = new cachorro("labrador", "branco");

console.log(labrador.patas);

labrador.latir();

console.log(cachorro.prototype.raca)
console.log(labrador.raca)