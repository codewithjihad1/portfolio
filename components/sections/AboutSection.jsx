import { EmailIcon, MapPinIcon, PhoneIcon } from '@/components/Icons';
import { personalInfo } from '@/data/portfolio';

const stats = [
    { value: '3+', label: 'Projects Built' },
    { value: '2+', label: 'Years Learning' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Dedication' },
];

const hobbies = [
    '🏀 Playing Basketball',
    '🎨 Digital Art & Design',
    '📚 Reading Tech Blogs',
    '🎮 Gaming',
    '🌱 Gardening',
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">
                        Get To Know
                    </span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">About Me</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Avatar + Stats */}
                    <div className="flex flex-col items-center gap-8">
                        <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-primary-600/20 shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={personalInfo.avatar}
                                alt="MD Jihad Hossain"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                            {stats.map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="text-center bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-3xl font-bold text-primary-600">{value}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Frontend Developer based in Bangladesh
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            I&apos;m a passionate Frontend Developer with expertise in modern web technologies. My
                            journey in programming started with curiosity about how websites work, and it has evolved
                            into a deep passion for building scalable, user-centric applications.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            I particularly enjoy working on challenging problems that require creative solutions.
                            Whether it&apos;s designing intuitive user interfaces or architecting clean code, I find
                            satisfaction in every aspect of the development process.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-3 mb-8">
                            {[
                                { icon: EmailIcon, text: personalInfo.email },
                                { icon: PhoneIcon, text: personalInfo.phone },
                                { icon: MapPinIcon, text: personalInfo.location },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <Icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Hobbies */}
                        <div>
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                                Hobbies & Interests
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {hobbies.map((h) => (
                                    <span
                                        key={h}
                                        className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-lg">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
