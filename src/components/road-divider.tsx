export function RoadDivider() {
  return (
    <div aria-hidden className="relative h-7 w-full overflow-hidden bg-stone-800">
      <div
        className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 28px, transparent 28px, transparent 52px)",
        }}
      />
    </div>
  );
}
