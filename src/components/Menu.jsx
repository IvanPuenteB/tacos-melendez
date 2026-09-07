import MenuCard from './MenuCard'
import DrinkCard from './DrinkCard'
import {bebidas} from '../data/menu'
import {tacos} from '../data/menu'

function Menu() {
    return (
        <section className="menu" id="menu">
            <div><p className="text-lg text-(--secondary)">Especialidades</p></div>
            <h2 className="text-4xl font-bold text-center mb-8">Nuestro Menú</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {tacos.map((taco) => (
                    <MenuCard key={taco.id} taco={taco} />
                ))}
            </div>

            <div className="mt-20">
          <h3 className="mb-8 text-2xl font-bold text-[#261818]">
            Bebidas para acompañar
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {bebidas.map((bebida) => (
              <DrinkCard
                key={bebida.id}
                bebida={bebida}
              />
            ))}
          </div>
        </div>
        </section>
    );
}


export default Menu;