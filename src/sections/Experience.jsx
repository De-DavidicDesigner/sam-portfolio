import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import Tag from "../components/ui/Tag";
import { experience } from "../data/experience";
import { cn } from "../lib/cn";

const Experience = () => (
  <Section
    id="experience"
    index="02"
    eyebrow="experience"
    title="Where I've shipped"
    description="Production systems across fintech, energy and telecom — from card platforms to real-time data pipelines."
  >
    <ol className="relative ml-1.5 border-l border-line">
      {experience.map((job, i) => (
        <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 60} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
          <span
            className={cn(
              "absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-bg",
              job.current ? "animate-pulse-dot bg-accent" : "bg-subtle",
            )}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-xl font-semibold">
              {job.role} <span className="text-accent">@ {job.company}</span>
            </h3>
            <p className="shrink-0 font-mono text-sm text-subtle">{job.period}</p>
          </div>

          <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span>{job.location}</span>
            <span className="text-subtle" aria-hidden="true">·</span>
            <span>{job.industry}</span>
            {job.current && (
              <Tag className="border-accent/40 text-accent">current</Tag>
            )}
          </p>

          <ul className="mt-4 space-y-2.5 text-muted">
            {job.highlights.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed">
                <span className="mt-0.5 font-mono text-accent" aria-hidden="true">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {job.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;
