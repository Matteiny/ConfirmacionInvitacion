"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { eventConfig } from "@/config/event";

// Reemplaza este arreglo con tus fotos reales, por ejemplo:
// const photos = ["/gallery/foto-1.jpg", "/gallery/foto-2.jpg", ...];
const photos: string[] = Array.from(
  { length: eventConfig.gallery.placeholderCount },
  () => "",
);

export function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, eventConfig.gallery.intervalMs);
    return () => clearInterval(timer);
  }, []);

  const goTo = (next: number) => {
    setIndex(((next % photos.length) + photos.length) % photos.length);
  };

  return (
    <section className="bg-rose-50/60 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-stone-900">
          Galería
        </h2>
        <p className="mt-2 text-stone-500">
          Fotos de ejemplo — reemplázalas en{" "}
          <code className="rounded bg-stone-200/60 px-1.5 py-0.5 text-sm">
            src/components/sections/gallery.tsx
          </code>
        </p>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-sm">
          <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-amber-100 via-rose-100 to-white sm:aspect-video">
            <div className="flex flex-col items-center gap-2 text-stone-400">
              <ImageIcon className="h-12 w-12" aria-hidden />
              <span className="text-sm">Foto {index + 1} de {photos.length}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-stone-700 shadow hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-stone-700 shadow hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la foto ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-amber-600" : "bg-amber-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
