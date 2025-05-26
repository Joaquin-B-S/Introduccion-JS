// Promises en JavaScript
// // Crear una promesa que se resuelve después de 2 segundos
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true; // Cambiar a false para simular un error
        if (exito) {
            resolve("¡Operación exitosa!");
        } else {
            reject("Ocurrió un error.");
        }
    }, 2000);
});
// Manejar la promesa
promesa
    .then((resultado) => {
        console.log(resultado); // ¡Operación exitosa!
    })
    .catch((error) => {
        console.error(error); // Ocurrió un error.
    });
