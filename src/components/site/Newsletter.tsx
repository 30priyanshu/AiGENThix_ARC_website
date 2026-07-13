import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-[32px] hairline bg-muted/60 p-10 md:p-16 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                The Dispatch
              </div>
              <h2 className="mt-3 text-left text-navy max-w-xl">
                AI intelligence, engineered
                <br />
                <span className="text-navy/60">for practitioners.</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] text-muted-foreground">
                A weekly briefing on the AI systems, tools and hiring trends
                shaping the enterprise. No noise. Ever.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="flex items-center gap-2 rounded-full hairline bg-background p-1.5 pl-5 shadow-soft"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 bg-transparent text-sm text-navy placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-navy text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-navy/90 transition-colors"
              >
                {sent ? "Subscribed" : "Subscribe"}
                {!sent && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
