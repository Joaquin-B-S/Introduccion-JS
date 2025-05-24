// Mas metodos arreglos push, pop, shift, unshift
// 8. push
// push es un metodo que se utiliza para agregar uno o mas elementos al final de un arreglo.
const numbers11 = [1, 2, 3, 4, 5];
numbers11.push(6, 7, 8);
console.log(numbers11);

// 9. pop
// pop es un metodo que se utiliza para eliminar el ultimo elemento de un arreglo y devolverlo.
const numbers12 = [1, 2, 3, 4, 5];
const lastElement = numbers12.pop();
console.log(lastElement); // 5
console.log(numbers12); // [1, 2, 3, 4]

// 10. shift
// shift es un metodo que se utiliza para eliminar el primer elemento de un arreglo y devolverlo.
const numbers13 = [1, 2, 3, 4, 5];
const firstElement = numbers13.shift();
console.log(firstElement); // 1
console.log(numbers13); // [2, 3, 4, 5]

// 11. unshift
// unshift es un metodo que se utiliza para agregar uno o mas elementos al principio de un arreglo.
const numbers14 = [1, 2, 3, 4, 5];
numbers14.unshift(0, -1, -2);
console.log(numbers14); // [0, -1, -2, 1, 2, 3, 4, 5]

// 12. splice
// splice es un metodo que se utiliza para agregar o eliminar elementos de un arreglo en una posicion determinada.
// En este caso, eliminamos 2 elementos a partir de la posicion 2 y agregamos 3 elementos en esa misma posicion.
const numbers15 = [1, 2, 3, 4, 5];
numbers15.splice(2, 2, 6, 7, 8);
console.log(numbers15); // [1, 2, 6, 7, 8, 5]

// 13. slice
// slice es un metodo que se utiliza para crear un nuevo arreglo a partir de un arreglo existente, extrayendo una porcion del mismo.
// En este caso, extraemos los elementos desde la posicion 2 hasta la posicion 4 (sin incluirla).
const numbers16 = [1, 2, 3, 4, 5];
const sliced = numbers16.slice(2, 4);
console.log(sliced); // [3, 4]
