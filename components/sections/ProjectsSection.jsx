import { projects } from "@/data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "@/components/Icons";

function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
      >
        <div className="text-center px-6">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 text-sm font-semibold rounded-xl transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects I&apos;ve built, showcasing my skills in full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/codewithjihad1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 font-semibold rounded-xl transition-all"
          >
            <GitHubIcon />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
