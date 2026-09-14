import { ArrowRight, MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="hero mx-auto flex min-h-dvh max-w-7xl items-center bg-(--bg) px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
      
      <div className="hero-content flex w-full flex-col items-center justify-between gap-16 lg:flex-row lg:gap-12">

        {/* =========================
            CONTENIDO
        ========================== */}
        <div className="text-content flex w-full flex-1 flex-col gap-8 lg:gap-12">

          {/* Título */}
          <h1 className="ml-0 flex flex-col gap-1 text-left text-6xl font-bold leading-none sm:text-7xl lg:ml-2 lg:text-8xl">
            <span className="block">Tacos</span>
            <span className="block text-(--primary)">Meléndez</span>
          </h1>

          {/* Subtítulo */}
          <h2 className="ml-0 border-l-4 border-green-700 pl-4 text-left text-2xl font-semibold sm:text-3xl lg:ml-2 lg:text-4xl">
            Hechos con amor para ti
          </h2>

          {/* Descripción */}
          <p className="ml-0 max-w-xl text-balance text-left text-lg leading-7 sm:text-xl sm:leading-8 lg:ml-2">
            El sabor de los guisos caseros, servido en cada taco. Una tradición
            que se disfruta en cada mordida, preparada con ingredientes frescos
            y recetas de la familia.
          </p>

          {/* Botones */}
          <div className="mt-2 flex w-full flex-col gap-4 sm:flex-row lg:mt-4">

            {/* Ver menú */}
            <a
              href="#menu"
              className="inline-flex w-full items-center justify-center gap-3 border-2 border-[#2C1E1E] bg-(--primary) px-6 py-4 font-semibold text-(--on-primary) shadow-[4px_4px_0px_#2C1E1E] transition-colors hover:bg-(--primary-container) hover:opacity-90 active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto sm:px-8"
            >
              Ver nuestro menú
              <ArrowRight className="h-5 w-5" />
            </a>

            {/* Cómo llegar */}
            <a
              href="/ubicacion"
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-[#2C1E1E] bg-transparent px-6 py-4 font-semibold transition-colors hover:bg-(--surface-container) sm:w-auto sm:px-8"
            >
              <MapPin className="h-5 w-5" />
              Cómo llegar
            </a>

          </div>
        </div>


        {/* =========================
            IMAGEN
        ========================== */}
        <div className="flex w-full flex-1 justify-center">

          <div className="group relative aspect-square w-full max-w-md perspective-1000 lg:max-w-2xl">

            {/* Tarjeta trasera */}
            <div
              className="
                absolute inset-0
                rotate-3
                rounded-lg
                border border-[#2C1E1E]/20
                bg-(--surface-container-low)
                transition-transform
                duration-700
                ease-out
                group-hover:rotate-1
              "
            />

            {/* Tarjeta secundaria */}
            <div
              className="
                absolute inset-0
                -rotate-2
                rounded-lg
                bg-(--secondary)
                transition-transform
                delay-75
                duration-700
                ease-out
                group-hover:rotate-0
              "
            />

            {/* Imagen */}
            <div
              className="
                relative
                z-10
                h-full
                w-full
                overflow-hidden
                rounded-lg
                border
                border-[#2C1E1E]
                shadow-[8px_8px_0px_0px_rgba(44,30,30,0.8)]
                transition-transform
                duration-700
                ease-out
                group-hover:-translate-x-2
                group-hover:-translate-y-2
              "
            >
              <img
                src="../src/assets/images/hero.webp"
                alt="Tacos"
                className="h-full w-full object-cover object-center"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;