const producto = {
    nombre: "Camiseta",
    precio: 19.99,
    categoria: "Ropa",
    stock: 100,
};

const medidas = {
    talla: "M",
    color: "Rojo",
};

// Unir objetos
const productoCompleto = { ...producto, ...medidas };
console.log(productoCompleto);
// Clonación de objetos
const clonProducto = { ...producto };
console.log(clonProducto);
// Clonación de objetos con Object.assign
const clonProducto2 = Object.assign({}, producto);
console.log(clonProducto2);
