let pessoa = {
    "nome": "Nickolas",
    "sobrenome": "Andre",
    "idade": 25,
    "animias": ["gato","cachorro","cavalo"]
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.animias[2]);



let times = {
    "csa": "csaa",
    "crb": "crbb",
    "cse": "cse",
    "abc": ["asa","abb","ccc"]
};

let timesTexto = JSON.stringify(times);

console.log(timesTexto);

let timeJSON = JSON.parse(timesTexto);

console.log(timeJSON);

console.log(timeJSON.abc[1]);







