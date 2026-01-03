import React from "react";
import Link from "next/link";


export default function Header() {
    return(
        <header className="flex justify-between items-center px-8 py-6">
            <Link href="/" className="text-2xl font-bold text-purple-400">
                LaFleur
            </Link>
            <nav className="flex gap-8" >
                <Link href="/contact" alt="Contact" className="text-l text-purple-400 hover:text-purple-300 transition-colors">
                    Contact
                </Link>
                <Link href="/projects" alt="Projects" className="text-l text-purple-400 hover:text-purple-300 transition-colors">
                    Projects
                </Link>
            </nav>
            <button className="p-2 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
            </button>
        </header>
    )
}