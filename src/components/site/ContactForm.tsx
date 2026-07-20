import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact-section"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700">
            <MessageSquare className="h-3.5 w-3.5" />
            Contact Us
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-3xl">
            Let's Talk About Your
            <span className="text-cyan-600">
              AI Learning Journey
            </span>
          </h2>

          <p className="mt-4 text-slate-500 leading-relaxed">
            Speak with our advisors, explore enterprise training programs,
            or find the perfect AI learning path for your goals.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-100 bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-cyan-100/40">
          {/* Glow */}
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-50/50 blur-3xl" />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Interested In
              </label>

              <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
                <option>Individual Learning Programs</option>
                <option>Corporate Training</option>
                <option>AI Workforce Upskilling</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>

              <textarea
                rows={5}
                required
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <button
              type="submit"
              className="group w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-200"
            >
              <span className="flex items-center justify-center gap-2">
                {submitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}