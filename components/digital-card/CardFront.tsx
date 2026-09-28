import Image from "next/image";
import { Globe, Mail, Phone, RotateCcw } from "lucide-react";
import { displayPhone, displayWebsite, phoneHref } from "@/lib/contact";
import { profile } from "@/lib/profile";

export function CardFront({ onFlip }: { onFlip: () => void }) {
  const call = phoneHref(profile.phone);

  return (
    <div className="card-face card-face-front">
      <svg className="pointer-events-none absolute -right-3 -bottom-2 h-28 w-28 text-[#7dae45]/25" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M70 50c-12 8-28 6-36-6 8 2 18-6 16-16 10 6 18 14 20 22Z" fill="currentColor" />
        <path d="M58 68c-8 4-18 2-24-6 6 2 12-2 12-8 6 4 10 8 12 14Z" fill="currentColor" />
      </svg>

      <Image src="/branding/mulsetu-logo-on-dark.png" alt="Mulsetu" width={656} height={443} priority className="relative h-auto w-[84px]" />

      <div className="face-gap" aria-hidden="true" />
      <div
        className="portrait relative rounded-full p-[2px] shadow-[0_14px_30px_-8px_rgba(25,104,108,0.35)]"
        style={{ background: "linear-gradient(135deg, #3e6700, #19686c)" }}
      >
        <div className="relative size-full overflow-hidden rounded-full bg-card p-[4px]">
          <div className="relative size-full overflow-hidden rounded-full">
            {/* Oversized frame zooms in on the face without transforms (Safari clips those unreliably). */}
            <div className="absolute" style={{ left: "-59%", top: "-9%", width: "190%", height: "190%" }}>
              <Image src={profile.photo} alt={profile.name} fill priority sizes="290px" className="object-cover object-[57%_0%]" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="card-name relative mt-5">{profile.name}</h1>
      <p className="eyebrow relative mt-2.5 text-forest">{profile.title}</p>
      <p className="relative mt-1 text-[13px] text-muted">{profile.company}</p>

      <div className="face-gap" aria-hidden="true" />
      <div className="brand-rule relative max-w-[240px]" aria-hidden="true">
        <span />
      </div>

      <div className="card-details relative mt-4 grid w-fit max-w-full gap-2.5 text-left">
        {call ? (
          <a href={call}>
            <Phone aria-hidden="true" />
            <span className="truncate tabular-nums">{displayPhone(profile.phone)}</span>
          </a>
        ) : null}
        {profile.email ? (
          <a href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            <span className="truncate">{profile.email}</span>
          </a>
        ) : null}
        {profile.website ? (
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            <Globe aria-hidden="true" />
            <span className="truncate">{displayWebsite(profile.website)}</span>
          </a>
        ) : null}
      </div>

      <div className="face-gap" aria-hidden="true" />
      <button
        type="button"
        onClick={onFlip}
        className="press relative inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-forest/15 bg-white/80 px-4 text-[12.5px] font-semibold text-ink/80 shadow-[0_1px_2px_rgba(22,24,29,0.05)]"
      >
        <RotateCcw className="size-3.5 text-forest" aria-hidden="true" />
        Flip card
      </button>
    </div>
  );
}
