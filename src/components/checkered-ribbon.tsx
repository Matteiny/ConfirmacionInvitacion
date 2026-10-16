export function CheckeredRibbon({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`rotate-45 ${className}`}
      style={{
        backgroundImage:
          "repeating-conic-gradient(#1c1917 0% 25%, #ffffff 0% 50%)",
        backgroundSize: "14px 14px",
        boxShadow: "0 0 0 2px rgba(28,25,23,0.25)",
      }}
    />
  );
}
