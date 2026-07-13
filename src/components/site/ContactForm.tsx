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
    <section id="contact-section" className="py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent border-y border-hairline">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold mb-4 mx-auto">
            <MessageSquare className="h-3 w-3" /> Connect With Us
          </div>
          <h2 className="text-center text-4xl md:text-5xl font-bold text-navy leading-tight">
            Ready to start your <span className="text-primary">AI journey?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-center">
            Have questions about our cohorts, curriculum, or custom corporate training? Drop us a line and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-card p-8 md:p-10 rounded-[32px] shadow-elegant border border-hairline relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">Full Name</label>
                <input 
                  id="name" 
                  required 
                  className="w-full bg-muted/30 border border-hairline rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">Work Email</label>
                <input 
                  id="email" 
                  type="email" 
                  required 
                  className="w-full bg-muted/30 border border-hairline rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                  placeholder="john@company.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold block">I'm interested in</label>
              <select 
                id="interest"
                className="w-full bg-muted/30 border border-hairline rounded-xl px-4 py-3.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="individual">Individual Learning Cohort</option>
                <option value="corporate">Corporate Training / Enterprise Upskilling</option>
                <option value="hiring">Hiring AI Talent from AiGENThix</option>
                <option value="general">Other / General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">How can we help?</label>
              <textarea 
                id="message" 
                required 
                rows={4} 
                className="w-full bg-muted/30 border border-hairline rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" 
                placeholder="Tell us what you are looking for..." 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-navy text-primary-foreground font-semibold py-4 rounded-xl hover:bg-navy/90 hover:shadow-elegant transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {submitted ? "Message Sent Successfully!" : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
