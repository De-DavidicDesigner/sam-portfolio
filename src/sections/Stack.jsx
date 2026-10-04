import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import Tag from "../components/ui/Tag";
import { practices, skillGroups } from "../data/skills";

const Stack = () => (
  <Section
    id="stack"
    index="04"
    eyebrow="stack"
    title="Tools of the trade"
    description="The languages, infrastructure and practices I reach for to build dependable systems."
  >
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal
          key={group.key}
          delay={(i % 3) * 80}
          className="rounded-xl border border-line bg-surface/80 p-6"
        >
          <h3 className="font-mono text-sm text-muted">
            <span className="text-accent">{group.key}</span>
            <span className="text-subtle">.config</span>
          </h3>
          <p className="mt-1 font-semibold">{group.title}</p>
          <ul className="mt-5 grid grid-cols-2 gap-2">
            {group.items.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 text-sm text-muted transition-colors hover:border-line hover:bg-surface-2 hover:text-fg"
              >
                <Icon className="h-4 w-4 shrink-0 text-fg/80" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}

      <Reveal delay={160} className="rounded-xl border border-line bg-surface/80 p-6">
        <h3 className="font-mono text-sm text-muted">
          <span className="text-accent">practices</span>
          <span className="text-subtle">.md</span>
        </h3>
        <p className="mt-1 font-semibold">How I work</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {practices.map((p) => (
            <li key={p}>
              <Tag className="py-1 text-[13px]">{p}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Section>
);

export default Stack;
