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
  title: "Fintech Platforms",
  description:
    "Building scalable lending systems, transaction workflows, and production-ready backend applications.",
  },
  {
    icon: Landmark,
    title: "Payment & Transaction Systems",
    description:
      "Payment integrations, wallet operations, financial workflows, and reliable transaction processing systems.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Django, FastAPI, React, Next.js, PostgreSQL, CockroachDB, Redis, and scalable full-stack development.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Building responsive web platforms and React Native applications for Android and iOS.",
  },
];

const focusAreas = [
  "Fintech Platforms",
  "Payment Systems",
  "Lending Workflows",
  "Web & Mobile Apps",
  "Transaction Systems",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-x-10 lg:gap-y-8 lg:items-start">
          <Reveal variant="scale" className="lg:row-span-2">
            <div className="relative overflow-hidden rounded-2xl md:rounded-[2.25rem] border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-xl md:rounded-[1.75rem] border border-white/10 bg-black/25">
                <img
                  src="/sid1.png"
                  alt="Sandhya Siddu portrait"
                  className="h-[22rem] w-full object-cover object-[center_18%] sm:h-80 md:h-[420px] md:object-top lg:h-[450px]"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:pt-4">
            <Reveal variant="up">
              <div className="max-w-3xl">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
                  About Me
                </p>
                <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                  Engineering ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
                    production-ready digital
                  </span>{" "}
                  experiences
                </h2>
                <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-white">
                  Designing scalable systems that perform reliably in production.
                </h3>
                <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-slate-300">
                  I&apos;m a product-focused Full Stack Developer & Team Lead with hands-on
                  experience building scalable fintech, lending, and real-time
                  platforms. My work focuses on transforming business requirements into reliable and
                  scalable applications across web and mobile ecosystems.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={120} className="lg:col-span-2">
            <div className="border-t border-white/10 pt-6 sm:pt-8 lg:pt-10">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] xl:gap-10">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    My focus is on transforming business requirements into reliable applications covering scalable workflows, backend systems, and production-ready execution. I work across the complete development lifecycle, from requirement analysis and implementation to deployment and production readiness.
                  </p>
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    I’ve built and contributed to platforms involving payments, financial systems, transaction processing, and lending workflows where accuracy, scalability, and reliability are critical.
                  </p>
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    On the technical side, I work with Django, FastAPI, PostgreSQL, CockroachDB, Redis, React, Next.js, and React Native, building scalable web and mobile applications.
                  </p>
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    I focus on building practical, scalable, and production-ready systems aligned with real-world business needs.
                  </p>
                </div>

                <div className="space-y-5 xl:border-l xl:border-white/10 xl:pl-8">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                      Focus Areas
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#journey"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    See My Journey
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
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
