/**
 * Static renderings of the card faces for next/og (Satori): only flexbox and a CSS
 * subset, so the live components can't be reused. Used by the link-preview image
 * and the shareable card photo.
 *
 * Cards take a scale factor `s` and multiply every length by it, because Satori
 * mis-clips images inside elements scaled or rotated with `transform`.
 */
import type { CSSProperties } from "react";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { displayPhone, displayWebsite } from "@/lib/contact";
import { profile } from "@/lib/profile";

export const c = {
  paper: "#f3f1ea",
  card: "#fbfaf5",
  ink: "#16181d",
  muted: "#5c635b",
  forest: "#3e6700",
  pine: "#1d6848",
  teal: "#19686c",
  lime: "#c6ef86",
  brand: "linear-gradient(100deg, #3e6700 0%, #1d6848 58%, #19686c 100%)",
  pageGlow:
    "radial-gradient(circle at 12% 0%, rgba(62,103,0,0.14), transparent 45%), radial-gradient(circle at 92% 100%, rgba(25,104,108,0.14), transparent 45%)",
};

/** Card size at s = 1. */
export const cardSize = { width: 340, height: 452 };

const services = ["AI & Automation", "Website Development", "SaaS Development", "Custom Software & ERP", "Mobile Apps", "MVP Development"];

// Printable ASCII plus the few symbols used, so Google Fonts returns one small subset file.
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

export async function loadCardArt() {
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

  return {
    fonts,
    photo: toDataUrl(photo, "image/jpeg"),
    logo: toDataUrl(logo, "image/png"),
    mark: toDataUrl(mark, "image/png"),
  };
}

function cardBox(s: number): CSSProperties {
  return {
    position: "relative",
    width: cardSize.width * s,
    height: cardSize.height * s,
    display: "flex",
    flexDirection: "column",
    borderRadius: 26 * s,
    overflow: "hidden",
  };
}

function Frame({ s, color }: { s: number; color: string }) {
  const inset = 7 * s;
  return (
    <div style={{ position: "absolute", top: inset, left: inset, right: inset, bottom: inset, borderRadius: 20 * s, border: `${Math.max(1, s)}px solid ${color}` }} />
  );
}

type CardProps = { s?: number; style?: CSSProperties };

