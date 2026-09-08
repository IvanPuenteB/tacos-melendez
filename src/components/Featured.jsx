// import { ArrowRight, MapPin, BadgeCheck } from "lucide-react";

function Featured() {
  return (
    <section
      id="inicio"
      className="mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-8"
    >
      <div className="relative flex h-[520px] w-full items-end overflow-hidden border-2 border-[#2C1E1E] shadow-[8px_8px_0px_#2C1E1E] md:h-[600px]">

        {/* Imagen de fondo */}
        <img
          src="../src/assets/images/featured.webp"
          alt="Familia y equipo fundador de Tacos Meléndez"
          className="absolute inset-0 h-full w-full object-cover object-[center_-50px]"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

        {/* Contenido */}
        <div className="relative z-20 flex w-full flex-col items-start gap-4 p-6 md:p-12">

          {/* Badges */}
          <div className="mb-2 flex items-center gap-3">

            {/* Taquería Familiar */}
            <div className="flex items-center gap-2 rounded-full border border-[#2C1E1E] bg-white/95 px-4 py-1.5 shadow-md backdrop-blur-md">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#2C1E1E]">
                Taquería Familiar
              </span>
            </div>

            {/* 100% Caseros */}
            <div className="hidden items-center gap-1.5 rounded-full border border-black/30 bg-red-700 px-3.5 py-1.5 text-white shadow-md sm:inline-flex">
              {/* <BadgeCheck size={16} fill="currentColor" /> */}

              <span className="text-xs font-semibold">
                100% Caseros
              </span>
            </div>

          </div>

          {/* Título */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-6xl">
            Tacos{" "}
            <span className="text-yellow-400">
              Meléndez
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="max-w-2xl border-l-4 border-green-600 pl-4 text-xl font-semibold leading-snug text-white drop-shadow-sm md:text-2xl">
            Sabor casero, hecho en familia
          </p>

          {/* Botones */}
          <div className="mt-4 flex flex-wrap gap-4">

            {/* Ver menú */}
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-red-700 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[5px_5px_0px_#2C1E1E] transition-all hover:bg-red-800 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <span>Ver menú</span>
              {/* <ArrowRight size={17} /> */}
            </a>

            {/* Cómo llegar */}
            <a
              href="#ubicacion"
              className="inline-flex items-center gap-2 border-2 border-[#2C1E1E] bg-white/95 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#2C1E1E] shadow-[5px_5px_0px_#2C1E1E] backdrop-blur-md transition-all hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              {/* <MapPin size={17} /> */}

              <span>Cómo llegar</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;