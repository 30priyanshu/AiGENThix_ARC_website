import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — AiGENThix" }, { name: "description", content: "AiGENThix is building the world's premium AI education platform for the AI-first enterprise." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative -mt-24 pt-[160px] pb-20 overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-[#EEF7FF] to-[#DDEEFF]">

        {/* Soft Background Glow */}
        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-blue-50/40"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">

            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Our Story
            </div>

            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900">
              We build the practitioners
              <br />
              <span className="text-navy/60">the AI era demands.</span>
            </h1>
            <p className="mt-8 text-[17px] text-slate-700 leading-relaxed">
              AiGENThix was founded on a simple conviction: traditional education
              cannot keep pace with the velocity of AI. We built a new kind of
              learning organization — one that combines the rigor of engineering,
              the pace of a modern research lab, and the practicality of
              enterprise deployment.
            </p>
            <p className="mt-5 text-[17px] text-navy/60 leading-relaxed">
              Today we serve 12,000+ learners and 140+ enterprise clients across
              data, machine learning, MLOps, generative AI and agentic systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "2021", v: "Founded" },
              { k: "12K+", v: "Learners" },
              { k: "140+", v: "Enterprise clients" },
              { k: "92%", v: "Placement rate" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl hairline bg-card p-6">
                <div className="font-display text-3xl text-navy">{s.k}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
