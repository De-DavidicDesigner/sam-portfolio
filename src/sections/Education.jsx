import { LuAward, LuGraduationCap } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import Tag from "../components/ui/Tag";
import { certifications, education } from "../data/education";

const Education = () => (
  <Section id="education" index="06" eyebrow="education" title="Learning & certifications">
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <Reveal className="rounded-xl border border-line bg-surface/80 p-6">
        <h3 className="flex items-center gap-2 font-semibold">
          <LuGraduationCap className="h-5 w-5 text-accent" aria-hidden="true" /> Education
        </h3>
        <ul className="mt-6 space-y-6">
          {education.map((item) => (
            <li key={item.degree} className="border-l-2 border-line pl-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-semibold">{item.degree}</p>
                <p className="shrink-0 font-mono text-sm text-subtle">{item.period}</p>
              </div>
              <p className="text-sm text-accent">{item.school}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {item.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={100} className="rounded-xl border border-line bg-surface/80 p-6">
        <h3 className="flex items-center gap-2 font-semibold">
          <LuAward className="h-5 w-5 text-accent" aria-hidden="true" /> Certifications
        </h3>
        <ul className="mt-6 space-y-5">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <p className="font-semibold">{cert.name}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                {cert.issuer}
                <Tag className={cert.status === "Completed" ? "text-accent" : "text-warn"}>
                  {cert.status.toLowerCase()}
                </Tag>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Section>
);

export default Education;
