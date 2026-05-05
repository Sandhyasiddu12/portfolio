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
      className="relative min-h-screen overflow-hidden bg-transparent px-4 sm:px-2 lg:px-12"
      style={{
        backgroundImage: "url(/mine1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.42)_58%,rgba(2,6,23,0.72)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center">
        <div className="w-full py-20">
          <div className="max-w-3xl">
            <Reveal variant="up">
              <div className="flex flex-wrap items-center gap-3 text-slate-300">
                <p className="text-lg font-medium sm:text-xl">Hello I&apos;m</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 backdrop-blur-xl">
                  <MapPin className="h-4 w-4 text-sky-300" />
                  Bengaluru, Karnataka
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Manikrishna
              </h1>
            </Reveal>

            <Reveal variant="up" delay={220}>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Product-Focused{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-cyan-200 to-violet-300">
                  Technical Architect
                </span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={320}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I build scalable fintech, B2B, and real-time platforms with a
                strong focus on product thinking, clean architecture, and
                production-ready execution across web and mobile systems.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={320} className="mt-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/Amarthi_Manikrishna_Final_Resume_compressed.pdf"
                  download="Amarthi_Manikrishna_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <span>Download Resume</span>
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal variant="up" delay={380} className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
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
