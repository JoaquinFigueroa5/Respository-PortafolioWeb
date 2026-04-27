import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SkillBar({ label, level, index }) {
  const rowRef = useRef(null);
  const fillRef = useRef(null);

  useGSAP(() => {
    gsap.from(rowRef.current, {
      autoAlpha: 0,
      x: -28,
      duration: 0.6,
      ease: "power3.out",
      delay: index * 0.07,
      scrollTrigger: { trigger: rowRef.current, start: "top 88%" },
    });
    gsap.from(fillRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.15,
      ease: "power3.out",
      delay: index * 0.07 + 0.2,
      scrollTrigger: { trigger: rowRef.current, start: "top 88%" },
    });
  });

  return (
    <div ref={rowRef} className="will-change-transform">
      <div className="flex justify-between mb-1.5">
        <span className="font-sans text-sm text-white/65">{label}</span>
        <span className="font-mono text-xs text-emerald-400">{level}%</span>
      </div>
      <div className="h-px bg-white/10 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="h-full rounded-full bg-linear-to-r from-emerald-400 to-violet-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;