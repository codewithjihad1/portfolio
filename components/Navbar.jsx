'use client';

import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@/components/Icons';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

const navLinks = [
    { href: '#hero', label: 'PLAY', icon: '▶' },
    { href: '#about', label: 'PLAYER', icon: '☺' },
    { href: '#experience', label: 'QUESTS', icon: '⚔' },
    { href: '#skills', label: 'SKILLS', icon: '✦' },
    { href: '#projects', label: 'GAMES', icon: '▣' },
    { href: '#contact', label: 'CONTACT', icon: '✉' },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b-2 transition-all duration-300 ${
                scrolled ? 'bg-void/95 backdrop-blur-sm border-line' : 'bg-transparent border-transparent'
            }`}>
            {/* scanline texture */}
            <div className="scanlines absolute inset-0 pointer-events-none max-sm:hidden" aria-hidden="true" />

            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-14">
                    {/* Player 1 badge */}
                    <a href="#hero" className="flex items-center gap-3 group">
                        <span className="font-press text-neon text-xs glow-neon">JIHAD</span>
                        <span className="hidden sm:inline font-press text-[9px] text-mute tracking-widest">
                            PLAYER 1
                        </span>
                        <span className="flex gap-0.5" aria-hidden="true">
                            {[0, 1, 2].map((i) => (
                                <span key={i} className="text-rose-400 text-[10px] animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
                                    ♥
                                </span>
                            ))}
                        </span>
                    </a>

                    {/* Desktop menu — like an arcade attract screen */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(({ href, label, icon }) => (
                            <a
                                key={href}
                                href={href}
                                className="group px-3 py-2 font-press text-[9px] text-mute hover:text-ink transition-colors">
                                <span className="text-neon opacity-0 group-hover:opacity-100 transition-opacity mr-1">
                                    {icon}
                                </span>
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="pixel-press bg-panel p-2 text-gold cursor-pointer">
                            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <a
                            href="#contact"
                            className="hidden md:inline-flex pixel-press bg-gold text-void font-press text-[9px] px-4 py-2 items-center hover:bg-gold">
                            ▶ START
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden pixel-press bg-panel p-2 text-ink cursor-pointer"
                            aria-label="Toggle menu">
                            {isOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden pixel-panel bg-panel mb-3 space-y-0.5 py-2">
                        {navLinks.map(({ href, label, icon }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-4 py-2.5 font-press text-[10px] text-mute hover:text-ink hover:bg-void2 transition-colors">
                                <span className="text-neon">{icon}</span>
                                {label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block mt-1 mx-2 py-2.5 bg-gold text-void font-press text-[10px] text-center">
                            ▶ START
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
