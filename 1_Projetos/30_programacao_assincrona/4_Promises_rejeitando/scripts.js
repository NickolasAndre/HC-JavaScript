function verificarNumero(num){
 new Promise((resolve, reject) => {
    if(num == 2) {
        resolve(console.log(`O número é ${num}`))
    } else{
        reject(new Error("Falhou"));
    }
});
}

verificarNumero(2);
verificarNumero(3);
