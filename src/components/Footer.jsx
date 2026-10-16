import { navLinks } from '../data/navLinks'

const linkClass = 'inline-block py-1 hover:underline'

export default function Footer() {
    return (
        <footer className="bg-ink px-(--page-pad) pt-12 pb-20 text-sand">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                    <p className="mb-2 font-serif text-[1.6rem]">Wayfarer</p>
                    <p className="max-w-88">Small-group trips led by local guides. Slower pace, fewer crowds, better stories.</p>
                </div>

                <nav aria-label="Footer">
                    <h2 className="mb-3 font-sans text-sm tracking-widest text-sunset uppercase">Explore</h2>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.href}><a href={link.href} className={linkClass}>{link.label}</a></li>
                        ))}
                        <li><a href="#top" className={linkClass}>Back to top</a></li>
                    </ul>
                </nav>

                <div>
                    <h2 className="mb-3 font-sans text-sm tracking-widest text-sunset uppercase">Contact</h2>
                    <address className="not-italic">
                        <a href="mailto:hello@wayfarer.example" className="hover:underline">hello@wayfarer.example</a><br />
                        Open Monday to Friday, 9:00 to 17:00
                    </address>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-sand/25 pt-6 text-sm sm:flex-row sm:justify-between sm:gap-x-8">
                <p>&copy; 2026 Wayfarer Travel</p>
                <p>Fictional agency project. Photo credits are in the README.</p>
            </div>
        </footer>
    )
}