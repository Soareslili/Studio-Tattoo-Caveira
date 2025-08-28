"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  // AOS init
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-quart", once: true, offset: 60 });
    AOS.refresh();
  }, []);

  const aboutText = `Nosso studio nasceu da paixão por transformar histórias em arte permanente. 
Cada tatuagem é uma colaboração única entre artista e cliente, unindo técnica impecável e criatividade. 
Priorizamos biossegurança e conforto, para que sua visão ganhe vida com precisão e cuidado.`;

  // Controle de áudio do vídeo (autoplay exige muted)
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; 
    v.play().catch(() => {
    
    });
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <section id="about"  className="py-20 bg-black text-white">
      <div  className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div  className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mt-20 font-extrabold tracking-tight">Sobre o Studio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        
          <div data-aos="fade-right">
            <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg">
            
              <div className="relative w-full h-[500px]" style={{ aspectRatio: "16 / 9" }}>
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  preload="metadata"
                  poster="/about-poster.jpg" 
                >
                 
                  <source src="/about-video.webm" type="video/webm" />
                  <source src="/about-video.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>

                 <button
                  onClick={toggleSound}
                  className="absolute bottom-3 right-3 rounded-full bg-black/55 backdrop-blur px-3 py-1.5 text-sm ring-1 ring-white/20 hover:bg-black/70 transition"
                  aria-label={muted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
                >
                  {muted ? "🔇 Som" : "🔊 Som"}
                </button>
              </div>
            </div>
          </div>

       
          <div data-aos="fade-left" className="text-center md:text-left">
            <Typewriter
              text={aboutText}
              speed={18} 
              className="text-lg md:text-3xl font-serif leading-relaxed text-white/90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Componente Typewriter simples (sem libs) ---- */
function Typewriter({
  text,
  speed = 20,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [out, setOut] = useState("");

  useEffect(() => {
    // Fallback para usuários com redução de movimento
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setOut(text);
      return;
    }

    let i = 0;
    setOut("");
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <p className={className} aria-label={text} aria-live="polite">
      {out}
      {/* cursor */}
      <span className="ml-1 inline-block w-3 h-6 align-[-0.2em] bg-white/70 animate-pulse" />
    </p>
  );
}
