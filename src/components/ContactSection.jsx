import { useGSAP, gsap } from "@/lib/gsap";
import { useRef, useState } from "react";
import { REDES } from "@/data/RedesData";
import { HiOutlineMail } from "react-icons/hi";
import { HiCheck }       from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";

function CopyEmailButton({ email = "figueroaalvarez594@gmail.com" }) {
  const [copied, setCopied]   = useState(false);
  const [pending, setPending] = useState(false);   // bloquea doble-click
  const btnRef   = useRef(null);
  const labelRef = useRef(null);

  const handleCopy = () => {
    if (pending) return;
    setPending(true);
    navigator.clipboard?.writeText(email);

    const btn   = btnRef.current;
    const label = labelRef.current;

     const tl = gsap.timeline({
      onComplete: () => {
        setCopied(true);

        gsap.fromTo(
          label,
          { autoAlpha: 0, y: 10, scale: 0.85 },
          { autoAlpha: 1, y: 0, duration: 0.38, ease: "back.out(2)" },
        );

        gsap.fromTo(
          btn,
          { boxShadow: "0 0 0 0px rgba(124, 106, 236, 0.55)" },
          { boxShadow: "0 0 0 14px rgba(124, 106, 236, 0)",
            duration: 0.7, ease: "power2.out" },
        );

        setTimeout(() => {
          gsap.to(label, {
            autoAlpha: 0, y: -10, duration: 0.28, ease: "power2.in",
            onComplete: () => {
              setCopied(false);
              setPending(false);
              gsap.fromTo(
                label,
                { autoAlpha: 0, y: 10, scale: 0.85 },
                { autoAlpha: 1, y: 0, duration: 0.38, ease: "back.out(2)" },
              );
            },
          });
        }, 2200);
      },
    });

    tl.to(label, { autoAlpha: 0, y: -10, duration: 0.28, ease: "power2.in" });
  };

  return (
    <button
      ref={btnRef}
      onClick={handleCopy}
      data-hover
      className="relative overflow-hidden font-syne font-bold text-sm px-9 py-3.5 rounded-full
        tracking-wide border-0 cursor-pointer will-change-transform
        transition-colors duration-300"
      style={{
        background: copied ? "#04040c" : "#7c6aec",
        color: copied ? "#ffffff" : "#04040c",
        border: copied ? "0.5px solid rgb(92, 92, 97, 0.60)" : "1px solid transparent",
        minWidth: 210,
      width: 210,
      whiteSpace: "nowrap",
      }}
    >
      <span
        className="absolute inset-0 rounded-full pointer-events-none transition-colors duration-400"
        style={{ background: copied ? "#04040c" : "#7c6aec" }}
        aria-hidden
      />

      <span
        ref={labelRef}
        className="relative flex items-center justify-center gap-2"
      >
        {copied
          ? <><HiCheck size={16} /> Copiado!</>
          : <><HiOutlineMail size={16} /> Copiar Correo</>
        }
      </span>
    </button>
  );
}

function ContactSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".ct-inner > *", {
        autoAlpha: 0, y: 44, stagger: 0.11, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-inner", start: "top 78%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-10 py-32 border-t border-white/5"
    >
      <div className="ct-inner max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs tracking-[0.22em] uppercase text-[#7c6aec] mb-6">
          Ponte en contacto
        </p>

        <h2
          className="font-syne font-black leading-[0.95] tracking-tight text-white mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
        >
          Hagamos
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
            algo Increible
          </span>
        </h2>

        <p
          className="font-sans text-white/40 leading-relaxed max-w-sm mx-auto mb-14"
          style={{ fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}
        >
          ¿Tienes alguna idea de proyecto o simplemente quieres charlar? Mi bandeja de entrada siempre está abierta.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <CopyEmailButton />

          <a
            href="https://wa.me/50258694127?text=Hola%20Joaqu%C3%ADn%2C%20quisiera%20contactarte%20para%20construir%20algo%20especial:D"
            className="font-syne font-bold text-sm text-white border border-white/15
              hover:border-white/35 transition-colors duration-200 px-9 py-3.5 rounded-full tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar Mensaje
          </a>
        </div>

        <div className="w-full h-px bg-white/6 mb-10" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="font-syne font-black text-lg text-white">
            <span className="text-[#5346ddff]">{"<"}</span>Joaki
            <span className="text-[#5346ddff]">{`/>`}</span>
          </span>
          <p className="font-mono text-xs tracking-widest text-white/20 flex items-center gap-2">
            © {new Date().getFullYear()} Joaquín Figueroa · Hecho con<FaHeart className="text-red-500 animate-bounce" />
          </p>
          <div className="flex gap-5">
            {REDES.map(s => (
              <a key={s.id} href={s.link}
                className="font-mono text-xs tracking-wide text-white/28 hover:text-white/55 transition-colors duration-200">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;