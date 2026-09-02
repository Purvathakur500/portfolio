import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16 md:h-[72px]">
        <button
          onClick={() => handleNav("#home")}
          className="font-display text-lg font-bold tracking-wide text-text"
        >
          {personalInfo.firstName}
          <span className="text-accent">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-7">
          {navigation.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className={`text-xs font-semibold tracking-[0.16em] transition-colors ${
                  active === item.href.slice(1)
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-text"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className="lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-bg-secondary border-b border-border"
        style={{ maxHeight: open ? "480px" : "0px", opacity: open ? 1 : 0 }}
      >
        <ul className="section-shell py-4 flex flex-col gap-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className={`w-full text-left py-2.5 text-sm font-semibold tracking-[0.1em] ${
                  active === item.href.slice(1) ? "text-accent" : "text-text-muted"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
