import Reveal from "./Reveal";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const focusAreas = ["Fintech Platforms", "Mobile Apps", "Lending Systems", "Transaction Workflows",];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12 pb-28 sm:pb-32 pt-8 sm:pt-12">
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up">
          <div className="rounded-lg sm:rounded-xl lg:rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-2xl">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                {/* <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 sm:px-4 py-1 sm:py-2 text-xs font-medium uppercase tracking-[0.28em] text-emerald-300">
                  Available for collaborations
                </span> */}
                <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                  Siddu Sandhya
                </h3>
                <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-slate-400">
                  Full Stack Developer & Team Lead building scalable fintech, lending,
                  and production-ready web & mobile applications.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                <div>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    Quick Links
                  </p>
                  <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3">
                    {quickLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    Focus Areas
                  </p>
                  <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3">
                    {focusAreas.map((area) => (
                      <p key={area} className="text-xs sm:text-sm text-slate-300">
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6 text-xs sm:text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>© {currentYear} Siddu Sandhya.</p>
              <a
                href="#home"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Back to Top
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
