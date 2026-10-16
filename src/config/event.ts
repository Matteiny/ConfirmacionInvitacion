// Datos de ejemplo (placeholder). Reemplaza cada valor con la información real
// de la presentación antes de publicar el sitio definitivo.

export const eventConfig = {
  child: {
    fullName: "Nombre Apellido",
    firstName: "Nombre",
    // "niño" | "niña" — ajusta el texto del hero automáticamente
    gender: "niño" as "niño" | "niña",
  },
  sponsors: {
    padrino: "Nombre del Padrino",
    madrina: "Nombre de la Madrina",
  },
  parents: {
    names: "Nombre del Padre & Nombre de la Madre",
  },
  date: {
    // Fecha y hora en formato ISO (zona horaria local del navegador del visitante)
    iso: "2027-04-17T13:00:00",
    display: "17 de Abril 2027",
  },
  ceremony: {
    title: "Ceremonia de Presentación",
    time: "1:00 PM",
    place: "Iglesia [Nombre de la Iglesia]",
    address: "Dirección de la iglesia, Ciudad",
  },
  celebration: {
    title: "Celebración",
    time: "5:00 PM",
    place: "[Nombre del Salón o Jardín]",
    address: "Dirección del lugar, Ciudad",
  },
  rsvp: {
    // Número en formato internacional sin signos, ej. 521234567890
    whatsappNumber: "521234567890",
  },
  song: {
    // Reproductor oficial de Spotify (no se aloja ningún archivo de audio).
    // Para cambiar la canción, reemplaza el ID: lo encuentras en la URL de
    // Spotify, ej. https://open.spotify.com/track/<ID>
    title: "Life is a Highway",
    artist: "Rascal Flatts",
    note: 'De la película "Cars"',
    spotifyTrackId: "5YbeJyTQkdSAWe1Ie4sLAl",
  },
  credits: {
    text: "Con amor celebramos el regalo más grande de nuestras vidas",
  },
} as const;
