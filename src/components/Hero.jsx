function Hero() {
  return (
    <section className="hero min-h-dvh bg-(--bg) flex items-center justify-center p-8">
      <div className="hero-content flex gap-8 items-center justify-between">
        <div className="text-content flex flex-col gap-4">
          <h1 className="text-7xl font-bold flex flex-col text-left ml-2 gap-2">
            <span className="block ">Tacos</span>
            <span className="block text-(--primary)">Meléndez</span>
          </h1>
          <h2 className="text-3xl font-semibold text-left ml-2 border-l-4 border-green-700 pl-4">
            Hechos con amor para ti
          </h2>
          <p className="text-left ml-2 text-lg text-balance">
            El sabor de los guisos caseros, servido en cada taco. Una tradición
            que se disfruta en cada mordida, preparada con ingredientes frescos
            y recetas de la familia.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#get-started"
              className="bg-(--primary) text-white px-8 py-3 rounded-none font-label-lg text-label-lg hover:bg-(--on-primary-fixed) transition-colors linocut-shadow active:translate-y-1 active:translate-x-1 active:shadow-none inline-flex items-center gap-2"
            >
              Ver nuestro menú
            </a>
            <a href="/ubicacion" className="bg-transparent text-on-background border-2 border-[#2C1E1E] px-8 py-3 rounded-none font-label-lg text-label-lg hover:bg-surface-container transition-colors inline-flex items-center gap-2">
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="image-content w-full">
          <div className="lg:col-span-7 relative mt-12 lg:mt-0 h-150 lg:h-175 w-full group perspective-1000">
            <div className="absolute inset-0 bg-surface-container-highest rounded-lg rotate-3 group-hover:rotate-1 transition-transform duration-700 ease-out border border-[#2C1E1E]/20"></div>
            <div className="absolute inset-0 bg-secondary/10 rounded-lg -rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out delay-75"></div>
            <div className="relative h-full w-full rounded-lg overflow-hidden border border-[#2C1E1E] bg-surface z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:-translate-x-2 shadow-[8px_8px_0px_0px_rgba(44,30,30,1)]">
              <img
                className="w-full h-full object-cover"
                src="../src/assets/images/hero.webp"
                alt="Tacos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
