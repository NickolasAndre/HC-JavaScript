let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("nickolas_123"));
console.log(validarNomeUsuario.test("nickolas"));
console.log(validarNomeUsuario.test("12342adwa"));
console.log(validarNomeUsuario.test("1_a"));
console.log(validarNomeUsuario.test("1_awasdwasdwasdwasdwasdwadwasdwasdwasdwawasdwasdwasdwas"));