import { Fragment } from "react";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import Tag from "../components/ui/Tag";
import { projects } from "../data/projects";

const Flow = ({ steps }) => (
  <div
    className="flex flex-wrap items-center gap-y-2 rounded-lg border border-dashed border-line bg-bg/60 p-3 font-mono text-[11px] text-muted"
    aria-label={`Flow: ${steps.join(" to ")}`}
  >
    {steps.map((step, i) => (
      <Fragment key={step}>
        <span className="rounded border border-line bg-surface-2 px-2 py-1 text-fg">{step}</span>
        {i < steps.length - 1 && (
          <span className="px-1.5 text-accent" aria-hidden="true">
            →
          </span>
        )}
      </Fragment>
    ))}
  </div>
);

const Projects = () => (
  <Section
    id="projects"
    index="03"
    eyebrow="systems"
    title="Systems I've built"
    description="A few of the backend platforms I've designed and delivered, and the impact they had in production."
  >
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal
          as="article"
          key={project.name}
          delay={(i % 2) * 100}
          className="group flex flex-col rounded-xl border border-line bg-surface/80 p-6 transition-colors hover:border-accent/50"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-subtle">{project.org}</p>
              <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-accent">
                {project.name}
              </h3>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-2xl font-semibold text-accent">{project.impact.value}</p>
              <p className="text-xs text-muted">{project.impact.label}</p>
            </div>
          </div>

          <p className="mt-4 flex-1 leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-5">
            <Flow steps={project.flow} />
          </div>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Projects;
