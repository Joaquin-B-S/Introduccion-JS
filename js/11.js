const productos = {
    nombre: "Camiseta",
    precio: 19.99,
    categoria: "Ropa",
    stock: 100,
};

const precioProducto = productos.precio;
console.log(`El precio del producto es: ${precioProducto}`);
const stockProducto = productos.stock;
console.log(`El stock del producto es: ${stockProducto}`);

// Agregar una nueva propiedad
productos.imagen = "https://example.com/camiseta.jpg";

// destructuración
const { nombre, precio, categoria } = productos;
console.log(`Nombre: ${nombre}, Precio: ${precio}, Categoria: ${categoria}`);
// Eliminar una propiedad
delete productos.stock;
console.log(productos);
// Comprobar si una propiedad existe
const existeCategoria = "categoria" in productos;
console.log(`¿La propiedad "categoria" existe? ${existeCategoria}`);
// Recorrer propiedades
for (const propiedad in productos) {
    console.log(`${propiedad}: ${productos[propiedad]}`);
}
// Métodos de objetos
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    },
};
// Llamar al método
persona.saludar();
// Crear un nuevo objeto a partir de otro
const nuevoProducto = Object.create(productos);
nuevoProducto.nombre = "Pantalón";
nuevoProducto.precio = 29.99;
nuevoProducto.categoria = "Ropa";
console.log(nuevoProducto);
// Clonación de objetos
const clonProducto = { ...productos };
console.log(clonProducto);
