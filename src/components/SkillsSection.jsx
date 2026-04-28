import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";
import { useRef } from "react";
import SkillBar from "@/components/Skillbar";
import { SKILLS } from "@/data/SkillsData";
import { TOOLS } from "@/data/ToolsData";

function SkillsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".sk-hdr > *", {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".sk-hdr", start: "top 82%" },
      });
      gsap.from(".skill-row", {
        autoAlpha: 0,
        x: -28,
        stagger: 0.07,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skill-row", start: "top 88%" },
      });
      gsap.from(".skill-fill", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.07,
        duration: 1.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skill-row", start: "top 88%" },
      });
      ScrollTrigger.batch(".tool-pill", {
        onEnter: (els) =>
          gsap.from(els, {
            autoAlpha: 0,
            scale: 0.78,
            stagger: 0.06,
            duration: 0.5,
            ease: "back.out(1.7)",
          }),
        start: "top 88%",
        once: true,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-10 py-32 border-t border-white/5"
    >
      <div
        className="max-w-6xl mx-auto grid gap-20 items-start"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
        }}
      >
        {/* left — bars */}
        <div>
          <div className="sk-hdr mb-10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-violet-400 mb-3">
              Expertise
            </p>
            <h2
              className="font-syne font-black leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Skills &<br />
              Technologies
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {SKILLS.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* right — toolbox */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-violet-400 mb-3">
            Toolbox
          </p>
          <h3 className="font-syne font-bold text-xl text-white mb-7">
            Tools I Use Daily
          </h3>

          <div className="flex flex-wrap gap-3 mb-12">
            {TOOLS.map((t) => (
              <span
                key={t}
                data-hover
                className="tool-pill font-mono text-xs text-white/55 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 will-change-transform cursor-default"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="bg-emerald-400/5 border border-emerald-500/15 rounded-2xl p-7">
            <p className="font-syne font-bold text-emerald-400 text-base mb-4">
              What I bring
            </p>
            <ul className="space-y-2 list-disc list-inside">
              {[
                "Clean, maintainable code that teams love",
                "Performance-first mindset on every layer",
                "Product thinking beyond just engineering",
                "Clear communication & async-first workflow",
              ].map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-white/50 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;