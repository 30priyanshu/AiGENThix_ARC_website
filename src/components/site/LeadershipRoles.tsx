import { TrendingUp, Users, Target, Briefcase } from "lucide-react";

export function LeadershipRoles() {
  const roles = [
    {
      title: "AI Product Manager",
      icon: <Users className="h-6 w-6 text-primary" />,
      desc: "Lead cross-functional teams to build and ship AI-powered products."
    },
    {
      title: "Head of Data Engineering",
      icon: <Target className="h-6 w-6 text-primary" />,
      desc: "Architect scalable data pipelines for enterprise AI systems."
    },
    {
      title: "Chief AI Officer",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      desc: "Drive organizational transformation with strategic AI adoption."
    },
    {
      title: "MLOps Lead",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      desc: "Manage the lifecycle and operations of production ML models."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Step into leadership roles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our programs are designed to not just teach you technical skills, but to prepare you for the strategic challenges of leadership in an AI-first world.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {role.icon}
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
