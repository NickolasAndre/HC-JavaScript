function somaComDelay(a, b){
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b);
        }, 3000);
    });
}

async function soma(a,b,c,d) {
    let x = somaComDelay(a,b);
    let y = c;

    return await x + await y;
}


soma(1,3,5,7).then(valor => console.log(valor))

soma(2,4,6,8).then(y => console.log(y))