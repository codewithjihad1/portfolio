'use client';

import { ClockIcon, EmailIcon, MapPinIcon, PhoneIcon } from '@/components/Icons';
import { contactInfo, socialLinks } from '@/data/portfolio';
import { useState } from 'react';

const contactCards = [
    { icon: EmailIcon, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: PhoneIcon, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: MapPinIcon, label: 'Location', value: contactInfo.location, href: '#' },
    { icon: ClockIcon, label: 'Response Time', value: contactInfo.responseTime, href: '#' },
];

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
        <section id="contact" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Contact Me</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        {contactInfo.availability}. Feel free to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left — Contact Cards + Social */}
                    <div className="space-y-4">
                        {contactCards.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-600 dark:hover:border-primary-400 transition-colors group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <Icon />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        {label}
                                    </div>
                                    <div className="text-slate-800 dark:text-slate-200 font-medium text-sm mt-0.5">
                                        {value}
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                                Connect With Me
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ name, url }) => (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-600 hover:text-white rounded-xl transition-colors">
                                        {name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                        {status === 'sent' ? (
                            <div className="text-center py-12">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-500 dark:text-slate-400">
                                    Thanks for reaching out. I&apos;ll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 px-5 py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                            Name
                                        </label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        Subject
                                    </label>
                                    <input
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project inquiry"
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm resize-none"
                                    />
                                </div>
                                {error && (
                                    <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                                        ⚠️ {error}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-3.5 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary-600/25">
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
