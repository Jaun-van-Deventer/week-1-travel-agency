const variants = {
    primary: "bg-sunset text-ink",
    outline: "border-2 border-white text-white",
    dark: "bg-ink text-white",
};

export default function Button({ href, variant = "primary", children }) {
    return (
        <a
            href={href}
            className={`inline-block rounded-xl px-8 py-3.5 font-bold ${variants[variant]}`}
        >
            {children}
        </a>
    );
}
