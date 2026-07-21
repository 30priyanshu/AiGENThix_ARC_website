import { motion } from "framer-motion";

const steps = [
  {
    phase: "01",
    title: "AI Foundation",
    duration: "Weeks 1–6",
    body: "Build strong fundamentals in Python, SQL, statistics, and AI engineering.",
  },
  {
    phase: "02",
    title: "Machine Learning",
    duration: "Weeks 7–12",
    body: "Learn supervised learning, deep learning, model evaluation, and deployment.",
  },
  {
    phase: "03",
    title: "MLOps & Cloud",
    duration: "Weeks 13–18",
    body: "Master Docker, Kubernetes, CI/CD, monitoring, and production workflows.",
  },
  {
    phase: "04",
    title: "Generative AI",
    duration: "Weeks 19–24",
    body: "Work with LLMs, Prompt Engineering, RAG systems, and AI applications.",
  },
  {
    phase: "05",
    title: "Agentic AI",
    duration: "Weeks 25–28",
    body: "Build autonomous agents, memory systems, tool calling, and multi-agent workflows.",
  },
  {
    phase: "06",
    title: "Capstone Project",
    duration: "Weeks 29–30",
    body: "Deploy a production-ready AI solution and build a job-ready portfolio.",
  },
];

export function Roadmap() {
  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-100 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-50 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-cyan-600 text-sm font-medium">
            Learning Roadmap
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Become an AI Engineer
          </h2>

          <p className="mt-3 text-sm text-slate-600">
            A structured learning path from fundamentals to production-ready AI.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Zig-Zag Path */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[240px] h-full pointer-events-none">
            <div className="absolute left-1/2 top-[65px] -translate-x-1/2 h-[780px] w-[280px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 280 780"
                fill="none"
              >
                <path
                  d="
                    M140 20
                    C140 70,250 70,250 130
                    C250 190,30 190,30 250
                    C30 310,250 310,250 370
                    C250 430,30 430,30 490
                    C30 550,250 550,250 610
                    C250 670,140 670,140 740
                  "
                  stroke="#06B6D4"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="140" cy="20" r="7" fill="#06B6D4" />
                <circle cx="250" cy="130" r="7" fill="#06B6D4" />
                <circle cx="30" cy="250" r="7" fill="#06B6D4" />
                <circle cx="250" cy="370" r="7" fill="#06B6D4" />
                <circle cx="30" cy="490" r="7" fill="#06B6D4" />
                <circle cx="250" cy="610" r="7" fill="#06B6D4" />
                <circle cx="140" cy="740" r="7" fill="#06B6D4" />
              </svg>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className={`
                  relative flex items-center
                  h-[130px]
                  ${index % 2 === 0 ? "justify-start" : "justify-end"}
                `}
              >
                <div className="w-full lg:w-[380px] rounded-2xl bg-white border border-cyan-100 p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl font-bold text-cyan-500 leading-none">
                      {step.phase}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="text-xs font-medium text-cyan-600 mt-1">
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}