import { cn } from "../../lib/cn";
import Reveal from "./Reveal";

/**
 * Page section with a numbered, code-comment style heading.
 * e.g. index="02" eyebrow="experience" title="Where I've worked"
 */
const Section = ({ id, index, eyebrow, title, description, className, children }) => {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal as="header" className="mb-12 max-w-2xl sm:mb-16">
          <p className="font-mono text-sm text-accent">
            <span className="text-subtle">{index}.</span> {"// "}
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
};

export default Section;
