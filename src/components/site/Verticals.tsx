import { Link } from "@tanstack/react-router";
import { Cpu, Database, BrainCircuit, Building2 } from "lucide-react";

export function Verticals() {
  const verticals = [
    {
      id: "agentic-ai",
      name: "Agentic AI",
      icon: <Cpu className="h-8 w-8" />,
      color: "bg-blue-50 text-blue-600",
      hover: "hover:bg-blue-600 hover:text-white"
    },
    {
      id: "data-engineering",
      name: "Data Engineering",
      icon: <Database className="h-8 w-8" />,
      color: "bg-emerald-50 text-emerald-600",
      hover: "hover:bg-emerald-600 hover:text-white"
    },
    {
      id: "ai-ml",
      name: "AI & ML",
      icon: <BrainCircuit className="h-8 w-8" />,
      color: "bg-purple-50 text-purple-600",
      hover: "hover:bg-purple-600 hover:text-white"
    },
    {
      id: "corporate",
      name: "Corporate Training",
      icon: <Building2 className="h-8 w-8" />,
      color: "bg-orange-50 text-orange-600",
      hover: "hover:bg-orange-600 hover:text-white"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            VERTICALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Choose your area of interest
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v) => (
            <Link
              key={v.id}
              to={v.id === "corporate" ? "/corporate" : "/programs/$slug"}
              params={v.id !== "corporate" ? { slug: v.id } : undefined}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-100 transition-all duration-300 ${v.color} ${v.hover}`}
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-bold text-lg text-center">{v.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
