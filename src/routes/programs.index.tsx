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
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">All Programs</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-center text-navy">
              AI-driven learning &<br />
              <span className="text-cyan-500">corporate training.</span>
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
                className="group flex flex-col bg-white border border-cyan-100/50 rounded-[24px] overflow-hidden hover:border-cyan-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-500 h-full relative"
              >
                {/* Top Image Section */}
                <div className="relative h-[220px] w-full overflow-hidden bg-cyan-50/50">
                  <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Status Pills */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <span className="backdrop-blur-md bg-white/80 rounded-full px-3 py-1 text-sm font-semibold text-cyan-900 shadow-sm border border-cyan-200/50">
                      {p.duration}
                    </span>
                    <span className="backdrop-blur-md bg-white/80 rounded-full px-3 py-1 text-sm font-semibold text-cyan-900 shadow-sm border border-cyan-200/50">
                      {p.salary}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-8 relative overflow-hidden bg-white">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full bg-cyan-50/80 blur-3xl group-hover:bg-cyan-100/60 transition-colors duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <h2 className="text-xl font-bold text-navy group-hover:text-cyan-700 transition-colors">
                      {p.title}
                    </h2>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/30 shrink-0 mt-0.5">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed flex-1 relative z-10">
                    {p.summary}
                  </p>

                  {/* Topics Grid */}
                  <div className="mt-6 pt-6 border-t border-cyan-100/50 flex flex-wrap gap-2 relative z-10">
                    {p.topics.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50/80 text-cyan-700 border border-cyan-100/50 transition-colors group-hover:bg-cyan-100/80 group-hover:border-cyan-200/50"
                      >
                        {t}
                      </span>
                    ))}
                    {p.topics.length > 5 && (
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
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
