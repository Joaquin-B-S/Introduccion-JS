// Orden de las operaciones
// 1. Paréntesis
// 2. Potencias
// 3. Multiplicación y división
// 4. Suma y resta
// // Ejemplo de orden de operaciones
const resultado = 10 + 2 * 3 - 5 / 2 ** 2;
console.log(resultado); // 10 + 6 - 1 = 15
// // Ejemplo de orden de operaciones con paréntesis
const resultado2 = ((10 + 2) * (3 - 5)) / 2 ** 2;
console.log(resultado2); // (12 * -2) / 4 = -6
// // Ejemplo de orden de operaciones con paréntesis y potencias
const resultado3 = ((10 + 2) * (3 - 5)) / 2 ** 2 + 1;
console.log(resultado3); // (-6 / 4) + 1 = -1.5
