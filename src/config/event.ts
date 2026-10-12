// Datos de ejemplo (placeholder). Reemplaza cada valor con la información real
// de la Confirmación antes de publicar el sitio definitivo.

export const eventConfig = {
  confirmand: {
    fullName: "Nombre Apellido",
    firstName: "Nombre",
  },
  sponsor: {
    // Padrino / madrina de Confirmación
    name: "Nombre del Padrino o Madrina",
  },
  parents: {
    names: "Nombre del Padre & Nombre de la Madre",
  },
  date: {
    // Fecha y hora en formato ISO (zona horaria local del navegador del visitante)
    iso: "2026-05-16T13:00:00",
    display: "16 de Mayo 2026",
  },
  ceremony: {
    title: "Ceremonia de Confirmación",
    time: "1:00 PM",
    place: "Parroquia [Nombre de la Parroquia]",
    address: "Dirección de la parroquia, Ciudad",
  },
  reception: {
    title: "Recepción",
    time: "5:00 PM",
    place: "[Nombre del Salón de Eventos]",
    address: "Dirección del salón, Ciudad",
  },
  rsvp: {
    // Número en formato internacional sin signos, ej. 521234567890
    whatsappNumber: "521234567890",
  },
  music: {
    // Coloca tu pista en public/audio/musica-fondo.mp3 (con licencia válida)
    src: "/audio/musica-fondo.mp3",
    title: "Música de fondo",
    volume: 0.5,
  },
  gallery: {
    // Reemplaza por rutas reales en public/gallery/ (ej. "/gallery/foto-1.jpg")
    placeholderCount: 6,
    intervalMs: 5000,
  },
  credits: {
    text: "Desarrollado con cariño para celebrar este día tan especial",
  },
} as const;
