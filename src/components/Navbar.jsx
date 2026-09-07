
function Navbar() {
    return(
        <nav className="bg-(--bg)  p-4 flex justify-between items-center">
            <div className="flex items-center">
            <a href="/"><img src="../src/assets/logo.jpg" alt="Tacos Melendez" className="h-10 w-10" /></a>
            <h1 className="text-3xl text-(--primary) font-bold ml-4">Tacos Melendez</h1>
            </div>
            <ul className = "text-xl list-none flex space-x-4">
                <li className = "hover:text-(--primary)"><a href="/">Home</a></li>
                <li className = "hover:text-(--primary)"><a href="/">Menú</a></li>
                <li className = "hover:text-(--primary)"><a href="/about">Nosotros</a></li>
                <li className = "hover:text-(--primary)"><a href="/contact">Ubicación</a></li>
            </ul>
            <a href="/menu" className="bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--primary)/80">Ver Menú</a>
        </nav>
   )

}

export default Navbar