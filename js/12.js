const producto = {
    nombre: "Camiseta",
    precio: 19.99,
    categoria: "Ropa",
    stock: 100,
};

producto.imagen = "https://example.com/camiseta.jpg";
console.log(producto);

Object.freeze(producto); // Congela el objeto, impidiendo cambios
producto.precio = 25.99; // No tendrá efecto
console.log(producto.precio); // 19.99
Object.seal(producto); // Sella el objeto, impidiendo agregar o eliminar propiedades
producto.nuevaPropiedad = "valor"; // No tendrá efecto
