class cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");
    }

    get getCor(){
        return this.cor;
    }

    set setCor(cor){
        this.cor = cor;
    }
}

let pastor = new cachorro("Pastor Alemão", "Sem cor")

console.log(pastor);

pastor.setCor = "Amarelo"

console.log(pastor.getCor)