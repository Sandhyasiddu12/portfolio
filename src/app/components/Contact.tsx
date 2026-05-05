"use client";

import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const contactInfo: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}> = [
  {
    icon: Mail,
    label: "Email",
    value: "maniamarthi@gmail.com",
    href: "mailto:maniamarthi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9502728137",
    href: "tel:+919502728137",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "East Godavari, Andhra Pradesh",
  },
];

const socialLinks: Array<{
  icon: LucideIcon;
  label: string;
  href: string;
}> = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manikrishna-amarthi-001427217/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/manikrishnaamarthi",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:maniamarthi@gmail.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await emailjs.send(
        "service_ua75qhi",
        "template_gkuczmq",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "maniamarthi@gmail.com",
        },
        "1u0kFsxB_HqqxxKVO"
      );

      if (response.status !== 200) {
        throw new Error("Email delivery failed");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 3500);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="absolute right-[-8%] top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute left-[-6%] bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <Reveal variant="left">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
                Get In Touch
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
                  worth shipping
                </span>
                .
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m open to meaningful product work, full-stack collaborations,
                and opportunities where strong engineering and thoughtful delivery
                both matter.
              </p>

              <div className="mt-8 grid gap-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 p-5"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 block text-base text-slate-200 transition-colors duration-300 hover:text-white"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-base text-slate-200">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                  Find Me Online
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <a
                href="/Amarthi_Manikrishna_Final_Resume_compressed.pdf"
                download="Amarthi_Manikrishna_Resume.pdf"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
              >
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  <Field
                    id="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <Field
                  id="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-4 text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-black/35"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                    submitStatus === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-linear-to-r from-sky-500 to-violet-500 text-white hover:-translate-y-1 hover:opacity-95"
                  } disabled:cursor-not-allowed disabled:opacity-70`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

                <div aria-live="polite" className="min-h-6 text-sm">
                  {submitStatus === "success" ? (
                    <p className="text-emerald-300">
                      Thank you for your message. I&apos;ll get back to you soon.
                    </p>
                  ) : null}
                  {submitStatus === "error" ? (
                    <p className="text-rose-300">
                      Failed to send message. Please try again later.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-4 text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-black/35"
      />
    </div>
  );
}
