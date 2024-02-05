function imprimirNoConsole(){
    console.log("Olá mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("O número é: " + num);
}

imprimirUmNumero(3);

function imprimirUmNumero1(num1){
    console.log('Outro número: ' + num1);
}

imprimirUmNumero1(4);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();

const textoAle = function(texto){
    console.log(texto);
}

textoAle("texto");

const alea = function(numm){
    console.log(numm);
}

alea("1423");

// Mais sobre funções

const soma = function(a, b){
    return a + b;
}

console.log(soma(5,5));

const somaa = soma(3,6);

console.log("O valor de soma: " + somaa)


const saudacao = function(nome){
    if(nome == "Nico")
    return "Olá Nico"
}

console.log(saudacao("Nico"));

const sau = function(tt){
    if(tt == "Nicoo");
    return "Oi nicoo";
}

console.log(sau("Nicoo"));

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("pode dirigir!");
    }else{
        console.log("Não pode dirigir!");
    }
}

podeDirigir(22, true);
podeDirigir(25, true);
podeDirigir(44, 0);
podeDirigir(22, 1);
podeDirigir(15, true);
