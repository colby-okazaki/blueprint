import Section from "./Section";
import type { ContactLink } from "../data/contacts";

interface ContactProps {
  links: ContactLink[];
}

export default function Contact({ links }: ContactProps) {
  return (
    <Section id="contact" title="Contact">
      <ul className="flex flex-wrap gap-4">
        {links.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} (opens in new tab)` : label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Icon aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
