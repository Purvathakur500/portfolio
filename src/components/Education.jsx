import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">{education.label}</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            {education.heading}
          </h2>
        </Reveal>

        <Reveal delay={160} className="mt-12 max-w-2xl">
          <div className="glass-card rounded-2xl p-7 md:p-9 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
              <GraduationCap size={26} className="text-accent" />
            </div>

            <div>
              <p className="font-display font-bold text-lg md:text-xl leading-snug">
                {education.degree}
              </p>
              <p className="text-accent text-sm font-semibold mt-1">{education.specialization}</p>
              <p className="text-text-muted text-sm mt-3">
                {education.university} · {education.location}
              </p>
              <p className="text-text-muted text-sm">{education.period}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="text-xs font-semibold tracking-[0.08em] uppercase text-text border border-border rounded-full px-4 py-1.5">
                  {education.standing}
                </span>
                <span className="text-xs font-semibold tracking-[0.08em] uppercase text-bg bg-accent rounded-full px-4 py-1.5">
                  CGPA {education.cgpa}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
