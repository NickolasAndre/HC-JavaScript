let idade = prompt("idade");

let cnh = prompt("CNH");

if(idade >= 18 && cnh === "s"){
    console.log("pode dirigir!")
}else if(idade >= 18 && cnh ==="n"){
    console.log("não tem cnh");
}else{
    console.log("não tem idade e nem cnh");
}