export function FrontCard({ photo, logo, s = 1, style }: CardProps & { photo: string; logo: string }) {
  // Same face crop as the live card: 1500×1000 photo, zoomed ~1.9× inside a 120px circle.
  return (
    <div
      style={{
        ...cardBox(s),
        alignItems: "center",
        justifyContent: "center",
        padding: `${20 * s}px ${22 * s}px`,
        backgroundColor: c.card,
        backgroundImage: "radial-gradient(circle at 0% 0%, rgba(186,220,140,0.55), transparent 42%)",
        border: `${Math.max(1, s)}px solid rgba(62,103,0,0.14)`,
        boxShadow: `0 ${24 * s}px ${48 * s}px -${18 * s}px rgba(22,60,40,0.35)`,
        ...style,
      }}
    >
      <Frame s={s} color="rgba(62,103,0,0.16)" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" width={66 * s} height={44 * s} />
      <div
        style={{
          marginTop: 12 * s,
          width: 130 * s,
          height: 130 * s,
          display: "flex",
          padding: 2 * s,
          borderRadius: 65 * s,
          backgroundImage: `linear-gradient(135deg, ${c.forest}, ${c.teal})`,
        }}
      >
        <div style={{ display: "flex", width: 126 * s, height: 126 * s, padding: 3 * s, borderRadius: 63 * s, backgroundColor: c.card }}>
          <div style={{ position: "relative", display: "flex", width: 120 * s, height: 120 * s, borderRadius: 60 * s, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="" width={342 * s} height={228 * s} style={{ position: "absolute", left: -136 * s, top: -11 * s }} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 14 * s, display: "flex", fontFamily: "Cormorant", fontWeight: 600, fontSize: 36 * s, lineHeight: 1 }}>{profile.name}</div>
      <div style={{ marginTop: 8 * s, display: "flex", fontSize: 12 * s, fontWeight: 700, letterSpacing: 3 * s, color: c.forest }}>{profile.title.toUpperCase()}</div>
      <div style={{ marginTop: 4 * s, display: "flex", fontSize: 13 * s, color: c.muted }}>{profile.company}</div>
      <BrandRule s={s} style={{ marginTop: 13 * s }} />
      <div style={{ marginTop: 12 * s, display: "flex", flexDirection: "column", gap: 6 * s }}>
        {[displayPhone(profile.phone), profile.email, displayWebsite(profile.website)].map((line) => (
          <div key={line} style={{ display: "flex", alignItems: "center", gap: 9 * s, fontSize: 14 * s, color: "rgba(22,24,29,0.82)" }}>
            <div style={{ width: 6 * s, height: 6 * s, borderRadius: 3 * s, backgroundColor: c.teal }} />
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BackCard({ mark, s = 1, style }: CardProps & { mark: string }) {
  return (
    <div
      style={{
        ...cardBox(s),
        padding: `${24 * s}px ${22 * s}px`,
        color: "white",
        backgroundImage: "linear-gradient(155deg, #23501a 0%, #163e30 52%, #0e3a40 100%)",
        boxShadow: `0 ${24 * s}px ${48 * s}px -${18 * s}px rgba(14,58,64,0.55)`,
        ...style,
      }}
    >
      <Frame s={s} color="rgba(198,239,134,0.18)" />
      <div style={{ display: "flex", alignItems: "center", gap: 11 * s }}>
        <div
          style={{ width: 40 * s, height: 40 * s, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 11 * s, backgroundColor: c.card }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} alt="" width={28 * s} height={20 * s} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 14 * s, fontWeight: 700, letterSpacing: 4.5 * s }}>MULSETU</div>
          <div style={{ marginTop: 2 * s, display: "flex", fontSize: 8.5 * s, letterSpacing: 1.2 * s, color: "rgba(255,255,255,0.55)" }}>
            PEOPLE · TECHNOLOGY · PRODUCTS · IMPACT
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14 * s, display: "flex", fontFamily: "Cormorant", fontWeight: 600, fontSize: 28 * s, lineHeight: 1.05 }}>
        Your Dedicated Technology Team.
      </div>

      <div
        style={{
          marginTop: 12 * s,
          display: "flex",
          flexDirection: "column",
          padding: 12 * s,
          borderRadius: 16 * s,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: `${Math.max(1, s)}px solid rgba(255,255,255,0.1)`,
        }}
      >
        <div style={{ display: "flex", fontSize: 9.5 * s, fontWeight: 700, letterSpacing: 2.2 * s, color: c.lime }}>OUR SERVICES</div>
        <div style={{ marginTop: 8 * s, display: "flex", flexWrap: "wrap", rowGap: 7 * s }}>
          {services.map((service) => (
            <div
              key={service}
              style={{ width: "50%", display: "flex", alignItems: "center", gap: 7 * s, paddingRight: 6 * s, fontSize: 11.5 * s, color: "rgba(255,255,255,0.9)" }}
            >
              <div style={{ width: 7 * s, height: 7 * s, flexShrink: 0, borderRadius: 4 * s, backgroundColor: c.lime }} />
              {service}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 10 * s, display: "flex", flexDirection: "column", padding: 12 * s, borderRadius: 16 * s, backgroundColor: c.card, color: c.ink }}>
        <div style={{ display: "flex", fontSize: 9.5 * s, fontWeight: 700, letterSpacing: 2.2 * s, color: c.forest }}>OUR PRODUCT</div>
        <div style={{ marginTop: 4 * s, display: "flex", alignItems: "flex-end", gap: 7 * s }}>
          <div style={{ display: "flex", fontSize: 22 * s, fontWeight: 700, lineHeight: 1, letterSpacing: -0.5 * s }}>
            <span>TAG</span>
            <span style={{ marginLeft: -1 * s, color: c.teal }}>X</span>
          </div>
          <div style={{ display: "flex", fontSize: 11 * s, color: c.muted }}>by Mulsetu</div>
        </div>
        <div style={{ marginTop: 4 * s, display: "flex", fontSize: 12 * s, fontWeight: 700, color: c.pine }}>Track. Scan. Manage.</div>
        <div style={{ marginTop: 3 * s, display: "flex", fontSize: 11 * s, color: c.muted }}>Smart QR asset management for teams.</div>
      </div>
    </div>
  );
}

export function BrandRule({ s = 1, width = 70, style }: CardProps & { width?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 * s, ...style }}>
      <div style={{ width: width * s, height: Math.max(1, s), backgroundImage: "linear-gradient(90deg, transparent, rgba(62,103,0,0.6))" }} />
      <div style={{ width: 7 * s, height: 7 * s, borderRadius: 4 * s, backgroundImage: `linear-gradient(90deg, ${c.forest} 50%, ${c.teal} 50%)` }} />
      <div style={{ width: width * s, height: Math.max(1, s), backgroundImage: "linear-gradient(90deg, rgba(25,104,108,0.6), transparent)" }} />
    </div>
  );
}
