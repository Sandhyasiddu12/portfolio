import Reveal from "./Reveal";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const focusAreas = ["Web Platforms", "Mobile Apps", "Blockchain Products", "AI Integrations"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-4 pb-32 pt-8 sm:px-6 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-emerald-300">
                  Available for collaborations
                </span>
                <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                  Amarthi Manikrishna
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                  Full-stack developer building product-led experiences across
                  fintech, blockchain, mobile, and AI.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    Quick Links
                  </p>
                  <div className="mt-4 grid gap-3">
                    {quickLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                    Focus Areas
                  </p>
                  <div className="mt-4 grid gap-3">
                    {focusAreas.map((area) => (
                      <p key={area} className="text-sm text-slate-300">
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© {currentYear} Amarthi Manikrishna. Built with Tailwind and motion.</p>
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
