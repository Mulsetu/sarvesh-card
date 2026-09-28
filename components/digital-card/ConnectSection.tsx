import { Nfc, QrCode as QrIcon, Share2 } from "lucide-react";
import Link from "next/link";
import { QrCode } from "@/components/qr/QrCode";
import { ShareButton } from "@/components/share/ShareButton";
import { cardLabel } from "@/lib/profile";

export function ConnectSection() {
  return (
    <section
      className="rounded-[20px] px-3.5 py-3.5 text-white"
      style={{ background: "linear-gradient(160deg, #14360f 0%, #12382e 58%, #0e3a40 100%)" }}
      aria-labelledby="connect-heading"
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="grid size-9 place-items-center rounded-full bg-white/10 text-[#b7e38a]">
            <Nfc className="size-4" aria-hidden="true" />
          </div>
          <h2 id="connect-heading" className="mt-2 text-[15px] font-semibold">Tap to Connect</h2>
          <p className="mt-1 text-[11px] leading-4 text-white/75">Tap the NFC tag on the back of my phone, or scan the QR code.</p>
        </div>
        <div className="shrink-0 text-center">
          <Link href="/qr" className="inline-flex rounded-[10px] bg-white p-1.5" aria-label="Open the large QR code">
            <QrCode size={86} framed={false} />
          </Link>
        </div>
      </div>
      <p className="mt-1.5 text-right text-[11px] text-white/80">{cardLabel}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Link href="/qr" className="press flex h-10 items-center justify-center gap-1.5 rounded-full bg-white/12 text-[13px] font-semibold ring-1 ring-white/15">
          <QrIcon className="size-4" aria-hidden="true" />
          Show QR
        </Link>
        <ShareButton className="press flex h-10 items-center justify-center gap-1.5 rounded-full bg-white/12 text-[13px] font-semibold text-white ring-1 ring-white/15">
          <Share2 className="size-4" aria-hidden="true" />
          Share Card
        </ShareButton>
      </div>
    </section>
  );
}
