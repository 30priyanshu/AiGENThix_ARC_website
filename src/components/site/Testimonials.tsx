import { motion } from "framer-motion";
import avatar1 from "@/assets/Arpit sir.jpeg";
import avatar2 from "@/assets/Srikant sir.png";
import avatar3 from "@/assets/parth sir.png";

const items = [
  {
    quote:
      "A highly accomplished Chief AI Scientist with over 18 years of experience spanning AI, Gen AI, Machine Learning. Leading AI innovation, research, and corporate training globally.",
    name: "Dr. Arpit Yadav",
    role: "CEO & Co-Founder, Chief AI Scientist",
    img: avatar1,
  },
  {
    quote:
      "I champion innovation-led education, guiding faculty and students in cutting-edge areas such as Generative AI, Agentic AI, NLP, and Computer Vision while fostering industry-academia collaboration.",
    name: "Dr. Salur Srikant Patnaik",
    role: "Dean & AI Research Scientist",
    img: avatar2,
  },
  {
    quote:
      "Build AI that's ethical, explainable, and sustainable. We create AI solutions across finance, healthcare, and education that deliver impact without compromising on transparency.",
    name: "Parth Saarthi",
    role: "Machine Learning Engineer & Founder",
    img: avatar3,
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-muted/40 border-y border-hairline">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-2">
            LEARNER TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Hear from our graduates first-hand
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl bg-white shadow-soft border border-gray-100 p-8 flex flex-col items-center text-center relative mt-8"
            >
              <div className="absolute -top-12">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-24 w-24 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>
              <div className="mt-12 mb-6">
                <div className="text-lg text-navy font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.role}</div>
              </div>
              <div className="relative pt-6 border-t border-gray-100 w-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-primary/40 font-display text-4xl leading-none">
                  "
                </div>
                <blockquote className="text-[15px] leading-relaxed text-navy/80 italic">
                  {t.quote}
                </blockquote>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
