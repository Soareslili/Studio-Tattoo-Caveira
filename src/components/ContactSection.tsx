import React from "react";

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta para uma nova tatuagem. Podemos conversar sobre ideias e disponibilidade?"
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Vamos Criar Sua Arte?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato e transforme sua ideia em uma obra de arte permanente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">Agendamento Rápido</h3>
         
              <p className="text-white/90 mb-6 leading-relaxed font-serif)]">
                Fale diretamente conosco pelo WhatsApp. Resposta rápida e agendamento flexível para sua conveniência.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Conversar no WhatsApp
              </a>
            </div>

         
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-gray-300 text-sm font-serif">São Paulo - SP, Região Central</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl ">⏰</span>
                </div>
                <div>
                  <p className="font-semibold">Horário de Funcionamento</p>
                  <p className="text-gray-300 text-sm font-[var(--font-serif)]">Seg-Sáb: 10h às 20h</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">💳</span>
                </div>
                <div>
                  <p className="font-semibold">Formas de Pagamento</p>
                  <p className="text-gray-300 text-sm font-[var(--font-serif)]">Dinheiro, Cartão, PIX, Parcelado</p>
                </div>
              </div>
            </div>
          </div>

    
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Ou nos envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white mb-2 block">
                  Nome Completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white mb-2 block">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white mb-2 block">
                  Sua Ideia de Tatuagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Descreva sua ideia, estilo preferido, tamanho, localização no corpo..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400"
                />
            
                <p className="mt-2 text-sm text-gray-300 font-[var(--font-serif)]">
                  Dica: incluir tamanho aproximado (em cm) e local do corpo agiliza o orçamento.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 cursor-pointer rounded-lg transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
