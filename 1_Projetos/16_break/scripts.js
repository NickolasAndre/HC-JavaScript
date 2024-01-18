for(let a = 5; a < 20; a = a + 1 ){
    if(a % 10 === 0){
        console.log("saiu do loop");
        break
    }
    console.log("prosseguindo o loop");
}

let i = "nick";

for(i = 0; i < 10; i = i + 1){
    if(i == 3){
        nome = "andre";
    }
    if(i == 5 && nome == "andre"){
        console.log("O nome é nick")
        break
    }
    console.log(i)
}