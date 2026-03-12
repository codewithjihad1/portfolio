'use client';

import { EmailIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { useTypewriter } from '@/hooks/useTypewriter';

const socialIcons = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Twitter: TwitterIcon,
    Email: EmailIcon,
};

export default function HeroSection() {
    const typedText = useTypewriter(personalInfo.roles);

    return (
        <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-slate-950 pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-5 tracking-wide">
                            👋 Hello, I&apos;m
                        </span>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            MD Jihad
                            <br />
                            <span className="gradient-text">Hossain</span>
                        </h1>

                        {/* Typewriter */}
                        <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
                            <span className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                                {typedText}
                                <span className="cursor-blink text-primary-600 ml-0.5">|</span>
                            </span>
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0">
                            {personalInfo.bio}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                            <a
                                href="#contact"
                                className="px-7 py-3.5 bg-primary-600 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5">
                                Hire Me
                            </a>
                            <a
                                href="#projects"
                                className="px-7 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 font-semibold rounded-xl transition-all hover:-translate-y-0.5">
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 justify-center lg:justify-start">
                            {socialLinks.map(({ name, url }) => {
                                const Icon = socialIcons[name];
                                return Icon ? (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all hover:-translate-y-0.5">
                                        <Icon />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 via-primary-400 to-emerald-400 p-1.5 shadow-2xl shadow-primary-600/30">
                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={personalInfo.avatar}
                                        alt="MD Jihad Hossain"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Availability badge */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-md">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Available for work
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
