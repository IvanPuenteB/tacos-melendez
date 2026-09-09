function Cta() {
  return (
    <section className="py-24 bg-(--primary) text-(--on-primary) relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"></div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile text-center flex flex-col items-center gap-8">
        <h2 className="font-bold text-6xl text-(--on-primary) max-w-3xl leading-tight">
          ¿Se te antojaron unos tacos?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <a
            className="bg-(--on-primary) text-(--text) hover:text-(--on-primary) px-8 py-4 rounded-none border-2 border-(--on-primary-fixed) font-label-lg text-label-lg font-bold hover:bg-(--surface-container) transition-colors shadow-[4px_4px_0px_0px_rgba(38,24,24,0.5)] active:translate-y-1 active:translate-x-1 active:shadow-none inline-flex items-center gap-2"
            href="#menu"
          >
            <span className="">Ver menú completo</span>
          </a>
          <a
            className="bg-transparent text-(--on-primary) border-2 border-(--on-primary) px-8 py-4 rounded-none font-label-lg text-label-lg font-bold hover:bg-(--on-primary)/10 transition-colors inline-flex items-center gap-2"
            href="#ubicacion"
          >
            <span className="">Cómo llegar</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
