import { experience } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-bg-secondary">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">EXPERIENCE</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            Where I've Learned & Contributed
          </h2>
        </Reveal>

        <div className="mt-14 relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-14">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 120} className="relative pl-10">
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-bg-secondary" />

                <p className="font-display text-sm md:text-base font-bold tracking-[0.06em] text-text">
                  {item.role}
                </p>
                <p className="text-accent text-sm font-semibold mt-1">{item.org}</p>
                <p className="text-text-muted mt-3 leading-relaxed max-w-xl">{item.description}</p>

                {item.emphasis && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.emphasis.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-text-muted border border-border rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
