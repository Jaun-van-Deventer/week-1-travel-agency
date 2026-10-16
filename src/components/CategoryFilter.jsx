export default function CategoryFilter({ categories, selected, onSelect }) {
    return (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter tours by category">
            {categories.map(category => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onSelect(category)}
                    aria-pressed={category === selected}
                    className={`rounded-full border-2 border-ocean px-5 py-2 font-medium ${category === selected ? 'bg-ocean text-white' : 'text-ocean'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}