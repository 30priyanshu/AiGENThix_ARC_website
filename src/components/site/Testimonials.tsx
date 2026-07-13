import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const items = [
  {
    quote:
      "AiGENThix rebuilt how our engineering org thinks about ML systems. The MLOps cohort paid for itself in a quarter.",
    name: "Priya Menon",
    role: "VP Engineering, Fintech Unicorn",
    img: avatar1,
  },
  {
    quote:
      "The rigor was unmatched. Real production data, real code reviews, real deployment. This is how AI education should be.",
    name: "Rohan Kapoor",
    role: "Senior ML Engineer, Big 4",
    img: avatar2,
  },
  {
    quote:
      "We ran three cohorts across 400 employees. Measurable uplift in shipped AI features across every business unit.",
    name: "Anna Whitmore",
    role: "Chief People Officer, SaaS Enterprise",
    img: avatar3,
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-muted/40 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Voices
          </div>
          <h2 className="mt-3">
            The people who shipped
            <br />
            <span className="text-navy/60">their careers forward.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl bg-card hairline p-8 flex flex-col"
            >
              <div className="font-display text-5xl text-navy/20 leading-none">"</div>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-navy/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-hairline">
                <img
                  src={t.img}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm text-navy font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
