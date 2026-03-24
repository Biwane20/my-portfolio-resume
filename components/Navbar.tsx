import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="relative z-20 flex items-center px-8 py-6">
            <Link href="/" className="text-xl font-semibold tracking-wide">
                Alisa
            </Link>

            <div className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-sm text-white/75 md:flex">
                <Link href="/#projects" className="transition hover:text-white">
                    Projects
                </Link>
                <Link href="/#skills" className="transition hover:text-white">
                    Skills
                </Link>
                <Link href="/#about" className="transition hover:text-white">
                    About
                </Link>
                <Link href="/#contact" className="transition hover:text-white">
                    Contact
                </Link>
            </div>
        </nav>
    );
}