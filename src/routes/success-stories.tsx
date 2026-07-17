import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import avatar1 from "@/assets/Arpit sir.jpeg";
import avatar2 from "@/assets/Srikant sir.png";
import avatar3 from "@/assets/parth sir.png";
const stories = [
  { img: avatar1, name: "Dr. Arpit Yadav", role: "CEO & Co-Founder", before: "Backend Lead", after: "VP Engineering, Fintech", body: "AiGENThix rebuilt how our engineering org thinks about ML systems." },
  { img: avatar2, name: "Dr. Salur Srikant Patnaik", role: "Sr. ML Engineer", before: "Data Analyst", after: "Senior ML Engineer, Big 4", body: "The rigor was unmatched. Real production data. Real deployment." },
  { img: avatar3, name: "Parth Saarthi", role: "CPO", before: "HR Director", after: "Chief People Officer, SaaS", body: "Measurable uplift in shipped AI features across every business unit." },
];

export const Route = createFileRoute("/success-stories")({
  head: () => ({ meta: [{ title: "Success Stories — AiGENThix" }, { name: "description", content: "Real graduates. Real careers. See how AiGENThix learners have transformed their trajectories." }] }),
  component: SuccessStories,
});

function SuccessStories() {
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
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Success Stories</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-center text-navy">
              Careers, quietly
              <br />
              <span className="text-navy/60">rewritten.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
