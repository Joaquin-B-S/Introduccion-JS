// Fetch API en JavaScript
// Crear una función para obtener datos de una API
function obtenerDatosAPI(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    "Error en la solicitud: " + response.statusText
                );
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
}
// Usar la función para obtener datos de una API
obtenerDatosAPI("https://jsonplaceholder.typicode.com/posts")
    .then((datos) => {
        console.log("Datos obtenidos:", datos);
    })
    .catch((error) => {
        console.error("Error al procesar los datos:", error);
    });

// Manejar el caso en que la API no está disponible
if (!window.fetch) {
    console.error("Fetch API no está soportada en este navegador.");
}
// Manejar el caso en que la URL es inválida
if (!/^https?:\/\//.test("https://jsonplaceholder.typicode.com/posts")) {
    console.error("La URL proporcionada no es válida.");
}
// Manejar el caso en que la respuesta no es JSON
if (
    !("application/json" in new Headers({ "Content-Type": "application/json" }))
) {
    console.error("La respuesta no es de tipo JSON.");
}
// Manejar el caso en que la solicitud es bloqueada por CORS
if (
    !(
        "Access-Control-Allow-Origin" in
        new Headers({ "Access-Control-Allow-Origin": "*" })
    )
) {
    console.error("La solicitud ha sido bloqueada por CORS.");
}
// Manejar el caso en que la API devuelve un error
if (
    !(
        "Error" in
        new Headers({ "Content-Type": "application/json", Error: "true" })
    )
) {
    console.error("La API ha devuelto un error.");
}
