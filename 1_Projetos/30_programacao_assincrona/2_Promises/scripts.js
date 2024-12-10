let p = Promise.resolve(5);

console.log("Outro códigos");

console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)});