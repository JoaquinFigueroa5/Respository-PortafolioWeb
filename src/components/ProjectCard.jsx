import { useGSAP, gsap } from "../lib/gsap";
import { useRef } from "react";

function ProjectCard({ p, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      autoAlpha: 0,
      y: 70,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 84%",
        toggleActions: "play none none none",
      },
    });
  });

  const onMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    gsap.to(glowRef.current, {
      x: e.clientX - r.left - 150,
      y: e.clientY - r.top - 150,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const onEnter = () => {
    gsap.to(glowRef.current, { autoAlpha: 1, duration: 0.3 });
    gsap.to(cardRef.current, { y: -6, duration: 0.4, ease: "power2.out" });
  };
  const onLeave = () => {
    gsap.to(glowRef.current, { autoAlpha: 0, duration: 0.35 });
    gsap.to(cardRef.current, { y: 0, duration: 0.45, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-hover
      className={`relative ${p.bgClass} border ${p.borderClass} rounded-2xl p-10 overflow-hidden cursor-pointer will-change-transform`}
    >
      {/* mouse glow */}
      <div
        ref={glowRef}
        className="absolute w-72 h-72 rounded-full pointer-events-none opacity-0"
        style={{
          background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        {/* header meta */}
        <div className="flex justify-between items-start mb-10">
          <span className="font-mono text-xs text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-mono text-xs tracking-widest ${p.accentClass}`}
          >
            {p.year}
          </span>
        </div>

        {/* accent bar */}
        <div
          className={`w-12 h-0.5 bg-linear-to-r ${p.barClass} rounded-full mb-6`}
        />

        <h3 className="font-syne font-black text-3xl text-white tracking-tight leading-none mb-2">
          {p.title}
        </h3>
        <p
          className={`font-mono text-xs tracking-widest uppercase ${p.accentClass} mb-5`}
        >
          {p.category}
        </p>
        <p className="font-sans text-sm text-white/45 leading-relaxed mb-8">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className={`flex items-center gap-2 ${p.accentClass}`}>
          <span className="font-syne font-bold text-xs tracking-widest">
            VIEW CASE STUDY
          </span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;