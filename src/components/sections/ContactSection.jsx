import { useState } from 'react';
import { Card } from '../UI';
import { contactInfo, socialLinks } from '../../data/portfolioData';
import { validateEmail, copyToClipboard } from '../../utils/helpers';

const ContactSection = () => {
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
        } catch (err) {
            console.error('Form submission error:', err);
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
            className="py-16 sm:py-20 theme-bg-primary"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 `}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-base sm:text-lg theme-text-secondary max-w-2xl mx-auto px-4">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className={`order-2 lg:order-1`}>
                        <div className="h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-6">
                                Let's Connect
                            </h3>

                            <div className="space-y-4 mb-8">
                                {contactMethods.map((method) => (
                                    <div key={method.title} className="flex items-center gap-3 p-3 rounded-lg hover:theme-bg-secondary transition-colors duration-200 group">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            {method.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold theme-text-primary text-sm sm:text-base">{method.title}</h4>
                                            <p className="theme-text-secondary text-xs sm:text-sm truncate">{method.value}</p>
                                        </div>
                                        <div className="flex gap-2 flex-shrink-0">
                                            <button
                                                onClick={method.action}
                                                className="p-2 rounded-lg theme-bg-secondary hover:theme-accent-bg hover:text-white transition-all duration-200 touch-manipulation group-hover:scale-105"
                                                title={`Contact via ${method.title}`}
                                            >
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </button>
                                            {method.copyAction && (
                                                <button
                                                    onClick={method.copyAction}
                                                    className="p-2 rounded-lg theme-bg-secondary hover:theme-accent-bg hover:text-white transition-all duration-200 touch-manipulation group-hover:scale-105"
                                                    title="Copy to clipboard"
                                                >
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mb-8">
                                <h4 className="font-semibold theme-text-primary mb-4 text-sm sm:text-base">Follow Me</h4>
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 touch-manipulation"
                                            title={social.name}
                                        >
                                            <div className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: social.color }}>
                                                <social.icon size={16} className="sm:w-5 sm:h-5" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability Status */}
                            <div className="p-4 rounded-lg theme-bg-secondary">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                                    <div className="min-w-0">
                                        <p className="font-medium theme-text-primary text-sm sm:text-base">{contactInfo.availability}</p>
                                        <p className="text-xs sm:text-sm theme-text-secondary">{contactInfo.responseTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`order-1 lg:order-2 pr-4`}>
                        <div className="lg:sticky lg:top-8">
                            <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-6">
                                Send Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
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
                                            className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base"
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
                                            className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base"
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
                                        className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base"
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
                                        className="w-full px-4 py-3 rounded-lg theme-border border theme-bg-secondary theme-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none text-base"
                                        placeholder="Tell me about your project or ideas..."
                                    />
                                </div>

                                {/* Form Status */}
                                {formStatus.message && (
                                    <div className={`p-4 rounded-lg text-sm sm:text-base ${formStatus.type === 'success'
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                        }`}>
                                        {formStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 sm:py-4 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center touch-manipulation text-base sm:text-lg font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-105 active:scale-95'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
