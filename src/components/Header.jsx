import { navLinks } from '../data/navLinks'

export default function Header() {
    return (
        <header className="px-(--page-pad) py-5">
            <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-4">
                <a href="#top" className="font-serif text-[1.75rem] font-bold text-ocean">Wayfarer</a>
                <ul className="flex flex-wrap gap-x-8 gap-y-2 font-medium">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="inline-block py-3">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}