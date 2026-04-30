import { useGSAP, gsap } from "@/lib/gsap";
import { useRef } from "react";
import { REDES } from "@/data/RedesData";

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
            Sobre mí
          </p>
          <h2
            className="font-syne font-black leading-tight tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            Construyo cosas
            <br />
            para la web.
          </h2>
          <p className="font-sans text-sm text-white/48 leading-relaxed mb-5">
            Soy un desarrollador Full-Stack que le apasiona la tecnologia en todos los aspectos, me gusta crear soluciones inovadoras y eficientes para problemas reales.
            Trabajo con diferentes tecnologias y frameworks para poder adaptarme al mercado laboral actual.
          </p>
          <p className="font-sans text-sm text-white/48 leading-relaxed mb-10">
            Actualmente estoy cursando mis estudios en Ingenieria en Sistemas en la Universidad Mariano Galvez, en donde he podido desarrollar mis habilidades en programacion y desarrollo de software.
            Me gusta aprender cosas nuevas y desafiarme a mi mismo para poder mejorar cada dia.
            A pesar de que estoy estudiando y voy en mi primer año de universidad, he trabajado profesionalmente como desarrollador web para seguir puliendo aun mas mis conocimientos.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {REDES.map((red) => (
              <a
                key={red.id}
                href={red.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 font-syne font-bold text-xs tracking-widest text-white/70 hover:text-orange-400 shadow-sm hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:-translate-y-1"
              >
                <span className="text-[1.1rem] opacity-80 group-hover:opacity-100 transition-opacity">
                  {red.icon}
                </span>
                {red.title}
              </a>
            ))}
          </div>
        </div>

        {/* avatar */}
        <div ref={avatarRef} className="relative">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/8 bg-[#0a0a0a]"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="/noir.jpg"
              // src="/miles&gwen.jpg"
              alt="Joaquín Figueroa"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradiente superpuesto para oscurecer la parte inferior y fusionarse con el fondo */}
            <div className="absolute inset-0 bg-linear-to-t from-[#04040c] via-[#04040c]/40 to-transparent pointer-events-none" />
          </div>

          {/* floating badges */}
          <div className="absolute top-6 -right-5 bg-emerald-400 rounded-xl px-4 py-3">
            <p className="font-syne font-black text-2xl text-[#04040c] leading-none">
              1+
            </p>
            <p className="font-mono text-[0.6rem] tracking-widest text-[#04040c]/65 uppercase">
              Año
            </p>
          </div>
          <div className="absolute bottom-6 -left-5 bg-[#0d0a1e] border border-violet-500/30 rounded-xl px-4 py-3">
            <p className="font-syne font-black text-2xl text-violet-400 leading-none">
              15+
            </p>
            <p className="font-mono text-[0.6rem] tracking-widest text-white/30 uppercase">
              Proyectos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;