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
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 mb-4 text-sm font-semibold text-primary">
            <Star className="h-4 w-4" />
            Top Rated
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Explore our most popular programs
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
                  <Button variant="outline" size="sm" className="w-full sm:w-1/2 text-sm font-semibold gap-2 border-primary/20 text-primary hover:bg-primary/5">
                    <FileText className="h-4 w-4" />
                    Syllabus
                  </Button>
                  <Link to="/programs/$slug" params={{ slug: p.slug }} className="w-full sm:w-1/2">
                    <Button size="sm" className="w-full text-sm font-semibold gap-2">
                      Explore
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/programs">
            <Button size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all">
              Explore More Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
