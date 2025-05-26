// Try Catch ejemplo
try {
    // Código que puede generar un error
    let resultado = 10 / 0; // Esto generará Infinity, no un error
    console.log("Resultado:", resultado);
} catch (error) {
    // Manejo del error
    console.error("Se ha producido un error:", error.message);
} finally {
    // Código que se ejecuta siempre, haya o no error
    console.log("Bloque finally ejecutado.");
}
