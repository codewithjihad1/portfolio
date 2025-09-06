import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/useTheme';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const navRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle click outside to close mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="relative w-full">
            <nav
                ref={navRef}
                className={`sticky px-4 top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out ${isScrolled
                    ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-slate-700/20'
                    : 'bg-transparent'
                    }`}
            >
                {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8"> */}
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 z-10">
                            <a
                                href="#home"
                                onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
                                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent hover:from-secondary-600 hover:via-primary-600 hover:to-purple-600 transition-all duration-500 animate-gradient bg-[length:200%_auto] hover:scale-105 transform"
                            >
                                <span className="hidden sm:inline">CodeWithJihad</span>
                                <span className="sm:hidden">CWJ</span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-1">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {link.name}
                                        <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full"></span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Theme Toggle & Mobile Menu Button */}
                        <div className="flex items-center space-x-2 sm:space-x-4 z-10">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group touch-manipulation"
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </button>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    aria-label="Toggle menu"
                                    aria-expanded={isMenuOpen}
                                >
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {isMenuOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden w-full absolute top-full -left-full transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen
                        ? 'max-h-96 opacity-100 visible left-0'
                        : 'max-h-0 opacity-0 invisible -left-full'
                        }`}>
                        <div className="mx-4 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
                            <div className="px-4 py-4 space-y-2">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <span className="flex-1">{link.name}</span>
                                        <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </nav>

            {/* Mobile menu backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>

    );
};

export default Navbar;