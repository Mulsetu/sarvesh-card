"use client";

import { ArrowRight, UserRound } from "lucide-react";
import { useState } from "react";

export function SaveContactButton() {
  const [label, setLabel] = useState("Save Contact");

  return (
    <a
      href="/api/vcard"
      className="press flex h-[54px] items-center gap-3 rounded-[16px] px-3.5 text-white shadow-[0_10px_22px_rgba(47,106,24,0.28)]"
      style={{ background: "linear-gradient(100deg, #3d7a12 0%, #1f6d4a 55%, #17686c 100%)" }}
      onClick={() => setLabel("Opening contact")}
    >
      <span className="grid size-8 place-items-center rounded-full bg-white/15">
        <UserRound className="size-[18px]" aria-hidden="true" />
      </span>
      <span className="flex-1 text-left text-[15px] font-semibold tracking-[-0.01em]">{label}</span>
      <ArrowRight className="size-[18px]" aria-hidden="true" />
    </a>
  );
}
