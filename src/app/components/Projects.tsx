"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  DollarSign,
  HandCoins,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  technologies: string[];
  features: string[];
  status: string;
  category: string;
  accent: string;
  span: string;
};

const projects: Project[] = [
  {
    id: "tradedge-platform",
    title: "Edge-Native Financial Platform",
    description:
      "A financial operating system for traders to manage payments, financial data, and compliance in one place.",
    longDescription:
      "Architecting a cross-border financial platform using Xflow APIs, designed as a unified system for managing payments, receivables, financial data, and compliance workflows. The platform acts as a financial operating system for traders, enabling structured payment flows, system-level financial tracking, and integration with external financial services. Focused on scalability, modular architecture, and real-world financial workflows.",
    icon: Shield,
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "GCP",
      "Xflow APIs",
      "Microservices",
      "React",
      "Next.js",
      "cockroach db"
    ],
    features: [
      "Cross-border payment integration (Xflow)",
      "Financial data and transaction management",
      "Receivables and payout workflows",
      "Compliance-aware system design",
      "Microservices-based architecture",
    ],
    status: "In Development",
    category: "FinTech",
    accent: "99, 102, 241",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "b2b-payments-platform",
    title: "B2B Payments Platform",
    description:
      "A scalable platform for handling business payments through API integrations and transaction orchestration.",
    longDescription:
      "Designed and built a B2B payments platform focused on handling business transactions through external API integrations. The system manages end-to-end payment flows including initiation, processing, tracking, and system-level orchestration. Emphasis was placed on building a scalable backend capable of handling high-volume financial operations with reliability and structured transaction handling.",
    icon: DollarSign,
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "API Integrations",
      "Distributed Systems",
      "React",
      "Next.js",
    ],
    features: [
      "End-to-end payment flow orchestration",
      "External API integrations for payments",
      "Transaction lifecycle management",
      "Scalable backend architecture",
      "Secure financial data handling",
    ],
    status: "Production Ready",
    category: "FinTech",
    accent: "34, 197, 94",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "wellness-booking",
    title: "Regenerative Wellness Booking App",
    description:
      "A 60-day therapy booking product with smart scheduling, progress tracking, and real-time updates.",
    longDescription:
      "A comprehensive wellness booking mobile application designed around long-running therapy journeys. The product combines a user-friendly booking flow, scheduling logic, therapist coordination, and real-time updates to support a structured 60-day care experience.",
    icon: Smartphone,
    technologies: [
      "React Native",
      "Django",
      "GCP",
      "Real-time Database",
      "React",
      "Next.js",
    ],
    features: [
      "60-day therapy program management",
      "Smart session scheduling algorithm",
      "Real-time notifications and updates",
      "User progress tracking",
      "Therapist dashboard",
    ],
    status: "",
    category: "Mobile App",
    accent: "59, 130, 246",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "blockchain-kyc",
    title: "Blockchain KYC Platform",
    description:
      "Secure identity verification powered by SUI blockchain and advanced authentication layers.",
    longDescription:
      "A secure identity and compliance platform built around blockchain-backed verification workflows. The system combines decentralized verification ideas with practical product needs like authentication, document safety, compliance visibility, and user trust.",
    icon: Shield,
    technologies: [
      "React Native",
      "Django",
      "SUI Blockchain",
      "React",
      "Next.js",
      "Move Language",
    ],
    features: [
      "Decentralized identity verification",
      "JWT authentication system",
      "Fiat-to-NFT minting logic",
      "Secure document storage",
      "Compliance dashboard",
    ],
    status: "",
    category: "Blockchain",
    accent: "168, 85, 247",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "stablecoin-payments",
    title: "Stablecoin Payment Platform",
    description:
      "High-performance transaction experience optimized for speed, scale, and low-cost transfers.",
    longDescription:
      "A fintech platform focused on stablecoin transactions, built to balance speed, security, and a reliable payment workflow. The experience centers on usability while still supporting wallet connectivity, transaction records, and scalable backend handling.",
    icon: DollarSign,
    technologies: ["React", "Django", "Blockchain APIs", "React.js", "Next.js"],
    features: [
      "Send and receive stablecoins",
      "Multi-wallet integration",
      "Transaction history",
      "Low-cost processing",
      "Advanced security protocols",
    ],
    status: "Production Ready",
    category: "FinTech",
    accent: "14, 165, 233",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "p2p-lending",
    title: "P2P Lending Platform",
    description:
      "A lending product connecting borrowers and lenders through secure, transparent flows.",
    longDescription:
      "A peer-to-peer lending application designed to streamline direct borrower-lender interaction. The product explores smarter credit workflows, secure agreements, transparent repayment visibility, and stronger trust throughout the lending lifecycle.",
    icon: HandCoins,
    technologies: [
      "React Native",
      "Node.js",
      "CockroachDB",
      "Django",
      "React",
      "Next.js",
    ],
    features: [
      "Direct borrower-lender matching",
      "Automated credit scoring",
      "Secure loan agreements via smart contracts",
      "Real-time payment tracking",
      "Dispute resolution system",
    ],
    status: "",
    category: "FinTech",
    accent: "245, 158, 11",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;
  const SelectedProjectIcon = selectedProject?.icon;

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="absolute right-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-[-8%] h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            Selected Works
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Product-focused builds with{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
              depth, scale, and delivery
            </span>
            .
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Mobile, blockchain, fintech, and platform work shaped by real-world
            product constraints rather than demo-only engineering.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(280px,auto)] gap-6 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.id}
                variant={index === 0 ? "scale" : index % 2 === 0 ? "up" : "rotate"}
                delay={index * 80}
                className={project.span}
              >
                <motion.button
                  type="button"
                  layoutId={`project-${project.id}`}
                  onClick={() => setSelectedProjectId(project.id)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left backdrop-blur-2xl sm:p-8"
                  style={{
                    boxShadow: `0 30px 120px -70px rgba(${project.accent}, 0.7)`,
                    backgroundImage: `radial-gradient(circle at top right, rgba(${project.accent}, 0.28), transparent 42%), radial-gradient(circle at bottom left, rgba(${project.accent}, 0.16), transparent 32%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-b from-white/[0.05] via-transparent to-black/15" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col justify-between gap-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-3">
                        <span className="rounded-full border border-white/10 bg-black/[0.35] px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                          {project.category}
                        </span>
                        {/* <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                          {project.status}
                        </span> */}
                      </div>

                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Built for real-world product delivery</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
                        Explore
                      </span>
                    </div>
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectId(null)}
              className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-xl"
            />

            <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-[0_40px_140px_-50px_rgba(0,0,0,0.95)]"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div
                    className="relative overflow-hidden p-8 sm:p-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at top right, rgba(${selectedProject.accent}, 0.38), transparent 42%), radial-gradient(circle at bottom left, rgba(${selectedProject.accent}, 0.22), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.1))`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(null)}
                      className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-slate-200 transition-colors duration-300 hover:bg-black/50"
                      aria-label="Close project details"
                    >
                      X
                    </button>

                    <div className="relative flex h-full min-h-[280px] flex-col justify-between">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/30 text-white">
                        {SelectedProjectIcon ? (
                          <SelectedProjectIcon className="h-7 w-7" />
                        ) : null}
                      </div>

                      <div>
                        <span className="inline-flex rounded-full border border-white/10 bg-black/[0.35] px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                          {selectedProject.category}
                        </span>
                        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                          {selectedProject.title}
                        </h3>
                        <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                          {selectedProject.status}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="max-h-[90vh] overflow-y-auto p-8 sm:p-10">
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                          Project Overview
                        </p>
                        <p className="mt-4 text-base leading-8 text-slate-300">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                          Key Features
                        </p>
                        <div className="mt-4 grid gap-3">
                          {selectedProject.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.8)]" />
                              <span className="text-sm leading-7 text-slate-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                          Technology Stack
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          {selectedProject.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
                        <a
                          href="#contact"
                          onClick={() => setSelectedProjectId(null)}
                          className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
                        >
                          Discuss a Similar Build
                        </a>
                        <a
                          href="/Amarthi_Manikrishna_Final_Resume_compressed.pdf"
                          download="Amarthi_Manikrishna_Resume.pdf"
                          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                          View Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
