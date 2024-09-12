const cachorro = {
    raca: "SRD"
}

console.log(cachorro.raca);

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor alemão";

console.log(pastorAlemao.raca)

const gato = {
    rosnar: "Sem rosnar"
}

console.log(gato.rosnar)

const gatoRosnar = Object.create(gato);

gatoRosnar.rosnar = "srrrrr";

console.log(gatoRosnar.rosnar)


let cachorro2 = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("auauauauau");
    }
}

let labrador = Object.create(cachorro2);

labrador.raca = "labrador";

console.log(labrador.raca);

labrador.latir()

let patas2 = Object.create(cachorro2);

patas2.patas = 6;

console.log(patas2.patas);