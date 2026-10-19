import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { experience } from '@/data/portfolio';

function QuestCard({ job, isLast }) {
    return (
        <div className="relative flex gap-6 sm:gap-8">
            {/* timeline */}
            <div className="flex flex-col items-center">
                <div
                    className={`w-4 h-4 border-2 border-line flex-shrink-0 z-10 rotate-45 ${
                        job.current ? 'bg-neon glow-neon' : 'bg-void'
                    }`}
                />
                {!isLast && <div className="w-0.5 flex-1 bg-line mt-2" />}
            </div>

            {/* quest card */}
            <div className="flex-1 pb-12">
                <div className="pixel-panel bg-panel">
                    {/* card header strip */}
                    <div className="flex items-center justify-between border-b-2 border-line px-5 py-2.5 bg-void">
                        <span className="font-press text-[8px] sm:text-[9px] text-gold tracking-widest">
                            ★ QUEST {String(job.id).padStart(2, '0')}
                        </span>
                        <span
                            className={`font-press text-[7px] sm:text-[8px] px-2.5 py-1 border-2 border-line flex items-center gap-1.5 ${
                                job.current ? 'bg-neon/15 text-neon' : 'bg-void2 text-mute'
                            }`}>
                            {job.current && (
                                <span className="w-1.5 h-1.5 bg-neon animate-pulse" aria-hidden="true" />
                            )}
                            {job.current ? 'IN PROGRESS' : job.type.toUpperCase()}
                        </span>
                    </div>

                    <div className="p-5 sm:p-6">
                        <h3 className="font-press text-[10px] sm:text-xs text-ink">{job.position.toUpperCase()}</h3>
                        <p className="font-mono text-sm text-aqua mt-2">
                            @ {job.company} · {job.location}
                        </p>
                        <p className="font-mono text-xs text-mute mt-1.5">⏱ {job.duration}</p>

                        <p className="text-mute font-mono text-sm leading-relaxed mt-5">{job.description}</p>

                        {/* rewards */}
                        <h4 className="font-press text-[8px] text-gold tracking-widest mt-6 mb-3">
                            ◆ REWARDS EARNED:
                        </h4>
                        <ul className="space-y-2.5">
                            {job.achievements.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-mute font-mono text-sm leading-relaxed">
                                    <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true">
                                        ★
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* loot */}
                        <h4 className="font-press text-[8px] text-pixie glow-pixie tracking-widest mt-6 mb-3">
                            ◆ LOOT / TECHNOLOGIES:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-void2 border-2 border-line px-2.5 py-1 font-mono text-[11px] text-ink">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 bg-void2 border-y-2 border-line">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    stage="STAGE 03"
                    eyebrow="ADVENTURE HISTORY"
                    title="Quest Log"
                    sub="Every role is a quest. Every bug fixed, a monster slain."
                />

                <div className="max-w-3xl mx-auto">
                    {experience.map((job, index) => (
                        <Reveal key={job.id}>
                            <QuestCard job={job} isLast={index === experience.length - 1} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
