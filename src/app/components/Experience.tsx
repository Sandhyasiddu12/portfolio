import { Calendar, ChevronRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const experience = {
  company: "GTPL",
  role: "Software Developer and Wellness Project Team Leader",
  duration: "Sep 2023 - Present",
  location: "India",
  type: "Full-Time (Promoted from Intern)",
  responsibilities: [
    "Lead a wellness project team, coordinating cross-functional efforts to deliver product outcomes.",
    "Deployed live web applications using Docker on Google Cloud Platform.",
    "Built and released mobile applications on Google Play Store.",
    "Designed scalable backend architectures with Django REST Framework.",
    "Developed responsive frontend experiences with modern React patterns.",
    "Integrated AI workflows to enhance user experiences in wellness applications.",
  ],
  achievements: [
    "Promoted from intern to full-time developer within 6 months.",
    "Led delivery of a live wellness platform improving employee engagement.",
    "Shipped cloud-hosted products with strong uptime and deployment discipline.",
    "Published mobile applications with real production usage.",
  ],
};

const timeline = [
  {
    title: "Full-Time Developer and Team Lead",
    subtitle: "Promoted and trusted with wellness product delivery",
    date: "Mar 2024 - Present",
  },
  {
    title: "Software Developer Intern",
    subtitle: "Started professional engineering work at GTPL",
    date: "Sep 2023 - Feb 2024",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            Experience
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Professional work shaped by product ownership and execution.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal variant="left">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    {experience.company}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-violet-300">
                    {experience.type}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-sky-300" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-sky-300" />
                    {experience.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    Responsibilities
                  </h4>
                  <div className="mt-4 grid gap-3">
                    {experience.responsibilities.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    Highlights
                  </h4>
                  <div className="mt-4 grid gap-3">
                    {experience.achievements.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-white/10 bg-black/25 px-4 py-3"
                      >
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-8">
              <h4 className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                Career Timeline
              </h4>
              <div className="mt-6 grid gap-5">
                {timeline.map((item, index) => (
                  <div key={item.title} className="relative pl-8">
                    {index !== timeline.length - 1 ? (
                      <div className="absolute left-[7px] top-5 h-[calc(100%+1.25rem)] w-px bg-linear-to-b from-sky-400/60 to-transparent" />
                    ) : null}
                    <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-[#0a0a0a] bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                      <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                      <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.22em] text-violet-300">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
