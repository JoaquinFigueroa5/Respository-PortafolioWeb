import { useGSAP, gsap } from "../lib/gsap";
import { useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".h-eyebrow", { autoAlpha: 0, y: 28, duration: 0.8 }, 0.3)
      .from(".h-name",    { autoAlpha: 0, y: 60, duration: 1, skewY: 1.5 }, 0.45)
      .from(".h-role",    { autoAlpha: 0, y: 36, duration: 0.9 }, 0.6)
      .from(".h-desc",    { autoAlpha: 0, y: 24, duration: 0.8 }, 0.75)
      .from(".h-cta",     { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.12 }, 0.9)
      .from(".h-stat",    { autoAlpha: 0, y: 26, duration: 0.6, stagger: 0.09 }, 1.0);

    gsap.to(".glow-a", { y: -40, duration: 6, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(".glow-b", { y: 30,  duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-10 pt-28 pb-16">

      {/* grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-100"
        style={{ backgroundImage: "linear-gradient(rgba(52,211,153,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(52,211,153,.03) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />

      {/* ambient glows */}
      <div className="glow-a absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)" }} />
      <div className="glow-b absolute bottom-1/4 left-1/6 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl">
        {/* eyebrow */}
        <div className="h-eyebrow flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-emerald-400" />
          <span className="font-mono text-xs tracking-[0.22em] uppercase text-emerald-400">
            Available for Projects
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* name */}
        <h1 className="h-name font-syne font-black leading-[0.93] tracking-[-0.04em] text-white mb-4"
          style={{ fontSize: "clamp(3.8rem,9vw,8rem)" }}>
          Joaquín<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
            Figueroa
          </span>
        </h1>

        {/* role */}
        <div className="h-role flex items-center gap-4 mb-7">
          <span className="font-syne font-semibold text-white/55"
            style={{ fontSize: "clamp(1.1rem,2.5vw,1.65rem)" }}>Full-Stack</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-syne font-semibold text-white/55"
            style={{ fontSize: "clamp(1.1rem,2.5vw,1.65rem)" }}>Software Developer</span>
        </div>

        {/* desc */}
        <p className="h-desc font-sans text-white/45 leading-relaxed max-w-xl mb-10"
          style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)" }}>
          I craft immersive digital experiences — from pixel-perfect interfaces to resilient backends. 5+ years shipping products that scale and delight.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap mb-20">
          <a href="#work"
            className="h-cta font-syne font-bold text-sm text-[#04040c] bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 px-8 py-3.5 rounded-full tracking-wide">
            View Work ↓
          </a>
          <a href="#contact"
            className="h-cta font-syne font-bold text-sm text-white border border-white/20 hover:border-white/40 transition-colors duration-200 px-8 py-3.5 rounded-full tracking-wide">
            Get in Touch
          </a>
        </div>

        {/* stats */}
        <div className="flex gap-12 flex-wrap">
          {[["5+","Years Exp."],["40+","Projects"],["98","Lighthouse"],["12","Clients"]].map(([n,l]) => (
            <div key={l} className="h-stat">
              <div className="font-syne font-black text-4xl text-white leading-none">{n}</div>
              <div className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-white/30 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
