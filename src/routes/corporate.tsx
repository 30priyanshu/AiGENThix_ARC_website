import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CorporateCTA } from "@/components/site/CorporateCTA";

export const Route = createFileRoute("/corporate")({
  head: () => ({ meta: [{ title: "Corporate Training — AiGENThix" }, { name: "description", content: "Custom AI transformation programs for enterprise teams — engineers to executives." }] }),
  component: Corporate,
});

function Corporate() {
  const items = [
    { t: "Executive AI Literacy", d: "Strategic AI fluency for leadership teams — governance, opportunity, risk." },
    { t: "Engineering Upskilling", d: "Hands-on transformation for engineering orgs from foundations to MLOps." },
    { t: "Applied AI for Business", d: "Analyst and PM tracks focused on high-leverage AI in day-to-day workflows." },
    { t: "Custom Enterprise Capstones", d: "Solve real problems with your data — under NDA, with our senior mentors." },
  ];
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Enterprise</div>
            <h1 className="mt-3">
              AI transformation,
              <br />
              <span className="text-navy/60">delivered end-to-end.</span>
            </h1>
            <p className="mt-6 text-[17px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We partner with enterprise teams from onboarding to executive AI
              literacy — designing custom programs that produce measurable AI
              adoption within a quarter.
            </p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {items.map((i) => (
              <div key={i.t} className="rounded-3xl hairline bg-card p-8">
                <div className="font-display text-2xl text-navy">{i.t}</div>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CorporateCTA />
    </SiteLayout>
  );
}
