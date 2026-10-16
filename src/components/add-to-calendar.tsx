"use client";

import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventConfig } from "@/config/event";

function toLocalICSString(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(
    date.getHours(),
  )}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function buildICS() {
  const start = new Date(eventConfig.date.iso);
  // Duración estimada de 2 horas para el evento en el calendario.
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Presentacion de Fe//ES",
    "BEGIN:VEVENT",
    `DTSTART:${toLocalICSString(start)}`,
    `DTEND:${toLocalICSString(end)}`,
    `SUMMARY:Presentación de ${eventConfig.child.fullName}`,
    `LOCATION:${eventConfig.ceremony.place}, ${eventConfig.ceremony.address}`,
    `DESCRIPTION:Ceremonia de presentación de fe de ${eventConfig.child.fullName}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

export function AddToCalendar() {
  const handleClick = () => {
    const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "presentacion.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button type="button" variant="outline" className="gap-2" onClick={handleClick}>
      <CalendarPlus className="h-4 w-4" />
      Agregar al calendario
    </Button>
  );
}
