import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import { cn } from "../lib/cn";

const icons = {
  github: { icon: FaGithub, label: "GitHub" },
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  facebook: { icon: FaFacebook, label: "Facebook" },
};

const SocialLinks = ({ className }) => {
  const links = Object.entries(profile.socials).filter(([, url]) => url);

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(([key, url]) => {
        const { icon: Icon, label } = icons[key];
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
