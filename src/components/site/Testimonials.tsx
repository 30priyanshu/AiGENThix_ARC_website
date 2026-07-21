import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
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
    role: "CEO and Founder",
    img: avatar2,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-15">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-cyan-100" />

      {/* Glow Effects */}
      <div className="absolute -top-40 left-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[120px]" />
      <div className="absolute top-32 right-0 h-[400px] w-[400px] rounded-full bg-cyan-400/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Learn from India's
            <span className="text-cyan-600"> Top AI Experts</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
            Industry leaders, researchers and founders who have built real AI
            products, trained thousands of professionals and continue shaping
            the future of Artificial Intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">

          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
              }}
              className="relative mt-8 flex flex-col items-center rounded-3xl border border-cyan-100 bg-white/90 p-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(6,182,212,0.15)]"
            >
              {/* Avatar */}
              <div className="absolute -top-11">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-xl"
                />
              </div>

              <div className="mt-11">
                <h3 className="text-lg font-bold text-slate-900">
                  {t.name}
                </h3>

                <p className="mt-1 text-[13px] leading-5 text-slate-500">
                  {t.role}
                </p>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="mt-3 inline-flex rounded-full bg-cyan-50 p-2 text-cyan-600 transition hover:bg-cyan-100 hover:text-cyan-700"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 w-full border-t border-slate-100 pt-5">
                <blockquote className="text-[13.5px] leading-7 text-slate-600">
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