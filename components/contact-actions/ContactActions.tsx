"use client";

import { ChevronRight, Globe, Mail, Phone, Share2 } from "lucide-react";
import type { ReactNode } from "react";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { profile } from "@/lib/profile";
import { ShareButton } from "@/components/share/ShareButton";

type Item = {
  label: string;
  icon: ReactNode;
  tone: string;
  href?: string;
  external?: boolean;
  share?: boolean;
};

const card =
  "action-card press flex h-[72px] min-w-0 w-full flex-col items-start justify-center gap-1.5 rounded-[18px] border border-black/[0.06] bg-white px-2.5 text-left shadow-[0_1px_2px_rgba(20,22,28,0.04),0_8px_18px_rgba(20,22,28,0.045)]";

export function ContactActions() {
  const items: Item[] = [];
  const whatsapp = whatsappHref(profile.whatsapp);
  const call = phoneHref(profile.phone);
  if (whatsapp) {
    items.push({ label: "WhatsApp", href: whatsapp, external: true, tone: "#218a3d", icon: <WhatsAppIcon /> });
  }
  if (call) items.push({ label: "Call", href: call, tone: "#3e6700", icon: <Phone className="size-4" /> });
  if (profile.email) {
    items.push({ label: "Email", href: `mailto:${profile.email}`, tone: "#19686c", icon: <Mail className="size-4" /> });
  }
  if (profile.linkedin) {
    items.push({
      label: "LinkedIn",
      href: profile.linkedin,
      external: true,
      tone: "#0a66c2",
      icon: <LinkedInIcon />,
    });
  }
  if (profile.website) {
    items.push({ label: "Website", href: profile.website, external: true, tone: "#3e6700", icon: <Globe className="size-4" /> });
  }
  items.push({ label: "Share Card", tone: "#3a414c", share: true, icon: <Share2 className="size-4" /> });

  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item) => {
        const inner = (
          <>
            <span className="flex w-full items-center justify-between">
              <span className="grid size-7 shrink-0 place-items-center rounded-full text-white" style={{ background: item.tone }}>
                {item.icon}
              </span>
              <ChevronRight className="size-3.5 shrink-0 text-ink/35" aria-hidden="true" />
            </span>
            <span className="w-full text-[12px] leading-tight font-medium text-ink">{item.label}</span>
          </>
        );
        if (item.share) {
          return (
            <ShareButton key={item.label} className={card}>
              {inner}
            </ShareButton>
          );
        }
        return (
          <a
            key={item.label}
            href={item.href}
            className={card}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 4C7.61 4 4 7.55 4 11.9c0 1.4.38 2.76 1.1 3.96L4 20l4.28-1.12a8.1 8.1 0 0 0 3.76.92c4.43 0 8.04-3.55 8.04-7.9S16.47 4 12.04 4Zm4.67 11.18c-.18.52-1.07.99-1.49 1.05-.38.06-.86.08-1.39-.09-.32-.1-.73-.24-1.26-.47-2.22-.96-3.66-3.2-3.77-3.35-.11-.15-.9-1.2-.9-2.29 0-1.09.57-1.63.77-1.85.2-.22.44-.28.59-.28h.42c.14 0 .32-.05.5.38.18.44.63 1.52.68 1.63.06.11.1.24.02.39-.08.15-.12.24-.24.37-.12.13-.25.29-.36.39-.12.11-.24.23-.1.45.14.22.62 1.02 1.33 1.66.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.12 1.1Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H4V20h2.5V9ZM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4ZM20 20h-2.5v-5.6c0-1.55-.56-2.4-1.72-2.4-1.04 0-1.6.7-1.87 1.38-.1.23-.08.56-.08.88V20H11.3s.04-9.7 0-10.7H13.8v1.66c.33-.55 1.12-1.86 2.92-1.86 2.07 0 3.28 1.35 3.28 4.26V20Z" />
    </svg>
  );
}
