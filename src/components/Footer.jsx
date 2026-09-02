import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { footer, socialLinks } from "../data/portfolioData";

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-bg-secondary">
      <div className="section-shell py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display font-extrabold text-xl tracking-wide">{footer.brand}</p>
            <p className="text-text-muted text-sm mt-2">{footer.tagline}</p>

            <div className="flex items-center gap-4 mt-5">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Email"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <nav>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-text-muted mb-4">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
