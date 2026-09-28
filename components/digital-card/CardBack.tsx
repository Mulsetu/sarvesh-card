import Image from "next/image";
import { ArrowUpRight, Blocks, Bot, Cloud, Globe, QrCode, Rocket, RotateCcw, Smartphone } from "lucide-react";
import { displayWebsite } from "@/lib/contact";
import { profile } from "@/lib/profile";

// Service names as listed on mulsetu.com.
const services = [
  { icon: Bot, label: "AI & Automation" },
  { icon: Globe, label: "Website Development" },
  { icon: Cloud, label: "SaaS Development" },
  { icon: Blocks, label: "Custom Software & ERP" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Rocket, label: "MVP Development" },
];

const tagxFeatures = ["QR asset tags", "Maintenance", "Audits"];

export function CardBack({ onFlip }: { onFlip: () => void }) {
  return (
    <div className="card-face card-face-back">
      <svg className="pointer-events-none absolute -right-6 -bottom-3 h-40 w-40 text-lime/10" viewBox="0 0 120 120" fill="currentColor" aria-hidden="true">
        <path d="M100 70c-18 14-44 10-58-12 14 4 30-8 26-26 16 10 28 22 32 38Z" />
        <path d="M86 100c-12 6-28 2-38-12 10 3 18-4 16-14 10 6 16 14 22 26Z" />
      </svg>

      <div className="relative flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-[13px] bg-card shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
          <Image src="/branding/mulsetu-mark.png" alt="" width={316} height={231} className="h-auto w-[30px]" />
        </span>
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold tracking-[0.32em]">MULSETU</span>
          <span className="mt-0.5 block text-[9.5px] tracking-[0.14em] text-white/55 uppercase">People · Technology · Products · Impact</span>
        </span>
      </div>

      <h2 className="relative mt-4 font-serif text-[1.7rem] leading-[1.05] font-semibold text-balance">Your Dedicated Technology Team.</h2>

      {/* Box 1: services */}
      <section className="relative mt-4 rounded-[18px] bg-white/[0.06] p-3.5 ring-1 ring-white/10" aria-labelledby="services-heading">
        <div className="flex items-center justify-between gap-2">
          <h3 id="services-heading" className="eyebrow text-[10px] text-lime">
            Our Services
          </h3>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 text-[11px] font-medium text-white/60 hover:text-white"
          >
            {displayWebsite(profile.website)}
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5">
          {services.map((item) => (
            <li key={item.label} className="flex min-w-0 items-center gap-2 text-[12px] leading-tight font-medium text-white/90">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-lime/12 text-lime ring-1 ring-lime/20">
                <item.icon className="size-3.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Box 2: featured product */}
      <a
        href={profile.tagxUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="press relative mt-3 block rounded-[18px] bg-card p-3.5 text-ink shadow-[0_12px_26px_-10px_rgba(0,0,0,0.45)]"
        aria-label="TagX by Mulsetu — Smart QR Asset Management"
      >
        <span className="flex items-start gap-3">
          <span className="min-w-0 flex-1">
            <span className="eyebrow block text-[10px] text-forest">Our Product</span>
            <span className="mt-1 flex items-baseline gap-1.5">
              <span className="text-[22px] leading-none font-extrabold tracking-[-0.03em]">
                TAG<span className="text-teal">X</span>
              </span>
              <span className="text-[11px] text-muted">by Mulsetu</span>
            </span>
            <span className="mt-1 block text-[12.5px] font-semibold text-pine">Track. Scan. Manage.</span>
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-[13px] text-white shadow-[0_6px_14px_-4px_rgba(25,104,108,0.6)]" style={{ background: "var(--mulsetu-brand)" }}>
            <QrCode className="size-6" aria-hidden="true" />
          </span>
        </span>
        <span className="mt-1.5 block text-[12px] leading-snug text-muted">Smart QR asset management for operations, facilities & IT teams.</span>
        <span className="mt-2.5 flex items-center justify-between gap-2">
          <span className="flex min-w-0 flex-wrap gap-1">
            {tagxFeatures.map((feature) => (
              <span key={feature} className="rounded-full bg-forest/[0.07] px-2 py-0.5 text-[10.5px] font-medium text-forest ring-1 ring-forest/10">
                {feature}
              </span>
            ))}
          </span>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-white">
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </span>
        </span>
      </a>

      <div className="min-h-5 flex-1" aria-hidden="true" />
      <button
        type="button"
        onClick={onFlip}
        className="press relative mx-auto flex h-9 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 text-[12.5px] font-semibold"
      >
        <RotateCcw className="size-3.5 text-lime" aria-hidden="true" />
        Flip back
      </button>
    </div>
  );
}
