import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function AboutSection() {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".ab-text > *", {
        autoAlpha: 0,
        y: 36,
        stagger: 0.09,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ab-text", start: "top 80%" },
      });
      gsap.from(avatarRef.current, {
        autoAlpha: 0,
        scale: 0.88,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: avatarRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-10 py-32 border-t border-white/5"
    >
      <div
        className="max-w-6xl mx-auto grid gap-20 items-center"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
        }}
      >
        {/* text */}
        <div className="ab-text">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-400 mb-3">
            About Me
          </p>
          <h2
            className="font-syne font-black leading-tight tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            I build things
            <br />
            for the web.
          </h2>
          <p className="font-sans text-sm text-white/48 leading-relaxed mb-5">
            I'm a full-stack developer based in Guatemala City, passionate about
            crafting digital experiences that are as beautiful as they are
            functional. I work at the intersection of design and engineering.
          </p>
          <p className="font-sans text-sm text-white/48 leading-relaxed mb-10">
            When I'm not pushing pixels or debugging async code, I'm exploring
            new tech, contributing to open source, or hunting for the perfect
            espresso.
          </p>
          <div className="flex gap-6">
            {["GitHub ↗", "LinkedIn ↗", "Dribbble ↗"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-syne font-bold text-sm text-white/40 hover:text-orange-400 transition-colors duration-200 no-underline"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* avatar */}
        <div ref={avatarRef} className="relative">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/8 bg-linear-to-br from-[#0d1a0d] via-[#0a0a1a] to-[#1a0a0a]"
            style={{ aspectRatio: "4/5" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-emerald-400 to-violet-500 mx-auto mb-6 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <p className="font-mono text-xs text-white/25 tracking-widest">
                  ALEJANDRO REYES
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-gradient-to-t from-[#04040c]/80 to-transparent" />
          </div>

          {/* floating badges */}
          <div className="absolute top-6 -right-5 bg-emerald-400 rounded-xl px-4 py-3">
            <p className="font-syne font-black text-2xl text-[#04040c] leading-none">
              5+
            </p>
            <p className="font-mono text-[0.6rem] tracking-widest text-[#04040c]/65 uppercase">
              Years
            </p>
          </div>
          <div className="absolute bottom-6 -left-5 bg-[#0d0a1e] border border-violet-500/30 rounded-xl px-4 py-3">
            <p className="font-syne font-black text-2xl text-violet-400 leading-none">
              40+
            </p>
            <p className="font-mono text-[0.6rem] tracking-widest text-white/30 uppercase">
              Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;