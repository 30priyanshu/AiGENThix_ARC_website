import { motion } from "framer-motion";
import { Cpu, Users, Award, Layers, Building2, LineChart } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Practitioner-led curriculum",
    desc: "Every module authored and delivered by senior engineers shipping AI at scale.",
  },
  {
    icon: Layers,
    title: "Enterprise capstones",
    desc: "Solve real problems with production data — not toy datasets.",
  },
  {
    icon: Users,
    title: "1:1 mentorship",
    desc: "Weekly sessions with dedicated mentors from top AI organizations.",
  },
  {
    icon: Award,
    title: "Industry-recognized",
    desc: "Certificates recognized across our 140+ hiring partner network.",
  },
  {
    icon: Building2,
    title: "Corporate-ready",
    desc: "Programs are calibrated to enterprise governance, compliance and MLOps standards.",
  },
  {
    icon: LineChart,
    title: "Career acceleration",
    desc: "Structured interview prep, portfolio reviews, and direct placement pipelines.",
  },
];

export function WhyUs() {
  return (
    <section className="py-28 bg-muted/40 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-32 self-start">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Why AiGENThix
            </div>
            <h2 className="mt-3">
              A learning experience
              <br />
              engineered like{" "}
              <span className="text-navy/60">software.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] text-muted-foreground leading-relaxed">
              We built AiGENThix for the way modern AI teams actually work —
              rigorous, iterative, evidence-based.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl bg-card hairline p-6 hover:shadow-soft transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-xl text-navy">{it.title}</div>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
