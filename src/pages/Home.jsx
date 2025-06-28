import React from 'react';
import Navbar from '../components/Navbar';
import {
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    Footer
} from '../components/sections';

const Home = () => {
    return (
        <div className="min-h-screen theme-bg-primary transition-colors duration-300">
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
