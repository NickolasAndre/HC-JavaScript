const reg1 = new RegExp("bola");

console.log(reg1.test("tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

console.log(reg2.test("tem bola?"));
console.log(reg2.test("Não tem"));

let text = 'tem bola na cesta';

console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem o quadrado?"))
console.log(/quadrado/.test("3123123quadrado312313123?"))