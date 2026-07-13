import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Who is AiGENThix for?", a: "Students, working professionals, startups and enterprises looking to build serious AI capability — from foundations to production systems." },
  { q: "Are the programs live or self-paced?", a: "Programs are cohort-based and mentor-led, with live sessions, async project work, and structured 1:1 support." },
  { q: "Do you offer placement support?", a: "Yes. Every learner gets access to our 140+ hiring partner network, structured interview preparation, and portfolio reviews." },
  { q: "Can you train my company's team?", a: "Absolutely. Our corporate programs are custom-designed and delivered on-site, remote or hybrid — for 10 to 1,000+ employees." },
  { q: "What if I'm a complete beginner?", a: "We offer foundational tracks that assume no prior ML experience. Program advisors will help you pick the right entry point." },
  { q: "Is there a certificate?", a: "Yes — an industry-recognized AiGENThix certificate is awarded upon capstone completion, along with digital credentials." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              FAQ
            </div>
            <h2>
              Answers, before
              <br />
              <span className="text-navy/60">you ask.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="bg-card rounded-2xl p-6 border border-hairline shadow-sm transition-all hover:shadow-md">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="font-sans font-semibold text-lg md:text-xl text-navy">
                      {f.q}
                    </span>
                    <span
                      className={`h-9 w-9 grid place-items-center rounded-full hairline shrink-0 transition-transform ${
                        isOpen ? "rotate-45 bg-navy text-primary-foreground" : "text-navy"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pr-16 text-[15px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
