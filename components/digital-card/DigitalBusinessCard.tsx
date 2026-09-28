import { ConnectSection } from "@/components/digital-card/ConnectSection";
import { ContactGrid } from "@/components/digital-card/ContactGrid";
import { FlipCard } from "@/components/digital-card/FlipCard";
import { SaveContactButton } from "@/components/save-contact/SaveContactButton";

export function DigitalBusinessCard({ startOnBack = false }: { startOnBack?: boolean }) {
  return (
    <div className="stage">
      <FlipCard startFlipped={startOnBack} />
      <div className="mt-3">
        <SaveContactButton />
      </div>
      <div className="mt-2">
        <ContactGrid />
      </div>
      <div className="mt-3">
        <ConnectSection />
      </div>
    </div>
  );
}
