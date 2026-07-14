import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — AiGENThix" }, { name: "description", content: "Talk to an AiGENThix program advisor or enterprise team." }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="relative -mt-24 pt-[160px] pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Contact</div>
            <h1 className="mt-3 text-white">
              Let's talk about
              <br />
              <span className="text-white/60">what you'll build.</span>
            </h1>
            <p className="mt-6 text-[15px] text-white/80 max-w-md mx-auto leading-relaxed">
              A program advisor will get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>

              <div className="mt-10 space-y-4">
                {[
                  { icon: Mail, label: "hello@aigenthix.ai" },
                  { icon: Phone, label: "+91 80 4718 5000" },
                  { icon: MapPin, label: "Bengaluru · Mumbai · Remote" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 text-[15px] text-navy/85">
                    <span className="h-9 w-9 rounded-full bg-muted grid place-items-center text-primary">
                      <c.icon className="h-4 w-4" />
                    </span>
                    {c.label}
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl hairline bg-card p-8 md:p-10"
            >
              <div className="grid gap-4">
                {[
                  { name: "name", label: "Full name", type: "text" },
                  { name: "email", label: "Work email", type: "email" },
                  { name: "company", label: "Company (optional)", type: "text" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{f.label}</span>
                    <input required={f.name !== "company"} type={f.type} name={f.name} className="mt-2 w-full rounded-xl hairline bg-background px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">How can we help?</span>
                  <textarea required rows={5} className="mt-2 w-full rounded-xl hairline bg-background px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </label>
              </div>
              <button className="mt-6 w-full rounded-full bg-navy text-primary-foreground py-3.5 text-sm font-medium hover:bg-navy/90 transition-colors">
                {sent ? "Thank you — we'll be in touch" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
