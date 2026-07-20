import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

const stats = [
  { icon: Building2, k: "140+", v: "Enterprise clients" },
  { icon: Users, k: "12,000+", v: "Professionals trained" },
  { icon: ShieldCheck, k: "ISO", v: "Aligned delivery" },
];

export function CorporateCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-100 bg-white shadow-xl p-10 md:p-14">
          {/* Decorative Blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"
          />

          {/* Grid Pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #06B6D4 1px, transparent 1px), linear-gradient(to bottom, #06B6D4 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 text-cyan-700 px-4 py-2 text-xs font-semibold tracking-wide">

                Corporate Training
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Upskill Your Entire
                <span className="block text-cyan-600">
                  Organization with AI
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[15px] text-slate-600 leading-relaxed">
                Custom AI transformation programs for enterprise teams — from
                onboarding engineers to executive AI literacy. Delivered
                on-site, remote, or hybrid with measurable outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/corporate"
                  className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 text-white px-6 py-3 text-sm font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-200"
                >
                  Talk to Enterprise

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid gap-4">
              {stats.map((s) => (
                <div
                  key={s.v}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-cyan-100 text-cyan-600 grid place-items-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <s.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {s.k}
                    </div>

                    <div className="text-sm text-slate-500">
                      {s.v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}