import { testimonials } from '../data/testimonials'

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-white px-(--page-pad) py-20">
            <h2 className="mb-2 text-3xl text-ocean sm:text-4xl lg:text-5xl">What travellers say</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {testimonials.map(t => (
                    <figure key={t.id} className="rounded-xl bg-sand p-8">
                        <blockquote className="mb-5 font-serif text-[1.3rem] leading-[1.4]">{t.quote}</blockquote>
                        <figcaption className="text-[0.95rem]"><strong>{t.name}</strong><br />{t.tour}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}