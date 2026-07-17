import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, ShieldCheck, Users } from "lucide-react";
import corpImg from "@/assets/corporate-training.jpg";

export function CorporateCTA() {
  return (
    <section className="py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="rounded-[32px] overflow-hidden hairline bg-navy relative">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src={corpImg}
                alt="Enterprise AI training at AiGENThix"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/30 to-navy/70" />
            </div>
            <div className="p-10 md:p-14 lg:p-16 text-primary-foreground">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                Corporate Training
              </div>
              <h2 className="mt-3 text-left text-primary-foreground">
                Upskill your entire
                <br />
                <span className="text-primary-foreground/70">
                  organization.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] text-primary-foreground/70 leading-relaxed">
                Custom AI transformation programs for enterprise teams — from
                onboarding engineers to executive AI literacy. Delivered on-site,
                remote, or hybrid.
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-5">
                {[
                  { icon: Building2, label: "140+ enterprise clients" },
                  { icon: Users, label: "12,000+ professionals trained" },
                  { icon: ShieldCheck, label: "ISO-aligned delivery" },
                ].map((i) => (
                  <div key={i.label}>
                    <i.icon className="h-5 w-5 text-primary-foreground/60" />
                    <div className="mt-2 text-sm text-primary-foreground/80 leading-snug">
                      {i.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/corporate"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground text-navy px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/90 transition-all"
                >
                  Talk to enterprise
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
