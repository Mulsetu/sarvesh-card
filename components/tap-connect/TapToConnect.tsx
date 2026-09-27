import { Nfc } from "lucide-react";
import Link from "next/link";
import { QrCode } from "@/components/qr/QrCode";
import { cardLabel } from "@/lib/profile";

export function TapToConnect() {
  return (
    <section
      className="relative overflow-hidden rounded-[22px] px-4 py-4 text-white"
      style={{ background: "linear-gradient(145deg, #17360f 0%, #1a4634 52%, #0f3c42 100%)" }}
      aria-label="Tap to connect"
    >
      <svg className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-44 text-[#9be05a]/25" viewBox="0 0 180 90" fill="none" aria-hidden="true">
        <path d="M10 70c30-40 70-48 120-20" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        <path d="M28 82c22-24 58-28 96-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <div className="relative grid grid-cols-[1fr_auto] items-center gap-3">
        <div className="min-w-0">
          <div className="nfc-ring grid size-11 place-items-center rounded-full bg-white/10 text-[#c6ef86]">
            <Nfc className="size-5" aria-hidden="true" />
          </div>
          <h2 className="mt-3 font-display text-[17px] font-semibold tracking-[-0.02em]">Tap to Connect</h2>
          <p className="mt-1 text-[12px] leading-[1.35] text-white/75">
            Bring phones close if NFC sharing is supported. Or scan the QR.
          </p>
        </div>
        <div className="text-center">
          <p className="mb-1.5 text-[10px] tracking-[0.18em] text-white/55">OR</p>
          <Link href="/qr" className="inline-flex rounded-[12px] bg-white p-1.5" aria-label="Open the large QR code">
            <QrCode size={92} framed={false} />
          </Link>
          <p className="mt-1.5 text-[10px] text-white/80">{cardLabel}</p>
        </div>
      </div>
    </section>
  );
}
