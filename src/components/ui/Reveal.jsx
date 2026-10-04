import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";

const Reveal = ({ as: Tag = "div", delay = 0, className, children, ...props }) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
