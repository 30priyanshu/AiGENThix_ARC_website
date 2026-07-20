import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, FileText } from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import { Button } from "@/components/ui/button";

export function PopularPrograms() {
  const popular = PROGRAMS;

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore our most popular
            <span className="text-cyan-600"> programs</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popular.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link to="/programs/$slug" params={{ slug: p.slug }} className="block">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <Link to="/programs/$slug" params={{ slug: p.slug }} className="block">
                  <h3 className="font-bold text-lg mb-2 text-navy group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {p.tagline}
                  </p>
                </Link>
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Link to="/programs/$slug" params={{ slug: p.slug }} className="w-full sm:w-1/2">
                    <Button size="sm" className="w-full text-sm font-semibold gap-2 bg-cyan-500 hover:bg-cyan-400 text-white border-0">
                      Explore
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="w-full sm:w-1/2 text-sm font-semibold gap-2 border-cyan-500/20 text-cyan-600 hover:bg-cyan-50">
                    <FileText className="h-4 w-4" />
                    Syllabus
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/programs">
            <Button
              size="sm"
              className="group rounded-full px-8 py-6 text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-200 hover:shadow-cyan-300 transition-all duration-300"
            >
              Explore More Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
