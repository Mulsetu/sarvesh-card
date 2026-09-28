export const profile = {
  name: "Sarvesh Gadkari",
  title: "Founder & CEO",
  company: "Mulsetu Agrotech Private Limited",
  email: "founder@mulsetu.com",
  phone: "+918485860323",
  whatsapp: "+918485860323",
  linkedin: "https://www.linkedin.com/in/sarvesh-gadkari-071483259/",
  website: "https://mulsetu.com",
  profileUrl: "https://sarvesh.mulsetu.com/",
  bio: "Founder & CEO of Mulsetu, building digital products, AI systems and business software for growing businesses.",
  photo: "/profile/sarvesh-gadkari.jpg",
  logo: "/branding/mulsetu-logo.png",
  tagxUrl: "https://tagx.mulsetu.com/",
} as const;

export const cardLabel = "sarvesh.mulsetu.com";

export const shareTitle = "Sarvesh Gadkari — Founder & CEO, Mulsetu";
/** Page description used by search engines and link previews. */
export const shareText = "Digital visiting card of Sarvesh Gadkari, Founder & CEO of Mulsetu. Save my contact, call, WhatsApp or email me directly.";

/** The personal note sent along with the link when someone shares the card (the link is appended by the share target). */
export const shareMessage = [
  "Hi! Here's my digital visiting card.",
  "",
  `${profile.name} — ${profile.title}, ${profile.company}`,
  "Tap the link to view my card and save my contact:",
].join("\n");
