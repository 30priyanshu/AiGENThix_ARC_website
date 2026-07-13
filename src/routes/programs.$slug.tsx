import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getProgram, PROGRAMS } from "@/data/programs";
import { ArrowUpRight, Check, Clock, TrendingUp, Award, Briefcase, Play, Users, Building2, Star, MessageSquare, HelpCircle, Send } from "lucide-react";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.program.title} — AiGENThix` },
          { name: "description", content: loaderData.program.summary },
          { property: "og:title", content: `${loaderData.program.title} — AiGENThix` },
          { property: "og:description", content: loaderData.program.summary },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1>Program not found</h1>
        <Link to="/programs" className="mt-6 inline-block text-primary hover:underline">
          View all programs
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ProgramPage,
});

function ProgramPage() {
  const { program: p } = Route.useLoaderData();
  const related = PROGRAMS.filter((x) => x.slug !== p.slug).slice(0, 3);

  const outcomes = [
    "Build production-ready portfolio projects on real datasets.",
    "Master the tools and stack expected in senior AI roles.",
    "Interview-ready with 1:1 mock sessions & feedback loops.",
    "Access to 140+ hiring partner network.",
  ];

  const curriculum = [
    { phase: "Weeks 1–4", title: "Foundations", body: "Core concepts, tooling, and environment setup." },
    { phase: "Weeks 5–10", title: "Core Systems", body: "Deep dive into the core technologies and workflows." },
    { phase: "Weeks 11–16", title: "Applied Projects", body: "Solve industry-inspired problems end-to-end." },
    { phase: "Final Weeks", title: "Capstone & Career", body: "Ship a production project, interview prep, placement." },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <Link to="/programs" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
                ← All Programs
              </Link>
              <h1 className="mt-6 text-left text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight">
                {p.title}
              </h1>
              <p className="mt-5 font-display text-2xl text-primary">{p.tagline}</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {p.summary}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-[15px] font-semibold text-primary-foreground hover:bg-navy/90 transition-all shadow-elegant">
                  Enroll now
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full hairline bg-white px-8 py-4 text-[15px] font-medium text-navy hover:bg-muted transition-all">
                  View pricing
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl pt-8 border-t border-hairline">
                {[
                  { icon: Clock, label: "Duration", value: p.duration, bg: "bg-blue-50", color: "text-blue-600" },
                  { icon: TrendingUp, label: "Level", value: p.level, bg: "bg-purple-50", color: "text-purple-600" },
                  { icon: Briefcase, label: "Avg. Salary", value: p.salary, bg: "bg-emerald-50", color: "text-emerald-600" },
                ].map((s) => (
                  <div key={s.label} className="bg-card p-4 rounded-2xl border border-hairline shadow-sm hover:shadow-md transition-shadow group">
                    <div className={`h-10 w-10 rounded-full ${s.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <s.icon className={`h-5 w-5 ${s.color}`} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">{s.label}</div>
                    <div className="mt-1.5 text-[15px] font-bold text-navy leading-tight">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden hairline shadow-elegant lg:ml-auto">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factor */}
      <section className="py-12 border-y border-hairline bg-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-hairline">
            <div className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-0">
              <Users className="h-8 w-8 text-primary mb-3" />
              <div className="font-display text-4xl text-navy">12,000+</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">Learners Globally</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-0">
              <Building2 className="h-8 w-8 text-primary mb-3" />
              <div className="font-display text-4xl text-navy">140+</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">Hiring Partners</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-0">
              <Star className="h-8 w-8 text-primary mb-3 fill-primary/20" />
              <div className="font-display text-4xl text-navy">4.9/5</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Curriculum</div>
            <h2 className="mt-3">A precisely engineered timeline.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {curriculum.map((c) => (
              <div key={c.title} className="rounded-3xl hairline bg-card p-8 hover:shadow-elegant transition-shadow">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary font-medium">{c.phase}</div>
                <div className="mt-6 font-display text-2xl text-navy">{c.title}</div>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder & Tools (Side by Side on Large Screens) */}
      <section className="py-24 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Program Overview</div>
            <h2 className="mt-3 text-white">See what you'll build.</h2>
            <p className="mt-6 text-[17px] text-white/70 leading-relaxed max-w-xl">
              Watch a sneak peek of the capstone projects and the technologies you'll master throughout this comprehensive program.
            </p>
            
            <div className="mt-12">
               <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 mb-6">Tools & Technologies Mastered</div>
               <div className="flex flex-wrap gap-2.5">
                {p.topics.map((t: string) => (
                  <span key={t} className="px-4 py-2 rounded-xl bg-white/10 border border-white/5 text-sm text-white/90 backdrop-blur-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* YouTube Placeholder */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/90 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(var(--primary),0.4)]">
                <Play className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 font-display text-xl">
              Watch: {p.title} Overview
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-muted/40 border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-[1fr_1.6fr] items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Outcomes</div>
            <h2 className="mt-3">What you'll walk away with.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div key={o} className="flex items-start gap-4 rounded-3xl bg-card hairline p-6 hover:shadow-soft transition-shadow">
                <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary shrink-0 mt-1">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-[16px] text-navy/85 leading-relaxed font-medium">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Ideal For</div>
            <h2 className="mt-3">Built for roles that ship.</h2>
            <ul className="mt-8 space-y-4">
              {p.idealFor.map((i: string) => (
                <li key={i} className="flex items-center gap-4 text-[16px] text-navy/85 font-medium">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-navy text-primary-foreground p-12 shadow-elegant">
            <Award className="h-10 w-10 text-primary-foreground/60" />
            <h3 className="mt-6 font-display text-3xl md:text-4xl">Industry-recognized certificate</h3>
            <p className="mt-4 text-[16px] text-primary-foreground/70 leading-relaxed">
              Graduates receive a verified AiGENThix credential — recognized
              across our hiring partner network.
            </p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div className="bg-card p-8 rounded-[24px] border border-hairline shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-navy">Course Feedback</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">We value your input. Let us know how we can improve this program.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-navy block mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-6 w-6 text-muted-foreground hover:text-yellow-400 cursor-pointer transition-colors" />)}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy block mb-2">Comments</label>
                  <textarea rows={3} className="w-full bg-muted/50 border border-hairline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Share your thoughts..."></textarea>
                </div>
                <button type="submit" className="w-full bg-navy text-primary-foreground font-semibold py-3 rounded-xl hover:bg-navy/90 transition-colors">Submit Feedback</button>
              </form>
            </div>

            {/* Doubt Form */}
            <div className="bg-card p-8 rounded-[24px] border border-hairline shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-navy">Ask a Doubt</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">Stuck on something? Our mentors are here to help you out.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-navy block mb-2">Topic</label>
                  <input type="text" className="w-full bg-muted/50 border border-hairline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Machine Learning Basics" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy block mb-2">Your Question</label>
                  <textarea rows={3} className="w-full bg-muted/50 border border-hairline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Describe what you're struggling with..."></textarea>
                </div>
                <button type="submit" className="w-full bg-navy text-primary-foreground font-semibold py-3 rounded-xl hover:bg-navy/90 transition-colors flex items-center justify-center gap-2">Send Question <Send className="h-4 w-4" /></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 border-t border-hairline bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary text-center">Continue Exploring</div>
          <h2 className="mt-3">Other programs.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/programs/$slug" params={{ slug: r.slug }} className="group rounded-[28px] overflow-hidden hairline bg-white hover:shadow-elegant transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="font-display text-2xl text-navy">{r.title}</div>
                  <p className="mt-3 text-[14.5px] text-muted-foreground leading-relaxed">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
