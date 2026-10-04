import portrait from "../assets/samuel.webp";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import { profile } from "../data/profile";

const facts = [
  ["location", profile.location],
  ["timezone", profile.timezone],
  ["focus", "Backend · Distributed systems"],
  ["industries", "Fintech · Oil & Gas · Telecom"],
  ["languages", profile.languages.join(", ")],
  ["remote", "Available"],
];

const About = () => (
  <Section id="about" index="01" eyebrow="about" title="Backend engineer, full-stack when it counts.">
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_340px]">
      <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
        {profile.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}

        <dl className="mt-8 grid gap-x-8 gap-y-3 rounded-xl border border-line bg-surface/70 p-6 font-mono text-sm sm:grid-cols-2">
          {facts.map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <dt className="shrink-0 text-info">{key}:</dt>
              <dd className="text-fg">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto w-full max-w-[340px]">
        <div
          className="absolute -inset-px -translate-x-3 translate-y-3 rounded-2xl border border-accent/40"
          aria-hidden="true"
        />
        <img
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          width="900"
          height="965"
          loading="lazy"
          className="relative aspect-[900/965] w-full rounded-2xl border border-line object-cover"
        />
      </Reveal>
    </div>
  </Section>
);

export default About;
