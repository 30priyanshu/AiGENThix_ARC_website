import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Check } from "lucide-react";

const tiers = [
  { name: "Individual", price: "₹1,20,000", period: "per cohort", desc: "For working professionals building AI expertise.", features: ["Full program access", "Mentor-led sessions", "Capstone project", "Career support", "Alumni network"], highlight: false },
  { name: "Professional", price: "₹1,80,000", period: "per cohort", desc: "For senior engineers moving into ML/MLOps roles.", features: ["Everything in Individual", "1:1 senior mentor", "Interview coaching", "Portfolio review", "Priority placement"], highlight: true },
  { name: "Enterprise", price: "Custom", period: "let's talk", desc: "For teams of 10 to 1,000+ transforming operations.", features: ["Custom curriculum", "On-site or remote", "Dedicated CSM", "Analytics & reporting", "Enterprise SLAs"], highlight: false },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — AiGENThix" }, { name: "description", content: "Transparent pricing for individuals, senior professionals and enterprise teams." }] }),
  component: Pricing,
});

function Pricing() {
  return (
    <SiteLayout>
      <section className="relative -mt-24 pt-[160px] pb-20 overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-[#EEF7FF] to-[#DDEEFF]">

        {/* Soft Background Glow */}
        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-blue-50/40"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Pricing</div>
            <h1 className="mt-3 text-navy">
              Investment tiers,
              <br />
              <span className="text-navy/60">designed for outcomes.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`rounded-3xl p-8 flex flex-col ${t.highlight ? "bg-navy text-primary-foreground shadow-elegant" : "hairline bg-card"}`}>
                <div className={`text-sm font-semibold uppercase tracking-[0.2em] ${t.highlight ? "text-primary-foreground/60" : "text-primary"}`}>{t.name}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="font-display text-5xl">{t.price}</div>
                  <div className={`text-sm ${t.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{t.period}</div>
                </div>
                <p className={`mt-3 text-[14px] ${t.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.desc}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px]">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.highlight ? "text-primary-foreground/60" : "text-primary"}`} />
                      <span className={t.highlight ? "text-primary-foreground/90" : "text-navy/85"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium transition-all ${t.highlight ? "bg-primary-foreground text-navy hover:bg-primary-foreground/90" : "bg-navy text-primary-foreground hover:bg-navy/90"}`}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
