import { cn } from "../../lib/cn";

const TerminalWindow = ({ title, className, children }) => (
  <div
    className={cn(
      "overflow-hidden rounded-xl border border-line bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur",
      className,
    )}
  >
    <div className="flex items-center gap-2 border-b border-line bg-surface-2/80 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
      {title && <span className="ml-3 truncate font-mono text-xs text-subtle">{title}</span>}
    </div>
    <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm">{children}</div>
  </div>
);

export default TerminalWindow;
