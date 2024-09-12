const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));

console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty("maos"));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos)

const pessoaVelha = Object.create(pessoa);

console.log(pessoaVelha.maos);


