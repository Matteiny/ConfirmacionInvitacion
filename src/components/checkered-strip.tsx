export function CheckeredStrip({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-3 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-conic-gradient(#1c1917 0% 25%, #ffffff 0% 50%)",
        backgroundSize: "16px 16px",
      }}
    />
  );
}
