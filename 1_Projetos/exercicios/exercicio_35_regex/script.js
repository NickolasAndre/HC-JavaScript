const validarId = /\d+ID\b/;

console.log(validarId.test("12314ID"));
console.log(validarId.test("DWASDWAID"));
console.log(validarId.test("23123"));
console.log(validarId.test("ADAS"));