import Image from "next/image";
import { QrCode, RotateCcw, ScanLine, ShieldCheck, Tags } from "lucide-react";
import { profile } from "@/lib/profile";

const points = [
  { icon: Tags, label: "Track assets" },
  { icon: ScanLine, label: "Scan" },
  { icon: ShieldCheck, label: "Audits" },
];

export function CardBack({ onFlip }: { onFlip: () => void }) {
  return (
    <div className="card-face card-face-back relative flex flex-col">
      <svg className="pointer-events-none absolute -right-4 bottom-0 h-36 w-36 text-[#8fd06a]/20" viewBox="0 0 120 120" fill="currentColor" aria-hidden="true">
        <path d="M100 70c-18 14-44 10-58-12 14 4 30-8 26-26 16 10 28 22 32 38Z" />
        <path d="M86 100c-12 6-28 2-38-12 10 3 18-4 16-14 10 6 16 14 22 26Z" />
      </svg>
      <div className="relative">
        <div>
          <Image src="/branding/mulsetu-logo-on-dark.png" alt="Mulsetu" width={656} height={443} className="h-auto w-[78px]" />
          <p className="mt-1 text-[9px] tracking-[0.12em] text-white/55 uppercase">People · Technology · Products · Impact</p>
        </div>
        <h2 className="mt-3 font-display text-[1.35rem] leading-[1.05] font-semibold tracking-[-0.03em]">
          Your Dedicated
          <br />
          Technology Team.
        </h2>
        <p className="mt-2 text-[12px] leading-4 text-white/78">
          We design, build and scale intelligent digital solutions that drive growth, efficiency, and innovation.
        </p>
        <p className="mt-2 text-[10px] tracking-[0.1em] text-white/60 uppercase">AI • Software • Products • Automation</p>
        <a
          href={profile.tagxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-3 rounded-[14px] bg-black/20 p-2.5 ring-1 ring-white/10"
        >
          <span className="min-w-0 flex-1">
            <span className="text-[9px] tracking-[0.12em] text-[#c6ef86] uppercase">Featured product</span>
            <span className="mt-0.5 block font-display text-[18px] font-bold tracking-[-0.04em]">
              TAG<span className="text-[#9ee0dc]">X</span>
            </span>
            <span className="block text-[10px] text-white/65">by Mulsetu</span>
            <span className="mt-1 block text-[12px] font-medium">Smart QR Asset Management</span>
            <span className="block text-[10px] text-white/65">Track • Scan • Manage • Audits</span>
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-[12px] bg-[#102818] text-[#b7e38a]">
            <QrCode className="size-6" aria-hidden="true" />
          </span>
        </a>
        <ul className="mt-3 grid grid-cols-3 gap-1 text-center">
          {points.map((item) => (
            <li key={item.label} className="text-[10px] leading-3 text-white/75">
              <item.icon className="mx-auto mb-1 size-4 text-[#c6ef86]" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onFlip}
          className="press mx-auto mt-3 flex h-10 items-center gap-2 rounded-full border border-white/25 bg-black/15 px-4 text-[13px] font-semibold"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Flip back
        </button>
      </div>
    </div>
  );
}
