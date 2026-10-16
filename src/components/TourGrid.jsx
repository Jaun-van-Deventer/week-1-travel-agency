import { useState } from 'react'
import { tours } from '../data/tours'
import TourCard from './TourCard'
import CategoryFilter from './CategoryFilter'

const categories = ['All', ...new Set(tours.map(tour => tour.category))]

export default function TourGrid() {
    const [category, setCategory] = useState('All')

    const visibleTours = category === 'All'
        ? tours
        : tours.filter(tour => tour.category === category)

    return (
        <section id="tours" className="px-(--page-pad) py-20">
            <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visibleTours.map(tour => <TourCard key={tour.id} tour={tour} />)}
            </div>
        </section>
    )
}