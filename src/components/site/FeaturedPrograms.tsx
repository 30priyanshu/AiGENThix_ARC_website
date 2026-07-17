import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/data/programs";

export function FeaturedPrograms() {
  return (
    <section className="py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-2">
            Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Six learning paths.
            <br />
            <span className="text-navy/60">One AI-first future.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Each program is designed with industry practitioners, benchmarked
            against enterprise expectations, and delivered with mentor-led rigor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            >
              <Link
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="group relative flex flex-col justify-end rounded-[20px] overflow-hidden hairline hover:shadow-elegant transition-all duration-500 h-[240px] max-w-sm mx-auto w-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                
                {/* Content Overlay */}
                <div className="relative p-5 flex flex-col justify-end h-full text-white">
                  {/* Status Pills Removed per user request */}
                  <div className="flex items-start justify-between gap-3 mt-4">
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {p.title}
                    </h3>
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white shrink-0">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  
                  <p className="mt-2 text-xs text-white/80 leading-relaxed line-clamp-2">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
