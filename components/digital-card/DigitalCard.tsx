import Image from "next/image";
import { ContactActions } from "@/components/contact-actions/ContactActions";
import { MulsetuNote } from "@/components/mulsetu/MulsetuNote";
import { SaveContactButton } from "@/components/save-contact/SaveContactButton";
import { TagXNote } from "@/components/tagx/TagXNote";
import { TapToConnect } from "@/components/tap-connect/TapToConnect";
import { profile } from "@/lib/profile";

export function DigitalCard() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");
  const companyLead = profile.company.replace(/ Private Limited$/, "");

  return (
    <div className="enter mx-auto w-full max-w-[430px] px-4 pt-5 pb-8">
      <header className="relative overflow-hidden px-1 pt-1">
        <NetworkMark />
        <Image src={profile.logo} alt="Mulsetu" width={684} height={470} priority className="relative h-auto w-[132px]" />
        <p className="relative mt-3 max-w-[16ch] font-display text-[17px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#2d6814]">
          Your Dedicated Technology Team.
        </p>
        <p className="relative mt-2 text-[10px] tracking-[0.16em] text-muted uppercase">AI • Software • Products • Automation</p>
      </header>

      <article className="mt-4 overflow-hidden rounded-[22px] shadow-[0_16px_36px_rgba(23,54,15,0.18)]">
        <div className="grid min-h-[236px] grid-cols-[38%_1fr]">
          <div className="relative min-h-[236px] min-w-0">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="160px"
              className="object-cover object-[62%_16%]"
            />
          </div>
          <div
            className="relative flex min-w-0 flex-col justify-center px-3 py-4 text-white"
            style={{ background: "linear-gradient(165deg, #2a6416 0%, #1b4a30 46%, #123f44 100%)" }}
          >
            <div className="pointer-events-none absolute -top-8 -right-6 size-24 rounded-full bg-white/10 blur-2xl" />
            <p className="relative w-fit rounded-full bg-white/14 px-2 py-1 text-[9px] font-semibold tracking-[0.12em] uppercase ring-1 ring-white/25">
              {profile.title}
            </p>
            <h1 className="relative mt-2 font-display text-[1.55rem] leading-[0.95] font-semibold tracking-[-0.045em]">
              {first}
              {last ? (
                <>
                  <br />
                  {last}
                </>
              ) : null}
            </h1>
            <p className="relative mt-2 text-[11.5px] leading-4 text-white/88">
              {companyLead}
              <br />
              Private Limited
            </p>
            <p className="relative mt-2 text-[11px] leading-[1.35] text-white/75">
              Building digital experiences
              <br />
              that drive real impact.
            </p>
          </div>
        </div>
      </article>

      <div className="mt-3.5">
        <SaveContactButton />
      </div>
      <div className="mt-3">
        <ContactActions />
      </div>

      <section className="mt-5 px-0.5" aria-labelledby="about-heading">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-teal uppercase">About</p>
        <h2 id="about-heading" className="mt-1 max-w-[22ch] font-display text-[15px] font-semibold tracking-[-0.02em]">
          Building technology that moves businesses forward.
        </h2>
        <p className="mt-1 text-[12.5px] leading-5 text-muted">{profile.bio}</p>
      </section>

      <div className="mt-4 grid gap-2.5">
        <MulsetuNote />
        <TagXNote />
        <TapToConnect />
      </div>

      <footer className="mt-6 text-center">
        <p className="text-[10px] tracking-[0.16em] text-muted uppercase">Digital Identity • Mulsetu</p>
      </footer>
    </div>
  );
}

function NetworkMark() {
  return (
    <svg className="pointer-events-none absolute -top-6 -right-4 h-40 w-40 text-[#3e6700]/25" viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <circle cx="92" cy="68" r="46" stroke="currentColor" strokeWidth="1" />
      <circle cx="92" cy="68" r="30" stroke="currentColor" strokeWidth="1" />
      <circle cx="92" cy="68" r="14" stroke="currentColor" strokeWidth="1" />
      <path d="M46 68h92M92 22v92" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="92" cy="22" r="2" fill="currentColor" />
      <circle cx="138" cy="68" r="2" fill="currentColor" />
      <circle cx="70" cy="40" r="2" fill="currentColor" />
      <circle cx="118" cy="96" r="2" fill="currentColor" />
    </svg>
  );
}
