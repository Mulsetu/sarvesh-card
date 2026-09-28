"use client";

import { ArrowRight, UserRound } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { androidContactIntent, saveContactMode, vcardPath } from "@/lib/contact";
import { copyCardLink } from "@/lib/share";

export function SaveContactButton() {
  const [label, setLabel] = useState("Save Contact");
  const [inAppHelp, setInAppHelp] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy link");

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    const mode = saveContactMode(navigator.userAgent);
    if (mode === "in-app") {
      event.preventDefault();
      setInAppHelp(true);
      return;
    }
    setLabel("Opening contact");
    window.setTimeout(() => setLabel("Save Contact"), 2500);
    // iPhone and desktop open the vCard itself as an "Add Contact" sheet; Android
    // browsers would download it, so open the Contacts app directly instead.
    if (mode === "android") {
      event.preventDefault();
      window.location.href = androidContactIntent(new URL(vcardPath, window.location.origin).href);
    }
  }

  async function onCopy() {
    const ok = await copyCardLink();
    setCopyLabel(ok ? "Link copied" : "Copy failed");
  }

  return (
    <>
      <a
        href={vcardPath}
        className="press flex h-13 items-center gap-3 rounded-full pr-2 pl-2 text-[15px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(29,104,72,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]"
        style={{ background: "var(--mulsetu-brand)" }}
        onClick={onClick}
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15">
          <UserRound className="size-[18px]" aria-hidden="true" />
        </span>
        <span className="flex-1 tracking-[0.02em]">{label}</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-card text-forest">
          <ArrowRight className="size-[18px]" aria-hidden="true" />
        </span>
      </a>
      {inAppHelp ? (
        <div role="status" className="rounded-[18px] border border-forest/15 bg-card p-3.5 text-[13px] leading-snug shadow-[0_1px_2px_rgba(22,24,29,0.05)]">
          <p className="font-semibold text-ink">Open in your browser to save</p>
          <p className="mt-1 text-muted">
            This app&apos;s built-in browser can&apos;t add contacts. Tap <strong className="text-ink">⋯</strong> or <strong className="text-ink">⋮</strong> and choose{" "}
            <strong className="text-ink">Open in browser</strong> (Safari or Chrome), then tap Save Contact again.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button type="button" onClick={onCopy} className="press h-10 rounded-full bg-forest text-[13px] font-semibold text-white">
              {copyLabel}
            </button>
            <a href={vcardPath} className="press flex h-10 items-center justify-center rounded-full border border-ink/10 bg-white text-[13px] font-semibold">
              Try anyway
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
