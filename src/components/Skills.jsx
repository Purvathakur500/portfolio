import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">{skills.label}</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            {skills.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={i * 90}
              className="rounded-2xl border border-border bg-card p-6 md:p-7 transition-colors hover:border-accent/40"
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">
                {cat.name}
              </p>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
