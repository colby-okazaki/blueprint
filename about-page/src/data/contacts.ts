import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export interface ContactLink {
  label: string;
  href: string;
  Icon: IconType;
  external: boolean;
}

export const contacts: ContactLink[] = [
  { label: "Email", href: "mailto:you@example.com", Icon: FaEnvelope, external: false },
  { label: "GitHub", href: "https://github.com/yourusername", Icon: FaGithub, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", Icon: FaLinkedin, external: true },
];
