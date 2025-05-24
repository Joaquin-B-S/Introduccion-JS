// Metodos arreglos
// 1. forEach
// forEach es un metodo que se utiliza para iterar sobre los elementos de un arreglo y ejecutar una funcion para cada elemento.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});

// 2. map
// map es un metodo que se utiliza para crear un nuevo arreglo a partir de otro arreglo, aplicando una funcion a cada elemento del arreglo original.
// El nuevo arreglo tendra la misma longitud que el arreglo original.
// En este caso, multiplicamos cada elemento del arreglo original por 2 y lo guardamos en un nuevo arreglo.
// El resultado sera un nuevo arreglo con los elementos multiplicados por 2.
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = numbers2.map((number) => {
    return number * 2;
});
console.log(numbers3);

// 3. filter
// filter es un metodo que se utiliza para crear un nuevo arreglo a partir de otro arreglo, filtrando los elementos que cumplen con una condicion.
const numbers4 = [1, 2, 3, 4, 5];
const numbers5 = numbers4.filter((number) => {
    return number > 2;
});
console.log(numbers5);

// 4. reduce
// reduce es un metodo que se utiliza para reducir un arreglo a un solo valor, aplicando una funcion a cada elemento del arreglo y acumulando el resultado.
// En este caso, sumamos todos los elementos del arreglo y el resultado sera un solo valor, la suma de todos los elementos.
// El primer argumento de la funcion es el acumulador, que se inicializa en 0, y el segundo argumento es el elemento actual del arreglo.
const numbers6 = [1, 2, 3, 4, 5];
const sum = numbers6.reduce((accumulator, number) => {
    return accumulator + number;
}, 0);
console.log(sum);

// 5. find
// find es un metodo que se utiliza para encontrar el primer elemento de un arreglo que cumple con una condicion.
const numbers7 = [1, 2, 3, 4, 5];
const found = numbers7.find((number) => {
    return number > 2;
});
console.log(found);

// 6. some
// some es un metodo que se utiliza para comprobar si al menos un elemento de un arreglo cumple con una condicion.
const numbers8 = [1, 2, 3, 4, 5];
const some = numbers8.some((number) => {
    return number > 2;
});
console.log(some);

// 7. every
// every es un metodo que se utiliza para comprobar si todos los elementos de un arreglo cumplen con una condicion.
const numbers9 = [1, 2, 3, 4, 5];
const every = numbers9.every((number) => {
    return number > 2;
});
console.log(every);

// 8. includes
// includes es un metodo que se utiliza para comprobar si un arreglo contiene un elemento determinado.
const numbers10 = [1, 2, 3, 4, 5];
const includes = numbers10.includes(3);
console.log(includes);
