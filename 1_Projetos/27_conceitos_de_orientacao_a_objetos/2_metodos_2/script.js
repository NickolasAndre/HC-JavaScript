const cachorro ={
    latir: function(){
        console.log("AUAUAUA");
    },
    rosnar: function(){
        console.log("grrrrrrrrrr");
    },
    raca: "SRD",
    setRaca: function(raca){
        this.raca = raca;
    }
}

cachorro.setRaca("bulldog")

console.log(cachorro.raca)

const gato = {
    rosnar: function(){
        console.log("miauuu");
    },
    setgato: function(racaa){
        this.racaa = racaa;
    },

    getraca: function(){
        return "A raça é " + this.racaa
    }
}

gato.rosnar();

gato.setgato("2 gatos");

console.log(gato.racaa)

console.log(gato.getraca())

const ave = {
    ave1: function(){
        console.log("avee")
    },
    setave: function(aveee){
        this.aveee = aveee
    }
}

ave.ave1()

ave.setave("essa é a ave")

console.log(ave.aveee)