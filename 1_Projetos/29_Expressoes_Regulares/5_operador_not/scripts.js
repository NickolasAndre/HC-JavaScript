const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const notaz = /[^a-z]/;

console.log(notaz.test("Aqui tem a"));
console.log(notaz.test("asd"));
console.log(notaz.test("123"));
console.log(notaz.test("123 as"));
