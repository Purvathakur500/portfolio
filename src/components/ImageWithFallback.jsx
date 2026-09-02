import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function ImageWithFallback({ src, alt, className = "", label }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-bg-secondary border border-border text-text-muted ${className}`}
      >
        <ImageOff size={28} strokeWidth={1.5} />
        <span className="text-[11px] tracking-[0.14em] uppercase">{label || "Image coming soon"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={className}
      loading="lazy"
    />
  );
}
