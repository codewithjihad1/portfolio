import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLinkIcon, GitHubIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found — MD Jihad Hossain" };
    return {
        title: `${project.title} — MD Jihad Hossain`,
        description: project.description,
        openGraph: {
            title: `${project.title} — MD Jihad Hossain`,
            description: project.description,
            type: "website",
        },
    };
}

export default async function ProjectDetailsPage({ params }) {
    const { slug } = await params;
    const index = projects.findIndex((p) => p.slug === slug);
    if (index === -1) notFound();
    const project = projects[index];

    const prev = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    const infoRows = [
        { label: "ROLE", value: project.role },
        { label: "YEAR", value: project.year },
        { label: "TYPE", value: project.category },
        { label: "STATUS", value: "Live · Deployed" },
    ];

    return (
        <main className="pt-24 pb-24 bg-void min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* breadcrumb */}
                <Reveal className="mb-10">
                    <Link
                        href="/projects"
                        className="pixel-press inline-flex items-center gap-2 bg-panel px-4 py-2.5 font-press text-[8px] sm:text-[9px] text-ink hover:text-aqua">
                        <span aria-hidden="true">←</span> BACK TO PROJECTS
                    </Link>
                </Reveal>

                {/* banner */}
                <Reveal delay={80}>
                    <div className="pixel-panel bg-panel">
                        {/* window title bar */}
                        <div className="flex items-center justify-between border-b-2 border-line bg-void px-4 py-2.5">
                            <span className="font-press text-[8px] text-aqua tracking-widest">
                                [ ] {project.slug.toUpperCase()}.PROJECT
                            </span>
                            <span className="flex gap-1.5" aria-hidden="true">
                                <span className="w-2.5 h-2.5 bg-pixie" />
                                <span className="w-2.5 h-2.5 bg-gold" />
                                <span className="w-2.5 h-2.5 bg-neon" />
                            </span>
                        </div>

                        {/* gradient cartridge screen */}
                        <div className="scanlines border-b-2 border-line bg-void2 px-4 pt-5">
                            {/* contact strip, same as project card */}
                            <div className="flex gap-1 mb-5" aria-hidden="true">
                                {[...Array(6)].map((_, i) => (
                                    <span key={i} className="h-3 flex-1 bg-line/50" />
                                ))}
                            </div>

                            <div
                                className={`scanlines border-2 border-line bg-gradient-to-br ${project.gradient} px-6 py-16 sm:py-20 text-center`}>
                                <span className="inline-block font-press text-[7px] px-2.5 py-1.5 border-2 border-void/40 bg-void/90 text-void tracking-widest">
                                    {project.category.toUpperCase()}
                                </span>
                                <h1
                                    className="font-press text-lg sm:text-2xl lg:text-3xl text-void mt-6 leading-relaxed px-2"
                                    style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.35)" }}>
                                    {project.title.toUpperCase()}
                                </h1>
                                <p className="font-press text-[8px] sm:text-[9px] text-void/90 mt-5 tracking-widest">
                                    {project.role.toUpperCase()} · {project.year}
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* content */}
                <div className="grid lg:grid-cols-3 gap-10 mt-14">
                    {/* left — overview + features */}
                    <div className="lg:col-span-2 space-y-10">
                        <Reveal delay={120}>
                            <section>
                                <h2 className="font-press text-[9px] text-gold glow-gold tracking-widest mb-5">
                                    ◆ OVERVIEW
                                </h2>
                                <p className="text-mute font-mono text-sm leading-relaxed">
                                    {project.overview}
                                </p>
                            </section>
                        </Reveal>

                        <Reveal delay={160}>
                            <section>
                                <h2 className="font-press text-[9px] text-gold glow-gold tracking-widest mb-5">
                                    ◆ KEY FEATURES:
                                </h2>
                                <ul className="pixel-panel bg-panel p-5 sm:p-6 space-y-4">
                                    {project.keyFeatures.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2.5 text-mute font-mono text-sm leading-relaxed">
                                            <span
                                                className="text-gold mt-0.5 flex-shrink-0"
                                                aria-hidden="true">
                                                ★
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>
                    </div>

                    {/* right — info sidebar */}
                    <Reveal delay={200}>
                        <aside className="pixel-panel bg-panel p-5 sm:p-6 space-y-7">
                            <section>
                                <h2 className="font-press text-[9px] text-aqua tracking-widest mb-4">
                                    ◆ PROJECT INFO
                                </h2>
                                <div className="space-y-3">
                                    {infoRows.map(({ label, value }) => (
                                        <div
                                            key={label}
                                            className="flex items-center justify-between gap-3 bg-void border-2 border-line px-3 py-2.5">
                                            <span className="font-press text-[7px] text-pixie tracking-widest shrink-0">
                                                ▸ {label}
                                            </span>
                                            <span className="font-mono text-xs text-ink text-right">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="font-press text-[9px] text-pixie glow-pixie tracking-widest mb-4">
                                    ◆ TECHNOLOGIES:
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-void2 border-2 border-line px-2.5 py-1 font-mono text-[11px] text-ink">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* actions */}
                            <div className="space-y-3 pt-1">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pixel-press w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-neon text-void font-press text-[9px] sm:text-[10px] hover:bg-neon">
                                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                                    ▶ LIVE DEMO
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pixel-press w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-panel text-ink font-press text-[9px] sm:text-[10px] hover:text-aqua">
                                    <GitHubIcon className="w-4 h-4" />
                                    SOURCE CODE
                                </a>
                            </div>
                        </aside>
                    </Reveal>
                </div>

                {/* prev / next navigation */}
                <Reveal delay={120}>
                    <div className="grid sm:grid-cols-2 gap-5 mt-16">
                        <Link
                            href={`/projects/${prev.slug}`}
                            className="pixel-press bg-panel p-5 group">
                            <span className="block font-press text-[7px] text-mute tracking-widest mb-2">
                                ← PREVIOUS PROJECT
                            </span>
                            <span className="block font-press text-[9px] sm:text-[10px] text-ink group-hover:text-neon transition-colors">
                                {prev.title.toUpperCase()}
                            </span>
                        </Link>
                        <Link
                            href={`/projects/${next.slug}`}
                            className="pixel-press bg-panel p-5 text-right group">
                            <span className="block font-press text-[7px] text-mute tracking-widest mb-2">
                                NEXT PROJECT →
                            </span>
                            <span className="block font-press text-[9px] sm:text-[10px] text-ink group-hover:text-neon transition-colors">
                                {next.title.toUpperCase()}
                            </span>
                        </Link>
                    </div>
                </Reveal>

                {/* back to all projects */}
                <Reveal delay={160}>
                    <div className="text-center mt-14">
                        <Link
                            href="/projects"
                            className="pixel-press inline-flex items-center gap-3 px-7 py-4 bg-panel text-ink font-press text-[10px] sm:text-xs hover:text-grape">
                            VIEW ALL PROJECTS
                        </Link>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
