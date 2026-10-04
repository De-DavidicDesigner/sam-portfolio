import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import { services } from "../data/services";

const methodColors = {
  GET: "text-info border-info/40",
  POST: "text-accent border-accent/40",
  PUT: "text-warn border-warn/40",
  PATCH: "text-purple border-purple/40",
};

const Services = () => (
  <Section
    id="services"
    index="05"
    eyebrow="services"
    title="How I can help"
    description="Whether you need a new service built from scratch or an existing system made faster and safer."
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ method, path, title, description, icon: Icon }, i) => (
        <Reveal
          as="article"
          key={path}
          delay={(i % 3) * 80}
          className="group rounded-xl border border-line bg-surface/80 p-6 transition-colors hover:border-accent/50"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <code className="font-mono text-xs text-subtle">
              <span className={`mr-1.5 rounded border px-1.5 py-0.5 ${methodColors[method]}`}>{method}</span>
              {path}
            </code>
          </div>
          <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-accent">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{description}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Services;
