import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { profile } from "@/lib/profile";

export function CardFront({ onFlip }: { onFlip: () => void }) {
  return (
    <div className="card-face card-face-front relative flex flex-col items-center text-center">
      <svg className="pointer-events-none absolute right-0 bottom-2 h-24 w-24 text-[#7dae45]/35" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M70 50c-12 8-28 6-36-6 8 2 18-6 16-16 10 6 18 14 20 22Z" fill="currentColor" />
        <path d="M58 68c-8 4-18 2-24-6 6 2 12-2 12-8 6 4 10 8 12 14Z" fill="currentColor" />
      </svg>
      <Image src={profile.logo} alt="Mulsetu" width={684} height={470} priority className="relative h-auto w-[92px]" />
      <div className="portrait relative mt-3">
        <div className="absolute inset-0 rounded-full p-[2px]" style={{ background: "linear-gradient(135deg, #3e6700, #19686c)" }}>
          <div className="relative size-full overflow-hidden rounded-full bg-white p-[2px]">
            <div className="relative size-full overflow-hidden rounded-full">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="118px" className="object-cover object-[62%_18%]" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="card-name relative mt-3">{profile.name}</h1>
      <p className="mt-1 text-[14px] font-semibold text-[#2f7a18]">{profile.title}</p>
      <p className="mt-0.5 text-[12px] text-muted">{profile.company}</p>
      <p className="mt-2 flex w-full items-center justify-center gap-2 text-[10px] tracking-[0.12em] text-muted uppercase">
        <span className="h-px w-6 bg-ink/15" />
        Technology • AI • Products • Automation
        <span className="h-px w-6 bg-ink/15" />
      </p>
      <button
        type="button"
        onClick={onFlip}
        className="press relative mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 text-[13px] font-semibold"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Flip card
      </button>
    </div>
  );
}
