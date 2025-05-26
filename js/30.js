// Async Await en JavaScript
// Crear una función asíncrona que utiliza await para manejar la promesa
async function manejarPromesa() {
    try {
        const resultado = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true; // Cambiar a false para simular un error
                if (exito) {
                    resolve("¡Operación exitosa!");
                } else {
                    reject("Ocurrió un error.");
                }
            }, 2000);
        });
        console.log(resultado); // ¡Operación exitosa!
    } catch (error) {
        console.error(error); // Ocurrió un error.
    }
}
// Llamar a la función asíncrona
manejarPromesa();
// Explicación:
// En este código, se define una función asíncrona `manejarPromesa` que utiliza `await` para esperar la resolución de una promesa.
// Si la promesa se resuelve exitosamente, se imprime el resultado. Si ocurre un error, se captura y se imprime el error.
// Este enfoque permite escribir código asíncrono de manera más legible y similar al código síncrono, evitando el uso excesivo de callbacks.
