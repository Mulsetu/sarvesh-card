import type { Metadata } from "next";
import Link from "next/link";
import { QrCode } from "@/components/qr/QrCode";
import { ShareButton } from "@/components/share/ShareButton";
import { cardLabel, profile, shareText } from "@/lib/profile";
import { CopyLink } from "@/components/share/CopyLink";

export const metadata: Metadata = {
  title: "Scan to connect — Sarvesh Gadkari",
  description: shareText,
  robots: { index: false, follow: true },
};

export default function QrPage() {
  return (
    <main id="content" className="mx-auto flex min-h-dvh w-full max-w-[400px] flex-col items-center bg-white px-6 py-10 text-center">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase">Mulsetu</p>
      <h1 className="mt-3 font-display text-[1.8rem] font-semibold tracking-[-0.03em]">Scan to connect</h1>
      <p className="mt-2 text-sm text-muted">
        {profile.name}
        <br />
        {profile.title}
      </p>
      <div className="mt-8">
        <QrCode size={280} />
      </div>
      <p className="mt-4 text-sm">{cardLabel}</p>
      <div className="mt-6 grid w-full gap-2">
        <ShareButton className="press h-11 rounded-[12px] bg-forest text-sm font-semibold text-white" label="Share my card" />
        <CopyLink />
        <Link href="/" className="press flex h-11 items-center justify-center rounded-[14px] border border-ink/10 text-sm font-semibold">
          Open digital card
        </Link>
      </div>
    </main>
  );
}
