import { tours } from '../data/tours'
import TourCard from './TourCard'

export default function TourGrid() {
    return (
        <section id="tours" className="px-(--page-pad) py-20">
            <h2 className="mb-2 text-3xl text-ocean sm:text-4xl lg:text-5xl">Our tour packages</h2>
            <p className="mb-12 max-w-xl">Six ways to go. Every price covers stays, guides and local transport.</p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
            </div>
        </section>
    )
}