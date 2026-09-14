import { Leaf, Utensils, Heart } from "lucide-react";

function About() {
  return (
    <section id="about" className="about bg-(--inverse-primary) py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contenido */}
          <div className="order-1 flex flex-col justify-center gap-8 lg:order-2">
            {/* Texto */}
            <div>
              <h2 className="mb-6 text-left text-4xl font-bold leading-tight lg:text-5xl">
                El sabor de casa, en cada mordida
              </h2>

              <p className="text-left text-lg leading-8 text-balance lg:text-xl">
                En Tacos Meléndez, no hacemos comida rápida, hacemos los mejores
                tacos. Cada preparación nace de una dedicación absoluta a la
                calidad, utilizando ingredientes cuidadosamente seleccionados
                que marcan la diferencia. Nos tomamos el
                tiempo necesario para que el sabor de cada bocado hable por sí
                solo.
              </p>
            </div>

            {/* Características */}
            <div className="flex flex-col gap-4">
              {/* Ingredientes tradicionales */}
              <div className="flex items-center gap-4 rounded-lg border border-[#2C1E1E]/10 bg-white p-5 transition-colors hover:border-green-700">
                <div className="shrink-0 rounded-lg bg-(--secondary) p-3 text-secondary">
                  <Leaf className="h-6 w-6 fill-green-100" />
                </div>

                <div className="text-left">
                  <h3 className="mb-2 text-xl font-semibold text-[#261818]">
                    Ingredientes de la más alta calidad
                  </h3>

                  <p className="text-base text-gray-600">
                    Seleccionados diariamente para garantizar frescura y
                    calidad.
                  </p>
                </div>
              </div>

              {/* Hechos con cariño */}
              <div className="flex items-center gap-4 rounded-lg border border-[#2C1E1E]/10 bg-white p-5 transition-colors hover:border-red-700">
                <div className="shrink-0 rounded-lg bg-(--primary-container) p-3 text-(--on-primary)">
                  <Heart className="fill-amber-50" />
                </div>

                <div className="text-left">
                  <h3 className="mb-2 text-xl font-semibold text-[#261818]">
                    Hechos con cariño
                  </h3>

                  <p className="text-base text-gray-600">
                    Preparados con dedicación y pasión por la tradición.
                  </p>
                </div>
              </div>

              {/* Sabor casero */}
              <div className="flex items-center gap-4 rounded-lg border border-[#2C1E1E]/10 bg-white p-5 transition-colors hover:border-yellow-600">
                <div className="shrink-0 rounded-lg bg-amber-300 p-3 text-secondary">
                  <Utensils className="fill-amber-300" />
                </div>

                <div className="text-left">
                  <h3 className="mb-2 text-xl font-semibold text-[#261818]">
                    Sabor casero
                  </h3>

                  <p className="text-base text-gray-600">
                    El auténtico sabor de las cocinas familiares.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="order-2 h-[500px] w-full overflow-hidden rounded-lg sm:h-[600px] lg:order-1 lg:h-[700px]">
            <img
              src="../src/assets/images/about.webp"
              alt="Tacos Meléndez"
              className="h-full w-full rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
