import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

const feedbacks = [
  {
    name: "Rahul Sharma",
    role: "Data Scientist at TechCorp",
    rating: 5,
    duration: "2:14",
    description:
      "The GenAI program completely transformed my career path and helped me land a better role.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Priya Patel",
    role: "ML Engineer",
    rating: 5,
    duration: "1:52",
    description:
      "Hands-on projects and mentorship gave me confidence to crack top interviews.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Amit Kumar",
    role: "AI Consultant",
    rating: 5,
    duration: "2:31",
    description:
      "The capstone projects helped me build a portfolio that recruiters loved.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sneha Verma",
    role: "AI Product Analyst",
    rating: 5,
    duration: "1:45",
    description:
      "The structured curriculum and real-world projects helped me transition into AI with confidence.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80",
  },
];

export function StudentFeedback() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Student Success Stories
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">
            Hear From Our{" "}
            <span className="text-cyan-600">Successful Alumni</span>
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Real experiences from learners who accelerated their careers with
            Aigenthix Research Centre.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {feedbacks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.videoThumbnail}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/15" />

                {/* Duration */}
                <div className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
                  {item.duration}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-cyan-600 text-cyan-600" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                  "{item.description}"
                </p>

                {/* Profile */}
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={item.videoThumbnail}
                    alt={item.name}
                    className="h-11 w-11 rounded-full border-2 border-cyan-300 object-cover object-center"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-xs text-cyan-600">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-[3px] w-12 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}