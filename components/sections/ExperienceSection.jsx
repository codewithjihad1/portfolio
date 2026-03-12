import { experience } from '@/data/portfolio';

function ExperienceCard({ job, isLast }) {
    return (
        <div className="relative flex gap-6">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
                <div
                    className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1 z-10 ${
                        job.current
                            ? 'bg-primary-600 border-primary-600 shadow-lg shadow-primary-600/40'
                            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
                    }`}
                />
                {!isLast && <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-1" />}
            </div>

            {/* Card */}
            <div className="flex-1 pb-10">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.position}</h3>
                            <p className="text-primary-600 font-semibold text-sm mt-0.5">{job.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                            <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                    job.current
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                                        : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                                }`}>
                                {job.current ? '● Current' : job.type}
                            </span>
                            <span className="text-xs text-slate-400 dark:text-slate-500">{job.location}</span>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <svg
                            className="w-4 h-4 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {job.duration}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{job.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                        {job.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="text-primary-600 mt-0.5 flex-shrink-0">▹</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">My Journey</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Work Experience</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        My professional journey and the roles that have shaped my skills.
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    {experience.map((job, index) => (
                        <ExperienceCard key={job.id} job={job} isLast={index === experience.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
