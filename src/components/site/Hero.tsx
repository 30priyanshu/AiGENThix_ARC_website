import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Using program images for the carousel
import hero1Img from "@/assets/hero-1.jpg";
import hero2Img from "@/assets/hero-2.jpg";
import hero3Img from "@/assets/hero-3.jpg";
import hero4Img from "@/assets/hero-4.jpg";

const slides = [
  {
    id: 1,
    title: "Master Agentic AI Systems",
    tagline: "Autonomous systems for the modern enterprise.",
    desc: "Architect AI agents with planning, memory and tool-use — the foundation of the next wave of enterprise automation.",
    image: hero1Img,
    link: "/programs/agentic-ai",
    cta: "Explore Program"
  },
  {
    id: 2,
    title: "Production-Grade Data Engineering",
    tagline: "Design pipelines that power AI at scale.",
    desc: "Master batch & streaming data systems, cloud warehouses, and pipelines used by leading enterprises.",
    image: hero2Img,
    link: "/programs/data-engineering",
    cta: "Explore Program"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    tagline: "Ship production ML that businesses trust.",
    desc: "Go beyond notebooks — from Python foundations to industry ML systems built on TensorFlow and modern MLOps.",
    image: hero3Img,
    link: "/programs/ai-ml",
    cta: "Explore Program"
  },
  {
    id: 4,
    title: "Transform Your Enterprise",
    tagline: "Corporate training built for an AI-first future.",
    desc: "Upskill your workforce with customized, mentor-led AI and Data programs designed to solve your specific business challenges.",
    image: hero4Img,
    link: "/corporate",
    cta: "For Enterprise"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative -mt-24 h-[100vh] min-h-[600px] w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover opacity-70"
          />
          {/* Neutral dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center pt-20">
        <div className="mx-auto w-full max-w-7xl px-6 flex justify-center text-center">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center"
              >


                <h1 className="text-center text-white text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight drop-shadow-sm">
                  {slides[current].title}
                </h1>

                <p className="mt-6 text-xl sm:text-2xl font-display text-white/90 drop-shadow-sm">
                  {slides[current].tagline}
                </p>

                <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
                  {slides[current].desc}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    to={slides[current].link}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                  >
                    {slides[current].cta}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${current === idx ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
