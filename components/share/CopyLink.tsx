"use client";

import { useState } from "react";
import { copyCardLink } from "@/lib/share";

export function CopyLink() {
  const [label, setLabel] = useState("Copy link");

  async function onCopy() {
    const ok = await copyCardLink();
    setLabel(ok ? "Copied" : "Copy failed");
    if (ok) window.setTimeout(() => setLabel("Copy link"), 1600);
  }

  return (
    <button type="button" className="press h-11 rounded-[12px] border border-ink/10 text-sm font-semibold" onClick={onCopy}>
      {label}
    </button>
  );
}
