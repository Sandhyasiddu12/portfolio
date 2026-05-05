import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const education = [
  {
    degree: "B.Tech in Electrical and Electronics Engineering",
    institution: "Aditya Engineering College",
    year: "2022",
    grade: "CGPA 7.2",
    location: "Andhra Pradesh, India",
    type: "Bachelor's Degree",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2018",
    grade: "75%",
    location: "Andhra Pradesh, India",
    type: "Higher Secondary",
  },
  {
    degree: "Secondary School Certificate",
    institution: "ZPP High School",
    year: "2016",
    grade: "GPA 8.7",
    location: "Andhra Pradesh, India",
    type: "Secondary Education",
  },
];

const languages = ["Telugu", "English"];

const personalInfo = [
  { label: "Date of Birth", value: "04/05/2000" },
  { label: "Address", value: "Navara, East Godavari, Andhra Pradesh" },
  { label: "Willing to Relocate", value: "Yes" },
];

export default function Education() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            Education
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Academic foundations and personal background.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            {education.map((item, index) => (
              <Reveal
                key={item.degree}
                variant={index % 2 === 0 ? "left" : "right"}
                delay={index * 80}
              >
                <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-sky-300">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-300">
                          {item.type}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-white">
                          {item.degree}
                        </h3>
                        <p className="mt-2 text-sm text-slate-300">{item.institution}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-slate-400">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-sky-300" />
                        {item.year}
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-sky-300" />
                        {item.grade}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-sky-300" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6">
            <Reveal variant="scale">
              <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-7">
                <h3 className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                  Languages
                </h3>
                <div className="mt-5 grid gap-4">
                  {languages.map((language) => (
                    <div
                      key={language}
                      className="rounded-[1.25rem] border border-white/10 bg-black/25 px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-white">{language}</span>
                        <span className="text-xs uppercase tracking-[0.22em] text-emerald-300">
                          Fluent
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="scale" delay={120}>
              <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-7">
                <h3 className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                  Personal Information
                </h3>
                <div className="mt-5 grid gap-4">
                  {personalInfo.map((item) => (
                    <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-black/25 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
