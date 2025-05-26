// Notification Api en JavaScript
// Crear una función para mostrar una notificación
function mostrarNotificacion(titulo, mensaje) {
    if (Notification.permission === "granted") {
        new Notification(titulo, { body: mensaje });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permiso) => {
            if (permiso === "granted") {
                new Notification(titulo, { body: mensaje });
            }
        });
    }
}
// Usar la función para mostrar una notificación
mostrarNotificacion("Hola", "Esta es una notificación de prueba.");
// Manejar el caso en que las notificaciones no están soportadas
if (!("Notification" in window)) {
    console.error("Este navegador no soporta notificaciones.");
}
// Manejar el caso en que el usuario ha denegado las notificaciones
if (Notification.permission === "denied") {
    console.warn("El usuario ha denegado las notificaciones.");
}
// Manejar el caso en que el usuario ha bloqueado las notificaciones
if (Notification.permission === "default") {
    console.info(
        "El usuario aún no ha respondido a la solicitud de notificación."
    );
}
// Manejar el caso en que el usuario ha concedido las notificaciones
if (Notification.permission === "granted") {
    console.log("El usuario ha concedido las notificaciones.");
}
