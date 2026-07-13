import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — AiGENThix" }, { name: "description", content: "Answers to the most common questions about AiGENThix programs, pricing and outcomes." }] }),
  component: () => (
    <SiteLayout>
      <FAQ />
    </SiteLayout>
  ),
});
