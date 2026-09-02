import { BadgeCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">CERTIFICATIONS</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            Continuous Learning
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.id}
              delay={i * 90}
              className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4 transition-colors hover:border-accent/40"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <BadgeCheck size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold">{cert.title}</p>
                <p className="text-text-muted text-sm mt-1">
                  {cert.issuer || "Issuer — coming soon"}
                </p>
                <p className="text-text-muted text-xs mt-1">
                  {cert.date || "Date — coming soon"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
