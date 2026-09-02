import { Trophy, Medal, Award } from "lucide-react";
import { achievements } from "../data/portfolioData";
import Reveal from "./Reveal";

const icons = { nda: Trophy, "gita-summit": Medal, advitya: Award };

export default function Achievements() {
  const featured = achievements.find((a) => a.featured);
  const rest = achievements.filter((a) => !a.featured);

  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-bg-secondary">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">ACHIEVEMENTS</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            Milestones That Define My Journey
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {featured && (
            <Reveal className="md:col-span-3 group relative rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-8 md:p-10 overflow-hidden transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(255,157,0,0.35)]">
              <Trophy
                size={140}
                strokeWidth={1}
                className="absolute -right-6 -bottom-6 text-accent/10 group-hover:text-accent/15 transition-colors"
              />
              <div className="relative">
                <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-accent border border-accent/40 rounded-full px-3 py-1">
                  {featured.title}
                </span>
                <p className="font-display font-extrabold text-[clamp(2rem,5vw,3.2rem)] mt-4 leading-none">
                  {featured.result}
                </p>
                <p className="text-text-muted mt-4 max-w-xl leading-relaxed">{featured.description}</p>
              </div>
            </Reveal>
          )}

          {rest.map((item, i) => {
            const Icon = icons[item.id] || Award;
            return (
              <Reveal
                key={item.id}
                delay={i * 100}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-18px_rgba(255,157,0,0.3)]"
              >
                <Icon size={26} className="text-accent" />
                <p className="font-display font-bold text-base mt-5">{item.title}</p>
                <p className="text-accent text-sm font-semibold mt-1">{item.result}</p>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
