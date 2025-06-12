'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Qualification', href: '#qualification' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] bg-opacity-90 border-b border-[#1a1a1a] shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <Link href="/" className="text-[#0ad8fc] font-bold text-2xl">
                    Shahzil Shahzad
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex text-sm space-x-6 font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group relative px-0 py-3 rounded-full transition duration-300 text-[1.2rem] font-semibold hover:text-[#0ad8fc]`}
                        >
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0ad8fc] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none text-xl"
                    >
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 bg-black bg-opacity-95 space-y-2 w-[50vw] fixed r-0 bg-[#02091e]">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-white rounded px-3 py-2 hover:bg-[#009cb7] transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
