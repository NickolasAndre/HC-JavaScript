let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
};

onibus.janelas = 22;

delete onibus.rodas;

onibus.passageiros = undefined;

console.log(onibus.janelas)

onibus['Mercedes'] = 20000;

console.log(onibus.Mercedes);

//console.log(onibus.passageiros)
console.log(onibus.portas)
//console.log(onibus.rodas)
