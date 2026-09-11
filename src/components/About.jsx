import { Leaf, Utensils, Heart } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="about bg-(--inverse-primary) py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Imagen */}
          <div className="w-full h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src="../src/assets/images/about.webp"
              alt="Tacos Meléndez"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col justify-center gap-8">

            {/* Texto */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-left mb-6 leading-tight">
                El sabor de casa, en cada mordida
              </h2>

              <p className="text-lg lg:text-xl leading-8 text-left text-balance">
                En Tacos Meléndez, no hacemos comida rápida. Preparamos guisos
                con el tiempo, la paciencia y el cariño que merecen. Cada
                receta es un homenaje a las cocinas de nuestras abuelas,
                utilizando ingredientes seleccionados para llevar el verdadero
                sabor de casa a tu mesa.
              </p>
            </div>

            {/* Características */}
            <div className="flex flex-col gap-4">

              {/* Ingredientes tradicionales */}
              <div className="flex items-center gap-4 p-5 bg-white border border-[#2C1E1E]/10 rounded-lg hover:border-green-700 transition-colors">
                <div className="p-3 bg-(--secondary) rounded-lg text-secondary shrink-0">
                  <Leaf className="w-6 h-6 fill-green-100" />
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#261818] mb-2">
                    Ingredientes tradicionales
                  </h3>

                  <p className="text-base text-gray-600">
                    Seleccionados diariamente para garantizar frescura y
                    calidad.
                  </p>
                </div>
              </div>

              {/* Hechos con cariño */}
              <div className="flex items-center gap-4 p-5 bg-white border border-[#2C1E1E]/10 rounded-lg hover:border-red-700 transition-colors">
                <div className="p-3 bg-(--primary-container) rounded-lg text-(--on-primary) shrink-0">
                  <Heart className="fill-amber-50" />
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#261818] mb-2">
                    Hechos con cariño
                  </h3>

                  <p className="text-base text-gray-600">
                    Preparados con dedicación y pasión por la tradición.
                  </p>
                </div>
              </div>

              {/* Sabor casero */}
              <div className="flex items-center gap-4 p-5 bg-white border border-[#2C1E1E]/10 rounded-lg hover:border-yellow-600 transition-colors">
                <div className="p-3 bg-amber-300 rounded-lg text-secondary shrink-0">
                  <Utensils className="fill-amber-300" />
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#261818] mb-2">
                    Sabor casero
                  </h3>

                  <p className="text-base text-gray-600">
                    El auténtico sabor de las cocinas familiares.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;