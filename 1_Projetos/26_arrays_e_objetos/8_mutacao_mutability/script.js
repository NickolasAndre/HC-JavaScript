let objectoA = {
    pontos:10,
};

objectoB = objectoA;

let objetoC = {
    pontos:10,
};

console.log(objectoA == objectoB);

console.log(objectoA == objetoC);

let pessoa = {
    nome: "nico",
}

let pessoa2 = pessoa;

console.log(pessoa2 == pessoa);

pessoa2.nome = "andre";

console.log(pessoa.nome);

pessoa.nome = "pedro";

console.log(pessoa2.nome);