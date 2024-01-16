 let idade = prompt("sua idade");

 console.log(idade);

 let nome = prompt("Qual é o seu nome?");

 console.log(`O seu nome é ${nome}`)

// alert

alert("Esta é a mensagem!");

// math.x()

let maior = Math.max(1,4,6,2,6);

console.log(maior);


if(idade > 0 && idade <= 20){
    console.log("jovem");
}else if(idade <= 40){
    console.log("adulto");
}else if(idade < 100){
    console.log("idoso");
}else{
    console.log("idade acima de 100!");
}