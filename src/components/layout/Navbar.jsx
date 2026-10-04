import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="font-mono text-sm font-semibold text-fg">
          <span className="text-accent">~/</span>
          {profile.handle}
          <span className="animate-blink text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 font-mono text-[13px] transition-colors",
                  active === link.id ? "text-accent" : "text-muted hover:text-fg",
                )}
              >
                <span className="text-subtle">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            href={profile.resume}
            download
            variant="secondary"
            className="hidden px-4 py-2 sm:inline-flex"
          >
            <LuDownload aria-hidden="true" /> Resume
          </Button>
          <button
            type="button"
            className="rounded-md p-2 text-muted hover:text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-3 font-mono text-sm",
                    active === link.id ? "text-accent" : "text-muted",
                  )}
                >
                  <span className="text-subtle">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <Button href={profile.resume} download variant="secondary" className="w-full">
                <LuDownload aria-hidden="true" /> Download resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
