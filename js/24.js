// Objeto literal en javascript POO

// Objeto literal
const producto = {
    nombre: "Laptop",
    precio: 1200.0,
    disponible: true,
    informacion: function () {
        return `${this.nombre} - Precio: $${this.precio}`;
    },
};

// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.informacion = function () {
        return `${this.nombre} - Precio: $${this.precio}`;
    };
}
// Crear una instancia del objeto Producto
const laptop = new Producto("Laptop", 1200.0, true);
// Acceder a las propiedades del objeto
console.log(laptop.nombre); // Imprime "Laptop"
console.log(laptop["precio"]); // Imprime 1200.0
// Llamar al método informacion
console.log(laptop.informacion()); // Imprime "Laptop - Precio: $1200"
