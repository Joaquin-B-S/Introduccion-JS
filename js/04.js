const producto = "Audifonos Gamer"; // Iniciar variable y asignarle valor string
const producto1 = String("Computadora"); // Iniciar variable y asignarle valor string
const producto2 = new String("Computadora"); // Iniciar variable y asignarle valor string

console.log(producto); // Imprimir variable en consola
console.log(producto1); // Imprimir variable en consola
console.log(typeof producto2); // Imprimir tipo de variable en consola

// metodos para strings
console.log(producto.length); // Imprimir longitud de variable en consola
console.log(producto.toUpperCase()); // Imprimir variable en mayusculas en consola
console.log(producto.toLowerCase()); // Imprimir variable en minusculas en consola
console.log(producto.indexOf("Gamer")); // Imprimir posicion de la palabra Gamer en consola
console.log(producto.lastIndexOf("Gamer")); // Imprimir posicion de la palabra Gamer en consola
console.log(producto.charAt(0)); // Imprimir primer caracter de la variable en consola

console.log(poroducto.includes("Gamer")); // Imprimir si la variable incluye la palabra Gamer en consola
console.log(producto.startsWith("Audifonos")); // Imprimir si la variable empieza con la palabra Audifonos en consola
console.log(producto.endsWith("Gamer")); // Imprimir si la variable termina con la palabra Gamer en consola
