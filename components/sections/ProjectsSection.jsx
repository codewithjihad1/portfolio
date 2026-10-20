import { ExternalLinkIcon, GitHubIcon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/portfolio';

/* cartridge color cycle */
const cartridgeColors = ['text-aqua glow-aqua', 'text-pixie glow-pixie', 'text-gold glow-gold'];

function ProjectCard({ project, index }) {
    const color = cartridgeColors[index % cartridgeColors.length];

    return (
        <div className="pixel-panel bg-panel flex flex-col transition-transform duration-200 hover:-translate-y-1">
            {/* cartridge top */}
            <div className="relative bg-void border-b-2 border-line px-5 pt-5">
                {/* contacts on top of the cartridge */}
                <div className="flex gap-1 mb-4" aria-hidden="true">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="h-3 flex-1 bg-line/50" />
                    ))}
                </div>

                <div className="scanlines border-2 border-line bg-void2 px-4 py-8 text-center">
                    <h3 className={`font-press text-[10px] sm:text-xs ${color} leading-relaxed`}>
                        {project.title.toUpperCase()}
                    </h3>
                    <span
                        className={`inline-block mt-4 font-press text-[7px] px-2.5 py-1.5 border-2 border-line bg-void text-mute tracking-widest`}>
                        {project.category.toUpperCase()}
                    </span>
                </div>
            </div>

            {/* content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <p className="text-mute font-mono text-[13px] leading-relaxed mb-5 flex-1">
                    {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="bg-void2 border-2 border-line px-2 py-0.5 font-mono text-[11px] text-ink">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="bg-void2 border-2 border-line px-2 py-0.5 font-mono text-[11px] text-mute">
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>

                {/* controls: SELECT / START */}
                <div className="flex gap-4">
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-press flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon text-void font-press text-[8px] sm:text-[9px] hover:bg-neon">
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                        ▶ LIVE DEMO
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-press flex items-center justify-center gap-2 px-4 py-3 bg-panel text-ink font-press text-[8px] sm:text-[9px] hover:text-aqua">
                        <GitHubIcon className="w-4 h-4" />
                        SOURCE CODE
                    </a>
                </div>
            </div>
        </div>
    );
}

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
