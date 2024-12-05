const telefone = /\d{4,5} - \d{4}/;

console.log(telefone.test("4002 - 8922"));
console.log(telefone.test("94002 - 8922"));
console.log(telefone.test("999 - 999"));
console.log(telefone.test("999 - 99"));

const cep = /\d{5} - \d{3}/;

console.log(cep.test("12345 - 123"))
console.log(cep.test("asd"))
console.log(cep.test(""))