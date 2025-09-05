const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-graphite/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Studio Tattoo
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Arte na pele com propósito. Criamos tatuagens únicas com técnica profissional e máxima segurança.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-primary-500">
                {"★".repeat(5)}
              </div>
              <span className="text-sm text-gray-400">4.9/5 (200+ avaliações)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary-700 transition-colors text-sm">
                  Sobre o Studio
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-primary-700 transition-colors text-sm">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#processo" className="text-gray-300 hover:text-primary-700 transition-colors text-sm">
                  Nosso Processo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary-700 transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">📍</span>
                <div className="text-sm">
                  <p className="text-gray-300">Rua das Artes, 123</p>
                  <p className="text-gray-300">Centro - São Paulo/SP</p>
                  <p className="text-gray-300">CEP: 01010-000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent">📱</span>
                <p className="text-gray-300 text-sm">(11) 99999-9999</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent">⏰</span>
                <div className="text-sm">
                  <p className="text-gray-300">Seg-Sáb: 10h às 20h</p>
                  <p className="text-gray-300">Dom: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://instagram.com/studiotattoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">@studiotattoo</span>
              </a>
              
              <a 
                href="https://tiktok.com/@studiotattoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.204-1.799-1.204-2.448V1.89h-3.85v14.472c0 2.563-2.085 4.648-4.648 4.648s-4.648-2.085-4.648-4.648 2.085-4.648 4.648-4.648c.343 0 .677.037 1 .107V7.715c-.32-.043-.648-.065-.981-.065C3.438 7.65 0 11.088 0 15.308S3.438 22.966 7.658 22.966s7.658-3.438 7.658-7.658V9.321c1.507.859 3.216 1.311 4.933 1.311V6.781c-.711 0-1.422-.152-2.1-.436-.678-.284-1.295-.702-1.828-1.22z"/>
                </svg>
                <span className="text-sm">@studiotattoo</span>
              </a>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-primary-500 transition-colors text-sm"
              >
                <span>📍</span>
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-graphite/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {currentYear} Studio Tattoo. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Cuidados Pós-Tatuagem
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;