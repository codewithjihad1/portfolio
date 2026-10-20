"use client";

import {
    EmailIcon,
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from "@/components/Icons";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";

const socialIcons = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Twitter: TwitterIcon,
    Email: EmailIcon,
};

/* floating 8-bit tiles */
const sprites = [
    { cls: "top-24 left-[8%] w-5 h-5 bg-neon", delay: "0s" },
    { cls: "top-1/3 right-[12%] w-4 h-4 bg-pixie", delay: "0.6s" },
    { cls: "top-[60%] left-[15%] w-3 h-3 bg-gold", delay: "1.1s" },
    { cls: "bottom-32 right-[20%] w-5 h-5 bg-aqua", delay: "1.6s" },
    { cls: "top-40 right-[6%] w-3 h-3 bg-grape", delay: "2s" },
    { cls: "bottom-24 left-[6%] w-4 h-4 bg-pixie", delay: "0.3s" },
];

const marqueeWords = [
    "MD JIHAD HOSSAIN",
    "FRONTEND DEVELOPER",
    "REACT.JS",
    "NEXT.JS",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "CLEAN CODE",
    "USER EXPERIENCE",
];

export default function HeroSection() {
    const typedText = useTypewriter(personalInfo.roles);

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col relative overflow-hidden bg-void pt-24"
        >
            {/* pixel sprites */}
            {sprites.map(({ cls, delay }, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className={`absolute animate-floaty opacity-70 ${cls}`}
                    style={{ animationDelay: delay }}
                />
            ))}

            {/* HUD row */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center font-press text-[9px] sm:text-[10px] text-mute tracking-widest mb-2">
                    <span>MD JIHAD HOSSAIN</span>
                    <span className="hidden sm:inline">PORTFOLIO 2026</span>
                    <span className="text-gold glow-gold">OPEN TO WORK</span>
                </div>
            </div>

            {/* Main stage */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 flex items-center">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20 w-full">
                    {/* Left column */}
                    <div className="flex-1 text-center lg:text-left">
                        <span
                            className="animate-pop-in inline-flex items-center gap-2 pixel-press bg-panel px-4 py-2 font-press text-[8px] sm:text-[10px] text-neon mb-8 cursor-default"
                            style={{ animationDelay: "0.05s" }}
                        >
                            <span className="w-2 h-2 bg-neon animate-pulse" />
                            AVAILABLE FOR WORK
                        </span>

                        <h1
                            className="animate-pop-in font-press text-[26px] sm:text-4xl lg:text-[40px] leading-relaxed mb-6"
                            style={{ animationDelay: "0.15s" }}
                        >
                            <span className="text-ink">MD JIHAD</span>
                            <br />
                            <span className="text-neon glow-neon">HOSSAIN</span>
                        </h1>

                        {/* Terminal typewriter */}
                        <div
                            className="animate-pop-in font-mono text-base sm:text-lg text-aqua mb-6 h-7 flex items-center justify-center lg:justify-start"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <span className="text-mute mr-1">&gt;</span>
                            {typedText}
                            <span className="cursor-blink text-neon ml-0.5">
                                ▮
                            </span>
                        </div>

                        <p
                            className="animate-pop-in text-mute font-mono text-sm sm:text-base leading-relaxed max-w-lg mb-9 mx-auto lg:mx-0"
                            style={{ animationDelay: "0.45s" }}
                        >
                            {personalInfo.bio}
                        </p>

                        {/* CTA buttons */}
                        <div
                            className="animate-pop-in flex flex-wrap gap-5 justify-center lg:justify-start mb-10"
                            style={{ animationDelay: "0.55s" }}
                        >
                            <a
                                href="#contact"
                                className="pixel-press bg-neon text-void font-press text-[10px] sm:text-xs px-6 py-3.5 hover:bg-neon cursor-pointer animate-pulse"
                            >
                                ▶ CONTACT ME
                            </a>
                            <a
                                href="#projects"
                                className="pixel-press bg-panel text-ink font-press text-[10px] sm:text-xs px-6 py-3.5 cursor-pointer"
                            >
                                VIEW PROJECTS
                            </a>
                        </div>

                        {/* Social links — pixel sockets */}
                        <div
                            className="animate-pop-in flex gap-4 justify-center lg:justify-start"
                            style={{ animationDelay: "0.65s" }}
                        >
                            {socialLinks.map(({ name, url }) => {
                                const Icon = socialIcons[name];
                                return Icon ? (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="pixel-press w-11 h-11 flex items-center justify-center bg-panel text-mute hover:text-neon cursor-pointer"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>

                    {/* Right — avatar in a pixel frame */}
                    <div className="shrink-0 relative">
                        <span
                            aria-hidden="true"
                            className="absolute -top-5 -right-5 w-full h-full bg-pixie z-0 translate-x-0"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute -bottom-5 -left-5 w-full h-full bg-aqua z-0"
                        />
                        <div
                            className="animate-pop-in relative"
                            style={{ animationDelay: "0.25s" }}
                        >
                            <div className="scanlines w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-4 border-line bg-panel animate-floaty">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={personalInfo.avatar}
                                    alt="MD Jihad Hossain"
                                    className="w-full h-full object-cover"
                                />
                                {/* HUD label */}
                                <div className="absolute bottom-0 inset-x-0 bg-line/90 px-3 py-2 font-press text-[7px] sm:text-[9px] text-void text-center tracking-wider">
                                    P1 · FRONTEND DEVELOPER
                                </div>
                            </div>
                        </div>

                        {/* availability chip */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 pixel-press bg-panel px-4 py-1.5">
                            <span className="font-press text-[8px] text-ink tracking-wider">
                                + AVAILABLE NOW
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* scroll hint */}
            <div className="pb-6 text-center" aria-hidden="true">
                <span className="font-press text-[8px] sm:text-[10px] text-mute animate-pulse tracking-widest">
                    ▼ SCROLL TO EXPLORE
                </span>
            </div>

            {/* Marquee strip */}
            <div className="border-y-2 border-line bg-gold py-2.5 overflow-hidden select-none">
                <div className="flex whitespace-nowrap animate-marquee w-max">
                    {[0, 1].map((n) => (
                        <div key={n} className="flex">
                            {marqueeWords.map((w, i) => (
                                <span
                                    key={i}
                                    className="font-press text-[9px] sm:text-[10px] text-void mx-6 tracking-wider"
                                >
                                    ★ {w}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
