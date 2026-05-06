"use client";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  const socialLinks: Array<{
    href: string;
    label: string;
    icon: LucideIcon;
  }> = [
    {
      href: "https://www.linkedin.com/in/manikrishna-amarthi-001427217/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://github.com/manikrishnaamarthi",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "mailto:maniamarthi@gmail.com",
      label: "Email",
      icon: Mail,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent px-3 sm:px-4 md:px-6 lg:px-12"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/mine1.png)",
          backgroundPosition: "78% center",
        }}
        initial={{ scale: 1.03, x: 30 }}
        animate={{ scale: 1.03, x: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
      <div className="absolute inset-0 bg-black/46" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.42)_58%,rgba(2,6,23,0.72)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-2 sm:px-0">
        <div className="w-full py-16 sm:py-20">
          <div className="max-w-3xl">
            <Reveal variant="up">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 text-slate-300">
                <p className="text-base sm:text-lg font-medium md:text-xl">Hello I&apos;m</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-slate-300 backdrop-blur-xl">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-sky-300" />
                  Bengaluru, Karnataka
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Manikrishna
              </h1>
            </Reveal>

            <Reveal variant="up" delay={220}>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Product-Focused{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-cyan-200 to-violet-300">
                  Technical Architect
                </span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={320}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">
                I design and build scalable fintech systems, payment platforms, and real-world applications, with a strong focus on product thinking, clean architecture, and production-ready execution across web and mobile platforms.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={320} className="mt-8">
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 w-full sm:w-auto"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/Amarthi_Manikrishna_Final_Resume_compressed.pdf"
                  download="Amarthi_Manikrishna_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 w-full sm:w-auto"
                >
                  <span>Download Resume</span>
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal variant="up" delay={380} className="mt-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}
