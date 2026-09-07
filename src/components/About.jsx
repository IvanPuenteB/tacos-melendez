
function About() {
  return (
      <section className="about h-auto py-20 bg-(--inverse-primary)">
       
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="w-full h-125 lg:h-150 overflow-hidden rounded-lg">
            <img
              src="../src/assets/images/about.webp"
              alt="Tacos Meléndez"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col gap-8">

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-left mb-6">
                El sabor de casa, en cada mordida
              </h2>

              <p className="text-lg leading-8 text-left text-balance">
                En Tacos Meléndez, no hacemos comida rápida. Preparamos guisos
                con el tiempo, la paciencia y el cariño que merecen. Cada
                receta es un homenaje a las cocinas de nuestras abuelas,
                utilizando ingredientes seleccionados para llevar el verdadero
                sabor de casa a tu mesa.
              </p>
            </div>

            {/* Características */}
            <div className="flex flex-col gap-6">

              {/* Ingredientes tradicionales */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E1E]/10 rounded-lg hover:border-green-700 transition-colors">
                <div>
                  
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
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E1E]/10 rounded-lg hover:border-red-700 transition-colors">
                <div>
                  <h3 className="text-xl font-semibold text-[#261818] mb-2">
                    Hechos con cariño
                  </h3>

                  <p className="text-base text-gray-600">
                    Preparados con dedicación y pasión por la tradición.
                  </p>
                </div>
              </div>

              {/* Sabor casero */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#2C1E1E]/10 rounded-lg hover:border-yellow-600 transition-colors">
                <div>
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

