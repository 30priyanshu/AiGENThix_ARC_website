import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is AiGENThix for?",
    a: "Students, working professionals, startups, and enterprises looking to build serious AI capability—from foundational concepts to production-ready AI systems."
  },
  {
    q: "Are the programs live or self-paced?",
    a: "Our programs are mentor-led, cohort-based experiences that combine live interactive sessions, self-paced learning, hands-on projects, and dedicated 1:1 mentorship."
  },
  {
    q: "Do you offer placement support?",
    a: "Yes. Learners receive portfolio reviews, mock interviews, career guidance, and access to our network of hiring partners."
  },
  {
    q: "Can you train my company's team?",
    a: "Absolutely. We design customized AI upskilling programs for organizations and deliver them on-site, remotely, or in hybrid formats."
  },
  {
    q: "What if I'm a complete beginner?",
    a: "No prior AI or Machine Learning experience is required. We offer beginner-friendly learning paths and advisors help you choose the right program."
  },
  {
    q: "Is there a certificate?",
    a: "Yes. Upon successful completion of your capstone project, you'll receive an industry-recognized AiGENThix Certificate along with verifiable digital credentials."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-24">

            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-700">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Everything You Need
              <span className="block text-cyan-600">
                To Know Before Joining
              </span>
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Explore answers to the most common questions about our AI
              programs, mentorship, certifications, career support, and
              enterprise training solutions.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-cyan-500" />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-2">

            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.q}
                  className="border-b border-slate-200"
                >
                  <button
                    onClick={() =>
                      setOpen(isOpen ? -1 : index)
                    }
                    className="group flex w-full items-center justify-between py-6 text-left"
                  >
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${isOpen
                        ? "text-cyan-600"
                        : "text-slate-900 group-hover:text-cyan-600"
                        }`}
                    >
                      {faq.q}
                    </h3>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0
                      }}
                      transition={{
                        duration: 0.25
                      }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                        }`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto"
                        }}
                        exit={{
                          opacity: 0,
                          height: 0
                        }}
                        transition={{
                          duration: 0.3
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p className="text-[15px] leading-8 text-slate-600">
                            {faq.a}
                          </p>
                        </div>
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