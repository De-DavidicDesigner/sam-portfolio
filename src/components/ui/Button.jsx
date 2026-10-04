import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-accent text-bg hover:bg-accent-strong shadow-[0_0_0_1px_rgb(61_220_151/0.4),0_8px_24px_-8px_rgb(61_220_151/0.5)]",
  secondary: "border border-line bg-surface/60 text-fg hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:text-fg",
};

/** Renders an <a> when `href` is given, otherwise a <button>. */
const Button = ({ href, variant = "primary", className, children, ...props }) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
