# 🕊️ Confirmación - Invitación Digital

Invitación digital interactiva para el Sacramento de la Confirmación. Construida como plantilla: todo el contenido (nombre, fechas, lugares, fotos, música, número de WhatsApp) es de ejemplo y debe reemplazarse antes de publicar.

## ✨ Características

- 🎠 Galería de fotos con carrusel automático y navegación manual
- ⏰ Contador regresivo hasta el día del evento
- 🎵 Música de fondo con control de encendido/apagado
- 📱 Confirmación de asistencia (RSVP) vía WhatsApp
- 🗺️ Mapas integrados para la ceremonia y la recepción
- 🎨 Diseño responsivo, adaptado a móviles y escritorio

## 🛠️ Tecnologías

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/) para iconografía

## 📝 Personalizar el contenido

Toda la información del evento vive en un solo archivo:

```
src/config/event.ts
```

Edita ahí: nombre del confirmante, padrino/madrina, padres, fecha, lugar y hora de la ceremonia y la recepción, y el número de WhatsApp para el RSVP (formato internacional sin signos, ej. `521234567890`).

Otros contenidos a reemplazar:

- **Fotos**: agrega tus imágenes en `public/gallery/` y actualiza el arreglo `photos` en `src/components/sections/gallery.tsx`.
- **Música de fondo**: coloca un archivo con licencia válida en `public/audio/musica-fondo.mp3` (o cambia la ruta en `event.ts`).

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
