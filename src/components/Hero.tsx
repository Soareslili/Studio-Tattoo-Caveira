import BG from "../assets/Hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-screen place-items-center overflow-hidden bg-black text-white"
    >

      <div className="absolute inset-0 z-0 flex items-end md:items-center justify-center">
        <img
          src={BG}
          alt=""
          aria-hidden
          className="pointer-events-none select-none object-contain w-auto
                     max-h-[68vh] sm:max-h-[75vh] md:max-h-[80vh] lg:max-h-[90vh]
                     mt-10 md:mt-20"
        />
      </div>


      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/70 z-[1]" />


      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center gap-1">
          <h1
            data-aos="fade-up" data-aos-delay="0"
            className="font-display font-extrabold leading-[0.9]
               text-[clamp(40px,16vw,64px)]
               bg-gradient-to-r from-[#FFD700] via-[#c5a364] to-[#1b190b]
               bg-clip-text text-transparent
               [text-shadow:0_0_15px_rgba(255,215,0,0.6),0_0_35px_rgba(255,140,0,0.4)]
               drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Tattoo
          </h1>

          <h1
            data-aos="fade-up" data-aos-delay="250"
            className="font-display font-extrabold leading-[0.9]
               text-[clamp(40px,16vw,64px)]
               bg-gradient-to-r from-[#FFD700] via-[#c5a364] to-[#1b190b]
               bg-clip-text text-transparent
               [text-shadow:0_0_15px_rgba(255,215,0,0.6),0_0_35px_rgba(255,140,0,0.4)]
               drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Caveira
          </h1>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden md:block pt-0 md:pt-0">
          <h1
            data-aos="fade-right" data-aos-delay="0"
            className="absolute left-6 top-8
               font-display font-black leading-[0.9]
               text-[clamp(96px,9vw,160px)]
               bg-gradient-to-r from-[#FFD700] via-[#c5a364] to-[#1b190b]
               bg-clip-text text-transparent
               [text-shadow:0_0_15px_rgba(255,215,0,0.6),0_0_35px_rgba(255,140,0,0.4)]
               drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Tattoo
          </h1>

          <h1
            data-aos="fade-left" data-aos-delay="250"
            className="absolute right-6 top-8 text-right
               font-display font-black leading-[0.9]
               text-[clamp(96px,9vw,160px)]
               bg-gradient-to-r from-[#FFD700] via-[#c5a364] to-[#1b190b]
               bg-clip-text text-transparent
               [text-shadow:0_0_15px_rgba(255,215,0,0.6),0_0_35px_rgba(255,140,0,0.4)]
               drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Caveira
          </h1>
        </div>
      </div>
    </section>
  );
}
