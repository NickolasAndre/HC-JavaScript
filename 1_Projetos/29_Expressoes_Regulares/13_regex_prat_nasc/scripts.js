const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1990-2024]{4}/;

console.log(validarDataNasc.test("20/12/2012"));
console.log(validarDataNasc.test("20/12/19"));
console.log(validarDataNasc.test("20/2/2012"));
console.log(validarDataNasc.test("20-12-2012"));