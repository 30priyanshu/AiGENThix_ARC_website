import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/corporate", label: "Corporate" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
];

const PROGRAMS_LIST = [
  { name: "Agentic AI", path: "agentic-ai" },
  { name: "Generative AI", path: "generative-ai" },
  { name: "AI & Machine Learning", path: "ai-ml" },
  { name: "AI & MLOps", path: "mlops" },
  { name: "Data Engineering", path: "data-engineering" },
  { name: "Data Analytics", path: "data-analytics" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
              ? "bg-white/95 backdrop-blur-md shadow-md border border-gray-100"
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

          <nav className="hidden md:flex items-center gap-2">
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowPrograms(true)}
              onMouseLeave={() => setShowPrograms(false)}
            >
              <Link
                to="/programs"
                className="flex items-center gap-1.5 relative px-4 py-2 text-base transition-colors rounded-full font-medium text-black hover:text-black/70"
              >
                Programs
                <ChevronDown className={`h-4 w-4 transition-transform ${showPrograms ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {showPrograms && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white shadow-xl border border-gray-100 py-3 overflow-hidden"
                  >
                    {PROGRAMS_LIST.map((prog) => (
                      <Link
                        key={prog.path}
                        to="/programs/$slug"
                        params={{ slug: prog.path }}
                        onClick={() => setShowPrograms(false)}
                        className="block px-5 py-3 text-[15px] font-medium text-black hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {prog.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-base font-medium transition-colors rounded-full text-black hover:text-black/70"
                activeProps={{ className: "font-bold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-base font-medium px-4 py-2 transition-colors text-black hover:text-black/70"
            >
              Contact
            </Link>
            {/* Login Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowLogin(true)}
              onMouseLeave={() => setShowLogin(false)}
            >
              <button
                className="group inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-navy/90 transition-all shadow-md"
              >
                Login
                <ChevronDown className={`h-4 w-4 transition-transform ${showLogin ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showLogin && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-gray-100 py-3 overflow-hidden"
                  >
                    <Link to="/login" className="block px-5 py-2.5 text-[14px] font-medium text-black hover:bg-gray-50 hover:text-primary transition-colors">Create account</Link>
                    <Link to="/login" className="block px-5 py-2.5 text-[14px] font-medium text-black hover:bg-gray-50 hover:text-primary transition-colors">Forgot password</Link>
                    <Link to="/login" className="block px-5 py-2.5 text-[14px] font-medium text-black hover:bg-gray-50 hover:text-primary transition-colors">Login with Google</Link>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <Link to="/login" className="block px-5 py-2.5 text-[14px] font-medium text-black hover:bg-gray-50 hover:text-primary transition-colors">Profile</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full hairline transition-colors text-black"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <Link
                to="/programs"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-50 rounded-xl"
              >
                Programs
              </Link>
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-50 rounded-xl"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-50 rounded-xl"
              >
                Contact
              </Link>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-4 block text-center rounded-full bg-navy px-4 py-3 text-base font-medium text-primary-foreground shadow-md"
              >
                Login
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
