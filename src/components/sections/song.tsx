"use client";

import { useEffect, useRef, useState } from "react";
import { Flag } from "lucide-react";
import { eventConfig } from "@/config/event";

interface SpotifyEmbedController {
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
}

interface SpotifyIframeApi {
  createController: (
    element: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    callback: (controller: SpotifyEmbedController) => void,
  ) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIframeApi) => void;
  }
}

export function Song() {
  const { song } = eventConfig;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const pendingPlayRef = useRef(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      if (!containerRef.current) return;
      IFrameAPI.createController(
        containerRef.current,
        { uri: `spotify:track:${song.spotifyTrackId}`, width: "100%", height: "152" },
        (controller) => {
          controllerRef.current = controller;
          // El usuario pudo haber tocado "comenzar" antes de que el
          // reproductor terminara de cargar.
          if (pendingPlayRef.current) controller.play();
        },
      );
    };

    if (!document.getElementById("spotify-iframe-api")) {
      const script = document.createElement("script");
      script.id = "spotify-iframe-api";
      script.src = "https://open.spotify.com/embed/iframe-api/v1";
      script.async = true;
      document.body.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = () => {
    // Llamar a play() dentro de un gesto real del usuario (click) es la
    // única forma confiable de "autoplay" que los navegadores permiten.
    setEntered(true);
    if (controllerRef.current) {
      controllerRef.current.play();
    } else {
      pendingPlayRef.current = true;
    }
  };

  return (
    <>
      <section className="bg-amber-50/70 px-6 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-heading text-2xl font-semibold text-stone-900">
            🎶 La Canción de Este Día
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            &ldquo;{song.title}&rdquo; &mdash; {song.artist} ({song.note})
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl shadow-sm">
            <div ref={containerRef} />
          </div>
        </div>
      </section>

      {!entered && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-amber-100 via-orange-200 to-orange-400 px-6 text-center">
          <Flag className="h-10 w-10 text-stone-800" aria-hidden />
          <p className="text-sm font-semibold tracking-[0.3em] text-red-700 uppercase">
            Presentación de Fe
          </p>
          <h1 className="font-display text-3xl text-stone-900 sm:text-4xl">
            {eventConfig.child.fullName}
          </h1>
          <button
            type="button"
            onClick={handleEnter}
            className="rounded-full bg-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700 active:translate-y-px"
          >
            🏁 Toca para comenzar
          </button>
          <p className="max-w-xs text-xs text-stone-700">
            Con la canción &ldquo;{song.title}&rdquo; de {song.artist}
          </p>
        </div>
      )}
    </>
  );
}
