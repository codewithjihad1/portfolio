import React, { useState } from 'react';
import { Card, Button, Modal } from '../UI';
import { projects } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks';

const ProjectsSection = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    const categories = ['all', 'Full Stack', 'Frontend', 'Backend'];
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const openProjectModal = (project) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20 theme-bg-secondary"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
                            Featured{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                            A collection of my recent work showcasing different technologies and problem-solving approaches
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Filter Buttons */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === category
                                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                                        : 'theme-bg-primary theme-text-secondary hover:theme-text-primary theme-border border'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${400 + index * 150}ms` }}
                            >
                                <Card className="h-full group">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={project.image || "/api/placeholder/400/250"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                Featured
                                            </div>
                                        )}

                                        {/* Quick Actions */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                                                title="Live Demo"
                                            >
                                                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                            <a
                                                href={project.githubRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                                                title="GitHub Repository"
                                            >
                                                <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium theme-accent bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                                                {project.category}
                                            </span>
                                            <span className="text-sm theme-text-secondary">{project.duration}</span>
                                        </div>

                                        <h3 className="text-xl font-bold theme-text-primary mb-2">{project.title}</h3>
                                        <p className="theme-text-secondary text-sm mb-4 flex-1">{project.shortDescription}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs theme-bg-secondary theme-text-secondary px-2 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="text-xs theme-text-secondary">
                                                    +{project.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Button */}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => openProjectModal(project)}
                                            className="w-full"
                                        >
                                            View Details
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Detail Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={closeProjectModal}
                title={selectedProject?.title}
                size="xl"
            >
                {selectedProject && (
                    <div className="space-y-6">
                        {/* Project Image */}
                        <img
                            src={selectedProject.image || "/api/placeholder/600/300"}
                            alt={selectedProject.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />

                        {/* Project Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold theme-text-primary mb-2">Description</h4>
                                <p className="theme-text-secondary text-sm">{selectedProject.detailedDescription}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold theme-text-primary mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs theme-bg-secondary theme-text-secondary px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h4 className="font-semibold theme-text-primary mb-3">Key Features</h4>
                            <ul className="space-y-2">
                                {selectedProject.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 theme-text-secondary text-sm">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Button
                                onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                                className="flex-1"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => window.open(selectedProject.githubRepo, '_blank')}
                                className="flex-1"
                            >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default ProjectsSection;
