function MenuCard({ taco }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Imagen */}
      <div className="h-64 overflow-hidden">
        <img
          src={taco.image}
          alt={taco.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Información */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-[#261818]">
            {taco.name}
          </h3>

          <span className="shrink-0 text-lg font-bold text-red-700">
            ${taco.price}
          </span>
        </div>

        <p className="mt-3 text-gray-600">
          {taco.description}
        </p>

      </div>
    </article>
  );
}

export default MenuCard;