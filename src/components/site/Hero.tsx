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
    <section className="relative overflow-hidden -mt-24 pt-38 pb-28 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900">
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
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-center min-h-[450px]">
          {/* LEFT COLUMN */}
          <div className="text-left">

            {/* Heading */}
            <h1 className="font-sans text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-slate-900">
              Master Tomorrow's
              <span className=" block text-cyan-500">
                AI Career
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[14px] md:text-base leading-7 text-slate-600 font-sans">
              Gain practical AI and data skills with expert-led programs
              designed for today's fastest-growing careers.
            </p>
            {/* Search Section */}
            <div className="mt-8 max-w-xl">

              <div className="flex items-center bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">

                <div className="pl-5">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>

                <input
                  type="text"
                  placeholder="Search AI, Data Science, Machine Learning..."
                  className="flex-1 px-4 py-3.5 text-sm text-slate-700 bg-transparent outline-none font-sans"
                />

                <Link
                  to="/programs"
                  className="m-2 flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-600 transition-all duration-300"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              {/* Popular Topics */}
              <div className="mt-5">
                <p className="text-sm font-medium text-slate-700 mb-3">
                  Popular Learning Paths
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    "Generative AI",
                    "Machine Learning",
                    "Data Science",
                    "MLOps",
                    "Agentic AI",
                    "Data Engineering",
                  ].map((item) => (
                    <button
                      key={item}
                      className="font-sans rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
                    >
                      {item}
                    </button>
                  ))}

                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50">
                <Users className="h-4 w-4 text-cyan-600" />
              </div>

              <div>
                <p className="font-sans text-xs text-slate-500">
                  Trusted by
                </p>

                <p className="font-sans text-sm font-semibold text-slate-900">
                  12,000+ Learners Worldwide
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN - Premium Image Slider */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[520px] rounded-[28px] overflow-hidden shadow-2xl bg-black">

              <div className="relative aspect-square">

                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={card}
                    initial={{ x: 120 }}
                    animate={{ x: 0 }}
                    exit={{ x: -120 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover block"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-7">

                      <motion.h3
                        key={slide.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2,
                        }}
                        className="font-sans text-2xl md:text-3xl font-bold text-white"
                      >
                        Master{" "}
                        <span className="text-cyan-400">
                          {slide.title}
                        </span>
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                        }}
                      >
                        <Link
                          to="/programs"
                          className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 hover:text-cyan-300 transition-colors group"
                        >
                          Explore programs

                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>

                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center lg:justify-end lg:pr-8 gap-2">
              {CARD_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCard(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 ${idx === card
                    ? "w-8 h-2 bg-cyan-500"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}