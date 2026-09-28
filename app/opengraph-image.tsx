import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { displayPhone, displayWebsite } from "@/lib/contact";
import { cardLabel, profile } from "@/lib/profile";

export const alt = "Digital visiting card of Sarvesh Gadkari, Founder & CEO of Mulsetu — front and back";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const c = {
  paper: "#f3f1ea",
  card: "#fbfaf5",
  ink: "#16181d",
  muted: "#5c635b",
  forest: "#3e6700",
  pine: "#1d6848",
  teal: "#19686c",
  lime: "#c6ef86",
};

const services = ["AI & Automation", "Website Development", "SaaS Development", "Custom Software & ERP", "Mobile Apps", "MVP Development"];

// Printable ASCII plus the few symbols used below, so Google Fonts returns one small subset file.
const glyphs = `${Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join("")}·—•`;

/** Fetches a static TTF from Google Fonts; returns null (default font) if offline. */
async function googleFont(family: string, weight: number) {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(glyphs)}`;
    const css = await (await fetch(cssUrl)).text();
    const fontUrl = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!fontUrl) return null;
    const response = await fetch(fontUrl);
    return response.ok ? await response.arrayBuffer() : null;
  } catch {
    return null;
  }
}

const toDataUrl = (bytes: Buffer, type: string) => `data:${type};base64,${bytes.toString("base64")}`;

export default async function OpenGraphImage() {
  const [photo, logo, mark, serif, sans, sansBold] = await Promise.all([
    readFile(join(process.cwd(), "public/profile/sarvesh-gadkari.jpg")),
    readFile(join(process.cwd(), "public/branding/mulsetu-logo-on-dark.png")),
    readFile(join(process.cwd(), "public/branding/mulsetu-mark.png")),
    googleFont("Cormorant Garamond", 600),
    googleFont("Geist", 500),
    googleFont("Geist", 700),
  ]);

  const fonts: { name: string; data: ArrayBuffer; weight: 500 | 600 | 700; style: "normal" }[] = [];
  if (serif) fonts.push({ name: "Cormorant", data: serif, weight: 600, style: "normal" });
  if (sans) fonts.push({ name: "Geist", data: sans, weight: 500, style: "normal" });
  if (sansBold) fonts.push({ name: "Geist", data: sansBold, weight: 700, style: "normal" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geist",
          color: c.ink,
          backgroundColor: c.paper,
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(62,103,0,0.14), transparent 45%), radial-gradient(circle at 92% 100%, rgba(25,104,108,0.14), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", gap: 34 }}>
          <FrontCard photo={toDataUrl(photo, "image/jpeg")} logo={toDataUrl(logo, "image/png")} />
          <BackCard mark={toDataUrl(mark, "image/png")} />
        </div>

        <div style={{ marginTop: 20, display: "flex", fontFamily: "Cormorant", fontWeight: 600, fontSize: 38, lineHeight: 1 }}>
          {`${profile.name} · ${profile.title}, Mulsetu`}
        </div>
        <div style={{ marginTop: 10, display: "flex", fontSize: 20, color: c.muted }}>
          Tap to open my digital visiting card &amp; save my contact ·
          <span style={{ marginLeft: 6, color: c.forest, fontWeight: 700 }}>{cardLabel}</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

const cardBox = {
  position: "relative" as const,
  width: 340,
  height: 452,
  display: "flex",
  flexDirection: "column" as const,
  borderRadius: 26,
  overflow: "hidden" as const,
};

function Frame({ color }: { color: string }) {
  return <div style={{ position: "absolute", top: 7, left: 7, right: 7, bottom: 7, borderRadius: 20, border: `1px solid ${color}` }} />;
}

function FrontCard({ photo, logo }: { photo: string; logo: string }) {
  // Same face crop as the live card: 1500×1000 photo, zoomed ~1.9× inside a 120px circle.
  return (
    <div
      style={{
        ...cardBox,
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 22px",
        backgroundColor: c.card,
        backgroundImage: "radial-gradient(circle at 0% 0%, rgba(186,220,140,0.55), transparent 42%)",
        border: "1px solid rgba(62,103,0,0.14)",
        boxShadow: "0 24px 48px -18px rgba(22,60,40,0.35)",
      }}
    >
      <Frame color="rgba(62,103,0,0.16)" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" width={66} height={44} />
      <div
        style={{
          marginTop: 12,
          width: 130,
          height: 130,
          display: "flex",
          padding: 2,
          borderRadius: 65,
          backgroundImage: `linear-gradient(135deg, ${c.forest}, ${c.teal})`,
        }}
      >
        <div style={{ display: "flex", width: 126, height: 126, padding: 3, borderRadius: 63, backgroundColor: c.card }}>
          <div style={{ position: "relative", display: "flex", width: 120, height: 120, borderRadius: 60, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="" width={342} height={228} style={{ position: "absolute", left: -136, top: -11 }} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 14, display: "flex", fontFamily: "Cormorant", fontWeight: 600, fontSize: 36, lineHeight: 1 }}>{profile.name}</div>
      <div style={{ marginTop: 8, display: "flex", fontSize: 12, fontWeight: 700, letterSpacing: 3, color: c.forest }}>{profile.title.toUpperCase()}</div>
      <div style={{ marginTop: 4, display: "flex", fontSize: 13, color: c.muted }}>{profile.company}</div>
      <div style={{ marginTop: 13, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 70, height: 1, backgroundImage: "linear-gradient(90deg, transparent, rgba(62,103,0,0.6))" }} />
        <div style={{ width: 7, height: 7, borderRadius: 4, backgroundImage: `linear-gradient(90deg, ${c.forest} 50%, ${c.teal} 50%)` }} />
        <div style={{ width: 70, height: 1, backgroundImage: "linear-gradient(90deg, rgba(25,104,108,0.6), transparent)" }} />
      </div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        {[displayPhone(profile.phone), profile.email, displayWebsite(profile.website)].map((line) => (
          <div key={line} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, color: "rgba(22,24,29,0.82)" }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.teal }} />
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function BackCard({ mark }: { mark: string }) {
  return (
    <div
      style={{
        ...cardBox,
        padding: "24px 22px",
        color: "white",
        backgroundImage: "linear-gradient(155deg, #23501a 0%, #163e30 52%, #0e3a40 100%)",
        boxShadow: "0 24px 48px -18px rgba(14,58,64,0.55)",
      }}
    >
      <Frame color="rgba(198,239,134,0.18)" />
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 11, backgroundColor: c.card }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} alt="" width={28} height={20} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 14, fontWeight: 700, letterSpacing: 4.5 }}>MULSETU</div>
          <div style={{ marginTop: 2, display: "flex", fontSize: 8.5, letterSpacing: 1.2, color: "rgba(255,255,255,0.55)" }}>
            PEOPLE · TECHNOLOGY · PRODUCTS · IMPACT
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: "flex", fontFamily: "Cormorant", fontWeight: 600, fontSize: 28, lineHeight: 1.05 }}>
        Your Dedicated Technology Team.
      </div>

      <div
        style={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          padding: 12,
          borderRadius: 16,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ display: "flex", fontSize: 9.5, fontWeight: 700, letterSpacing: 2.2, color: c.lime }}>OUR SERVICES</div>
        <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", rowGap: 7 }}>
          {services.map((service) => (
            <div key={service} style={{ width: "50%", display: "flex", alignItems: "center", gap: 7, paddingRight: 6, fontSize: 11.5, color: "rgba(255,255,255,0.9)" }}>
              <div style={{ width: 7, height: 7, flexShrink: 0, borderRadius: 4, backgroundColor: c.lime }} />
              {service}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", padding: 12, borderRadius: 16, backgroundColor: c.card, color: c.ink }}>
        <div style={{ display: "flex", fontSize: 9.5, fontWeight: 700, letterSpacing: 2.2, color: c.forest }}>OUR PRODUCT</div>
        <div style={{ marginTop: 4, display: "flex", alignItems: "flex-end", gap: 7 }}>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 700, lineHeight: 1, letterSpacing: -0.5 }}>
            <span>TAG</span>
            <span style={{ marginLeft: -1, color: c.teal }}>X</span>
          </div>
          <div style={{ display: "flex", fontSize: 11, color: c.muted }}>by Mulsetu</div>
        </div>
        <div style={{ marginTop: 4, display: "flex", fontSize: 12, fontWeight: 700, color: c.pine }}>Track. Scan. Manage.</div>
        <div style={{ marginTop: 3, display: "flex", fontSize: 11, color: c.muted }}>Smart QR asset management for teams.</div>
      </div>
    </div>
  );
}
