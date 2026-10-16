# 🏁 Presentación de Fe - Invitación Digital

Invitación digital para una ceremonia de presentación de niños (dedicación de infantes), con temática de carreras. Construida como plantilla: todo el contenido (nombre, fechas, lugares, padrinos, número de WhatsApp) es de ejemplo y debe reemplazarse antes de publicar.

Diseñada para ser simple de usar también para invitados de mayor edad: sin galería de fotos ni formularios de RSVP, solo botones directos.

## ✨ Características

- 🏎️ Diseño temático de carreras (franja a cuadros, divisores tipo carretera, siluetas de auto y grúa, tipografía lúdica)
- ⏰ Contador regresivo hasta el día del evento
- 🗺️ Mapa y botón "Cómo llegar" para la ceremonia y la celebración
- 💬 Confirmación de asistencia con **un solo toque**: dos botones grandes que abren WhatsApp con el mensaje ya escrito (sin formularios)
- 📞 Alternativa de llamada directa para quienes prefieren no usar WhatsApp
- 🎶 Reproductor oficial de Spotify embebido con una canción de la película
- 📱 Diseño responsivo, adaptado a móviles y escritorio

## 🛠️ Tecnologías

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/) (sobre Base UI)
- [lucide-react](https://lucide.dev/) para iconografía

## 📝 Personalizar el contenido

Toda la información del evento vive en un solo archivo:

```
src/config/event.ts
```

Edita ahí: nombre del bebé (y género, para los textos automáticos), padrinos, padres, fecha, lugar y hora de la ceremonia y la celebración, el número de WhatsApp para el RSVP (formato internacional sin signos, ej. `521234567890`), y la canción (`song`, con el ID de Spotify de la pista).

Para cambiar la canción: entra a la pista en [open.spotify.com](https://open.spotify.com), copia el ID que aparece en la URL (`open.spotify.com/track/<ID>`) y reemplázalo en `spotifyTrackId`.

> Nota sobre el tema "Cars": por derechos de autor no se incluye ningún arte oficial de Disney/Pixar ni audio descargado de la canción. El fondo del hero usa siluetas de auto y grúa dibujadas originalmente (`src/components/car-illustrations.tsx`), y la canción se reproduce mediante el widget oficial embebido de Spotify (`src/components/sections/song.tsx`), sin alojar ningún archivo de audio en el repositorio. Si tienes imágenes con licencia propia que quieras usar, puedes agregarlas tú mismo en `public/`.

## 🚀 Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🚢 Despliegue

Pensado para desplegarse en [Vercel](https://vercel.com): importa el repositorio y Vercel detecta automáticamente la configuración de Next.js.
