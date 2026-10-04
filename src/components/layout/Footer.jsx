import { LuArrowUp } from "react-icons/lu";
import { profile } from "../../data/profile";
import SocialLinks from "../SocialLinks";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
      <div className="text-center sm:text-left">
        <p className="font-mono text-sm text-fg">
          <span className="text-accent">~/</span>
          {profile.handle}
        </p>
        <p className="mt-1 text-sm text-subtle">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <SocialLinks />
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
        >
          <LuArrowUp className="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
