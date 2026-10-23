import { useEffect, useState } from 'react'
import TourCard from './TourCard'
import CategoryFilter from './CategoryFilter'

export default function TourGrid() {
    const [tours, setTours] = useState([])
    const [status, setStatus] = useState('loading') // 'loading' | 'error' | 'ready'
    const [category, setCategory] = useState('All')

    useEffect(() => {
        const controller = new AbortController()

        async function loadTours() {
            try {
                const res = await fetch('/api/tours', { signal: controller.signal })
                if (!res.ok) throw new Error(`Request failed: ${res.status}`)
                setTours(await res.json())
                setStatus('ready')
            } catch (err) {
                if (err.name !== 'AbortError') setStatus('error')
            }
        }

        loadTours()
        return () => controller.abort()
    }, [])

    const categories = ['All', ...new Set(tours.map(tour => tour.category))]

    const visibleTours = category === 'All'
        ? tours
        : tours.filter(tour => tour.category === category)

    return (
        <section id="tours" className="px-(--page-pad) py-20">
            <h2 className="mb-2 text-3xl text-ocean sm:text-4xl lg:text-5xl">Our tour packages</h2>
            <p className="mb-12 max-w-xl">Six ways to go. Every price covers stays, guides and local transport.</p>

            {status === 'loading' && <p>Loading tours…</p>}
            {status === 'error' && <p role="alert">Sorry, we couldn't load the tours. Please try again later.</p>}

            {status === 'ready' && (
                <>
                    <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleTours.map(tour => <TourCard key={tour.id} tour={tour} />)}
                    </div>
                </>
            )}
        </section>
    )
}