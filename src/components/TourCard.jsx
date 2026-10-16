export default function TourCard({ tour }) {
    return (
        <article className="overflow-hidden rounded-xl bg-white">
            <img src={tour.image} alt={tour.alt} className="h-45 w-full bg-ocean object-cover" />
            <div className="p-6">
                <h3 className="mb-3 text-2xl">{tour.name}</h3>
                <p className="flex items-baseline justify-between">
                    <span>{tour.days} days</span>
                    <strong className="text-xl text-ocean">from ${tour.price.toLocaleString('en-US')}</strong>
                </p>
            </div>
        </article>
    )
}