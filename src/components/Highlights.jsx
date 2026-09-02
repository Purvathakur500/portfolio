import { highlights } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Highlights() {
  return (
    <section className="relative bg-bg-secondary border-y border-border">
      <div className="section-shell py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 90} className="text-center md:text-left">
              <p className="font-display font-extrabold text-accent text-[clamp(1.6rem,3.4vw,2.4rem)] leading-none">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] md:text-xs font-semibold tracking-[0.1em] text-text-muted uppercase">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
