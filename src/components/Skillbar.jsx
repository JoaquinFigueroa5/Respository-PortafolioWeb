import { useRef } from "react";

function SkillBar({ label, level }) {
  const rowRef = useRef(null);
  const fillRef = useRef(null);

  return (
    <div ref={rowRef} className="skill-row will-change-transform">
      <div className="flex justify-between mb-1.5">
        <span className="font-sans text-sm text-white/65">{label}</span>
        <span className="font-mono text-xs text-emerald-400">{level}%</span>
      </div>
      <div className="h-px bg-white/10 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="skill-fill h-full rounded-full bg-linear-to-r from-emerald-400 to-violet-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;