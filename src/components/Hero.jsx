import { useGSAP, gsap } from "@/lib/gsap";
import { useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".h-eyebrow",{ autoAlpha: 0, y: -20, duration: 0.7 }, 0.2)
      .from(".h-name",   { autoAlpha: 0, y:  80, skewY: 2, duration: 1.1 }, 0.4)
      .from(".h-divider",{ scaleX: 0, transformOrigin: "left center", duration: 0.9 }, 0.85)
      .from(".h-role",   { autoAlpha: 0, y: 20, duration: 0.7, stagger: 0.1 }, 1.0)
      .from(".h-desc",   { autoAlpha: 0, y: 18, duration: 0.7 }, 1.15)
      .from(".h-stat",   { autoAlpha: 0, y: 24, stagger: 0.08, duration: 0.6 }, 1.2)
      .from(".h-cta",    { autoAlpha: 0, y: 16, stagger: 0.12, duration: 0.6 }, 1.35);

    gsap.to(".glow-a", { y: -40, duration: 6,  ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(".glow-b", { y:  30, duration: 8,  ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });
    gsap.to(".glow-c", { x:  24, duration: 10, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 3 });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden px-10 pt-24 pb-10"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(52,211,153,.03) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div
        className="glow-a absolute top-1/3 left-1/2 w-lg h-lg rounded-full pointer-events-none will-change-transform -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-b absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-c absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="h-eyebrow flex items-center gap-3 mb-6">
        <span className="w-10 h-px bg-emerald-400" />
        <span className="font-mono text-xs tracking-[0.22em] uppercase text-emerald-400">
          Disponible para cualquier proyecto
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="relative flex-1 flex items-center">
        <h1
          className="h-name font-syne font-black leading-[0.88] tracking-tighter text-white w-full"
          style={{ fontSize: "clamp(4.5rem,11vw,10rem)" }}
        >
          Joaquín
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
          >
            Figueroa
          </span>
        </h1>
      </div>

      <div className="relative">
        <div className="h-divider w-full h-px bg-white/8 mb-7 will-change-transform" />

        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          <div className="flex flex-col justify-between gap-4">
            <div className="h-role flex items-center gap-2">
              <span className="w-5 h-px bg-emerald-400" />
              <span className="font-syne font-semibold text-white/60 text-sm tracking-wide">
                Desarrollador de Software Full-Stack
              </span>
            </div>
            <div className="h-role flex items-center gap-2">
              <span className="w-5 h-px bg-violet-400" />
              <span className="font-syne font-semibold text-white/60 text-sm tracking-wide">
                UI/UX Designer
              </span>
            </div>
            <div className="h-role flex items-center gap-2">
              <span className="w-5 h-px bg-white/60" />
              <span className="font-syne font-semibold text-white/60 text-sm tracking-wide">
                Contribuidor Open-Source
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="h-desc font-sans text-sm text-white/40 leading-relaxed">
              Desarrollador de software con experiencia en la creación de
              experiencias digitales intuitivas e interactivas, desde interfaces que le agradan al usuario final hasta
              sistemas robustos, escalables y seguros.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="flex gap-7">
              {[
                ["1+", "Año"],
                ["15+", "Proyectos"],
                ["5+", "Clientes"],
              ].map(([n, l]) => (
                <div key={l} className="h-stat">
                  <div className="font-syne font-black text-2xl text-white leading-none">
                    {n}
                  </div>
                  <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-white/25 mt-0.5">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#proyectos"
                className="h-cta font-syne font-bold text-xs text-[#04040c] bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 px-6 py-2.5 rounded-full tracking-wide"
              >
                Ver trabajo ↓
              </a>
              <a
                href="#contacto"
                className="h-cta font-syne font-bold text-xs text-white border border-white/20 hover:border-white/40 transition-colors duration-200 px-6 py-2.5 rounded-full tracking-wide"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;