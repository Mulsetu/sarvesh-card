import { Nfc, QrCode as QrIcon, Share2 } from "lucide-react";
import Link from "next/link";
import { QrCode } from "@/components/qr/QrCode";
import { ShareButton } from "@/components/share/ShareButton";
import { cardLabel } from "@/lib/profile";

export function ConnectSection() {
  return (
    <section className="surface-dark rounded-[24px] p-[18px]" aria-labelledby="connect-heading">
      <div className="relative flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-lime ring-1 ring-white/10">
              <Nfc className="size-[18px]" aria-hidden="true" />
            </span>
            <h2 id="connect-heading" className="font-serif text-[1.45rem] leading-none font-semibold">
              Tap to Connect
            </h2>
          </div>
          <p className="mt-3 text-[12.5px] leading-[1.5] text-white/75">Tap the NFC tag on the back of my phone, or scan the QR code.</p>
          <p className="mt-2 truncate text-[12px] font-medium tracking-[0.02em] text-lime">{cardLabel}</p>
        </div>
        <Link href="/qr" className="connect-qr shrink-0 rounded-[14px] bg-white p-1.5 shadow-[0_10px_22px_rgba(0,0,0,0.25)]" aria-label="Open the large QR code">
          <QrCode size={84} framed={false} />
        </Link>
      </div>
      <div className="relative mt-4 grid grid-cols-2 gap-2.5">
        <Link href="/qr" className="press flex h-11 items-center justify-center gap-2 rounded-full bg-white/10 text-[13.5px] font-semibold ring-1 ring-white/15 hover:bg-white/15">
          <QrIcon className="size-4" aria-hidden="true" />
          Show QR
        </Link>
        <ShareButton className="press flex h-11 items-center justify-center gap-2 rounded-full bg-card text-[13.5px] font-semibold text-forest">
          <Share2 className="size-4" aria-hidden="true" />
          Share Card
        </ShareButton>
      </div>
    </section>
  );
}
