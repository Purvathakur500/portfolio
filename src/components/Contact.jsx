import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact, personalInfo, socialLinks } from "../data/portfolioData";
import Reveal from "./Reveal";

const contactItems = [
  { icon: Mail, label: "EMAIL", value: personalInfo.email, href: socialLinks.email },
  { icon: Phone, label: "PHONE", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "LOCATION", value: personalInfo.location, href: null },
  { icon: LinkedinIcon, label: "LINKEDIN", value: "purva-thakur", href: socialLinks.linkedin },
  { icon: GithubIcon, label: "GITHUB", value: "Purvathakur500", href: socialLinks.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // No backend is connected yet — this simulates submission so the
      // form UX can be wired up to a real endpoint later.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full bg-bg-secondary border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none transition-colors focus:border-accent ${
      errors[field] ? "border-red-500/60" : "border-border"
    }`;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-shell grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <Reveal>
            <span className="eyebrow">{contact.label}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] mt-3 leading-tight">
              {contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-text-muted leading-relaxed max-w-sm">{contact.description}</p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-text-muted">
                      {item.label}
                    </p>
                    <p className="text-sm text-text mt-0.5">{item.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={item.label} delay={180 + i * 60}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} noValidate className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs font-semibold text-text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`mt-2 ${inputClass("name")}`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold text-text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`mt-2 ${inputClass("email")}`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-xs font-semibold text-text-muted">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className={`mt-2 ${inputClass("subject")}`}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-semibold text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`mt-2 ${inputClass("message")} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a bit more..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-accent text-bg font-semibold text-sm tracking-[0.05em] px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0"
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "loading" ? "SENDING..." : contact.ctaLabel}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} />
                Message ready — connect a backend to deliver it, this form isn't wired to one yet.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
