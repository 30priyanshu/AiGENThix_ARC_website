import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getProgram, PROGRAMS } from "@/data/programs";
import {
  ChevronRight,
  Star,
  Clock,
  Award,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Play,
  Building2,
  Users,
  CheckCircle2,
  MessageSquare,
  HelpCircle,
  Send,
  Wrench
} from "lucide-react";
import { useState } from "react";
import avatar1 from "@/assets/Arpit sir.jpeg";
import avatar2 from "@/assets/Srikant sir.png";

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

  // Accordion state
  const [openChapter, setOpenChapter] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const curriculum = [
    { phase: "01", time: "Weeks 1–4", title: "Foundations", body: "Core concepts, tooling, and environment setup." },
    { phase: "02", time: "Weeks 5–10", title: "Core Systems", body: "Deep dive into the core technologies and workflows." },
    { phase: "03", time: "Weeks 11–16", title: "Applied Projects", body: "Solve industry-inspired problems end-to-end." },
    { phase: "04", time: "Final Weeks", title: "Capstone & Career", body: "Ship a production project, interview prep, placement." },
  ];

  const technologies = [
    "Batch Processing", "Streaming Pipelines", "Python", "SQL", "Spark", "AWS", "Azure", "GCP", "Snowflake", "BigQuery", "Enterprise Capstone"
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden -mt-24 border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,#a5f3fc_0%,#ecfeff_20%,#f8fafc_55%,#ffffff_100%)] pt-41 pb-26">
        {/* grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          }}
        />
        {/* accent glows */}
        <div className="pointer-events-none absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full blur-[100px] bg-cyan-200/40" />
        <div className="pointer-events-none absolute bottom-0 -left-20 h-[500px] w-[500px] rounded-full blur-[100px] bg-cyan-300/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start justify-between">
            {/* Left Hero Content */}
            <div className="flex-1 max-w-3xl lg:pt-4">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <Link to="/" className="hover:text-cyan-600">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-slate-700">AI</span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-cyan-600 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                Course
              </div>

              <h1 className="text-4xl md:text-5xl text-slate-900 font-bold mb-6">
                {p.title}
              </h1>

              {/* Badges/Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>{p.level.split(' ')[0]} Level</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-slate-800">4.8</span>
                  <span className="text-slate-500">(13,375 reviews)</span>
                </div>
                <div className="text-slate-500">
                  Last updated: 05/2025
                </div>
              </div>

              <p className="text-lg text-slate-600 mb-10 max-w-2xl">
                Explore what AI is and how to use it responsibly for smarter, more productive work!
              </p>

              <div className="mb-10">
                <Link to="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-[16px]">
                  Start Course
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm">Theory</span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm">Virtual Classroom</span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm">Artificial Intelligence</span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm"><Clock className="h-4 w-4 text-slate-400" /> {p.duration}</span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm"><Award className="h-4 w-4 text-slate-400" /> Certificate</span>
              </div>
            </div>

            {/* Right Hero Content (Image + Logos) */}
            <div className="w-full lg:w-[480px] shrink-0 relative z-10 flex flex-col items-center">
              {/* Premium image container */}
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative w-full rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                  <img src={p.image} alt={p.title} className="w-full h-auto rounded-xl object-cover aspect-video bg-slate-100" />
                </div>
              </div>

              {/* Create Account Banner */}
              <div className="mt-8 flex flex-col items-center gap-4 w-full bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-xl ring-1 ring-slate-900/5">
                <div className="text-center">
                  <h2 className="font-extrabold text-slate-900 text-lg mb-1">Enroll Now to Start Your Learning Journey</h2>

                </div>
                <button className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all text-[15px] shadow-sm hover:shadow group">
                  <svg className="h-5 w-5 bg-white rounded-full p-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Banner */}
      <section className="bg-white py-6 border-b border-gray-200 shadow-sm relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <span className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">Loved by learners at</span>
            <div className="flex items-center gap-8 opacity-70 flex-wrap justify-center">
              <span className="text-slate-800 font-bold text-sm tracking-tighter">BANK OF AMERICA</span>
              <span className="text-slate-800 font-serif italic text-[22px]">Pfizer</span>
              <span className="text-slate-800 font-black text-sm">carhartt</span>
              <span className="text-slate-800 font-sans text-[22px]">Uber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-slate-50 relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="pt-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

            {/* LEFT COLUMN */}
            <div className="space-y-12">

              {/* Course Description */}
              <div>
                <h2 className="text-[22px] font-bold text-gray-900 mb-4">Course Description</h2>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Artificial Intelligence, or AI, has become the biggest technological innovation since the internet, giving everyone access to smart assistants that can assist, augment, or automate our tasks and work. But what is AI, how can you use it to maximize productivity, and how will AI change your job? We'll answer these questions, along with how to...
                </p>
                <button className="text-[#0556f3] font-bold text-[15px] mt-2 flex items-center gap-1 hover:underline">
                  Read More <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* Prerequisites */}
              <div className="border border-gray-200 rounded-lg p-5 flex items-center gap-5 bg-white shadow-sm">
                <div className="bg-cyan-100 p-2.5 rounded-full flex shrink-0 border border-cyan-200">
                  <ShieldAlert className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Prerequisites</div>
                  <div className="text-gray-900 text-[15px] font-medium">There are no prerequisites for this course</div>
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-[22px] font-bold text-gray-900 mb-2">Curriculum</h2>
                <p className="text-gray-600 mb-6 font-medium">A precisely engineered timeline.</p>
                <div className="space-y-4">
                  {curriculum.map((c, i) => {
                    const isOpen = openChapter === i;
                    return (
                      <div key={i} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm transition-all duration-200">
                        <button
                          onClick={() => setOpenChapter(isOpen ? null : i)}
                          className="w-full px-6 py-5 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left border-b border-transparent"
                        >
                          <div className="flex flex-col items-center shrink-0">
                            <span className="text-xs font-bold text-gray-400 mb-1">{c.phase}</span>
                            <div className="h-7 w-7 rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200 font-bold flex items-center justify-center text-sm">
                              {i + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{c.time}</div>
                            <h3 className="text-[17px] font-bold text-gray-900">{c.title}</h3>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 pl-[5.5rem]">
                            <div className="flex items-start gap-3 mb-2">
                              <CheckCircle2 className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                              <h4 className="font-bold text-gray-900 text-[15px]">{c.title} Details</h4>
                            </div>
                            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 ml-8">
                              {c.body}
                            </p>

                            <div className="flex items-center justify-between ml-8 pt-4">
                              <button
                                onClick={() => setOpenChapter(null)}
                                className="text-[#0556f3] font-bold text-[15px] flex items-center gap-1 hover:underline"
                              >
                                Hide Details <ChevronUp className="h-4 w-4" />
                              </button>
                              <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded transition-colors shadow-sm text-[15px]">
                                Start Course
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-100 border border-cyan-200 p-2 rounded-lg">
                    <Wrench className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="text-[22px] font-bold text-gray-900">Tools & Technologies</h2>
                </div>
                <p className="text-gray-600 mb-6 font-medium">The exact stack you'll master.</p>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((t) => (
                    <span key={t} className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-bold text-gray-700 shadow-sm hover:border-cyan-300 transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-100 border border-cyan-200 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="text-[22px] font-bold text-gray-900">Outcomes</h2>
                </div>
                <p className="text-gray-600 mb-6 font-medium">What you'll walk away with.</p>
                <div className="space-y-4 bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                  {[
                    "Build production-ready portfolio projects on real datasets.",
                    "Master the tools and stack expected in senior AI roles.",
                    "Interview-ready with 1:1 mock sessions & feedback loops.",
                    "Access to 140+ hiring partner network."
                  ].map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium text-[15px]">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 lg:sticky lg:top-8 self-start">

              {/* AI Tutor Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="relative rounded bg-indigo-50/50 p-4 mb-5 border border-indigo-100 flex flex-col gap-4">
                  {/* Mock Chat Bubbles */}
                  <div className="bg-white shadow-sm border border-indigo-100 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-700 self-start max-w-[85%] relative font-medium leading-relaxed">
                    Why do you want to learn {p.title.split(' ')[0]}, and how will you use it day to day?
                    <div className="absolute -top-3 -left-3 h-7 w-7 bg-[#6A35FF] rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="h-3 w-3 text-white fill-white" />
                    </div>
                  </div>
                  <div className="bg-cyan-950 shadow-md p-3 rounded-2xl rounded-tr-sm text-[13px] text-white self-end max-w-[85%] flex items-center gap-3 font-medium">
                    <img src={p.image} className="w-8 h-8 rounded-full bg-cyan-900 object-cover hidden sm:block border border-cyan-800" alt="" />
                    <span>I want to be able to read, verify, and adapt what AI creates for my business.</span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-gray-900/80 backdrop-blur-sm h-14 w-14 rounded flex items-center justify-center shadow-lg cursor-pointer pointer-events-auto hover:bg-gray-800 transition-colors">
                      <Play className="h-6 w-6 text-white ml-1 fill-white" />
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900 text-center mb-2 flex items-center justify-center gap-2 text-[15px]">
                  <Star className="h-4 w-4" /> What is AI Tutor?
                </h4>
                <p className="text-gray-600 text-[13px] text-center leading-relaxed mb-4">
                  Agenthix Research Centre's AI tutor personalizes every lesson in real time — adapting to your role, level, and goals. You'll learn faster and smarter in courses taught by the world's #1 AI tutor for AI and data.
                </p>
                <div className="text-center">
                  <a href="#" className="text-[#0556f3] font-bold text-[15px] hover:underline">Learn More</a>
                </div>
              </div>

              {/* For Business Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-4 right-[-34px] bg-[#dbeafe] text-[#1d4ed8] text-[9px] font-black uppercase px-10 py-1.5 rotate-45 tracking-widest border border-blue-200 shadow-sm z-10">
                  FOR BUSINESS
                </div>
                <h4 className="font-bold text-gray-900 text-[17px] mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-500" /> Training 2 or more people?
                </h4>
                <p className="text-gray-600 text-[13px] mb-5 leading-relaxed pr-6">
                  Get your team access to the full Agenthix Research Centre platform, including all the features.
                </p>
                <Link to="/business" className="block w-full text-center border-2 border-gray-900 text-gray-900 font-bold py-2.5 rounded hover:bg-gray-50 transition-colors mb-4 text-[15px]">
                  for Business
                </Link>
                <p className="text-[13px] text-gray-500 text-center">
                  For a bespoke solution <a href="#" className="text-[#0556f3] hover:underline font-bold">book a demo.</a>
                </p>
              </div>

              {/* Related Tracks */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 text-[15px] mb-4 flex items-center gap-2">
                  <Award className="h-4 w-4 text-gray-500" /> In the following Tracks
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <Link to="/programs" className="text-[#0556f3] font-bold text-[15px] hover:underline">AI Fundamentals</Link>
                    <span className="bg-[#FFC000] text-gray-900 text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">CERTIFICATION</span>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <Link to="/programs" className="text-[#0556f3] font-bold text-[15px] hover:underline">AI Agent Fundamentals</Link>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <Link to="/programs" className="text-[#0556f3] font-bold text-[15px] hover:underline">AI Business Fundamentals</Link>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <Link to="/programs" className="text-[#0556f3] font-bold text-[15px] hover:underline">Data Skills for Business</Link>
                  </div>
                  <div>
                    <Link to="/programs" className="text-[#0556f3] font-bold text-[15px] hover:underline">EU AI Act Fundamentals</Link>
                  </div>
                </div>
              </div>

              {/* Instructors */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="mb-8">
                  <h4 className="text-[14px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-cyan-600" /> Learn from AI Experts
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-cyan-100 p-0.5 overflow-hidden shrink-0 border border-cyan-200">
                        <img src={avatar2} alt="Dr. Salur Srikant Patnaik" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-[16px]">Dr. Salur Srikant Patnaik</div>
                        <div className="text-[13px] text-gray-500 mt-0.5">CEO and Founder</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-cyan-100 p-0.5 overflow-hidden shrink-0 border border-cyan-200">
                        <img src={avatar1} alt="Dr. Arpit Yadav" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-[16px]">Dr. Arpit Yadav</div>
                        <div className="text-[13px] text-gray-500 mt-0.5">Co-Founder, Chief AI Scientist</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Course FAQ Section */}
      {p.faqs && p.faqs.length > 0 && (
        <section className="bg-white py-20 border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Frequently Asked <span className="text-cyan-600">Questions</span>
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Everything you need to know about the {p.title} program.
              </p>
            </div>
            <div className="space-y-4">
              {p.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm transition-all duration-200">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="text-[17px] font-bold text-gray-900 pr-4">{faq.question}</h3>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-cyan-600 shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-gray-600 text-[15px] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Forms Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-[32px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-[26px] font-bold text-gray-900 tracking-tight">Course Feedback</h3>
              </div>
              <p className="text-gray-600 text-[16px] mb-8 leading-relaxed">We value your input. Let us know how we can improve this program.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[15px] font-bold text-gray-900 block mb-3">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-7 w-7 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />)}
                  </div>
                </div>
                <div>
                  <label className="text-[15px] font-bold text-gray-900 block mb-3">Comments</label>
                  <textarea rows={3} className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 resize-none transition-all" placeholder="Share your thoughts..."></textarea>
                </div>
                <button type="submit" className="w-full bg-cyan-950 text-white font-bold py-4 rounded-2xl hover:bg-cyan-900 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-[15px]">Submit Feedback</button>
              </form>
            </div>

            {/* Doubt Form */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-[32px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                  <HelpCircle className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-[26px] font-bold text-gray-900 tracking-tight">Ask a Doubt</h3>
              </div>
              <p className="text-gray-600 text-[16px] mb-8 leading-relaxed">Stuck on something? Our mentors are here to help you out.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[15px] font-bold text-gray-900 block mb-3">Topic</label>
                  <input type="text" className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all" placeholder="e.g. Machine Learning Basics" />
                </div>
                <div>
                  <label className="text-[15px] font-bold text-gray-900 block mb-3">Your Question</label>
                  <textarea rows={3} className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 resize-none transition-all" placeholder="Describe what you're struggling with..."></textarea>
                </div>
                <button type="submit" className="w-full bg-cyan-950 text-white font-bold py-4 rounded-2xl hover:bg-cyan-900 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-[15px]">
                  Send Question <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
