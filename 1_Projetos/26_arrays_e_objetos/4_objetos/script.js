let pessoa = {
    nome: "Nickolas",
    idade: 25,
    profissao: "Programador"
};

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);

let cachorro = {
    patas: 4,
    nome: "Cuscuz",
    latir: function(){
        console.log("AU AU");
    }
};

console.log(cachorro.nome);
console.log(cachorro.patas);
cachorro.latir();