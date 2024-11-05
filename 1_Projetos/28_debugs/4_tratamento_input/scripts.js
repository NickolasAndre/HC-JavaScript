function checarNumero(num){
  let number = Number(num);
  if(Number.isNaN(number)){
    alert("Por favor, passe só números para o programa")
  }else{
    return number;
  }
}

checarNumero(5);
checarNumero("dwasdwa");

let number = prompt("Digite um númeor");

checarNumero(number)