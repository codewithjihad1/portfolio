
import { aboutMe, personalInfo } from '../../data/portfolioData';

const AboutSection = () => {

    return (
        <section
            id="about"
            className="py-20 theme-bg-secondary"
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className={`text-center mb-16 `}>
                    <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image and Quick Info */}
                    <div >
                        <div className="text-center lg:text-left">
                            <div className="flex flex-col lg:flex-row items-center gap-6">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src={personalInfo.avatar || "/api/placeholder/200/200"}
                                            alt={personalInfo.name}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                        <span className="font-semibold">Available</span>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold theme-text-primary mb-2">{personalInfo.name}</h3>
                                    <p className="text-lg theme-accent font-semibold mb-4">{personalInfo.title}</p>

                                    <div className="space-y-2 text-sm theme-text-secondary">
                                        <div className="flex items-center justify-center lg:justify-start gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{personalInfo.location}</span>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>{personalInfo.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold theme-text-primary mb-3">Introduction</h3>
                                <p className="theme-text-secondary leading-relaxed">{aboutMe.introduction}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold theme-text-primary mb-3">My Programming Journey</h3>
                                <p className="theme-text-secondary leading-relaxed">{aboutMe.programmingJourney}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold theme-text-primary mb-3">What I Enjoy</h3>
                                <p className="theme-text-secondary leading-relaxed">{aboutMe.workEnjoyment}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-12 text-center `}>
                    <div className="inline-flex items-center gap-4 theme-bg-primary px-8 py-4 rounded-2xl shadow-lg">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="theme-text-primary font-medium">
                            Currently available for new opportunities
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
