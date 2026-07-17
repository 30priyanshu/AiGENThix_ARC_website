import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, Users } from "lucide-react";

// Use the requested hero images instead of program images
import hero1Img from "@/assets/hero-1.jpg";
import hero2Img from "@/assets/hero-2.jpg";
import hero3Img from "@/assets/hero-3.jpg";
import hero4Img from "@/assets/hero-4.jpg";

const ROTATING_WORDS = [
  "AI career.",
  "GenAI skills.",
  "Data future.",
  "MLOps mastery.",
  "Agentic edge.",
];

const GOAL_CHIPS = [
  { label: "GenAI Courses", to: "/programs/generative-ai" },
  { label: "Data Science", to: "/programs/data-analytics" },
  { label: "AI & ML", to: "/programs/ai-ml" },
  { label: "MLOps", to: "/programs/mlops" },
  { label: "Data Engineering", to: "/programs/data-engineering" },
  { label: "Agentic AI", to: "/programs/agentic-ai" },
];

const CARD_SLIDES = [
  { image: hero1Img, title: "Agentic AI" },
  { image: hero2Img, title: "Data Engineering" },
  { image: hero3Img, title: "Machine Learning" },
  { image: hero4Img, title: "Generative AI" },
];
const AUTO_MS = 4200;

export function Hero() {
  const [word, setWord] = useState(0);
  const [card, setCard] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWord((p) => (p + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCard((p) => (p + 1) % CARD_SLIDES.length), AUTO_MS);
    return () => clearInterval(id);
  }, []);

  const slide = CARD_SLIDES[card];

  return (
    <section className="relative overflow-hidden -mt-24 pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900">
      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black 20%, transparent 75%)",
        }}
      />
      {/* accent glow */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full blur-3xl bg-blue-200/50" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full blur-[100px] bg-blue-300/30" />

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-center min-h-[560px]">
          {/* LEFT COLUMN - Strictly left aligned */}
          <div className="text-left">


            {/* Smaller H1 Font */}
            <h1 className="mt-6 font-display font-semibold leading-[1.1] tracking-tight text-4xl md:text-5xl lg:text-6xl text-left text-slate-900">
              <span className="text-slate-900/95">Master tomorrow's</span>
              <br />
              <span className="relative inline-block min-h-[1.1em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={word}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                    className="inline-block italic text-primary"
                  >
                    {ROTATING_WORDS[word]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed text-slate-600 text-left">
              Excel with AiGENThix — industry-aligned AI, Data & MLOps programs delivered
              by practitioners who ship to production.
            </p>

            {/* Search-style CTA */}
            <div className="mt-8 max-w-lg">
              <Link
                to="/programs"
                className="group flex items-center gap-3 rounded-full bg-white/80 p-1.5 pl-5 shadow-sm hover:bg-white transition-all border border-blue-100 backdrop-blur-sm"
              >
                <Search className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="flex-1 py-2 text-[14px] text-slate-600 text-left">
                  Tell us what you're looking to learn
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground group-hover:bg-primary/90 transition-colors shadow-sm">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <div className="mt-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2.5 text-left">
                  Or select your goal
                </div>
                <div className="flex flex-wrap gap-2 justify-start">
                  {GOAL_CHIPS.map((g) => (
                    <Link
                      key={g.label}
                      to={g.to}
                      className="rounded-full border border-blue-200 bg-white/60 hover:bg-white hover:border-primary/50 px-3.5 py-1.5 text-[12.5px] text-slate-700 transition-all shadow-sm"
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-start gap-2.5 text-[13px] text-slate-600">
              <Users className="h-4 w-4 text-primary" />
              Join the community of{" "}
              <span className="font-display font-medium text-slate-900">12,000+</span> learners.
            </div>
          </div>

          {/* RIGHT COLUMN - Proper image framing */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[600px] rounded-[2rem] overflow-hidden border border-blue-100 bg-white shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={card}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                    <h3 className="font-display text-2xl md:text-3xl leading-[1.1] text-white">
                      Master{" "}
                      <span className="italic text-primary">{slide.title}</span>
                    </h3>
                    <Link
                      to="/programs"
                      className="mt-4 inline-flex items-center gap-2 text-[13px] text-white/90 group w-fit"
                    >
                      <span className="underline-offset-4 group-hover:underline">
                        Explore programs
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* dots */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center lg:justify-end lg:pr-8 gap-1.5">
              {CARD_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCard(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === card ? "w-8 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
