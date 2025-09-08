import { useState } from 'react';
import { Card } from '../UI';
import { skills } from '../../data/portfolioData';
import SkillsCard from './skills/SkillsCard';

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const categories = [
        { key: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-blue-500 to-purple-600' },
        { key: 'backend', label: 'Backend', icon: '⚙️', color: 'from-green-500 to-blue-600' },
        { key: 'tools', label: 'Tools & Others', icon: '🛠️', color: 'from-orange-500 to-red-600' }
    ];

    return (
        <section
            id="skills"
            className="py-20 theme-bg-primary relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-secondary-400/10 to-primary-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div data-aos="fade-down" className={`text-center mb-16 `}>
                        <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                            A comprehensive overview of my technical expertise and proficiency levels
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Category Tabs */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12`}>
                        {categories.map((category, index) => (
                            <button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${activeCategory === category.key
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                                    : 'theme-bg-secondary theme-text-secondary hover:theme-text-primary theme-border border-2'
                                    }`}
                                style={{ animationDelay: `${400 + index * 100}ms` }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{category.icon}</span>
                                    <span>{category.label}</span>
                                </div>

                                {/* Active indicator */}
                                {activeCategory === category.key && (
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                                )}

                                {/* Hover effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                        {/* Skills Cards Grid */}
                        <div className={`lg:col-span-1 xl:col-span-2 `}>
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categories.find(c => c.key === activeCategory)?.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                                        {categories.find(c => c.key === activeCategory)?.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold theme-text-primary">
                                            {categories.find(c => c.key === activeCategory)?.label} Skills
                                        </h3>
                                        <p className="theme-text-secondary text-sm">
                                            {skills[activeCategory]?.length} technologies
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {skills[activeCategory]?.map((skill, index) => (
                                    <SkillsCard
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                        activeCategory={activeCategory}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className={`mt-16 text-center`}>
                        <Card className="inline-block px-8 py-4">
                            <div className="flex items-center gap-4 theme-text-secondary">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm">Currently learning: AI/ML, Cloud Architecture</span>
                                </div>
                                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                                <span className="text-sm">Always eager to learn new technologies</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

