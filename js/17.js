// funciones
// Definición de funciones
// Funcion declarativa
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero";
    }
    return a / b;
}

function potencia(a, b) {
    return Math.pow(a, b);
}

function raizCuadrada(a) {
    if (a < 0) {
        return "No se puede calcular la raíz cuadrada de un número negativo";
    }
    return Math.sqrt(a);
}

function factorial(a) {
    if (a < 0) {
        return "No se puede calcular el factorial de un número negativo";
    }
    if (a === 0 || a === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= a; i++) {
        resultado *= i;
    }
    return resultado;
}

// Funcion de flecha
const sumaFlecha = (a, b) => a + b;

// funcion anonima
const sumaAnonima = function (a, b) {
    return a + b;
};

// Funcion de orden superior
function operacion(a, b, operacion) {
    return operacion(a, b);
}

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("Esta es una función IIFE");
})();

// Ejemplo de uso
console.log("Suma: " + suma(5, 3));
console.log("Resta: " + resta(5, 3));
console.log("Multiplicación: " + multiplicacion(5, 3));
console.log("División: " + division(5, 3));
console.log("Potencia: " + potencia(5, 3));
console.log("Raíz cuadrada: " + raizCuadrada(25));
console.log("Factorial: " + factorial(5));
console.log("Suma de flecha: " + sumaFlecha(5, 3));
console.log("Suma anónima: " + sumaAnonima(5, 3));
console.log("Operación: " + operacion(5, 3, suma));
console.log("Operación: " + operacion(5, 3, resta));
