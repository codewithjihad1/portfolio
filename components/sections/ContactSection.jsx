'use client';

import { ClockIcon, EmailIcon, GitHubIcon, LinkedInIcon, MapPinIcon, PhoneIcon, TwitterIcon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { contactInfo, socialLinks } from '@/data/portfolio';
import { useState } from 'react';

const contactCards = [
    { icon: EmailIcon, label: 'MAIL', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: PhoneIcon, label: 'PHONE', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: MapPinIcon, label: 'MAP', value: contactInfo.location, href: '#' },
    { icon: ClockIcon, label: 'RESPAWN TIME', value: contactInfo.responseTime, href: '#' },
];

const socialIcons = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Twitter: TwitterIcon, Email: EmailIcon };

const inputClass =
    'w-full px-4 py-3 bg-void border-2 border-line text-ink font-mono text-sm placeholder-mute/60 focus:outline-none focus:border-aqua focus:shadow-[0_0_10px_var(--aqua)] transition-shadow resize-none';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function ContactSection() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setError('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to send message.');
            }
            setStatus('sent');
            setForm(initialForm);
        } catch (err) {
            setError(err.message);
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-24 bg-void2 border-t-2 border-line">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    stage="FINAL STAGE"
                    eyebrow="TRANSMISSION"
                    title="Contact Me"
                    sub={`${contactInfo.availability}. Open a channel to Player 1 below.`}
                />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left — channel select menu */}
                    <Reveal>
                        <div className="space-y-5">
                            <h3 className="font-press text-[9px] text-gold glow-gold tracking-widest">
                                ◆ SELECT A CHANNEL:
                            </h3>
                        {contactCards.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="pixel-press bg-panel flex items-center gap-4 p-4 group hover:bg-panel cursor-pointer">
                                <span className="w-10 h-10 flex items-center justify-center bg-void border-2 border-line text-aqua group-hover:text-neon flex-shrink-0 transition-colors">
                                    <Icon className="w-4 h-4" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block font-press text-[7px] text-pixie tracking-widest">
                                        ▸ {label}
                                    </span>
                                    <span className="block text-ink font-mono text-sm mt-1 truncate">{value}</span>
                                </span>
                            </a>
                        ))}

                        {/* join party — socials */}
                        <div className="pt-3">
                            <h3 className="font-press text-[9px] text-grape tracking-widest mb-4">
                                ◆ JOIN MY PARTY:
                            </h3>
                            <div className="flex gap-4 flex-wrap">
                                {socialLinks.map(({ name, url }) => {
                                    const Icon = socialIcons[name];
                                    return Icon ? (
                                        <a
                                            key={name}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Join on ${name}`}
                                            className="pixel-press w-11 h-11 flex items-center justify-center bg-panel text-mute hover:text-pixie">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ) : null;
                                })}
                            </div>
                        </div>
                        </div>
                    </Reveal>

                    {/* Right — message console */}
                    <Reveal delay={150}>
                        <div className="pixel-panel bg-panel">
                        {/* window title bar */}
                        <div className="flex items-center justify-between border-b-2 border-line bg-void px-4 py-2.5">
                            <span className="font-press text-[8px] text-aqua tracking-widest">
                                [ ] NEW_MESSAGE.EXE
                            </span>
                            <span className="flex gap-1.5" aria-hidden="true">
                                <span className="w-2.5 h-2.5 bg-pixie" />
                                <span className="w-2.5 h-2.5 bg-gold" />
                                <span className="w-2.5 h-2.5 bg-neon" />
                            </span>
                        </div>

                        <div className="p-5 sm:p-7">
                            {status === 'sent' ? (
                                <div className="text-center py-14">
                                    <div className="font-press text-2xl sm:text-3xl text-neon glow-neon mb-5">
                                        ★ LEVEL ★
                                    </div>
                                    <div className="font-press text-xl sm:text-2xl text-ink mb-4">CLEARED!</div>
                                    <p className="text-mute font-mono text-sm leading-relaxed">
                                        Transmission received. Player 1 responds within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="pixel-press mt-8 px-6 py-3 bg-gold text-void font-press text-[9px] cursor-pointer hover:bg-gold">
                                        ↺ PLAY AGAIN
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-press text-[7px] text-mute tracking-widest mb-2">
                                                PLAYER NAME
                                            </label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="your_name"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-press text-[7px] text-mute tracking-widest mb-2">
                                                E-MAIL ADDRESS
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="you@planet.space"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-press text-[7px] text-mute tracking-widest mb-2">
                                            SUBJECT
                                        </label>
                                        <input
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="PROJECT_QUEST"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-press text-[7px] text-mute tracking-widest mb-2">
                                            MESSAGE
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell me about your quest..."
                                            className={inputClass + ' h-auto'}
                                        />
                                    </div>
                                    {error && (
                                        <p className="font-mono text-sm text-pixie bg-pixie/10 border-2 border-pixie px-4 py-3">
                                            ⚠ GAME OVER — {error}
                                        </p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="pixel-press w-full py-4 bg-neon text-void font-press text-[10px] sm:text-xs cursor-pointer disabled:opacity-70 hover:bg-neon">
                                        {status === 'sending' ? '▒ TRANSMITTING...' : '▶ TRANSMIT'}
                                    </button>
                                    <p className="text-center font-press text-[7px] text-mute tracking-widest animate-pulse">
                                        INSERT COIN · FREE MESSAGE
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
