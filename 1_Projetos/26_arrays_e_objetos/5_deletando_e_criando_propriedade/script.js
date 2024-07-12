let carro = {
    marca: "VW",
    portas: 4,
    eletrico:false,
    motor:1.0
}

console.log(carro.eletrico);

delete carro.portas;

console.log(carro.portas);

carro.tetoSolar = true;

console.log(carro.tetoSolar);

carro.som = "Não tem";

console.log(carro.som);

let pessoa = {
    nome: "Nickolas",
    idade: 25,
    sexo: "Masc",
    profissao: "Programador"
}

console.log(pessoa.profissao);

console.log(pessoa.idade);

delete pessoa.idade;

console.log(pessoa.idade);

pessoa.altura = 1.70;

console.log(pessoa.altura);



