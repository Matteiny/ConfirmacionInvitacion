import { eventConfig } from "@/config/event";

function MapCard({ title, address }: { title: string; address: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
      <div className="border-b border-amber-100 px-4 py-3">
        <h3 className="font-medium text-stone-800">{title}</h3>
        <p className="text-sm text-stone-500">{address}</p>
      </div>
      <iframe
        title={title}
        src={src}
        className="h-64 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function LocationMaps() {
  return (
    <section className="bg-rose-50/60 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-3xl font-semibold text-stone-900">
          Cómo Llegar
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <MapCard
            title={eventConfig.ceremony.title}
            address={eventConfig.ceremony.address}
          />
          <MapCard
            title={eventConfig.reception.title}
            address={eventConfig.reception.address}
          />
        </div>
      </div>
    </section>
  );
}
