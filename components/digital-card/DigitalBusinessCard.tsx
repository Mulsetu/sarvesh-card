import { ConnectSection } from "@/components/digital-card/ConnectSection";
import { ContactGrid } from "@/components/digital-card/ContactGrid";
import { FlipCard } from "@/components/digital-card/FlipCard";
import { SaveContactButton } from "@/components/save-contact/SaveContactButton";

export function DigitalBusinessCard({ startOnBack = false }: { startOnBack?: boolean }) {
  return (
    <div className="stage">
      <div className="stage-card">
        <FlipCard startFlipped={startOnBack} />
      </div>
      <div className="stage-actions">
        <SaveContactButton />
        <ContactGrid />
        <ConnectSection />
      </div>
    </div>
  );
}
