import { useGSAP, gsap } from "../lib/gsap";
import { useRef, useState } from "react";

function ContactSection() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      gsap.from(".ct-inner > *", {
        autoAlpha: 0,
        y: 44,
        stagger: 0.11,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-inner", start: "top 78%" },
      });
    },
    { scope: sectionRef },
  );

  const copyEmail = () => {
    navigator.clipboard?.writeText("alex@example.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-10 py-32 border-t border-white/5"
    >
      <div className="ct-inner max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs tracking-[0.22em] uppercase text-emerald-400 mb-6">
          Get In Touch
        </p>

        <h2
          className="font-syne font-black leading-[0.95] tracking-tight text-white mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
        >
          Let's build
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
          >
            something great.
          </span>
        </h2>

        <p
          className="font-sans text-white/40 leading-relaxed max-w-sm mx-auto mb-14"
          style={{ fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}
        >
          Have a project in mind or just want to chat? My inbox is always open.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <button
            onClick={copyEmail}
            data-hover
            className="font-syne font-bold text-sm text-[#04040c] bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 px-9 py-3.5 rounded-full tracking-wide border-0 cursor-pointer"
          >
            {copied ? "✓ Copied!" : "Copy Email"}
          </button>
          <a
            href="mailto:alex@example.dev"
            className="font-syne font-bold text-sm text-white border border-white/15 hover:border-white/35 transition-colors duration-200 px-9 py-3.5 rounded-full tracking-wide"
          >
            Send Message
          </a>
        </div>

        <div className="w-full h-px bg-white/6 mb-10" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="font-syne font-black text-lg text-white/28">
            <span className="text-emerald-400">{"<"}</span>dev
            <span className="text-emerald-400">{"/>"}</span>
          </span>
          <p className="font-mono text-xs tracking-widest text-white/20">
            © 2024 Alejandro Reyes · Crafted with care
          </p>
          <div className="flex gap-5">
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-mono text-xs tracking-wide text-white/28 hover:text-white/55 transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;