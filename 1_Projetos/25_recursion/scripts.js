function retornarNumeroPar(n){
    if(n % 2 == 0){
        console.log("N agora é par: " + n);
    }else{
        console.log(n)
        retornarNumeroPar(n - 1);
    }
}

retornarNumeroPar(33);

function retornarNumeroImpar(m){
    if( m % 2 == 1){
        console.log("M agora é impar: " + m);
    }else{
        retornarNumeroImpar(m - 1);
    }
}

retornarNumeroImpar(20);

















