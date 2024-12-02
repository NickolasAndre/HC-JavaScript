const pontoRegex = /./;

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123asd"))

const dRegex = /\d/;

console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))

const dRegex2 = /\D/;

console.log(dRegex2.test("asd"))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("123"))