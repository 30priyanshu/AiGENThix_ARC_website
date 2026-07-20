import { motion } from "framer-motion";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    title: "Practitioner-led curriculum",
    desc: "Every module authored and delivered by senior engineers shipping AI at scale.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    title: "Enterprise capstones",
    desc: "Solve real problems with production data — not toy datasets.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    title: "1:1 mentorship",
    desc: "Weekly sessions with dedicated mentors from top AI organizations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80",
    title: "Industry-recognized",
    desc: "Certificates recognized across our 140+ hiring partner network.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    title: "Corporate-ready",
    desc: "Programs are calibrated to enterprise governance, compliance and MLOps standards.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    title: "Career acceleration",
    desc: "Structured interview prep, portfolio reviews, and direct placement pipelines.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-cyan-50" />

      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-100/40 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">



          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Why Professionals Choose
            <span className="text-cyan-600"> AiGENThix</span>
          </h2>


          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Designed for professionals who want practical AI skills,
            real-world experience, and accelerated career growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
              }}
              className="group overflow-hidden rounded-2xl bg-white border border-cyan-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-cyan-600 text-xs font-bold px-3 py-1 rounded-full">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {it.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {it.desc}
                </p>

                <div className="mt-5 h-[3px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}