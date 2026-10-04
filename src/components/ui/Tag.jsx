import { cn } from "../../lib/cn";

const Tag = ({ className, children }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-md border border-line bg-surface-2/70 px-2 py-0.5 font-mono text-xs text-muted",
      className,
    )}
  >
    {children}
  </span>
);

export default Tag;
