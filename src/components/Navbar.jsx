import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2C1E1E]/10 bg-(--bg)/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-3">

        {/* Navbar principal */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="../public/assets/images/logo.jpg"
                alt="Tacos Melendez"
                className="h-10 w-10 rounded-full"
              />
            </a>

            <h1 className="text-2xl lg:text-3xl text-(--primary) font-bold ml-3">
              <span className="text-(--text)">Tacos</span> Melendez
            </h1>
          </div>

          {/* Navegación desktop */}
          <ul className="hidden lg:flex text-xl list-none gap-8 font-semibold">
            <li className="hover:text-(--primary) hover:bg-(--inverse-primary-low) rounded-xl px-2 transition-colors">
              <a href="/">Inicio</a>
            </li>

            <li className="hover:text-(--primary) hover:bg-(--inverse-primary-low) rounded-xl px-2 transition-colors">
              <a href="#menu">Menú</a>
            </li>

            <li className="hover:text-(--primary) hover:bg-(--inverse-primary-low) rounded-xl px-2 transition-colors">
              <a href="#about">Nosotros</a>
            </li>

            <li className="hover:text-(--primary) hover:bg-(--inverse-primary-low) rounded-xl px-2 transition-colors">
              <a href="#location">Ubicación</a>
            </li>
          </ul>

          {/* Acciones desktop */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-full hover:bg-(--inverse-primary-low) transition-colors"
            >
              {darkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Botón menú */}
            <a
              href="#menu"
              className="bg-(--primary) hover:bg-(--primary-container) text-(--on-primary) px-4 py-2 font-semibold hover:opacity-90 transition-colors inline-flex items-center gap-3 border-2 border-[#2C1E1E] shadow-[4px_4px_0px_#2C1E1E] active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              Ver Menú
            </a>
          </div>

          {/* Acciones mobile */}
          <div className="flex lg:hidden items-center gap-2">

            {/* Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-full hover:bg-(--inverse-primary-low) transition-colors"
            >
              {darkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Hamburguesa */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="p-2 rounded-lg hover:bg-(--inverse-primary-low) transition-colors"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>

          </div>
        </div>

        {/* Menú mobile */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#2C1E1E]/10 pt-4">

            <ul className="flex flex-col gap-2 text-lg font-semibold">

              <li>
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:text-(--primary) hover:bg-(--inverse-primary-low) transition-colors"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#menu"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:text-(--primary) hover:bg-(--inverse-primary-low) transition-colors"
                >
                  Menú
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:text-(--primary) hover:bg-(--inverse-primary-low) transition-colors"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:text-(--primary) hover:bg-(--inverse-primary-low) transition-colors"
                >
                  Ubicación
                </a>
              </li>

              <li className="pt-2">
                <a
                  href="#menu"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-(--primary) hover:bg-(--primary-container) text-(--on-primary) px-4 py-3 font-semibold transition-colors inline-flex justify-center items-center border-2 border-[#2C1E1E] shadow-[4px_4px_0px_#2C1E1E] active:translate-y-1 active:translate-x-1 active:shadow-none"
                >
                  Ver Menú
                </a>
              </li>

            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;