import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — AiGENThix" }, { name: "description", content: "The terms governing your use of AiGENThix programs and services." }] }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Legal</div>
          <h1 className="mt-3">Terms & Conditions</h1>
          <p className="mt-6 text-[15px] text-muted-foreground">Last updated: July 2026</p>
        </div>

        {[
          { h: "Acceptance", p: "By enrolling in an AiGENThix program or using our services, you agree to these terms." },
          { h: "Enrollment & payment", p: "Program fees are due prior to cohort commencement. Refunds are governed by the specific cohort refund policy communicated at enrollment." },
          { h: "Intellectual property", p: "All curriculum, materials and platform content are the property of AiGENThix. Learners receive a limited, non-transferable license to use them for personal learning." },
          { h: "Code of conduct", p: "Learners agree to participate constructively and respect fellow learners, mentors and staff." },
          { h: "Limitation of liability", p: "AiGENThix's liability is limited to fees paid for the applicable program in the twelve months preceding the claim." },
          { h: "Contact", p: "Questions? Reach us at legal@aigenthix.ai." },
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
