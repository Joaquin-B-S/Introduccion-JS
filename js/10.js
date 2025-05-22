// objetos
// Objeto literal
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
};

// Objeto constructor
const Persona = function (nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
};

const juan = new Persona("Juan", 30, "Madrid");
// Objeto con métodos
const personaConMetodos = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    },
};

// Objeto con propiedades calculadas
const propiedad = "nombre";
const personaConPropiedadCalculada = {
    [propiedad]: "Juan",
    edad: 30,
    ciudad: "Madrid",
};

console.log(persona);
console.log(persona.ciudad);

persona.imagen = "https://example.com/imagen.jpg";
console.log(persona.imagen);

delete persona.ciudad;
console.log(persona);
