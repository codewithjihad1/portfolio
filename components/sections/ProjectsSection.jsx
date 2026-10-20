import { GitHubIcon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-void">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    stage="04"
                    eyebrow="PORTFOLIO"
                    title="Featured Projects"
                    sub="A selection of applications I have built — from concept and design to deployment."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={index * 130}>
                            <ProjectCard project={project} index={index} />
                        </Reveal>
                    ))}
                </div>

                {/* LOAD MORE */}
                <div className="text-center mt-14">
                    <a
                        href="https://github.com/codewithjihad1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-press inline-flex items-center gap-3 px-7 py-4 bg-panel text-ink font-press text-[10px] sm:text-xs hover:text-grape">
                        <GitHubIcon />
                        VIEW MORE ON GITHUB
                    </a>
                </div>
            </div>
        </section>
    );
}
