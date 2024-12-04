let ano = /\d\d\d\d/;

console.log(ano.test("05") && "2024".length == 2);
console.log(ano.test("2024") && "06".length == 2);
console.log(ano.test("opa"));

let palavra = /\w\w\w/;

console.log(palavra.test("dia"))
console.log(palavra.test("oi"))
console.log(palavra.test("ano"))