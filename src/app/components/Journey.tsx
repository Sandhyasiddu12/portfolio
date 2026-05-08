import Reveal from "./Reveal";

const journeyItems = [
  {
    year: "Current",
    title: "Full Stack Developer & Team Lead",
    org: "Gowdanar Technologies Pvt Ltd.",
    description:
      "Building scalable fintech lending platforms, transaction systems, and production-ready web and mobile applications.",
  },
  {
    year: "Oct 2023 - Mar 2024",
    title: "Software Development Intern",
    org: "Gowdanar Technologies Pvt Ltd.",
    description:
      "Worked on frontend and backend development, REST APIs, fintech workflows, and real-world product delivery.",
  },
  {
    year: "2019 - 2023",
    title: "B.Tech in Electronics & Communication Engineering",
    org: "Aditya Engineering College",
    description:
      "Built a strong foundation in problem solving, system design, and software development concepts.",
  },
  {
    year: "2017 - 2019",
    title: "Intermediate (MPC)",
    org: "Mohan Junior College",
    description:
      "Strengthened analytical thinking and mathematical foundations.",
  },
  {
    year: "2016 - 2017",
    title: "Secondary School Education",
    org: "ZPP High School, Navara",
    description:
      "Developed curiosity, consistency, and self-learning habits.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative scroll-mt-24 overflow-hidden px-3 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            My Journey
          </p>

          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            From development foundations to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
              fintech platform development
            </span>
            .
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-400">
            A quick overview of my journey building scalable fintech, lending,
            and transaction-based applications across web and mobile platforms.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
          <div className="absolute left-4 sm:left-5 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-sky-500/20 via-violet-400/60 to-sky-500/20 md:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {journeyItems.map((item, index) => {
              const alignRight = index % 2 !== 0;

              return (
                <Reveal
                  key={`${item.year}-${item.title}`}
                  variant={alignRight ? "right" : "left"}
                  delay={index * 90}
                >
                  <div
                    className={`relative flex items-center ${
                      alignRight ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2" />

                    <div className="absolute left-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0a0a0a] bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.7)] md:left-1/2">

                    </div>

                    <div
                      className={`w-full pl-12 sm:pl-14 md:w-1/2 md:pl-0 ${
                        alignRight ? "md:pl-14" : "md:pr-14"
                      }`}
                    >
                      <article className="rounded-xl sm:rounded-2xl md:rounded-[1.75rem] border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                        <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                          {item.year}
                        </span>
                        <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-violet-300">
                          {item.org}
                        </p>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-slate-400">
                          {item.description}
                        </p>
                      </article>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
