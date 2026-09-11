function Hero() {
  return (
    <section className="hero mx-auto flex min-h-dvh max-w-7xl items-center justify-center bg-(--bg) p-8">
      <div className="hero-content flex w-full items-center justify-between gap-12">
        
        {/* Contenido */}
        <div className="text-content flex flex-1 flex-col gap-12">
          <h1 className="ml-2 flex flex-col gap-2 text-left text-8xl font-bold">
            <span className="block">Tacos</span>
            <span className="block text-(--primary)">Meléndez</span>
          </h1>

          <h2 className="ml-2 border-l-4 border-green-700 pl-4 text-left text-4xl font-semibold">
            Hechos con amor para ti
          </h2>

          <p className="ml-2 text-balance text-left text-xl/8">
            El sabor de los guisos caseros, servido en cada taco. Una tradición
            que se disfruta en cada mordida, preparada con ingredientes frescos
            y recetas de la familia.
          </p>

          <div className="mt-4 flex space-x-4">
            <a
              href="#menu"
              className="bg-(--primary) hover:bg-(--primary-container) text-(--on-primary) px-8 py-4 font-semibold hover:opacity-90 transition-colors inline-flex items-center gap-3 border-2 border-[#2C1E1E] shadow-[4px_4px_0px_#2C1E1E] active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              Ver nuestro menú
            <span>EJMOJI</span>
            </a>

            <a
              href="/ubicacion"
              className="inline-flex items-center gap-2 rounded-none border-2 border-[#2C1E1E] bg-transparent px-8 py-3 font-label-lg text-label-lg transition-colors hover:bg-surface-container"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <div className="group relative mt-12 aspect-[5/5] w-full max-w-2xl perspective-1000 lg:mt-0">

            {/* Tarjeta trasera */}
            <div className="absolute inset-0 rotate-3 rounded-lg border border-[#2C1E1E]/20 bg-(--surface-container-low) transition-transform duration-700 ease-out group-hover:rotate-1"></div>

            {/* Tarjeta secundaria */}
            <div className="absolute inset-0 -rotate-2 rounded-lg bg-(--secondary) transition-transform delay-75 duration-700 ease-out group-hover:rotate-0"></div>

            {/* Imagen */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-lg border border-[#2C1E1E] shadow-[8px_8px_0px_0px_rgba(44,30,30,0.8)] transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
              <img
                src="../src/assets/images/hero.webp"
                alt="Tacos"
                className="h-full w-full"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;