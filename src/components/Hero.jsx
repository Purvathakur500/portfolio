import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { heroContent, socialLinks } from "../data/portfolioData";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

const badgePositions = [
  "top-[6%] -left-6 md:-left-10",
  "top-[28%] -right-4 md:-right-10",
  "top-[52%] -left-10 md:-left-16",
  "top-[72%] -right-2 md:-right-6",
  "top-[88%] left-[18%]",
];

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-bg"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="grain-overlay" />
      </div>

      <div className="section-shell relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <Reveal>
            <span className="eyebrow">{heroContent.eyebrow}</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-extrabold uppercase leading-[0.92] mt-4 text-[clamp(3rem,9vw,6rem)]">
              {heroContent.headingLine1}
              <br />
              <span className="text-accent">{heroContent.headingLine2}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm md:text-base font-semibold tracking-[0.04em] text-text-muted max-w-lg">
              {heroContent.subtitle}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 font-display text-xl md:text-2xl font-semibold text-text max-w-lg leading-snug">
              {heroContent.tagline}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-5 text-text-muted leading-relaxed max-w-lg">
              {heroContent.description}
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm tracking-[0.06em] px-6 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(255,157,0,0.55)]"
              >
                {heroContent.ctaPrimary}
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 border border-border text-text font-semibold text-sm tracking-[0.06em] px-6 py-3.5 rounded-full transition-colors hover:border-accent hover:text-accent"
              >
                {heroContent.ctaSecondary}
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-accent border border-accent/40 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {heroContent.statusBadge}
              </span>

              <div className="flex items-center gap-4">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  <LinkedinIcon size={19} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href={socialLinks.email}
                  aria-label="Email"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: image + rings + badges */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[380px] aspect-[4/5]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[110%] h-[110%] rounded-full border border-accent/25 animate-pulse-ring" />
            <div
              className="absolute w-[130%] h-[130%] rounded-full border border-accent/10 animate-pulse-ring"
              style={{ animationDelay: "1.2s" }}
            />
          </div>

          <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <ImageWithFallback
              src="/images/profile.jpg"
              alt="Purva Thakur"
              label="Profile photo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
          </div>

          {heroContent.floatingBadges.map((badge, i) => (
            <div
              key={badge}
              className={`hidden md:flex absolute ${badgePositions[i]} glass-card rounded-full px-4 py-2 items-center gap-2 animate-drift`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold tracking-[0.14em] text-text whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </Reveal>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
        <ArrowRight size={14} className="rotate-90" />
      </button>
    </section>
  );
}
