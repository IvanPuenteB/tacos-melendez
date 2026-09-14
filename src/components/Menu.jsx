import MenuCard from "./MenuCard";
import DrinkCard from "./DrinkCard";
import { bebidas, tacos } from "../data/menu";

function Menu() {
  return (
    <section
      className="menu mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24"
      id="menu"
    >

      {/* Encabezado */}
      <div className="mb-10">

        <p className="mb-6 flex items-center justify-center gap-3 text-lg font-semibold text-(--secondary) sm:text-xl">
          <span className="h-[2px] w-6 bg-(--secondary) sm:w-8"></span>

          Especialidades

          <span className="h-[2px] w-6 bg-(--secondary) sm:w-8"></span>
        </p>

        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Nuestro Menú
        </h2>

      </div>


      {/* Tacos */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {tacos.map((taco) => (
          <MenuCard key={taco.id} taco={taco} />
        ))}
      </div>


      {/* Bebidas */}
      <div className="mt-16 sm:mt-20">

        <h3 className="mb-6 text-2xl font-bold text-[#261818] sm:text-3xl">
          Bebidas para acompañar
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bebidas.map((bebida) => (
            <DrinkCard key={bebida.id} bebida={bebida} />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Menu;