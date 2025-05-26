// Programacion orientada a objetos
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
// Crear una instancia de la clase Persona
const persona1 = new Persona("Carlos", 28);
const persona2 = new Persona("Ana", 22);
// Llamar al método saludar
persona1.saludar(); // Hola, me llamo Carlos y tengo 28 años.
persona2.saludar(); // Hola, me llamo Ana y tengo 22 años.

// Herencia en POO
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad); // Llama al constructor de la clase padre
        this.puesto = puesto;
    }

    saludar() {
        console.log(
            `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.puesto}.`
        );
    }
}
// Crear una instancia de la clase Empleado
const empleado1 = new Empleado("Luis", 35, "Desarrollador");
const empleado2 = new Empleado("Marta", 30, "Diseñadora");
// Llamar al método saludar
empleado1.saludar(); // Hola, me llamo Luis, tengo 35 años y soy Desarrollador.
empleado2.saludar(); // Hola, me llamo Marta, tengo 30 años y soy Diseñadora.

// Polimorfismo en POO
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} maulla.`);
    }
}
// Crear instancias de las clases Perro y Gato
const perro1 = new Perro("Rex");
const gato1 = new Gato("Miau");
// Llamar al método hacerSonido
perro1.hacerSonido(); // Rex ladra.
gato1.hacerSonido(); // Miau maulla.

// Encapsulamiento en POO
class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this._saldo = saldoInicial; // Usar _ para indicar que es privado
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this._saldo += cantidad;
            console.log(`Depositados ${cantidad}. Nuevo saldo: ${this._saldo}`);
        } else {
            console.log("Cantidad a depositar debe ser mayor que 0.");
        }
    }
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this._saldo) {
            this._saldo -= cantidad;
            console.log(`Retirados ${cantidad}. Nuevo saldo: ${this._saldo}`);
        } else {
            console.log("Cantidad a retirar no válida.");
        }
    }
    obtenerSaldo() {
        return this._saldo; // Método para acceder al saldo
    }
    informacion() {
        return `Titular: ${this.titular}, Saldo: ${this._saldo}`;
    }
    setSaldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this._saldo = nuevoSaldo;
            console.log(`Nuevo saldo establecido: ${this._saldo}`);
        } else {
            console.log("El saldo no puede ser negativo.");
        }
    }
    getSaldo() {
        return this._saldo; // Método para obtener el saldo
    }
}
// Crear una instancia de la clase CuentaBancaria
const cuenta1 = new CuentaBancaria("Juan", 1000);
const cuenta2 = new CuentaBancaria("Maria", 500);
// Usar los métodos de la clase CuentaBancaria
cuenta1.depositar(200); // Depositados 200. Nuevo saldo: 1200
cuenta1.retirar(300); // Retirados 300. Nuevo saldo: 900
cuenta2.depositar(100); // Depositados 100. Nuevo saldo: 600
cuenta2.retirar(700); // Cantidad a retirar no válida.
console.log(cuenta1.informacion()); // Titular: Juan, Saldo: 900
console.log(cuenta2.informacion()); // Titular: Maria, Saldo: 600
// Acceder al saldo usando el método getSaldo
console.log(cuenta1.getSaldo()); // 900
console.log(cuenta2.getSaldo()); // 600
// Modificar el saldo usando el método setSaldo
cuenta1.setSaldo(1200); // Nuevo saldo establecido: 1200
console.log(cuenta1.getSaldo()); // 1200
// Intentar establecer un saldo negativo
cuenta2.setSaldo(-100); // El saldo no puede ser negativo.
// Acceder al saldo directamente (no recomendado, pero posible)
console.log(cuenta1._saldo); // 1200
console.log(cuenta2._saldo); // 600
