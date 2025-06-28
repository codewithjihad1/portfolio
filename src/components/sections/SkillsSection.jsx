import React from 'react';
import { Card, ProgressBar } from '../UI';
import { skills } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks';

const SkillsSection = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const skillCategories = [
        { title: 'Frontend Development', skills: skills.frontend, icon: '🎨' },
        { title: 'Backend Development', skills: skills.backend, icon: '⚙️' },
        { title: 'Tools & Technologies', skills: skills.tools, icon: '🛠️' }
    ];

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 theme-bg-primary"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                            My{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                Skills
                            </span>
                        </h2>
                        <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                            A showcase of my technical expertise and the technologies I work with
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <div
                                key={category.title}
                                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${200 + categoryIndex * 200}ms` }}
                            >
                                <Card hover={false} className="h-full">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl mb-3">{category.icon}</div>
                                        <h3 className="text-xl font-bold theme-text-primary">{category.title}</h3>
                                    </div>

                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skill.name}
                                                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                                                style={{ transitionDelay: `${500 + categoryIndex * 200 + skillIndex * 100}ms` }}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className="w-3 h-3 rounded-full"
                                                            style={{ backgroundColor: skill.color }}
                                                        ></div>
                                                        <span className="font-medium theme-text-primary">{skill.name}</span>
                                                    </div>
                                                    <span className="text-sm theme-text-secondary font-medium">
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <ProgressBar
                                                    percentage={skill.level}
                                                    color="primary"
                                                    size="sm"
                                                    showPercentage={false}
                                                    animated={isVisible}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Skills Summary */}
                    <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Card className="text-center">
                            <h3 className="text-2xl font-bold theme-text-primary mb-6">
                                Continuous Learning Journey
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold theme-accent">3+</div>
                                    <div className="theme-text-secondary">Years Experience</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold theme-accent">15+</div>
                                    <div className="theme-text-secondary">Technologies</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold theme-accent">50+</div>
                                    <div className="theme-text-secondary">Projects Completed</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
