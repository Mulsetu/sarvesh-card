import Image from "next/image";
import { profile } from "@/lib/profile";

export function MulsetuNote() {
  return (
    <section className="rounded-[20px] border border-black/[0.06] bg-white p-3.5 shadow-[0_8px_20px_rgba(20,22,28,0.04)]" aria-labelledby="mulsetu-heading">
      <div className="flex items-start gap-3">
        <Image src="/branding/mulsetu-mark.png" alt="" width={316} height={231} className="mt-0.5 h-auto w-10 shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 id="mulsetu-heading" className="font-display text-[15px] font-semibold tracking-[-0.02em]">
                Mulsetu
              </h2>
              <p className="text-[12px] leading-4 text-muted">Your Dedicated Technology Team.</p>
            </div>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="press mt-0.5 shrink-0 rounded-full bg-[#e7f6d4] px-2.5 py-1 text-[11px] font-semibold text-[#2f6b12]"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[12.5px] leading-5 text-muted">
        We design, build, and scale intelligent digital solutions that drive growth, efficiency, and innovation.
      </p>
    </section>
  );
}
