import React, { useRef } from "react";
import {
  GraduationCap,
  Clock3,
  Download,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadershipRoles() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const programs = [
    {
      university: "MIT & Stanford",
      title: "Chief AI & Data Officer Program",
      duration: "6 Months",
      badge: "Popular",
      logo:
        "https://athenaeducation.co.in/wp-content/uploads/2025/03/Athena-Dark-logo.png",
    },
    {
      university: "Harvard Business School",
      title: "Professional Certificate in AI Leadership",
      duration: "8 Months",
      badge: "Best Seller",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg",
    },
    {
      university: "Oxford University",
      title: "Chief Technology Officer & AI Strategy",
      duration: "6 Months",
      badge: "New Course",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/University_of_Oxford.svg/500px-University_of_Oxford.svg.png",
    },
    {
      university: "Cambridge University",
      title: "AI for Business Transformation",
      duration: "5 Months",
      badge: "Trending",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/University_of_Cambridge_logo.svg/500px-University_of_Cambridge_logo.svg.png",
    },
    {
      university: "IIM Ahmedabad",
      title: "Executive Programme in AI Leadership",
      duration: "7 Months",
      badge: "Featured",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/IIM%2C_Ahmedabad_Logo.svg/500px-IIM%2C_Ahmedabad_Logo.svg.png",
    },
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Step into{" "}
            <span className="text-cyan-600">
              leadership roles
            </span>
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white border shadow-lg hover:bg-cyan-50 transition"
          >
            <ChevronLeft className="h-6 w-6 mx-auto text-gray-700" />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {programs.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[32%] min-w-[32%] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Badge */}
                <div className="flex justify-end p-4 pb-0">
                  <span className="bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Logo */}
                <div className="flex justify-center px-6 py-2">
                  <img
                    src={item.logo}
                    alt={item.university}
                    className="h-20 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="px-5 pb-5">

                  <p className="text-xs text-gray-500 mb-2">
                    {item.university}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[60px]">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-2">

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <GraduationCap className="w-4 h-4 text-cyan-500" />
                      Certification
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock3 className="w-4 h-4 text-cyan-500" />
                      {item.duration}
                    </div>

                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
                    <Button
                      size="sm"
                      className="flex-1 text-sm font-semibold gap-2 bg-cyan-500 hover:bg-cyan-400 text-white border-0"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-sm font-semibold gap-2 border-cyan-500/20 text-cyan-600 hover:bg-cyan-50"
                    >
                      <FileText className="h-4 w-4" />
                      Syllabus
                    </Button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white border shadow-lg hover:bg-cyan-50 transition"
          >
            <ChevronRight className="h-6 w-6 mx-auto text-gray-700" />
          </button>

        </div>
      </div>
    </section>
  );
}