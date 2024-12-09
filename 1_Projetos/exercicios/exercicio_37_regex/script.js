const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("123.123.123.123"))
console.log(validarIp.test("8.8.8.8"))
console.log(validarIp.test("123.0.123.0"))
console.log(validarIp.test("123.0.fg.0"))
console.log(validarIp.test("123.0.123."))