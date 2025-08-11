import { useState, useEffect } from 'react';
import { Card } from '../UI';
import { skills } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks';
import SkillsCard from './skills/SkillsCard';

const SkillsSection = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [animatedSkills, setAnimatedSkills] = useState({});

    // Animate skill bars when visible
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                const newAnimatedSkills = {};
                Object.keys(skills).forEach(category => {
                    newAnimatedSkills[category] = true;
                });
                setAnimatedSkills(newAnimatedSkills);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const categories = [
        { key: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-blue-500 to-purple-600' },
        { key: 'backend', label: 'Backend', icon: '⚙️', color: 'from-green-500 to-blue-600' },
        { key: 'tools', label: 'Tools & Others', icon: '🛠️', color: 'from-orange-500 to-red-600' }
    ];

    const getSkillIcon = (skillName) => {
        const iconMap = {
            'React': '⚛️',
            'JavaScript': '📜',
            'TypeScript': '📘',
            'HTML5': '🏗️',
            'CSS3': '🎨',
            'Tailwind CSS': '💨',
            'Next.js': '🔗',
            'Node.js': '🟢',
            'Express.js': '🚂',
            'MongoDB': '🍃',
            'REST APIs': '🌐',
            'Git': '📁',
            'Figma': '🎭',
            'VS Code': '💻',
            'Postman': '📮'
        };
        return iconMap[skillName] || '💡';
    };

    return (
        <section
            id="skills"
            ref={ref}
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
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                            A comprehensive overview of my technical expertise and proficiency levels
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Category Tabs */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Skills List */}
                        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Card className="p-8">
                                <div className="flex items-center gap-3 mb-8">
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

                                <div className="space-y-6">
                                    {skills[activeCategory]?.map((skill, index) => (
                                        <SkillsCard skill={skill} index={index} animatedSkills={animatedSkills} activeCategory={activeCategory} />
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Skills Visualization */}
                        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Card className="p-8 h-full">
                                <h3 className="text-2xl font-bold theme-text-primary mb-8 text-center">
                                    Skill Distribution
                                </h3>

                                {/* Circular Progress Rings */}
                                <div className="space-y-8">
                                    {skills[activeCategory]?.slice(0, 4).map((skill, index) => (
                                        <div key={skill.name} className="flex items-center gap-6">
                                            <div className="relative w-20 h-20 flex-shrink-0">
                                                {/* Background circle */}
                                                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                                    <path
                                                        className="theme-text-secondary opacity-20"
                                                        d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                    {/* Progress circle */}
                                                    <path
                                                        className={`transition-all duration-2000 ${skill.level >= 90 ? 'text-green-500' :
                                                                skill.level >= 75 ? 'text-blue-500' :
                                                                    skill.level >= 60 ? 'text-yellow-500' : 'text-gray-500'
                                                            }`}
                                                        strokeDasharray={`${animatedSkills[activeCategory] ? skill.level : 0}, 100`}
                                                        d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        style={{ transitionDelay: `${800 + index * 200}ms` }}
                                                    />
                                                </svg>

                                                {/* Center text */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-lg font-bold theme-text-primary">
                                                        {animatedSkills[activeCategory] ? skill.level : 0}%
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xl">{getSkillIcon(skill.name)}</span>
                                                    <h4 className="font-semibold theme-text-primary">{skill.name}</h4>
                                                </div>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-4 h-2 rounded-full transition-all duration-500 ${i < Math.floor(skill.level / 20)
                                                                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                                                                    : 'bg-gray-200 dark:bg-gray-700'
                                                                }`}
                                                            style={{ transitionDelay: `${1000 + index * 100 + i * 50}ms` }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Summary */}
                                <div className="mt-12 pt-8 border-t theme-border">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                                {skills[activeCategory]?.length || 0}
                                            </div>
                                            <div className="text-sm theme-text-secondary">Technologies</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                                {Math.round(skills[activeCategory]?.reduce((acc, skill) => acc + skill.level, 0) / skills[activeCategory]?.length) || 0}%
                                            </div>
                                            <div className="text-sm theme-text-secondary">Average Proficiency</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

