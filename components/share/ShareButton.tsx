"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cardLabel, profile } from "@/lib/profile";
import { copyCardLink, shareCard, whatsAppCardUrl } from "@/lib/share";

export function ShareSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  async function onShare() {
    const result = await shareCard();
    if (result === "shared") setNotice("Share sheet opened.");
    if (result === "unavailable") setNotice("Sharing is not available here. Copy the link instead.");
  }

  async function onCopy() {
    const ok = await copyCardLink();
    setNotice(ok ? "Link copied." : "Select the address below and copy it.");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(20,22,28,0.4)] p-3 sm:items-center">
      <button type="button" className="absolute inset-0" aria-label="Close share" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-[400px] rounded-[24px] bg-card p-5 shadow-[0_16px_40px_rgba(20,22,28,0.14)]"
      >
        <p className="text-[11px] tracking-[0.16em] text-teal uppercase">Share</p>
        <h2 id={titleId} className="mt-2 font-display text-[1.45rem] font-semibold tracking-[-0.03em]">
          {profile.name}
        </h2>
        <p className="mt-1 text-sm text-muted">
          {profile.title}
          <span className="px-1.5 text-ink/30">·</span>
          Mulsetu
        </p>
        <p className="mt-3 text-sm">{cardLabel}</p>
        <div className="mt-5 grid gap-2">
          <button type="button" className="press h-11 rounded-[12px] bg-forest text-sm font-semibold text-white" onClick={onShare}>
            Share
          </button>
          <a
            href={whatsAppCardUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="press flex h-11 items-center justify-center rounded-[12px] bg-[#f3f1eb] text-sm font-semibold"
          >
            WhatsApp
          </a>
          <button type="button" className="press h-11 rounded-[12px] bg-[#f3f1eb] text-sm font-semibold" onClick={onCopy}>
            Copy link
          </button>
        </div>
        {notice ? (
          <p className="mt-3 text-sm text-teal" role="status">
            {notice}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function ShareButton({
  label = "Share",
  className,
  children,
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children ?? label}
      </button>
      <ShareSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
