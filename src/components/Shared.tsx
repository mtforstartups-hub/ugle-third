import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Check,
  Globe,
  ChevronDown,
  User,
  X,
  Search,
  FileVideo,
  FileText,
  Image as ImageIcon,
  Copy,
  Play,
  BarChart2,
  Share2,
  FolderOpen,
  ListFilter,
  Menu,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Link, useLocation } from "react-router-dom";

// Global Event Dispatcher
export const showToast = (msg: string) =>
  window.dispatchEvent(new CustomEvent("show-toast", { detail: msg }));

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<{ id: number; msg: string }[]>([]);
  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent;
      const id = Date.now();
      setToasts((prev) => [...prev, { id, msg: customEvent.detail }]);
      setTimeout(
        () => setToasts((prev) => prev.filter((t) => t.id !== id)),
        3000,
      );
    };
    window.addEventListener("show-toast", handleToast);
    return () => window.removeEventListener("show-toast", handleToast);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="bg-[#1C1C1C] text-white px-5 py-3.5 rounded border border-[#75C043]/40 shadow-[0_0_20px_rgba(117,192,67,0.3)] flex items-center gap-3 font-mono text-xs uppercase tracking-wider font-semibold pointer-events-auto"
          >
            <Check className="w-4 h-4 text-[#75C043]" />
            {t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const Logo = ({ dark = false }: { dark?: boolean }) => (
  <Link
    to="/"
    className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
  >
    <img
      src={dark ? "/Ugle Logo White.png" : "/Ugle Logo.png"}
      alt="Ugle Logo"
      className="h-10 w-auto"
    />
  </Link>
);

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#75C043] origin-left z-50 shadow-[0_0_15px_#75C043]"
      style={{ scaleX }}
    />
  );
};

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = (val: string) => {
    if (!val) return "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "INVALID EMAIL FORMAT";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (error || val) setError(validate(val));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(email);
    if (err || !email) {
      setError(err || "EMAIL IS REQUIRED");
      return;
    }
    setSubmitted(true);
    showToast("Waitlist Joined Successfully");
  };

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 md:pt-24 pb-12 overflow-hidden border-t border-ugle-slate/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 md:mb-20">
          <div className="w-full md:max-w-sm">
            <Logo dark />
            <p className="mt-6 text-gray-400 font-medium leading-relaxed">
              The local-first search application for media professionals. Find
              the soundbite. Pull the clip. Hit the deadline.
            </p>
            <div className="mt-8 flex gap-6 text-sm font-semibold text-gray-400">
              <Link
                to="/how-it-works"
                className="hover:text-white transition-colors"
              >
                How it works
              </Link>
              <Link
                to="/use-cases"
                className="hover:text-white transition-colors"
              >
                Use cases
              </Link>
              <Link
                to="/pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/download"
                className="hover:text-white transition-colors text-[#75C043]"
              >
                Download
              </Link>
            </div>
            <div className="mt-4 flex gap-6 text-sm font-semibold text-gray-400">
              <Link
                to="/security"
                className="hover:text-white transition-colors"
              >
                Security
              </Link>
              <Link
                to="/changelog"
                className="hover:text-white transition-colors"
              >
                Changelog
              </Link>
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col md:items-end relative min-h-[6rem]">
            <label className="block font-mono text-xs text-[#75C043] mb-3 tracking-widest uppercase font-semibold">
              Become an Ugler Now
            </label>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#75C043]/10 border border-[#75C043]/40 rounded px-6 py-3.5 flex items-center justify-center gap-3 w-full md:w-[350px] shadow-[0_0_20px_rgba(117,192,67,0.2)]"
                >
                  <Check className="w-5 h-5 text-[#75C043]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#75C043] font-bold">
                    Successfully Joined
                  </span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col w-full relative"
                >
                  <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="YOUR@EMAIL.COM"
                      className={`bg-[#111] border-2 ${error ? "border-red-500 focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "border-[#333] focus:border-[#75C043] focus:shadow-[0_0_15px_rgba(117,192,67,0.3)]"} text-white rounded sm:rounded-r-none px-4 py-3 focus:outline-none font-mono text-xs w-full sm:w-64 transition-all placeholder:text-gray-600 uppercase tracking-wider`}
                    />
                    <button
                      type="submit"
                      className="bg-[#75C043] hover:bg-[#86d950] text-ugle-slate font-mono text-xs font-bold px-8 py-3 rounded sm:rounded-l-none transition-all shadow-[0_0_15px_rgba(117,192,67,0.3)] w-full sm:w-auto whitespace-nowrap uppercase tracking-wider hover:shadow-[0_0_25px_rgba(117,192,67,0.6)] focus:outline-none focus:ring-2 focus:ring-[#75C043] focus:ring-offset-2 focus:ring-offset-[#1C1C1C]"
                    >
                      Join
                    </button>
                  </div>
                  <AnimatePresence>
                    {error && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute -bottom-7 left-0 md:left-auto md:right-0 font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold text-left md:text-right w-full"
                      >
                        {error}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white transition-colors font-mono text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition-colors font-mono text-xs"
            >
              Terms of Service
            </Link>
          </div>
          <div className="text-gray-400 font-mono text-xs text-center sm:text-left">
            © 2026 Ugle. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative group justify-center sm:justify-end">
            <Globe className="w-4 h-4 text-[#75C043]" />
            <select className="bg-transparent border-none outline-none cursor-pointer appearance-none font-mono text-xs focus:outline-none uppercase tracking-wider pr-6 z-10 relative">
              <option value="en" className="text-ugle-slate">
                EN - English
              </option>
              <option value="es" className="text-ugle-slate">
                ES - Español
              </option>
              <option value="fr" className="text-ugle-slate">
                FR - Français
              </option>
              <option value="de" className="text-ugle-slate">
                DE - Deutsch
              </option>
              <option value="ja" className="text-ugle-slate">
                JA - 日本語
              </option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 400); // Wait for exit animation
      return () => clearTimeout(t);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-ugle-light/60 bg-white/80 backdrop-blur-md">
        <nav className="w-full px-6 py-4 md:px-12 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-ugle-slate">
            <Link
              to="/how-it-works"
              className="hover:text-[#75C043] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#75C043] after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              How it works
            </Link>
            <div className="group relative py-2">
              <Link
                to="/use-cases"
                className="flex items-center gap-1 hover:text-[#75C043] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#75C043] after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Use cases{" "}
                <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-white border border-ugle-light/60 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 transform group-hover:translate-y-1">
                <Link
                  to="/use-cases/newsrooms"
                  className="block px-4 py-2.5 hover:bg-[#F8FAF9] hover:text-[#75C043] text-sm transition-colors"
                >
                  Newsrooms
                </Link>
                <Link
                  to="/use-cases/podcasts"
                  className="block px-4 py-2.5 hover:bg-[#F8FAF9] hover:text-[#75C043] text-sm transition-colors"
                >
                  Podcasts
                </Link>
                <Link
                  to="/use-cases/journalists"
                  className="block px-4 py-2.5 hover:bg-[#F8FAF9] hover:text-[#75C043] text-sm transition-colors"
                >
                  Journalists
                </Link>
              </div>
            </div>
            <Link
              to="/pricing"
              className="hover:text-[#75C043] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#75C043] after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/download"
              className="hidden sm:block text-sm font-semibold text-ugle-slate hover:text-[#75C043] transition-colors"
            >
              Request Demo
            </Link>
            <Link
              to="/download"
              className="hidden md:flex items-center justify-center bg-[#1C1C1C] hover:bg-[#75C043] text-white hover:text-[#1C1C1C] font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all text-sm"
            >
              Get Early Access
            </Link>
            <button
              className="md:hidden flex items-center justify-center p-2 text-ugle-slate hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay — rendered via portal to escape sticky header stacking context */}
      {createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[55] bg-ugle-slate/60 backdrop-blur-sm md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed inset-y-0 right-0 w-[80%] max-w-sm z-[60] bg-white shadow-2xl flex flex-col pt-6 px-6 md:hidden overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-12">
                  <Logo />
                  <button
                    className="p-2 text-ugle-slate hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-6 text-2xl font-bold text-ugle-slate tracking-tight">
                  {[
                    { name: "Home", path: "/" },
                    { name: "How it works", path: "/how-it-works" },
                    { name: "Use cases", path: "/use-cases" },
                    { name: "Pricing", path: "/pricing" },
                    { name: "Download", path: "/download" },
                    { name: "Blog", path: "/blog" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        className="hover:text-[#75C043] transition-colors border-b border-gray-100 pb-4 block"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-auto pb-12 pt-12"
                >
                  <Link
                    to="/download"
                    className="block text-center bg-[#75C043] text-white font-bold text-lg py-4 rounded-lg shadow-lg"
                  >
                    Get Ugle Free
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};
