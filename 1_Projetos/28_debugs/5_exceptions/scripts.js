function saudacao(nome){
  if(typeof nome != 'string'){
    throw new error("O parâmetro nome precisa ser uma string");

    
  }else{
    console.log(`Olá ${nome}`)
  }
}

saudacao("nickolas")
saudacao(1)