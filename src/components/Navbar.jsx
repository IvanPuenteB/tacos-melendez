
function Navbar() {
    return(
        <header className="w-full border-b py-2 border-[#2C1E1E]/10 ">
        <nav className="bg-(--bg) max-w-7xl mx-auto p-4 flex justify-between items-center ">
            <div className="flex items-center">
            <a href="/"><img src="../src/assets/logo.jpg" alt="Tacos Melendez" className="h-10 w-10" /></a>
            <h1 className="text-3xl text-(--primary) font-bold ml-4"><span className="text-(--text)">Tacos</span> Melendez</h1>
            </div>
            <ul className = "text-xl list-none flex gap-8 font-semibold">
                <li className = "hover:text-(--primary) hover:bg-(--inverse-primary-low)  rounded-xl px-2"><a href="/">Inicio</a></li>
                <li className = "hover:text-(--primary) hover:bg-(--inverse-primary-low)  rounded-xl px-2"><a href="#menu">Menú</a></li>
                <li className = "hover:text-(--primary) hover:bg-(--inverse-primary-low)  rounded-xl px-2"><a href="#about">Nosotros</a></li>
                <li className = "hover:text-(--primary) hover:bg-(--inverse-primary-low)  rounded-xl px-2"><a href="#location">Ubicación</a></li>
            </ul>
            <a href="/menu" className="bg-(--primary) hover:bg-(--primary-container) text-(--on-primary) px-4 py-2 font-semibold hover:opacity-90 transition-colors inline-flex items-center gap-3 border-2 border-[#2C1E1E] shadow-[4px_4px_0px_#2C1E1E] active:translate-y-1 active:translate-x-1 active:shadow-none">Ver Menú</a>
        </nav>
        </header>
   )

}

export default Navbar