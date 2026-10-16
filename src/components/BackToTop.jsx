export default function BackToTop() {
    return (
        <a
            href="#top"
            aria-label="Back to top"
            className="fixed right-(--page-pad) bottom-5 z-10 flex size-12 items-center justify-center rounded-full border-2 border-white bg-ocean text-2xl leading-none text-white shadow-md"
        >
            <span aria-hidden="true">&uarr;</span>
        </a>
    )
}