import { Button } from '../UI';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {

    const handleDownloadResume = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = personalInfo.resume;
        link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleViewProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Helper function to render React Icons
    const renderSocialIcon = (IconComponent) => {
        if (typeof IconComponent === 'function') {
            return <IconComponent className="w-6 h-6" />;
        }
        return null;
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 theme-bg-primary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 dark:from-primary-950/20 dark:via-transparent dark:to-secondary-950/20"></div>

                {/* Floating Shapes */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
                    {/* Left Content */}
                    <div data-aos="fade-right" className="order-2 lg:order-1">
                        {/* Name and Title */}
                        <div className={`mb-6`}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold theme-text-primary mb-4 leading-tight">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] block lg:inline">
                                    Jihad
                                </span>
                            </h1>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold theme-text-primary mb-3">
                                I'm a {" "}
                                <span className="font-kode-mono bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] block lg:inline">
                                    <Typewriter
                                        words={['Frontend Developer', 'JavaScript Enthusiast', 'React Developer', 'Tech Enthusiast']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl theme-text-secondary max-w-lg leading-relaxed">
                                {personalInfo.subtitle}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className={`mb-8`}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={handleViewProjects}
                                >
                                    View My Work
                                </Button>
                                <Button
                                    onClick={handleDownloadResume}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Resume
                                </Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div >
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        style={{
                                            animationDelay: `${800 + index * 100}ms`,
                                            color: social.color
                                        }}
                                        title={social.name}
                                    >
                                        {renderSocialIcon(social.icon)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div>
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary-500/20 shadow-2xl">
                                    <img
                                        src={personalInfo.avatar || "/api/placeholder/400/400"}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                {/* Status Indicator */}
                                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Available</span>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg rotate-12 animate-float"></div>
                                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                                <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
