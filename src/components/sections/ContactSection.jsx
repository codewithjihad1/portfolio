import React, { useState } from 'react';
import { Button, Card } from '../UI';
import { contactInfo, socialLinks } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks';
import { validateEmail, copyToClipboard } from '../../utils/helpers';

const ContactSection = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
            setIsSubmitting(false);
            return;
        }

        if (!validateEmail(formData.email)) {
            setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));

            setFormStatus({
                type: 'success',
                message: 'Thank you for your message! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopyEmail = async () => {
        const success = await copyToClipboard(contactInfo.email);
        if (success) {
            setFormStatus({ type: 'success', message: 'Email copied to clipboard!' });
            setTimeout(() => setFormStatus({ type: '', message: '' }), 3000);
        }
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: contactInfo.email,
            action: () => window.open(`mailto:${contactInfo.email}`, '_blank'),
            copyAction: handleCopyEmail
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            value: contactInfo.phone,
            action: () => window.open(`tel:${contactInfo.phone}`, '_blank')
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
            ),
            title: 'WhatsApp',
            value: contactInfo.whatsapp,
            action: () => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')
        }
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="py-20 theme-bg-primary"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                            Get In{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                Touch
                            </span>
                        </h2>
                        <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Card>
                                <h3 className="text-2xl font-bold theme-text-primary mb-6">
                                    Let's Connect
                                </h3>

                                <div className="space-y-6 mb-8">
                                    {contactMethods.map((method, index) => (
                                        <div key={method.title} className="flex items-center gap-4 p-4 rounded-lg hover:theme-bg-secondary transition-colors duration-200">
                                            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white">
                                                {method.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold theme-text-primary">{method.title}</h4>
                                                <p className="theme-text-secondary text-sm">{method.value}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={method.action}
                                                    className="p-2 rounded-lg theme-bg-secondary hover:theme-accent-bg hover:text-white transition-all duration-200"
                                                    title={`Contact via ${method.title}`}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </button>
                                                {method.copyAction && (
                                                    <button
                                                        onClick={method.copyAction}
                                                        className="p-2 rounded-lg theme-bg-secondary hover:theme-accent-bg hover:text-white transition-all duration-200"
                                                        title="Copy to clipboard"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h4 className="font-semibold theme-text-primary mb-4">Follow Me</h4>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                                title={social.name}
                                            >
                                                {/* Add social icons here */}
                                                <div className="w-5 h-5" style={{ color: social.color }}>
                                                    {/* Icon will be added based on social.icon */}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability Status */}
                                <div className="mt-8 p-4 rounded-lg theme-bg-secondary">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <div>
                                            <p className="font-medium theme-text-primary">{contactInfo.availability}</p>
                                            <p className="text-sm theme-text-secondary">{contactInfo.responseTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Card>
                                <h3 className="text-2xl font-bold theme-text-primary mb-6">
                                    Send Message
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium theme-text-primary mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium theme-text-primary mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium theme-text-primary mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Project Discussion"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium theme-text-primary mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                                            placeholder="Tell me about your project or ideas..."
                                        />
                                    </div>

                                    {/* Form Status */}
                                    {formStatus.message && (
                                        <div className={`p-4 rounded-lg ${formStatus.type === 'success'
                                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                            }`}>
                                            {formStatus.message}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        loading={isSubmitting}
                                        className="w-full"
                                        size="lg"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
