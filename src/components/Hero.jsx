function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Tacos Melendez</h1>
        <p>Hechos con amor para ti</p>
        <p>Disfruta de nuestros deliciosos tacos y platillos mexicanos auténticos, preparados con ingredientes frescos y de calidad.</p>
        <img src="" alt="Tacos" />
        <a href="#get-started" className="bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--primary)/80">Ver nuestro menú</a>
        <a href="/ubicacion" className="">Cómo llegar</a>
      </div>
    </section>
  );
}

export default Hero;