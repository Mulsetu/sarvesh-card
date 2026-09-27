import type { Metadata } from "next";
import { DigitalCard } from "@/components/digital-card/DigitalCard";
import { profile, shareText, shareTitle } from "@/lib/profile";

export const metadata: Metadata = {
  title: shareTitle,
  description: shareText,
  alternates: { canonical: profile.profileUrl },
};

export default function HomePage() {
  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.title,
            worksFor: { "@type": "Organization", name: profile.company, url: profile.website },
            email: profile.email,
            telephone: profile.phone,
            url: profile.profileUrl,
            ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <DigitalCard />
    </main>
  );
}
