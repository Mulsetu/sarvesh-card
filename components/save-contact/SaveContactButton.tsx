"use client";

import { ArrowRight, UserRound } from "lucide-react";
import { useState } from "react";

export function SaveContactButton() {
  const [label, setLabel] = useState("Save Contact");

  return (
    <a
      href="/sarvesh-gadkari.vcf"
      className="press flex h-11 items-center gap-3 rounded-full px-4 text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(47,122,24,0.28)]"
      style={{ background: "linear-gradient(100deg, #3e6700 0%, #1d6848 58%, #19686c 100%)" }}
      onClick={() => setLabel("Opening contact")}
    >
      <UserRound className="size-5" aria-hidden="true" />
      <span className="flex-1 tracking-[0.04em]">{label}</span>
      <ArrowRight className="size-5" aria-hidden="true" />
    </a>
  );
}
