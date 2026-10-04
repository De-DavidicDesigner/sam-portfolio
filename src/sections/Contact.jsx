import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuCheck, LuCopy, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import { profile } from "../data/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: LuMail, copyable: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: LuPhone },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: profile.whatsapp, icon: FaWhatsapp, external: true },
  { label: "Location", value: profile.location, icon: LuMapPin },
];

const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy ${value}`}
      className="rounded-md p-2 text-subtle transition-colors hover:text-accent"
    >
      {copied ? <LuCheck className="text-accent" /> : <LuCopy />}
    </button>
  );
};

const Contact = () => (
  <Section
    id="contact"
    index="07"
    eyebrow="contact"
    title="Let's build something reliable."
    description="Hiring for a backend or full-stack role, or need help with an API, a migration or a scaling problem? My inbox is open."
  >
    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
      <Reveal as="ul" className="space-y-3">
        {channels.map(({ label, value, href, icon: Icon, copyable, external }) => {
          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs text-subtle">{label}</span>
                <span className="block truncate text-fg">{value}</span>
              </span>
            </>
          );

          return (
            <li key={label} className="flex items-center gap-2 rounded-xl border border-line bg-surface/80 p-3 pr-2 transition-colors hover:border-accent/40">
              {href ? (
                <a
                  href={href}
                  className="flex min-w-0 flex-1 items-center gap-4"
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {content}
                </a>
              ) : (
                <div className="flex min-w-0 flex-1 items-center gap-4">{content}</div>
              )}
              {copyable && <CopyButton value={value} />}
            </li>
          );
        })}
      </Reveal>

      <Reveal delay={120}>
        <ContactForm />
      </Reveal>
    </div>
  </Section>
);

export default Contact;
