import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const stories = [
  { img: avatar1, name: "Priya Menon", role: "VP Engineering", before: "Backend Lead", after: "VP Engineering, Fintech", body: "AiGENThix rebuilt how our engineering org thinks about ML systems." },
  { img: avatar2, name: "Rohan Kapoor", role: "Sr. ML Engineer", before: "Data Analyst", after: "Senior ML Engineer, Big 4", body: "The rigor was unmatched. Real production data. Real deployment." },
  { img: avatar3, name: "Anna Whitmore", role: "CPO", before: "HR Director", after: "Chief People Officer, SaaS", body: "Measurable uplift in shipped AI features across every business unit." },
];

export const Route = createFileRoute("/success-stories")({
  head: () => ({ meta: [{ title: "Success Stories — AiGENThix" }, { name: "description", content: "Real graduates. Real careers. See how AiGENThix learners have transformed their trajectories." }] }),
  component: SuccessStories,
});

function SuccessStories() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Success Stories</div>
            <h1 className="mt-3">
              Careers, quietly
              <br />
              <span className="text-navy/60">rewritten.</span>
            </h1>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <article key={s.name} className="rounded-3xl overflow-hidden hairline bg-card">
                <img src={s.img} alt={s.name} loading="lazy" className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <div className="font-display text-2xl text-navy">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
                  <p className="mt-4 text-[14.5px] text-navy/85 leading-relaxed">"{s.body}"</p>
                  <div className="mt-5 pt-5 border-t border-hairline flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{s.before}</span>
                    <span className="text-primary">→</span>
                    <span className="text-navy font-medium">{s.after}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
