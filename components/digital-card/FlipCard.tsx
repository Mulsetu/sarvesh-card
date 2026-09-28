"use client";

import { useState } from "react";
import { CardBack } from "@/components/digital-card/CardBack";
import { CardFront } from "@/components/digital-card/CardFront";

export function FlipCard({ startFlipped = false }: { startFlipped?: boolean }) {
  const [flipped, setFlipped] = useState(startFlipped);

  return (
    <div className="card-scene">
      <div className={`card-rig ${flipped ? "is-flipped" : ""}`}>
        <CardFront onFlip={() => setFlipped(true)} />
        <CardBack onFlip={() => setFlipped(false)} />
      </div>
    </div>
  );
}
