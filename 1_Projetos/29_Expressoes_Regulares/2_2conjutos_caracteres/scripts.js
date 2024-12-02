const reg1 = /[12345]/;
console.log(reg1.test("temos o número 3 ?"));
console.log(reg1.test("temos o número 6 ?"));
console.log(reg1.test("temos o número 12 ?"));

const reg2 = /[0-9]/;

console.log(reg2.test("temos o número 3 ?"));
console.log(reg2.test("temos o número 6 ?"));