import {
  Blocks,
  Code,
  Landmark,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

const highlights: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Blocks,
    title: "Product and Architecture",
    description:
      "Translating business requirements into reliable architecture, workflows, and production-ready systems.",
  },
  {
    icon: Landmark,
    title: "FinTech and Transaction Systems",
    description:
      "Payments, financial data systems, transaction processing, and cross-border flows built for accuracy and traceability.",
  },
  {
    icon: Code,
    title: "Full-Stack Platforms",
    description:
      "FastAPI, Django, React, Next.js, PostgreSQL, CockroachDB, Redis, and practical full-stack delivery.",
  },
  {
    icon: Smartphone,
    title: "Mobile and Blockchain",
    description:
      "React Native apps for Android and iOS, plus hands-on work with Sui, Stellar, wallet flows, and token transfers.",
  },
];

const focusAreas = [
  "Payments Platforms",
  "Financial Data Systems",
  "Cross-Border Flows",
  "Web and Mobile Platforms",
  "Blockchain and Wallets",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute right-[-8%] bottom-12 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl sm:p-6">
              <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-sky-400/15 blur-[90px]" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25">
                <img
                  src="/mine.png"
                  alt="Amarthi Manikrishna portrait"
                  className="h-[420px] w-full object-cover object-top sm:h-[480px] lg:h-[520px]"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal variant="up">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
                  About Me
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Engineering ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
                    polished, production-ready
                  </span>{" "}
                  experiences.
                </h2>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-7">
                <h3 className="text-2xl font-semibold text-white">
                  Builder, collaborator, and delivery-focused teammate.
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  I&apos;m a product-focused technical architect with hands-on
                  experience building scalable fintech, B2B, and real-time
                  platforms. My work sits at the intersection of product and
                  engineering, translating business requirements into reliable,
                  scalable systems.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  I&apos;m involved across the full lifecycle, from defining
                  system architecture and workflows to implementation,
                  deployment, and production readiness. My approach emphasizes
                  clean architecture, practical design decisions, and alignment
                  with real business needs.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  I&apos;ve worked on payments, financial data systems,
                  transaction processing, booking and availability platforms,
                  and cross-border flows, with a strong focus on accuracy,
                  traceability, system reliability, and end-to-end ownership.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  On the technical side, I work with FastAPI, Django,
                  PostgreSQL, CockroachDB, Redis, React, Next.js, and React
                  Native for Android and iOS. I&apos;ve also explored
                  blockchain-based systems with Sui and Stellar, including
                  wallet interactions, token transfers, and secure transaction
                  models.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <a
                  href="#journey"
                  className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  See My Journey
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <Reveal
                key={highlight.title}
                variant={index % 2 === 0 ? "up" : "rotate"}
                delay={index * 90}
                className="h-full"
              >
                <div className="flex h-full gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-sky-300">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-white">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
