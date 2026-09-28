"use client";

import { ArrowRight, UserRound } from "lucide-react";
import { useState } from "react";

export function SaveContactButton() {
  const [label, setLabel] = useState("Save Contact");

  return (
    <a
      href="/sarvesh-gadkari.vcf"
      className="press flex h-13 items-center gap-3 rounded-full pr-2 pl-2 text-[15px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(29,104,72,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]"
      style={{ background: "var(--mulsetu-brand)" }}
      onClick={() => setLabel("Opening contact")}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15">
        <UserRound className="size-[18px]" aria-hidden="true" />
      </span>
      <span className="flex-1 tracking-[0.02em]">{label}</span>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-card text-forest">
        <ArrowRight className="size-[18px]" aria-hidden="true" />
      </span>
    </a>
  );
}
