/**
 * Lucide icon geometry (lucide-react v1, ISC) for next/og images, which can't render the
 * lucide-react components. Each icon becomes an SVG data URL for an <img>.
 */
const nodes = {
  phone: [
    ["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }],
  ],
  mail: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
  ],
  globe: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
    ["path", { d: "M2 12h20" }],
  ],
  bot: [
    ["path", { d: "M12 8V4H8" }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }],
    ["path", { d: "M2 14h2" }],
    ["path", { d: "M20 14h2" }],
    ["path", { d: "M15 13v2" }],
    ["path", { d: "M9 13v2" }],
  ],
  cloud: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]],
  smartphone: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
    ["path", { d: "M12 18h.01" }],
  ],
  blocks: [
    ["path", { d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" }],
    ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1" }],
  ],
  rocket: [
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }],
    ["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" }],
    ["path", { d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" }],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }],
  ],
  qrCode: [
    ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }],
    ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M21 21v.01" }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }],
    ["path", { d: "M3 12h.01" }],
    ["path", { d: "M12 3h.01" }],
    ["path", { d: "M12 16v.01" }],
    ["path", { d: "M16 12h1" }],
    ["path", { d: "M21 12v.01" }],
    ["path", { d: "M12 21v-1" }],
  ],
} satisfies Record<string, [string, Record<string, string>][]>;

export type IconName = keyof typeof nodes;

export function svgDataUrl(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function iconSrc(name: IconName, color: string, strokeWidth = 2) {
  const children = nodes[name]
    .map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ")}/>`)
    .join("");
  return svgDataUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${children}</svg>`,
  );
}
