async function somar(a, b) {
    return a + b;
};

console.log(somar(2,3))

somar(2, 4).then(function(valor) {
    console.log(valor)
});

async function mult(aa, bb) {
    return aa * bb;
}

mult(3, 3).then(function(valoor){
    console.log(valoor)
})
