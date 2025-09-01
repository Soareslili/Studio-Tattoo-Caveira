"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Process() {
  useEffect(() => {
    Aos.init({
      duration: 800,   // velocidade da animação
      once: true,      // anima só na primeira vez
      easing: "ease-out-cubic",
    });
  }, []);

  const STEPS = [
    { number: "01", title: "Agendamento", desc: "Contato via WhatsApp para agendar consulta inicial e discutir sua ideia." },
    { number: "02", title: "Briefing", desc: "Conversa detalhada sobre o design, tamanho, localização e estilo desejado." },
    { number: "03", title: "Criação do Traço", desc: "Desenvolvimento do desenho personalizado baseado em suas preferências." },
    { number: "04", title: "Sessão de Tatuagem", desc: "Execução da tatuagem com técnica profissional e máxima higiene." },
    { number: "05", title: "Aftercare", desc: "Orientações completas de cuidados e acompanhamento da cicatrização." },
  ];

  const Dot = () => (
    <span className="mt-2 h-2 w-2 rounded-full bg-red-500 inline-block flex-shrink-0" />
  );

  // aceita ...rest para receber data-aos, className extra, etc.
  const StepCard = ({ number, title, desc, ...rest }) => (
    <div
      {...rest}
      className="h-full rounded-2xl bg-white text-gray-900 p-5 shadow-lg ring-1 ring-black/5
                 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text
                      bg-gradient-to-r from-amber-300 via-orange-500 to-amber-300">
        {number}
      </div>
      <h3 className="mt-1 text-lg font-extrabold">
        {title}
        <span className="block w-12 h-1 rounded-full mt-1 bg-gradient-to-r from-amber-300 via-orange-500 to-amber-300" />
      </h3>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <section id="processes" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mt-20 font-extrabold tracking-tight">
            Nosso Processo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mt-6" />
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Do primeiro contato até a cicatrização completa, acompanhamos cada etapa
          </p>
        </div>

        {/* GRID dos cards com delay crescente */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {STEPS.map((s, index) => (
            <StepCard
              key={s.number}
              data-aos="fade-right"
              data-aos-delay={index * 150}
              {...s}
            />
          ))}
        </div>

        {/* Bloco de informações */}
        <div className="mt-12 rounded-2xl bg-white text-gray-900 shadow-lg ring-1 ring-black/5 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-extrabold">Cuidados Pós-Tatuagem</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                O sucesso da sua tatuagem depende tanto da execução quanto dos cuidados.
                Fornecemos um manual completo e acompanhamos você durante todo o processo
                de cicatrização.
              </p>

              <div className="mt-5 rounded-xl border border-rose-500 bg-rose-200/80 p-4">
                <p className="text-sm font-bold text-red-800">⚠️ Importante</p>
                <p className="mt-1 text-sm text-black leading-relaxed">
                  Retoque gratuito em até <strong>60 dias</strong>, se necessário
                  (condicionado ao seguimento das orientações).
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-700">Principais Cuidados:</h4>
              <ul className="mt-3 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3"><Dot /> <span>Mantenha a área sempre limpa e seca</span></li>
                <li className="flex items-start gap-3"><Dot /> <span>Use pomada cicatrizante recomendada</span></li>
                <li className="flex items-start gap-3"><Dot /> <span>Evite exposição solar direta por 30 dias</span></li>
                <li className="flex items-start gap-3"><Dot /> <span>Não coce ou retire as casquinhas</span></li>
                <li className="flex items-start gap-3"><Dot /> <span>Vista roupas folgadas na região tatuada</span></li>
                <li className="flex items-start gap-3"><Dot /> <span>Evite piscinas e praias durante a cicatrização</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
