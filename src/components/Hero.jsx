import Button from './Button'

export default function Hero() {
    return (
        <section
            id="top"
            className="flex min-h-[max(34rem,calc(100svh-5rem))] items-center bg-ocean bg-[image:linear-gradient(rgba(11,79,108,0.55),rgba(11,79,108,0.55)),url('/images/hero.jpg')] bg-cover bg-center px-(--page-pad) py-16 text-white"
        >
            <div className="flex max-w-176 flex-col gap-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl">Travel slower. See further.</h1>
                <p className="max-w-lg text-xl">Small-group trips led by people who live where you are going.</p>
                <div className="flex flex-wrap gap-4">
                    <Button href="#plan">Plan your trip</Button>
                    <Button href="#tours" variant="outline">Browse tours</Button>
                </div>
            </div>
        </section>
    )
}