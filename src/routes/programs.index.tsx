import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PROGRAMS } from "@/data/programs";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — AiGENThix" },
      { name: "description", content: "Six industry-aligned AI learning paths: Data Engineering, Analytics, ML, MLOps, Generative AI and Agentic AI." },
    ],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
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
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">All Programs</div>
            <h1 className="mt-3 text-navy">
              AI-driven learning &<br />
              <span className="text-navy/60">corporate training.</span>
            </h1>
            <p className="mt-6 text-[17px] text-navy/80 max-w-2xl mx-auto leading-relaxed">
              Industry-aligned programs empowering individuals, upskilling teams,
              and preparing enterprises for an AI-first future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p) => (
              <Link
                key={p.slug}
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col bg-card rounded-[24px] overflow-hidden hairline hover:shadow-elegant transition-all duration-500 h-full"
              >
                {/* Top Image Section */}
                <div className="relative h-[220px] w-full overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Status Pills */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="glass-panel rounded-full px-3 py-1 text-sm font-semibold font-medium text-navy/90 shadow-sm border border-white/20">
                      {p.duration}
                    </span>
                    <span className="glass-panel rounded-full px-3 py-1 text-sm font-semibold font-medium text-navy/90 shadow-sm border border-white/20">
                      {p.salary}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2>
                      {p.title}
                    </h2>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-muted text-navy/60 transition-all duration-300 group-hover:bg-primary group-hover:text-white shrink-0 mt-0.5">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed flex-1">
                    {p.summary}
                  </p>

                  {/* Topics Grid */}
                  <div className="mt-6 pt-6 border-t border-hairline flex flex-wrap gap-1.5">
                    {p.topics.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-sm font-semibold px-2.5 py-1 rounded-full bg-muted/70 text-navy/70 border border-hairline"
                      >
                        {t}
                      </span>
                    ))}
                    {p.topics.length > 5 && (
                      <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-muted/50 text-navy/50 border border-transparent">
                        +{p.topics.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
