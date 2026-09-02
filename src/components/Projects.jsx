import { ExternalLink, Loader } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/portfolioData";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

const imageMap = {
  officerpath: "/images/officerpath.png",
  smartboat: "/images/smartboat.jpg",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-bg-secondary">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">FEATURED WORK</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
            Things I've Built
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 100}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_50px_-22px_rgba(255,157,0,0.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={imageMap[project.image]}
                  alt={project.title}
                  label={project.image ? project.title : "In progress"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.status && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase bg-bg/85 border border-accent/40 text-accent rounded-full px-3 py-1.5">
                    {project.status === "IN PROGRESS" && <Loader size={11} className="animate-spin" />}
                    {project.status}
                  </span>
                )}
              </div>

              <div className="p-6">
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-accent">
                  {project.category}
                </p>
                <p className="font-display font-bold text-lg mt-2">{project.title}</p>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">{project.description}</p>

                {project.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-text-muted border border-border rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {project.github && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.05em] text-bg bg-accent rounded-full px-4 py-2 transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={13} />
                      {project.primaryLabel || "VIEW PROJECT"}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.05em] text-text border border-border rounded-full px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                    >
                      <GithubIcon size={13} />
                      {project.secondaryLabel || "SOURCE CODE"}
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
