import Link from 'next/link';
import { GitHubIcon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export const metadata = {
    title: 'Projects — MD Jihad Hossain',
    description:
        'Explore all projects by MD Jihad Hossain — full-stack web applications built with React, Next.js, Node.js, and modern web technologies.',
    openGraph: {
        title: 'Projects — MD Jihad Hossain',
        description:
            'Explore all projects by MD Jihad Hossain — full-stack web applications built with React, Next.js, Node.js, and modern web technologies.',
        type: 'website',
    },
};

export default function ProjectsPage() {
    return (
        <main className="pt-24 pb-24 bg-void min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-14">
                    <div className="font-press text-[10px] sm:text-xs text-gold glow-gold tracking-wider">
                        ▶ ARCADE — PORTFOLIO
                    </div>
                    <h1 className="font-press text-lg sm:text-2xl text-ink mt-4 sm:mt-5 animate-flicker">
                        All Projects
                    </h1>
                    <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5" aria-hidden="true">
                        <span className="w-2 h-2 bg-neon" />
                        <span className="text-mute font-mono text-xs sm:text-sm">- - - -</span>
                        <span className="w-2 h-2 bg-pixie" />
                    </div>
                    <p className="text-mute font-mono text-sm mt-5 max-w-xl mx-auto leading-relaxed">
                        A complete collection of applications I have built — each one designed,
                        developed, and deployed end to end.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={index * 130}>
                            <ProjectCard project={project} index={index} />
                        </Reveal>
                    ))}
                </div>

                {/* back home */}
                <Reveal delay={150}>
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a
                            href="https://github.com/codewithjihad1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pixel-press inline-flex items-center gap-3 px-7 py-4 bg-panel text-ink font-press text-[10px] sm:text-xs hover:text-grape">
                            <GitHubIcon />
                            VIEW MORE ON GITHUB
                        </a>
                        <Link
                            href="/#contact"
                            className="pixel-press inline-flex items-center gap-3 px-7 py-4 bg-neon text-void font-press text-[10px] sm:text-xs hover:bg-neon">
                            ▶ CONTACT ME
                        </Link>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
