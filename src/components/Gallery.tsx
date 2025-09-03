import LeaoPerna from '../assets/leao-perna.png'
import LeaoMasculina from '../assets/leao-perna-masculina.png'
import LeaoRealista from '../assets/leao-realista-braco.png'
import Leao from '../assets/leao-braco-masculino.png'
import BeijaFlor from '../assets/beija-flor.png'
import Flor from '../assets/braco-feminina.png'
import DragaoCosta from '../assets/dragao-costa.png'
import DragaoBraco from '../assets/dragao.png'
import Tigre from '../assets/tigre.png'
import LeaoCosta from '../assets/leao-costa.png'
import Rosa from '../assets/rosa-perna.png'
import Braco from '../assets/leao-braco.png'



const trabalhos = [
  {
    img: LeaoPerna,
    title: 'Leão na Perna',
    description: 'Tatuagem de um leão realista na perna, simbolizando força e coragem.',
  },
  {
    img: LeaoMasculina,
    title: 'Leão na Perna Masculina',
    description: 'Tatuagem de um leão realista na perna, simbolizando força e coragem.',
  },
  {
    img: LeaoRealista,
    title: 'Leão Realista no Braço',
    description: 'Tatuagem de um leão realista no braço, em preto e branco.',
  },
  {
    img: Leao,
    title: 'Leão no Braço Masculino',
    description: 'Tatuagem de um leão realista no braço, colorida em 3D.',
  },
  {
    img: BeijaFlor,
    title: 'Beija-Flor no Braço',
    description: 'Tatuagem de beija-flor realista e colorida, elegante, no braço.',
  },
  {
    img: Flor,
    title: 'Flor no Braço',
    description: 'Flor em 3D, colorida, no braço.',
  },
  {
    img: DragaoCosta,
    title: 'Dragão nas Costas',
    description: 'Tatuagem de dragão realista nas costas.',
  },
  {
    img: DragaoBraco,
    title: 'Dragão no Braço',
    description: 'Tatuagem de dragão realista, colorida, no braço.',
  },
  {
    img: Tigre,
    title: 'Tigre na Perna',
    description: 'Tatuagem de tigre realista na perna.',
  },
  {
    img: LeaoCosta,
    title: 'Leão nas Costas',
    description: 'Tatuagem de leão nas costas com traços pretos, realista.',
  },
  {
    img: Rosa,
    title: 'Rosa na Perna',
    description: 'Tatuagem de rosa na perna, elegante e detalhada.',
  },

  {
    img: Braco,
    title: 'Leão no Braço',
    description: 'Tatuagem de Leão em preto, elegante e detalhada em 3D.',
  },
]

export default function Gallery() {
  return (
    <section id='portfolio' className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mt-20 font-extrabold tracking-tight">
            Nosso Portfólio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mt-6" />
          <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
            Cada trabalho é único, criado com técnica aprimorada e atenção aos mínimos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trabalhos.map(({ img, title, description }, i) => (
            <figure
              key={title + i}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={100 * (i + 1)}
              data-aos-duration="1200"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-primary-500">{description}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
