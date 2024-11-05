let arr = [1,2,3,4,5];
let arr2 = [1];

function interarArray(arr){
  if(arr.length == 0){
    throw new Error("O array precisa ter pelo menos um elemento")
  }else{
    for(let i = 0; i < arr.length; i++){
      console.log(i);
    }
  }
}

function arrayVazio(arr){
  if(arr.length > 0){
    throw  Error("O array não pode ter elementos");
  }else{
    console.log("Agora deu certo");
  }
}

interarArray(arr);
interarArray(arr2);