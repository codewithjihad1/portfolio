import React from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="theme-bg-secondary theme-border border-t">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                {personalInfo.name}
                            </h3>
                            <p className="theme-text-secondary text-sm leading-relaxed">
                                {personalInfo.bio}
                            </p>
                            <div className="flex items-center gap-2 text-sm theme-text-secondary">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold theme-text-primary">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="theme-text-secondary hover:theme-accent transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold theme-text-primary">Get In Touch</h4>
                            <div className="space-y-3">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-3 theme-text-secondary hover:theme-accent transition-colors duration-200 text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {personalInfo.email}
                                </a>
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    className="flex items-center gap-3 theme-text-secondary hover:theme-accent transition-colors duration-200 text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {personalInfo.phone}
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4">
                                <p className="text-sm font-medium theme-text-primary mb-3">Follow Me</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                            title={social.name}
                                        >
                                            <div className="w-4 h-4" style={{ color: social.color }}>
                                                <social.icon size={20} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="py-6 theme-border border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm theme-text-secondary">
                            © {currentYear} {personalInfo.name}. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6 text-sm theme-text-secondary">
                            <span>Built with React & Tailwind CSS</span>
                            <div className="flex items-center gap-1">
                                <span>Made with</span>
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span>by {personalInfo.name}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={() => scrollToSection('#home')}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
                    title="Back to top"
                >
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
