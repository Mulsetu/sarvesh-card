import { profile, shareMessage, shareTitle } from "@/lib/profile";

export async function shareCard() {
  if (typeof navigator === "undefined" || typeof navigator.share !== "function") return "unavailable" as const;
  try {
    await navigator.share({ title: shareTitle, text: shareMessage, url: profile.profileUrl });
    return "shared" as const;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") return "dismissed" as const;
    return "unavailable" as const;
  }
}

export async function copyCardLink() {
  const value = profile.profileUrl;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // Fall through to the selection method.
  }
  try {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  } catch {
    return false;
  }
}

export function whatsAppCardUrl() {
  return `https://wa.me/?text=${encodeURIComponent(`${shareMessage}\n${profile.profileUrl}`)}`;
}
