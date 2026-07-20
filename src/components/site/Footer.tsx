import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const cols = [
  {
    title: "Programs",
    links: [
      { to: "/programs/data-engineering", label: "Data Engineering" },
      { to: "/programs/data-analytics", label: "Data Analytics" },
      { to: "/programs/ai-ml", label: "AI & Machine Learning" },
      { to: "/programs/mlops", label: "AI & MLOps" },
      { to: "/programs/generative-ai", label: "Generative AI" },
      { to: "/programs/agentic-ai", label: "Agentic AI" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/success-stories", label: "Success Stories" },
      { to: "/blog", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { to: "/corporate", label: "Corporate Training" },
      { to: "/pricing", label: "Pricing" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-800 bg-navy text-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link to="/" className="flex items-center" aria-label="AiGENThix home">
              {/* If you have a dark mode logo, you'd use it here. Adding brightness and contrast as a fallback */}
              <img
                src="/AiGENThix Logo.webp"
                alt="AiGENThix"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-300">
              Industry-aligned AI learning programs empowering individuals,
              upskilling teams, and preparing enterprises for an AI-first future.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:text-white transition-colors"
            >
              Talk to our team
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-[14px] text-slate-300 hover:text-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} AiGENThix. All rights reserved.
            </p>
            <span className="hidden md:block text-slate-700">•</span>
            <p className="text-xs text-slate-400">
              Designed for the AI-first enterprise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
