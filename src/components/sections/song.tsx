import { eventConfig } from "@/config/event";

export function Song() {
  const { song } = eventConfig;
  const embedSrc = `https://open.spotify.com/embed/track/${song.spotifyTrackId}?utm_source=generator`;

  return (
    <section className="bg-amber-50 px-6 py-16">
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-heading text-2xl font-semibold text-stone-900">
          🎶 La Canción de Este Día
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          &ldquo;{song.title}&rdquo; &mdash; {song.artist} ({song.note})
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl shadow-sm">
          <iframe
            title={`${song.title} - ${song.artist}`}
            src={embedSrc}
            width="100%"
            height="152"
            style={{ border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
