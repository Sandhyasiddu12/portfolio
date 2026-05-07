"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-white/10 bg-black/[0.55] shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)]"
              : "border-white/5 bg-black/20"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-slate-200 uppercase"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.75)]" />
            <span className="hidden sm:inline">Amarthi Manikrishna</span>
            <span className="sm:hidden">AM</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/Manikrishna_EXP_Resume.pdf"
              download="Amarthi_Manikrishna_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors duration-300 hover:bg-white/10 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:hidden"
          >
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-white/10 bg-black/75 p-3 sm:p-4 backdrop-blur-2xl shadow-[0_24px_80px_-40px_rgba(0,0,0,0.95)]">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg sm:rounded-2xl border border-transparent px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-300 transition-colors duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/Manikrishna_EXP_Resume.pdf"
                  download="Amarthi_Manikrishna_Resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-2xl bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
