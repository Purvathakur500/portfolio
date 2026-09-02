import { Shield } from "lucide-react";
import { defenceGoal } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function DefenceGoal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Shield size={420} strokeWidth={0.6} className="text-accent/5" />
      </div>

      <div className="section-shell relative text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="eyebrow">DRIVEN BY PURPOSE</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            {defenceGoal.heading}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-text-muted text-lg leading-relaxed">{defenceGoal.statement}</p>
        </Reveal>

        <Reveal delay={260} className="mt-9 flex flex-wrap justify-center gap-3">
          {defenceGoal.pillars.map((p) => (
            <span
              key={p}
              className="text-xs font-semibold tracking-[0.1em] uppercase text-accent border border-accent/30 rounded-full px-4 py-2"
            >
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
