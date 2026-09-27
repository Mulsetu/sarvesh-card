import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/lib/profile";

export const alt = "Sarvesh Gadkari — Founder & CEO | Mulsetu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile/sarvesh-gadkari.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f4f1ea", color: "#14161c" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={520} height={630} style={{ objectFit: "cover", objectPosition: "64% 18%" }} />
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", padding: "48px" }}>
          <div style={{ fontSize: 18, letterSpacing: 3, color: "#19686c" }}>MULSETU</div>
          <div style={{ marginTop: 18, fontSize: 54, fontWeight: 600, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ marginTop: 14, fontSize: 26, color: "#19686c" }}>{profile.title}</div>
          <div style={{ marginTop: 12, fontSize: 20, color: "#5c6158" }}>{profile.company}</div>
        </div>
      </div>
    ),
    size,
  );
}
