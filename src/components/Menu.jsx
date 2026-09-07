import MenuCard from './MenuCard'
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

            
        </section>
    );
}


export default Menu;