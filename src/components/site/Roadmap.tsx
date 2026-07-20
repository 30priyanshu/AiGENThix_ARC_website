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
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-100 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-50 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-cyan-600 text-sm font-medium">
            Learning Roadmap
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Become an AI Engineer
          </h2>

          <p className="mt-4 text-sm text-slate-600">
            A structured learning path from fundamentals to production-ready AI.
          </p>
        </div>

        <div className="relative">
          {/* Center Zig Zag Path */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[260px] h-full pointer-events-none">

            <div className="hidden lg:block absolute left-1/2 top-[95px] -translate-x-1/2 h-[1140px] w-[300px] pointer-events-none">

              <svg
                className="w-full h-full"
                viewBox="0 0 300 1140"
                fill="none"
              >
                <path
                  d="
      M150 20
      C150 90,270 90,270 190
      C270 290,30 290,30 390
      C30 490,270 490,270 590
      C270 690,30 690,30 790
      C30 890,270 890,270 990
      C270 1070,150 1070,150 1120
      "
                  stroke="#06B6D4"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="150" cy="20" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
                <circle cx="270" cy="190" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
                <circle cx="30" cy="390" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
                <circle cx="270" cy="590" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
                <circle cx="30" cy="790" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
                <circle cx="270" cy="990" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
                <circle cx="150" cy="1120" r="8" fill="#06B6D4" stroke="white" strokeWidth="4" />
              </svg>

            </div>

          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
        relative flex items-center
        h-[190px]
        ${index % 2 === 0 ? "justify-start" : "justify-end"}
      `}
              >
                {/* Card */}
                <div className="w-full lg:w-[430px] rounded-[28px] bg-white border border-cyan-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300">

                  <div className="flex gap-3 items-start">
                    <span className="text-[34px] font-bold text-cyan-500 leading-none">
                      {step.phase}
                    </span>

                    <div>
                      <h3 className="text-[28px] font-bold text-slate-900 leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm font-medium text-cyan-600 mt-1">
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-8 text-slate-600">
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