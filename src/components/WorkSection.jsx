import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { PROJECTS } from "@/data/ProjectsData";
import ProjectCard from "@/components/ProjectCard";

function WorkSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".wk-hdr > *", {
        autoAlpha: 0,
        y: 44,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".wk-hdr", start: "top 82%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="work" className="px-10 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="wk-hdr flex justify-between items-end mb-16 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-3">
              Selected Work
            </p>
            <h2
              className="font-syne font-black leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}
            >
              Projects that
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
              >
                matter.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm text-white/38 max-w-xs leading-relaxed">
            Each project is a story of problem-solving, craft, and measurable
            impact.
          </p>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;