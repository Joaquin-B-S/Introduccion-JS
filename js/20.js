// metodos de propiedades
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function () {
        console.log("Pausando...");
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist de nombre: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist de nombre: ${nombre}`);
    },
    eliminarCancion: function (id) {
        console.log(`Eliminando la canción con el id: ${id}`);
    },
};

// Reproduciendo una canción
reproductor.reproducir(30);
// Pausando la canción
reproductor.pausar();
// Creando una playlist
reproductor.crearPlaylist("Mi Playlist");
