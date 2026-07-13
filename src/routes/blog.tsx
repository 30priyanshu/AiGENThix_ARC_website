import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { slug: "state-of-genai-2026", title: "The State of Generative AI in 2026", date: "June 2026", excerpt: "How enterprise GenAI moved from prototype to production — and what comes next.", tag: "Research" },
  { slug: "mlops-blueprint", title: "A blueprint for enterprise MLOps", date: "May 2026", excerpt: "The reference architecture we recommend to Fortune 500 teams shipping AI at scale.", tag: "Engineering" },
  { slug: "hiring-ai-2026", title: "Hiring AI talent: what actually works", date: "April 2026", excerpt: "Data from 400 hires across our partner network — and the interview loops that produce results.", tag: "Careers" },
  { slug: "agentic-systems", title: "Agentic systems, demystified", date: "March 2026", excerpt: "Planning, memory, tool-use and the enterprise workflows they unlock in the next two years.", tag: "Research" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Insights — AiGENThix" }, { name: "description", content: "The AiGENThix Dispatch: research, engineering essays and hiring intelligence for the AI-first enterprise." }] }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Insights</div>
            <h1 className="mt-3">
              The Dispatch.
              <br />
              <span className="text-navy/60">Signal, not noise.</span>
            </h1>
          </div>
          <div className="mt-16 divide-y divide-hairline border-y border-hairline">
            {posts.map((p) => (
              <Link key={p.slug} to="/blog" className="group flex flex-col md:flex-row md:items-center gap-6 py-10">
                <div className="md:w-32 shrink-0">
                  <div className="text-xs uppercase tracking-[0.18em] text-primary">{p.tag}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.date}</div>
                </div>
                <div className="flex-1">
                  <h2 className="group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[15px] text-muted-foreground max-w-2xl">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-navy/40 group-hover:text-primary transition-all group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
