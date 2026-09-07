function DrinkCard({ bebida }) {
  return (
    <article className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F8E7C8]">
        {/* Aquí posteriormente pondremos el icono */}
        <span className="text-2xl">🥤</span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#261818]">
          {bebida.name}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          {bebida.description}
        </p>
      </div>
    </article>
  );
}

export default DrinkCard;