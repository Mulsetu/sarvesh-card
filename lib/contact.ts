import { cardLabel, profile } from "@/lib/profile";

export function buildVCard(photoBase64?: string) {
  const { first, last } = splitName(profile.name);
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    fold(`N:${escapeText(last)};${escapeText(first)};;;`),
    fold(`FN:${escapeText(profile.name)}`),
    fold(`ORG:${escapeText(profile.company)}`),
    fold(`TITLE:${escapeText(profile.title)}`),
  ];

  const tel = phoneHref(profile.phone);
  if (tel) lines.push(fold(`TEL;TYPE=CELL:${tel.replace("tel:", "")}`));
  if (profile.email) lines.push(fold(`EMAIL;TYPE=INTERNET:${escapeText(profile.email)}`));
  if (profile.website) lines.push(fold(`URL:${profile.website}`));
  if (profile.linkedin) lines.push(fold(`URL;TYPE=LinkedIn:${profile.linkedin}`));
  lines.push(fold(`URL;TYPE=CARD:${profile.profileUrl}`));
  if (photoBase64) lines.push(fold(`PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`));
  lines.push("END:VCARD");
  return `${lines.join("\r\n")}\r\n`;
}

export function phoneHref(value: string) {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return "";
  return `tel:${trimmed.startsWith("+") ? `+${digits}` : digits}`;
}

export function whatsappHref(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return "";
  return `https://wa.me/${digits}`;
}

export function displayUrl() {
  return cardLabel;
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) return { first: parts[0] || "", last: "" };
  return { first: parts.slice(0, -1).join(" "), last: parts.at(-1) || "" };
}

function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r\n|\n|\r/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function fold(line: string) {
  if (line.length <= 75) return line;
  let output = line.slice(0, 75);
  let index = 75;
  while (index < line.length) {
    output += `\r\n ${line.slice(index, index + 74)}`;
    index += 74;
  }
  return output;
}
