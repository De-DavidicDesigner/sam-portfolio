import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import SocialLinks from "../components/SocialLinks";
import Button from "../components/ui/Button";
import TerminalWindow from "../components/ui/TerminalWindow";
import { metrics, profile } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";

const response = [
  ["name", profile.name],
  ["role", profile.title],
  ["location", "Lagos, NG"],
  ["stack", ["Java", "Spring Boot", "Node.js", "Kafka"]],
  ["cloud", ["AWS", "GCP", "Docker", "K8s"]],
  ["experience_years", 5],
  ["open_to_work", true],
];

const JsonValue = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((v, i) => (
          <span key={v}>
            <span className="text-warn">"{v}"</span>
            {i < value.length - 1 && ", "}
          </span>
        ))}
        ]
      </>
    );
  }
  if (typeof value === "string") return <span className="text-warn">"{value}"</span>;
  return <span className="text-info">{String(value)}</span>;
};

const Hero = () => {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative flex min-h-[min(100svh,1000px)] flex-col justify-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <span className="mt-2 block text-muted">
              I build systems that <span className="text-fg">scale</span>.
            </span>
          </h1>

          <p className="mt-6 font-mono text-base text-accent sm:text-lg" aria-label={profile.title}>
            <span className="text-subtle">&gt; </span>
            <span aria-hidden="true">
              {role}
              <span className="animate-blink">▍</span>
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact">
              Let's talk <LuArrowUpRight aria-hidden="true" />
            </Button>
            <Button href={profile.resume} download variant="secondary">
              <LuDownload aria-hidden="true" /> Download CV
            </Button>
            <SocialLinks className="sm:ml-2" />
          </div>
        </div>

        <TerminalWindow title="zsh — ~/samuel" className="w-full">
          <p>
            <span className="text-accent">$</span> curl -s localhost:8080/api/v1/engineer | jq
          </p>
          <p className="mt-3 text-accent">HTTP/1.1 200 OK</p>
          <div className="mt-1 text-fg">
            {"{"}
            {response.map(([key, value], i) => (
              <div key={key} className="pl-5">
                <span className="text-info">"{key}"</span>: <JsonValue value={value} />
                {i < response.length - 1 && ","}
              </div>
            ))}
            {"}"}
          </div>
          <p className="mt-3">
            <span className="text-accent">$</span> <span className="animate-blink">▍</span>
          </p>
        </TerminalWindow>
      </div>

      <div className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface p-6">
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd className="mt-1 font-mono text-3xl font-semibold text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
