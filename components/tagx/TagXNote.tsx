import { profile } from "@/lib/profile";

export function TagXNote() {
  return (
    <section className="rounded-[20px] border border-black/[0.06] bg-white p-3.5 shadow-[0_8px_20px_rgba(20,22,28,0.04)]" aria-labelledby="tagx-heading">
      <div className="flex items-start gap-3">
        <div className="w-14 shrink-0 leading-none">
          <p className="font-display text-[17px] font-bold tracking-[-0.04em]">
            <span className="text-[#3e6700]">TAG</span>
            <span className="text-[#19686c]">X</span>
          </p>
          <p className="mt-0.5 text-[10px] text-muted">by Mulsetu</p>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 id="tagx-heading" className="font-display text-[15px] font-semibold tracking-[-0.02em]">
                TagX
              </h2>
              <p className="text-[12px] leading-4 text-ink">Smart QR Asset Management</p>
            </div>
            <a
              href={profile.tagxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press mt-0.5 shrink-0 rounded-full bg-[#e5f4f4] px-2.5 py-1 text-[11px] font-semibold text-teal"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[12.5px] leading-5 text-muted">Track Assets • Scan • Manage • Audits</p>
    </section>
  );
}
