import { permanentRedirect } from "next/navigation";

export default function LegacyQrPage() {
  permanentRedirect("/qr");
}
