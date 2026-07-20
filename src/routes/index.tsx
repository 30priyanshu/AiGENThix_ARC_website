import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { PopularPrograms } from "@/components/site/PopularPrograms";
import { LeadershipRoles } from "@/components/site/LeadershipRoles";
import { Verticals } from "@/components/site/Verticals";
import { WhyUs } from "@/components/site/WhyUs";
import { Roadmap } from "@/components/site/Roadmap";
import { CorporateCTA } from "@/components/site/CorporateCTA";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";

import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustedBy />
      <PopularPrograms />
      <Testimonials />
      <LeadershipRoles />
      <WhyUs />
      <Roadmap />
      <CorporateCTA />
      <FAQ />
      <ContactForm />
    </SiteLayout>
  );
}
