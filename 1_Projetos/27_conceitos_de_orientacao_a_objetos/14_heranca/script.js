class mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new mamifero(4);

console.log(coiote.patas);

/* cachorro é filho de mamifero */
class cachorro extends mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
    latir(){
        console.log("au au au");
    }
}

let pug = new cachorro(4, "Pug");

console.log(pug.patas)