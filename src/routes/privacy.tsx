import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — AiGENThix" }, { name: "description", content: "How AiGENThix collects, uses and protects your personal information." }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-24 prose prose-neutral">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Legal</div>
          <h1 className="mt-3">Privacy Policy</h1>
          <p className="mt-6 text-[15px] text-muted-foreground">Last updated: July 2026</p>
        </div>

        {[
          { h: "Overview", p: "This page describes how AiGENThix collects, uses, and protects the personal information of learners, prospects and enterprise clients." },
          { h: "Data we collect", p: "We collect information you provide directly (name, email, company), information from your use of our services (usage, device, cohort activity), and information from partners where applicable." },
          { h: "How we use data", p: "We use data to deliver programs, provide mentorship and career support, communicate with you, and improve the AiGENThix experience." },
          { h: "Sharing", p: "We do not sell personal information. We share limited data with vetted subprocessors under contract, and with hiring partners only with your consent." },
          { h: "Your rights", p: "You may request access, correction or deletion of your personal data by emailing privacy@aigenthix.ai." },
          { h: "Contact", p: "Questions? Reach us at privacy@aigenthix.ai." },
        ].map((s) => (
          <section key={s.h} className="mt-10">
            <h2>{s.h}</h2>
            <p className="mt-3 text-[15.5px] text-navy/80 leading-relaxed">{s.p}</p>
          </section>
        ))}
      </article>
    </SiteLayout>
  );
}
