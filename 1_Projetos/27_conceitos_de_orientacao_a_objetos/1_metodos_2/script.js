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
    }
}

gato.rosnar();

gato.setgato("2 gatos");

console.log(gato.racaa)