import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";


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
    <footer className="relative mt-24 border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link to="/" className="flex items-center" aria-label="AiGENThix home">
              <img
                src="/AiGENThix Logo.webp"
                alt="AiGENThix"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Industry-aligned AI learning programs empowering individuals,
              upskilling teams, and preparing enterprises for an AI-first future.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-navy hover:text-primary transition-colors"
            >
              Talk to our team
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-[14px] text-navy/80 hover:text-primary transition-colors"
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

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AiGENThix. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed for the AI-first enterprise.
          </p>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <div className="font-display text-navy/[0.06] leading-[0.80] text-[20vw] text-center -mb-8">
          AiGENThix
        </div>
      </div>
    </footer>
  );
}
