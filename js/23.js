// This en JS

const reservacion = {
    nombre: "Juan",
    apellido: "Perez",
    fecha: "2023-10-01",
    total: 150.0,
    pagado: true,
    informacion: function () {
        return `${this.nombre} ${this.apellido} - Fecha: ${this.fecha}`;
    },
};

console.log(reservacion.apellido); // Imprime "Perez"
console.log(reservacion["fecha"]); // Imprime "2023-10-01"
