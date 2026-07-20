import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getProgram, PROGRAMS } from "@/data/programs";
import { ArrowUpRight, Check, Clock, TrendingUp, Award, Briefcase, Play, Users, Building2, Star, MessageSquare, HelpCircle, Send, Video, Layout, FileText } from "lucide-react";

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
    { phase: "Chapter 1", title: "Foundations", body: "Core concepts, tooling, and environment setup.", details: "4 videos, 12 exercises" },
    { phase: "Chapter 2", title: "Core Systems", body: "Deep dive into the core technologies and workflows.", details: "6 videos, 15 exercises" },
    { phase: "Chapter 3", title: "Applied Projects", body: "Solve industry-inspired problems end-to-end.", details: "3 videos, 1 project" },
    { phase: "Chapter 4", title: "Capstone & Career", body: "Ship a production project, interview prep, placement.", details: "1 capstone project" },
  ];

  return (
    <SiteLayout>
      {/* Hero Section - Light Theme */}
      <section className="pt-20 pb-16 bg-white border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-[750px]">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-6">
              <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
              <span>›</span>
              <span className="text-navy">{p.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-navy tracking-tight leading-[1.1]">
              {p.title}
            </h1>
            <p className="mt-6 text-xl text-navy/80 leading-relaxed font-medium">
              {p.tagline}
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {p.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[15px] font-medium text-navy/80">
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-primary" /> {p.duration}
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-primary" /> {p.level}
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="h-5 w-5 text-primary" /> 12,000+ Learners
              </div>
              <div className="flex items-center gap-2 text-yellow-600">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" /> 
                <span className="font-bold">4.9</span>
                <span className="text-muted-foreground font-normal">(3k+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
            
            {/* LEFT CONTENT */}
            <div className="space-y-16">
              
              {/* Technologies */}
              <section>
                <h2 className="text-2xl font-bold text-navy mb-6">Technologies you'll master</h2>
                <div className="flex flex-wrap gap-3">
                  {p.topics.map((t: string) => (
                    <span key={t} className="px-5 py-2.5 rounded-full bg-muted/40 border border-hairline text-[15px] font-medium text-navy shadow-sm hover:shadow-md transition-shadow">
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              {/* Outcomes */}
              <section>
                <h2 className="text-2xl font-bold text-navy mb-6">What you'll walk away with</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-4">
                      <div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-emerald-600 stroke-[3]" />
                      </div>
                      <span className="text-[16px] text-navy/80 font-medium leading-relaxed">{o}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum */}
              <section>
                <h2 className="text-2xl font-bold text-navy mb-6">Curriculum</h2>
                <div className="rounded-2xl border border-hairline overflow-hidden divide-y divide-hairline">
                  {curriculum.map((c, i) => (
                    <div key={c.title} className="p-7 hover:bg-muted/20 transition-colors">
                      <div className="text-[13px] font-bold text-primary mb-2.5 uppercase tracking-wider">
                        {c.phase}
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">{c.title}</h3>
                      <p className="text-[16px] text-navy/70 leading-relaxed mb-5">{c.body}</p>
                      <div className="flex items-center gap-5 text-[14px] font-semibold text-muted-foreground">
                        {c.details && <span className="flex items-center gap-2"><Video className="h-4 w-4"/> {c.details.split(',')[0]}</span>}
                        {c.details && c.details.includes(',') && <span className="flex items-center gap-2"><Layout className="h-4 w-4"/> {c.details.split(',')[1].trim()}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ideal for & Certificate */}
              <section className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-hairline">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-6">Ideal For</h2>
                  <ul className="space-y-4">
                    {p.idealFor.map((i: string) => (
                      <li key={i} className="flex items-start gap-3 text-[16px] text-navy/80 font-medium">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-navy text-white p-8 shadow-elegant relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-2xl" />
                  <div className="relative z-10">
                    <Award className="h-10 w-10 text-primary mb-5" />
                    <h3 className="font-bold text-2xl mb-3">Industry Certificate</h3>
                    <p className="text-white/80 text-[15px] leading-relaxed">
                      Graduates receive a verified AiGENThix credential — recognized
                      across our 140+ hiring partner network.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* RIGHT VIDEO / STICKY CARD */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl overflow-hidden border border-hairline shadow-2xl bg-white flex flex-col">
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-muted group cursor-pointer overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 font-semibold text-white text-sm bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md">
                    Preview Course
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-[28px] font-bold text-navy mb-2">Join Program</div>
                  <p className="text-muted-foreground text-[15px] mb-8 font-medium">Full lifetime access to this program.</p>
                  
                  <div className="space-y-3">
                    <Link to="/contact" className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      Enroll Now
                    </Link>
                    <Link to="/pricing" className="w-full flex items-center justify-center gap-2 rounded-2xl border-2 border-muted px-6 py-4 text-navy font-bold hover:bg-muted/50 transition-all">
                      View Pricing
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-hairline">
                    <div className="text-[13px] font-bold text-navy uppercase tracking-wider mb-5">This program includes:</div>
                    <ul className="space-y-4 text-[15px] font-semibold text-navy/75">
                      <li className="flex items-center gap-3.5"><Clock className="h-5 w-5 text-muted-foreground" /> {p.duration} of content</li>
                      <li className="flex items-center gap-3.5"><Briefcase className="h-5 w-5 text-muted-foreground" /> Career & Interview prep</li>
                      <li className="flex items-center gap-3.5"><Building2 className="h-5 w-5 text-muted-foreground" /> Access to 140+ hiring partners</li>
                      <li className="flex items-center gap-3.5"><Award className="h-5 w-5 text-muted-foreground" /> Certificate of completion</li>
                      <li className="flex items-center gap-3.5"><FileText className="h-5 w-5 text-muted-foreground" /> Hands-on projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 bg-muted/30 border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div className="bg-white p-10 rounded-[32px] border border-hairline shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-[26px] font-bold text-navy tracking-tight">Course Feedback</h3>
              </div>
              <p className="text-muted-foreground text-[16px] mb-8 leading-relaxed">We value your input. Let us know how we can improve this program.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[15px] font-semibold text-navy block mb-3">Rating</label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-7 w-7 text-muted-foreground/30 hover:text-yellow-400 cursor-pointer transition-colors" />)}
                  </div>
                </div>
                <div>
                  <label className="text-[15px] font-semibold text-navy block mb-3">Comments</label>
                  <textarea rows={3} className="w-full bg-muted/40 border border-hairline rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-shadow" placeholder="Share your thoughts..."></textarea>
                </div>
                <button type="submit" className="w-full bg-navy text-white font-bold py-4 rounded-2xl hover:bg-navy/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">Submit Feedback</button>
              </form>
            </div>

            {/* Doubt Form */}
            <div className="bg-white p-10 rounded-[32px] border border-hairline shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-[26px] font-bold text-navy tracking-tight">Ask a Doubt</h3>
              </div>
              <p className="text-muted-foreground text-[16px] mb-8 leading-relaxed">Stuck on something? Our mentors are here to help you out.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[15px] font-semibold text-navy block mb-3">Topic</label>
                  <input type="text" className="w-full bg-muted/40 border border-hairline rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" placeholder="e.g. Machine Learning Basics" />
                </div>
                <div>
                  <label className="text-[15px] font-semibold text-navy block mb-3">Your Question</label>
                  <textarea rows={3} className="w-full bg-muted/40 border border-hairline rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-shadow" placeholder="Describe what you're struggling with..."></textarea>
                </div>
                <button type="submit" className="w-full bg-navy text-white font-bold py-4 rounded-2xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  Send Question <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 border-t border-hairline bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[13px] font-bold uppercase tracking-[0.2em] text-primary text-center">Continue Exploring</div>
          <h2 className="mt-4 text-center text-3xl md:text-4xl font-bold text-navy tracking-tight">Other programs</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/programs/$slug" params={{ slug: r.slug }} className="group rounded-[32px] overflow-hidden border border-hairline bg-white hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="font-bold text-2xl text-navy mb-3">{r.title}</div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
