import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowUpRight } from "lucide-react";

const roles = [
  { title: "Senior Curriculum Engineer — Generative AI", location: "Bengaluru / Remote", team: "Curriculum" },
  { title: "MLOps Lead Instructor", location: "Bengaluru / Remote", team: "Instruction" },
  { title: "Enterprise Program Manager", location: "Mumbai", team: "Enterprise" },
  { title: "Learning Designer — Agentic Systems", location: "Remote", team: "Curriculum" },
  { title: "Career Success Manager", location: "Bengaluru", team: "Careers" },
];

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — AiGENThix" }, { name: "description", content: "Join the team building the world's premium AI learning organization." }] }),
  component: Careers,
});

function Careers() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Careers</div>
            <h1 className="mt-3">
              Build the organization
              <br />
              <span className="text-navy/60">that trains the AI era.</span>
            </h1>
          </div>
          <div className="mt-16 divide-y divide-hairline border-y border-hairline">
            {roles.map((r) => (
              <Link key={r.title} to="/contact" className="group flex items-center justify-between gap-6 py-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-primary">{r.team}</div>
                  <div className="mt-1 font-display text-2xl md:text-3xl text-navy group-hover:text-primary transition-colors">{r.title}</div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span className="hidden md:inline">{r.location}</span>
                  <ArrowUpRight className="h-5 w-5 text-navy/40 group-hover:text-primary transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
