"use client";

import { useEffect, useState } from "react";
import { CardBack } from "@/components/digital-card/CardBack";
import { CardFront } from "@/components/digital-card/CardFront";

export function FlipCard({ startFlipped = false }: { startFlipped?: boolean }) {
  const [flipped, setFlipped] = useState(startFlipped);

  useEffect(() => {
    if (startFlipped) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setFlipped((current) => current || true);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [startFlipped]);

  return (
    <div className="card-scene">
      <div className={`card-rig ${flipped ? "is-flipped" : ""}`}>
        <CardFront onFlip={() => setFlipped(true)} />
        <CardBack onFlip={() => setFlipped(false)} />
      </div>
    </div>
  );
}
