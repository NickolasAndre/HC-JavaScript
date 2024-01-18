let x = 0;

while(x < 11){
    x = x + 1;
    console.log("par")
    if(x % 2 == 0){
        continue;
    }
    console.log(x);
    x = x + 1;
}