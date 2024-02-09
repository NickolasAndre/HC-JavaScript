function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("O seu nome é " + nome);
    }else{
        console.log("O seu nome é " + nome + "e a sua idade " + idade + " anos");
    }
}

nomeComIdade("nico");
nomeComIdade("nico", 25);

function soma(a, b){
    if(a === undefined || b === undefined){
        console.log("precisa dos dois argumentos");
    }else{
        return a + b;
    }
}

soma();
console.log(soma(2, 4));