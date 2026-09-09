function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-(--surface-container-low) border-t border-[#2C1E1E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Texto y Botón */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="font-semibold text-(--secondary) uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-1 bg-(--secondary)"></span>
              Ubicación
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-background">Ven a visitarnos</h2>
            <p className="text-lg text-(--on-surface-variant) text-balance">
              Te esperamos con una sonrisa y las salsas listas. Encuéntranos fácilmente usando el mapa y ven a disfrutar del verdadero sabor casero.
            </p>
            <div className="mt-4">
              <a 
                href="https://maps.app.goo.gl/L3UyAhDud97PSgSV7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-(--primary-container) text-(--on-primary) px-8 py-4 font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-3 border-2 border-[#2C1E1E] shadow-[4px_4px_0px_#2C1E1E] active:translate-y-1 active:translate-x-1 active:shadow-none"
              >
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Mapa (Iframe) */}
          <div className="lg:col-span-7 bg-(--surface-container-low) p-4 border border-[#2C1E1E] shadow-[8px_8px_0px_#2C1E1E] h-[400px] md:h-[500px] relative group w-full">
            
            {/* Esquinas decorativas */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary z-20 pointer-events-none"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary z-20 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary z-20 pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary z-20 pointer-events-none"></div>

            {/* Iframe de Google Maps */}
            <iframe
              className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1798.1727276914196!2d-100.1662400823177!3d25.659840758907027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c3000947075d%3A0xf01409fed9b3a2f3!2sTacos%20Mel%C3%A9ndez!5e0!3m2!1ses!2smx!4v1788978660826!5m2!1ses!2smx"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Tacos Meléndez"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Location;