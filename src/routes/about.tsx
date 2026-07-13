import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — AiGENThix" }, { name: "description", content: "AiGENThix is building the world's premium AI education platform for the AI-first enterprise." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Our Story</div>
            <h1 className="mt-3">
              We build the practitioners
              <br />
              <span className="text-navy/60">the AI era demands.</span>
            </h1>
          </div>
          <p className="mt-8 text-[17px] text-muted-foreground leading-relaxed">
            AiGENThix was founded on a simple conviction: traditional education
            cannot keep pace with the velocity of AI. We built a new kind of
            learning organization — one that combines the rigor of engineering,
            the pace of a modern research lab, and the practicality of
            enterprise deployment.
          </p>
          <p className="mt-5 text-[17px] text-muted-foreground leading-relaxed">
            Today we serve 12,000+ learners and 140+ enterprise clients across
            data, machine learning, MLOps, generative AI and agentic systems.
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
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
