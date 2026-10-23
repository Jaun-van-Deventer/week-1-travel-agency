import { useState } from 'react'
import TravelerStepper from './TravelerStepper'

export default function TourCard({ tour }) {
    const [travelers, setTravelers] = useState(1)

    return (
        <article className="overflow-hidden rounded-xl bg-white">
            <img src={tour.image} alt={tour.alt} className="h-45 w-full bg-ocean object-cover" />
            <div className="p-6">
                <h3 className="mb-3 text-2xl">{tour.name}</h3>
                <p className="flex items-baseline justify-between">
                    <span>{tour.days} days</span>
                    <strong className="text-xl text-ocean">from ${tour.price.toLocaleString('en-US')}</strong>
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-sand pt-4">
                    <TravelerStepper value={travelers} onChange={setTravelers} />
                    <p>Total: <strong>${(tour.price * travelers).toLocaleString('en-US')}</strong></p>
                </div>
            </div>
        </article>
    )
}