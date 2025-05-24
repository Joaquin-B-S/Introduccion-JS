// Estructuras de control
// IF
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
// SWITCH
let dia = 2;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}
// WHILE
let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}
// DO WHILE
let contador2 = 0;
do {
    console.log("Contador 2:", contador2);
    contador2++;
} while (contador2 < 5);
// FOR
for (let i = 0; i < 5; i++) {
    console.log("Contador 3:", i);
}
// FOR IN
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
// FOR OF
const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log("Número:", numero);
}
// FOR EACH
numeros.forEach((numero) => {
    console.log("Número:", numero);
});
