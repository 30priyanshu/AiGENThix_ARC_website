import { motion } from "framer-motion";

const steps = [
  { phase: "01", title: "Foundations", body: "Python, statistics, SQL, cloud primitives — establish an engineering baseline." },
  { phase: "02", title: "Applied ML", body: "Classical ML, deep learning, evaluation frameworks and reproducible experiments." },
  { phase: "03", title: "MLOps & Systems", body: "Docker, Kubernetes, CI/CD, model registries, monitoring, drift and retraining." },
  { phase: "04", title: "Generative AI", body: "Transformers, RAG architectures, prompt engineering, evaluation and safety." },
  { phase: "05", title: "Agentic Systems", body: "Planning, memory, tool-use, multi-agent orchestration for enterprise workflows." },
  { phase: "06", title: "Capstone & Career", body: "Ship a production-grade portfolio project and interview with hiring partners." },
];

export function Roadmap() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            The Roadmap
          </div>
          <h2 className="mt-3">
            A structured path from
            <br />
            <span className="text-navy/60">first principles to production.</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-hairline" />
          <div className="space-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-2 md:gap-16 items-start ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="pl-12 md:pl-0 md:[direction:ltr] md:text-right md:pr-8">
                  <div className="font-display text-6xl md:text-7xl text-navy/10 leading-none">
                    {s.phase}
                  </div>
                  <div className="mt-2 font-display text-3xl text-navy">{s.title}</div>
                </div>
                <div className="pl-12 md:pl-8 md:[direction:ltr] mt-3 md:mt-6">
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
                    {s.body}
                  </p>
                </div>

                <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-3 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
