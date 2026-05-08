"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  DollarSign,
  HandCoins,
  Shield,
  Smartphone,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
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
    id: "institutional-digital-lending",
    title: "Institutional Digital Lending Platform",
    description:
      "A scalable lending platform for banks and financial institutions with dynamic workflows and transaction systems.",

    longDescription:
      "Built an institutional digital lending platform focused on loan lifecycle management, repayment workflows, foreclosure handling, loan extensions, wallet systems, and secure financial transaction management. Developed scalable backend systems, dynamic product workflows, RBAC, and employee onboarding modules for financial institutions.",

    icon: Shield,

    technologies: [
      "Django",
      "React",
      "Next.js",
      "React Native",
      "PostgreSQL",
      "CockroachDB",
      "Kafka",
      "Redis",
      "Docker",
      "GCP",
    ],

    features: [
      "Dynamic loan workflows",
      "Loan lifecycle management",
      "RBAC & employee onboarding",
      "Repayment & foreclosure",
      "Wallet & transaction systems",
    ],

    status: "Production Ready",
    category: "FinTech",
    accent: "99, 102, 241",
    span: "md:col-span-2 md:row-span-1",
  },

  {
    id: "p2p-lending-platform",
    title: "P2P Lending Platform",

    description:
      "A peer-to-peer lending platform connecting lenders and borrowers through secure digital workflows.",

    longDescription:
      "Worked on a scalable P2P lending application with borrower onboarding, lender management, repayment tracking, notifications, wallet systems, and transaction workflows using microservices architecture and REST APIs.",

    icon: HandCoins,

    technologies: [
      "Django",
      "React",
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],

    features: [
      "Borrower & lender onboarding",
      "Repayment tracking",
      "Wallet management",
      "Transaction history",
      "Payment integrations",
    ],

    status: "Production Ready",
    category: "FinTech",
    accent: "34, 197, 94",
    span: "md:col-span-1 md:row-span-1",
  },

  {
    id: "payment-transaction-system",

    title: "Payment & Transaction System",

    description:
      "Backend systems for payment workflows, wallet operations, and financial transaction processing.",

    longDescription:
      "Developed scalable backend systems for payment processing, wallet integrations, transaction workflows, and financial data handling with secure API integrations and production-ready architecture.",

    icon: DollarSign,

    technologies: [
      "Django",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "React",
      "Next.js",
    ],

    features: [
      "Payment workflows",
      "Wallet operations",
      "Transaction processing",
      "REST API integrations",
      "Financial data handling",
    ],

    status: "Production Ready",
    category: "FinTech",
    accent: "59, 130, 246",
    span: "md:col-span-2 xl:row-span-2",
  },

  {
    id: "rbac-management-system",

    title: "RBAC & Employee Management",

    description:
      "A secure role-based access management system for financial institutions.",

    longDescription:
      "Built branch management, employee onboarding, and module-based permission systems allowing financial institutions to securely manage employees, modules, and operational access.",

    icon: Shield,

    technologies: [
      "Django",
      "React",
      "Next.js",
      "PostgreSQL",
      "JWT Authentication",
    ],

    features: [
      "Branch management",
      "Employee onboarding",
      "Role-based access control",
      "Module permissions",
      "Secure authentication",
    ],

    status: "Production Ready",
    category: "Enterprise",
    accent: "168, 85, 247",
    span: "md:col-span-1 xl:row-span-2",
  },

  {
    id: "mobile-fintech-app",

    title: "Fintech Mobile Application",

    description:
      "A React Native application for lending workflows, transactions, and wallet systems.",

    longDescription:
      "Built React Native mobile applications focused on lending operations, transaction visibility, wallet systems, repayment tracking, and notification workflows across Android and iOS platforms.",

    icon: Smartphone,

    technologies: [
      "React Native",
      "Django",
      "REST APIs",
      "Firebase",
      "CockroachDB",
    ],

    features: [
      "Android & iOS support",
      "Wallet systems",
      "Loan tracking",
      "Push notifications",
      "Transaction visibility",
    ],

    status: "Production Ready",
    category: "Mobile App",
    accent: "14, 165, 233",
    span: "md:col-span-1 md:row-span-1",
  },

  {
    id: "financial-workflow-system",

    title: "Financial Workflow System",

    description:
      "A scalable workflow system for financial operations and transaction-based processes.",

    longDescription:
      "Developed workflow-driven financial systems supporting approvals, operational tracking, scalable backend processing, and dynamic transaction workflows for fintech platforms.",

    icon: DollarSign,

    technologies: [
      "FastAPI",
      "Django",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],

    features: [
      "Dynamic workflows",
      "Approval processes",
      "Backend processing",
      "Transaction orchestration",
      "Microservices architecture",
    ],

    status: "In Development",
    category: "FinTech",
    accent: "245, 158, 11",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const closeProjectModal = () => setSelectedProjectId(null);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;
  const SelectedProjectIcon = selectedProject?.icon;

  useEffect(() => {
    if (!selectedProjectId) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProjectModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProjectId]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-3 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            Selected Works
          </p>

          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Building scalable{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
              fintech and digital products
            </span>
            .
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-400">
            Fintech, lending, transaction systems, and web & mobile applications
            built with real-world product experience and production-ready delivery.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 auto-rows-[minmax(220px,auto)] gap-3 sm:mt-14 sm:grid-cols-2 sm:auto-rows-[minmax(250px,auto)] sm:gap-6 lg:grid-cols-3 lg:auto-rows-[minmax(260px,auto)]">
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
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg sm:rounded-xl lg:rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 text-left backdrop-blur-2xl"
                  style={{
                    boxShadow: `0 30px 120px -70px rgba(${project.accent}, 0.7)`,
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-b from-white/[0.05] via-transparent to-black/15" />

                  <div className="relative flex h-full flex-col gap-5 sm:gap-6">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-black/[0.35] px-2 sm:px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                          {project.category}
                        </span>
                        {project.status ? (
                          <span className="rounded-full border border-white/10 bg-white/[0.07] px-2 sm:px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200">
                            {project.status}
                          </span>
                        ) : null}
                      </div>

                      <div className="inline-flex h-10 sm:h-12 w-10 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-2xl border border-white/10 bg-black/25 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="max-w-2xl text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-slate-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-black/30 px-2 sm:px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto border-t border-white/10 pt-4 sm:pt-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                        Key focus
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.features.slice(0, 2).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[11px] leading-5 text-slate-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                          Open project brief
                        </span>
                        <span className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition-all duration-300 ease-out group-hover:scale-95 group-hover:bg-white group-hover:text-black">
                          Explore
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-sky-300 transition-all duration-300 ease-out group-hover:h-5 group-hover:w-5 group-hover:bg-black/10 group-hover:text-black">
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </span>
                      </div>
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
              onClick={closeProjectModal}
              className="fixed inset-0 z-[70] cursor-pointer bg-black/80 backdrop-blur-xl"
            />

            <div className="fixed inset-0 z-[80] flex items-stretch justify-center p-0 sm:items-center sm:p-4 md:p-6">
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`project-title-${selectedProject.id}`}
                className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden overscroll-contain bg-[#101010] shadow-[0_40px_140px_-50px_rgba(0,0,0,0.95)] sm:h-auto sm:max-h-[calc(100vh-2rem)] sm:rounded-xl sm:border sm:border-white/10 lg:rounded-[2rem]"
              >
                <div className="flex items-center justify-between border-b border-white/10 bg-[#101010]/95 px-4 py-3 backdrop-blur-xl sm:px-5">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                      Project Details
                    </p>
                    <p className="mt-1 text-sm text-slate-200 sm:hidden">
                      {selectedProject.category}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeProjectModal}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white/10"
                    aria-label="Close project details"
                  >
                    <ArrowLeft className="h-4 w-4 sm:hidden" />
                    <span className="sm:hidden">Back</span>
                    <span className="hidden sm:inline">Close</span>
                    <X className="hidden h-4 w-4 sm:block" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative overflow-hidden p-5 sm:p-8 lg:p-10">
                      <div className="relative space-y-6 sm:space-y-8">
                        <div className="inline-flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-lg sm:rounded-[1.5rem] border border-white/10 bg-black/30 text-white">
                          {SelectedProjectIcon ? (
                            <SelectedProjectIcon className="h-5 sm:h-7 w-5 sm:w-7" />
                          ) : null}
                        </div>

                        <div>
                          <span className="inline-flex rounded-full border border-white/10 bg-black/[0.35] px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                            {selectedProject.category}
                          </span>
                          <h3
                            id={`project-title-${selectedProject.id}`}
                            className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
                          >
                            {selectedProject.title}
                          </h3>
                          {selectedProject.status ? (
                            <p className="mt-2 sm:mt-4 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                              {selectedProject.status}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 sm:p-7 sm:pt-0 md:p-8 md:pt-0 lg:p-10 lg:pt-10">
                      <div className="space-y-6 sm:space-y-8">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                            Project Overview
                          </p>
                          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-slate-300">
                            {selectedProject.longDescription}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                            Key Features
                          </p>
                          <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3">
                            {selectedProject.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2 sm:gap-3 rounded-lg sm:rounded-[1.25rem] border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3"
                              >
                                <span className="mt-1 sm:mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.8)]" />
                                <span className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
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
                          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                            {selectedProject.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-white/10 bg-black/25 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-slate-300"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
                        <a
                          href="#contact"
                          onClick={closeProjectModal}
                          className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
                        >
                          Discuss a Similar Build
                        </a>
                        <a
                          href="/Manikrishna_EXP_Resume.pdf"
                          download="Amarthi_Manikrishna_Resume.pdf"
                          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                          View Resume
                        </a>
                      </div> */}
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
