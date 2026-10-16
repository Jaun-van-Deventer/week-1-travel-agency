import Button from './Button'

export default function PlanCta() {
    return (
        <section id="plan" className="bg-sunset px-(--page-pad) py-20">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-160">
                    <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl">Ready to go somewhere?</h2>
                    <p className="text-[1.15rem]">Tell us when, where and with whom. We will reply with a draft itinerary within two working days.</p>
                </div>
                <Button href="mailto:hello@wayfarer.example" variant="dark">Plan your trip</Button>
            </div>
        </section>
    )
}