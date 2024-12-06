const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("nickolas@gmail.com"));
console.log(validarEmail.test("nickolas@gmail"));
console.log(validarEmail.test("@gmail.com"));
