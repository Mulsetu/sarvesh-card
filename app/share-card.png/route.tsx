import { ImageResponse } from "next/og";
import { c, FrontCard, loadCardArt } from "@/lib/card-art";
import { cardLabel } from "@/lib/profile";

// Rendered once at build time; attached as a photo when visitors tap "Share Card".
export const dynamic = "force-static";

const size = { width: 1080, height: 1350 };

export async function GET() {
  const art = await loadCardArt();

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
          backgroundImage: c.pageGlow,
        }}
      >
        <FrontCard photo={art.photo} logo={art.logo} s={2.45} />
        <div style={{ marginTop: 44, display: "flex", fontSize: 34, fontWeight: 700, color: c.forest }}>{cardLabel}</div>
      </div>
    ),
    { ...size, fonts: art.fonts },
  );
}
