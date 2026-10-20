import { EmailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const stats = [
    { value: "50+", label: "PROJECTS DONE", color: "text-neon" },
    { value: "1+", label: "YEARS EXP.", color: "text-aqua" },
    { value: "10+", label: "TECHNOLOGIES", color: "text-gold" },
    { value: "100%", label: "DEDICATION", color: "text-pixie" },
];

const hobbies = [
    { icon: "🏀", label: "FOOTBALL" },
    { icon: "📚", label: "TECH BLOGS" },
    { icon: "💻", label: "PROGRAMMING" },
    { icon: "🎮", label: "GAMING" },
    { icon: "🌱", label: "GARDENING" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-void2 border-y-2 border-line">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    stage="01"
                    eyebrow="PROFILE"
                    title="About Me"
                    sub="A quick overview of who I am, my background, and what drives my work."
                />

                <div className="grid lg:grid-cols-2 gap-14 items-start">
                    {/* Left — profile card */}
                    <Reveal>
                        <div className="pixel-panel p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-press text-[9px] text-gold tracking-widest">
                                    PROFILE
                                </span>
                                <span className="font-press text-[9px] text-neon tracking-widest">
                                    ● OPEN TO WORK
                                </span>
                            </div>

                            {/* avatar */}
                            <div className="scanlines w-48 h-48 sm:w-56 sm:h-56 mx-auto border-4 border-line">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={personalInfo.avatar}
                                    alt="MD Jihad Hossain"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center mt-5">
                                <div className="font-press text-[10px] sm:text-xs text-ink">
                                    MD JIHAD HOSSAIN
                                </div>
                                <div className="font-mono text-xs text-mute mt-2">
                                    ROLE: {personalInfo.title}
                                </div>
                                <div className="font-mono text-xs text-mute mt-1">
                                    BASED IN: {personalInfo.location}
                                </div>
                            </div>

                            {/* stats grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {stats.map(({ value, label, color }) => (
                                    <div
                                        key={label}
                                        className="bg-void border-2 border-line p-4 text-center"
                                    >
                                        <div
                                            className={`font-press text-sm sm:text-lg ${color}`}
                                        >
                                            {value}
                                        </div>
                                        <div className="font-press text-[7px] sm:text-[8px] text-mute mt-2 tracking-wider">
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — story */}
                    <Reveal delay={150}>
                        <div>
                            <h3 className="font-press text-xs sm:text-sm text-ink mb-6 leading-relaxed">
                                ◆ A DEVELOPER BASED IN BANGLADESH
                            </h3>

                            <p className="text-mute font-mono text-sm leading-relaxed mb-5">
                                &nbsp;&nbsp;I&apos;m a passionate Frontend
                                Developer with expertise in modern web
                                technologies. My journey in programming started
                                with curiosity about how websites work, and it
                                has evolved into a deep passion for building
                                scalable, user-centric applications.
                            </p>
                            <p className="text-mute font-mono text-sm leading-relaxed mb-9">
                                &nbsp;&nbsp;I particularly enjoy working on
                                challenging problems that require creative
                                solutions. Whether it&apos;s designing intuitive
                                user interfaces or architecting clean code, I
                                find satisfaction in every aspect of the
                                development process.
                            </p>

                            {/* contact rows — menu select style */}
                            <div className="space-y-3 mb-9 font-mono text-sm">
                                {[
                                    {
                                        icon: EmailIcon,
                                        text: personalInfo.email,
                                    },
                                    {
                                        icon: PhoneIcon,
                                        text: personalInfo.phone,
                                    },
                                    {
                                        icon: MapPinIcon,
                                        text: personalInfo.location,
                                    },
                                ].map(({ icon: Icon, text }) => (
                                    <div
                                        key={text}
                                        className="flex items-center gap-3 text-ink"
                                    >
                                        <span className="w-8 h-8 flex items-center justify-center bg-panel border-2 border-line text-aqua shrink-0">
                                            <Icon className="w-4 h-4" />
                                        </span>
                                        <span className="break-all">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* inventory */}
                            <h4 className="font-press text-[9px] text-gold glow-gold tracking-widest mb-4">
                                ◆ INTERESTS &amp; HOBBIES
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {hobbies.map(({ icon, label }) => (
                                    <span
                                        key={label}
                                        className="pixel-press inline-flex items-center gap-2 bg-panel px-3 py-2 font-press text-[8px] text-ink cursor-default"
                                    >
                                        <span className="text-sm leading-none">
                                            {icon}
                                        </span>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
