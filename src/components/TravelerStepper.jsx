export default function TravelerStepper({ value, onChange, min = 1, max = 10 }) {
    const buttonClass =
        'size-10 rounded-full border-2 border-ocean text-xl leading-none text-ocean disabled:opacity-40'

    return (
        <div className="flex items-center gap-3">
            <button type="button" className={buttonClass} aria-label="Remove a traveler"
                onClick={() => onChange(value - 1)} disabled={value <= min}>−</button>
            <span className="w-6 text-center font-bold" aria-live="polite">{value}</span>
            <button type="button" className={buttonClass} aria-label="Add a traveler"
                onClick={() => onChange(value + 1)} disabled={value >= max}>+</button>
        </div>
    )
}