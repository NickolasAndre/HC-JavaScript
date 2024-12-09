const validarMarca = /Marca: (Nike|Adidas|Puma)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Marca: sdw"));