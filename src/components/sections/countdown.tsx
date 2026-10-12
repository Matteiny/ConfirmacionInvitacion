"use client";

import { useEffect, useState } from "react";
import { eventConfig } from "@/config/event";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const target = new Date(eventConfig.date.iso);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Se calcula solo en el cliente para evitar desajustes de hidratación
    // entre el render del servidor y la hora real del navegador.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setTimeLeft(getTimeLeft(target));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  if (!timeLeft) {
    return (
      <p className="text-center text-lg font-medium text-stone-700">
        ¡Hoy es el gran día! 🎉
      </p>
    );
  }

  const units: { label: string; value: number }[] = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center rounded-2xl border border-amber-200 bg-white/80 px-3 py-4 shadow-sm backdrop-blur"
        >
          <span className="font-serif text-3xl font-semibold text-amber-700 sm:text-4xl tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-xs uppercase tracking-wide text-stone-500">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
