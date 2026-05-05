import Reveal from "./Reveal";

const journeyItems = [
  {
    year: "Current",
    title: "FinTech Product and Platform Engineering",
    org: "moneyverse.ai",
    description:
      "Building product and platform systems across digital payments, reusable KYC, blockchain-backed identity, and scalable infrastructure that connects traditional finance with decentralized networks.",
  },
  {
    year: "Previously",
    title: "Full-Stack Development and Product Delivery",
    org: "GTPL",
    description:
      "Built backend systems, responsive interfaces, and production workflows while growing through hands-on product delivery in real engineering environments.",
  },
  {
    year: "2018 - 2022",
    title: "B.Tech in Electrical and Electronics Engineering",
    org: "Aditya Engineering College",
    description:
      "Built an engineering mindset grounded in systems thinking, analytical problem solving, and disciplined execution.",
  },
  {
    year: "2016 - 2018",
    title: "Intermediate (MPC)",
    org: "Sri Chaitanya Junior College",
    description:
      "Strengthened my foundation in mathematics and logical reasoning, which still shapes how I approach software design today.",
  },
  {
    year: "2016",
    title: "Secondary School Certificate",
    org: "ZPP High School",
    description:
      "Established the curiosity, consistency, and self-learning habits that continue to define my journey in tech.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="absolute left-[-10%] top-12 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute right-[8%] bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            My Journey
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From foundations to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
              fintech platform work
            </span>
            .
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A quick view of the path from engineering foundations to building
            modern product systems across financial infrastructure and trust-led
            workflows.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-sky-500/20 via-violet-400/60 to-sky-500/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
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
                      <div className="absolute inset-0 rounded-full bg-sky-300/80 blur-sm" />
                    </div>

                    <div
                      className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                        alignRight ? "md:pl-14" : "md:pr-14"
                      }`}
                    >
                      <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                        <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                          {item.year}
                        </span>
                        <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-violet-300">
                          {item.org}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
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
