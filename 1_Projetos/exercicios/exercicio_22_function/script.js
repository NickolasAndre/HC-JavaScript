
/*for (i = 10; i > 0; i--) {
  console.log(i);
  // more statements
}*/


function decrementa(num){
    for(num = num; num > 0; num--){
        if(num % 2 == 0){
            console.log(num + "par");
        }/*else{
            console.log(num)
        }*/
    }
}

decrementa(10)