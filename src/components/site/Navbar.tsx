import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const nav = [
  { to: "/programs", label: "Programs" },
  { to: "/corporate", label: "Corporate" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled
              ? "glass-panel shadow-soft"
              : "bg-transparent"
            }`}
        >
          <Link to="/" className="flex items-center group" aria-label="AiGENThix home">
            <img
              src="/AiGENThix Logo.webp"
              alt="AiGENThix"
              className="h-8 w-auto md:h-9 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-3.5 py-2 text-[13.5px] transition-colors rounded-full ${
                  scrolled ? "text-navy/70 hover:text-navy" : "text-white/90 hover:text-white"
                }`}
                activeProps={{ className: scrolled ? "text-navy font-semibold" : "text-white font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className={`text-[13.5px] px-3 py-2 transition-colors ${
                scrolled ? "text-navy/70 hover:text-navy" : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/programs"
              className="group inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-[13px] font-medium text-primary-foreground hover:bg-navy/90 transition-all"
            >
              Enroll now
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden h-9 w-9 grid place-items-center rounded-full hairline transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 glass-panel rounded-2xl p-3"
            >
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-navy/80 hover:bg-muted rounded-xl"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-navy/80 hover:bg-muted rounded-xl"
              >
                Contact
              </Link>
              <Link
                to="/programs"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-full bg-navy px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Enroll now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
