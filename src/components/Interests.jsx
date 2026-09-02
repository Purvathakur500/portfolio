import { Mic, Music2, Trophy, Video, CalendarDays, Footprints, Shield, Languages as LanguagesIcon } from "lucide-react";
import { interests, languages } from "../data/portfolioData";
import Reveal from "./Reveal";

const iconMap = {
  "Public Speaking": Mic,
  Dancing: Music2,
  Badminton: Trophy,
  Anchoring: Video,
  "Event Management": CalendarDays,
  "Running & Fitness": Footprints,
  Defence: Shield,
};

export default function Interests() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-secondary">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">BEYOND TECHNOLOGY</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            Beyond The Code
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {interests.map((item, i) => {
            const Icon = iconMap[item.name] || Trophy;
            return (
              <Reveal
                key={item.name}
                delay={i * 70}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <Icon size={22} className="text-accent" />
                <span className="text-sm font-semibold">{item.name}</span>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <LanguagesIcon size={18} className="text-accent" />
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-text-muted">
              Languages
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="rounded-xl border border-border bg-card p-4">
                <p className="font-display font-bold">{lang.name}</p>
                <p className="text-text-muted text-xs mt-1">{lang.level}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
