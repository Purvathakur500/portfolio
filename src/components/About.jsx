import { Download, MapPin, GraduationCap, Target } from "lucide-react";
import { about, personalInfo } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-shell grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
        <div>
          <Reveal>
            <span className="eyebrow">{about.label}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-7 space-y-4 max-w-xl">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={140 + i * 60}>
                <p className="text-text-muted leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-3">
              {personalInfo.coreQualities.map((q) => (
                <span
                  key={q}
                  className="text-xs font-semibold tracking-[0.1em] uppercase text-text border border-border rounded-full px-4 py-2"
                >
                  {q}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="glass-card rounded-2xl p-7 md:p-8">
          <p className="font-display font-bold text-xl">{about.card.name}</p>
          <p className="text-sm text-accent font-semibold mt-1">{about.card.role}</p>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              <span className="text-text-muted">{about.card.location}</span>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap size={16} className="text-accent mt-0.5 shrink-0" />
              <span className="text-text-muted">CGPA {about.card.cgpa}</span>
            </div>
            <div className="flex items-start gap-3">
              <Target size={16} className="text-accent mt-0.5 shrink-0" />
              <span className="text-text-muted">{about.card.focus}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-[11px] tracking-[0.14em] uppercase text-text-muted">Goal</p>
            <p className="font-display text-lg font-semibold mt-1">{about.card.goal}</p>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download
            className="mt-7 inline-flex items-center justify-center gap-2 w-full bg-accent text-bg font-semibold text-sm tracking-[0.05em] px-5 py-3 rounded-full transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </a>
        </Reveal>
      </div>
    </section>
  );
}
