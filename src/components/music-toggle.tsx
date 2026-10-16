"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { eventConfig } from "@/config/event";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      // Si el navegador bloquea la reproducción o falta el archivo de audio,
      // no interrumpimos la experiencia del usuario.
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={eventConfig.music.src}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onVolumeChange={(e) => {
          e.currentTarget.volume = eventConfig.music.volume;
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        aria-pressed={playing}
        title={eventConfig.music.title}
        className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-red-200 bg-white/90 text-red-700 shadow-lg backdrop-blur transition hover:bg-white"
      >
        {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
